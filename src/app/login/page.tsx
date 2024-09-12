"use client";

import ContentTitle from "@/components/layout/contentTitle";
import Footer from "@/components/footer/footer";
import Container from "@/components/layout/container";
import Navbar from "@/components/navbar/navbar";
import SubContainer from "@/components/layout/subContainer";
import LinkButton from "@/components/linkButton/page";
import { ReactElement, useState } from "react";
import Link from "next/link";

export default function Login(): ReactElement {
  const [togglePassword, setTogglePassword] = useState(true);

  return (
    <>
      {/* Navbar */}
      <section>
        <Navbar />
      </section>
      {/* /.Navbar */}

      {/* Cabeçalho */}
      <section>
        <Container className="default-header min-h-[100vh]">
          <ContentTitle>Login</ContentTitle>
          <SubContainer className="grid gap-[30px]">
            <h2 className="text-[32px] leading-[43px] font-bold text-center">
              Login to Your Account
            </h2>
            <form className="grid gap-[15px]" action={"#"} method="POST">
              <p>Please enter your details</p>
              <div className="form-group relative">
                <input
                  type="text"
                  id="email"
                  className="rounded-[14px] max-sm:w-full"
                  placeholder="Email"
                />
                <div className="absolute inset-y-0 end-5 flex items-center opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
              </div>
              <div className="form-group relative">
                <input
                  type={togglePassword ? "password" : "text"}
                  id="password"
                  className="rounded-[14px] max-sm:w-full"
                  placeholder="Password"
                />
                <div
                  className="absolute inset-y-0 end-3 p-2 flex items-center opacity-30 cursor-pointer text-black"
                  onClick={() => setTogglePassword(!togglePassword)}
                >
                  {togglePassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div className="form-group relative flex justify-between">
                <div className="flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6 d-flex justify-between">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900 text-[15px]"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <div>
                  <Link
                    href={"/remember"}
                    className="text-[15px] text-[#04A118] underline"
                  >
                    Forgot password
                  </Link>
                </div>
              </div>
              <LinkButton className={"botao-sucesso text-center"} href="#">
                Login
              </LinkButton>
            </form>
          </SubContainer>
        </Container>
      </section>
      {/* /.Cabeçalho */}

      {/* Footer */}
      <section>
        <Footer />
      </section>
      {/* /.Footer */}
    </>
  );
}
