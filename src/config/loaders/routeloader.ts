import apiroutes from "../../routes/apiroutes";
import webroutes from "../../routes/webroutes";

const routeloader = (app: any) => {
  app.route('/', webroutes);
  app.route('/api', apiroutes);
}

export default routeloader;