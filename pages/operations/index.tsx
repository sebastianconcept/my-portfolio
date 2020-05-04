import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import OperationsList from '../../components/OperationsList'
import { operations } from '../../utils/basic-data'

import { Operation } from '../../interfaces'

type Props = {
  items: Operation[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Operations | My Portfolio">
    <h1>Operations</h1>
    <p>
    <OperationsList items={items}></OperationsList>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Operation[] = operations
  return { props: { items } }
}

export default WithStaticProps
