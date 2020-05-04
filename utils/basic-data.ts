import { Category, Operation, Currency } from '../interfaces'

export const categories: Category[] = [
  { id: 101, name: 'Currencies' },
  { id: 102, name: 'Crypto currencies' },
  { id: 103, name: 'Stocks' },
  { id: 104, name: 'Funds' },
  { id: 105, name: 'Futures' },
  { id: 106, name: 'Derivatives' },
  { id: 107, name: 'Bonds' },
  { id: 108, name: 'Certificate of Deposit' }
]

export const USD: Currency = {
  symbol: 'USD',
  name: 'U.S. Dollar'
}

export const operations: Operation[] = [
  {
    id: 1001,
    date: (new Date()).valueOf(),
    type: 'deposit',
    ticker: 'BTC',
    quantity: 1,
    price: { currency: USD, value: 8800 }
  }
]
