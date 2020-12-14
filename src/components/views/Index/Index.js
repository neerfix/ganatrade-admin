import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import WeekStatistics from "../../containers/WeekStatistics";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: this.props.location.pathname
        };
    }

    render() {
        return (
            <div className="content col-10 mt-3">
                <Card>
                    <Card.Header>
                        Trafic
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Hello</Card.Subtitle>
                         Ce texte est inutile
                    </Card.Body>
                </Card>
                <WeekStatistics />
            </div>
        )
    }
}
export default (Index);