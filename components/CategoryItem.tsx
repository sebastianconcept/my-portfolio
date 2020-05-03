import * as React from 'react'
import Link from 'next/link'

import { Category } from '../interfaces'

type Props = {
  data: Category
}

const CategoryItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/categories/[id]" as={`/categories/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default CategoryItem
