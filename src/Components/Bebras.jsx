import React from 'react';

class Bebras extends React.Component{

    constructor(){
        super();
        this.state = {date: new Date()};
    }
    tick(){   //paleidziams kas 1 sekunde, ji paleidzia setInterval
        this.setState({  //uzsetina nauja state aka pakeicia ji
            date: new Date()  //date pakeiciamas i nauja data; Tiesiogiai negalima keisti 7 eilutes (labai svarbi state savybe).
        });
    }

    componentDidMount(){
        console.log('jau', this.props.bebras);
        this.timerID = setInterval( 
            () => this.tick(),        //aktyvuojas po surenderinimo
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID); //kai ismetamas timer id suveikia sitas. kad sustotu tas tiksejimas
    }
    render(){
        return (
            <span>
                {this.props.bebras}
                <hr/>
                {this.state.date.toLocaleTimeString()}
            </span>
       );
    }
}


       export default Bebras; 