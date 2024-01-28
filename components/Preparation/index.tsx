import Dot from "../List/Dot";
import UnorderedList from "../List/UnorderedList";
import UnorderedListItem from "../List/UnorderedListItem";
import StrongText from "../StrongText";
import Text from "../Text";

const Preparation = () => {
  return (
    <section className="flex flex-col gap-3 rounded-md bg-roseWhite p-6">
      <h2 className="font-outfit text-xl font-bold text-darkRaspberry">
        Preparation time
      </h2>
      <UnorderedList>
        <UnorderedListItem>
          <Dot />
          <Text>
            <StrongText>Total</StrongText>: Approximately 10 minutes
          </Text>
        </UnorderedListItem>
        <UnorderedListItem>
          <Dot />
          <Text>
            <StrongText>Preparation</StrongText>: 5 minutes
          </Text>
        </UnorderedListItem>
        <UnorderedListItem>
          <Dot />
          <Text>
            <StrongText>Cooking</StrongText>: 5 minutes
          </Text>
        </UnorderedListItem>
      </UnorderedList>
    </section>
  );
};

export default Preparation;
