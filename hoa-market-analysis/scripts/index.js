

function myFunction() {
  //Gets values from HTML input form
  const street = document.getElementById('input').elements[0].value;
  const city = document.getElementById('input').elements[1].value;
  const state = document.getElementById('input').elements[2].value;
  const zip = document.getElementById('input').elements[3].value;

  const zillowid = '';
  const onboardid = '';

  const address1 = street.split(' ').join('+');
  const address2 = city.split(' ').join('+') + '+' + state;
  const radius = '0.05';
  const page = '1';
  const pagesize = '10';
  //Call Onboard API, input address data to get list of nearby props to input address
  const xhttp = new XMLHttpRequest();
  //Format url with address input pulled from HTML form
  const url = `https://search.onboard-apis.com/propertyapi/v1.0.0/property/address?address1=${address1}&address2=${address2}&radius=${radius}&page=${page}&pagesize=${pagesize}`;
  //Send GET request to Onboard API
  xhttp.open('GET', url);
  xhttp.setRequestHeader('accept', 'application/json');
  xhttp.setRequestHeader('apikey', onboardid);
  xhttp.send();
  xhttp.onreadystatechange = (e) => {
    let onboardresponse = xhttp.responseText;
    let onboardresponse2 = JSON.parse(onboardresponse);
    console.log(onboardresponse2.property[0].address.oneLine);
  };
  //Get relevant data, store for use in table
  //Stores list of props in vicinity
  //Call Zillow API with list of props, get relevant data, store for use in table


  let tableHeader = '<tr>'
                  + '<th>Address</th>'
                  + '<th>Mi From Subject</th>'
                  + '<th>Beds, Baths</th>'
                  + '<th>SF</th>'
                  + '<th>Sale Price</th>'
                  + '<th>Price/SF</th>'
                  + '<th>Zestimate</th>'
                  + '<th>Zestimate/SF</th>'
                  + '<th>Prev Sale Price</th>'
                  + '<th>Prev Price/SF</th>'
                  + '<th>Appreciation</th>'
                  + '</tr>';
  let finishedProduct = tableHeader;

/*
  for (let i = 0, i<addresses.length, i++) {
    finishedProduct += (
      <tr>
        <td>{street address}</td>
        <td>{mi from subject}</td>
        <td>{beds, baths}</td>
        <td>{SF}</td>
        <td>{last sold price}</td>
        <td>{price/SF}</td>
        <td>{Zillow value}</td>
        <td>[Zillow/SF]</td>
        <td>{Prev sold price}</td>
        <td>{Prev price/SF}</td>
        <td>{Appreciation}</td>
      </tr>
    )
  };
  */

  document.getElementById('finishedProduct').innerHTML = (finishedProduct)
}
