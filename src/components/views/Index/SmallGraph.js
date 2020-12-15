import React, { Component } from 'react';
import {Card} from "react-bootstrap";
import {Line, LineChart, Tooltip, XAxis} from "recharts";

class SmallGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.stats
        };
    }

    totalData = () => {
        let result = 0;
        for(let i=0; i<this.state.data.length; i++){
            result += this.state.data[i][this.props.type];
        }
        return result;
    };

    switchColor = (type) =>{
      switch (type) {
          case "newUsers":
              return "#63c2de";
          case "activeUsers":
              return "#f86c6b";
          case "newOffers":
              return "#ffc107";
          case "newTasks":
              return "#4dbd74";
          default:
              return "#63c2de"
      }
    };

    render(){
        return(
            <Card className={'d-flex flex-row smallGraph '+this.props.type}>
                <div className={'flex-column'}>
                    <Card.Subtitle>{this.props.title}</Card.Subtitle>
                    <h5>{this.totalData()}</h5>
                </div>
                <LineChart width={150} height={50} data={this.props.stats}>
                    <XAxis hide dataKey="name" />
                    <Tooltip />
                    <Line type="monotone" dataKey={this.props.type} stroke={this.switchColor(this.props.type)} strokeWidth={2} dot={false}/>
                </LineChart>
            </Card>
        )
    }
}
export default (SmallGraph);