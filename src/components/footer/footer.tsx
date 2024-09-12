import Image from "next/image";
import Container from "../layout/container";
import LinkButton from "../linkButton/page";
import { quickLinks, termsPrivacyLinks } from "./mock";
import { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <footer>
      <Container>
        <div className="py-16 flex flex-row justify-center gap-[45px] max-sm:grid">
          <div className="basis-2/5 grid gap-[15px] max-xl:pr-0 pr-24">
            <Image
              width={100}
              height={100}
              className="w-auto"
              src="/assets/media/dark-logo.svg"
              alt="Your Company"
            />
            <p>
              onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut
            </p>
            <ul className="flex gap-[10px] social-icons">
              <li>
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.000244141"
                      width="32"
                      height="32"
                      rx="16"
                      fill="url(#paint0_linear_336_9193)"
                    />
                    <g clipPath="url(#clip0_336_9193)">
                      <path
                        d="M19.6135 8.77566V11.1023H18.2296C18.1813 11.0956 18.1251 11.0919 18.0683 11.0919C17.7371 11.0919 17.4353 11.2159 17.2062 11.4206L17.2074 11.4194C17.0394 11.654 16.9392 11.9467 16.9392 12.2632C16.9392 12.301 16.9404 12.3389 16.9435 12.3762V12.3713V14.0368H19.5273L19.1852 16.6457H16.9471V23.3336H14.2484V16.6451H12V14.0368H14.2484V12.1153C14.2441 12.053 14.2417 11.9797 14.2417 11.9063C14.2417 11.0033 14.593 10.1821 15.1661 9.57238L15.1643 9.57421C15.7582 9.01211 16.5622 8.6669 17.4463 8.6669C17.5013 8.6669 17.5563 8.66812 17.6113 8.67118H17.6033C17.6754 8.66996 17.7597 8.66934 17.8447 8.66934C18.4679 8.66934 19.0819 8.70845 19.6843 8.78421L19.6129 8.77688L19.6135 8.77566Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_336_9193"
                        x1="16.6729"
                        y1="22.5831"
                        x2="16.5088"
                        y2="3.93246"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2EA582" />
                        <stop offset="1" stopColor="#37C66D" />
                      </linearGradient>
                      <clipPath id="clip0_336_9193">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(8 8.00024)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.000244141"
                      width="32"
                      height="32"
                      rx="16"
                      fill="url(#paint0_linear_336_9196)"
                    />
                    <g clipPath="url(#clip0_336_9196)">
                      <path
                        d="M18.7503 8.6669H13.2503C12.0347 8.6669 10.869 9.14979 10.0094 10.0093C9.14988 10.8689 8.66699 12.0347 8.66699 13.2502L8.66699 18.7502C8.66699 19.9658 9.14988 21.1316 10.0094 21.9911C10.869 22.8507 12.0347 23.3336 13.2503 23.3336H18.7503C19.9659 23.3336 21.1317 22.8507 21.9912 21.9911C22.8508 21.1316 23.3337 19.9658 23.3337 18.7502V13.2502C23.3337 12.0347 22.8508 10.8689 21.9912 10.0093C21.1317 9.14979 19.9659 8.6669 18.7503 8.6669ZM21.9587 18.7502C21.9587 20.5194 20.5195 21.9586 18.7503 21.9586H13.2503C11.4812 21.9586 10.042 20.5194 10.042 18.7502V13.2502C10.042 11.4811 11.4812 10.0419 13.2503 10.0419H18.7503C20.5195 10.0419 21.9587 11.4811 21.9587 13.2502V18.7502Z"
                        fill="white"
                      />
                      <path
                        d="M16.0007 12.3336C15.0282 12.3336 14.0956 12.7199 13.4079 13.4075C12.7203 14.0951 12.334 15.0278 12.334 16.0002C12.334 16.9727 12.7203 17.9053 13.4079 18.5929C14.0956 19.2806 15.0282 19.6669 16.0007 19.6669C16.9731 19.6669 17.9057 19.2806 18.5934 18.5929C19.281 17.9053 19.6673 16.9727 19.6673 16.0002C19.6673 15.0278 19.281 14.0951 18.5934 13.4075C17.9057 12.7199 16.9731 12.3336 16.0007 12.3336ZM16.0007 18.2919C15.3931 18.2912 14.8106 18.0495 14.381 17.6199C13.9514 17.1903 13.7097 16.6078 13.709 16.0002C13.709 14.7361 14.7375 13.7086 16.0007 13.7086C17.2638 13.7086 18.2923 14.7361 18.2923 16.0002C18.2923 17.2634 17.2638 18.2919 16.0007 18.2919Z"
                        fill="white"
                      />
                      <path
                        d="M19.9417 12.5471C20.2115 12.5471 20.4303 12.3284 20.4303 12.0586C20.4303 11.7887 20.2115 11.57 19.9417 11.57C19.6719 11.57 19.4531 11.7887 19.4531 12.0586C19.4531 12.3284 19.6719 12.5471 19.9417 12.5471Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_336_9196"
                        x1="16.6729"
                        y1="22.5831"
                        x2="16.5088"
                        y2="3.93246"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2EA582" />
                        <stop offset="1" stopColor="#37C66D" />
                      </linearGradient>
                      <clipPath id="clip0_336_9196">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(8 8.00024)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.000244141"
                      width="32"
                      height="32"
                      rx="16"
                      fill="url(#paint0_linear_336_9199)"
                    />
                    <path
                      d="M23.6665 17.4359V22.1389C23.6665 22.2544 23.5675 22.3534 23.4519 22.3534H21.0262C20.9107 22.3534 20.8117 22.2544 20.8117 22.1389V17.7659C20.8117 16.6108 20.3991 15.8187 19.3595 15.8187C18.5675 15.8187 18.1054 16.3468 17.8909 16.8584C17.8084 17.0399 17.7919 17.3039 17.7919 17.5514V22.1389C17.7919 22.2544 17.6929 22.3534 17.5774 22.3534H15.1681C15.0526 22.3534 14.9536 22.2544 14.9536 22.1389C14.9536 20.9673 14.9866 15.3072 14.9536 13.9871C14.9536 13.8716 15.0526 13.7725 15.1681 13.7725H17.5939C17.7094 13.7725 17.8084 13.8716 17.8084 13.9871V14.9937C17.8084 15.0102 17.7919 15.0102 17.7919 15.0267H17.8084V14.9937C18.1879 14.4161 18.8645 13.5745 20.3826 13.5745C22.2638 13.5745 23.6665 14.8121 23.6665 17.4359ZM10.7292 22.3699H13.1549C13.2704 22.3699 13.3694 22.2709 13.3694 22.1554V13.9871C13.3694 13.8716 13.2704 13.7725 13.1549 13.7725H10.7292C10.6137 13.7725 10.5146 13.8716 10.5146 13.9871V22.1554C10.5312 22.2709 10.6137 22.3699 10.7292 22.3699Z"
                      fill="white"
                    />
                    <path
                      d="M11.8677 12.6999C12.7152 12.6999 13.4023 12.0128 13.4023 11.1653C13.4023 10.3177 12.7152 9.63062 11.8677 9.63062C11.0201 9.63062 10.333 10.3177 10.333 11.1653C10.333 12.0128 11.0201 12.6999 11.8677 12.6999Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_336_9199"
                        x1="16.6729"
                        y1="22.5831"
                        x2="16.5088"
                        y2="3.93246"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2EA582" />
                        <stop offset="1" stopColor="#37C66D" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-1/4 flex flex-col gap-[30px]">
            <h3>Quick Links</h3>
            <ul className="grid gap-[15px]">
              {quickLinks.map(
                ({
                  id,
                  link,
                  name,
                }: {
                  id: number;
                  link: string;
                  name: string;
                }) => {
                  return (
                    <li key={id}>
                      <a href={link}>{name}</a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="basis-1/4 flex flex-col gap-[30px]">
            <h3>Terms & Privacy</h3>
            <ul className="grid gap-[15px]">
              {termsPrivacyLinks.map(
                ({
                  id,
                  link,
                  name,
                }: {
                  id: number;
                  link: string;
                  name: string;
                }) => {
                  return (
                    <li key={id}>
                      <a href={link}>{name}</a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="basis-2/5 grid gap-[15px]">
            <div className="grid gap-[9px]">
              <h3>Subscribe Our Newsletter</h3>
              <form>
                <div className="relative flex gap-[15px] max-sm:grid max-sm:items-start">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#383838"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    className="rounded-[16px] border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full max-sm:p-2.5 ps-10 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your email"
                  />
                  <LinkButton
                    className={
                      "botao-outline bg-white text-[#018E01] border-[transparent]"
                    }
                    href="#"
                  >
                    Subscribe
                  </LinkButton>
                </div>
              </form>
            </div>
            <div className="grid gap-[9px]">
              <h3>Contact</h3>
              <p className="flex gap-[10px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.56 14.8103C18.4696 14.8126 17.3859 14.6404 16.35 14.3003C16.1062 14.2213 15.8459 14.2074 15.5951 14.26C15.3442 14.3126 15.1115 14.4299 14.92 14.6003L12.92 16.1303C10.7563 15.0484 9.00183 13.294 7.92 11.1303L9.4 9.13025C9.5886 8.94151 9.72188 8.7047 9.78534 8.44554C9.84881 8.18638 9.84005 7.91478 9.76 7.66025C9.42002 6.62427 9.24785 5.54059 9.25 4.45025C9.25012 4.25555 9.21102 4.06283 9.13504 3.88356C9.05907 3.7043 8.94777 3.54218 8.80778 3.40686C8.6678 3.27154 8.50199 3.1658 8.32026 3.09594C8.13852 3.02608 7.94458 2.99354 7.75 3.00025H4.44C4.0589 3.00287 3.69415 3.15543 3.42466 3.42491C3.15517 3.6944 3.00262 4.05915 3 4.44025C3.00265 8.83142 4.74821 13.042 7.85324 16.147C10.9583 19.252 15.1688 20.9976 19.56 21.0003C19.9411 20.9976 20.3059 20.8451 20.5753 20.5756C20.8448 20.3061 20.9974 19.9414 21 19.5603V16.2603C21 15.8774 20.8486 15.5101 20.5788 15.2385C20.3091 14.9668 19.9428 14.8129 19.56 14.8103Z"
                    fill="white"
                  />
                </svg>
                +1 98745 987412
              </p>
              <p className="flex gap-[10px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6364 14.8833C12.4286 15.0132 12.1948 15.0652 11.987 15.0652C11.7792 15.0652 11.5455 15.0132 11.3377 14.8833L1 8.57166V16.9613C1 18.7535 2.45455 20.208 4.24675 20.208H19.7532C21.5455 20.208 23 18.7535 23 16.9613V8.57166L12.6364 14.8833Z"
                    fill="white"
                  />
                  <path
                    d="M19.7529 4.00024H4.24637C2.71391 4.00024 1.4152 5.09115 1.10352 6.5457L12.0126 13.195L22.8957 6.5457C22.584 5.09115 21.2853 4.00024 19.7529 4.00024Z"
                    fill="white"
                  />
                </svg>
                johandoe@email.com
              </p>
            </div>
          </div>
        </div>
        <div
          className="container mx-auto border-t-[1px] text-center py-[16px]"
          id="sub-rodape"
        >
          <p>All Rights Reserved. © 2023 - AcadeNutrition</p>
        </div>
      </Container>
    </footer>
  );
}
