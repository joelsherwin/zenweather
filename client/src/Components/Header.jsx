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
                <Typography style={{textAlign:"center", paddingTop:"2%", fontSize:"20px"}} variant="overline" color="text.secondary" component="div" sx={{ flexGrow: 1 }}>
                    ZenWeather
                </Typography>
            </>
        );
    }
}

export default Header;