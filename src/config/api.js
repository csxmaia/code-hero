import axios from 'axios';
import md5 from "md5";

const PUBLIC_KEY = 'e1b6bf9b40d8c451cf509ea5b10f1950';
const PRIVATE_KEY = '8fa87ebe884b563f3717baafa76598b487fdc7e5';

const baseUrlMarvel = 'https://gateway.marvel.com:443/v1/public/';
const urnParam = 'characters'

const ts = new Date().getTime();
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

const apiBaseUrl = baseUrlMarvel + urnParam + `?apikey=${PUBLIC_KEY}` + `&ts=${ts}&hash=${hash}`;

export default axios.create({
  baseURL: apiBaseUrl
})