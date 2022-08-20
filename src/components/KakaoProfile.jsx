import React, { useEffect } from "react";

const KakaoProfile = () => {
  const getProfile = async () => {
    try {
      let data = await window.Kakao.API.request({ url: "/v2/user/me" });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return <div>KakaoProfile</div>;
};

export default KakaoProfile;
