import type GenericChildren from "@/types/GenericChildren";

const UnorderedListItem = ({ children }: GenericChildren) => (
  <li className="flex items-center gap-6 marker:text-darkRaspberry">
    {children}
  </li>
);

export default UnorderedListItem;
