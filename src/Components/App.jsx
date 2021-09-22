/* import Mygtukas from './Mygtukas';

const data = [['Spausk', 1], ['Spaudinėk', 10], ['Klikink', 100]];
 */
import React from 'react';
import ChangeColorButton from './ChangeColorButton';

class App extends React.Component{

    constructor(){
        super();
        this.state = {bg:'green'};
    }
    changeColor = () =>{
    this.setState( state =>{
        let color;
        if(state.bg =='green'){
            color = 'orangered';
        }
        else if(state.bg =='orangered'){
            color = 'green';
        }
            return(
            {bg: color})
        }); 
    }
    
    render(){
        return (
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>
            <ChangeColorButton clickToChangeColor ={this.changeColor}></ChangeColorButton>
        </div>
            ); 
    }
}
export default App; 