import SocialHandel from "@/components/socialHandel";

export default function Home() {
  return (
    <main>
      <section>
        <div className="container mx-auto">
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
    </main>
  );
}
