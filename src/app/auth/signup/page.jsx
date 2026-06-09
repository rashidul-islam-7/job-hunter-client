"use client";

import React from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import GoogleSignUpButton from "@/components/GoogleSignUpBtn";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";

const SignUpPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-[550px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="mt-2 text-sm text-gray-400">
            Join us and start your journey today
          </p>
        </div>

        {/* Google Sign Up */}
        <GoogleSignUpButton />

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>

          <div className="relative flex justify-center text-xs uppercase">
            <span className=" px-3 text-gray-400">Or</span>
          </div>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-5">
          <TextField isRequired name="name" type="text">
            <Label>Username</Label>
            <Input aria-label="Name" placeholder="John Doe" />
          </TextField>

          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField isRequired minLength={8} name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>At least 8 characters</Description>
            <FieldError />
          </TextField>

          <button
            type="submit"
            className="mt-2 h-12 w-full rounded-xl bg-blue-600 font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Create Account
          </button>
        </Form>

        {/* Footer */}
        <div className="mt-6 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-blue-400 transition hover:text-blue-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
