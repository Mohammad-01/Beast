import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';
import jsonData from '../src/components/HornedData.json';
import SelectedBeast from './components/SelectedBeast.js';
import Form from './components/Form';
import UserDataModal from "./UserDataModal";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    data : jsonData, show : false, details: undefined, numberOfHorns : ''
    }
  }
  /*
  filterData = (event)=>{
    if(this.state.numberOfHorns !== 'All'){
      this.setState({data : jsonData.filter(elm=>elm.horns === Number(this.state.numberOfHorns))});
    }else{
      this.setState({data : jsonData});
    }
  }

  updateState = horns => this.setState({numberOfHorns : horns.target.value});
*/

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

  render(){
    return (
      <div>

        <Header filterData={this.filterData} numberOfHorns={this.state.numberOfHorns} updateState={this.updateState}/>
        <SelectedBeast show={this.state.show} details={this.state.details} closing={this.closing}/>
        <Main Data={this.state.data} viewBeast={this.viewBeast}/>
           
         <UserDataModal  showModal={this.state.showModal}
          closeHandler={this.closeHandler}
          userName={this.state.userName}
          breed={this.state.breed}
          age={this.state.age}
          likeCats={this.state.likeCats}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
