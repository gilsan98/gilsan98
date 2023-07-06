$(document).ready(function () {

  $('.category_list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    arrows: false,
    dots: false,
    infinite: false
  });

  let asideMenu = $('.aside_category > li > a');
  //let asideSubMenu = $('.aside_category ul');

  // asideMenu.on('click', function(){  });

  asideMenu.click(function(e){
    e.preventDefault();
    //asideSubMenu.slideUp();//모든 서브메뉴 접기
    $(this).next().slideToggle();
    $(this).parent().siblings().find('ul').slideUp();

    //모든 메뉴에서 active 제거
    //클릭한 그 요소에 active 추가
    // asideMenu.removeClass('active');
    $(this).parent('active');
    $(this).parent().siblings().removeClass('active');
  });

  /*
  대상.on('이벤트 종류', 할일);
  대상.이벤트 종류(할일);
  */

  $('.aside_button').click(function(){
    $('body').toggleClass('active');
  })

  $( "#.sort select" ).selectmenu();
  
}); //문서가 준비되면 할일
