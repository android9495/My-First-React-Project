const isDev = window.location.hostname === 'localhost';

const DEV_CONFIG = {
    API_URL: 'https://reqres.in',
    IMAGE_CDN: 'https://google.com',
    DEFAULT_LANGUAGE: 'EN',
}

const PROD_CONFIG = {
    API_URL: 'https://reqres.in/',
    IMAGE_CDN: 'https://abc.com',
    DEFAULT_LANGUAGE: 'FA'
}

export const Configs = isDev ? DEV_CONFIG : PROD_CONFIG;