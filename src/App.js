import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import NewsContainer from './Component/NewsContainer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <h1 className='text-center my-3'>Welcome to Flash Focus</h1>
        
        <Routes>
          <Route exact path="/" element={<NewsContainer  key="general" category="general"/>}/>
          <Route exact path="/business" element={<NewsContainer key="sports" category="sports"/>}/>
          <Route exact path="/entertainment" element={<NewsContainer key="entertainment" category="entertainment"/>}/>
          <Route exact path="/general" element={<NewsContainer key="general1" category="general"/>}/>
          <Route exact path="/health" element={<NewsContainer key="health" category="health"/>}/>
          <Route exact path="/science" element={<NewsContainer key="science" category="science"/>}/>
          <Route exact path="/sports" element={<NewsContainer key="sports" category="sports"/>}/>
          <Route exact path="/technology" element={<NewsContainer key="technology" category="technology"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
