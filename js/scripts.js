$(document).ready(function() {
  $("#userHeight").submit(function(event){
    event.preventDefault();

    var feetInInches = parseInt($("#userFt").val())*12;
    var inches = parseInt($("#userIn").val());
    var totalHeight = feetInInches+inches;
    if (totalHeight<48){
      $(".kiddyRide").show();
      $(".teenRide").hide();
      $(".adultRide").hide();
    } else if (totalHeight<61){
      $(".kiddyRide").show();
      $(".teenRide").show();
      $(".adultRide").hide();
    } else {
      $(".kiddyRide").show();
      $(".teenRide").show();
      $(".adultRide").show();
    }
  });

})
