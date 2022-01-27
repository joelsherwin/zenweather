import React, {Component} from "react";
import { AppBar } from "@mui/material";

class Header extends Component {
    // default state values
    state = {
        city: "Chennai",
        
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <>
                <AppBar>ZenWeather</AppBar>
            </>
        );
    }
}

export default Header;