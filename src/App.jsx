import { Route, Routes } from "react-router-dom"
import UserList from "./features/User/UserList"
import AddUser from "./features/User/AddUser"
import EditUser from "./features/User/EditUser"


const App = () => {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold font-3xl mb-5">Crud with redux toolkit</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  )
}

export default App;
