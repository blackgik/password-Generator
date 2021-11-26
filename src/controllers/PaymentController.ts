import Stripe from "stripe";
import { Request, Response } from "express";

const stripe = new Stripe(
  "sk_test_51JzzM0A33InVHO7FP7AllLiOht0PKzkhGIh8RDzXZsmAGVf4wpicq7smIRIz5M0QJcKNdfSxPe5XpY6emxcgvOH600sLl3LtWj",
  {
    apiVersion: "2020-08-27",
  }
);

class Payment {
  async createPayment(req: Request, res: Response) {
   
    const tokensParams: Stripe.TokenCreateParams = {
      card: {
        number: "4242424242424242",
        exp_month: "11",
        exp_year: "2022",
        cvc: "314",
      },
    };
    const token:Stripe.Token = await stripe.tokens.create(tokensParams);
    if(token){
        const customer: Stripe.Customer = await stripe.customers.create({
            source: token.id,
            name: req.body.name as string,
            address: req.body.address,
          });
      
          if (customer) {
            const payment: Stripe.Charge = await stripe.charges.create({
              amount: 7000,
              description: "Agent Commissions",
              currency: "USD",
              customer: customer.id,
            });
      
            if (payment) {
              console.log(payment);
            } else {
              console.log("Error occured");
            }
          }
    }

    
  }
}

export default new Payment();
