import { About, Contact, Navbar, Projects, Stack , Work } from "./components";

const HomePage = () => {
  return (
    <main className="relative">
      <Navbar />
      <About />
      <Work />
      <Projects />
      <Stack />
      <Contact />
    </main>
  );
};

export default HomePage;
