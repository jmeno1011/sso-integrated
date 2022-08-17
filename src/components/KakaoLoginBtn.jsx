import React from "react";
import KakaoLoginBtnImg from "../assets/kakao_login_btn.png"

const KakaoLoginBtn = () => {
  const kakaoLoginHandler = ()=>{
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`
  }
  
  return (
    <img style={{cursor:'pointer'}} src={KakaoLoginBtnImg} alt="kakao-login-btn" onClick={kakaoLoginHandler}/>
  );
};

export default KakaoLoginBtn;
