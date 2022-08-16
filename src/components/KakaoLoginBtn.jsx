import React from "react";
import KakaoLogin from "react-kakao-login";

const KakaoLoginBtn = () => {
  const onSuccess = (res) => {
    console.log(res);
  };
  const onFail = (res) => {
    console.log(res);
  };
  return (
    <KakaoLogin
      token={process.env.REACT_APP_KAKAO_REST_API_KEY}
      onSuccess={onSuccess}
      onFail={onFail}
      onLogout={console.info}
    />
  );
};

export default KakaoLoginBtn;
