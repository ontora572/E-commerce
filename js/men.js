// jQuery(document).ready(function($) {
//     $('.counter').counterUp({
//         delay: 10,
//         time: 1000
//     });
// });




$('.counter').counterUp({
    delay: 10,
    time: 1000
});




// partner part start
$(document).ready(function(){
    $(".partner_slick").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow:".left",
      prevArrow:".right",
    


      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
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
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
  
  ]
      
    });
  })
//   partner part end