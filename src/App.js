import { useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import GoogleLoginBtn from "./components/GoogleLoginBtn";
import KakaoLoginBtn from "./components/KakaoLoginBtn";
import CounterPage from "./pages/CounterPage";
import CounterActionPage from "./pages/CounterActionPage";
import KakaoProfile from "./components/KakaoProfile";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <nav className="nav-link">
        <ul>
          {/* <li><Link to={"/counter"}>counter</Link></li>
          <li><Link to={"/counter-action"}>counter-action</Link></li> */}
          <li><Link to={"/profile"}>kakao profile</Link></li>
        </ul>
      </nav>
      <div className="login-form">
        <GoogleLoginBtn user={user} setUser={setUser} />
        <KakaoLoginBtn />
      </div>
      <div>
        <Routes>
          {/* <Route path="/counter" element={<CounterPage />} />
          <Route path="/counter-action" element={<CounterActionPage />} /> */}
          <Route path="/profile" element={<KakaoProfile />} />
        </Routes>
      </div>
      <Outlet />
    </>
  );
}

export default App;
