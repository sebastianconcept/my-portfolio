import * as React from 'react'
import OperationItem from './OperationItem'
import { Operation } from '../interfaces'

type Props = {
  items: Operation[]
}

const OperationsList: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <OperationItem data={item} />
      </li>
    ))}
  </ul>
)

export default OperationsList
