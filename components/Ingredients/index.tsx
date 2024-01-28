import Dot from "../List/Dot";
import UnorderedList from "../List/UnorderedList";
import UnorderedListItem from "../List/UnorderedListItem";
import SubTitle from "../SubTitle";
import Text from "../Text";

const Ingredients = () => {
  return (
    <section className="flex flex-col gap-6">
      <SubTitle>Ingredients</SubTitle>
      <UnorderedList>
        <UnorderedListItem>
          <Dot />
          <Text>2-3 large eggs</Text>
        </UnorderedListItem>
        <UnorderedListItem>
          <Dot />
          <Text>Salt, to taste</Text>
        </UnorderedListItem>
        <UnorderedListItem>
          <Dot />
          <Text>Pepper, to taste</Text>
        </UnorderedListItem>
        <UnorderedListItem>
          <Dot />
          <Text>1 tablespoon of butter or oil</Text>
        </UnorderedListItem>
        <UnorderedListItem>
          <Dot />
          <Text>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </Text>
        </UnorderedListItem>
      </UnorderedList>
    </section>
  );
};

export default Ingredients;
