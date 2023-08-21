$(document).ready(() => {
  let outerWidthSidebar = $(".sidebar-inner").outerWidth(true);

  // todo: loading Screen
  $(".sk-chase").fadeOut(2000, () => {
    $("#loading").slideUp(2000, () => {
      $("body").css("overflow", "visible");
    });
  });
  // todo:show and hide icon sideBar
  $(window).scroll(() => {
    let ScrollTopWindw = $(window).scrollTop();
    let maxHeigthToSideBar = $("#home").outerHeight(true)-300 ;
    if (ScrollTopWindw > maxHeigthToSideBar) {
      $(".icon-open-sideBar").hide(500);
      $(".scroll-top").fadeIn(500)
    } else {
      $(".icon-open-sideBar").show(500);
      $(".scroll-top").fadeOut(500)
    }
  });
  let ScrollTopWindw = $(window).scrollTop();
  let maxHeigthToSideBar = $("#home").outerHeight(true) -300;
  if (ScrollTopWindw > maxHeigthToSideBar) {
    $(".icon-open-sideBar").hide(500);
    $(".scroll-top").fadeIn(500)

  } else {
    $(".icon-open-sideBar").show(500);
    $(".scroll-top").fadeOut(500)
  }
  // todo: open and close sideBar
  $("#sideBar").css("left", -outerWidthSidebar);
  $(".icon-open-sideBar").click(() => {
    if ($("#sideBar").css("left") == "0px") {
      $("#sideBar").animate({ left: -outerWidthSidebar }, 700);
      $(".icon-open-sideBar").html(`<p><i class="fa-solid fa-bars"></i> open</p>`);
    } else {
      $("#sideBar").animate({ left: "0px" }, 700);
      $(".icon-open-sideBar").html(`<p><i class="fa-solid fa-bars"></i> close</p>`);
    }
  });
  // todo:close sideBar with x mark
  $(".X-mark").click(() => {
    $("#sideBar").animate({ left: -outerWidthSidebar }, 1000);
  });
  // todo:  show sigers desc
  let singer = $(".singers h3");
  singer.click((e) => {
    $(e.target).next().slideToggle(500);
  });

  // todo: Date Timer
  function geteTimeToEvent(){
   let currentDate = new Date();
   let targetDate = new Date(2025,2,25,15,0)
   let diffrenceDate= targetDate - currentDate
  let day = Math.trunc(    diffrenceDate / (  1000*60*60*24        )                )
let houres = Math.trunc(  (  diffrenceDate %  (  1000*60*60*24        )      )  /(1000*60*60)                                       )
let minutes = Math.trunc(    (  diffrenceDate % (1000*60*60)       )  / (1000*60)                       )
let seconds = Math.trunc(   (  diffrenceDate %  (1000*60)      )   / 1000                 )

$(".time h4").eq(0).text(` - ${day }`)
$(".time h4").eq(1).text(` ${houres } h`)
$(".time h4").eq(2).text(` ${minutes } m`)
$(".time h4").eq(3).text(` ${seconds } s`)
  }
  setInterval( geteTimeToEvent , 1000  )
  // todo: scroll Behaviour

    $("a[href^='#']").click((e) => {
      e.preventDefault();
      let hrefTop = $(e.target).attr("href");
      let sectionOffset = $(hrefTop).offset().top;
      $("html, body").animate({
        scrollTop: sectionOffset
      }, 500);
    });


    // todo: scroll to top by button
      $(".scroll-top").click(()=>{
        $("html, body").animate({scrollTop:"0px"},500)
      })
     
});
