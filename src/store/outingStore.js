import axios from '../axios-auth';
import * as actionTypes from './actionTypes';

const outingModule = {
  state: {
    outing: null,
    loadingStatus: false,
    error: false
  },
  mutations: {
    updateOuting: (state, outing) => {
      state.outing = outing;
    },
    updateLoadingStatus: (state, status = false) => {
      state.loadingStatus = status;
    },
    updateError: (state, message = null) => {
      state.loadingStatus = message;
    }
  },
  getters: {
    [actionTypes.OUTING_GETTER]: (state) => state.outing,
    [actionTypes.OUTING_LOADING_STATUS_GETTER]: (state) => state.loadingStatus,
    [actionTypes.OUTING_ERROR_GETTER]: (state) => state.error
  },
  actions: {
    [actionTypes.OUTING_FETCH_ACTION]: ({
      commit
    }) => {
      commit('updateLoadingStatus', true);
      commit('updateError');

      console.log('Getting Outing details');
      axios
        .post('/outing/get')
        .then((res) => {
          console.log('Got outing details');
          commit('updateOuting', res.data);
          commit('updateLoadingStatus');
          commit('updateError');
        })
        .catch((e) => {
          console.log(e);
          commit('updateLoadingStatus');
          commit('updateError', e);
        });
    }
  }
};

export default outingModule;
