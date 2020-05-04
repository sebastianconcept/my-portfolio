import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const AssetsPage: React.FunctionComponent = () => (
  <Layout title="Assets | My Portfolio">
    <h1>Assets</h1>
    <p>This is the assets page</p>
    <p>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </p>
  </Layout>
)

export default AssetsPage
