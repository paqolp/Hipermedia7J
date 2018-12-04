$(document).ready(function() {
    $.getScript('js/session.js', function() {
        checkCurrentSession(function(response) {
            // There is no current session ongoing on this computer
            // return to the index.html page
            if (response.data === null) {
                window.open('index.html', '_self');
            } else {
                // Set a handler for the logout button
                $('.logout').click(function() {
                    closeSession(function(response) {});
                });

                let userImagePath;

                // Load the basic user info
                $.post('php/user_info.php', function(response) {
                    let name = response.data.name.split(" ")[0] + " " + response.data.last_name.split(" ")[0];
                    userImagePath = response.data.image_path;

                    $('.user-min-name').text(name);
                    $('.user-min-email').text(response.data.email);
                    $('.user-min-image').attr('src', response.data.image_path);

                    M.updateTextFields();
                }, 'json');

                let url = new URL(window.location.href);

                $.post('php/activity.php', {id: url.searchParams.get("id")}, function(response) {

                    $('#send-comment').click(function() {
                        $.post('php/add_comment.php', {
                           id_activity: response.data.id_activity,
                           content: $('#comment-content').val().trim()
                        },
                        function(response) {
                            // Append the comment
                            $('#comments').append(`
                                <div class='input-field'>
                                    <img class='prefix comment-image circle' src='${userImagePath}'>
                                    <p class='comment-text'>${$('#comment-content').val().trim()}</p>
                                </div>
                            `);

                            // Clear the textbox of the comment
                            $('#comment-content').val('');
                        });
                    });

                    $('#submit-activity').click(function() {
                        $.post('php/submit_activity.php', {id: response.data.id_activity}, function(response) {
                        });

                        window.location.href = 'course.html';
                    });

                    $('#upload-file').change(function() {
                        let formData = new FormData();

                        formData.append('id_activity', response.data.id_activity);
                        formData.append('file', $('#upload-file').prop('files')[0]);

                        $.ajax({
                            url: 'php/add_file.php',
                            type: 'POST',
                            data: formData,
                            mimeType: "multipart/form-data",
                            contentType: false,
                            cache: false,
                            processData: false,
                            dataType: "json",
                            success: function (response) {
                                // TODO: FINISH
                                $('#files').append(`
                                    <li class='collection-item' id='list-file-${response.data.id}'>
                                        <div><a class='black-text'>${response.data.filename}</a>
                                            <a href='' onclick='deleteFile(${response.data.id}); return false;' class='right'><i class='material-icons black-text'>clear</i></a>
                                            <a href='' class='right'><i class='material-icons black-text'>file_download</i></a>
                                        </div>
                                    </li>
                                `);
                            }
                        });
                    });

                    $('#activity-dropdown-main').text(response.data.activity_title.split('.')[0].toUpperCase());
                    $('#activity-title').text(response.data.unit_title + ' - ' + response.data.activity_title);
                    $('#activity-deadline').text('Límite de entrega: ' + moment(response.data.deadline, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm:ss'));
                    $('#activity-slides').attr('src', response.data.slides_link);

                    // if (response.data.)
                    if (response.data.status === 'FINISHED') {
                        $('#upload-file').attr('disabled', true);
                        $('#lpm').removeClass('pink');
                        $('#lpm').addClass('grey');
                        $('#submit-activity').text('Cancelar actividad');
                    }

                    if (response.data.list_activities !== null) {
                        let activityDropdown = $('#activity-dropdown');

                        for (let index in response.data.list_activities) {
                            if (response.data.list_activities[index].status !== 'BLOCKED') {
                                activityDropdown.append(`
                                    <li><a class='pink white-text center-align' href='activity.html?id=${response.data.list_activities[index].id}'>${response.data.list_activities[index].title.split('.')[0].toUpperCase()}</a></li>
                                `);
                            }
                        }
                    }

                    if (response.data.list_files !== null) {
                        let filesList = $('#files');

                        for (let index in response.data.list_files) {
                            filesList.append(`
                                <li class='collection-item' id='list-file-${response.data.list_files[index].id}'>
                                    <div><a class='black-text'>${response.data.list_files[index].filename}</a>
                                        <a href='' onclick='deleteFile(${response.data.list_files[index].id}); return false;' class='right'><i class='material-icons black-text'>clear</i></a>
                                        <a href='' class='right'><i class='material-icons black-text'>file_download</i></a>
                                    </div>
                                </li>
                            `);
                        }
                    }

                    if (response.data.list_comments !== null) {
                        let commentsList = $('#comments');

                        for (let index in response.data.list_comments) {
                            commentsList.prepend(`
                                <div class='input-field'>
                                    <img class='prefix comment-image circle' src='${response.data.list_comments[index].image_path}'>
                                    <p class='comment-text'>${response.data.list_comments[index].content}</p>
                                </div>
                            `);
                        }
                    }
                }, 'json');

                // Materialize tooltip initialization
                $('.tooltipped').tooltip({
                    position: 'top',
                    margin: 48,
                    enterDelay: 0,
                    exitDelay: 0
                });
            }
        });
    });
});

function deleteFile(id_file) {
    $.post('php/delete_file.php', {id: id_file}, function(response) {
        $(`#list-file-${id_file}`).remove();
    }, 'json');

    return false;
}