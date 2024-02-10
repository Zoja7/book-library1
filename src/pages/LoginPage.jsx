import { FormControl } from "@mui/material";
import css from "../components/shared/Form.module.css";

console.log(css);

const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage</h1>
      <form>
        <FormControl className={css.form}>
          <label>
            <p>email</p>
            <input type="text" name="email" />
          </label>
          <label>
            <p>password</p>
            <input type="text" name="password" />
          </label>
        </FormControl>
      </form>
    </div>
  );
};

export default LoginPage;
