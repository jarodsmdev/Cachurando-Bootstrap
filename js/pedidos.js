

$(document).ready(function(){
    $('#table').DataTable();


    $('#send_form').on('submit', function(e){
        e.preventDefault();
        Swal.fire(
            {title: "Gracias",
            icon: 'warning',}
        )
    })

})



