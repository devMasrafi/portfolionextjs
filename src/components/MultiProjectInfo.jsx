"use client";

const MultiProjectInfo = () => {
  const multiPojectArr = [
    {
      image: "/images/projectImages/project-2-Banner.jpg",
      titile: "Meddical",
      details:
        "A medical clinical web application to serve the people in need and to make the work easy to find there related information.",
      techused: [
        {
          techId: 1,
          tech: "tailwindCSS",
        },
        { techId: 3, tech: "reactjs" },
        {
          techId: 4,
          tech: "Framer-Motion",
        },
      ],
    },
    {
      image: "/images/projectImages/project-3-Banner.jpg",
      titile: "travel des",
      details:
        "A travel planer website to plan your next travel fast and easy with the best deals",
      techused: [
        {
          techId: 1,
          tech: "tailwindCSS",
        },
        { techId: 2, tech: "nextjs" },

        { techId: 3, tech: "reactjs" },
        {
          techId: 4,
          tech: "Framer-Motion",
        },
        {
          techId: 5,
          tech: "shadcn",
        },
      ],
    },
    {
      image: "/images/projectImages/project-5-Banner.jpg",
      titile: "Dev Masrafi",
      details:
        "my very own portfolio based on my experience and tech skills. to show the experience and result of my hard works",
      techused: [
        {
          techId: 1,
          tech: "tailwindCSS",
        },
        { techId: 2, tech: "nextjs" },

        { techId: 3, tech: "reactjs" },
        {
          techId: 4,
          tech: "Framer-Motion",
        },
      ],
    },
  ];
  //   console.log(multiPojectArr);
  return (
    <main>
      <section className="container mx-auto text-white">
        <div className="flex flex-wrap justify-evenly   ">
          {multiPojectArr.map((projects, index) => {
            return (
              <div
                key={index}
                className={` ${
                  index % 2 === 1
                    ? "lg:h-[18rem] lg:w-[43rem] "
                    : "lg:h-[34rem] lg:w-[38rem] "
                }`}
              >
                <img
                  className={`${
                    index % 2 === 1
                      ? "lg:h-[22rem] lg:w-[44rem] "
                      : "lg:h-[18rem] lg:w-[38rem] "
                  } object-cover rounded-2xl overflow-hidden bg-gray-500 lg:p-1 lg:rounded-3xl  `}
                  src={projects.image}
                  alt={projects.titile}
                />
                <div className="flex justify-between lg:pt-4 ">
                  <div className="lg:w-[22rem] ">
                    <h2 className="lg:text-5xl capitalize font-ralewayFt font-semibold">
                      {projects.titile}
                    </h2>
                    <p
                      className={`font-ralewayFt tracking-wider opacity-70 lg:pt-[1rem] lg:text-sm`}
                    >
                      {projects.details}
                    </p>
                  </div>
                  <div>
                    <div className=" flex flex-wrap lg:gap-x-2 lg:gap-y-2 justify-end lg:w-[14rem] ">
                      {projects.techused.map((items) => {
                        return (
                          <div
                            className="border border-1 border-white lg:px-4 lg:py-2 lg:rounded-md"
                            key={items.techId}
                          >
                            <p className="capitalize tracking-wider font-ralewayFt lg:text-xs">
                              {items.tech}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default MultiProjectInfo;
