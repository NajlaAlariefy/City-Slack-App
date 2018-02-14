import React, { Component } from 'react';
import fire from './fire';
import buildings from './data/buildings.json';
import background from './resources/bg.jpg'
import city from './data/city.json'
import ReactHover from './ReactHover'
import HoverComponent from './info' 
import TriggerComponent from './building'
import componentstyles from './component.css'

class App extends Component {
 
   render() {
    
        
    return (
      <div style={divStyle}>  
        <table style={tableStyle}>
      <tbody><tr>
        {buildings.map(function(item, key) {
             
               return (
                
  
                  <td  key = {key}>{item.project} <img  style={imgS} src={require('./resources/b2.png')}/></td>
                
                 
        
                )
             
             })}  
              <td>   <ReactHover
              options={optionsCursorTrueWithMargin}>
              <ReactHover.Trigger type='trigger'>
                <img style={imgS}  src={require('./resources/hq.png')}/>
              </ReactHover.Trigger>
              <ReactHover.Hover type='hover'>
                <div className={componentstyles.hover}>
                  <img className={componentstyles.thumbnail} alt="Albert Einstein" src="https://images.gr-assets.com/authors/1429114964p2/9810.jpg" />
                  <blockquote className={componentstyles.quote}> Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. </blockquote>
                  <p className={componentstyles.people}>--Albert Einstein</p>
                </div>
              </ReactHover.Hover>
            </ReactHover></td></tr>
                                               </tbody>


    
       </table>   </div>
    )
  }
  
  
  
}
const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
}
var divStyle = {
  height: 800,
  backgroundImage:`url(${background})`,
    
};

var tableStyle = {
    position: 'absolute',
    bottom:'0px'
    
}
var imgS = {
    width: 50
}
export default App;