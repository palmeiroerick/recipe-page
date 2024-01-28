import Divisor from "@/components/Divisor";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import Nutrition from "@/components/Nutrition";
import Omelette from "@/components/Omelette";
import Preparation from "@/components/Preparation";
import Text from "@/components/Text";
import Title from "@/components/Title";

const Home = () => {
  return (
    <main className="w-[23.438rem] rounded-3xl bg-white lg:my-28 lg:w-[45rem]">
      <Omelette />
      <div className="flex flex-col gap-6 p-8 lg:gap-7 lg:p-10">
        <Title>Simple Omelette Recipe</Title>
        <Text>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </Text>
        <Preparation />
        <Ingredients />
        <Divisor />
        <Instructions />
        <Divisor />
        <Nutrition />
      </div>
    </main>
  );
};

export default Home;
