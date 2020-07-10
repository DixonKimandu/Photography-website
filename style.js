/*Loader Start*/
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
/*Loader End*/

/*Navbar Start*/
$(window).on('scroll', function(){
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  }
  else {
    $('nav').removeClass('black');
  }
})
/*Navbar End*/
