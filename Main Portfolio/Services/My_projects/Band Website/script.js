
    function closeAlert() {
      document.getElementById("customAlert").classList.remove("active");
    }
  

let slideIndex = 0;
    const slides = document.querySelectorAll(".slideshow div");

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");
    }

    function nextSlide() {
      slideIndex = (slideIndex + 2) % slides.length;
      showSlide(slideIndex);
    }

    // Auto change every 5 seconds
    setInterval(nextSlide, 3000);