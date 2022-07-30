const homemiddleware = async (context: any, next: any) => {
  // your middleware statement
  await next();
}

export default homemiddleware;