import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
    render(){
        return(
            <div>
                { <h1>Title</h1> }
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default App;
