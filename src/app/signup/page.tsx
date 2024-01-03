"use client";
import { Button, Col, ConfigProvider, Row, Typography, message } from "antd";
import signupImage from "../../assets/signup.svg";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import theme from "@/utils/theme/theme";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/schemas/signup";
import { useUserSignupMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupPage = () => {
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const { confirmPassword, ...rest } = data;

      const res = await userSignup({ ...rest, role: "customer" }).unwrap();

      if (res) {
        router.push("/login");
        message.success("User created successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <ConfigProvider theme={theme}>
      <Link href={"/"}>
        <p
          style={{
            margin: "2vw 0 1vw 2vw",
            fontSize: "1.5vw",
            fontWeight: "bold",
          }}
        >
          SHOHOJOGI.COM
        </p>
      </Link>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "70vh",
        }}
      >
        <Col sm={12} md={16} lg={10}>
          <Image src={signupImage} width={350} alt="login image" />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1
            style={{
              margin: "15px 0px",
              fontSize: "32px",
            }}
          >
            Join Us Today!
          </h1>
          <Typography.Text type="secondary">
            Sign up now to become part of our family
          </Typography.Text>
          <div>
            <Form submitHandler={onSubmit} resolver={yupResolver(signupSchema)}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <FormInput
                    name="first_name"
                    type="text"
                    size="large"
                    label="First Name"
                    placeholder="Enter Your First Name"
                    required
                  />
                </div>
                <div>
                  <FormInput
                    name="last_name"
                    type="text"
                    size="large"
                    label="Last Name"
                    placeholder="Enter Your Last Name"
                    required
                  />
                </div>
              </div>
              <div>
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  label="Email"
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>

              <div>
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div>
                <FormInput
                  name="confirmPassword"
                  type="password"
                  size="large"
                  label="Confirm Password"
                  placeholder="Enter your password again"
                  required
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
                  marginBottom: "20px",
                }}
              >
                Create Account
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default SignupPage;
