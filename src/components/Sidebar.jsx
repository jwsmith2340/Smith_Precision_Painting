import '../public/scss/Sidebar.scss'

import { FaTimes } from "react-icons/fa";

function Sidebar() {

    return (

        <div className='mob-sidebar'>

            <div className="mob-sidebar-close-box">
            
                <div className="mob-sidebar-close-button"><FaTimes /></div>

            </div>

            <a href="www.google.com"></a>
            <a href="www.google.com"></a>
            <a href="www.google.com"></a>

        </div>

    );

}

export default Sidebar;