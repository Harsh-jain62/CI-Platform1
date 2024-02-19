import { useFormik } from "formik";
import * as yup from "yup";
import { Container, Typography } from "@mui/material";
import { Constant } from "../../utility/constants/Constant";
import Carousel from "../../components/comman-component/Carousel";
import { toast } from "react-toastify";
import InputField from "../../components/comman-component/Inputfield";
import { RoutePaths } from "../../utility/enums/route.enums";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CommonButton from "../../components/comman-component/Button";
import { LoginStyles } from "./index.styles";

const validationSchema = yup.object({
  email: yup
    .string()
    .email(Constant.EMAIL_ADDRESS_VALIDATION_EXPRESSION)
    .required(Constant.EMAIL_ADDRESS_VALIDATION),
  password: yup
    .string()
    .test("password-complexity", Constant.PASSWORD_VALIDATION, (value) => {
      if (!value) return false;
      return Constant.PASSWORD_EXPRESSION.test(value);
    })
    .required(Constant.PASSWORD_VALIDATION),
});

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: () => {
      // Authentication(values);
      navigate(RoutePaths.User);
    },
  });


  return (
    <LoginStyles display="flex">
      <Carousel />
      <Container maxWidth="sm" className="container">
        <form onSubmit={formik.handleSubmit} className="addForm">
          <InputField
            boxClassName="inputfield"
            labelClassName="formLabelStyling"
            labeltext={`${Constant.EMAIL_LABLE} *`}
            id="email"
            name="email"
            type="text"
            placeholder="Email Address"
            variant="outlined"
            textfieldClassName="form-input"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth={true}
          />

          <InputField
            boxClassName="inputfield"
            labelClassName="formLabelStyling"
            labeltext={`${Constant.PASSWORD_LABLE} *`}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            variant="outlined"
            textfieldClassName="form-input"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth={true}
          />
          <CommonButton
            type="submit"
            label="Login"
            variant="contained"
            className="loginButton"
            color="primary"
            fullWidth
          />
        </form>
        <Typography className="linkstyle" variant="body1" align="center">
          <Link
            to={RoutePaths.ForgotPassword}
            className="no-decoration linkstyle"
          >
            {Constant.FORGOT_PASSWORD_LINK}
          </Link>
        </Typography>
        <Typography
          className="text-color linkstyle"
          variant="body1"
          align="center"
        >
          Don't have an account?{" "}
          <Link to={RoutePaths.Register} className="no-decoration linkstyle">
            {Constant.REGISTRATION_PASSWORD_LINK}
          </Link>
        </Typography>
        <Typography variant="body1" align="center" className="privacy_policy">
          <Link className="no-decoration" to={RoutePaths.Privacy}>
            {Constant.PRIVACY_POLICY}
          </Link>
        </Typography>
      </Container>
    </LoginStyles>
  );
};

export { Login };
