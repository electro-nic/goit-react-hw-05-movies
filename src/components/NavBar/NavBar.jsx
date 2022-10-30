import NavBarMenu from "./NavBarMenu";
import { ConteinerNav, LogoLink } from "./NavBarStyled";
import { AiFillVideoCamera } from "react-icons/ai";

export default function Navbar() {
    return (
        <nav>
            <ConteinerNav>
                <LogoLink to="/"><AiFillVideoCamera color='#812cc7' size='40px'/></LogoLink>
                <NavBarMenu />
            </ConteinerNav>
        </nav>
    )
}
