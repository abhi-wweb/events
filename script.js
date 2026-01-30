document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll to contact section
  window.scrollToContact = function () {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  };

  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return; // safety check

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const message = document.querySelector("textarea").value;

    const phoneNumber = "919322172415"; // +91 93221 72415

    const text =
      `Hello Vivek Events 👋\n\n` +
      `Name: ${name}\n` +
      `Message: ${message}`;

    const encodedText = encodeURIComponent(text);

    // WhatsApp URLs
    const whatsappAppURL = `whatsapp://send?phone=${phoneNumber}&text=${encodedText}`;
    const whatsappWebURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Try WhatsApp App first
    window.location.href = whatsappAppURL;

    // Fallback for desktop
    setTimeout(() => {
      window.open(whatsappWebURL, "_blank");
    }, 1000);

    this.reset();
  });

});
