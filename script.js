/* =========================
   NAVBAR ACTIVE LINK
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});

/* =========================
   SKILLS TABS
========================= */

const skillButtons = document.querySelectorAll(".skills-tabs button");

skillButtons.forEach((button) => {
  button.addEventListener("click", function () {
    skillButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    this.classList.add("active");
  });
});

/* =========================
   CONTACT FORM
========================= */

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields.");

      return;
    }

    alert("Thank you! Your message has been submitted.");

    contactForm.reset();
  });
}

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".strength-card, .skill, .project, .learning-box",
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================
   CURRENT YEAR
========================= */

const footerText = document.querySelector(".footer-bottom p");

if (footerText) {
  const currentYear = new Date().getFullYear();

  footerText.innerHTML = `© ${currentYear} Ahmed Shahab. All rights reserved.`;
}
