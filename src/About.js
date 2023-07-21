import { HeroSection } from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

export const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "ecommerce",
  };
  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};
