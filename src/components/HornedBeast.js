import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            numOfPets: 0
        }
    }

    // for adding 1 to the clicked on image
    increaseNumberOfPets = () => {
        this.setState({
            numOfPets: this.state.numOfPets + 1
        })
    }

    render() {
        return (

            /*<div>
                <h2>{this.props.title}</h2>
                <img src={this.props.url} alt={this.props.keyword} 
                 title={this.props.horns} />
                <p>{this.props.description}</p>
            </div>*/

            <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img src={this.props.url}/>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>{this.props.description} {this.state.numOfPets}</Card.Text>
                <Button onClick={this.increaseNumberOfPets} variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>

        )
    }
}
export default HornedBeast;