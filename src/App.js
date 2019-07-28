import React, {Component} from 'react';
import './App.css';

// $ npm install react-plotly.js plotly.js
// $ npm i axios
import Plot from 'react-plotly.js'
import axios from 'axios';

class App extends Component {

  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    var url = 'https://api.favoriot.com/v1/streams?device_developer_id=deviceDefault@Lintang_Wisesa&max=10'
    var headers = {
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxpbnRhbmdfV2lzZXNhIiwicmVhZF93cml0ZSI6dHJ1ZSwiaWF0IjoxNDkzODgyODczfQ.0n_FIr4vapSjewJE2e7cb-FTXs3JsUMTHsTgT2mYNFs'
      }
    }
    axios.get(url, headers)
    .then((x)=>{
      console.log(x)
      this.setState({
        data: x.data.results
      })
    })
    .catch(()=>{
      alert('Failed to get the data 😭')
    })
  }

  // get button 
  getButton = () => {
    var url = 'https://api.favoriot.com/v1/streams?device_developer_id=deviceDefault@Lintang_Wisesa&max=10'
    var headers = {
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxpbnRhbmdfV2lzZXNhIiwicmVhZF93cml0ZSI6dHJ1ZSwiaWF0IjoxNDkzODgyODczfQ.0n_FIr4vapSjewJE2e7cb-FTXs3JsUMTHsTgT2mYNFs'
      }
    }
    axios.get(url, headers)
    .then((x)=>{
      console.log(x)
      this.setState({
        data: x.data.results
      })
    })
    .catch(()=>{
      alert('Failed to get the data 😭')
    })
  }

  // post button
  postButton = () => {
    var url = 'https://api.favoriot.com/v1/streams'
    var headers = {
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxpbnRhbmdfV2lzZXNhIiwicmVhZF93cml0ZSI6dHJ1ZSwiaWF0IjoxNDkzODgyODczfQ.0n_FIr4vapSjewJE2e7cb-FTXs3JsUMTHsTgT2mYNFs'
      }
    }
    var dataBody = {
      device_developer_id: "deviceDefault@Lintang_Wisesa",
      data: {
        Temperature: this.refs.temp.value,
        Humidity: this.refs.hum.value,
        Potentio: this.refs.pot.value,
      }
    }
    axios.post(url, dataBody, headers)
    .then(()=>{
      alert('Data posted successfully! 😍')
      this.getButton()
    })
    .catch(()=>{
      alert('Failed to post the data 😭')
    })
  }

  render(){

    // get variables: temp, hum, pot, time
    var temp = this.state.data.map((val, i)=>{
      return val.data.Temperature
    })
    var hum = this.state.data.map((val, i)=>{
      return val.data.Humidity
    })
    var pot = this.state.data.map((val, i)=>{
      return val.data.Potentio
    })
    var time = this.state.data.map((val, i)=>{
      return val.stream_created_at.split('T')[0] + ' ' + val.stream_created_at.split('T')[1] 
    })

    return (
      <div className="App container mt-5">
        <h2 style={{color:'white'}}>React ♥ Plotly ♥ Favoriot</h2>

        <div className='row mt-5 mb-3'>
          
          {/* temperature */}
          <div className='input-group col-sm-4'>
            <input ref='temp' type='number' placeholder='Temperature...' className='form-control'/>
            <div className='input-group-append'>
              <span className='input-group-text'>°C</span>
            </div>
          </div>

          {/* humidity */}
          <div className='input-group col-sm-4'>
            <input ref='hum' type='number' placeholder='Humidity...' className='form-control'/>
            <div className='input-group-append'>
              <span className='input-group-text'>%</span>
            </div>
          </div>

          {/* potentio */}
          <div className='input-group col-sm-4'>
            <input ref='pot' type='number' placeholder='Potentio...' className='form-control'/>
            <div className='input-group-append'>
              <span className='input-group-text'>#</span>
            </div>
          </div>

        </div>

        <div className='row mb-3 justify-content-around'>

          {/* post button */}
          <button className='btn btn-lg form-control col-sm-6'
          style={{maxWidth:'350px', backgroundColor:'purple', color:'white'}}
          onClick={this.postButton}
          >
            POST
          </button>

          {/* get button */}
          <button className='btn btn-lg form-control col-sm-6'
          style={{maxWidth:'350px', backgroundColor:'purple', color:'white'}}
          onClick={this.getButton}
          >
            GET
          </button>

        </div>

        <div>

          {
            this.state.data
            ?
            <Plot
              data={[
                {
                  x: time ? time : 0,
                  y: temp ? temp : 0,
                  type: 'scattergl',
                  marker: {color:'red'},
                  name: 'Temp (°C)'
                },
                {
                  x: time ? time : 0,
                  y: hum ? hum : 0,
                  type: 'scattergl',
                  marker: {color:'blue'},
                  name: 'Hum (%)'
                },
                {
                  x: time ? time : 0,
                  y: pot ? pot : 0,
                  type: 'scattergl',
                  marker: {color:'green'},
                  name: 'Pot'
                }
              ]}
              layout = {{
                width : '700', height : '400',
                title : 'Favoriot Data Visualization',
                legend: {
                  x: 1, y: 1, traceorder: 'normal',
                  font: {
                    family: 'sans-serif', size: 12, color: 'black'
                  },
                  bgcolor: 'lightgrey',
                  bordercolor: 'grey',
                  borderwidth: 2
                }
              }}
            />
            :
            <div></div>
          }

        </div>

      </div>
    );
  }
}

export default App;
