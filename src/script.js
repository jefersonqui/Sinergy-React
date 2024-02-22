document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.jobs__StyledTabButton-sc');
    const tabContents = document.querySelectorAll('.jobs__StylePanel-sc');
    
  
    // Agregar la clase 'active' al primer botón de pestaña y al primer contenido del panel al cargar la página
    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');
  
    tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Remover la clase 'active' de todos los botones
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar la clase 'active' solo al botón clicado
        button.classList.add('active');
  
        // Remover la clase 'active' de todos los contenidos
        tabContents.forEach(content => content.classList.remove('active'));
        // Agregar la clase 'active' solo al contenido correspondiente al botón clicado
        tabContents[index].classList.add('active');
      });
    });

    
  });

 
