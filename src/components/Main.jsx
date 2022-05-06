import { Route, Switch, Redirect } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'

import '../public/scss/Main.scss'

function Main() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
        </Switch>
    )
}

export default Main