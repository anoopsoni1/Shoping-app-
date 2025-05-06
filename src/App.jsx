import { Route, Router, Routes } from 'react-router-dom';
import { auth } from './Firebase';
import LoginPage from './Components/Login';

function App() {
  const[user,setuser] = useState(null) ;
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setuser(user) 
    }) 
  })
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' 
          element={user ?<Navigate to="/profile" /> : <LoginPage />}
         />
      </Routes>
    </Router>
    </>
  )
}

export default App
