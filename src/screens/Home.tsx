import { Hero, Subscribe } from "../components/home";
import { Footer, Nav } from "../components/layout";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
