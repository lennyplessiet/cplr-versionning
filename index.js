tl = gsap.timeline()

$('.valider').on('click', function(){
    tl.to('.form', {
        width: 0,
        height: 0,
        padding: 0,
        opacity:0,
        duration: 0.3,
        ease: "ease-in-out"
    })
    tl.to('.loader', {
        opacity: 1,
        duration: 0.3,
        delay: 0.2,
        ease: "ease-in-out"
    })
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
            if(response['message'] == "Workflow was started"){
                setTimeout(function(){
                    tl.to('.loader', {
                        opacity: 0,
                        duration: 0.3,
                        delay: 0.2,
                        ease: "ease-in-out"
                    })
                    tl.to('.confirmation', {
                        opacity: 1,
                        scale: 1.5,
                        duration: 0.5,
                        ease: "elastic.out(1,0.3)"
                    })
                }, 1000)
            }else{
                tl.to('.loader', {
                    opacity: 1,
                    duration: 0.3,
                    delay: 0.2,
                    ease: "ease-in-out"
                })
            }
        },
        error: function(){
            setTimeout(function(){
                tl.to('.loader', {
                    opacity: 0,
                    duration: 0.3,
                    delay: 0.2,
                    ease: "ease-in-out"
                })
                tl.to('.erreur', {
                    opacity: 1,
                    scale: 1.5,
                    duration: 0.5,
                    ease: "elastic.out(1,0.3)"
                })
            }, 1000)
        }
    });
})