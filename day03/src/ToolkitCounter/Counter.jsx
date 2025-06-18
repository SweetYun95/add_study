import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   // const count = useSelector((state) => {
   //    console.log(state)
   //    return state.counter.value
   // })

   const count = useSelector((state) => state.counter.value) // 두번째 값은 store의 reducer에 저장한 key값

   return (
      <div>
         <button
            onClick={() => {
               dispatch(up(2))
            }}
         >
            증가
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            감소
         </button>
         <p>count: {count}</p>
      </div>
   )
}

export default Counter
