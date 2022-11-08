import { useEffect, useRef } from "react";
import styled from "styled-components";

const GoogleLoginBtn = ({ user, setUser }) => {
  const googleButtonRef = useRef(null);
  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  function googleInit(){
    console.log(window.google);
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCredentialResponse
    });
    window.google.accounts.id.renderButton(
      googleButtonRef.current, 
      {theme: "outline", size: "large"}
    )
  }
  useEffect(() => {
    googleInit()
  }, [])
  return (
    <div ref={googleButtonRef}/>
  )
}

export default GoogleLoginBtn;
