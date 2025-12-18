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


// Replace the old header scroll block with this:
const header = document.querySelector("header");
const greenSection = document.querySelector(".green-section"); // <- your green area

if (greenSection) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        // green area is out of view → make header black
        header.classList.add("scrolled");
      } else {
        // green area is in view → transparent header
        header.classList.remove("scrolled");
      }
    },
    { threshold: 0 } // triggers as soon as any part of green section leaves viewport
  );

  observer.observe(greenSection);
}

