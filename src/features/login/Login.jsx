import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { signupUser } from "../user/userSlice";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const defaultInputStyles =
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

function Login() {
  const { loginStatus } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(values) {
    dispatch(signupUser(values));
  }

  useEffect(() => {
    if (loginStatus === "success") {
      setTimeout(function () {
        navigate("/home");
      }, 1000);
    }
  }, [loginStatus, navigate]);

  return (
    <section className="flex items-center justify-center h-screen">
      <Card className="mx-5 sm:mx-0 sm:max-w-lg w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            Login to your account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to log in
          </CardDescription>
        </CardHeader>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <CardContent>
              {loginStatus && (
                <Badge
                  variant="secondary"
                  className={`h-9 px-3 w-full mb-4 border ${
                    loginStatus === "success"
                      ? "border-acc-created-border bg-acc-created-bg text-acc-created-text hover:bg-acc-created-bg hover:text-acc-created-text"
                      : ""
                  } 
                  ${
                    loginStatus === "fail"
                      ? "border-already-reg-bd bg-already-reg-bg text-white hover:bg-already-reg-bg hover:border-already-reg-bd"
                      : ""
                  }`}
                >
                  {loginStatus === "success" && "Login successful!"}
                  {loginStatus === "fail" &&
                    "Please check your password or username or register."}
                </Badge>
              )}

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  id="email"
                  className={defaultInputStyles}
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 text-sm text-red-500 font-medium"
              />
              <div className="grid gap-2 mt-4">
                <Label htmlFor="password">Password</Label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  id="password"
                  className={defaultInputStyles}
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="mt-1 text-sm text-red-500 font-medium"
              />
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" type="submit">
                Log in
              </Button>
              <p className="mt-2 text-xs text-center text-gray-700">
                {`Don't`} have an account?{" "}
                <Link
                  to="/signup"
                  className=" text-blue-600 hover:underline cursor-pointer"
                >
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </section>
  );
}

export default Login;
