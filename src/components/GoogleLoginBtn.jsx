import { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import styled from "styled-components";

const GoogleLayout = styled.div`
  padding: 16px;
  border: 2px solid #333;
`



const GoogleLoginBtn = ({ user, setUser }) => {
  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  function googleInit(){
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCredentialResponse
    });
  }
  useEffect(() => {
    googleInit()
  }, [])
  return (
    <div>
      login
    </div>
  )
}

// const GoogleLoginBtn = ({ user, setUser }) => {
//   useEffect(() => {
//     const initClient = () => {
//       gapi.client.init({
//         clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//         scope: "",
//       });
//     };
//     gapi.load("client:auth2", initClient);
//   });

//   const onSuccess = (res) => {
//     setUser(res);
//     console.log("success:", res);
//   };

//   const onFailure = (err) => {
//     console.log("failed:", err);
//   };

//   const logout = (res) => {
//     console.log(res);
//     setUser({});
//   };

//   return (
//     <>
//       {Object.keys(user).length === 0 ? (
//         // <GoogleLayout>
//           <GoogleLogin
//             clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//             onSuccess={onSuccess}
//             onFailure={onFailure}
//             cookiePolicy={"single_host_origin"}
//             isSignedIn={true}
//           />
//         // </GoogleLayout>
//       ) : (
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <img src={user.profileObj.imageUrl} alt="profile" />
//           <h3>{user.profileObj.name}</h3>
//           <GoogleLogout
//             clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//             buttonText="Logout"
//             onLogoutSuccess={logout}
//           ></GoogleLogout>
//         </div>
//       )}
//     </>
//   );
// };

export default GoogleLoginBtn;
