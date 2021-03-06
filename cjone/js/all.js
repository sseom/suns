/**
 * -------------------------------------
 * 스크롤 이벤트
 * -------------------------------------
 */
(function(global){
  'use strict';
  var top_btn = document.querySelector('.top_btn');
  // 스크롤의 위치가 맨위라면 
  // 탑버튼은 숨기고 스크롤링이 생기면 탑버튼은 나타나라
  window.onscroll = function(){
    top_btn.style.display = 'block';

    var scroll_location = window.pageYOffset;
    if( scroll_location === 0 ){
      top_btn.style.display = 'none';
    }
  };

  // 그리고 탑으로 올라갈때 스무스 하게 올라가기

})(this);

//-------------------------------------------------[ END ]


/**
 * -------------------------------------
 * 브랜드 콘텐츠
 * -------------------------------------
 */
(function(global){
  'use strict';

  // 브랜트 파트 버튼 : 전체 엔터 외식 쇼핑 통신 여행 유통 
  // 버튼 활성화(.active_brand_part) 기본값 : 전체버튼
  // 실행 동작 : 파트 버튼을 클릭하면 버튼이 활성화 되고 각 파트에 해당하는 브랜드 리스트 출력
  // 예시상황 : 엔터를 클릭하면 버튼이 활성화되고 엔터 클래스를 가진 리스트만 출력하고 다른 리스트들은 다 숨겨짐

  // 투두리스트
  // 대상찾기 : 버튼 및 리스트들 찾아서 변수에 저장한다.
  // 이벤트 : 클릭하면 숨겨질 리스트들에 off 클래스를 붙여서 숨기고 해당 리스트는 off 클래스 제거
  // 리스트를 순환해서 off 클래스 추가, 제거 기능 만들기
  // 브랜드 버튼 : 활성화는 .active_brand_part 클래스추가, 제거로 제어 기능만들기
  // 버튼에 이벤트가 일어나면 실행할 기능들 바인딩


  // 브랜드 파트 버튼
  var brand_all_btn = document.querySelector('.brand_all_btn'),
      enter_btn = document.querySelector('.enter_btn'),
      food_btn = document.querySelector('.food_btn'),
      shopping_btn = document.querySelector('.shopping_btn'),
      community_btn = document.querySelector('.community_btn'),
      travel_btn = document.querySelector('.travel_btn'),
      express_btn = document.querySelector('.express_btn');

  // 해당 파트 브랜드 리스트들
  var enter_list = document.querySelectorAll('.enter'),
      food_list = document.querySelectorAll('.food'),
      shopping_list = document.querySelectorAll('.shopping'),
      community_list = document.querySelectorAll('.community'),
      travel_list = document.querySelectorAll('.travel'),
      express_list = document.querySelectorAll('.express');

  var class_lis = [
        food_list,
        enter_list,
        shopping_list,
        community_list,
        travel_list,
        express_list
      ];
  var class_lis_len = class_lis.length;


  // 이벤트 바인딩
  brand_all_btn.onclick = function(){
    //지우고
    allRemove();
    //버튼활성화
    activeBtn(this);
    return false;
  };
  enter_btn.onclick = function(){
    // 모든 리스트들에 클래스 추가하고
    allAdd();
    // 해당부분 리스트들 클래스 삭제
    listCycleClassRmove(enter_list);
    activeBtn(this);
    return false;
  };
  food_btn.onclick = function(){
    allAdd();
    listCycleClassRmove(food_list);
    activeBtn(this);
    return false;
  };
  shopping_btn.onclick = function(){
    allAdd();
    listCycleClassRmove(shopping_list);
    activeBtn(this);
    return false;
  };
  community_btn.onclick = function(){
    allAdd();
    listCycleClassRmove(community_list);
    activeBtn(this);
    return false;
  };
  travel_btn.onclick = function(){
    allAdd();
    listCycleClassRmove(travel_list);
    activeBtn(this);
    return false;
  };
  express_btn.onclick = function(){
    allAdd();
    listCycleClassRmove(express_list);
    activeBtn(this);
    return false;
  };

  // 함수

  // 리스트 순환해서 off_list 클래스 추가
  function listCycleClassAdd(lis){
    var li_length = lis.length;
    for(var i = 0; i < li_length; i++ ){
      // lis[i].className = " " + 'off_list';
      addClass(lis[i], 'off_list');
    }
  }
  // 리스트 순환해서 off_list 클래스 삭제
  function listCycleClassRmove(lis){
    var li_length = lis.length;
    for(var i = 0; i < li_length; i++ ){
      removeClass(lis[i], 'off_list');
    }
  }

  // 모든 리스트들의 클래스 제거
  function allRemove(){
    for(var i = 0; i < class_lis_len ; i++ ){
      listCycleClassRmove(class_lis[i]);
    }
  }

  // 모든 리스트들의 클래스 추가
  function allAdd(){
    for(var i = 0; i < class_lis_len ; i++ ){
      listCycleClassAdd(class_lis[i]);
    }
  }

  // 브랜드 파트 버튼 활성화 
  function activeBtn(me){
    var brand_part = document.querySelector('.brand_part');
    var btns = brand_part.getElementsByTagName('a');

    for(var i = 0 ; i < btns.length ; i++ ){
      var is_class = btns[i].className.indexOf('active_brand_part') > -1;
      if( is_class ){
        removeClass(btns[i], 'active_brand_part');
      }
      removeClass(me, 'active_brand_part');
    }
  }


})(this);

//-------------------------------------------------[ END ]

/**
 * -------------------------------------
 * 이미지 캐러셀
 * -------------------------------------
 */
(function(global){
  'use strict';

  // 캐러셀 전체 영역
  var carousel_wrap = document.querySelector('.carousel_wrap');
  // 캐러셀 영역 너비
  var container_width = carousel_wrap.clientWidth;
  // 모든 이미지뷰 콘텐츠를 가지고 있는 영역
  var view = carousel_wrap.querySelector('.carousel_view_wrap');
  // 각 이미지 캐러셀 콘텐츠
  var view_contents = view.querySelectorAll('.view_content');
  // 이미지 콘텐츠의 갯수
  var view_con_total = view_contents.length;

  // 버튼
  var prev_button = document.querySelector('.previous_btn');
  var next_button = document.querySelector('.next_btn');
  var play_btn = document.querySelector('.play_btn');
  var stop_btn = document.querySelector('.stop_btn');

  // 인디케이터
  var tabs = document.querySelectorAll('.carousel_tab');
  var tabs_total = tabs.length;
  // 상태변수
  var selected_num    = 0;
  var selected_tab    = null;


//-----------------------------------------------------------



  // 480px 미만 사용할 JavaScript
  var img_wraps = document.querySelectorAll('.img_wrap');
  var img_wraps_num = img_wraps.length;

  if (matchMedia("only screen and (max-width: 480px)").matches) {
    for(var m = 0 ; m < img_wraps_num ; m++){
      // 모바일용 이미지 변경
      var img_con = img_wraps[m].firstChild;
      img_con.setAttribute('src', "images/slider-content/silde-0" + (m+1) +"-top.jpg");
    }
  }


//-----------------------------------------------------------

  // 뷰영역 : 브라우져 너비 * 이미지 갯수
  view.style.width = container_width  * view_con_total + 'px';


// 각 캐러셀 콘텐츠 순환 : 브라우져 너비만큼 이미지영역 너비를 설정
  for ( var k = 0 ; k < view_con_total ; k++ ) {
    view_contents[k].style.width = container_width + 'px';
  }

  //인디케이터 반복 순환 
  for (var i= 0, l = tabs_total; i < l; i++) {
    var tab = tabs[i];
    tab.num = i;
    tab.onclick = function() {
      selected_num = this.num;
      activeViewContent( this, selected_num );
    };
  }

  // 자동 슬라이드
  var time_move = setInterval(nextViewContent , 3000);

  // 슬라이드 컨트롤 버튼
  play_btn.onclick = function (){
    toggleSleder(this, 'stop_btn');
  };
  prev_button.onclick = prevViewContent;
  next_button.onclick = nextViewContent;

  function prevViewContent() {
    selected_num = --selected_num % tabs_total;
    if ( selected_num < 0 ) {
      selected_num = tabs_total - 1;
    }
    activeViewContent( tabs[selected_num], selected_num );
  }

  function nextViewContent() {
    selected_num = ++selected_num % tabs_total;
    activeViewContent( tabs[selected_num], selected_num );
  }

  //--------------------------------------------------
  // indicator
  function activeViewContent(tab, num) {
    if ( selected_tab !== null ) {
      removeClass(selected_tab, 'active_tab');
    }
    addClass(tab, 'active_tab');
    selected_tab = tab;
    view.style.transform = 'translateX('+ ( -1 * num * container_width )+'px)';
  }

// 투글 슬라이더 
function toggleSleder(el, class_name) {
  // indexOf()를 사용해서 클래스가 있는지 확인함. 불리언값을 반환
  var is_showing = el.className.indexOf(class_name) > -1;
  if( is_showing ){
    removeClass(el, class_name);
    time_move = setInterval(nextViewContent , 3000);
  }else{
    addClass(el, class_name);
    clearInterval(time_move);
  }
}

  // 사용자 액션
  tabs[0].onclick();


//-----------------------------------------------------------

  // 디바이스가 리사이즈 되면...
  window.onresize = function() {
    container_width = carousel_wrap.clientWidth;
    // 뷰영역 : 브라우져 너비 * 이미지 갯수
    view.style.width = container_width  * view_con_total + 'px';

    // 각 캐러셀 콘텐츠 순환 : 브라우져 너비만큼 이미지영역 너비를 설정
      for ( var k = 0 ; k < view_con_total ; k++ ) {
        view_contents[k].style.width = container_width + 'px';
      }

    // 480px 미만 사용할 JavaScript
    if (matchMedia("only screen and (max-width: 480px)").matches) {
      for(var m = 0 ; m < img_wraps_num ; m++){
        // 모바일용 이미지 변경
        var img_con = img_wraps[m].firstChild;
        img_con.setAttribute('src', "images/slider-content/silde-0" + (m+1) +"-top.jpg");
      }
    }else if(matchMedia("only screen and (min-width: 481px)").matches){
      for(var m = 0 ; m < img_wraps_num ; m++){
        // 태블릿, 데스크탑 이미지 변경
        var img_con = img_wraps[m].firstChild;
        img_con.setAttribute('src', "images/slider-content/silde-0" + (m+1) +".jpg");
      }
    }
  }

})(this);

//-------------------------------------------------[ END ]


/**
 * -------------------------------------
 * GNB
 * -------------------------------------
 */

(function(global){
  'use strict';

  /**
   * -------------------------------------
   * GNB + Util-Menu 영역 코드
   * -------------------------------------
   */

  //대상선택
  var gnb = document.querySelector('.gnb_wrap'),
      gnb_menu = document.querySelector('.gnb_menu'),
      sub_menu = document.querySelectorAll('.sub_menu'),
      depth_1 = document.querySelectorAll('.depth_1'),
      is_sub = document.querySelectorAll('.is_sub'),
      out_focus = document.querySelector('.out_focus'),
      doc_after = document.styleSheets[0],
      body = document.body;

  //마우스 오버, 아웃
  gnb_menu.onmouseover = function(){
    doc_after.addRule('.header_wrap:after','display: block');
  };

  gnb_menu.onmouseout = function(){
    doc_after.addRule('.header_wrap:after','display: none');
    for(var k = 0; k < sub_menu.length ; k++){
      removeClass(sub_menu[k], 'depth_2');
    }
  };

  //---------------- 모바일 태블릿 버전일 때 GNB + Util-Menu -------------------

  // 모바일 태블릿 버전일 때 메뉴 오픈, 클로즈 버튼 

  // 대상선택
  var total_menu_open = document.querySelector('.total_menu_open'),
      total_menu_close = document.querySelector('.total_menu_close'),
      modal_wrap = document.querySelector('.modal_wrap'),
      manu_wrap = document.querySelector('.manu_wrap'),
      inner_height = window.innerHeight;

  // 햄버거 버튼
  total_menu_open.onclick = function(){
    doc_after.addRule('.modal_wrap:after',['display: block']);
    doc_after.addRule('.modal_wrap:after',['height:' +inner_height + 'px']);
    body.style.overflow = 'hidden';
    manu_wrap.style.maxHeight = inner_height + 'px' ;
    addClass(modal_wrap, 'modal_on');

  };

  total_menu_close.onclick = function(){
    doc_after.addRule('.modal_wrap:after','display: none');
    body.style.overflowX = 'hidden';
    body.style.overflowY = 'scroll';
    removeClass(modal_wrap, 'modal_on');
  };

  // gnb 메뉴 : 클릭 이벤트
  var is_sub_idx = is_sub.length;
  for(var n = 0; n < is_sub_idx; n++){
    var sub = is_sub[n];
    sub.num = n;
    sub.onclick = function(){
      var idx = this.num;
      // console.log(sub_menu[idx]);
      var is = sub_menu[idx].className.indexOf('depth_2_on') > -1;
      // console.log(is);
      if( !is ){
        addClass(sub_menu[idx], 'depth_2_on');
        removeClass(sub_menu[idx], 'depth_2');
      }else{
        removeClass(sub_menu[idx], 'depth_2_on');
      }
      return false;
    };
  }



  /**
   * ----------------------------------
   * GNB : 탭 포커스를 위한 코드 
   * ----------------------------------
   */

  for(var i = 0; i < depth_1.length ; i++){
    depth_1[i].onfocus = function(){
      doc_after.addRule('.header_wrap:after','display: block');
      doc_after.addRule('.gnb_menu:after','display: block');
      for(var l = 0; l < sub_menu.length ; l++){
        addClass(sub_menu[l], 'depth_2');
      }
    };
  }


  //포커스가 2뎁스 마지막 리스트 아이템을 벗어나면 사라져라
  out_focus.onblur = function(){
    doc_after.addRule('.header_wrap:after','display: none');
    doc_after.addRule('.gnb_menu:after','display: none');
    for(var k = 0; k < sub_menu.length ; k++){
      removeClass(sub_menu[k], 'depth_2');
    }
  }

  /**
   * -------------------------------------
   * GNB : 검색 버튼 동작
   * -------------------------------------
   */
  var search_wrap = document.querySelector('.search_wrap'),
      search_btn_wrap = document.querySelector('.search_btn_wrap'),
      search_btn = document.querySelector('.search_btn'),
      search_content = document.querySelector('.search_content');

  search_btn.onclick = function(){
    classToggle(search_btn_wrap, 'search_btn_on');
  };


function classToggle(el, class_name) {

  var is_showing = el.className.indexOf(class_name) > -1;

  if( is_showing ){
    el.className = el.className.replace( class_name , ' ').trim();
    doc_after.addRule('.search_wrap:before',['height: 0']);
    removeClass(search_content, 'slide_down');
  }else{
    el.className += " " + class_name;
    doc_after.addRule('.search_wrap:before',['height: 145px']);
    addClass(search_content, 'slide_down');
  }

}


  /**
   * -------------------------------------
   * 셀렉트 박스 구현 : 헤더(Util-Menu 쪽) 1곳, 풋터 1곳
   * -------------------------------------
   */

  var select_content = document.querySelector('.select_content'),
      select_defult = document.querySelector('.select_defult'),
      out_select = document.querySelector('.out_select');

  select_defult.onclick = function(){
    var open = select_content.className.indexOf('open') > -1;
    if( open ){
      removeClass(select_content, 'open');
    }else{
      addClass(select_content, 'open');
    }
    return false;
  };

  // 포커스 동작
  out_select.onblur = function(){
    removeClass(select_content, 'open');
  };

  // 마우스 아웃시 나가
  select_content.onmouseleave = function(){
    removeClass(select_content, 'open');
  };


  // 하단 셀렉트
  var select_btm_title = document.querySelector('.select_btm_title'),
      select_btm_content = document.querySelector('.select_btm_content'),
      out_select_btm = document.querySelector('.out_select_btm');

  select_btm_title.onclick = function(){
    var show = select_btm_content.className.indexOf('show') > -1;
    if( show ){
      removeClass(select_btm_content, 'show');
    }else{
      addClass(select_btm_content, 'show');
    }
    return false;
  };

  // 포커스 동작
  out_select_btm.onblur = function(){
    removeClass(select_btm_content, 'show');
  };

  // 마우스 아웃시 나가
  select_btm_content.onmouseleave = function(){
    removeClass(select_btm_content, 'show');
  };

})(this);


//-------------------------------------------------[ END ]












/**
 * -------------------------------------
 * 사용자 정의 함수
 * -------------------------------------
 */

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
    removeClass(el, class_name);
  }else{
    addClass(el, class_name);
  }
}


function isClass(el, class_name){
  var is = el.className.indexOf(class_name) > -1;
  return is;
}


//-------------------------------------------------[ END ]
