
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { removeUser } from '../redux/clices/usersSlice/usersSlice'

const HomePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(removeUser())
    navigate('/auth/login')
  }

  return (
    <div>HomePage
      <button onClick={logout}>EXIT</button>
      <Outlet/>
    </div>

  )
}

export default HomePage