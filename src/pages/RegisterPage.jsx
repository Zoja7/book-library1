import { TextField } from "@mui/material";
import { StyledFormWrapper } from "../components/shared/Form.styled.js";
const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <StyledFormWrapper>
          {" "}
          {/* <FormControl> */}
          <TextField
            id="userName"
            label="Name"
            value={"que"}
            onChange={null}
            name={"userName"}
          />
          <TextField
            id="email"
            label="Email"
            value={"que"}
            onChange={null}
            name={"email"}
          />
          <TextField
            id="password"
            label="Password"
            value={"que"}
            onChange={null}
            name={"password"}
          />
          <button>Submit</button>
          {/* </FormControl> */}
        </StyledFormWrapper>
      </form>
    </div>
  );
};

export default RegisterPage;
