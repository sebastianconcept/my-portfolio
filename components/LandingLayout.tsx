import * as React from 'react'
import Head from 'next/head'

type Props = {
  title?: string
}

const LandingLayout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>

      </header>
      {children}
      <footer>
        <section id='footer' className={'wow fadeInUp'}>
          <h2>
            <p className='section-title'>
              <span>{new Date().getFullYear()}</span>
            </p>
          </h2>
        </section>
      </footer>
    </div>
  )

export default LandingLayout
