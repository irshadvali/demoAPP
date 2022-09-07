import {demoApiRequest} from '../apirequest/demo.apirequest';
export const GET_ALL_POST_REQUEST = 'GET_ALL_POST_REQUEST';
export const GET_ALL_POST_SUCCESS = 'GET_ALL_POST_SUCCESS';
export const GET_ALL_POST_FAILURE = 'GET_ALL_POST_FAILURE';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
//Purchase
export const demoActions = {
  getAllPost,
  deleteData,
};

function getAllPost() {
  return dispatch => {
    dispatch(request());
    let payload = 'posts';
    demoApiRequest.getAll(payload).then(
      data => dispatch(success(data)),
      error => dispatch(failure(error.toString())),
    );
  };

  function request() {
    return {type: GET_ALL_POST_REQUEST};
  }
  function success(data) {
    return {type: GET_ALL_POST_SUCCESS, data};
  }
  function failure(error) {
    return {type: GET_ALL_POST_FAILURE, error};
  }
}

function deleteData(id) {
  return dispatch => {
    dispatch(request());
    let url = 'posts';
    demoApiRequest.deleteData(url,id).then(
      data => dispatch(success(data)),
      error => dispatch(failure(error.toString())),
    );
  };

  function request() {
    return {type: DELETE_POST_REQUEST};
  }
  function success(data) {
    return {type: DELETE_POST_SUCCESS, data};
  }
  function failure(error) {
    return {type: DELETE_POST_FAILURE, error};
  }
}

