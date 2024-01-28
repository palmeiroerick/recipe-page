import GenericChildren from "@/types/GenericChildren";

const OrderedList = ({ children }: GenericChildren) => {
  return (
    <ol className="ml-8 flex list-decimal flex-col gap-3 marker:font-semibold marker:text-darkRaspberry">
      {children}
    </ol>
  );
};

export default OrderedList;
