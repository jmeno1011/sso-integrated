import React, { useEffect } from "react";
import KakaoLoginBtnImg from "../assets/kakao_login_btn.png"

const KakaoLoginBtn = () => {
  const kakaoLoginHandler = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`
  }
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${code}`
    }).then(res => res.json()).then(data => {
      if (data.access_token) {
        localStorage.setItem('kkoToken', data.access_token);
        console.log(data);
      } else {
        // TODO
      }
    })
  }, [])

  return (
    <img style={{ cursor: 'pointer' }} src={KakaoLoginBtnImg} alt="kakao-login-btn" onClick={kakaoLoginHandler} />
  );
};

export default KakaoLoginBtn;