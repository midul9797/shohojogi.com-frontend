"use client";
import {
  Button,
  Col,
  ConfigProvider,
  Input,
  Row,
  Typography,
  message,
} from "antd";
import loginImage from "../../assets/login.svg";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import theme from "@/utils/theme/theme";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/login";
import { storeUserInfo } from "@/service/auth.service";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import "../../styles/Login.css";
import { LoadingOutlined } from "@ant-design/icons";
type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const router = useRouter();

  const handleAutoLogin = async (role: string) => {
    try {
      const res = await userLogin({
        email:
          role === "admin" ? "admin@gmail.com" : "moklasurrahman9797@gmail.com",
        password: role == "admin" ? "Admin1234" : "Midul1234",
      }).unwrap();

      router.back();
      message.success("User logged in successfully!");
      storeUserInfo(res);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      if (res) {
        router.back();
        message.success("User logged in successfully!");
        console.log(res);
        storeUserInfo(res);
      } else message.error("Wrong email or password");
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <ConfigProvider theme={theme}>
      <Link href={"/"}>
        <p className="logo">SHOHOJOGI.COM</p>
      </Link>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "80vh",
        }}
      >
        <Col sm={0} md={12} lg={10} className="login-image-container">
          <Image
            src={loginImage}
            width={600}
            alt="login image"
            className="login-image"
          />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1 className="login-title">Welcome Back!</h1>

          <Typography.Title type="secondary" className="login-subtitle">
            Login to access your account
          </Typography.Title>
          <div>
            <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
              <div>
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  label="Email"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                  placeholder="Enter Your Password"
                />
              </div>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "20px",
                  marginTop: "20px",
                  backgroundColor: "#1D94A4",
                }}
              >
                {isLoading ? <LoadingOutlined /> : "Login"}
              </Button>
            </Form>
            <Link href={"/signup"}>
              <p style={{ marginTop: "20px" }}>
                Don&apos;t have an account? Sign up
              </p>
            </Link>
            <hr />
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                type="default"
                onClick={() => {
                  handleAutoLogin("admin");
                }}
                style={{
                  width: "100%",
                  fontSize: "clamp(12px, 1.5vw, 16px)",
                  marginTop: "20px",
                  color: "#1D94A4",
                }}
              >
                Login as Admin
              </Button>
              <Button
                type="default"
                onClick={() => {
                  handleAutoLogin("customer");
                }}
                style={{
                  width: "100%",
                  fontSize: "clamp(12px, 1.5vw, 16px)",
                  marginTop: "20px",
                  color: "#1D94A4",
                }}
              >
                Login as Customer
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default LoginPage;
