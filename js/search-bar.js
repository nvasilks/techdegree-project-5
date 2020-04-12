$(document).ready(function(){
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".image-gallery").filter(function() {

        //Concatenate 'Title' and 'Caption'
        var $dataTitleLb = $(this).attr('data-lightbox') + $(this).attr('data-title');

        $(this).toggle($dataTitleLb.toLowerCase().indexOf(value) > -1)
      });
    });
  });