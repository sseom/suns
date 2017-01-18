(function(global){
  'use strict';

/**
 * -------------------------------------
 * GNB + Util-Menu 영역 코드
 * -------------------------------------
 */

//대상선택
var gnb = document.querySelector('.gnb_wrap');
var gnb_menu = document.querySelector('.gnb_menu');
var sub_menu = document.querySelectorAll('.sub_menu');
var depth_1 = document.querySelectorAll('.depth_1');
var is_sub = document.querySelectorAll('.is_sub');
var out_focus = document.querySelector('.out_focus');

//마우스 오버, 아웃
gnb_menu.onmouseover = function(){
  document.styleSheets[0].addRule('.header_wrap::after','display: block');
};

gnb_menu.onmouseout = function(){
  document.styleSheets[0].addRule('.header_wrap::after','display: none');
  for(var k = 0; k < sub_menu.length ; k++){
    sub_menu[k].classList.remove('depth_2');
  }
};

//---------------- 모바일 태블릿 버전일 때 GNB + Util-Menu -------------------

// 모바일 태블릿 버전일 때 메뉴 오픈, 클로즈 버튼 

// 대상선택
var total_menu_open = document.querySelector('.total_menu_open');
var total_menu_close = document.querySelector('.total_menu_close');
var modal_wrap = document.querySelector('.modal_wrap');
var manu_wrap = document.querySelector('.manu_wrap');
var scroll_height = document.body.scrollHeight;
var inner_height = window.innerHeight;
var outer_height = window.outerHeight;

// 햄버거 버튼
total_menu_open.onclick = function(){
  document.styleSheets[0].addRule('.modal_wrap::after',['display: block']);
  document.styleSheets[0].addRule('.modal_wrap::after',['height:' +inner_height + 'px']);
  document.body.style.overflow = 'hidden';
  manu_wrap.style.maxHeight = inner_height + 'px' ;
  modal_wrap.classList.add('modal_on');
};

total_menu_close.onclick = function(){
  document.styleSheets[0].addRule('.modal_wrap::after','display: none');
  modal_wrap.classList.remove('modal_on');
};

// gnb 메뉴 : 클릭 이벤트
var is_sub_idx = is_sub.length;
for(var n = 0; n < is_sub_idx; n++){
  var sub = is_sub[n];
  sub.num = n;
  sub.onclick = function(){
    var idx = this.num;
    console.log(sub_menu[idx]);
    var is = sub_menu[idx].classList.contains('depth_2_on');
    console.log(is);
    if( !is ){
      sub_menu[idx].classList.add('depth_2_on');
      sub_menu[idx].classList.remove('depth_2');
    }else{
      sub_menu[idx].classList.remove('depth_2_on');
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
    document.styleSheets[0].addRule('.header_wrap::after','display: block');
    document.styleSheets[0].addRule('.gnb_menu::after','display: block');
    for(var l = 0; l < sub_menu.length ; l++){
      sub_menu[l].classList.add('depth_2');
    }
  };
}


//포커스가 2뎁스 마지막 리스트 아이템을 벗어나면 사라져라
out_focus.onblur = function(){
  document.styleSheets[0].addRule('.header_wrap::after','display: none');
  document.styleSheets[0].addRule('.gnb_menu::after','display: none');
  for(var k = 0; k < sub_menu.length ; k++){
    sub_menu[k].classList.remove('depth_2');
  }
}



/**
 * -------------------------------------
 * GNB : 검색 버튼 동작
 * -------------------------------------
 */
var search_wrap = document.querySelector('.search_wrap');
var search_btn_wrap = document.querySelector('.search_btn_wrap');
var search_btn = document.querySelector('.search_btn');
var search_content = document.querySelector('.search_content');

search_btn.onclick = function(){
  classToggle(search_btn_wrap, 'search_btn_on');
};

function classToggle(element, class_name){

  var show = element.classList.contains(class_name);

  if( show ){
    element.classList.remove(class_name);
    document.styleSheets[0].addRule('.search_wrap::before',['height: 0']);
    search_content.classList.remove('slide_down');

  }else{
    element.classList.add(class_name);
    document.styleSheets[0].addRule('.search_wrap::before',['height: 145px']);
    search_content.classList.add('slide_down');
  }

}

/**
 * -------------------------------------
 * 셀렉트 박스 구현 : 헤더(Util-Menu 쪽) 1곳, 풋터 1곳
 * -------------------------------------
 */

var select_content = document.querySelector('.select_content');
var select_defult = document.querySelector('.select_defult');
var out_select = document.querySelector('.out_select');

select_defult.onclick = function(){
  var open = select_content.classList.contains('open');
  if( open ){
    select_content.classList.remove('open');
  }else{
    select_content.classList.add('open');
  }
  return false;
};
8
// 포커스 동작
out_select.onblur = function(){
  select_content.classList.remove('open');
};

// 마우스 아웃시 나가
select_content.onmouseleave = function(){
  select_content.classList.remove('open');
};


// 하단 셀렉트
var select_btm_title = document.querySelector('.select_btm_title');
var select_btm_content = document.querySelector('.select_btm_content');
var out_select_btm = document.querySelector('.out_select_btm');

select_btm_title.onclick = function(){
  var show = select_btm_content.classList.contains('show');
  if( show ){
    select_btm_content.classList.remove('show');
    console.log('click');
  }else{
    select_btm_content.classList.add('show');
  }
  return false;
};

// 포커스 동작
out_select_btm.onblur = function(){
  select_btm_content.classList.remove('show');
};

// 마우스 아웃시 나가
select_btm_content.onmouseleave = function(){
  select_btm_content.classList.remove('show');
};



})(this);


//-----------------------------------------------------------------


(function(global){
  'use strict';

/**
 * -------------------------------------
 * 브랜드 콘텐츠
 * -------------------------------------
 */

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
    allRemove();
    activeBtn(this);
  };
  enter_btn.onclick = function(){
    allAdd();
    listCycleClassRmove(enter_list);
    activeBtn(this);
  };
  food_btn.onclick = function(){
    allAdd();
    listCycleClassRmove(food_list);
    activeBtn(this);
  };
  shopping_btn.onclick = function(){
    allAdd();
    listCycleClassRmove(shopping_list);
    activeBtn(this);
  };
  community_btn.onclick = function(){
    allAdd();
    listCycleClassRmove(community_list);
    activeBtn(this);
  };
  travel_btn.onclick = function(){
    allAdd();
    listCycleClassRmove(travel_list);
    activeBtn(this);
  };
  express_btn.onclick = function(){
    allAdd();
    listCycleClassRmove(express_list);
    activeBtn(this);
  };

// 함수

// 리스트 순환해서 off_list 클래스 추가
function listCycleClassAdd(lis){
  var li_length = lis.length;
  for(var i = 0; i < li_length; i++ ){
    lis[i].classList.add('off_list');
  }
}
// 리스트 순환해서 off_list 클래스 삭제
function listCycleClassRmove(lis){
  var li_length = lis.length;
  for(var i = 0; i < li_length; i++ ){
    lis[i].classList.remove('off_list');
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
    var is_class = btns[i].classList.contains('active_brand_part');
    if( is_class ){
      btns[i].classList.remove('active_brand_part');
    }
    me.classList.add('active_brand_part');
  }
}


})(this);














