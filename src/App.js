// npm i react-plotly.js plotly.js
// npm i axios
import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super()
    this.state = {
      data: [],
      isLoading: false,
    }
  }

  componentDidMount(){
    this.setState({
      isLoading: true
    })
    var url = 'https://api.favoriot.com/v1/streams?device_developer_id=deviceDefault@Lintang_Wisesa&max=10'
    var headers = {
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxpbnRhbmdfV2lzZXNhIiwicmVhZF93cml0ZSI6dHJ1ZSwiaWF0IjoxNDkzODgyODczfQ.0n_FIr4vapSjewJE2e7cb-FTXs3JsUMTHsTgT2mYNFs'
      }
    }
    axios.get(url, headers)
    .then((data)=>{
      this.setState({
        data: data.data.results,  // try the favoriot API first!
        isLoading: false
      })
    })
    .catch(()=>{
      this.setState({
        isLoading: false
      })
      alert('Failed to GET data 😭')
    })
  }

  // when GET button clicked
  getButton = () => {
    this.setState({
      isLoading: true
    })
    var url = 'https://api.favoriot.com/v1/streams?device_developer_id=deviceDefault@Lintang_Wisesa&max=10'
    var headers = {
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxpbnRhbmdfV2lzZXNhIiwicmVhZF93cml0ZSI6dHJ1ZSwiaWF0IjoxNDkzODgyODczfQ.0n_FIr4vapSjewJE2e7cb-FTXs3JsUMTHsTgT2mYNFs'
      }
    }
    axios.get(url, headers)
    .then((data)=>{
      this.setState({
        data: data.data.results,  // try the favoriot API first!
        isLoading: false
      })
    })
    .catch(()=>{
      this.setState({
        isLoading: false
      })
      alert('Failed to GET data 😭')
    })
  }
  
  // when POST button clicked
  postButton = () => {
    this.setState({
      isLoading: true
    })
    var url = 'https://api.favoriot.com/v1/streams'
    var headers = {
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxpbnRhbmdfV2lzZXNhIiwicmVhZF93cml0ZSI6dHJ1ZSwiaWF0IjoxNDkzODgyODczfQ.0n_FIr4vapSjewJE2e7cb-FTXs3JsUMTHsTgT2mYNFs'
      }
    }
    var dataBody = {
      device_developer_id: 'deviceDefault@Lintang_Wisesa',
      data: {
        Temperature: this.refs.temp.value,
        Humidity: this.refs.hum.value,
        Potentio: this.refs.pot.value
      }
    }
    axios.post(url, dataBody, headers)
    .then((data)=>{
      this.setState({
        isLoading: false
      })
      alert('Successfully POST the data! 👍')
      this.getButton()
    })
    .catch(() => {
      alert('Failed to POST 😭')
    })
  }

  render(){

    var tempFinal = this.state.data.map((val, i) => {
      return (
        val.data.Temperature
      )
    })
    var humFinal = this.state.data.map((val, i) => {
      return (
        val.data.Humidity
      )
    })
    var potFinal = this.state.data.map((val, i) => {
      return (
        val.data.Potentio
      )
    })
    var timeFinal = this.state.data.map((val, i)=>{
      return (
        val.stream_created_at.split('T')[0] + ' ' + val.stream_created_at.split('T')[1]
      )
    })

    return (
      <div className="container App mt-5">
        <h2 style={{color:"white"}}>React ♥ Plotly ♥ Favoriot</h2>

        <div className='row mt-5 mb-3'>

          {/* temperature */}
          <div className="input-group col-sm-4">
            <input type="number" className="form-control"
            placeholder='Temperature...'
            ref='temp'
            />
            <div className="input-group-append">
              <span className="input-group-text">°C</span>
            </div>
          </div>

          {/* humidity */}
          <div className="input-group col-sm-4">
            <input type="number" className="form-control"
            placeholder='Humidity...'
            ref='hum'
            />
            <div className="input-group-append">
              <span className="input-group-text">%</span>
            </div>
          </div>

          {/* potentio */}
          <div className="input-group col-sm-4">
            <input type="number" className="form-control"
            placeholder='Potentio...'
            ref='pot'
            />
            <div className="input-group-append">
              <span className="input-group-text">#</span>
            </div>
          </div>

        </div>
        
        <div className='row mb-3 justify-content-around'>
          
          <button className="form-control col-sm-6 btn btn-lg" 
          style={{maxWidth:'320px', backgroundColor:'purple', color:'white'}}
          onClick={this.postButton}
          >
            POST
          </button>
          
          <button className="form-control col-sm-6 btn btn-lg"
          style={{maxWidth:'320px', backgroundColor:'purple', color:'white'}}
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
                  y: tempFinal ? tempFinal : 0,
                  x: timeFinal ? timeFinal : 0,
                  type: 'scattergl',
                  marker: {color: 'red'},
                  name: 'Temp (°C)'
                },
                {
                  y: humFinal ? humFinal : 0,
                  x: timeFinal ? timeFinal : 0,
                  type: 'scattergl',
                  marker: {color: 'blue'},
                  name: 'Hum (%)'
                },
                {
                  y: potFinal ? potFinal : 0,
                  x: timeFinal ? timeFinal : 0,
                  type: 'scattergl',
                  marker: {color: 'green'},
                  name: 'Pot'
                },
              ]}
              layout={{
                width: 700, 
                height: 400, 
                title: 'Favoriot Data Visualization',
                legend: {
                  x: 1,
                  y: 1,
                  traceorder: 'normal',
                  font: {
                    family: 'sans-serif',
                    size: 12,
                    color: '#000'
                  },
                  bgcolor: '#E2E2E2',
                  bordercolor: '#FFFFFF',
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
