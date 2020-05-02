import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const OperationsPage: React.FunctionComponent = () => (
  <Layout title="Operations | My Portfolio">
    <h1>Operations</h1>
    <p>This is the operations page</p>
    <p>
      <Link href="/dashboard">
        <a>Go dashboard</a>
      </Link>
    </p>
  </Layout>
)

export default OperationsPage
