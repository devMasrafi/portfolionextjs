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
    <main className="bg-darkBlue">
      <section className=" lg:pt-[15rem] text-white ">
        <div className="flex">
          <div>
            <div>
              <h3>my works</h3>
              <h2>work&#39;s that i&#39;m proud of</h2>
            </div>
            <button>see all works</button>
          </div>
          {/* Project Hero */}
          <div className="lg:w-[55rem]">
            <img
              className="lg:w-full "
              src={proiject1[0].image}
              alt="project 1"
            />
            <div className="flex justify-between ">
              <div className="lg:w-[34rem] ">
                <h2 className="lg:text-7xl capitalize">
                  {proiject1[0].titile}
                </h2>
                <p>{proiject1[0].details}</p>
              </div>
              <div className=" flex flex-wrap gap-x-2 gap-y-1 lg:w-[16rem] ">
                {proiject1[0].techused.map((items) => {
                  return (
                    <div
                      className="border border-1 border-white lg:px-4 lg:py-2 rounded-md"
                      key={items.techId}
                    >
                      <p>{items.tech}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 2nd projects */}
        <section></section>
      </section>
    </main>
  );
};

export default ProjectPage;
