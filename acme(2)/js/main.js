let slideWrapper = document.querySelector('.slide-wrapper'),
    slideContainer = slideWrapper.querySelector('.slide-container'),
    slides = slideContainer.querySelectorAll('li'),
    slideCount = slides.length, //슬라이드 개수
    slideCurrentIdx = 0,
    slideWidth = slideWrapper.offsetWidth,
    prevBtn = slideWrapper.querySelector('.prev'),
    nextBtn = slideWrapper.querySelector('.next');
    
    //슬라이드 배치
    slideContainer.style.width = slideWidth*slideCount+'px';
    
    //슬라이드 이동 함수
    function moveSlide(num){
      //num 0, slideContainer transform:translateX(0);
      //num 1, slideContainer transform:translateX(-1272px);
      //num 2, slideContainer transform:translateX(-1272px);
      //요소의 스타일 지정 - 대상.style.css속성명 = 값
      let value = num*-slideWidth;
      slideContainer.style.transform = `translateX(${value}px)`;
      slideCurrentIdx = num;
    }
    //moveSlide(slideCurrentIdx+1);

    //이벤트  대상.addEventListener('이벤트종류', 할일);
    //할일 함수 function(){ 실제할일... }
    //ES6  함수 ()=>{ 실제할일... }

    nextBtn.addEventListener('click', ()=>{ 
      if(slideCurrentIdx < slideCount-1){
        moveSlide(slideCurrentIdx+1);
      } else{
        moveSlide(0);
      }
    });
    prevBtn.addEventListener('click', ()=>{ 
      if(slideCurrentIdx > 0){
        moveSlide(slideCurrentIdx-1);
      } else{
        moveSlide(slideCount-1);
      }
    });
    

    //아코디언
    /*
    대상.classList.add('클래스명');
    대상.classList.add('클래스명, 클래스명');
    대상.classList.remove('클래스명');
    대상.classList.contains('클래스명');  있으면 true 없으면 false
    */

    let qnaList = document.querySelectorAll('.qna-list li');
    console.log(qnaList);
    //이벤트  대상.addEventListener('이벤트종류', 할일);
    for(let ql of qnaList) {
      ql.addEventListener('click', ()=>{
        //모든리스트에서 active 제거
          qnaList.forEach(item=>{
            item.classList.remove('active');
          })
        //클릭된 그 요소에만 active 추가
          ql.classList.add('active');
      });
    }
    /*
    for(변수명 of 배열명) {
      반복할 일
    }
    */