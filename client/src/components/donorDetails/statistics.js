import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, Card } from 'react-bootstrap';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const donorData = [
    { Year: 1, Donors: 13000 },
    { Year: 2, Donors: 16500 },
    { Year: 3, Donors: 14250 },
    { Year: 4, Donors: 19000 }
];
const recipientData = [
    { Year: 1, Recipients: 20000 },
    { Year: 2, Recipients: 18500 },
    { Year: 3, Recipients: 15250 },
    { Year: 4, Recipients: 25000 }
];

class Statistics extends Component {
    render() {


        return (
            <div style={{ height: "30%", width: "100%", display: "flex" }}>
                <Card style={{ marginLeft: "10%", width: "30%" }}>
                    <Card.Title style={{ textAlign: "center" }}>Global Donors</Card.Title>
                    <VictoryChart
                        // domainPadding will add space to each side of VictoryBar to
                        // prevent it from overlapping the axis
                        domainPadding={20}
                    >
                        <VictoryAxis
                            // tickValues specifies both the number of ticks and where
                            // they are placed on the axis
                            tickValues={[1, 2, 3, 4]}
                            tickFormat={["2017", "2018", "2019", "2020"]}
                        />
                        <VictoryAxis
                            dependentAxis
                            // tickFormat specifies how ticks should be displayed
                            tickFormat={(x) => (`${x / 1000}`)}
                        />
                        <VictoryBar
                            data={donorData}
                            x="Year"
                            y="Donors"
                        />
                    </VictoryChart>

                </Card>

                <Card style={{ marginLeft: "20%", width: "30%" }}>
                    <Card.Title style={{ textAlign: "center" }}>Global Recipients</Card.Title>
                    <VictoryChart
                        // domainPadding will add space to each side of VictoryBar to
                        // prevent it from overlapping the axis
                        domainPadding={20}
                    >
                        <VictoryAxis
                            // tickValues specifies both the number of ticks and where
                            // they are placed on the axis
                            tickValues={[1, 2, 3, 4]}
                            tickFormat={["2017", "2018", "2019", "2020"]}
                        />
                        <VictoryAxis
                            dependentAxis
                            // tickFormat specifies how ticks should be displayed
                            tickFormat={(x) => (`${x / 1000}`)}
                        />
                        <VictoryBar
                            data={recipientData}
                            x="Year"
                            y="Recipients"
                        />
                    </VictoryChart>

                </Card>
            </div>

        )
    }


}

export default Statistics;
