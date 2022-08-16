import { useState } from "react";
import "./App.css";
import GoogleLoginBtn from "./components/GoogleLoginBtn";
import KakaoLoginBtn from "./components/KakaoLoginBtn";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="login-form">
      <GoogleLoginBtn user={user} setUser={setUser} />
      <KakaoLoginBtn />
    </div>
  );
}

export default App;
