const sidebox = document.querySelector('.side_box') ; /* 사이드박스 고정 및 위치 조정*/
const variableWidth = document.querySelectorAll('.contents_box .contents') ; /* 컨텐츠 박스 800px*/
const delegation = document.querySelector('.contents_box') ; /* 좋아요, 공유, 저장 등 버튼*/


function delegationFunc(e) {

    let elem = e.target ;
    console.log(e.target) ;

    // data-name이 없으면
    while(!elem.getAttribute('data-name')) {
        elem = elem.parentNode ; //elem의 부모를 계속 찾아간다

        if(elem.nodeName === 'BODY') { //계속 부모를 찾다가 body를 만나면
            elem = null ;
            return ;
        }
    }



    if(elem.matches('[data-name="heartbeat"]')) {

        console.log('하트@') ;

        $.ajax({
            type: 'POST',
            url: 'data/like.json',
            data: 37,
            dataType: 'json',
            success: function(response) {

                let likeCount = document.querySelector('#like-count-37') ;
                likeCount.innerHTML = '좋아요 ' + response.like_count + '개';
            },
            error:function(request, status, error) {
                alert('로그인이 필요합니다.') ;
                window.location.replace('https://naver.com') ;
            }
        })

    } else if (elem.matches('[data-name="share"]')) {

        console.log('공유 버튼') ;

    } else if(elem.matches('[data-name="bookmark"]')) {

        console.log('북마크!') ;

    } else if(elem.matches('[data-name="more"]')) {

        console.log('더보기!') ;
    }

    elem.classList.toggle('on') ;
}

// 사이즈 재조정
function resizeFunc() {
    console.log('resize') ;
    // 스크롤을 내리면 사이드 박스의 좌표값 재조장
    if(pageYOffset >= 10) {

        let calcWidth = (window.innerWidth * 0.5 ) + 167 ;
        console.log(window.innerWidth * 0.5) ;
        sidebox.style.left = calcWidth + 'px' ;

    }
    // 매인 컨텐츠가 800px밑으로 떨어졌을 때
    if (matchMedia('screen and (max-width : 800px)').matches) {

        for (let i = 0; i < variableWidth.length; i++) {
            variableWidth[i].style.width = window.innerWidth - 20 + 'px' ;
        }

    } else {
        for (let i = 0; i< variableWidth.length; i++) {

            if(window.innerWidth > 600) {
                variableWidth[i].removeAttribute('style') ;
            }

        }
    }
}

// 스크롤
function scrollFunc() {
    console.log(pageYOffset) ;
    if(pageYOffset >= 10) {
        header.classList.add('on') ;

        // 다른 subpage에서도 적용할 수 있게 if문으로 처리한다.
        if(sidebox) {
            sidebox.classList.add('on') ;
        }

        resizeFunc()

    } else {
        header.classList.remove('on') ;

        if(sidebox) {
            sidebox.classList.remove('on') ;
            sidebox.removeAttribute('style') ;// 스크롤을 맨 위로 올리면 사이드바가 변경된 스타일로 유지되어 스타일 속성 삭제
        }
    }
}

// 새로고침
setTimeout(function(){
    scrollTo(0,0) ;
}, 100) ;


 if(delegation){
     delegation.addEventListener('click', delegationFunc);
 }

//delegation.addEventListener('click', delegationFunc) ;
//window.addEventListener('click', delegationFunc) ;
window.addEventListener('resize', resizeFunc) ;
window.addEventListener('scroll', scrollFunc) ;
