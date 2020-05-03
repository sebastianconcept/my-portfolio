import * as React from 'react'

import { Category } from '../interfaces'

type CategoryDetailProps = {
  item: Category
}

const CategoryDetail: React.FunctionComponent<CategoryDetailProps> = ({
  item: category,
}) => (
    <div>
      <h1>Detail for {category.name}</h1>
      <p>ID: {category.id}</p>
    </div>
  )

export default CategoryDetail
