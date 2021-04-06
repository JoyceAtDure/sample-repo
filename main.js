// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// GET REQUEST confirm
function getTodos() {
  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   params: {
  //     _limit: 5
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err));
  //https://api.covid19api.com/total/country/india/status/confirmed?from=2020-03-01T00:00:00Z&to=2021-04-01T00:00:00Z

  axios
    .get('https://api.covid19api.com/total/country/india/status/confirmed?from=2020-03-01T00:00:00Z&to=2021-04-01T00:00:00Z', {
      timeout: 5000
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// GET REQUEST death res.data[439]
function getConfirm() {
  

  axios
    .get('https://api.covid19api.com/total/country/india', {
      timeout: 5000
    })
    .then(res => showOutputnew(res)
      
    )
    .catch(err => console.error(err));
}

function getDeaths() {
  

  axios
    .get('https://api.covid19api.com/total/country/india', {
      timeout: 5000
    })
    .then(res => showOutputDeath(res)
      
    )
    .catch(err => console.error(err));
}


function getRecovered() {
  

  axios
    .get('https://api.covid19api.com/total/country/india', {
      timeout: 5000
    })
    .then(res => showOutputRecovered(res)
      
    )
    .catch(err => console.error(err));
}


// ERROR HANDLING
function errorHandling() {
  axios
    .get('https://jsonplaceholder.typicode.com/todoss', {
      // validateStatus: function(status) {
      //   return status < 500; // Reject only if status is greater or equal to 500
      // }
    })
    .then(res => showOutput(res))
    .catch(err => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) {
          alert('Error: Page Not Found');
        }
      } else if (err.request) {
        // Request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}



// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

`;
}
// Show output in browser
function showOutputnew(res) {
  document.getElementById('res').innerHTML = `
  
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data.map(d => ({
        confirm: d.Confirmed
      })), null, 2)}</pre>
    </div>
  </div>

`;
}

// Show output in browser
function showOutputDeath(res) {
  document.getElementById('res').innerHTML = `
  
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data.map(d => ({
        Deaths: d.Deaths
      })), null, 2)}</pre>
    </div>
  </div>

`;
}

// Show output in browser
function showOutputRecovered(res) {
  document.getElementById('res').innerHTML = `
  
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data.map(d => ({
        Recovered: d.Recovered
      })), null, 2)}</pre>
    </div>
  </div>

`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('get-confirm').addEventListener('click', getConfirm);
document.getElementById('get-deaths').addEventListener('click', getDeaths);
document.getElementById('get-recovered').addEventListener('click', getRecovered);
