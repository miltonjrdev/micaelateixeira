import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container flex flex-wrap mx-auto">
        <div className="text-gray-600 text-justify sm:text-start px-12 py-12">
          <h1 className="text-rose text-2xl sm:text-3xl text-center sm:text-start font-semibold sm:font-bold w-full">
            Deseja falar conosco?
          </h1>
          <p className="py-6 text-md sm:text-base">
            Estamos localizados em uma das áreas mais sofisticadas da cidade, na
            Av. Da República 2411 SL Esq / Vila Nova de Gaia.
          </p>
          <p className="pb-6 text-md sm:text-base">
            A região é de fácil acesso e segura para que você possa transitar
            sem maiores problemas, além de possuir estacionamento privativo no
            local. Agende sua consulta e comece a cuidar de você agora mesmo.
          </p>
          <p className="text-md sm:text-base">
            Para agendar é muito prático, disponibilizamos diversos meios de
            comunicação para facilitar nosso diálogo.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
