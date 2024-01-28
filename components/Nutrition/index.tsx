import GenericChildren from "@/types/GenericChildren";
import Divisor from "../Divisor";
import SubTitle from "../SubTitle";
import Text from "../Text";

const Nutrient = ({ children }: GenericChildren) => {
  return (
    <div className="my-3 ml-8 flex w-48 justify-between lg:w-[22rem]">
      {children}
    </div>
  );
};

const Value = ({ children }: GenericChildren) => {
  return (
    <span className="w-16 font-outfit font-semibold text-nutmeg">
      {children}
    </span>
  );
};

const Nutrition = () => {
  return (
    <section className="flex flex-col gap-3">
      <SubTitle>Nutrition</SubTitle>
      <div />
      <Text>
        The table below shows nutritional values per serving without the
        additional fillings.
      </Text>
      <div>
        <Nutrient>
          <Text>Calories</Text>
          <Value>277kcal</Value>
        </Nutrient>
        <Divisor />
        <Nutrient>
          <Text>Carbs</Text>
          <Value>0g</Value>
        </Nutrient>
        <Divisor />
        <Nutrient>
          <Text>Protein</Text>
          <Value>20g</Value>
        </Nutrient>
        <Divisor />
        <Nutrient>
          <Text>Fat</Text>
          <Value>22g</Value>
        </Nutrient>
      </div>
    </section>
  );
};

export default Nutrition;
