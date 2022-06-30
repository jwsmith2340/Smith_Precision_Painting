import '../public/scss/Header.scss'

import { FaBars } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";

function Header() {
    return (
        <div id="header_box">
            
            <div className="mob">

                <div className="mob-menu-btn"><FaBars /></div>
                <div className="mob-logo"><FaPaintRoller /></div>

            </div>

        </div>
    )
}

export default Header