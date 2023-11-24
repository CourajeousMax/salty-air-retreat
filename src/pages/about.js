import * as React from 'react';
import { CreditCard } from 'react-square-web-payments-sdk'
import { PaymentForm, Ach } from 'react-square-web-payments-sdk';
const MyPaymentForm = () => (
  <PaymentForm
    /**
     * Identifies the calling form with a verified application ID generated from
     * the Square Application Dashboard.
     */
    applicationId="sandbox-sq0idb-Vumg9u9ojMIIkmUFQ0Ug7A"
    /**
     * Invoked when payment form receives the result of a tokenize generation
     * request. The result will be a valid credit card or wallet token, or an error.
     */
    cardTokenizeResponseReceived={async (token, buyer) => {
            const response = await fetch("/api/pay", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                sourceId: token.token,
              }),
            });
            alert(JSON.stringify(await response.json(), null, 2));
          }}
    /**
     * This function enable the Strong Customer Authentication (SCA) flow
     *
     * We strongly recommend use this function to verify the buyer and reduce
     * the chance of fraudulent transactions.
     */
    createVerificationDetails={() => ({
      amount: '1.00',
      /* collected from the buyer */
      billingContact: {
        addressLines: ['123 Main Street', 'Apartment 1'],
        familyName: 'Doe',
        givenName: 'John',
        countryCode: 'GB',
        city: 'London',
      },
      currencyCode: 'GBP',
      intent: 'CHARGE',
    })}
    /**
     * Identifies the location of the merchant that is taking the payment.
     * Obtained from the Square Application Dashboard - Locations tab.
     */
    locationId="LX0RNJ1WCPC2H"
  >
    <CreditCard />
    <Ach accountHolderName="John Don't" redirectURI="https://example.com" transactionId="54321" />
  </PaymentForm>

);

export default MyPaymentForm;