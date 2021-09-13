import Component from './Component';
import Stalas from './Stalas';

function App(props){
    return (<>
    <Component per={props.per} name ={'Labas'} surename ={'Antanai'}></Component>
    <Stalas per={props.per} name ={'Labas'} surename ={'Antanai'}> </Stalas>   
    </>
    );

}

export default App; 