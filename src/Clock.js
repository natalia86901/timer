import {Component} from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocalTimeString()
    }
}

componentDidMount() {
    this.timerID = setInterval(() => 
        this.tick(), 1000)
    }

componentWillUnmount() {
    clearInterval(this.timerID)
}


tick() {
    this.setState({
        time: new Date().toLocalTimeString()
    })
}

render() {
    return<p>{ this.state.time }</p>
  }
 
}