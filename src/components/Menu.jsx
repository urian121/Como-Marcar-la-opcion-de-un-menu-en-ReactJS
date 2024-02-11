import { useState } from "react";
import "../assets/css/menu.css";

const Menu = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <>
      <ul className="menu">
        <li className={activeItem === "opcion1" ? "active" : ""}>
          <a onClick={() => handleItemClick("opcion1")} href="#">
            Opción 1
          </a>
        </li>
        <li className={activeItem === "opcion2" ? "active" : ""}>
          <a onClick={() => handleItemClick("opcion2")} href="#">
            Opción 2
          </a>
        </li>
        <li className={activeItem === "opcion3" ? "active" : ""}>
          <a onClick={() => handleItemClick("opcion3")} href="#">
            Opción 3
          </a>
        </li>
      </ul>

      <h1 className="title">Cómo Marcar la opción de un menu en ReactJS</h1>
    </>
  );
};

export default Menu;
