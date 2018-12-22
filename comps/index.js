
let finishedProduct = '<tr>'
+ '<th>Address</th>'
+ '<th>Mi From Subject</th>'
+ '<th>Beds, Baths</th>'
+ '<th>SF</th>'
+ '<th>Sale Price</th>'
+ '<th>Sale Date</th>'
+ '<th>Price/SF</th>'
+ '<th>Zestimate</th>'
+ '<th>Zestimate/SF</th>'
+ '<th>Prev Sale Price</th>'
+ '<th>Prev Sale Date</th>'
+ '<th>Prev Price/SF</th>'
+ '<th>Appreciation</th>'
+ '</tr>';


const getData = () => {
  //Gets values from HTML input form
  const street = document.getElementById('input')[0].value;
  const city = document.getElementById('input')[1].value;
  const state = document.getElementById('input')[2].value;
  const zip = document.getElementById('input')[3].value;
  const zillowId = document.getElementById('input')[4].value;
  const onboardId = document.getElementById('input')[5].value;

  const address1 = street.split(' ').join('+');
  const address2 = city.split(' ').join('+') + '%2C+' + state;
  const radius = '0.05';
  const page = '1';
  const pagesize = '10';
  
  //Attom API
  /*
  const onboardRequest = new XMLHttpRequest();
  const url = `https://search.onboard-apis.com/propertyapi/v1.0.0/property/address?address1=${address1}&address2=${address2}&radius=${radius}&page=${page}&pagesize=${pagesize}`;
  onboardRequest.open('GET', url);
  onboardRequest.setRequestHeader('accept', 'application/json');
  onboardRequest.setRequestHeader('apikey', onboardId);
  onboardRequest.send();
  onboardRequest.onreadystatechange = () => {
    if (onboardRequest.readyState === 4 && onboardRequest.status === 200) {
      const onboardResponseText = onboardRequest.responseText;
      alert('success');
      console.log(onboardResponseText);
    }
  };*/

  //Zillow API- Get Search Results
  const zillowRequest1 = new XMLHttpRequest({mozSystem: true, mozAnon: true});
  const zillowUrl1 = `http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${zillowId}&address=${address1}&citystatezip=${address2}`;
  zillowRequest1.open('GET', zillowUrl1);
  //zillowRequest1.setRequestHeader('Access-Control-Allow-Origin', '');
  zillowRequest1.send();
  zillowRequest1.onreadystatechange = () => {
    if (zillowRequest1.readyState === 4 && zillowRequest1.status === 200) {
      const zillowResponseText = zillowRequest1.responseText;
      console.log(zillowResponseText);
    }
  };



    /*
    for (let i = 0, i < addresses.length, i++) {
      finishedProduct += (
        <tr>
          <td>{street address}</td>
          <td>{mi from subject}</td>
          <td>{beds, baths}</td>
          <td>{SF}</td>
          <td>{last sold price}</td>
          <td>{last sold date}</td>
          <td>{price/SF}</td>
          <td>{Zillow value}</td>
          <td>{}</td>
          <td>{Prev sold price}</td>
          <td>{Prev sold date}</td>
          <td>{Prev price/SF}</td>
          <td>{Appreciation}</td>
        </tr>
      )
    };
    */

    //document.getElementById('finishedProduct').innerHTML = (finishedProduct);

};
