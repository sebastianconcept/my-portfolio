import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const CategoriesPage: React.FunctionComponent = () => (
  <Layout title="Categories | My Portfolio">
    <h1>Categories</h1>
    <p>This is the categories page</p>
    <p>
      <Link href="/dashboard">
        <a>Go dashboard</a>
      </Link>
    </p>
  </Layout>
)

export default CategoriesPage
