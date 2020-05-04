// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Category = {
  id: number
  name: string
}

export type Currency = {
  symbol: string
  name: string
}

export type Price = {
  currency: Currency
  value: number
}

export type epoch = number

export type OperationType = 'buy' | 'sell' | 'deposit' | 'withdraw'

export type Operation = {
  id: number
  date: epoch
  type: OperationType
  ticker: string
  quantity: number
  price: Price
 }