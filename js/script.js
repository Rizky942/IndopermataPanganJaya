(function () {
  emailjs.init("aUVjaVRA0VpuOPaIj"); // Ganti dengan Public Key dari EmailJS
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman

  emailjs.sendForm("service_lfcnf9l", "template_n708xp5", this).then(
    function (response) {
      document.getElementById("success").innerHTML =
        "<div class='alert alert-success'>Message sent successfully!</div>";
      document.getElementById("contactForm").reset();
    },
    function (error) {
      document.getElementById("success").innerHTML =
        "<div class='alert alert-danger'>Failed to send message. Try again!</div>";
      console.error("Error:", error);
    }
  );
});
