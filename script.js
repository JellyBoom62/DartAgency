$(document).ready(function(){
  $('.section4-slider').slick({
    arrows:true,
    slidesToShow:2,
    slidesToScroll:1,
    vertical:true,
    verticalSwiping:true,
    responsive: [{

      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true
      }

    }]
  });
});


$(document).ready(function(){
  $('.team-slider').slick({
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    focusOnSelect: true,
    draggable:true,
    swipe:true,
    asNavFor: ".team-info-slider"
  });
});

$(document).ready(function(){
  $('.team-info-slider').slick({
      slidesToShow:1,
      slideToScroll:1,
      arrows: false,
      fade: true,
      asNavFor: '.team-slider'
  });
});

if (screen.width > 527) {
  for (i = 1; i <= 5; i++) {
    let accHead = document.querySelector("#acc-head-"+`${i}`)
    let accMid = document.querySelector("#acc-mid-"+`${i}`)
    let accItem = document.querySelector("#acc-item-"+`${i}`)
    accHead.addEventListener("click", () => {
      if (accMid.style.transform == "translateY(-125%)") {
        accMid.style.transform = "translateY(0%)"
        accItem.style.height = "255px"
        accMid.style.opacity = "1"
      }
      else {
        accMid.style.transform = "translateY(-125%)"
        accItem.style.height = "50px"
        accMid.style.opacity = "0"
      }
    })
  }
}
else if (screen.width > 400){
  for (i = 1; i <= 5; i++) {
    let accHead = document.querySelector("#acc-head-"+`${i}`)
    let accMid = document.querySelector("#acc-mid-"+`${i}`)
    let accItem = document.querySelector("#acc-item-"+`${i}`)
    accHead.addEventListener("click", () => {
      if (accMid.style.transform == "translateY(-125%)") {
        accMid.style.transform = "translateY(0%)"
        accItem.style.height = "180px"
        accMid.style.opacity = "1"
      }
      else {
        accMid.style.transform = "translateY(-125%)"
        accItem.style.height = "40px"
        accMid.style.opacity = "0"
      }
    })
  }
}
else {
  for (i = 1; i <= 5; i++) {
    let accHead = document.querySelector("#acc-head-"+`${i}`)
    let accMid = document.querySelector("#acc-mid-"+`${i}`)
    let accItem = document.querySelector("#acc-item-"+`${i}`)
    accHead.addEventListener("click", () => {
      if (accMid.style.transform == "translateY(-125%)") {
        accMid.style.transform = "translateY(0%)"
        accItem.style.height = "150px"
        accMid.style.opacity = "1"
      }
      else {
        accMid.style.transform = "translateY(-125%)"
        accItem.style.height = "40px"
        accMid.style.opacity = "0"
      }
    })
  }
}
