import GenericChildren from "@/types/GenericChildren";

const Title = ({ children }: GenericChildren) => {
  return (
    <h1 className="font-youngSerif text-4xl text-darkCharcoal">{children}</h1>
  );
};

export default Title;
