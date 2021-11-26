import HelloRouter from "./GeneratorRoute"
import payments from "./Payments"

export default (router: any) => {
    router.use(HelloRouter())
    router.use(payments())
  return router;
};
