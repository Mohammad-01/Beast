import React from 'react';
import HornedBeast from './HornedBeast';
import HornedData from './HornedData';

class Main extends React.Component{
    render(){
        return(
  
    <div>
        { HornedData.map((element, count) => {
                return ( <HornedBeast
                url = {element.image_url}
                title = {element.title}
                description = {element.description}
                />
                )
            } )
    }

    </div>
    
        );
    }
}

export default Main;
