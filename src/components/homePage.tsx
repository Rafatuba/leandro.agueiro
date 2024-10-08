"use client";

import Image from "next/image";
import imagemPessoas from "../../public/pessoas.jpg";
import logo from "../../public/logo-le.png";
import { Contato } from "./contato";

import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Links } from "./links";

// gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const imageRef = useRef(null);
  const tituloRef = useRef(null);

  useEffect(() => {
    const imagePessoas = imageRef.current;
    const titulo = tituloRef.current;

    gsap.fromTo(
      imagePessoas,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      titulo,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="bg-gray-50">
      <header className="py-4 md:py-4 bg-green-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-center lg:justify-start 2xl:ml-32 xl:ml-0 gap-3">
            <div className="flex-shrink-0">
              <a
                href="/"
                title="Leandro Agueiro"
                className="flex rounded outline-none "
              >
                <Image className="w-24" src={logo} alt="logo do site" />
              </a>
            </div>

            <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
              <Links titulo="Serviços" url="#servicos" />
              <Links titulo="Quem somos" url="#quemSomos" />
              <Links titulo="Contatos" url="https://www.google.com" />
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 sm:my-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-32">
            <div>
              <div className="text-center lg:text-left">
                <h1
                  className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj opacity-0"
                  ref={tituloRef}
                >
                  Mantenha as finanças do seu negócio sob controle.
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                  Se está faltando tempo para{" "}
                  <strong>gerenciar seu negócio</strong>, contrate já um{" "}
                  <strong>ASSISTENTE FINANCEIRO VIRTUAL</strong> e tranforme sua
                  vida para melhor.
                </p>
                <Contato />
              </div>

              {/* <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                    2943
                  </p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Empresas
                    <br />
                    Atendidas
                  </p>
                </div>

                <div className="hidden sm:block">
                  <svg
                    className="text-gray-400"
                    width="16"
                    height="39"
                    viewBox="0 0 16 39"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.72265"
                      y1="10.584"
                      x2="15.7226"
                      y2="0.583975"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="17.584"
                      x2="15.7226"
                      y2="7.58398"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="24.584"
                      x2="15.7226"
                      y2="14.584"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="31.584"
                      x2="15.7226"
                      y2="21.584"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="38.584"
                      x2="15.7226"
                      y2="28.584"
                    ></line>
                  </svg>
                </div>

                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                    $1M+
                  </p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Transações
                    <br />
                    financeiras
                  </p>
                </div>
              </div> */}
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image
                className="w-[22rem] rounded-md opacity-0"
                src={imagemPessoas}
                alt=""
                ref={imageRef}
              />
              {/* <p className="text-xs">Imagem de freepik</p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
