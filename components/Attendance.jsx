/* eslint-disable @next/next/no-img-element */
import React from "react";

const Attendance = () => {
  return (
    <div id="attendances" className="bg-rose w-full rounded-3xl py-4">
      <div className="container flex flex-col sm:flex-row justify-center items-center mx-auto">
        <div className="text-amber text-2xl sm:text-6xl text-center">
          <h2 className="pb-2 text-amber">ATENDIMENTOS</h2>
          <div className="flex py-4 justify-center space-x-2">
            <button className="text-white text-xs bg-bege rounded-full h-10 w-32">
              <a href="">Threading de Sobrancelhas</a>
            </button>
            <button className="text-white text-xs justify-center bg-bege rounded-full h-10 w-32 mr-2 ml-2">
              <a href="">Extensão de Pestanas</a>
            </button>
            <button className="text-white text-xs justify-center bg-bege rounded-full h-10 w-32">
              <a href="">Lifting de pestanas</a>
            </button>
          </div>
          <div className="flex flex-wrap justify-center space-x-2">
            <button className="text-white text-xs bg-bege rounded-full h-10 w-32">
              <a href="">Depilação</a>
            </button>
            <button className="text-white text-xs bg-bege rounded-full h-10 w-32 mr-2 ml-2">
              <a href="">Limpeza facial</a>
            </button>
            <button className="text-white text-xs bg-bege rounded-full h-10 w-32">
              <a href="">Massagem Modeladora</a>
            </button>
          </div>
        </div>
        <div className="py-5">
          <img className="h-64" src="/images/attendance.png" alt="attendance" />
        </div>
      </div>
      <div className="flex mx-auto w-24 sm:w-48 h-24 sm:h-36 justify-center space-x-2">
        <img className="rounded-3xl" src="/images/att1.png" alt="" />
        <img className="rounded-3xl" src="/images/att2.png" alt="" />
        <img className="rounded-3xl" src="/images/att3.png" alt="" />
        <img className="rounded-3xl" src="/images/att4.png" alt="" />
      </div>
      <div className="mx-auto flex sm:flex-row flex-col items-center w-full sm:w-1/2 py-12 space-x-5">
        <div id="about" className="">
          <p className="text-center text-amber text-4xl">SOBRE</p>
          <p className="text-center text-amber text-3xl">Micaela Teixeira</p>
          <p className="sm:text-lg text-amber text-center sm:text-center py-8 px-8 sm:py-4 sm:px-0">
            A grande maioria de vocês sabem que imigrei para Portugal em 2018 e
            como não é fácil ser imigrante temos muitas vezes que nos
            reinventar. Eu sempre fui apaixonada pela área da estética e uma
            autêntica fã de uma sobrancelha bem feita, Quando cheguei no Porto
            iniciei a minha cartela de clientes e desde então ela não para de
            crescer, com isso gerando muita experiência na área e assim criando
            meu método.
          </p>
        </div>
        <img className="w-80 rounded-3xl" src="/images/p2.png" alt="" />
      </div>
    </div>
  );
};

export default Attendance;
