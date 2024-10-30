import { Transaction } from "./schemaTransactions"

export const transactions: Transaction[] = [
  {
    status: "approved",
    created: "Oct 2, 2:53pm",
    description: "Payroll",
    additional: "Gusto",
    type: "ACH Transfer",
    iconType: "outbound",
    amount: "-$3,783.00",
  },
  {
    status: "open",
    created: "Oct 1, 1:03am",
    description: "Funding",
    additional: "Stuart Little",
    type: "Inbound Wire Transfer",
    iconType: "inbound",
    amount: "+$500,000.00",
  },
  {
    status: "open",
    created: "Sep 30, 10:41am",
    description: "Invoice 22345",
    additional: "JPMorgan Chase Bank ••1189",
    type: "ACH Debit Transfer",
    iconType: "inbound",
    amount: "+$50,000.00",
  },
  {
    status: "approved",
    created: "Sep 29, 05:32pm",
    description: "Jimmy Nadoe",
    additional: "USAA Federal Savings Bank ••4478",
    type: "Inbound ACH Transfer",
    iconType: "inbound",
    amount: "+$1,200.00",
  },
  {
    status: "approved",
    created: "Sep 28, 3:21pm",
    description: "Office Supplies",
    additional: "Staples",
    type: "Credit Card Payment",
    iconType: "card payment",
    amount: "-$320.00",
  },
  {
    status: "approved",
    created: "Sep 27, 9:08am",
    description: "Consulting Fee",
    additional: "John Consulting",
    type: "ACH Transfer",
    iconType: "transfer",
    amount: "+$10,000.00",
  },
  {
    status: "open",
    created: "Sep 26, 11:55am",
    description: "Rent Payment",
    additional: "ABC Realty",
    type: "ACH Debit",
    iconType: "outbound",
    amount: "-$5,000.00",
  },
  {
    status: "open",
    created: "Sep 25, 4:00pm",
    description: "Client Payment",
    additional: "Wells Fargo Bank ••2267",
    type: "Inbound Wire Transfer",
    iconType: "inbound",
    amount: "+$15,500.00",
  },
  {
    status: "open",
    created: "Sep 24, 6:35pm",
    description: "Marketing",
    additional: "Google Ads",
    type: "Credit Card Payment",
    iconType: "card payment",
    amount: "-$1,250.00",
  },
  {
    status: "approved",
    created: "Sep 23, 3:15pm",
    description: "Insurance Premium",
    additional: "Progressive Insurance",
    type: "ACH Transfer",
    iconType: "transfer",
    amount: "-$850.00",
  },
  {
    status: "approved",
    created: "Sep 22, 9:47am",
    description: "Software Subscription",
    additional: "Salesforce",
    type: "ACH Debit Transfer",
    iconType: "outbound",
    amount: "-$2,200.00",
  },
  {
    status: "approved",
    created: "Sep 21, 8:00pm",
    description: "Client Refund",
    additional: "Jane Doe",
    type: "ACH Transfer",
    iconType: "outbound",
    amount: "-$1,000.00",
  },
  {
    status: "approved",
    created: "Sep 20, 11:10am",
    description: "Payment Received",
    additional: "Bank of America ••6790",
    type: "Inbound ACH Transfer",
    iconType: "inbound",
    amount: "+$7,500.00",
  },
  {
    status: "approved",
    created: "Sep 19, 2:44pm",
    description: "Utilities",
    additional: "ConEdison",
    type: "ACH Debit Transfer",
    iconType: "transfer",
    amount: "-$540.00",
  },
  {
    status: "approved",
    created: "Sep 18, 10:17am",
    description: "Advertising",
    additional: "Facebook",
    type: "Credit Card Payment",
    iconType: "card payment",
    amount: "-$1,800.00",
  },
  {
    status: "open",
    created: "Sep 17, 1:25pm",
    description: "Legal Fees",
    additional: "Law Offices of S. Smith",
    type: "ACH Transfer",
    iconType: "transfer",
    amount: "-$4,300.00",
  },
  {
    status: "approved",
    created: "Sep 16, 8:15am",
    description: "Investor Funding",
    additional: "Venture Capital Co",
    type: "Inbound Wire Transfer",
    iconType: "inbound",
    amount: "+$250,000.00",
  },
  {
    status: "open",
    created: "Sep 15, 12:53pm",
    description: "Equipment Purchase",
    additional: "Best Buy",
    type: "ACH Debit",
    iconType: "outbound",
    amount: "-$3,200.00",
  },
  {
    status: "approved",
    created: "Sep 14, 4:30pm",
    description: "Payroll",
    additional: "ADP",
    type: "ACH Transfer",
    iconType: "transfer",
    amount: "-$6,500.00",
  },
  {
    status: "approved",
    created: "Sep 13, 7:35am",
    description: "Client Payment",
    additional: "Citibank ••9283",
    type: "Inbound Wire Transfer",
    iconType: "inbound",
    amount: "+$22,000.00",
  },
  {
    status: "approved",
    created: "Sep 12, 2:22pm",
    description: "Research Expense",
    additional: "LexisNexis",
    type: "Credit Card Payment",
    iconType: "card payment",
    amount: "-$500.00",
  },
  {
    status: "approved",
    created: "Sep 11, 5:40pm",
    description: "Travel Reimbursement",
    additional: "Employee A",
    type: "ACH Transfer",
    iconType: "outbound",
    amount: "-$300.00",
  },
  {
    status: "approved",
    created: "Sep 10, 10:15am",
    description: "Invoice 22451",
    additional: "Wells Fargo Bank ••4567",
    type: "Inbound ACH Transfer",
    iconType: "inbound",
    amount: "+$12,500.00",
  },
  {
    status: "approved",
    created: "Sep 9, 4:07pm",
    description: "Web Hosting Fee",
    additional: "Amazon Web Services",
    type: "Credit Card Payment",
    iconType: "card payment",
    amount: "-$750.00",
  },
  {
    status: "open",
    created: "Sep 8, 11:30am",
    description: "Miscellaneous Expense",
    additional: "Office Supplies",
    type: "Debit Card Payment",
    iconType: "card payment",
    amount: "-$200.00",
  },
]
