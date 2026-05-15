document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields before sending.';
        formMessage.style.color = '#FF6B6B';
        return;
      }

      formMessage.textContent = 'Thanks for reaching out! We will reply soon.';
      formMessage.style.color = '#A5F3FC';
      contactForm.reset();
    });
  }
});
