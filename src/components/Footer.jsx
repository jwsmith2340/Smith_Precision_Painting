import '../public/scss/Footer.scss'

import Footer_Nav from './Footer_Components/Footer_Nav';
import Footer_Contact from './Footer_Components/Footer_Contact';

function Footer() {
    
    return (
        
        <>

            <div className="footer_box_mob">

                <Footer_Nav />

                <Footer_Contact />

            </div>

        </>

    )

}

export default Footer;