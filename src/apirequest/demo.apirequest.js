const URLMAIN ='https://jsonplaceholder.typicode.com';
export const demoApiRequest = {
  getAll,
  sendData,
  update,
  deleteData
};
function getAll(url) {
  const requestOptions = {
    method: 'GET',
    //headers: authHeader(),
  };
console.log(`${URLMAIN}/${url}`)
  return fetch(`${URLMAIN}/${url}`, requestOptions).then(handleResponse);
}
function sendData(url,data) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };

  return fetch(`${URLMAIN}/${url}`, requestOptions).then(handleResponse)
      .then(handleResponse)
      .then(res => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
        
          return res;
      });
}
function update(url,data) {
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };

  return fetch(`${URLMAIN}/${url}/${data.id}`, requestOptions).then(handleResponse);;
}
function deleteData(url,id) {
  const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
  };
 console.log(`${URLMAIN}/${url}/${id}`)
  return fetch(`${URLMAIN}/${url}/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  console.log(response.ok);
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
       // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
