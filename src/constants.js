export const SEARCH_TERM = 'florist'
export const LIMIT_DEFAULT = '20'
export const BASE_URL = 'https://api.yelp.com/v3/businesses/search'
export const API_KEY = 'NCrOnbJiUUw342FD8121BvS1MXqeKxLBExdwPyBpnoiCLVgaG5YUrq_yR7u4ApYXavwMlHfQZhh3-9mPxXfBKr5oBHikCyx7iNjiz-jio2yKahxQQl4WrQdbnPrWXXYx'
export const GOOGLE_MAP_KEY = 'AIzaSyCtwCp-CcVquwJjT59OmertKhh7sSItEP0'
export const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
export const MAP_URL = `https://www.google.com/maps/embed/v1/MODE?key=${GOOGLE_MAP_KEY}&parameters`
export const DEFAULT_ZOOM = 14
export const DEFAULT_COORDS = {
    'lat': 40.7592589,
    'lng': -73.9245565
}

/* Typically i'd use a .env for these, especially the keys, but github pages hosting would need
  the .env as well, exposing it. I will have the repo on private so not to expose
  the private keys and just use contants. */
