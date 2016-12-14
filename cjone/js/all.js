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
var out_focus =document.querySelector('.out_focus');

//마우스 오버, 아웃
gnb.onmouseover = function(){
  document.styleSheets[0].addRule('.header_wrap::after','display: block');
};

gnb.onmouseout = function(){
  document.styleSheets[0].addRule('.header_wrap::after','display: none');
  document.styleSheets[0].addRule('.gnb_wrap::after','display: none');
  for(var k = 0; k < sub_menu.length ; k++){
    sub_menu[k].classList.remove('depth_2');
  }
};

/**
 * ----------------------------------
 * 탭 포커스를 위한 코드 
 * ----------------------------------
 */

for(var i = 0; i < depth_1.length ; i++){
  depth_1[i].onfocus = function(){
    document.styleSheets[0].addRule('.header_wrap::after','display: block');
    document.styleSheets[0].addRule('.gnb_wrap::after','display: block');
    for(var l = 0; l < sub_menu.length ; l++){
      sub_menu[l].classList.add('depth_2');
    }
  };
}

//포커스가 2뎁스 마지막 리스트 아이템을 벗어나면 사라져라
out_focus.onblur = function(){
  document.styleSheets[0].addRule('.header_wrap::after','display: none');
  document.styleSheets[0].addRule('.gnb_wrap::after','display: none');
  for(var k = 0; k < sub_menu.length ; k++){
    sub_menu[k].classList.remove('depth_2');
  }
}


})(this);