const navBtn = document.getElementById("hamburgeBtn");
const navMenu = document.getElementById("navMenuJS");

navBtn.addEventListener("click", function() {
   navMenu.classList.toggle("active");
});

/**
 * 
 * Programacion del menu
*/


const tabBtns = document.querySelectorAll(".tab-btn");
const dishGrids = document.querySelectorAll(".dishes-grid")


dishGrids.forEach((grid, index) => {
  if (index !== 0) {
    grid.style.display = 'none';
  }
});


tabBtns.forEach(btn => {
      btn.addEventListener('click', function(){
         let targetCategory = btn.dataset.target;

         
         
            tabBtns.forEach(b => b.classList.remove('active'));
              this.classList.add('active');

              dishGrids.forEach(grid => {

                  if(grid.dataset.category === targetCategory){
                     grid.style.display = 'grid';
                     console.log(grid.dataset.target)
                  }else{
                     grid.style.display = 'none';
                  }
              });
      });

    
});

const revealSections = document.querySelectorAll('.hero, .menuSection, .gridAbout, .why-us, .booking-section');

// 2. Configurar el observador
const observerOptions = {
    root: null,         // Utiliza el viewport del navegador
    threshold: 0.15     // La animación se activa cuando el 15% de la sección es visible
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si la sección entra en pantalla
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            // Deja de observar la sección una vez revelada para ahorrar recursos
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 3. Aplicar el observador a cada sección e inicializar el estado oculto
revealSections.forEach(section => {
    section.classList.add('section-hidden');
    sectionObserver.observe(section);
});

