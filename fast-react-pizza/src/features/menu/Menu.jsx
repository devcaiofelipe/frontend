import { getMenu } from "../../services/apiRestaurant"; 
import { useLoaderData } from "react-router-dom";
import MenuItem from "../order/MenuItem";

function Menu() {
  const menu = useLoaderData();

  return <ul>
    {menu.map((pizza) => <MenuItem pizza={pizza}/>)}
  </ul>
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
