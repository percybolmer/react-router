import Navbar from '../components/navbar/navbar'
import  { Switch, Route } from "react-router-dom";
import Home from '../components/home/home'
import Contact from '../components/contact/contact'
import About from '../components/about/about'
import Profile from '../components/user/profile'
function Main() {
    return (
        <div>
            
                <Navbar></Navbar>
                <div className="content">
                
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={About}/>
                        
                        <Route path="/profile/:username" component={Profile}/>
                    </Switch>
                </div>

        </div>
    )
}

export default Main;