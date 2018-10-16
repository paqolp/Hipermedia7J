$(function () {
  var oevenation = "C"; //"C"=Crear
  var selected_index = -1; // Indice de el elemento seleccionado en la lista
  var tblEventos = localStorage.getItem("tblEventos"); //Retornar los datos almacenados
  tblEventos = JSON.parse(tblEventos); //Convertir String a Object
  if (tblEventos === null) // Si no hay datos, inicializar un array vacio
      tblEventos = [];

  function Create() {
    //Obtener los valores de la forma HTML y transformalos en String.
    var even = JSON.stringify({
      Image: $("#txtImagen").val(),
      Name: $("#txtName").val(),
      Descripcion: $("#txtDescripcion").val(),
      Actividades: $("#txtActividades").val(),
      NumAsistentes: $("#txtNumAsistentes").val(),
      Asistentes: $("#txtAsistentes").val(),
      Direccion: $("#txtDireccion").val()
    }); 
    //Añadir el objeto a la tabla
    tblEventos.push(even);
    //Almacenar los datos en el Local Storage
    localStorage.setItem("tblEventos", JSON.stringify(tblEventos));
    alert("Los datos han sido almacenados"); //Mensaje de alerta
    return true;
  }

  function Edit() {
    // Editar el item seleccionado en la tabla
    tblEventos[selected_index] = JSON.stringify({
        Image: $("#txtImagen").val(),
        Name: $("#txtName").val(),
        Descripcion: $("#txtDescripcion").val(),
        Actividades: $("#txtActividades").val(),
        NumAsistentes: $("#txtNumAsistentes").val(),
        Asistentes: $("#txtAsistentes").val(),
        Direccion: $("#txtDireccion").val()
    });
    //Almacenar los datos en el Local Storage
    localStorage.setItem("tblEventos", JSON.stringify(tblEventos)); 
    alert("Los datos han sido editados"); //Mensaje de alerta
    return true;
  }

  function Delete() {
    //Eliminar el elemento seleccionado en la tabla
    tblEventos.splice(selected_index, 1); 
    //Actualizar los datos del Local Storage
    localStorage.setItem("tblEventos", JSON.stringify(tblEventos)); 
    alert("Persona Eliminada"); //Mensaje de alerta
  }

  function List() {
    $("#listEventos").html("");
    for (var i in tblEventos) {
        var even = JSON.parse(tblEventos[i]);
        $("#listEventos ").append(
                "<div class='column is-one-third'>" +
                  "<div class='card large'>" +       
                    "<div class='card-image'>"+      
                      "<figure class='image'>"+    
                        "<img src=" + even.Image +" alt='Image'>"+   
                      "</figure>" +  
                    "</div>"+  
                    "<div class='card-content'>" +  
                      "<div class='media'>" +
                        "<div class='media-content'>" +
                          "<p class='title is-4 no-padding'>" + even.Name + "</p>" +
                        "</div>"+
                      "</div>" +
                      "<div class='content'>" + "Descripción: " +  "<br>" +
                          even.Descripcion +  "<br>" + "Actividades: " +  "<br>" +
                          even.Actividades + "<br>" + 
                      "</div>" +
                      "<div class='content'>" + "Numero de Asistentes: " +  "<br>"+
                        even.NumAsistentes + "<br>"+ "Asistentes: " +  "<br>"+
                        even.Asistentes + "<br>" + "Dirección: " +  "<br>"+
                        even.Direccion +
                  "</div>" +
                      "</div>" +
                      "<div class='control info'>" +
                    // " <a class='button is-info'><label for='modal1'>Ver mas</label></a>" +
                      "<img src='edit.png' heigth='20px' width='20px' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='delete.png' heigth='20px' width='20px'  alt='Delete" + i + "' class='btnDelete'/>" +
                      " </div>" +
                    " </div>"+
                  " </div>"               
              
                );
    } //Recorrer y agregar los items  HTML
  }

  $("#frmPerson").bind("submit", function () {
    if (oevenation === "C")
        return Create();
    else
        return Edit();
  }); //Función para decidir si se encuentra añadiendo o editando un item
  
  List();

  $(".btnEdit").bind("click", function () {
    oevenation = "E"; //"E" = Editar
    //Obtener el identificador del item a ser editado
    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
    // Convertir de JSON al formato adecuando para editarlos datos
    var even = JSON.parse(tblEventos[selected_index]); 
    $("#txtImagen").val(even.Image);
    $("#txtName").val(even.Name);
    $("#txtDescripcion").val(even.Descripcion);
    $("#txtActividades").val(even.Actividades);
    $("#txtNumAsistentes").val(even.NumAsistentes);
    $("#txtAsistentes").val(even.Asistentes);
    $("#txtDireccion").val(even.Direccion);
    $("#txtImagen").attr("readonly", "readonly");
    $("#txtName").focus();
  });

  $(".btnDelete").bind("click", function () {
    //Obtener el identificador del item a ser eliminado
    selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
    Delete(); //Eliminar el item
    List(); //Volver a listar los items en la tabla
  });
});

