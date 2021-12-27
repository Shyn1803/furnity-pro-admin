
import { getProducts } from '@/services/product';
import { updateProduct } from '@/services/product';
import { API_STATUS } from '@/utils/apiStatus';

const { SUCCESS } = API_STATUS;

export default {

  namespace: 'product',

  state: {
    products: [],
    valueRowExpended: {
      'keyTest': 12,
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *fetchProducts(_, { call, put }) {
      console.log('fetchProducts');
      const response = yield call(getProducts);
      if (response?.meta?.status === SUCCESS) {
        yield put({
          type: 'saveProducts',
          payload: response?.data || [],
        });
      }
    },

    *updateValueRowExpended({ payload }, { call, put }) {
      console.log('payload: ', payload);
      const response = yield call(updateProduct, payload);
      yield put({
        type: 'saveValueRowExpended',
        payload,
      });
    },
  },

  reducers: {
    save(state, action) {
      console.log("payload: ", action.payload);
      return { ...state, ...action.payload };
    },
    saveProducts(state, action) {
      return { ...state, products: action.payload };
    },
    saveValueRowExpended(state, action) {
      console.log("payload: ", action.payload);
      return { ...state, ...action.payload };
    },
  },

};
