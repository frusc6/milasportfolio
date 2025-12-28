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


// =========================
// 3️⃣ Header color change with offset
// =========================
const header = document.querySelector("header");
const greenSection = document.querySelector(".green-section"); // hero section
const offset = 290; // adjust this to make nav turn black earlier

if (greenSection) {
  window.addEventListener("scroll", () => {
    const greenTop = greenSection.getBoundingClientRect().top;

    if (greenTop <= -offset) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}



document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-email');
    const emailAddress = "yourname@example.com"; // Replace with your actual email

    copyButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the page from jumping/reloading

        // Use the Clipboard API
        navigator.clipboard.writeText(emailAddress).then(() => {
            // Success! Let's give the user feedback
            const originalText = copyButton.innerText;
            copyButton.innerText = "Email Copied!";
            copyButton.style.backgroundColor = "#4CAF50"; // Optional: change color to green

            // Reset the button after 2 seconds
            setTimeout(() => {
                copyButton.innerText = originalText;
                copyButton.style.backgroundColor = ""; // Resets to original CSS
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert("Could not copy email automatically. Please copy it manually: " + emailAddress);
        });
    });
});
