import { About, Contact, Navbar, Projects, Stack } from "./components";
import { Particles } from "@/components";

const HomePage = () => {
  return (
    <main className="relative">
      <Navbar />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
      <About />
      <Projects />
      <Stack />
      {/* <Articles /> */}
      <Contact />
    </main>
  );
};

export default HomePage;
