$( document ).ready(function() {

/***********************************
ANIMATION OF THE SIGN IN AND SIGN UP
  *********************************/
  $("#signup-btn").click(function(){

    $(".signup").addClass("signup-container-animation");
    $(".signup").css("visibility", "hidden");
    $(".signup").removeClass("signup-container-reverse");


    $(".signin").addClass("signin-container-animation");
    $(".signin").removeClass("signin-container-reverse");

  });

  $(".signin-in-btn").click(function(){

    $(".signup").removeClass("signup-container-animation");
    $(".signup").css("visibility", "visible");
    $(".signup").addClass("signup-container-reverse");

    $(".signin").removeClass("signin-container-animation");
    $(".signin").css("visibility", "hidden");
    $(".signin").addClass("signin-container-reverse");

  });

  /**********
Sort the tabs
  ***********/

  $( function() {
    $( ".tab-container" ).sortable();
    $( ".tab-container" ).disableSelection();
  } );


/***********************
TOGGLE for the side bar
***********************/
  $(function(){
      $('.menu-toggle').on('click', function(){
          $('.sidebar-container').toggle('slide', { direction: 'left' }, 300);
          // $('.tab-container').animate({
          //     'margin-left' : $('.tab-container').css('margin-left') == '0px' ? '94px' : '0px'
          // }, 300);
      });
  });

/**********************************************
Search Magnifying icon fade in and out on focus
**********************************************/
  $("#site-search").focusin(function(){
    // $(".magnifying-glass").css("display", "none");
    $(".magnifying-glass").fadeOut(400);
  });

  $("#site-search").focusout(function(){
    // $(".magnifying-glass").css("display", "block");
    $(".magnifying-glass").fadeIn(400);
  });


});
