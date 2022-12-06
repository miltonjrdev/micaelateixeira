import React from "react";

const Testimonials = () => {
  const people = [
    {
      name: "Joyce Karen",
      avatar:
        "https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png",
      testimony:
        "Melhor profissional de sobrancelhas do Porto!! ❤️ você sempre melhora o que há de lindo em nós 😍.",
      twitterPseudo: "@joycekaren",
    },
    {
      name: "Filipa Ribeiro",
      avatar:
        "https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png",
      testimony:
        "Profissionalismo não falta na Micaela onde adicionalmente nos encontramos num espaço de uma alegria contagiante, familiar e que nos enche o coração a cada marcação.",
      twitterPseudo: "@filiparibeiro",
    },
    {
      name: "Mafalda Rocha",
      avatar:
        "https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png",
      testimony:
        "Há dois anos que trato com a Micaela além do olhar (pestanas e sobrancelhas) é um doce, saímos revigoradas.",
      twitterPseudo: "@mafaldarocha",
    },
  ];

  return (
    <div className="relative mx-auto py-8 px-4 w-full max-w-7xl text-gray-700">
      <p className="text-rose text-3xl sm:text-6xl py-8 px-0 sm:px-52 text-center sm:text-start">
        DEPOIMENTOS
      </p>
      <div className="flex flex-col items-center">
        {/* :TESTIMONIALS CONTAINER */}
        <div className="mx-auto w-full max-w-sm sm:max-w-3xl lg:max-w-6xl">
          <ul className="grid grid-cols-6 gap-5">
            {people.map((person) => (
              <li
                key={person.twitterPseudo}
                className="col-span-full sm:col-span-3 lg:col-span-2 py-6 px-4 flex flex-col rounded-xl shadow-lg bg-white"
              >
                {/* ::Card header */}
                <div className="flex items-center space-x-3">
                  {/* :::avatar */}
                  <span className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                    <img src={person.avatar} alt="" className="object-cover" />
                  </span>
                  <div className="text-left">
                    {/* :::name */}
                    <h3 className="text-base font-semibold">{person.name}</h3>
                    {/* :::pseudo twitter */}
                    <p className="text-sm text-gray-400">
                      {person.twitterPseudo}
                    </p>
                  </div>
                </div>
                {/* ::Card body */}
                <div className="mt-4 flex text-sm">
                  {/* :::testimony */}
                  <p className="text-sm">
                    <span className="text-rose font-semibold">
                      @studiomicaelateixeira{" "}
                    </span>
                    {person.testimony}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
