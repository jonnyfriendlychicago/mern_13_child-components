
import './App.css';
// import {Button, Card} from 'react-bootstrap';
// import React,  {useState} from 'react'; // added this line
import React from 'react'; 
import AmigoCmp from './components/AmigoCmp';
import LoginCmp from './components/LoginCmp';
import ComponentWithKidsCmp from './components/ComponentWithKidsCmp';

// people on cards data
const peopleArr = [
  {
    firstName: "Shannon",
    lastName: "DosEquis",
    initAge: 25
  }
  ,
  {
    firstName: "Angela",
    lastName: "Modelo",
    initAge: 26
  },
  {
    firstName: "Bridget",
    lastName: "Morena",
    initAge: 33
  }
];



function App() {
  return (
    <>
    <header>
      <div className="header_content"> 
          <div className="header_content_vert_left"> 
              <a href="#" className="header_home_link" >
                  <h1 >Sitename</h1>
                  <h2>Feel the love.</h2>
              </a>
          </div>
          <div className="header_content_vert_right" > 
              <h2>firstName LastName</h2>
              <p>(UserID: plcehldr)</p>
              <div className="header_content_horiz_right">
                  <a href="#">My Profile</a>
                  <a href="#">Logout</a>
              </div>
          </div>
      </div>
    </header>

    <main>
      <div className="row_left">
      
        {peopleArr.map((personObj, index) => (
          <AmigoCmp
            key={index}
            firstName={personObj.firstName}
            lastName={personObj.lastName}
            initAge={personObj.initAge}
          />
        ))}
          
        <LoginCmp />
      
        <div className="App">
        <ComponentWithKidsCmp header={ "Head Stuff sent from app.js prop field" }>
            <h4>These are children</h4>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </ComponentWithKidsCmp>  
        </div>

        {/* <AmigoCmp firstName={"Jane"} lastName={"Dos Equis"}  initAge = {49}/> */}
        {/* <AmigoCmp firstName={"Negra"} lastName={"Modelo"}  initAge = {33}/>
        <AmigoCmp firstName={"Boricua"} lastName={"Morena"}  initAge = {39}/> */}
        
        {/* <form action="/process" method="post">
          <label htmlFor="fname">First name:</label><br></br>
          <input type="text" id="fname" name="fname"></input>
            <br></br>
        </form>  */}
        
        
        
      </div>
    </main>
    </>

  );
}

export default App;
