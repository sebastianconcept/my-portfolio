import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const AccountPage: React.FunctionComponent = () => (
  <Layout title="Account | My Portfolio">
    <h1>Account</h1>
    <p>This is the account page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AccountPage
