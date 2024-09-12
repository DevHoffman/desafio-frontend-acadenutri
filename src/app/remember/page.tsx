"use client";

import ContentTitle from "@/components/layout/contentTitle";
import Footer from "@/components/footer/footer";
import Container from "@/components/layout/container";
import Navbar from "@/components/navbar/navbar";
import SubContainer from "@/components/layout/subContainer";
import LinkButton from "@/components/linkButton/page";
import { ReactElement } from "react";

export default function Remember(): ReactElement {

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
          <ContentTitle>Remember Me</ContentTitle>
          <SubContainer className="grid gap-[30px]">
            <h2 className="text-[32px] leading-[43px] font-bold text-center">
              Reset Your Passeword
            </h2>
            <form className="grid gap-[15px]" action={"#"} method="POST">
              <p>Please enter your details</p>
              <div className="form-group relative">
                <input
                  type="text"
                  id="email"
                  className="rounded-[14px]"
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
              <LinkButton className={"botao-sucesso text-center"} href="#">
                Send Code
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
