import type GenericChildren from "@/types/GenericChildren";

const UnorderedList = ({ children }: GenericChildren) => {
  return <ul className="ml-2 flex flex-col gap-3">{children}</ul>;
};

export default UnorderedList;
