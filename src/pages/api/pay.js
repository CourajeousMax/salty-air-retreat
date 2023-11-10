import { Client } from "square";
import { v4 as uuidv4 } from "uuid";
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: "sandbox",
});

console.info("New Client created", paymentsApi);
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: uuidv4(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: "USD",
        amount: 25,
      },
    });
    console.log("The api token handler returned", result);
    res.status(200).json(result);
  } else {
    res.status(500).send();
  }
}
