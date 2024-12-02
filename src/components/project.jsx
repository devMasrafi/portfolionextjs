import MultiProjectInfo from "@/components/MultiprojectInfo";


const ProjectPage = () => {
  const proiject1 = [
    {
      image: "/images/projectImages/project-1-Banner.jpg",
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
  ];

  return (
    <main className="bg-darkBlue ">
      <section className=" relative container mx-auto lg:py-[6rem] text-white ">
        <div className="before:content-[''] lg:before:h-[2px] lg:before:w-full lg:before:absolute lg:before:bg-white lg:before:top-[4rem] lg:before:left-0 lg:before:rounded-full lg:before:opacity-60 ">
          <div className="flex">
            {/* project intro info */}
            <div>
              <div className="flex gap-x-5 ">
                <h3 className="lg:text-2xl capitalize font-ralewayFt text-nowrap opacity-80 ">
                  my works
                </h3>
                <div>
                  <h2 className="font-ralewayFt capitalize font-semibold lg:text-5xl text-wrap ">
                    work&#39;s that i&#39;m proud of
                  </h2>
                  <button className="font-robotoFt font-light lg:mt-[2rem] lg:px-6 lg:py-2 border border-1 rounded-xl capitalize tracking-wide  ">
                    see all works
                  </button>
                </div>
              </div>
            </div>
            {/* Project Hero */}
            <div className="lg:w-[55rem]">
              <img
                className="lg:w-[54rem] lg:h-[28rem] object-cover overflow-hidden bg-gray-500 lg:p-1 lg:rounded-3xl  "
                src={proiject1[0].image}
                alt="project 1"
              />
              <div className="flex justify-between lg:mt-[2rem] ">
                <div className="lg:w-[34rem] ">
                  <h2 className="lg:text-7xl capitalize font-ralewayFt font-semibold">
                    {proiject1[0].titile}
                  </h2>
                  <p className="font-ralewayFt tracking-wider opacity-70 lg:pt-[1rem] lg:w-[30rem] ">{proiject1[0].details}</p>
                </div>
                <div className=" flex flex-wrap lg:gap-x-2 lg:gap-y-2 justify-end lg:w-[16rem] ">
                  {proiject1[0].techused.map((items) => {
                    return (
                      <div
                        className="border border-1 border-white lg:px-4 lg:py-2 lg:rounded-md"
                        key={items.techId}
                      >
                        <p className="capitalize tracking-wider font-ralewayFt lg:text-sm">{items.tech}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 2nd projects */}
          <section className="lg:mt-[3rem] ">
            <MultiProjectInfo/>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
