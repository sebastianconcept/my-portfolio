import * as React from 'react'
import Link from 'next/link'

import { Operation } from '../interfaces'

type Props = {
  data: Operation
}

const CategoryItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/operations/[id]" as={`/operations/${data.id}`}>
    <a>
      {(new Date(data.date)).toDateString()}: {data.type} {data.ticker} {data.quantity} {data.price.value}
    </a>
  </Link>
)

export default CategoryItem
