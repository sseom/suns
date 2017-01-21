////////////////////////////////////////////////////////////////////////////////////
//
//  * 사용자 정의 함수
//
////////////////////////////////////////////////////////////////////////////////////


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