import { useEffect }from 'react'
import { useListsContext } from "../hooks/useListsContext"
import { useAuthContext } from '../hooks/useAuthContext'

// components
import ListDetails from '../components/ListDetails'
import ListForm from '../components/ListForm'

const Home = () => {
  const {lists, dispatch} = useListsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchLists = async () => {
      const response = await fetch('/api/v1/lists', {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_LISTS', payload: json})
      }
    }

    if(user){
        fetchLists()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="lists">
        {lists && lists.map((list) => (
          <ListDetails key={list._id} list={list} />
        ))}
      </div>
      <ListForm />
    </div>
  )
}

export default Home




