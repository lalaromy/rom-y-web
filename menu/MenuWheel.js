import { useEffect, useState } from "react";
import WheelPicker from "react-simple-wheel-picker";
import { menu, aboutMenu, codeMenu, fashionMenu } from "../menu/en/menu";
import { useRouter } from "next/router";

const MenuWheel = ({ currentMenu, currentMenuIndex }) => {
  const [mainMenu, setMainMenu] = useState(currentMenu);
  const [subMenu, setSubMenu] = useState(aboutMenu);

  const router = useRouter();

  const handleMenuChange = (target) => {
    console.log(target);
    setMainMenu(target.value);
    setTimeout(() => {
      router.push("/" + mainMenu);
    }, 2000);
  };

  useEffect(() => {
    adaptMenu(mainMenu);
  }, [mainMenu]);

  const adaptMenu = () => {
    if (mainMenu === "about") setSubMenu(aboutMenu);
    if (mainMenu === "code") setSubMenu(codeMenu);
    if (mainMenu === "fashion") setSubMenu(fashionMenu);
  };

  return (
    <div className="container">
      <div className="white-box"></div>
      <WheelPicker
        className="wheel"
        data={menu}
        onChange={handleMenuChange}
        height={150}
        width={100}
        titleText="Enter value same as aria-label"
        itemHeight={30}
        selectedID={menu[currentMenuIndex].id}
        color="grey"
        activeColor="white"
        backgroundColor="#000000"
        shadowColor="black"
      />
      <WheelPicker
        className="wheel"
        data={subMenu}
        onChange={handleMenuChange}
        height={150}
        width={100}
        titleText="Enter value same as aria-label"
        itemHeight={30}
        selectedID={subMenu[0].id}
        color="#50844F"
        activeColor="#92FF8F"
        backgroundColor="#000000"
        shadowColor="black"
      />
    </div>
  );
};

export default MenuWheel;
