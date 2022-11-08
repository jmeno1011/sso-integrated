import { useState } from "react";
import GoogleLoginBtn from "./components/GoogleLoginBtn";
import KakaoLoginBtn from "./components/KakaoLoginBtn";
import "./App.css";
import styled from "styled-components";

const Header = styled.header`
  h1{
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`
const Layout = styled.div`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
`

function App() {
  const [user, setUser] = useState({});
  return (
    <div>
      <Header>
        <h1>로그인</h1>
      </Header>
      <Layout>
        <GoogleLoginBtn user={user} setUser={setUser} />
      </Layout>
      {/* <KakaoLoginBtn /> */}
    </div>
  );
}

export default App;
