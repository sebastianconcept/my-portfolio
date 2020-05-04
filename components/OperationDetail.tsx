import * as React from 'react'

import { Operation } from '../interfaces'

type OperationDetailProps = {
  item: Operation
}

const OperationDetail: React.FunctionComponent<OperationDetailProps> = ({
  item: operation,
}) => (
    <div>
      <h1>Detail for {operation.type}</h1>
      <p>ID: {operation.id}</p>
      <p>Date: {operation.date}</p>
      <p>Type: {operation.type}</p>
      <p>Ticker: {operation.ticker}</p>
      <p>Quantity: {operation.quantity}</p>
      <p>Price: {operation.price.currency.symbol} {operation.price.value}</p>
    </div>
  )

export default OperationDetail
