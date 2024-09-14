import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../user/userSlice";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
      "Password must contain at least one letter and one number, and be at least 8 characters long"
    ),
});

const defaultInputStyles =
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

function Register() {
  const { registerStatus, isAuthenticated } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(values) {
    dispatch(registerUser(values));
  }

  useEffect(() => {
    if (registerStatus === "registered") {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, [registerStatus, navigate, isAuthenticated]);

  return (
    <section className="h-screen flex items-center justify-center">
      <Card className="mx-5 sm:mx-0 sm:max-w-lg w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to sign up
          </CardDescription>
        </CardHeader>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <CardContent>
              {registerStatus && (
                <Badge
                  variant="secondary"
                  className={`h-9 px-3 w-full mb-4 border hover:bg-inherit ${
                    registerStatus === "registered"
                      ? "border-acc-created-border bg-acc-created-bg text-acc-created-text"
                      : ""
                  } 
                  ${
                    registerStatus === "already-registered"
                      ? "border-already-reg-bd bg-already-reg-bg text-white"
                      : ""
                  }`}
                >
                  {registerStatus === "registered" &&
                    "Wonderful! Your account has been created."}
                  {registerStatus === "already-registered" &&
                    "Already registered, please log in"}
                </Badge>
              )}

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Name"
                  id="name"
                  className={defaultInputStyles}
                />
              </div>
              <ErrorMessage
                name="name"
                component="div"
                className="mt-1 text-sm text-red-500 font-medium"
              />
              <div className="grid w-full items-center gap-1.5 mt-4">
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
              <div className="grid w-full items-center gap-1.5 mt-4">
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
                Sign up
              </Button>
              <p className="mt-2 text-xs text-center text-gray-700">
                Already have an account?{" "}
                <Link to="/login" className=" text-blue-600 hover:underline">
                  Log in
                </Link>
              </p>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </section>
  );
}

export default Register;
