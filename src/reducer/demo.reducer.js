import * as getAllPostAction from '../action/demo.action';
const demo = (
  state = {
    demoData: null,
    demoLoading: false,
    demoError: null,
    demoStatus: '',
    demoType: '',


  },
  action,
) => {
  switch (action.type) {
    case getAllPostAction.GET_ALL_POST_REQUEST:
      return Object.assign({}, state, {
        demoLoading: true,
        demoStatus: action.status,
        demoType: getAllPostAction.GET_ALL_POST_REQUEST,
      });
    case getAllPostAction.GET_ALL_POST_SUCCESS: {
      return Object.assign({}, state, {
        demoData: action.data,
        demoLoading: false,
        demoStatus: action.status,
        demoType: getAllPostAction.GET_ALL_POST_SUCCESS,
      });
    }
    case getAllPostAction.GET_ALL_POST_FAILURE:
      return Object.assign({}, state, {
        demoError: action.error,
        demoLoading: false,
        demoStatus: action.status,
        demoType: getAllPostAction.GET_ALL_POST_FAILURE,
      });
      case getAllPostAction.DELETE_POST_REQUEST:
        return Object.assign({}, state, {
          demoLoading: true,
          demoStatus: action.status,
          demoType: getAllPostAction.GET_ALL_POST_REQUEST,
        });
      case getAllPostAction.DELETE_POST_SUCCESS: {
        state.demoData.splice(state.demoData.findIndex(e => e.id === action.data.id),1);
        return Object.assign({}, state, {
          demoLoading: false,
          demoStatus: action.status,
          demoType: getAllPostAction.DELETE_POST_SUCCESS,
        });
      }
      case getAllPostAction.DELETE_POST_FAILURE:
        return Object.assign({}, state, {
          demoError: action.error,
          demoLoading: false,
          demoStatus: action.status,
          demoType: getAllPostAction.DELETE_POST_FAILURE,
        });
 
    default:
      return state;
  }
};
export default demo;
