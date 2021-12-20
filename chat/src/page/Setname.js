import { Container } from "../componants/layout/Container.styled";
import { Box, Title } from "../componants/Setname/Setname.styled";
import { GoogleLogin } from "react-google-login";

const Setname = ({ getname }) => {
  const responseGoogle = (res) => {
    console.log(res);
    let pack = {
      fname: res.profileObj.givenName,
      lname: res.profileObj.familyName,
      avatar: res.profileObj.imageUrl,
      email: res.profileObj.email,
    };
    localStorage.setItem("user", JSON.stringify(pack));
    getname(pack);
  };

  const failedGoogle = (res) => {
    console.log(res);
  };

  return (
    <Container image="https://cdn.pixabay.com/photo/2014/07/01/15/40/balloon-381334_1280.png">
      <Box>
        <Title>
          <h2>Login / Signup</h2>
        </Title>
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={failedGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Box>
    </Container>
  );
};

export default Setname;
