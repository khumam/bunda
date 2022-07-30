import { Hono } from "hono";
import HomeController from "../app/controllers/homecontroller";
const webroutes = new Hono();
  
webroutes.get('/', HomeController.index);

export default webroutes;