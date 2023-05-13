$(document).ready(function() {
    // Fetch the header.html content and insert it into the header div
    $.get("../../templates/content/header.html", function(data) {
      $("#header").html(data);
    });
    // Fetch the footer.html content and insert it into the footer div
    $.get("../../templates/content/footer.html", function(data) {
      $("#footer").html(data);
    });

    // Fetch the footer.html content and insert it into the footer div
    $.get("../../templates/content/sidebar.html", function(data) {
      $(".sidebar").html(data);
    });
  });

