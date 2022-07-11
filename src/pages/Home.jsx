import '../public/scss/Home.scss'

import Header from '../components/Header'
import Splash from '../components/Main_Components/Splash'
import Services from '../components/Main_Components/Services'
import Insurance from '../components/Main_Components/Insurance'
import Footer from '../components/Footer'

function Home() {

    return (

        <>

            <Header />

            <div className="mob-home-box">

                <div className="mob-spacer-block"></div>

                <div className="mob-splash-box">

                    <Splash />

                </div>

                <div className="mob-spacer-block"></div>

                <div className="mob-main-services-box">

                    <Services />

                </div>

                <div className="mob-spacer-block"></div>

                <div className="mob-main-services-box">

                    <Insurance />

                </div>

                <div className="mob-spacer-block"></div>



                <div className="mob-spacer-block"></div>
                <div className="mob-spacer-block"></div>
                <div className="mob-spacer-block"></div>
                <div className="mob-spacer-block"></div>
                <div className="mob-spacer-block"></div>
              


            </div>

            <Footer />
            

        </>

    );

}

export default Home;