const BASE_URL = process.env.BACKEND_URL || 'http://localhost:4000/api';
/*const BASE_URL = process.env.BACKEND_URL || 'https://shopappv2.herokuapp.com/api';*/
const USER = BASE_URL + '/user';
const ACCOUNT = BASE_URL + '/account';
const PRODUCT = BASE_URL + '/';
const CATEGORY = BASE_URL + '/categories';
const CART = BASE_URL + '/cart';
const SALE = BASE_URL + '/sale';
const ADDRESS = BASE_URL + '/address';
const PAYU_TEST = 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/';
const PAYU_PROD = 'https://checkout.payulatam.com/ppp-web-gateway-payu/';

export const Enpoints = {
    SIGN_IN: BASE_URL + '/signin',
    SIGN_UP: BASE_URL + '/signup',
    ACCOUNT_DATA: ACCOUNT + '/profile',
    UPDATE_USER_DATA: USER,
    SALES_HISTORY: ACCOUNT + '/sales',
    ADDRESS_LIST: ACCOUNT + '/address',
    PRODUCTS: PRODUCT + 'products',
    MOST_RANKING: PRODUCT + 'products/ranking',
    NEWS: PRODUCT + '/products/news',
    CATEGORIES_PRODUCTS: CATEGORY,
    PAYU: {PAYU_TEST, PAYU_PROD},
    CART: CART,
    SALE_ID: SALE,
    ADDRESS: ADDRESS,
    DEPARTMENTS: ADDRESS + '/departments'
  }
;
