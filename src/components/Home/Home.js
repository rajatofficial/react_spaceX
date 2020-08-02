import React from 'react';
import axios from 'axios';
import SatelliteCard from '../Card/satelliteCard';
import { Container, Row, Col } from 'react-bootstrap';
import Filter from '../Filter/Filter';
import MediaQuery from 'react-responsive';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            year: "",
            launch: "",
            land: "",
            data: []
        }
    }

    filterHandler(year, launch, land) {
        const baseURL = "https://api.spacexdata.com/v3/launches?limit=100";
        var partialYearURL = "";
        var partialLaunchURL = "";
        var partialLandURL = "";

        if (year !== "") {
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
            partialLaunchURL = "&launch_success=" + launch;
            this.setState({ ...this.launch, launch: launch });
            if (this.state.year !== "") {
                partialYearURL = "&launch_year=" + this.state.year;
            }
            if (this.state.land !== "") {
                partialLandURL = "&land_success=" + this.state.land;
            }
        }
        if (land !== "") {
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
                console.log(response);
                this.setState({ data: response.data });
            }
        ).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        axios.get("https://api.spacexdata.com/v3/launches?limit=100").then(
            response => {
                console.log(response);
                this.setState({ data: response.data });
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
                        <Filter clickHandler={(year, launch, land) => this.filterHandler(year, launch, land)}></Filter>
                    </Col>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={700}>
                    <Col sm={3}  style={{paddingLeft:'85px'}}>
                        <Filter clickHandler={(year, launch, land) => this.filterHandler(year, launch, land)}></Filter>
                    </Col>
                </MediaQuery>

                    <MediaQuery minDeviceWidth={1024}>
                        <Col sm={9}>
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