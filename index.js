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
        url: "https://hook.eu2.make.com/9nj73z4de2cje4ks9b8vd269t1g1k1n8",
        data: data,
        success: function (response) {
            console.log(response)
        }
    });
})