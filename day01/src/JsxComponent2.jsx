function JsxComponent2() {
   // 2. {} 중괄호를 이용해 자바스크립트 표현식 사용 가능
   const name = '리액트'

   return (
      <>
         <h1>{name} 안녕!</h1>
         <p>{name === '리액트' ? <span>리액트 입니다.</span> : <span>아닙니다.</span>}</p>
      </>
   )
}

export default JsxComponent2
