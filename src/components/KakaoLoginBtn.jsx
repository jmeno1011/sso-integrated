import React, { useEffect } from "react";
import KakaoLoginBtnImg from "../assets/kakao_login_btn.png"
import styled from "styled-components";
import axios from "axios";

const KakaoLoginBtn = () => {
  const kakaoLoginHandler = ()=>{
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`
    // axios.post(`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`,{
    //   headers:{
    //     // "Content-Type": "application/json"
    //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    //   }
    // }).then(res=>console.log(res))
  }
  useEffect(()=> {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
  //   let grant_type = "authorization_code";
  //   let client_id = process.env.REACT_APP_KAKAO_REST_API_KEY;
  //   console.log(params);
  //   axios.post(`https://kauth.kakao.com/oauth/token?
  //       grant_type=${grant_type}
  //       &client_id=${client_id}
  //       &redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}
  //       &code=${code}`
  //       , {
  //   headers: {
  //       'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
  //   }
  // }).then((res) => {
  //     console.log(res)
  //     // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
  // })
  fetch(`https://kauth.kakao.com/oauth/token`,{
    method:"POST",
    headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"},
    body:`grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${code}`
  }).then(res=>res.json()).then(data=>{console.log(data);})
  }, [])
  
  return (
    <img style={{cursor:'pointer'}} src={KakaoLoginBtnImg} alt="kakao-login-btn" onClick={kakaoLoginHandler}/>
    // <KakaoBtn />
  );
};

export default KakaoLoginBtn;

const KakaoBtn = styled.div`
  background-image: url("/src/assets/kakao_login_btn.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px auto;
  color: transparent;
  width: 300px;
  height: 45px;
`