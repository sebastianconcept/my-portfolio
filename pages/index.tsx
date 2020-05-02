import Link from 'next/link'
import LandingLayout from '../components/LandingLayout'

const IndexPage = () => (
  <LandingLayout title="My Portfolio | React + TypeScript + Storybook example">
    <h1>My Portfolio</h1>
    <p>
      <Link href="/dashboard">
        <a>Go to dashboard</a>
      </Link>
    </p>
  </LandingLayout>
)

export default IndexPage
