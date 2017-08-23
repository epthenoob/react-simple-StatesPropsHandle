import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  constructor(){
    super();
    this.state = {
      title: "Welcome",
    };


  }


  render() {

    // var list = [
    //   <Header />,
    //   <Header />,
    //   <Header />,
    // ];
    const title2 = "Welcome Will!";

    setTimeout(() => {
      this.setState({title: "Welcome, EKO!"})
    }, 2000);
    
    return (
      // <div>
      //   {list}
      // </div>
      <div>
         <Header title={this.state.title} title2={title2} name={"Some Thing"}/>
         <Header title={"Other Title"} />
        <Footer />
      </div>
    );
  }
}

export default Layout;

