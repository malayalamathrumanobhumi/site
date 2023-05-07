$(document).ready(function() {
    // Fetch the header.html content and insert it into the header div
    $.get("../templates/page/header.html", function(data) {
      $("#header").html(data);
    });
    // Fetch the footer.html content and insert it into the footer div
    $.get("../templates/page/footer.html", function(data) {
      $("#footer").html(data);
    });
  });

  $(document).ready(function(){$.get("../templates/page/header.html",function(data){$("#header").html(data)}),$.get("../templates/page/footer.html",function(data){$("#footer").html(data)})});
