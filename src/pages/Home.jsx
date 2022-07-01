import '../public/scss/Home.scss'

import Header from '../components/Header'
import Splash from '../components/Splash'

function Home() {

    return (

        <>

            <Header />

            <div className="mob-home-box">

                <div className="mob-spacer-block"></div>

                <div className="mob-splash-box">

                    <Splash />

                </div>

            </div>
            

        </>

    );

}

export default Home;