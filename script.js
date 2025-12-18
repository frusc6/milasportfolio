const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));



const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".project img").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});


// Header becomes black after the green area is out of sight
const header = document.querySelector("header");
const greenSection = document.querySelector(".green-section"); // <- this is your hero section now

if (greenSection) {
  const greenBottom = greenSection.offsetTop + greenSection.offsetHeight;
  const offset = 100; // adjust this number to make the nav turn black earlier

  window.addEventListener("scroll", () => {
    if (window.scrollY >= greenBottom) {
      // Scrolled past green section → make header black
      header.classList.add("scrolled");
    } else {
      // Still over green section → transparent header
      header.classList.remove("scrolled");
    }
  });
}




