//select2
$(document).ready(function() {
    $('.select-tecnologias').select2({
      placeholder: "Selecciona tecnologías",
      width: '100%'  // Asegura que se ajuste al ancho del contenedor Bootstrap
    });
});

function desplegarMenu() {
  const menu = document.getElementById('opcionesMenu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

