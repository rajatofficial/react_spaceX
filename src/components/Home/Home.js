import React from 'react';
import axios from 'axios';
import SatelliteCard from '../Card/satelliteCard';
import { Container, Row, Col } from 'react-bootstrap';
import Filter from '../Filter/Filter';
import MediaQuery from 'react-responsive';
import Loader from 'react-loader-spinner';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            year: "",
            launch: "",
            land: "",
            buttonSelected: "",
            loader: true,
            data: []
        }
    }

    loaderFlag = true;
    buttonValue = "";
    launchButtonValue = "";
    landButtonValue = "";

    filterHandler(year, launch, land, button) {
        console.log("button: " + button);

        var partialYearURL = "";
        var partialLaunchURL = "";
        var partialLandURL = "";
        this.loaderFlag = true;
        const baseURL = "https://api.spacexdata.com/v3/launches?limit=100";
        this.setState({ ...this.state, loader: true, buttonSelected: button });
        if (year !== "") {
            this.buttonValue = year;
            partialYearURL = "&launch_year=" + year;
            this.setState({ ...this.state, year: year });
            if (this.state.launch !== "") {
                partialLaunchURL = "&launch_success=" + this.state.launch;
            }
            if (this.state.land !== "") {
                partialLandURL = "&land_success=" + this.state.land;
            }
        }

        if (launch !== "") {
            this.launchButtonValue = launch;
            partialLaunchURL = "&launch_success=" + launch;
            this.setState({ ...this.state, launch: launch });
            if (this.state.year !== "") {
                partialYearURL = "&launch_year=" + this.state.year;
            }
            if (this.state.land !== "") {
                partialLandURL = "&land_success=" + this.state.land;
            }
        }
        if (land !== "") {
            this.landButtonValue = land;
            partialLandURL = "&land_success=" + land;
            this.setState({ ...this.state, land: land });
            if (this.state.launch !== "") {
                partialLaunchURL = "&launch_success=" + this.state.launch;
            }
            if (this.state.year !== "") {
                partialYearURL = "&launch_year=" + this.state.year;
            }
        }
        var URL = baseURL + partialLandURL + partialLaunchURL + partialYearURL;
        axios.get(URL).then(
            response => {
                this.loaderFlag = false;
                this.setState({ ...this.state, loader: false, data: response.data });
            }
        ).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        axios.get("https://api.spacexdata.com/v3/launches?limit=100").then(
            response => {
                console.log(response);
                this.loaderFlag = false;
                this.setState({ ...this.state, loader: false, data: response.data });
            }
        ).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <Container fluid='true'>
                <Row>
                    <MediaQuery minDeviceWidth={1024}>
                        <Col sm={3}>
                            <Filter launch={this.launchButtonValue} land={this.landButtonValue} buttonSelected={this.buttonValue} clickHandler={(year, launch, land, button) => this.filterHandler(year, launch, land, button)}></Filter>
                        </Col>
                    </MediaQuery>

                    <MediaQuery maxDeviceWidth={700}>
                        <Col sm={3} style={{ paddingLeft: '85px' }}>
                            <Filter clickHandler={(year, launch, land) => this.filterHandler(year, launch, land)}></Filter>
                        </Col>
                    </MediaQuery>

                    <MediaQuery minDeviceWidth={1024}>
                        <Col sm={9}>
                            <Loader
                                visible={this.loaderFlag || this.state.loader}
                                type="ThreeDots"
                                color="#00BFFF"
                                height={100}
                                width={100} />
                            {this.state.data.map(sattelite => (
                                <div>
                                    <SatelliteCard className='card'
                                        image={sattelite.links.mission_patch_small}
                                        mission={sattelite.mission_name}
                                        mission_ids={sattelite.mission_ids}
                                        launch_year={sattelite.launch_year}
                                        success_launch={sattelite.launch_success}
                                        landing={sattelite.rocket.first_stage.cores[0].land_success}
                                    >
                                    </SatelliteCard>
                                </div>
                            ))}
                        </Col>
                    </MediaQuery>

                    <MediaQuery maxDeviceWidth={700}>
                        <Col style={{ paddingLeft: '100px' }} sm={9}>
                            <Loader style={{ marginLeft: "-80px" }} visible={this.loaderFlag || this.state.loader} type="ThreeDots" color="#00BFFF" height={100}
                                width={100} />
                            {this.state.data.map(sattelite => (
                                <div>
                                    <SatelliteCard className='card'
                                        image={sattelite.links.mission_patch_small}
                                        mission={sattelite.mission_name}
                                        mission_ids={sattelite.mission_ids}
                                        launch_year={sattelite.launch_year}
                                        success_launch={sattelite.launch_success}
                                        landing={sattelite.rocket.first_stage.cores[0].landing_intent}
                                    >
                                    </SatelliteCard>
                                </div>
                            ))}
                        </Col>
                    </MediaQuery>
                </Row>
            </Container>
        )
    }
}

export default Home;