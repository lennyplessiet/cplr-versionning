$('.valider').on('click', function(){
    data = {
        "name": $('.nom').val(),
        "firstname": $('.prenom').val(),
        "email": $('.mail').val(),
        "phone": $('.numero').val(),
        "service": $('#service').val(),
        "message": $('.message').val()
    }
    $.ajax({
        type: "POST",
        url: "https://n8n.oriatec.fr/webhook-test/88d519cd-fd51-48cb-a7a5-4722d4aedd05",
        data: data,
        success: function (response) {
            console.log(response)
        }
    });
})