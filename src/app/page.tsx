import { About, Contact, Navbar, Projects, Stack } from "./components";

const HomePage = () => {
  return (
    <main className="relative">
      <Navbar />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </main>
  );
};

export default HomePage;
