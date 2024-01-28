import GenericChildren from "@/types/GenericChildren";

const OrderedListItem = ({ children }: GenericChildren) => {
  return <li className="pl-3">{children}</li>;
};

export default OrderedListItem;
