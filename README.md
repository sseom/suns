##CJ-ONE 작업일지

###공동작업 (2명)
- 작업은 각자 하고 더 나은 코드를 위해 서로의 코드 리팩토링

###고려 해야할 점
- 의미있는 문서 구조 짜기
- 웹접근성 준수
- 크로스브라우징 IE8 까지 해볼까?? 
- ==>>> 빠르게 작업을 끝내기 보단 문제점을 파악하고 해결 하는 것에 중점을 둘것!

###사용언어 및 툴
- HTML5, CSS, CSS3, Sass, Gulp, Javascript

###사용기술
- 접근성 : 본문바로가기 스킵메뉴
- 콤보박스(셀렉트박스) 커스텀마이징 디자인 CSS로 스타일링
- GNB 2depth 키보드 접근성 고려해서 자바스크립트로 구현 
- IR기법 (image-replace) : 리더기는 텍스트를 읽어주되 시각적으론 이미지로 대체

###진행해야 할 목록
- [x] GNB : 모바일, 태블릿 버젼 구현
- [ ] 검색버튼 스타일 및 동적구현
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





