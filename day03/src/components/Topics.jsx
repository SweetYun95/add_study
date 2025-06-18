import { useParams } from 'react-router-dom'

function Topics() {
   //    const params = useParams()
   //    const topicId = params.topicId
   const { topicId } = useParams()

   return (
      <div>
         <h2>Topics</h2>
         <p>{topicId}</p>
      </div>
   )
}

export default Topics
