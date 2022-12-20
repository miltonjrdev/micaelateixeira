/* eslint-disable @next/next/no-img-element */
import React from "react";

const Attendance = () => {
  return (
    <div id="atendimentos" className="bg-rose w-full rounded-3xl">
      <div className="container flex flex-col justify-center items-center mx-auto">
        <h2 className="text-6xl pt-8 text-amber">ATENDIMENTOS</h2>
        <div className="text-amber flex text-2xl sm:text-6xl text-center">
          <div className="grid grid-cols-6 gap-5 content-evenly justify-items-end py-16 space-x-2">
            <button className="col-span-2 text-white text-xs bg-bege rounded-full h-10 w-32 hover:bg-orange transition-all duration-300">
              <a href="">Threading de Sobrancelhas</a>
            </button>
            <button className="col-span-2 text-white text-xs bg-bege rounded-full h-10 w-32 hover:bg-orange transition-all duration-300">
              <a href="">Extensão de Pestanas</a>
            </button>
            <button className="col-span-2 text-white text-xs bg-bege rounded-full h-10 w-32 hover:bg-orange transition-all duration-300">
              <a href="">Lifting de pestanas</a>
            </button>
            <button className="col-span-2 text-white text-xs bg-bege rounded-full h-10 w-32 hover:bg-orange transition-all duration-300">
              <a href="">Depilação</a>
            </button>
            <button className="col-span-2 text-white text-xs bg-bege rounded-full h-10 w-32 hover:bg-orange transition-all duration-300">
              <a href="">Limpeza facial</a>
            </button>
            <button className="col-span-2 text-white text-xs bg-bege rounded-full h-10 w-32 hover:bg-orange transition-all duration-300">
              <a href="">Massagem Modeladora</a>
            </button>
          </div>
          <div className="py-5">
            <img
              className="h-64"
              src="/images/attendance.png"
              alt="attendance"
            />
          </div>
        </div>
        <div className="flex mx-auto w-24 sm:w-48 h-24 sm:h-36 justify-center space-x-5">
          <img
            className="rounded-3xl hover:opacity-95 hover:scale-105 transition-all duration-300"
            src="/images/att1.png"
            alt=""
          />
          <img
            className="rounded-3xl hover:opacity-95 hover:scale-105 transition-all duration-300"
            src="/images/att2.png"
            alt=""
          />
          <img
            className="rounded-3xl hover:opacity-95 hover:scale-105 transition-all duration-300"
            src="/images/att3.png"
            alt=""
          />
          <img
            className="rounded-3xl hover:opacity-95 hover:scale-105 transition-all duration-300"
            src="/images/att4.png"
            alt=""
          />
        </div>
        <div className="mx-auto flex sm:flex-row flex-col items-center w-full sm:w-1/2 py-12 space-x-5">
          <div id="sobre" className="">
            <p className="text-center text-amber text-4xl">SOBRE</p>
            <p className="text-center text-amber text-3xl">Micaela Teixeira</p>
            <p className="sm:text-lg text-amber text-center sm:text-center py-8 px-10 sm:py-4 sm:px-0">
              A grande maioria de vocês sabem que imigrei para Portugal em 2018
              e como não é fácil ser imigrante temos muitas vezes que nos
              reinventar. Eu sempre fui apaixonada pela área da estética e uma
              autêntica fã de uma sobrancelha bem feita, Quando cheguei no Porto
              iniciei a minha cartela de clientes e desde então ela não para de
              crescer, com isso gerando muita experiência na área e assim
              criando meu método.
            </p>
          </div>
          <img className="w-80 rounded-3xl" src="/images/p2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Attendance;
