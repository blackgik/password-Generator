import HelloRouter from "./GeneratorRoute"

export default (router: any) => {
    router.use(HelloRouter())
  return router;
};
