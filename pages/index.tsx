import Link from 'next/link'
import LandingLayout from '../components/LandingLayout'

const IndexPage = () => (
  <LandingLayout title="My Portfolio | React + TypeScript + Storybook example">
    <h1>My Portfolio</h1>
    <p>
      <Link href="/account">
        <a>Go to account</a>
      </Link>
    </p>
  </LandingLayout>
)

export default IndexPage
