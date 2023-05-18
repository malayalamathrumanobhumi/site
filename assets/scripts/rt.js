document.addEventListener("DOMContentLoaded", function() {
  // Fetch the header.html content and insert it into the header div
  fetch("../templates/root/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });

  // Fetch the footer.html content and insert it into the footer div
  fetch("../templates/root/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});

