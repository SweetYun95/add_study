function JsxComponent3() {
   // 3. 조건부 렌더링 연산자 and 와 or
   // A && B -> A 가 ture면 B를 렌더링, A 가 false면 A를 렌더링
   // return <div> {'리액트' && <h1>리액트입니다.</h1>} </div>

   // A || B -> A 가 ture면 A를 렌더링, A 가 false면 B를 렌더링
   return <div> {'' || <h1>리액트입니다.</h1>} </div>
}

export default JsxComponent3
