$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
  });
  $("#btn-coupon").click(function () {
    $("#disocount-bar").show();
    $(this).text("Applied");
    $(this).removeClass("btn-applied");
  });
});
