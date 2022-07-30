import { Hono } from "hono";
import HomeApiController from "../app/controllers/api/homeapicontroller";
import homemiddleware from "../app/middlewares/homemiddleware";
const apiroutes = new Hono();

apiroutes.get('/', HomeApiController.index);
apiroutes.use('/middleware', homemiddleware, HomeApiController.index)

export default apiroutes;