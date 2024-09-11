import ImageLogo from "../../assets/logo1.png";
import { Button } from "../Buttons";
import { NavItem } from "../NavItem";

function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <img src={ImageLogo} alt="logo" width={100} />
      <div className="flex justify-between items-center w-1/3">
        <NavItem>Home</NavItem>
        <NavItem>Docs</NavItem>
        <NavItem>About</NavItem>
        <Button x = {"13px"} y = {"29px"}>Connect Wallet</Button>
      </div>
    </div>
  );
}

export default Header;
