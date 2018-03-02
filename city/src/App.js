import React, {
  Component
} from 'react';
import fire from './fire';
//import buildings from './data/buildings.json';
import background from './resources/bg.jpg'
import city from './data/city.json'
import componentstyles from './component.css'
import 'react-tippy/dist/tippy.css'
import {
  Tooltip,
} from 'react-tippy';
import _ from 'lodash';
import firebase from './fire.js'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buildings: []
    };
    let app = firebase.database().ref('buildings');
    app.on('value', snapshot => {
      this.getData(snapshot.val());

    });

  }
  getData(values) {
    let buildValues = values;
    let buildings = _(buildValues)
      .keys()
      .map(bKey => {
        let cloned = _.clone(buildValues[bKey]);
        cloned.key = bKey;
        return cloned;
      })
      .value();

    this.setState({
      buildings: buildings
    });

  }

  render() {


    return ( <
      div > < div style = {
        divStyle
      } >

      <
      table style = {
        tableStyle
      } >
      <
      tbody > < tr > {
        this.state.buildings.map(function(item, key)   {
          return ( <
            td key = {
              key
            } >
            <
            Tooltip html = {
              ( <
                div >
                <
                strong > {
                   item.project
                } <
                /strong><br/ >
                Contractor—  < strong > {
                   item.contractor
                } < /strong> <br/ >
                Landlord—  < strong > {
                   item.landlord
                } < /strong><br/ >
                Phase—  < strong > {
                  item.phase
                } < /strong><br/ >
                <
                /div>
              )
            }
            position = "top"
            trigger = "click" >
            <
            p >
            <
            img style = {
              imgS
            }
            src = {
              require('./resources/b1.png')
            }
            /> <
            /p> <
            /Tooltip> <
            /td>



          )

        })
      }


      <
      td >
      <
      Tooltip html = {
        ( <
          div >
          Mayor— < strong > The MAYOR < /strong><br/ >
          Population—  < strong > {
            city.Population
          } < /strong> <br/ >
          GDP—  < strong > {
            city.GDP
          } < /strong><br/ >

          <
          /div>
        )
      }
      position = "top"
      trigger = "click" >
      <
      img style = {
        imgS
      }
      src = {
        require('./resources/hq.png')
      }
      /> <
      /Tooltip> <
      /td></tr >

      <
      /tbody>



      <
      /table>   </div >
      <
      div style = {
        How
      } >
      WATCH YOU CITY GROW

      The more you interact with the city, the <
      /div>

      <
      /div>
    )
  }



}
const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
}
var divStyle = {
  height: 900,
  backgroundImage: `url(${background})`,

};
var How = {
  height: 900,
  backgroundColor: '#eee',

};
var tes = {

  backgroundColor: 'red',

};
var tableStyle = {
  position: 'absolute',
  bottom: '250px'

}
var imgS = {
  width: 150
}



export default App;
