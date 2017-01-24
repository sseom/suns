##CJ-ONE 작업일지

###원본 VS 작업본
- [원본 CJ-ONE 사이트](http://www.cjone.com/)
- [작업중인 CJ-ONE 사이트](https://sseom.github.io/suns/cjone/)

###고려 해야할 점
- 의미있는 문서 구조 짜기
- 웹접근성 준수
- IE9 까지 대응하기!
- 최대한 원본과 비슷하면서 반응형에 대응할수 있도록 디자인
- ==>>> 빠르게 작업을 끝내기 보단 문제점을 파악하고 해결 하는 것에 중점을 둘것!

###사용언어 및 툴
- HTML5, CSS, CSS3, Sass, [Gulp](https://github.com/sseom/learning/blob/master/06_Gulp/02_sass-gulp-module.md), Javascript

###사용기술
- 반응형 웹 (RWD) : 모바일, 태블릿, 데스크탑 3가지 버전 (데스크탑 기준 작업)
- 문서 구조 접근 : 본문바로가기 스킵메뉴 -> 메인로고 -> 유틸메뉴 -> GNB 1depth -> GNB 2depth 순서 접근
- GNB 2depth 탭 키보드 접근성 고려해서 자바스크립트 구현
- Modal 콘텐츠 : 모바일, 태블릿 버전일 때 메뉴 버튼(햄버거 아이콘) 클릭 시 GNB 메뉴 슬라이딩
- 콤보박스(셀렉트박스) 커스터마이징 CSS디자인 및 동작 구현
- JS : 사용자정의 함수 만들어서 사용 [소스보기](https://github.com/sseom/suns/blob/master/cjone/js/helper-function.js)
- IR기법 (image-replace) : 리더기는 텍스트를 읽어주되 시각적으론 이미지로 대체

###진행해야 할 목록
- [x] GNB : 모바일, 태블릿 버젼 구현
- [x] 검색버튼 스타일 및 동적구현  : 2017/01/10
- [x] 콤보박스(셀렉트박스) CSS디자인 및 구현 : 2017/01/11
- [x] 콤보박스(셀렉트박스) 디테일 : 클릭후 셀렉트가 오픈 되었다가 영역에서 마우스가 벗어나면 닫힘: 2017/01/17
- [ ] 콤보박스(셀렉트박스) 디테일 : 슬라이드 다운,업 화살표 상태 추가!!!
- [x] GNB 모바일 ~ 태블릿 버전 디테일 : 햄버거버튼 클릭시 모달 컨텐츠 백그라운드가 먼저 슬라이딩된 후 메뉴 슬라이딩
- [x] GNB 모바일 ~ 태블릿 버전 디테일 : 메뉴 클릭시 2뎁스 슬라이드 다운,업 구현 : 2017/11/16
- [ ] GNB 모바일 ~ 태블릿 버전 디테일 : 메뉴 클릭시 2뎁스 슬라이드 다운,업 화살표 상태 추가!!!
- [x] GNB 모바일 ~ 태블릿 버전 디테일 : 메뉴영역(유틸+지엔비)만 콘텐츠가 윈도우 화면보다 길어지면 y축 스크롤 : 2017/11/16
- [x] GNB 모바일 ~ 태블릿 버전 디테일 : 모달컨텐츠 백그라운드 문서 전체!! : 지금은 100vh임.. 2017/01/11
- [ ] GNB 모바일 ~ 태블릿 버전 디테일 : 검색버튼 익스플로어에서 안눌리는거 해결하기!!!
- [ ] 캐러셀 콘텐츠 만들기
- [x] 페이지 하단영역
- [X] 메인 콘텐츠 : 데스크탑 버전일때 레이아웃 잡기 : 2017/01/23
- [X] 메인 콘텐츠 : 영화 콘텐츠 부분 상세 콘텐츠 내용 채우고 스타일링 : 2017/01/24
- [X] 메인 콘텐츠 : 반응형 대응 하기 : 2017/01/24
- [ ] 인포 콘텐츠  : 마우스 호버시 애니메이션 같은 동작 구현하기
- [x] 브랜드 콘텐츠 : 콘텐츠 채우기, 메뉴(브랜드 파트) 클릭시 해당 브랜드 별로 정렬 구현 : 2017/01/17
- [ ] 디자인 구조 바꾸기 : 모바일, 태블릿, 데스크탑 반응형으로 만들기 위해 디자인 구조를 좀 바꿔야할듯
- [x] 디자인 구조 바꾸기 : cj계열 브랜드 안내 콘텐츠 호버시 슬라이딩 디자인변경 및 구현 : 2017/11/16
- [x] 자바스크립크 크로스브라우징 : 지금은 [classList 사용한 코드](https://github.com/sseom/suns/blob/master/cjone/js/all-classList.js) 익스플로어 호완이 안됨!! ㅜㅜ : 2017/01/21

###기존 [CJONE](http://www.cjone.com/cjmweb/main.do) 사이트 분석
- 접근성을 위해 본문바로가기가 있다.
- 유틸메뉴중 고객센터는 콤보박스.
    + 디자인을 하기위해 셀렉트 요소를 사용하지 않고 커스터마이징을 했다.
    + 셀렉트는 클릭, 이나 포커스되면 나타남
    + 마우스가 셀렉트 영역 이외의 다른영역에 클릭되면 가면 셀렉트 박스는 닫힘 => 난 영역에서 벗어나면 사라지게 만들것이다
- 태블릿, 데스크탑 버전으로만 구현되어 있고, 모바일버전은 따로 가지고 있음. => 난 모바일 태블릿 데스크탑 모두 구현되는 반응형 웹으로 만들것이다.
- GNB : 데스크탑 버전
    + 메뉴에 직접 닿지 않아도 근처에 마우스가 가면 2depth 영역이 열림
    + 또한, 2depth를 가지고 있지 않은 1depth 메뉴에 마우스 호버됐을때 2depth 전체 영역이 열림
    + 2depth의 영역은 1depth 메뉴들의 전체너비 기준으로 영역이 잡히는것 같음
    + 2depth 영역에서 벗어나면 2depth는 닫힘
- GNB : 태블릿 버전
    + 유틸, gnb메뉴들이 왼쪽 세로로 정렬
    + 오픈 버튼(햄버거버튼) 클릭시 왼쪽에서 밀려나옴
    + 클로즈 버튼 클릭하면 메뉴들이 닫힘
    + 메뉴가 오픈되면 백그라운드가(비활성화) 부분부터 슬라이딩되어 나온 후 메뉴 슬라이딩
    + 메뉴가 오픈되면 바디부분은 비활성화(반투명한 회색화면)
    + 모달이 뜨면 비활성화된 영역은 x,y 축 스크롤 다 안됨
    + 대신 네비게이션 부분만 y축 스크롤됨!!!!
- 문서구조 접근 순서 : 본문바로가기 -> 로고 -> 유틸 -> GNB메뉴 ,,,,,
- 검색 버튼
    + 클릭하면 부드럽게 슬라이드다운
    + 또 다시 클릭하면 슬라이드 업
    + ==> SSEOM's blog에서 사용했던 슬라이드 다운, 업 스크립트 코드를 참고하면 되겠다.
- 회원가입버튼
- cj계열 브랜드 안내 콘텐츠
  + 브랜드 콘텐츠를 감싸고 있는 부모의 너비 사이즈가 정적. => 난 반응형으로,,
  + 마우스 호버시 브랜드에 보더+화살표 생성되면서 부가 콘텐츠가 슬라이딩으로 나옴. => 난 슬라이딩 구현 다르게 할것임.
  + 라인의 가장 오른쪽 브랜드는 슬라이딩이 왼쪽으로 됨.
    * 잘 모르겠는 문제가 있는데,, 브랜드 파트별로 나눠도 라인의 오른쪽 끝은 왼쪽으로 슬라이딩
    * 브랜드 전체를 봐도 라인의 오른쪽 끝은 왼쪽으로 슬라이딩 체크를 어케 하는거지??..
  + 브랜드 파트별로 나누는 메뉴가 있고, 클릭하면 종류별로 리스트들이 정렬됨

###반응형으로 대응하면서 변경된 디자인
- cj계열 브랜드 안내 콘텐츠
  + 왼쪽으로 슬라이딩 되면서 나오는 콘텐츠 아래로 슬라이딩 변경
- 모바일의 경우 하단부분
- 아이템 콘텐츠들 원본과 비슷하긴 하나 너비와 레이아웃이 좀 다르게 배치.

---



##문제에 대한 해결 방법 (또는 더욱 효율적인 방법)
###1. Skip 분문 바로가기
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


###2. 자바스크립트 가상요소 접근
```
  //가상요소 스타일 값 가져오기
  window.getComputedStyle(document.querySelector('.wrap'), '::after').getPropertyValue('display');

  // 가상요소 스타일 값 변경
  document.styleSheets[0].addRule('.header_wrap::after','display: block');

```


###3. GNB 2depth 
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



###4. 반응형(미디어쿼리문) + Sass (동적 mixin : 전달인자 사용)
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


###5. 세로 정렬된 메뉴 호버시 밑줄
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


###6. 모달콘텐츠 참고 자료
- 첫번째방법 : html, css, javascript 제어 (display: none, block)
    + [w3schools](http://www.w3schools.com/howto/howto_css_modals.asp)
    + [w3schools](http://www.w3schools.com/howto/howto_css_modal_images.asp)
    + [이건 그냥 나중에 구현해보고 싶은 모달+이미지 슬라이드](http://www.menucool.com/slider/show-image-gallery-on-modal-popup)

- 두번째방법 : html, css만 제어
    + 이 방법은 모달 콘텐츠가 없어진게 아니라 안보여지는 것임. 그래서 탭포커스로 접근할 때 안보이지만 포커스는 접근을 한다.
        * [참고](http://www.webdesignerdepot.com/2012/10/creating-a-modal-window-with-html5-and-css3/)

- ==> 무슨 방법이 더 좋은 방법인가???

###7. 플레이스 홀더 스타일값 수정
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

###8. classToggle : 사용자 정의 함수
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


###9. 슬라이드 업, 다운
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

###10. 셀렉트 박스 커스터마이징
- [ 문제점 ]
  + cj one 사이트의 셀렉트 박스들은 모두 기본디자인은 버리고 사용자디자인이 되어있음.
- [ 해결 방법 ]
  + [NARADESIGN : 서식 제어 요소(Form Control Element) 디자인](http://naradesign.net/wp/2010/02/18/1192/)
    * [셀렉트박스 디자인 예제](http://naradesign.net/ouif/uio/select/xhtml.html)
  + [jqtransform.js 플러그인 사용](http://blog.daum.net/mmmommm/9)
  + 커스터마이징 디자인할 때 마크업
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

###11. 문서의 높이값 / 윈도우의 높이값
- 문서의 높이값
  ```
  // 제이쿼리
  $(document).height();

  // body
  document.body.clientHeight; //창의 크기
  document.body.offsetHeight;
  document.body.scrollHeight; //문서 전체의 크기

  // documentElement == html
  document.documentElement.clientHeight;
  document.documentElement.offsetHeight;
  document.documentElement.scrollHeight;


  // cross-browser (using clientWidth and clientHeight for IE8 and earlier)
  // innerHeight : 브라우저 윈도우 두께를 제외한 세로 길이
  var h = window.innerHeight 
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  ```

- 윈도우의 높이값
  ```
  // Window inner and outer Properties

  // 브라우져 안쪽 : 순수하게 안쪽 창 부분만
  window.innerWidth;
  window.innerHeight;
  // 브라우져의 스크롤바 및 작업표시줄까지 포함
  window.outerWidth;
  window.outerHeight;

  // cross-browser (using clientWidth and clientHeight for IE8 and earlier)
  var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  ```


- [자바스크립트 : 뷰포트, 디바이스, 도큐먼트 사이즈 참고](http://ryanve.com/lab/dimensions/)
- **주의 :** 브라우져별로 또는 버전에 따라 값의 차이가 있거나 지원 안되는 것이 있음


###12. 메인 : 브랜드 콘텐츠
- [ 문제점 ]
  + 브랜드 소개 콘텐츠에서 브랜드 리스트가 나오는 라인마다 가장 오른쪽 브랜드는 슬라이딩이 왼쪽으로 됨.
    * 파트별로 정렬이되면 라인의 맨오른쪽 브랜드는 바뀌는데 어떻게 체크해서 왼쪽으로 슬라이딩을 하지??
  + 슬라이딩 해서 나오는 콘텐츠가 다음 브랜드 리스트 때문에 가려짐
    * z-index를 주긴 했는데,, 슬라이딩이 호버 하자마자 콘텐츠가 브랜드위에서 보여지면서 슬라이딩 됨
      - 난 브랜드영역에는 영향을 주지않고 슬라이딩되면서 나오고싶은데....
    * 우선 display를 사용해서 그냥 정적으로 나타나게는 했음,,,슬라이딩 효과는 없음
    ```
    //호버시 변경 되는 값
    .brand_txt
      left: 100%
      z-index: 1
      display: block

    // 호버 전
    .brand_txt
      left: 0
      z-index: -1
      display: none
      transition: all 0.5s ease-in-out
    ```


- [ 해결방법 ]
  + 아마도 본래 사이트 크랩드 콘텐츠는 너비값이 정해져있기 때문에 브랜드 리스트들이 나열되고 마지막쪽에 있는 리스트들만 따로 효과를 준것같다. 하지만 난 반응형으로 만들어야하기 때문에 너비를 고정시키지 않아야함. 그래서 이부분에 대해선 디자인을 변경하기로 결정했다.
  + 슬라이딩 하면서 나오는 콘텐츠는 opacity값을 주면서 그냥 효과적으로 스르륵 나타나는 효과를 줬다.
  ```
  //호버시 변경 되는 값
  .brand_txt
    top: 101%
    z-index: 2
    opacity: 1

  // 호버 전
  .brand_txt
    top: 0
    z-index: -1;
    opacity: 0;
  ```




###13. 상단메뉴 회원가입 버튼
- [ 문제점 ]
  + 회원 가입버튼은 ir기법으로 이미지 버튼이다.
  + 모바일 안드로이드와 아이폰이 보여지는것이 다름,, ㅜㅜㅜ 
  + 안드로이드를 맞추면 아이폰에서 어긋나고
  + 아이폰으로 맞추면 안드로이드가 어긋남
  ```
  // 회원가입 버튼
  .join_btn
    @extend %ir
    float: inherit // 속성을 안주면 안드로이드에선 버튼이 왼쪽으로 붙음
    width: 72px
    height: 56px
    margin-top: -17px
    margin-right: 5px
    background:
      image: url(../images/loop_00000.png)
    +device(only_s)
      margin-right: 0px
      margin-top: -35px // 안드로이드는 위치가 맞고..아이폰은 너무 상단으로 붙음
  ```

- [ 해결 방법 1 ]
  + position으로 띄워서 맞춤
  ```
  .join_btn
  @extend %ir
  width: 72px
  height: 56px
  margin-top: -17px
  margin-right: 5px
  background:
    image: url(../images/loop_00000.png)
  +device(only_s)
    position: absolute
    right: -15px
    top: 18px
  ```

- [ 해결 방법 2 ]
  + 버튼을 없애버려????
    * 어차피 모바일에서 햄버거 버튼을 누르면 로그인 및 회원가입 메뉴가 나옴
    * 굳이 화면상단에 또 있을 필요가 있을까???


###14. 셀렉트 마우스가 영역을 벗어나면 옵션리스트들 닫힘
- [ 문제점 ]
  + 셀렉트 박스가 클릭되면 옵션들이 나타나고 옵션이나 셀렉트 영역에서 마우스가 벗어나면 셀렉트 영역은 닫히는 걸 구현하고 싶다.
  + 그래서 mouseout을 사용했는데 이런,, 옵션영역으로 마우스가 넘어가기도 전에 영역히 사라짐..

- [ 해결 방법 ]
  + mouseout을 대신에 mouseleave 이벤트를 사용
  + mouseout mouseenter 차이점 
    * 자식 요소까지 인식하느냐 안하느냐에 차이가 있다.
  ```
  // 마우스 아웃시 
  select_btm_content.onmouseleave = function(){
    select_btm_content.classList.remove('show');
  };
  ```


###15. 마우스 이벤트 종류 
- click : 클릭할 때 
- dbclick : 더블 클릭할 때
- mousedown : 마우스 버튼을 누를 때
- mouseup : 마우스 버튼을 뗄 때
- mousemove : 마우스를 움직일 때
- **mouseout, mouseover**
  + [mouseover 설명](http://api.jquery.com/mouseover/)
  + 마우스 움직임이 자식 엘리먼트에 접근했을 때도 이벤트가 걸린 요소에 계속 영향을 미침 ( == 버블링) 그래서 요소 마우스를 안에서 움직일 때마다 이벤트 발생!! 성능저하..
  + mouseout : 마우스가 요소를 벗어날 때
  + mouseover : 마우스가 요소 안에 들어올 때
- **mouseenter, mouseleave**
  + [mouseleave 설명](http://api.jquery.com/mouseleave/)
  + 오로지 이벤트가 걸린 요소 영역에서만 이벤트 발생 => 자식 엘리먼트에는 동작하지 않는다.
  + mouseenter : 마우스가 요소의 밖에서 안으로 움직일 때
  + mouseleave : 마우스가 요소의 안에서 밖으로 움직일 때

###16. 셀렉트 클릭후 옵션들이 오픈되고 마우스가 다른영역으로 가서 클릭하면.....
- [ 문제점 ]
  + 셀렉트를 클릭한 후에 옵션영역으로 안가고 다른 영역으로 마우스를 옮기고 클릭했는데 옵션영역이 그대로 열려있다.
  + 기존 사이트에서는 다른곳을 클릭하게되면 셀렉트의 옵션영역은 닫힘.
  ```
  // 셀렉트 기본 값에서 포커스가 떠나면,, 이라고 했는데 안돼,,,
  // 여기서 벗어나면 옵션 영역으로도 포커스가 안되지 닫혀버리니까,,,
  select_btm_title.onblur = function(){
    select_btm_content.classList.remove('show');
  };

  // NO!!! NO!!!

  ```
- [ 해결 방법 ]
  + ??????????????????????????????


###17. 자바스크립트 크로스브라우징
- [ 문제점 ]
  - classList 사용 : IE 최신버전도 완벽히 호완이 안됨.
  - 작업하면서 윈도우를 매번 확인해야한다는것을 다시 한번 깨달았다... ㅠㅠ
  - 아래 코드는 [classList 사용한 코드](https://github.com/sseom/suns/blob/master/cjone/js/all-classList.js)이다. 고쳐보쟈!!
  ```
    //투글
    function classToggle(element, class_name){

      var is_showing = element.classList.contains(class_name);

      if( is_showing ){
        element.classList.remove(class_name);
      }else{
        element.classList.add(class_name);
      }

    }

  ```

- [ 해결 방법 1 ]
  + setAttribute() 사용 : 투글
  ```
  var get_class = element.getAttribute('class');
  
  var is_showing = element.className.indexOf(class_name) > -1;

  if(is_showing){
      // 클래스 제거
      element.setAttribute('class', "search_btn_wrap");
   }else{
      // 클래스 추가
      element.setAttribute('class', get_class + " " + class_name);
  }
  
  ```


- [ 해결 방법 2 ]
  + className() 사용
  + addClass() , removeClass() , toggleClass()
  + ==> 이 방법으로 코드 수정!!!
  ```
  // 클래스 추가 
  function addClass(el, class_name) {
    // 순환문에서 사용할때 클래스가 계속 추가되는 현상 방지
    // 클래스에 내가 추가하려는 클래스명이 있는지 확인후 
    var is_showing = el.className.indexOf(class_name) > -1;
    // 있으면 실행말고 나가
    if( is_showing ){ return; }
    // 없으니까 추가돼
    // " " 공백 넣어서 클래스 추가 
    // 왜?  안그럼 기존에 있던 클래스랑 봉백없이 붙어버림 한개의 단어가 되어버림
    // 예) btn on 이 되어야하는데 btnon 이 되어버림
    el.className += " " + class_name;
  }

  // 클래스 제거
  function removeClass(el, class_name) {
    // 정규식표현
    // \s 공백  |  ^ 문자 시작
    // 앞 | 뒤   ==> 문자 첫번째에 공백을!
    // \s 공백 | 선택 $ 문자 끝
    // 앞 | 뒤   ==> 문자 마지막번째에 공백을!
    var ck = new RegExp( "(\\s|^)"  +  class_name  + "(\\s|$)");

    // addClass 코드를 보면 클래스가 추가될 때 공백이 하나씩 생겨서 붙는다.
    // 그래서 trim() 메서드를 사용해서 단어의 앞과 뒤의 공백지움. 
    el.className = el.className.replace( ck , ' ').trim();
  }

  // 투글 클래스
  function toggleClass(el, class_name) {
    // indexOf()를 사용해서 클래스가 있는지 확인함. 불리언값을 반환
    var is_showing = el.className.indexOf(class_name) > -1;
    if( is_showing ){
      removeClass(el, class_name) 
    }else{
      addClass(el, class_name)
    }
  }
  ```

###18. 핫 아이템 메인 콘텐츠들의 레이아웃 (타일레이아웃 비슷한??)
- [ 문제점 ]
  + 하,, 메인콘텐츠 부분에서 레이아웃 잡는데 곤욕을 치뤘다....
  + flat이야?? display:inline-block 이야,,,
- [ 해결방법 ]
  + 결국은 혼용해서 사용해서 잡긴했는데,, 어렵다.......
- [ 문제점 2 ]
  + 흠,,, 태블릿 까진 콘텐츠들이 보여지는데 있어서 괜찮은데 모바일은 콘텐츠들의 사이즈를 조정해야할것 같다.  => 태블릿일때 가로현 콘텐츠와, 모바일일 땐 모든 콘텐츠들의 너비 퍼센트로 조정


###19. 가상선택자(pseudo selector) 사용시 주의할 점.
- :: , :  콜론사용
- 표준은 ::
- 비표준은 :
- [참고블러그](http://tobyyun.tumblr.com/post/34698478144/%EA%B0%80%EC%83%81%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8-before-after%EC%99%80-before-after%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%8A%94)
  +  CSS3 부터 명확히 분류하기 위해 => 가상 클래스에는 싱글콜론, 가상 엘리먼트에는 더블콜론 사용.
  +  IE8의 경우 CSS3를 지원하지 않기때문에 싱글콜론만 지원.
```
/* CSS2 문법*/
element:after  { style properties }

/* CSS3 문법*/
element::after { style properties }
```




###20. 익스플로어에서 검색버튼이 안눌린다 왜 그럴까???????????????????????????
