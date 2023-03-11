import { useListsContext } from '../hooks/useListsContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ListDetails = ({ list }) => {
  const { dispatch } = useListsContext()
  const { user } = useAuthContext()

  if(!user){
      return
  }

  const handleClick = async () => {

    const response = await fetch('/api/lists/' + list._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_LIST', payload: json})
    }
  }

  return (
    <div className="component-details">
            <h4>
                {list.title}
            </h4>
            <p><strong>Email: </strong>{list.description}</p>
            <p>{formatDistanceToNow(new Date(list.createdAt), {addSuffix: true})}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
  )
}

export default ListDetails

