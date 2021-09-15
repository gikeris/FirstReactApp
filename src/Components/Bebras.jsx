import React from 'react';

class Bebras extends React.Component{

    constructor(){
        super();
        this.state = {date: new Date()};
    }

      /* tick(){   //paleidziams kas 1 sekunde, ji paleidzia setInterval
        this.setState({  //uzsetina nauja state aka pakeicia ji
            date: new Date()  //date pakeiciamas i nauja data; Tiesiogiai negalima keisti 7 eilutes (labai svarbi state savybe).
        });
    }; */

    tick = () =>{            //arrow funkcija, nekuria this, ji pasiima si zodi is bebro
        this.setState({date:new Date ()});
    }

  

    componentDidMount(){ 

         // this.timerID = setInterval(this.tick, 1000);
          /*       this.timerID = setInterval( 
        () => this.tick(),        //aktyvuojas po surenderinimo
            1000 */             //1 sekunde. 3000- 3 sekundes (milisekundemis rasoma)
        // );


        console.log('jau', this.props.bebras);

        document.querySelector('.kvadratas').addEventListener('click', this.tick);
        this.timerID = setInterval(()=> this.tick(), 1000);  //idedame i wrapperi, kad issprestume this problema
        

       
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