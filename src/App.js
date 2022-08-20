import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import GoogleLoginBtn from "./components/GoogleLoginBtn";
import KakaoLoginBtn from "./components/KakaoLoginBtn";
import "./App.css";
import CounterPage from "./pages/CounterPage";
import CounterActionPage from "./pages/CounterActionPage";
import KakaoProfile from "./components/KakaoProfile";

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <div className="login-form">
        <GoogleLoginBtn user={user} setUser={setUser} />
        <br />
        <KakaoLoginBtn />
      </div>
      <nav className="nav-link">
        <Link to={"/counter"}>counter</Link>
        <Link to={"/counter-action"}>counter-action</Link>
        <Link to={"/profile"}>kakao profile</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/counter-action" element={<CounterActionPage />} />
          <Route path="/profile" element={<KakaoProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
