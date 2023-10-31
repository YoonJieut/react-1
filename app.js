/**
 * 에디터에 드디어 내장된 JSDoc 주석 작성 방식
 * 
 * @param {string} elementNode 
 * @param {object} attributes 
 * @param {array} children 
 * @returns string
 * 
 * @example
 * component(
 *  'div',
 *  { style : 'color:blue;' },
 *  [
 *    component('h1', {},['This is Page 1'])
 *  ]
 * )
 */


function component(elementNode, attributes, children){
  // html element 문자열로 "조립 assemble"하는 패턴
  let elementStr = `<${elementNode}`;
  for (let key in attributes) {
    // 객체의 key를 배열처럼 순회
    // 매개변수 attributes는 객체여야 for in 문을 사용할 수 있다.
    // 대표적으로 python에서는 해당 문법 접근이 기본 반복문
    elementStr += `${key}="${attributes[key]}"`;
  }
  elementStr+='>';

  // 만약 children 이라는 값이 "있다면" true 판정
  // 조건식에서 "존재유무"로도 사용하기도 한다.
  if (children) {
    children.forEach((child)=>{
      // children의 매개변수는 배열이여야 함
      // 배열의 각 요소를 순회하는 forEach()
      // 절차형으로 for문을 사용해도 되지만, 자바스크립트 다운 방식으로 작성
      if(typeof child === "string"){
        elementStr += child;
      } else {
        elementStr+= component(child.elementNode, child.attributes, child.children);
      }
    })
  }

  elementStr += `</${elementNode}>`; // 맨 위의 변수에 덧붙혀서 반환
  return elementStr;
  // 함수가 호출되는 순간 문자열이 반환
}

// 문자열로 잘 작동되는지 테스트
let test =
  component('div', {style : 'color:blue;'}, [
    component('h1',{},['this is page1']),
    component('h3',{},['this is h3'])
  ]);
console.log(test);