$(document).ready(function(){
  $(".banner_main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:".left",
    prevArrow:".right",
    autoplay: true,
    
    
  });
})

// microsoft counter timer js start
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo1").innerHTML = days

  document.getElementById("demo2").innerHTML = hours

  document.getElementById("demo3").innerHTML = minutes

  document.getElementById("demo4").innerHTML = seconds
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



// latest slick slider start
$(document).ready(function(){
  $(".latest_slick").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:".one",
    prevArrow:".two",



    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }

]
  
    
  });
})
// latest slick slider start


// filter part start

var mixer = mixitup('.fil_main');


// filter part start

// testimonial slick slider start
$(document).ready(function(){
  $(".testi_slick").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:".first",
    prevArrow:".second",  


    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }

]




  });
})
// testimonial slick slider start

// microsoft counter timer js end