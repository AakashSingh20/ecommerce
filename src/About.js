import { HeroSection } from "./Components/HeroSection";
import { useProductContext } from "./Context/productcontext";

export const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "thapa ecommerce",
  };
  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};
