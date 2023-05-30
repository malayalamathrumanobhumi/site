$(document).ready(function() {
  // Fetch the header.html content and insert it into the header div
  $.get("../../templates/content/header.html", function(data) {
    $("#header").html(data);
  });
  
  // Fetch the footer.html content and insert it into the footer div
  $.get("../../templates/content/footer.html", function(data) {
    $("#footer").html(data);
  });

  // Fetch the sidebar.html content and insert it into the sidebar div
  $.get("../../templates/content/sidebar.html", function(data) {
    $(".sidebar").html(data);
    
    // After inserting the sidebar template, load and execute the sidebar1.js script
    $.getScript("../../assets/scripts/sidebar1.js");
  });
});
