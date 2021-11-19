import SingleComment from "./SingleComment"
import uniqid from 'uniqid'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {commentCreate, commentsLoad} from './redux/actions'

function Comments(props) {
    const [textComment, setTextComment] = useState('')
    const comments = useSelector(state => {
        console.log('redux state', state)
        const {commentReducer} = state
        return commentReducer.comments
    })
    const dispatch = useDispatch()
const handleInput = e => {
    console.log(e.target.value)
    setTextComment(e.target.value)
}

useEffect(() => {
    dispatch(commentsLoad())
}, [])

const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', textComment)
    const id = uniqid()
    dispatch(commentCreate(textComment, id))
}

return(
    <div className='card-comments'>
        <form className='comments-item-create' onSubmit={handleSubmit}>
            <input type='text' value={textComment} onChange={handleInput}/>
            <input type='submit' hidden/>
        </form>
        {!!comments.length && comments.map(e => {
            return <SingleComment key={e.id} data={e}/>
        })} 
    </div>
)
}
export default Comments