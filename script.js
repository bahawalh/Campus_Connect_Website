/* ===========================================================
   CampusConnect — script.js
   One shared JavaScript file linked by every page (Task 2)
   =========================================================== */

// 1) Highlight the current page's nav link (small interactive/UX feature)
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("nav.main-nav a");
  var here = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(function (link) {
    var target = link.getAttribute("href");
    if (target === here) {
      link.classList.add("active");
    }
  });

  // 2) Show the current year in the footer automatically
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3) Student Enquiry form validation (Optional feature, Section 7)
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // one-tier prototype: no server, so we stop the real submit

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();
      var msgBox = document.getElementById("form-message");

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name === "" || email === "" || message === "") {
        msgBox.textContent = "Please fill in all fields before submitting.";
        msgBox.className = "error";
        return;
      }

      if (!emailPattern.test(email)) {
        msgBox.textContent = "Please enter a valid email address.";
        msgBox.className = "error";
        return;
      }

      msgBox.textContent =
        "Thank you, " + name + "! Your enquiry has been received.";
      msgBox.className = "success";
      form.reset();
    });
  }
});
