# Credit Card Number Validator

This is a technical assessment assignment, part of the hiring process for an unnamed company. This work was done by Kris Hatcher, as part of the evaluation of his candidacy to work for aforementioned company.

There are two sections of this document. The first is the assignment, as provided by the company, included here for reference. The second is information about the implementation of that assignment - including observations, assumptions, and instructions as necessary.

## Assignment

### Summary

You work for a company that accepts Visa, MasterCard and Discover credit cards for payment.

Given a credit card number as input, answer the following questions:

* Is the input a valid credit card number?
* What type of credit card is this? (Visa, Mastercard or Discover)

Your application will be deployed in AWS and should be implemented using serverless architecture and services if possible.

### Deliverables

* A link to a URL where the functional solution can be demonstrated or downloaded
* A link (and credentials, if applicable) to a source control repository containing the source code of the solution
* Documentation of any assumptions that were made in order to deliver the solution
  * It is okay to include the documentation of assumptions in the source code repository or as a separate deliverable.

### Additional Information

We do not expect any more than a few hours of effort for this, but you may put as much or as little time into the project as you would like. Anything that you would like to do, but does not fit in this time should be documented in the assumptions document deliverable.

Each credit card company uses a different number format for their credit cards.

* Visa - 13 or 16 digits, starting with 4
* MasterCard - 16 digits, starting with 51 through 55
* Discover - 16 digits, starting with 6011 or 65

## Implementation Information

Functional site can be found at [ccvalid.kristopherhatcher.com](http://ccvalid.kristopherhatcher.com/). _Note that HTTPS is not implemented given the additional complexity and the lack of actual data save/submission logic._

Running locally can be accomplished by simply opening [index.html](index.html) in a browser.
