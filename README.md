##CJ-ONE 작업일지

<!-- ###공동작업 (2명)
- 작업은 각자 하고 더 나은 코드를 위해 서로의 코드 리팩토링
 -->
###고려 해야할 점
- 의미있는 문서 구조 짜기
- 웹접근성 준수
- 크로스브라우징 IE8 까지 해볼까?? 
- ==>>> 빠르게 작업을 끝내기 보단 문제점을 파악하고 해결 하는 것에 중점을 둘것!

###사용언어 및 툴
- HTML5, CSS, CSS3, Sass, Gulp, Javascript

###사용기술
- 반응형 웹 (RWD) : 모바일, 태블릿, 데스크탑 3가지 버전 (데스크탑 기준 작업)
- 문서 구조 접근 : 본문바로가기 스킵메뉴 -> 메인로고 -> 유틸메뉴 -> GNB 1depth -> GNB 2depth 순서 접근
- GNB 2depth 탭 키보드 접근성 고려해서 자바스크립트 구현
- Modal 콘텐츠 : 모바일, 태블릿 버전일 때 메뉴 버튼(햄버거 아이콘) 클릭 시 GNB 메뉴 슬라이딩
- IR기법 (image-replace) : 리더기는 텍스트를 읽어주되 시각적으론 이미지로 대체

###진행해야 할 목록
- [x] GNB : 모바일, 태블릿 버젼 구현
- [x] 검색버튼 스타일 및 동적구현  : 2017/01/10
- [ ] 콤보박스(셀렉트박스) CSS디자인
- [ ] 캐러셀 콘텐츠 만들기
- [ ] 페이지 하단영역
- [ ] 메인 콘텐츠

###기존 [CJONE](http://www.cjone.com/cjmweb/main.do) 사이트 분석
- 접근성을 위해 본문바로가기가 있다.
- 유틸메뉴중 고객센터는 콤보박스.
    + 디자인을 하기위해 셀렉트 요소를 사용하지 않고 커스텀마이징을 했다.
- 태블릿, 데스크탑 버전으로만 구현되어 있고, 모바일버전은 따로 가지고 있음.
- GNB : 데스크탑 버전
    + 메뉴에 직접 닿지 않아도 근처에 마우스가 가면 2depth 영역이 열림
    + 또한, 2depth를 가지고 있지 않은 1depth 메뉴에 마우스 호버됐을때 2depth 전체 영역이 열림
    + 2depth의 영역은 1depth 메뉴들의 전체너비 기준으로 영역이 잡히는것 같음
    + 2depth 영역에서 벗어나면 2depth는 닫힘
- GNB : 태블릿 버전
    + 유틸, gnb메뉴들이 왼쪽 세로로 정렬
    + 오픈 버튼 클릭시 왼쪽에서 밀려나옴
    + 클로즈 버튼 클릭하면 메뉴들이 닫힘
    + 메뉴가 오픈되면 바디부분은 비활성화(반투명한 회색화면)
- 문서구조 접근 순서 : 본문바로가기 -> 로고 -> 유틸 -> GNB메뉴 ,,,,,
- 갬색 버튼
    + 클릭하면 부드럽게 슬라이드다운
    + 또 다시 클릭하면 슬라이드 업
    + ==> SSEOM's blog에서 사용했던 슬라이드 다운, 업 스크립트 코드를 참고하면 되겠다.


---

###문제에 대한 해결 방법 (또는 더욱 효율적인 방법)
####1. Skip 분문 바로가기
- [ 내가 맨처음 한 방법 ]
    + css 스타일 `display: none, block` 를 가지고 focus가 되면 상태변화 되는 것으로 해결 하려 했음 ==> 하지만 적용 안됨
- [ 해결방법 ]
    ```
    .skip
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
    
    // 포커스가 됐을때 
    .skip:focus 
        position: fixed;
        top: 0;
        left: 0;
        width: inherit;
        height: auto;
        padding: 10px 15px;
        background-color: #000;
        color: #fff;
    ```


####2. 자바스크립트 가상요소 접근
```
  //가상요소 스타일 값 가져오기
  window.getComputedStyle(document.querySelector('.wrap'), '::after').getPropertyValue('display');

  // 가상요소 스타일 값 변경
  document.styleSheets[0].addRule('.header_wrap::after','display: block');

```


####3. GNB 2depth 
- li는 탭포커스가 안간다. a, button, input, select 같은 요소는 탭포커스 접근가능!! 
    + 처음엔 li를 사용해서 네비게이션 동작을 구현했지만 탭포커스가 안간다. 
    + li로 focus접근하려면 자바스크립트 해결해야한다.

- [ 문제점 ]
    + 디자인된 특성상 메뉴 어느 곳에라도 가면 2뎁스가 열려서 1뎁스 메뉴 아이템 첫번째만 선택해서 포커스 이벤트를 줬는데 마우스를 움직이고 다시 포커스로 움직이려고 하면 이벤트가 발생이 안된다.

- [ 해결방법 ]
    + 탭 포커스로 네비게이션 메뉴 접근된 상태에서 마우스로 메뉴접근을 했다가 다시 포커스로 움직일때 2뎁스가 동작하려면 반복문으로 순환 해야한다.
    + 당연하지!! 1뎁스 메뉴 아이템 첫번째만 선택해서 한개만 이벤트가 걸었으니까!!

    ```
    //------------ [ HTML ] ---------------
    <ul class="gnb_menu">
        <li>
          <a href="#" class="depth_1">CJ ONE 소개</a>
        </li>
        <li>
          <a href="#" class="depth_1">포인트/카드</a>
          <ul class="sub_menu">
            <li><a href="#">포인트 적립/사용</a></li>
            <li><a href="#">제휴 브랜드</a></li>
            ..............생략
          </ul>
        </li>
        <li>
          <a href="#" class="depth_1">이벤트/쿠폰</a>
        </li>
        ..............생략
    </ul>

    //------------ [ javascript ] ---------------

    var depth_1 = document.querySelectorAll('.depth_1');

    // 모든 1depth 메뉴들에게 포커스 이벤트 
    for(var i = 0; i < depth_1.length ; i++){
      depth_1[i].onfocus = function(){
        document.styleSheets[0].addRule('.header_wrap::after','display: block');
        document.styleSheets[0].addRule('.gnb_wrap::after','display: block');
        for(var l = 0; l < sub_menu.length ; l++){
          sub_menu[l].classList.add('depth_2');
        }
      };
    }
    
    // 1뎁스 메뉴 아이템 첫번째만 포커스 이벤트 줬을때
    // depth.onfocus = function(){
    // ..............  위와같은 코드 ..............
    // };

    ```



####4. 반응형(미디어쿼리문) + Sass (동적 mixin : 전달인자 사용)
- 데스크탑 기준 -> 태블릿 -> 모바일 순으로 작업
- **주의 사항**
    + IE 6-8 은 미디어쿼리문 적용이 안됨
        + IE 6-8 환경이 읽을 수 있는 코드 : `@media screen {}`
        + IE 6-8 (X) 환경이 읽을 수 없는 코드 : IE 6-8차단 : `@media only screen {}`
        + IE 6-8 은 쿼리적용이 안되는데 only가 없으면 화면을 읽을 라고 한다. 만약 이 코드를 읽어버리면 스타일들이 다 꼬여버리니까 읽을 수 없이 only를 붙여서 무슨말인지 모르게 차단해 버리는 것.
```
// 브레이크 포인트
// 모바일 320 ~ 479 까지
// 태블릿 480 ~ 859 까지
// 데스크탑 860 이상

$small_width: 320px
$medium_width: 480px
$large_width: 860px

$only_small: "only screen and (max-width: $medium_width - 1px)"
$medium: "only screen and (max-width: $large_width - 1px)"
$only_medium: "only screen and (min-width: $medium_width) and (max-width: $large_width - 1px)"
$large: "only screen and (min-width: $large_width)"

// ----------------- 동적 믹스인 + 보관법 + 쿼리문 -----------------------

// @mixin device($version) ,  =device($version) 동일 구문
// 동적 mixin + interpoltion(보관법) 사용
=device($version)
  @if $version == only_s
    @media #{$only_small}
      @content
  @else if $version == m
    @media #{$medium}
      @content 
  @else if $version == only_m
    @media #{$only_medium}
      @content 
  @else if $version == l
    @media #{$large}
      @content 

// 사용방법
// @include device(m) , +device(m) 동일
body
    background-color: pink
    +device(m)
        //코드입력....
        background-color: red



// ----------------- 정적 믹스인 + 쿼리문 -----------------------

@mixin small_version
  @media (max-width: $medium_width - 1px)
    @content 

@mixin medium_version
  @media (min-width: $medium_width)
    @content 

@mixin large_version
  @media (min-width: $large_width)
    @content 

// 사용방법
body
    background-color: pink
    +large_version
        //코드입력....
        background-color: red

```


####5. 세로 정렬된 메뉴 호버시 밑줄
- [ 문제 ]
    + 밑줄이 생길때 다른 메뉴 요소가 아래로 밀림 : border-bottom의 픽셀 값 만큼,,
- [ 해결 ]
    + 요소에 호버 전에도 border-bottom: 1px solid transparent 투명값을 주면됨
    ```
    a
        border-bottom: 1px solid transparent
        &:hover
            border-bottom: 1px solid #FF6D00
    ```


####6. 모달콘텐츠 참고 자료
- 첫번째방법 : html, css, javascript 제어 (display: none, block)
    + [w3schools](http://www.w3schools.com/howto/howto_css_modals.asp)
    + [w3schools](http://www.w3schools.com/howto/howto_css_modal_images.asp)
    + [이건 그냥 나중에 구현해보고 싶은 모달+이미지 슬라이드](http://www.menucool.com/slider/show-image-gallery-on-modal-popup)

- 두번째방법 : html, css만 제어
    + 이 방법은 모달 콘텐츠가 없어진게 아니라 안보여지는 것임. 그래서 탭포커스로 접근할 때 안보이지만 포커스는 접근을 한다.
        * [참고](http://www.webdesignerdepot.com/2012/10/creating-a-modal-window-with-html5-and-css3/)

- ==> 무슨 방법이 더 좋은 방법인가???

####7. 플레이스 홀더 스타일값 수정
```
::-webkit-input-placeholder { /* Chrome */
  color: red;
  opacity: 1;
}
:-ms-input-placeholder { /* IE 10+ */
  color: red;
  opacity: 1;
}
::-moz-placeholder { /* Firefox 19+ */
  color: red;
  opacity: 1;
}
:-moz-placeholder { /* Firefox 4 - 18 */
  color: red;
  opacity: 1;
}
```

####8. classToggle : 사용자 정의 함수
```
function classToggle(element, class_name){
  // 선택한 대상에 클래스이름이 있는지 확인.
  // 있으면 true 반환. 없으면 false
  var show = element.classList.contains(class_name);
 
  // 만약 show가 true라면 class_name 지우고 false 라면 class_name 추가
  if( show ){
    element.classList.remove(class_name);
    ... 또 다른 구현할 것 있음 작성
  }else{
    element.classList.add(class_name);
    ... 또 다른 구현할 것 있음 작성
  }
}

//------------ [ 참고 ] ---------------
  // classList ==> 브라우저 호환 : IE10이상
  // add : 요소의 클래스 목록에 클래스 추가
  // remove : 요소의 클래스 목록에서 클래스 삭제
  // toggle : 요소의 클래스 목록에서 특정 클래스 전환
  // contains : 요소의 클래스 목록에서 특정 클래스가 포함되어 있는지 확인

  element.classList.toogle(class_name);
  // toggle : 요소의 클래스 목록에서 특정 클래스 전환

```


####9. 슬라이드 업, 다운
```
//------------ [ html ] ---------------

<button type="button" class="search_btn_wrap">검색버튼</button>
<div class="search_content">
  <input type="text" name="search_box" id="search_box" placeholder="검색어입력">
  <button type="submit">검색</button>
</div>


//------------ [ css ] ---------------
// 클릭 전 기본 상태 (slide-up)
.search_content
  max-height: 0
  overflow-y: hidden
  transition: max-height 0.5s ease-in-out

// 클릭하면 다운 되면서 변할 값
.slide_down
   max-height: 100px

//------------ [ javascript ] ---------------

var search_content = document.querySelector('.search_content');
var search_btn = document.querySelector('.search_btn');
var show = search_content.classList.contains('slide_down');

search_btn.onclick = function(){
    // 만약 show가 true라면 class_name 지우고 false 라면 class_name 추가
    if( show ){
        search_content.classList.remove('slide_down');
    }else{
        search_content.classList.add('slide_down');
    }
};

```

####10. 셀렉트 박스
- [ 문제점 ]
  + cj one 사이트의 셀렉트 박스들은 모두 기본디자인은 버리고 사용자디자인이 되어있음.
- [ 해결 방법 ]
  + [NARADESIGN : 서식 제어 요소(Form Control Element) 디자인](http://naradesign.net/wp/2010/02/18/1192/)
    * [셀렉트박스 디자인 예제](http://naradesign.net/ouif/uio/select/xhtml.html)
  + [jqtransform.js 플러그인 사용](http://blog.daum.net/mmmommm/9)
  + 커스텀 디자인할 때 마크업
    ```
    //------------ [ html ] ---------------

    // <select></select>
    <button type="button" id="select">Select Link</button>

    // <option></option>
    <ul class="option">
      <li><a href="#1">Link_1</a></li>
      <li><a href="#2">Link_2</a></li>
      <li><a href="#3">Link_3</a></li>
    </ul>
    
    //------------ [ css ] ---------------

    #select{
      background-color: #222;
      color: #fff;
      border: none;
      padding: 10px 40px;
      font-size: 18px;
    }

    .option{
      display: none;
      background-color: #444;
      list-style: none;
      width: 132px;
      padding: 0;
      margin-top: 0;
    }

    .option > li{
      text-align: center;
      padding: 10px 0;
    }

    .option a{
      color: #fff;
      text-decoration: none;
    }

    //------------ [ jQurey ] ---------------

    //셀렉트 클릭
    $('#select').on('click', function(){ 
        // 클릭한 디스에 속성 클래스에 open이 있다면
        if( $(this).hasClass('open') ){
          
          // 클래스를 삭제
          $(this).removeClass('open');

          // 옵션은 슬라이드업
          $('.option').slideUp(500);


        }else{ // open이 없다면

          // open 추가
          $(this).addClass('open');

          // 옵션 슬라이드 다운
          $('.option').slideDown(500);

        }
    });
      
    //옵션 리스트 클릭
    $('.option > li').on('click', function(){
      $('#select').text($(this).text());
      $('#select').removeClass('open');
      $('.option').slideUp(500);
    }); 

    ```

- [ 주의 ]
  + 탭키로 접근가능해야 한다. (어떤 블러그에서 보니까 탭으로 아예 접근안되는 것도 있었음)

- [ 해결 방법 ]
  + 서식을 헤치지 않고 select 요소만 디자인 변경
    * [참고 블러그](http://webdir.tistory.com/432)



