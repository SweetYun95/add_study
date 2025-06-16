import './App.css'

function JsxComponent4() {
   // 4. 인라인 스타일: JSON객체로 표현 카멜표기법으로 작성
   // 5. 외부 스타일 시트는 className으로 작성
   const style = { color: 'red', fontSize: '10px' }

   return (
      <div style={style} className="test">
         안녕
      </div>
   )
   // return <div style={{ color: 'red', fontSize: '10px' }}>안녕</div>
}

export default JsxComponent4
