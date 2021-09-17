import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';
import jsonData from '../src/components/HornedData.json';
import SelectedBeast from './components/SelectedBeast.js';
import Form from 'react-bootstrap/Form';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    Data : jsonData,
    show : false,
    details: undefined, 
    sendData : jsonData,
    numberOfHorns : 0
    }
  }
  
  filterData = (num)=>{

    let filterarr = jsonData.filter(element=>{
      if(num === 0){
        return element;
      }else{
        if(element.horns === num){
          return true;
        }
        else{
          return false;
        }
      }
    });
    return filterarr;
  }

  viewBeast = (int)=>{
    this.setState (
      { show : true, details:int ,}
  );
  }
  
  closing = ()=>{
    this.setState({
      show: false,
  
    });
  }

  eventHandler = async (event) => {
      event.preventDefault();
      await this.setState({
      numberOfHorns: event.target.horns,
      sendData: this.filterData(Number(event.target.value))
    });
    console.log(this.state.sendData);
  };

  render(){
    return (
      <div>

        <Header/>
        
        <SelectedBeast show={this.state.show} details={this.state.details} closing={this.closing}/>
        
        <Form.Select name="hornNumber" aria-label="Default select example" onChange={this.eventHandler}>
          <option value="0">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">WoW!!!</option>
        </Form.Select>

        <Main jsonData={this.state.jsonData} viewBeast={this.viewBeast} jsonData={this.state.sendData} />
  
        <Footer/>
      </div>
    );
  }
}

export default App;
