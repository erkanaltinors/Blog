import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
<section className='uk-container'>
  <div className='uk-child-width-1-3@m' data-uk-grid>
      <div>
        <div className="uk-card uk-card-body uk-card-primary">
          <p>Item 1</p>
          <span data-uk-icon="icon: play"></span>
        </div>
      </div>
  </div>
</section>
  )
}
