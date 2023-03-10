import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import UserDetails from "./pages/userDetail/UserDetails";
import User from "./pages/user/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import files from "./file.json"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard files = {files} />} />
            <Route path="login" element={<Login />} />
            <Route path="user">
              <Route index element={<User />} />
              <Route path=":userId" element={<UserDetails files ={files} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
