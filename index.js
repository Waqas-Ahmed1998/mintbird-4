$(document).ready(function () {
  $("#btn-login").click(function () {
    $("#background").show();
    $("#popup-wrapper").show();
  });
  $("#cross").click(function () {
    $("#background").hide();
    $("#popup-wrapper").hide();
  });
  $("#background").click(function () {
    $(this).hide();

    $("#popup-wrapper").hide();
  });
});
