import SocialHandel from "@/components/socialHandel";

export default function Home() {
  const mainSkill = [
    { skillName: "node js" },
    { skillName: "mongoDb" },
    { skillName: "ReactJS/native" },
    { skillName: "nextJs" },
    { skillName: "ExpressJs" },
    { skillName: "JavaScript" },
    { skillName: "Figma" },
  ];


  return (
    <main>
      <section>
        <div className="container mx-auto ">
          <div className="text-center uppercase lg:mt-[15rem]">
            <h2 className="lg:text-6xl font-bold italic">web developer</h2>
            <p className="relative lg:text-lg underline underline-offset-[0.5rem] lg:my-3">
              lets give your imagination a way to make reality
            </p>
            <h2 className="lg:text-6xl font-bold italic">and designer</h2>
          </div>

          <div className="lg:mt-[18rem] lg:text-center">scroll down</div>

          <div className="lg:mt-[3rem]">
            <SocialHandel />
          </div>
        </div>
      </section>

      {/* about */}

      <section className="lg:my-[10rem]">
        <div className="container mx-auto">
          <div className="lg:w-[50rem] mx-auto">
            <div className="flex">
              <div>
                <img
                  className="lg:h-[32rem] lg:w-[24rem] rounded-md"
                  src="/images/aboutMe.jpg"
                  alt="About Me"
                />
              </div>
              <div className="relative lg:w-[22rem] lg:mt-[20rem]">
                <div className="bg-mainBg absolute left-[-2rem] p-3 rounded-lg">
                  <h3 className="lg:text-2xl lg:font-bold tracking-wider">
                    Hello there!
                  </h3>
                  <h2 className="lg:text-4xl lg:font-bold">
                    My name is Masrafi Mondol. I am a
                    <span className="text-orange-400"> web designer</span> and
                    <span className="text-orange-500"> developer</span>, and I
                    code vanilla
                    <span className="text-orange-300"> &#40;most of my time&#41;</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:mt-[8rem] lg:justify-evenly">
            {/* About Me Text */}
            <div className="lg:w-[34rem]">
              <h2 className="lg:text-3xl lg:font-bold capitalize tracking-wider lg:pb-4">
                my journey
              </h2>
              <p className="lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                illo dolore quaerat? Eum officiis voluptates, a tempore quae
                nobis corrupti nihil porro voluptatem aperiam dolores eos
                molestiae ex expedita et.
              </p>
            </div>
            {/* Most Used Skills */}
            <div>
              <h2 className="lg:text-2xl capitalize lg:pb-[1rem]">most used</h2>
              <div className="lg:w-[22rem] flex flex-wrap gap-3">
                {mainSkill.map((item) => (
                  <div
                    key={item.skillName}
                    className="px-2 py-1 border-2 border-darkBlue rounded-md"
                  >
                    <h2>{item.skillName}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
