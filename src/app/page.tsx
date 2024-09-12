import Image from "next/image";
import { ReactElement } from "react";

import Footer from "@/components/footer/footer";
import Container from "@/components/layout/container";
import Navbar from "@/components/navbar/navbar";
import { nutritionist } from "./mock";
import LinkButton from "@/components/linkButton/page";

export default function Home(): ReactElement {
  return (
    <>
      <section>
        <Navbar />
      </section>

      {/* Cabeçalho */}
      <section>
        <header>
          <Container>
            <div className="min-h-[100vh] max-sm:min-h-[180vh] cabecalho vetor3 grid grid-cols-3 items-start relative max-sm:grid-cols-1">
              <div className="gap-[40px] text-black w-[407px] flex flex-col flex-wrap items-start pt-[32%] max-lg:pt-[20vh]">
                <h1 className="text-5xl font-bold">
                  I’m Juliana Your Personal Nutritionist
                </h1>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <LinkButton href="#" className="botao-sucesso" title="Criar Conta">
                  Create New Account
                </LinkButton>
              </div>
              <div className="downloads flex items-center bg-[#E0F8EA] text-[#02440A] gap-[15px] py-4 px-5 rounded-2xl absolute left-[30%] max-xl:left-[0] bottom-16">
                <h3 className="font-bold">Download App Now</h3>
                <Image
                  width={133}
                  height={39}
                  src={"/assets/media/google-play.png"}
                  alt={"Google Play Image"}
                />
                <Image
                  width={133}
                  height={39}
                  src={"/assets/media/app-store.png"}
                  alt={"Apple Store Image"}
                />
              </div>
              <div className="qr-code absolute bottom-16 right-0 z-10 max-sm:bottom-44 max-sm:right-20">
                <Image
                  width={252}
                  height={354}
                  src={"/assets/media/login-qr.png"}
                  alt={"QR CODE image"}
                />
              </div>
            </div>
          </Container>
        </header>
      </section>
      {/* /.Cabeçalho */}

      {/* Section 2 */}
      <section>
        <div
          className="bg-[url('/assets/media/home-section2-background.png')] bg-cover bg-center relative overflow-hidden max-xl:pt-[15px] max-xl:pb-[45px]"
          id="nutritionist"
        >
          <Container className="min-h-[438px] flex flex-flow gap-[15px] max-xl:gap-[30px] items-center max-xl:grid max-xl:justify-items-center max-xl:text-center">
            <div className="basis-1/2 max-xl:basis-1 grid gap-[10px] max-xl:max-w-[70%]  max-sm:max-w-[100%]">
              <h2 className="text-[82px] font-thin opacity-40 uppercase max-sm:text-[40px]">
                Nutritionists
              </h2>
              <h3 className="text-[31px] max-sm:text-[16px]">
                <b>Revolutionize Your Nutrition Practice</b>
              </h3>
              <p className="text-[14px] leading-7 font-thin max-sm:text-justify">
                Diet Plans, More Patients, Anamnesis, More Profit,
                Anthropometries! Introducing our innovative nutritionist
                software that empowers you to create personalized diet plans,
                streamline patient intake and assessment processes, and maximize
                your revenue potential. With advanced features like
                anthropometric measurements and progress tracking, our software
                is the ultimate tool for nutritionists looking to take their
                practice to the next level. Join the nutritionist revolution
                today!
              </p>
            </div>
            <div className="basis-1/2 max-xl:basis-1">
              <ul className="flex flex-wrap gap-x-[20px] gap-y-[40px] justify-center">
                {nutritionist.map(
                  ({
                    id,
                    image,
                    name,
                  }: {
                    id: number;
                    image: string;
                    name: string;
                  }) => {
                    return (
                      <li
                        key={id}
                        className="w-[174px] h-[140px] grid content-center justify-items-center border border-white gap-[10px] rounded-lg cursor-pointer"
                      >
                        <Image
                          width={40}
                          height={40}
                          src={image}
                          alt={`${name} Image`}
                        />
                        <h3 className="text-[14px]">{name}</h3>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </Container>
        </div>
      </section>
      {/* /.Section 2 */}

      {/* Section 3 */}
      <section>
        <Container>
          <div
            className="flex flex-wrap max-sm:flex-col-reverse items-end pt-[93px] text-black relative overflow-hidden max-sm:pt-[100px]"
            id="trainer"
          >
            <div className="basis-2/5 relative vetor1 max-sm:m-auto">
              <Image
                width={300}
                height={502}
                src={"/assets/media/home-section3-image-bg.png"}
                alt="Personal Image"
              />
            </div>
            <div className="basis-3/5 pb-24 vetor2">
              <Image
                width={897}
                height={233}
                src={"/assets/media/home-section3-title.png"}
                alt="Join as GYM Trainer"
              />
              <p className="text-[rgba(0,0,0,.6)] text-[14px] pl-[9px] leading-7">
                Gyms Register, a cutting-edge gym management software, offers
                personalized workout plans tailored to each student's unique
                fitness goals and abilities. With its intuitive interface, gym
                owners and trainers can easily manage their students' progress,
                track attendance, and generate detailed reports. By implementing
                this software, gyms can enhance the overall gym experience for
                their clients while increasing profitability through streamlined
                operations and efficient resource allocation
              </p>
            </div>
          </div>
        </Container>
        <div className="bg-black/[.04]">
          <Container className="flex max-sm:grid justify-center gap-[20px] max-lg:w-[100%] max-xl:w-[75%] w-[65%] py-[27px]">
            <div className="basis-1/3 flex items-center gap-[15px]">
              <div className="grid content-center bg-white p-[20px] shadow-[0_0px_5.4px_#E8DEDE] rounded-[8px] hover:shadow-[0_0px_5.4px_#000]">
                <Image
                  width={40}
                  height={25}
                  src={"/assets/media/home-section3-menu1.svg"}
                  alt="Workout Image"
                />
              </div>
              <h3 className="text-lg text-custom-trainer font-bold">
                Register Personalized Workouts
              </h3>
            </div>
            <div className="basis-1/3 flex items-center gap-[15px]">
              <div className="grid content-center bg-white p-[20px] shadow-[0_0px_5.4px_#E8DEDE] rounded-[8px] hover:shadow-[0_0px_5.4px_#000]">
                <Image
                  width={40}
                  height={25}
                  src={"/assets/media/home-section3-menu2.svg"}
                  alt="Workout Image"
                />
              </div>
              <h3 className="text-lg text-custom-trainer font-bold">
                Manage Students
              </h3>
            </div>
            <div className="basis-1/3 flex items-center gap-[15px]">
              <div className="grid content-center bg-white p-[20px] shadow-[0_0px_5.4px_#E8DEDE] rounded-[8px] hover:shadow-[0_0px_5.4px_#000]">
                <Image
                  width={40}
                  height={25}
                  src={"/assets/media/home-section3-menu3.svg"}
                  alt="Workout Image"
                />
              </div>
              <h3 className="text-lg text-custom-trainer font-bold">
                Increase Your Profit
              </h3>
            </div>
          </Container>
        </div>
      </section>
      {/* /.Section 3 */}

      {/* Section 4 */}
      <section>
        <Container className="flex gap-5 justify-between py-[105.5px] max-lg:grid max-lg:gap-24 max-lg:p-16 max-sm:px-5">
          <div className="basis-1/2 grid items-center justify-items-start max-lg:gap-10 max-sm:text-center max-sm:justify-items-center">
            <h3 className="text-black font-bold text-[32px] leading-[43px] max-sm:text-[28px]">
              Supermarkets, Pharmacies, supplement stores and Restaurants
            </h3>
            <p className="text-[rgba(0,0,0,.6)] text-[14px] leading-7 max-sm:text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
              suspendisse sed nisi lacus sed. Gravida rutrum quisque non tellus
              orci ac. In tellus integer feugiat scelerisque varius morbi enim
              nunc faucibus. Purus semper eget duis at. Habitant morbi tristique
              senectus et netus et malesuada. Risus viverra adipiscing at in
              tellus integer feugiat. Viverra nibh cras pulvinar mattis nunc sed
              blandit libero volutpat.{" "}
            </p>
            <LinkButton
              href="#"
              className="botao-sucesso w-[201px] text-center"
            >
              Register Now
            </LinkButton>
          </div>
          <div className="basis-1/2 flex justify-end max-lg:justify-center">
            <Image
              width={432}
              height={413}
              src={"/assets/media/home-section4-card.png"}
              alt="Products Images"
            />
          </div>
        </Container>
        <div className="bg-black/[.04]">
          <Container className="flex py-[27px] max-lg:grid max-lg:justify-center max-lg:gap-10">
            <div className="basis-1/2 flex items-center">
              <Image
                width={508}
                height={84}
                src={"/assets/media/home-section4-logo.svg"}
                alt="Our Sponsors"
              />
            </div>
            <div className="basis-1/2 flex flex-wrap items-center gap-[15px] max-lg:justify-between">
              <div className="w-[206px] max-sm:w-5/12 h-[120px] grid content-center justify-center bg-white shadow-[0_0px_5.4px_#E8DEDE] rounded-[8px] hover:shadow-[0_0px_5.4px_#000]">
                <Image
                  width={87}
                  height={40}
                  src={"/assets/media/home-section4-sinep.png"}
                  alt="Sinep Logo"
                />
              </div>
              <div className="w-[206px] max-sm:w-5/12 h-[120px] grid content-center justify-center bg-white shadow-[0_0px_5.4px_#E8DEDE] rounded-[8px] hover:shadow-[0_0px_5.4px_#000]">
                <Image
                  width={71}
                  height={67}
                  src={"/assets/media/home-section4-fapemig.png"}
                  alt="Fapemig Logo"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
      {/* /.Section 4 */}

      {/* Footer */}
      <section>
        <Footer />
      </section>
      {/* /.Footer */}
    </>
  );
}
