import { useState } from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const GoogleLoginBtn = () => {
  const [user, setUser] = useState('');
  const googleButtonRef = useRef(null);
  function handleCredentialResponse(response) {
    setUser(response.credential);
    console.log("Encoded JWT ID token: " + response.credential);
  }
  function signout() {
    setUser('')
    window.google.accounts.id.disableAutoSelect();
  }
  function googleInit() {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCredentialResponse
    });
    window.google.accounts.id.renderButton(
      googleButtonRef.current,
      { theme: "outline", size: "large" }
    )
    // window.google.accounts.id.prompt();
  }
  useEffect(() => {
    googleInit()
  }, [user])
  return (
    <>
      {
        user === '' 
        ? <div ref={googleButtonRef} /> 
        : <div style={{ border: '1px solid #333', cursor: 'pointer' }} className="g_id_signout" onClick={signout}>Sign Out</div>

      }
    </>
  )
}

export default GoogleLoginBtn;
