
setTimeout(popup, 10000);

function popup() {
	Swal.fire({
    
    title: 'Win a special prize',
    text: "Before you go try your luck by spinning fortune the wheel ",

    imageUrl: 'https://media.giphy.com/media/eizrMRMxzlC6c/giphy.gif',
    background: '#fff url(/images/trees.png)',
    backdrop: `
        #80
        
        
    `,
    imageWidth: 400,
    footer: 'Powered by -<a href="https://www.huloq.com"> Huloq</a>',
    imageHeight: 200,
    imageAlt: 'Custom image',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Spin the wheel😀',
    cancelButtonText: 'No, I don\'t feel lucky'
    }).then((result) => {
    if (result.value) {
        location.replace("http://api.whatsapp.com/send?phone=917709090319&text=Hey, I was just checking out the following product "+window.location.href+"%0a%0aCan you please send my gift?%0a%0aThis request was generated using WhatsApp tool by Huloq");

    }
    })

    }

// Get the modal
var modal = document.getElementById('login_modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
