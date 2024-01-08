const BASE_URL= "http://localhost:6600";
const PRODUCTS_URL= 'api/products'
const USERS_URL= process.env.NODE_ENV === 'api/users'
const ORDERS_URL= process.env.NODE_ENV === 'api/orders'
const PAYPAL_URL= process.env.NODE_ENV === 'api/config/paypal'

export {BASE_URL,PRODUCTS_URL,USERS_URL,ORDERS_URL,PAYPAL_URL}