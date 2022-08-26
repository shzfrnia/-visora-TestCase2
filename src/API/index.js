import { default as serverAPI } from "./server/index";
import { default as mockAPI } from "./mock/index";

const API = process.env.production ? serverAPI : mockAPI;

export default API;
