import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="bg-[#FFF8F2] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-32 px-5 py-16 bg-#FFF8F2">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;