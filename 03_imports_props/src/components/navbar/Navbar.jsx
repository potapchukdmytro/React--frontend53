import { ButtonPremium } from "../buttons/Buttons";

function Navbar() {
    return (
        <div className="navbar">
            <a>Home</a>
            <a>Catalog</a>
            <a>About</a>
            <a>Contacts</a>
            <ButtonPremium />
        </div>
    )
}

export default Navbar;