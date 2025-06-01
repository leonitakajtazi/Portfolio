
  const swiper = new Swiper(".testimonials-slider", {
    loop: true, // Ky bën rrotullimin pa fund
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 2800,
      disableOnInteraction: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
      },
      568: {
        slidesPerView: 2,
      },
      924: {
        slidesPerView: 3,
      },
    },
  })

    const scrollBtn = document.getElementById("scrollToTopBtn");
  
    // Shfaq butonin kur scroll është më shumë se 100px
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2400) {
        scrollBtn.classList.remove("opacity-0", "invisible");
        scrollBtn.classList.add("opacity-100", "visible");
      } else {
        scrollBtn.classList.remove("opacity-100", "visible");
        scrollBtn.classList.add("opacity-0", "invisible");
      }
    });
  
    // Kthe lart faqen kur klikohet
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    function filterProjects(category) {
      // Merr të gjithë elementët e klasës 'project-item'
      const projects = document.querySelectorAll('.project-item');
      projects.forEach(item => {
        // Nëse zgjidhet "all" ose karikohen kartelat përkatëse
        if (category === 'all' || item.classList.contains(category)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
  
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')});