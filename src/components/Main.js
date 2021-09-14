import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

render() {
 return (
 <main>
    <div>
        { this.props.Data.map ( 
            
value => {
    
    return (
      <HornedBeast 
         title={value.title} url={value.image_url} description ={value.description} viewBeast={this.props.viewBeast}/>
    )  } )}
    
    </div>

  </main>
    ); }}
    export default Main;