//para cerrar el modal
const modal = document.getElementById('modal');
const cerrar = document.getElementById('cerrar');
  
cerrar.addEventListener('click', function () {
    modal.style.display = 'none';
});

//enviar mail
(function() {
    emailjs.init("tTYD96_K0PD_IXq7J"); // public key
})();
  
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // evita que se recargue la página
  
emailjs.sendForm('service_7kta0ul', 'template_po6vau9', this)
    .then(() => {
        this.reset(); // limpia el formulario
        modal.style.display = 'block';
    }, (err) => {
        alert("Error al enviar: " + JSON.stringify(err));
    });
});
