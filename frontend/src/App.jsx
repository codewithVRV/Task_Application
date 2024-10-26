import { useState } from "react";
import Header from "./component/Header/Header";
import UserContext from "./context/user";
import AllRoutes from "./Routes/AllRoutes";



const App = () => {
  const [userData, setUserData] = useState({username:"", id: "",});

  return (
    <>
      <UserContext.Provider value={{userData, setUserData}}>
      <Header />
      <AllRoutes />
      </UserContext.Provider>
    </>
  )
}
export default App;