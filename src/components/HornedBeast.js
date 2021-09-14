    import React from "react";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Card from 'react-bootstrap/Card'
    import Button from 'react-bootstrap/Button'


    class HornedBeast extends React.Component {

        constructor(props){
          super(props);
          this.state = { NiceNum : 0, NotNiceNum : 0,}
        }
      

        Nice = ( ) => {
        this.setState (
          { NiceNum : this.state.NiceNum + 1 }
        );
        }

        NotNice = ( ) => {
        this.setState (
          { NotNiceNum : this.state.NotNiceNum + 1 }
        );
        }
        
      

        displayBeast = (int) => {
          this.props.viewBeast(int);
          this.setState (
            {NiceNum : this.state.NiceNum + 1}
          );
        }
      
        displayBeast2 = (i) => {
          this.setState (
            {NotNiceNum : this.state.NotNiceNum + 1}
          );
        }


        render() {
          return (
          <div>

          <Card style={{ width: '16rem' }}>

          <Card.Img 
          onClick={this.displayBeast} variant="top" src = {this.props.url} name={this.props.title} det ={this.props.description} />

          <Card.Body>

              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text> {this.props.description} </Card.Text>

              <Button onClick = {this.Nice} variant="primary">Nice </Button>
                      <div> 💘  {this.state.NiceNum}</div> 
              <Button onClick = {this.NotNice} variant="primary">Not Nice </Button>
                      <div>  👎  {this.state.NotNiceNum}</div> 

          </Card.Body>
          
          </Card>

          </div>

          );
        }
      }
      
      export default HornedBeast;