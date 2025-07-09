"use client";
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

function Signup() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: {
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    try {
      if (data.password !== data.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      console.log("Signup attempt with:", data);
      // Add your signup logic here
      alert("Signup functionality not implemented yet");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Signup failed";
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
              Join NextGen AI Tutors
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              Start your personalized learning journey powered by AI
            </p>
          </div>
          <div className="w-full max-w-md hover:scale-105 transition-transform duration-300">
            <Image
              src="https://res.cloudinary.com/dbzbqq0vw/image/upload/v1752008657/Mobile_login-pana_3_wajmtj.svg"
              alt="NextGen AI Tutors Signup"
              className="w-full h-auto"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Right side - Signup form */}
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
                Create Account
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Join thousands of students learning with AI
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
                              autoComplete="new-password"
                              className="h-12 border-gray-300 dark:border-gray-600 focus:border-navy-500 dark:focus:border-blue-400"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy-700 dark:text-gray-200 font-medium">
                            Confirm Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Confirm your password"
                              required
                              autoComplete="new-password"
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
                      Create Account
                    </Button>
                  </form>
                </Form>

                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="text-navy-600 dark:text-blue-400 hover:text-navy-700 dark:hover:text-blue-300 font-semibold underline"
                    >
                      Sign in
                    </a>
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

export default Signup;
