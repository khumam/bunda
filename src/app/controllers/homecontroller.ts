export default class HomeController {
  public static index = (context: any) => {
    return context.text('HELLO');
  }
}