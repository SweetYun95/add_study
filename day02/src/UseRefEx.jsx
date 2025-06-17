import { useRef } from 'react'

function UseRefEx() {
   const inputRef = useRef(null)

   // 값을 저장하기 위해 사용할 때 -> 재렌더링을 발생시키지 않고 값을 변경할 때 (간단한 값 저장)
   // useState는 값이 바뀔때 재렌더링이 되지만 useRef는 값이 바뀔때 재렌더링이 일어나지 않는다.
   const nextId = useRef(4)
   nextId.current += 1

   const handleClick = () => {
      //   inputRef.current.focus() // 포커스 설정
      alert(inputRef.current.value)
   }

   return (
      <div>
         {/* dom을 직접적으로 다루고 싶은 요소에 Ref(inputRef) 적용 */}
         <input type="text" ref={inputRef} />
         <button onClick={handleClick}>Focus</button>
      </div>
   )
}

export default UseRefEx
