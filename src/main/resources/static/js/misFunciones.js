$(document).ready(function() {
    traerPatineta();
});

function traerPatineta() {
    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/skate/skate",
        type:"GET",
        dataType:"JSON",
        success: function(respuesta) {
            listarPatineta(respuesta.items)
        }
    });
}

function listarPatineta(items) {
    let myTable = '<div class="container"><div class="row">';
    for (i=0;i<items.length;i++) {
        myTable += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${items[i].brand}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${items[i].model}</h6>
                <p class="card-text">${items[i].name}</p>
                <p class="card-text">${items[i].category_id.name}</p>
                <button class="btn btn-danger" onclick='borrarPatineta(${items[i].id})'>Borrar</button>
            </div>
        </div>
        `
    }
    myTable += "</div></div>"
    $("#patineta").append(myTable);
}

function guardarPatineta() {
    let myData = {
        id: $("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    
    let dataToSend = JSON.stringify(myData); 

    $.ajax({
        url: "https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "POST",
        data: myData,
        datatype: 'JSON',
        success: function(response) {
            $("#patineta").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerPatineta();
            alert("Se ha guardado el dato");
        }
    });
}

function editarPatineta() {
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };

    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/skate/skate",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success: function(response) {
            $("#patineta").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerPatineta();
            alert("Se ha actualizado el dato");
        }
    });
}

function borrarPatineta(idElemento) {
    let myData = {
        id:idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/skate/skate",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta) {
            $("#patineta").empty();
            traerPatineta();
            alert("Se ha eliminado");
        }
    });
}

//Funciones Categoria
$(document).ready(function() {
    traerCategoria();
});

function traerCategoria() {
    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/category/category",
        type:"GET",
        dataType:"JSON",
        success: function(respuesta) {
            listarCategoria(respuesta.items)
        }
    });
}

function listarCategoria(items) {
    let myTable = '<div class="container"><div class="row">';
    for (i=0;i<items.length;i++) {
        myTable += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${items[i].name}</h5>
                <p class="card-text">${items[i].description}</p>
                <button class="btn btn-danger" onclick='borrarCategoria(${items[i].id})'>Borrar</button>
            </div>
        </div>
        `
    }
    myTable += "</div></div>"
    $("#categoria").append(myTable);
}

function guardarCategoria() {
    let myData = {
        id: $("#idCat").val(),
        name:$("#nameCat").val(),
        description:$("#description").val(),
    };
    
    let dataToSend = JSON.stringify(myData); 

    $.ajax({
        url: "https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/category/category",
        type: "POST",
        data: myData,
        datatype: 'JSON',
        success: function(response) {
            $("#categoria").empty();
            $("#idCat").val("");
            $("#nameCat").val("");
            $("#description").val("");
            traerCategoria();
            alert("Se ha guardado el dato");
        }
    });
}

function editarCategoria() {
    let myData={
        id:$("#idCat").val(),
        name:$("#nameCat").val(),
        description:$("#description").val(),
    };

    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/category/category",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success: function(response) {
            $("#categoria").empty();
            $("#idCat").val("");
            $("#nameCat").val("");
            $("#description").val("");
            traerCategoria();
            alert("Se ha actualizado el dato");
        }
    });
}

function borrarCategoria(idElemento) {
    let myData = {
        id:idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/category/category",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta) {
            $("#categoria").empty();
            traerCategoria();
            alert("Se ha eliminado");
        }
    });
}


//Funciones Cliente
$(document).ready(function() {
    traerCliente();
});

function traerCliente() {
    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        dataType:"JSON",
        success: function(respuesta) {
            listarCliente(respuesta.items)
        }
    });
}

function listarCliente(items) {
    let myTable = '<div class="container"><div class="row">';
    for (i=0;i<items.length;i++) {
        myTable += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${items[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${items[i].age}</h6>
                <p class="card-text">${items[i].email}</p>
                <button class="btn btn-danger" onclick='borrarCliente(${items[i].id})'>Borrar</button>
            </div>
        </div>
        `
    }
    myTable += "</div></div>"
    $("#cliente").append(myTable);
}

function guardarCliente() {
    let myData={
        id:$("#idCli").val(),
        name:$("#nameCli").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };

    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: myData,
        datatype: 'JSON',
        success: function(response) {
            $("#cliente").empty();
            $("#idCli").val("");
            $("#nameCli").val("");
            $("#email").val("");
            $("#age").val("");
            traerCliente();
            alert("Se ha guardado el dato");
        }
    });
}

function editarCliente() {
    let myData={
        id:$("#idCli").val(),
        name:$("#nameCli").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    
    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success: function(response) {
            $("#cliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerCliente();
            alert("Se ha actualizado el dato");
        }
    });
}

function borrarCliente(idCliente) {
    let myData = {
        id:idCliente
    };

    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta) {
            $("#cliente").empty();
            traerCliente();
            alert("Se ha eliminado");
        }
    });
}

//Funciones Mensaje
$(document).ready(function() {
    traerMensaje();
});

function traerMensaje() {
    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        dataType:"JSON",
        success: function(respuesta) {
            listarMensaje(respuesta.items)
        }
    });
}

function listarMensaje(items) {
    let myTable = '<div class="container"><div class="row">';
    for (i=0;i<items.length;i++) {
        myTable += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p class="card-text">${items[i].messagetext}</p>
                <button class="btn btn-danger" onclick='borrarMensaje(${items[i].id})'>Borrar</button>
            </div>
        </div>
        `
    }
    myTable += "</div></div>"
    $("#mensaje").append(myTable);
}

function guardarMensaje() {
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: myData,
        datatype: 'JSON',
        success: function(response) {
            $("#mensaje").empty();
            $("#idMessage").val("");
            $("#messagetext").val("");
            traerMensaje();
            alert("Se ha guardado el dato");
        }
    });
}

function editarMensaje() {
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success: function(response) {
            $("#mensaje").empty();
            $("#idMessage").val("");
            $("#messagetext").val("");
            traerMensaje();
            alert("Se ha actualizado el dato");
        }
    });
}

function borrarMensaje(idMensaje) {
    let myData = {
        id:idMensaje
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta) {
            $("#mensaje").empty();
            traerMensaje();
            alert("Se ha eliminado");
        }
    });
}

//Función reservas
$(document).ready(function() {
    traerReserva();
});

function traerReserva() {
    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/reservation/reservation",
        type:"GET",
        dataType:"JSON",
        success: function(respuesta) {
            listarReserva(respuesta.items)
        }
    });
}

function listarReserva(items) {
    let myTable = '<div class="container"><div class="row">';
    for (i=0;i<items.length;i++) {
        myTable += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${items[i].startDate}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${items[i].devolutionDate}</h6>
                <p class="card-text">${items[i].status}</p>
                <p class="card-text">${items[i].idClient}</p>
                <p class="card-text">${items[i].idSkate}</p>
                <button class="btn btn-danger" onclick='borrarReserva(${items[i].id})'>Borrar</button>
            </div>
        </div>
        `
    }
    myTable += "</div></div>"
    $("#reserva").append(myTable);
}

function guardarReserva() {
    let myData = {
        id: $("#id").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        idClient:$("#idClient").val(),
        idSkate:$("#idSkate").val(),
    };
    
    let dataToSend = JSON.stringify(myData); 

    $.ajax({
        url: "https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/reservation/reservation",
        type: "POST",
        data: myData,
        datatype: 'JSON',
        success: function(response) {
            $("#reserva").empty();
            $("#id").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            $("#idClient").val("");
            $("#idSkate").val("");
            traerReserva();
            alert("Se ha guardado el dato");
        }
    });
}

function editarReserva() {
    let myData={
        id: $("#id").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        idClient:$("#idClient").val(),
        idSkate:$("#idSkate").val(),
    };

    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/reservation/reservation",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success: function(response) {
            $("#reserva").empty();
            $("#id").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            $("#idClient").val("");
            $("#idSkate").val("");
            traerReserva();
            alert("Se ha actualizado el dato");
        }
    });
}

function borrarReserva(idElemento) {
    let myData = {
        id:idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g2aa0e4c375fb30-dbreto1.adb.ap-melbourne-1.oraclecloudapps.com/ords/admin/reservation/reservation",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        dataType:"JSON",
        success:function(respuesta) {
            $("#reserva").empty();
            traerReserva();
            alert("Se ha eliminado");
        }
    });
}
