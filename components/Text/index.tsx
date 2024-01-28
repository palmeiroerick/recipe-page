import type GenericChildren from "@/types/GenericChildren";

const Text = ({ children }: GenericChildren) => {
  return <p className="w-fit font-outfit text-wengeBrown">{children}</p>;
};

export default Text;
