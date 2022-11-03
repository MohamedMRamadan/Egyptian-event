$(document).ready(function () {
  $("#singerHolder h2").click(function (e) {
    $(e.target).next().slideToggle(700);
    $(e.target).next().siblings("p").slideUp(700);
  });
  $("#btnUp").click(function () {
    $("html , body").animate({ scrollTop: 0 }, 1000);
  });
  $("#nav-toggle").click(function (e) {
    let bar = $("#nav-toggle").offset().left;
    if (bar == 0) {
      $("#event-nav").animate({ left: 0 }, 1000);
      $("#event-nav span").html("Close");
      $("#nav-toggle i").removeClass("fa-bars");
      $("#nav-toggle i").addClass("fa-x");
    } else {
      $("#event-nav").animate({ left: -250 }, 1000);
      $("#event-nav span").html("Open");
      $("#nav-toggle i").addClass("fa-bars");
      $("#nav-toggle i").removeClass("fa-x");
    }
  });
  $(window).scroll(function () {
    let barOffset = $("#nav-toggle").offset().top;
    let headerHeight = $("#event-header").height();
    if (barOffset > headerHeight - $("#nav-toggle").height()) {
      $("#nav-toggle span").css({ display: "none" });
      $("#nav-toggle").addClass("toggle-edit");
      $("#btnUp").fadeIn();
    } else {
      $("#btnUp").fadeOut();
      $("#nav-toggle span").css({ display: "inline-block" });
      $("#nav-toggle").removeClass("toggle-edit");
    }
  });

  // to calculate how many characters remaining

  let textArea = document.querySelector("textarea");
  textArea.addEventListener("input", function () {
    let textLength = textArea.value.length;
    let result = 100 - textLength;
    $("#character").html(result);
  });

  $(`a[href^="#"]`).click(function (e) {
    let eHref = $(e.target).attr("href");
    let eOffset = $(`${eHref}`).offset().top;
    $("html , body").animate({ scrollTop: `${eOffset}` }, 1000);
  });
});
