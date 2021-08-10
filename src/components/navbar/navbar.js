import  { NavLink , useHistory} from "react-router-dom";

function Navbar() {

    let history = useHistory();

    function goHome(path) {
        history.push("/");
    }

    return (
        <div className="navbar">
            <button type="button" onClick={goHome}><h1>Navbar</h1></button>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to={{
                    pathname: "/profile/percybolmer",
                    state: { registrationdate: "2021-07-07" },
                }}>Profile</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;