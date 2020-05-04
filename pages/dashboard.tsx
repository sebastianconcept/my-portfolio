import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const DashboardPage: React.FunctionComponent = () => (
  <Layout title="Dashboard | My Portfolio">
    <h1>Dashboard</h1>
    <p>This is the dashboard page</p>
    <p>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </p>
  </Layout>
)

export default DashboardPage
