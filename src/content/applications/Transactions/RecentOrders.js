"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const RecentOrdersTable_1 = __importDefault(require("./RecentOrdersTable"));
const date_fns_1 = require("date-fns");
function RecentOrders() {
    const cryptoOrders = [
        {
            id: '1',
            orderDetails: 'Fiat Deposit',
            orderDate: new Date().getTime(),
            status: 'completed',
            orderID: 'VUVX709ET7BY',
            sourceName: 'Bank Account',
            sourceDesc: '*** 1111',
            amountCrypto: 34.4565,
            amount: 56787,
            cryptoCurrency: 'ETH',
            currency: '$'
        },
        {
            id: '2',
            orderDetails: 'Fiat Deposit',
            orderDate: (0, date_fns_1.subDays)(new Date(), 1).getTime(),
            status: 'completed',
            orderID: '23M3UOG65G8K',
            sourceName: 'Bank Account',
            sourceDesc: '*** 1111',
            amountCrypto: 6.58454334,
            amount: 8734587,
            cryptoCurrency: 'BTC',
            currency: '$'
        },
        {
            id: '3',
            orderDetails: 'Fiat Deposit',
            orderDate: (0, date_fns_1.subDays)(new Date(), 5).getTime(),
            status: 'failed',
            orderID: 'F6JHK65MS818',
            sourceName: 'Bank Account',
            sourceDesc: '*** 1111',
            amountCrypto: 6.58454334,
            amount: 8734587,
            cryptoCurrency: 'BTC',
            currency: '$'
        },
        {
            id: '4',
            orderDetails: 'Fiat Deposit',
            orderDate: (0, date_fns_1.subDays)(new Date(), 55).getTime(),
            status: 'completed',
            orderID: 'QJFAI7N84LGM',
            sourceName: 'Bank Account',
            sourceDesc: '*** 1111',
            amountCrypto: 6.58454334,
            amount: 8734587,
            cryptoCurrency: 'BTC',
            currency: '$'
        },
        {
            id: '5',
            orderDetails: 'Fiat Deposit',
            orderDate: (0, date_fns_1.subDays)(new Date(), 56).getTime(),
            status: 'pending',
            orderID: 'BO5KFSYGC0YW',
            sourceName: 'Bank Account',
            sourceDesc: '*** 1111',
            amountCrypto: 6.58454334,
            amount: 8734587,
            cryptoCurrency: 'BTC',
            currency: '$'
        },
        {
            id: '6',
            orderDetails: 'Fiat Deposit',
            orderDate: (0, date_fns_1.subDays)(new Date(), 33).getTime(),
            status: 'completed',
            orderID: '6RS606CBMKVQ',
            sourceName: 'Bank Account',
            sourceDesc: '*** 1111',
            amountCrypto: 6.58454334,
            amount: 8734587,
            cryptoCurrency: 'BTC',
            currency: '$'
        },
        {
            id: '7',
            orderDetails: 'Fiat Deposit',
            orderDate: new Date().getTime(),
            status: 'pending',
            orderID: '479KUYHOBMJS',
            sourceName: 'Bank Account',
            sourceDesc: '*** 1212',
            amountCrypto: 2.346546,
            amount: 234234,
            cryptoCurrency: 'BTC',
            currency: '$'
        },
        {
            id: '8',
            orderDetails: 'Paypal Withdraw',
            orderDate: (0, date_fns_1.subDays)(new Date(), 22).getTime(),
            status: 'completed',
            orderID: 'W67CFZNT71KR',
            sourceName: 'Paypal Account',
            sourceDesc: '*** 1111',
            amountCrypto: 3.345456,
            amount: 34544,
            cryptoCurrency: 'BTC',
            currency: '$'
        },
        {
            id: '9',
            orderDetails: 'Fiat Deposit',
            orderDate: (0, date_fns_1.subDays)(new Date(), 11).getTime(),
            status: 'completed',
            orderID: '63GJ5DJFKS4H',
            sourceName: 'Bank Account',
            sourceDesc: '*** 2222',
            amountCrypto: 1.4389567945,
            amount: 123843,
            cryptoCurrency: 'BTC',
            currency: '$'
        },
        {
            id: '10',
            orderDetails: 'Wallet Transfer',
            orderDate: (0, date_fns_1.subDays)(new Date(), 123).getTime(),
            status: 'failed',
            orderID: '17KRZHY8T05M',
            sourceName: 'Wallet Transfer',
            sourceDesc: "John's Cardano Wallet",
            amountCrypto: 765.5695,
            amount: 7567,
            cryptoCurrency: 'ADA',
            currency: '$'
        }
    ];
    return (<material_1.Card>
      <RecentOrdersTable_1.default cryptoOrders={cryptoOrders}/>
    </material_1.Card>);
}
exports.default = RecentOrders;
//# sourceMappingURL=RecentOrders.js.map