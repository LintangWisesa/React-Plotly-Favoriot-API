// npm i react-plotly.js plotly.js
// npm i axios
import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';

function App() {
  return (
    <div className="container App mt-5">
      <h2 style={{color:"white"}}>React ♥ Plotly ♥ Favoriot</h2>

      <div className='row mt-5 mb-3'>

        {/* temperature */}
        <div class="input-group col-sm-4">
          <input type="number" class="form-control"
          placeholder='Temperature...'
          />
          <div class="input-group-append">
            <span class="input-group-text">°C</span>
          </div>
        </div>

        {/* humidity */}
        <div class="input-group col-sm-4">
          <input type="number" class="form-control"
          placeholder='Humidity...'
          />
          <div class="input-group-append">
            <span class="input-group-text">%</span>
          </div>
        </div>

        {/* potentio */}
        <div class="input-group col-sm-4">
          <input type="number" class="form-control"
          placeholder='Potentio...'
          />
          <div class="input-group-append">
            <span class="input-group-text">#</span>
          </div>
        </div>

      </div>
      
      <div className='row mb-3 justify-content-around'>
        
        <button class="form-control col-sm-6 btn btn-lg" 
        style={{maxWidth:'320px', backgroundColor:'purple', color:'white'}}>
          POST
        </button>
        
        <button class="form-control col-sm-6 btn btn-lg"
        style={{maxWidth:'320px', backgroundColor:'purple', color:'white'}}>
          GET
        </button>
      
      </div>

      <div>
        <Plot
          data={[
            {
              x: [1, 2, 3, 4, 5, 6, 7],
              y: [1, 2, 2, 3, 4, 3, 4],
              type: 'scattergl',
              marker: {color: 'red'},
              name: 'Temp (°C)'
            },
            {
              x: [1, 2, 3, 4, 5, 6, 7],
              y: [8, 6, 7, 6, 5, 4, 2],
              type: 'scattergl',
              marker: {color: 'blue'},
              name: 'Hum (%)'
            },
            {
              x: [1, 2, 3, 4, 5, 6, 7],
              y: [5, 5, 6, 7, 4, 3, 3],
              type: 'scattergl',
              marker: {color: 'green'},
              name: 'Pot'
            },
          ]}
          layout={{
            width: 750, 
            height: 400, 
            title: 'Favoriot Data Visualization',
            legend: {
              x: 0.75,
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
        />;
      </div>
    </div>
  );
}

export default App;
