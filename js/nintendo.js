const mBtn = document.querySelector('.line_box');
const dropMenu = document.querySelector('nav');

mBtn.addEventListener('click', function(){
  mBtn.classList.toggle('active');

  if(mBtn.classList.contains('active')){
    dropMenu.style.display = 'block';
  } else {
    dropMenu.style.display = 'none';
  } 
});
// Mobile Navigation



document.addEventListener('scroll', horizontalScroll);

const sticky = document.querySelector('.standard');
const stickyParent = document.querySelector('.sticky');

function horizontalScroll(){

    const scrollWidth = sticky.scrollWidth;
    const verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;
    const stickyPosition = sticky.getBoundingClientRect().top;

    if(stickyPosition > 1){
        return;
    }else{
        const scrolled = stickyParent.getBoundingClientRect().top;
        sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.8;
    }
}
// Our History



const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const slide = document.querySelector('.slide');

next.onclick = () => {
  slide.scrollLeft += 200;
};
prev.onclick = () => {
  slide.scrollLeft -= 200;
};


// $(function(){
//       var n=0;

//       function autoSlide(){
//           setInterval(function(){
//               n++;
//               if(n===8){
//                 n=0;
//                 // return;
//               }
//               $('.game_box > div').eq(n-1).fadeOut(500);
//               $('.game_box > div').eq(n).fadeIn(500);
//           },1000)
//       }

//       autoSlide();
//   });
// Shop Games



$(function(){
  $('.smallscreen a').click(function(){
    var click = $(this).attr('href');
    $('.bigscreen > iframe').attr({'src' : click});
  })
  $('.smallscreen a').click(function(event){
    event.preventDefault()
  })
});



const tvScroll = document.querySelector('.tv_scroll');

function listWheel(event){
  event.preventDefault();

  tvScroll.scrollBy({
    left: event.deltaY < 0 ? -100 : 100
  });
};

function listControl(){
  if(window.innerWidth < 1300){
    tvScroll.addEventListener('wheel', listWheel);
  } else {
    tvScroll.removeEventListener('wheel', listWheel);
  }
}

listControl();

window.addEventListener('resize', listControl);
// Nintendo TV




























// $(window).scroll(function() {
//   if($(document).scrollTop() > 900){
//       $(".fixed-btn").show();
//   } else {
//       $(".fixed-btn").hide();
// }
// });



// $(function(){
//   $(window).on('scroll', function(){
    
//     var scrollSide = $('.our_history').offset();

//     if($(window).scrollTop() > scrollSide.top){
//       $('.our_history').on('wheel', function(){

//       })
//     }
//   })
// });




// const historySlide = document.querySelector('.our_history');

// historySlide.addEventListener('wheel', function(event){
//   event.preventDefault();

//   historySlide.scrollBy({
//     left: event.deltaY < 0 ? -200 : 200,
//   })

//   event.stopPropagation();


// })



// historySlide.scrollBy({
//   left : 0,
//   left : -500,
//   behavior : "smooth"
// });

// window.scrollBy(0,300);




// window.onscroll = function(){
//   console.log('스크롤 되는 중~')
// }



// const scrollContainer = document.querySelector('.our_history');

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });


// document.addEventListener('scroll', horizontalScroll);
// let scrollArea = document.querySelector('.our_history');
// let scrollWidth = scrollArea.scrollWidth;
// let ScrollHeight = scrollArea.getBoundingClientRect().height


// function horizontalScroll(){

//   let scrollPosition = scrollArea.getBoundingClientRect().top;
//   if(scrollPosition > 1){
//       return;
//   }else{
//       let scrolled = scrollArea.getBoundingClientRect().top;
//       scrollArea.scrollLeft =(scrollWidth/ScrollHeight)*(-scrolled)*0.85;
//   }
// }



// https://velog.io/@godud2604/Horizontal-Scrolling-of-web-page