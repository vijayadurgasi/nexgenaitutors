"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import Image from "next/image";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: { email: string; password: string }) {
    try {
      if (isLogin) {
        console.log("Login attempt with:", data);
        // Add your login logic here
        alert("Login functionality not implemented yet");
      } else {
        console.log("Signup attempt with:", data);
        // Add your signup logic here
        alert("Signup functionality not implemented yet");
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Authentication failed";
      alert(errorMessage);
      console.error(error);
    }
  }

  async function handleGoogleLogin() {
    try {
      console.log("Google login attempt");
      // Add your Google login logic here
      alert("Google login functionality not implemented yet");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Google authentication failed";
      alert(errorMessage);
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Image and branding */}
        <div className="hidden lg:flex flex-col items-center justify-center space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-navy-800 dark:text-white">
              Welcome to NextGen AI Tutors
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              Personalized learning experiences powered by advanced artificial
              intelligence
            </p>
          </div>
          <div className="w-full max-w-md hover:scale-105 transition-transform duration-300">
            <Image
              src="https://res.cloudinary.com/dbzbqq0vw/image/upload/v1748512745/Login-rafiki_fkng4x.svg"
              alt="NextGen AI Tutors Login"
              className="w-full h-auto"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-navy-600 to-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold text-navy-800 dark:text-white">
                {isLogin ? "Sign In" : "Create Account"}
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {isLogin
                  ? "Access your personalized learning dashboard"
                  : "Join thousands of students learning with AI"}
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy-700 dark:text-gray-200 font-medium">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              required
                              autoComplete="email"
                              className="h-12 border-gray-300 dark:border-gray-600 focus:border-navy-500 dark:focus:border-blue-400"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy-700 dark:text-gray-200 font-medium">
                            Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter your password"
                              required
                              autoComplete={
                                isLogin ? "current-password" : "new-password"
                              }
                              className="h-12 border-gray-300 dark:border-gray-600 focus:border-navy-500 dark:focus:border-blue-400"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-navy-600 to-blue-600 hover:from-navy-700 hover:to-blue-700 text-white font-semibold text-lg"
                    >
                      {isLogin ? "Sign In" : "Create Account"}
                    </Button>
                  </form>
                </Form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full h-12 flex items-center justify-center gap-3 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={handleGoogleLogin}
                  type="button"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_40)">
                      <path
                        d="M47.532 24.552c0-1.636-.146-3.2-.418-4.704H24.48v9.08h13.008c-.56 3.016-2.24 5.576-4.768 7.288v6.04h7.712c4.52-4.164 7.1-10.292 7.1-17.704z"
                        fill="#4285F4"
                      />
                      <path
                        d="M24.48 48c6.48 0 11.92-2.148 15.888-5.84l-7.712-6.04c-2.148 1.44-4.9 2.304-8.176 2.304-6.28 0-11.6-4.24-13.504-9.944H2.56v6.24C6.52 43.36 14.68 48 24.48 48z"
                        fill="#34A853"
                      />
                      <path
                        d="M10.976 28.48A14.98 14.98 0 0 1 9.36 24c0-1.56.28-3.08.616-4.48v-6.24H2.56A23.98 23.98 0 0 0 0 24c0 3.92.94 7.64 2.56 10.72l8.416-6.24z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M24.48 9.56c3.528 0 6.68 1.216 9.168 3.6l6.872-6.872C36.392 2.148 30.96 0 24.48 0 14.68 0 6.52 4.64 2.56 13.28l8.416 6.24c1.904-5.704 7.224-9.96 13.504-9.96z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_40">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="font-medium">Continue with Google</span>
                </Button>

                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    {isLogin
                      ? "New to NextGen AI Tutors?"
                      : "Already have an account?"}{" "}
                    <button
                      className="text-navy-600 dark:text-blue-400 hover:text-navy-700 dark:hover:text-blue-300 font-semibold underline"
                      onClick={() => setIsLogin(!isLogin)}
                      type="button"
                    >
                      {isLogin ? "Create an account" : "Sign in"}
                    </button>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
