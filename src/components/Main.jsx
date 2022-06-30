import { Route, Switch, Redirect } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Header from '../components/Header'

import '../public/scss/Main.scss'

function Main() {

    return (

        <Switch>

            <Route exact path='/'>

                <Header />
                <Home />

            </Route>

            <Route path='/about'>

                <Header />
                <About />

            </Route>
            
        </Switch>

    )

}

export default Main