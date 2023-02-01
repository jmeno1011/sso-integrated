import { useEffect } from "react";

const KakaoProfile = () => {
  const getProfile = async () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
      console.log(window.Kakao.isInitialized());
    }
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
