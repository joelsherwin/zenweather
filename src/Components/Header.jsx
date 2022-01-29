import React, {Component} from "react";
import { AppBar } from "@mui/material";
import { Typography } from "@mui/material";

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
                <AppBar style={{height:"32px"}}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ZenWeather
                </Typography>
                </AppBar>
            </>
        );
    }
}

export default Header;