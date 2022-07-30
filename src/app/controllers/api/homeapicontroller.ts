export default class HomeApiController {
  public static index = (context: any) => {
    return context.json({message: 'HELLO WORLD'})
  }
}