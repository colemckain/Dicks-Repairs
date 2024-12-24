document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("YOUR_USER_ID");

  document.getElementById('appointmentForm').addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.send("service_0hkp1tt", "template_uip29uo", {
          from_name: document.getElementById('name').value,
          to_email: document.getElementById('email').value,
          appointment_date: document.getElementById('date').value
      })
      .then(function(response) {
          alert("Email sent successfully!");
      }, function(error) {
          console.log("Error: ", error);
          alert("Failed to send the email. Please check the console for details.");
      });
  });
});
