import React, {useState, useEffect} from 'react'
import AppRoutes from './Routes/AppRoutes';
import {useAuth} from "./hooks/auth.hook"
import {AuthContext} from "./context/AuthContext"


function App() {
  const [logo, setLogo] = useState(null)

  useEffect(() => {
    fetch("/api/navbar")
    .then(res => res.text())
    .then(data => setLogo(data))
  }, [])

  const {token, login, logout, userId} = useAuth()

  const isAuth = !!token

  return (
    <div className="App">
      <AuthContext.Provider value={{
                token, login, logout, userId, isAuth
            }}>
                <AppRoutes isAuth={isAuth} logo={logo} />
            </AuthContext.Provider>
    </div>
  );
}

export default App;
