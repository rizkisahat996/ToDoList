import { useEffect } from "react"
import { useUsersContext } from "../hooks/useUsersContext"


// components
import UserDetails from "../components/UserDetails"
import UserForm from "../components/UserForm"

const Home = () => {
  const {users, dispatch} = useUsersContext()

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_USER', payload: json})
      }
    }

    fetchUsers()
  }, [dispatch])

  return (
    <div className="home">
      <div className="users">
        {users && users.map(user => (
          <UserDetails user={user} key={user._id} />
        ))}
      </div>
      <UserForm />
    </div>
  )
}

export default Home