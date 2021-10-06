import axios from 'axios'
import {useEffect, useState } from 'react'
import { useHistory } from 'react-router'

function Home() {
  const [user, setUser] = useState({})

  const history = useHistory()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if(!token)
      history.replace('/login')
    else {
      axios.get('http://localhost:8080/profile',{
        headers : {
            authorization : 'Bearer ' + localStorage.getItem('token')
        }
      }).then(rs => {
        console.log(rs.data)
        setUser(rs.data.user)
      })
    }
  }, [history])

  return (
    <div className="text-center">
      <div className="display-1">Hello, {user.username}</div>
      <div className="display-5">{user.email}</div>
    </div>
  )
}

export default Home
