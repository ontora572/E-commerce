// latest product part start
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
                slidesToShow: 3,
                slidesToScroll: 1,
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
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
  
  ]
    
      
    });
  })
  // latest product part end


  // details nice number part start
  $(function(){

    $('input[type="number"]').niceNumber();
  
  });
  // details nice number part end

