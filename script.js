function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector('input[placeholder="Your Name"]').value;
  const email = document.querySelector('input[placeholder="Your Email"]').value;
  const message = document.querySelector('textarea').value;

  const phoneNumber = "919322172415"; // +91 93221 72415

  const text =
    `Hello Dream Events 👋\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Message: ${message}`;

  const encodedText = encodeURIComponent(text);

  // Opens WhatsApp APP
  const whatsappAppURL = `whatsapp://send?phone=${phoneNumber}&text=${encodedText}`;

  // Fallback for desktop / if app not available
  const whatsappWebURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  // Try app first
  window.location.href = whatsappAppURL;

  // Fallback after 1 second
  setTimeout(() => {
    window.open(whatsappWebURL, "_blank");
  }, 1000);

  this.reset();
});
