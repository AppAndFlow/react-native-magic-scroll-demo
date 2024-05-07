const DEV_API_URL = 'https://google.com';
const PROD_API_URL = 'https://google.com';

const dev = {
  apiURL: DEV_API_URL,
};

const prod = {
  apiURL: PROD_API_URL,
};

const config = __DEV__ ? dev : prod;

export const IS_LIVE_CONFIG = config.apiURL === PROD_API_URL;

export default config;
