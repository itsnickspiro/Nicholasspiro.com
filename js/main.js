/* Spiro Productions - Main JS */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          const icon = mobileToggle.querySelector("i");
          if (icon) {
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-times");
          }
        }

        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Portfolio Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      });
    });
  });

  // Lightbox Functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".lightbox-close");

  if (lightbox) {
    // Open Lightbox
    portfolioItems.forEach((item) => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        const title = item.querySelector("h3").innerText;
        const category = item.querySelector("p").innerText;

        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        lightboxCaption.innerHTML = `<h3>${title}</h3><p>${category}</p>`;
        document.body.style.overflow = "hidden"; // Disable scroll
      });
    });

    // Close Lightbox
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scroll
    });

    // Close on clicking outside
    window.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.style.display === "block") {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  // Sticky Header Effect
  const header = document.querySelector(".main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
      header.style.padding = "15px 0";
    } else {
      header.style.boxShadow = "none";
      header.style.padding = "20px 0";
    }
  });

  // Hero Carousel
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");

  if (slides.length > 0) {
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds per slide

    const showSlide = (index) => {
      slides.forEach((slide) => slide.classList.remove("active"));
      dots.forEach((dot) => dot.classList.remove("active"));

      slides[index].classList.add("active");
      dots[index].classList.add("active");
      currentSlide = index;
    };

    const nextSlide = () => {
      let next = (currentSlide + 1) % slides.length;
      showSlide(next);
    };

    let slideTimer = setInterval(nextSlide, slideInterval);

    // Manual navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        clearInterval(slideTimer);
        showSlide(index);
        slideTimer = setInterval(nextSlide, slideInterval);
      });
    });
  }
});
