"use client";
import { ReactElement, useState } from "react";

import Image from "next/image";
import { navlinks } from "./mock";
import { BR, US, ES } from "country-flag-icons/react/1x1";
import Container from "../layout/container";
import LinkButton from "../linkButton/page";
import Link from "next/link";

export function Botoes(): ReactElement {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <LinkButton href="/login">Login</LinkButton>
      <LinkButton href="button" className="botao-sucesso">
        Register
      </LinkButton>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full rounded-[14px] bg-[#F0F4F1] justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-[#02440A] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setToggle(!toggle)}
          >
            {
              <BR
                title="Brasil"
                className="rounded-full"
                width={20}
                height={20}
              />
            }
            PT
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          id="language"
          className={`absolute bg-[#F0F4F1] right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            toggle ? "hidden" : ""
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div role="none">
            <ul>
              <li>
                <a
                  title="Brasil"
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  <BR className="rounded-full" width={20} height={20} />
                  Português (Brasil)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  <US className="rounded-full" width={20} height={20} />
                  English (US)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  <ES className="rounded-full" width={20} height={20} />
                  Español
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Navbar(): ReactElement {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="relative z-10 max-lg:z-20">
      <div className="absolute inset-y-0 left-0 w-full">
        <Container className="max-lg:bg-white">
          <div className="flex flex-wrap h-16 items-center justify-between">
            <div className="flex items-center lg:hidden 1">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setToggle(!toggle)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Abrir menu principal</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center max-lg:ps-5 min-md:justify-center content-center align-middle">
              <div className="flex flex-shrink-0 items-center">
                <Link href={"/"}>
                  <Image
                    width={100}
                    height={100}
                    className="w-auto"
                    src="/assets/media/default-logo.svg"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="max-lg:hidden w-full 2">
                <ul className="flex space-x-4 justify-center" id="navbar">
                  {navlinks.map(
                    ({
                      id,
                      link,
                      nome,
                    }: {
                      id: any;
                      link: string;
                      nome: string;
                    }) => {
                      return (
                        <li key={id}>
                          <a
                            id={id}
                            href={link}
                            className="px-3 py-1 pl-0 sm:px-0 text-sm font-medium"
                            aria-current="page"
                          >
                            {nome}
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static max-sm:inset-auto max-sm:ml-6 max-sm:pr-0 gap-2.5 max-md:hidden">
              <Botoes />
            </div>
          </div>
          <div className={toggle ? "hidden" : "pb-5"} id="mobile-menu">
            <div className="space-y-1">
              <ul className="gap-2 grid px-2 pb-3 pt-2 border-t-2 border-black">
                {navlinks.map(
                  ({
                    id,
                    link,
                    nome,
                  }: {
                    id: any;
                    link: string;
                    nome: string;
                  }) => {
                    return (
                      <li
                        className=" text-black px-3 py-2 text-sm font-medium border-b-2 border-black"
                        key={id}
                      >
                        <a href={link} aria-current="page">
                          {nome}
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
              <div className="flex justify-around gap-[9] items-center">
                <Botoes />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
