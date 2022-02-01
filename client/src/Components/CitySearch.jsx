import React, {Component} from "react";
import {Form, Button, Row, Col, ButtonGroup, ToggleButton} from "react-bootstrap";

class CitySearch extends Component {
    // default state values
    state = {
        city: "Chennai",
        
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <Form className="weather-form" >

                <Row type="flex" justify="center" align="center" className="zipCode">
                    <Col>
                        <span>City: </span>
                        <Form.Control name="cityInput"
                                      type="text"
                                      placeholder="Enter your city name"
                                      onChange={this.onChange}
                                      className="zipCodeInput"/>
                    </Col>
                </Row>

                <Row type="flex" justify="center" align="center">
                    <Col span={4}>
                        <ButtonGroup toggle>
                            <ToggleButton
                                key={"C"}
                                type="radio"
                                variant="secondary"
                                name="tempMetric"
                                value={"metric"}
                                checked={this.state.tempMetric === "metric"}
                                onChange={this.onChange}
                            >
                                Celsius (°C)
                            </ToggleButton>
                            <ToggleButton
                                key={"F"}
                                type="radio"
                                variant="secondary"
                                name="tempMetric"
                                value={"imperial"}
                                checked={this.state.tempMetric === "imperial"}
                                onChange={this.onChange}
                            >
                                Fahrenheit (°F)
                            </ToggleButton>
                        </ButtonGroup>
                    </Col>
                </Row>

                <Row type="flex" justify="center" align="center">
                    <Col span={4}>
                        <Button className="save-btn" variant="primary" type="submit">
                            Save
                        </Button>
                    </Col>
                </Row>

            </Form>
        );
    }
}

export default CitySearch;