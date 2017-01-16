(function(global){
  'use strict';

/**
 * -------------------------------------
 * GNB 영역 코드
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

//---------------- 모바일 태블릿 버전일 때  -------------------

// 모바일 태블릿 버전일 때 메뉴 오픈, 클로즈 버튼 

// 대상선택
var total_menu_open = document.querySelector('.total_menu_open');
var total_menu_close = document.querySelector('.total_menu_close');
var modal_wrap = document.querySelector('.modal_wrap');
var manu_wrap = document.querySelector('.manu_wrap');
var scroll_height = document.body.scrollHeight;
var inner_height = window.innerHeight;
var outer_height = window.outerHeight;

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
 * 탭 포커스를 위한 코드 
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
 * 검색 버튼 동작
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
 * 셀렉트 구현
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

// 포커스 동작
select_defult.onfocus = function(){
  select_content.classList.add('open');
};
out_select.onblur = function(){
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
  }else{
    select_btm_content.classList.add('show');
  }
  return false;
};

// 포커스 동작
select_btm_title.onfocus = function(){
  select_btm_content.classList.add('show');
};
out_select_btm.onblur = function(){
  select_btm_content.classList.remove('show');
};




})(this);
















