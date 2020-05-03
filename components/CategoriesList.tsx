import * as React from 'react'
import CategoryItem from './CategoryItem'
import { Category } from '../interfaces'

type Props = {
  items: Category[]
}

const CategoriesList: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <CategoryItem data={item} />
      </li>
    ))}
  </ul>
)

export default CategoriesList
