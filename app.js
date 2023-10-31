

function component(elementNode, attributes, children){
  // html element 문자열로 "조립 assemble"하는 패턴
  let elementStr = `<${elementNode}`;
  for (let key in attributes) {
    // 객체의 key를 배열처럼 순회
    // 매개변수 attributes는 객체여야 for in 문을 사용할 수 있다.
    // 대표적으로 python에서는 해당 문법 접근이 기본 반복문
    elementStr += `${key}="${attributes}"`;
  }
  elementStr+='>';

  // 만약 children 이라는 값이 "있다면" true 판정
  // 조건식에서 "존재유무"로도 사용하기도 한다.
  if (children) {
    children.forEach((child)=>{
      if(typeof child === "string"){
        elementStr += child;
      } else {
        elementStr+= component(child.elementNode, child.attributes, child.children);
      }
    })
  }

}