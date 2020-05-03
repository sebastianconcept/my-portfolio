import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import CategoriesList from '../../components/CategoriesList'
import { categories } from '../../utils/basic-data'

import { Category } from '../../interfaces'

type Props = {
  items: Category[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Categories | My Portfolio">
    <h1>Categories</h1>
    <CategoriesList items={items}></CategoriesList>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Category[] = categories
  return { props: { items } }
}

export default WithStaticProps
