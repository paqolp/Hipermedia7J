$(document).ready(function () {
    $("#comment-btn").on("click", function () {
        $("#formModal").modal('show');
    });

    $("#closeModal").on("click", function () {
        $("#formModal").modal('hide');
    });

    $('#formModal').on('hidden.bs.modal', function (e) {
        $("#formModal").modal('dispose');
        getMail();
    });

    function getMail(){
        return $("#email").val();
    }
});