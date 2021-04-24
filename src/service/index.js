import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};

const baseURL = () => {
  (axios.defaults.baseURL = "https://api.sampleapis.com/beers/ale"), headers;
};

const BEER_SERVICE = axios.create(baseURL());
const GET_DIMENSION = "";

const beerInfo = (idBeer) =>
  BEER_SERVICE.get(GET_DIMENSION + idBeer);
const beerAll = () => BEER_SERVICE.get(GET_DIMENSION);

export { beerInfo, beerAll };
