import React from 'react';
import CountDisplay from './CountDisplay';
import Mygtukas2 from './Mygtukas2';

class Mygtukas extends React.Component{

    constructor(){
        super();
        this.state = {counter:0 };
    }

    activateLasers = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        
        // console.log(`Lazeriai ${this.props.tekstas} aktyvuoti`);
        this.setState((state,props) => ({ counter: state.counter+ props.amount}  ));
    }

    valio(e){
      /*   e.stopPropagation();
        console.log('Valio ');
         document.querySelector('#root').
        addEventListener('click', e=>
        { 
            console.log('Valio');
        })  
        document.querySelector('#root').
        addEventListener('click', e=>
        { 
            console.log('Valio');
        })  */
        console.log('Valio' + this.props.tekstas);
    }
    componentDidMount(){ 
      
    }
    componentWillUnmount(){
    }
    render(){
        return (
            <div className ="bin" onClick={(e)=>this.valio(e)}>
            <a href="" className="container" onClick={(e)=>this.activateLasers(e)}>
                <div className="submit-feedback">{this.props.tekstas} </div>
            </a>
            <CountDisplay digit={this.state.counter}></CountDisplay>
            <Mygtukas2 virve ={this.activateLasers}></Mygtukas2>
            </div>
       );
    }
}


       export default Mygtukas; 