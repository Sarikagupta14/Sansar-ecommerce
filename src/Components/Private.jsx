
import { Navigate, useNavigate } from 'react-router-dom'

const Private = ({children}) => {
    const nav = useNavigate()

    // getting data from signin for user's email verification
    const data =JSON.parse( localStorage.getItem('email'))
    const access = data ? true : false
    if(access ){
        return children
    }
    else{
      // nav('/signup')
      <Navigate to='/signup'replace/>
    }
}

export default Private
