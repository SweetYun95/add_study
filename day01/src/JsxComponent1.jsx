function JsxComponent1() {
   // 1. 요소가 두개 이상일 때, 반드시 부묘요소로 감싸야 한다.
   return (
      //   <div>
      <>
         <h1>요소1</h1>
         <h1>요소2</h1>
      </>
      //   </div>
   )
}

export default JsxComponent1
