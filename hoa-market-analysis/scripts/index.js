

function myFunction() {
  //Gets values from HTML input form
  const street = document.getElementById('input').elements[0].value;
  const city = document.getElementById('input').elements[1].value;
  const state = document.getElementById('input').elements[2].value;
  const zip = document.getElementById('input').elements[3].value;

  const zillowid = 'X1-ZWz18s1gn1k8i3_4pyss';
  const onboardid = '5215982201c2dc2795e611519b5bb324';

  const address1 = street;
  const address2 = city + ',' + state;
  const radius = '0.05';
  const page = '1';
  const pagesize = '10';
  //Call Onboard API, input address data to get list of nearby props
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElement
    }
  }
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
