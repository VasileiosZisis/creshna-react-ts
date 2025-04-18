import './Homepage.css'
import ImageModal from './components/ImageModal'
import Starfield from 'react-starfield'

function Homepage () {
  const imageData: string[] = [
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763269/creshna/alive/17240085_ade6i0.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763269/creshna/alive/17240575_asvsfl.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763271/creshna/alive/17424645_yvcjpq.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763269/creshna/alive/17425034_quginv.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763270/creshna/alive/17434866_lonjam.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763411/creshna/kleidi%20tou%20fa/12967320_ca5e0s.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763412/creshna/kleidi%20tou%20fa/12971032_a78vsp.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763413/creshna/kleidi%20tou%20fa/12973288_atkm3v.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763412/creshna/kleidi%20tou%20fa/12973298_xcizi3.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763414/creshna/kleidi%20tou%20fa/12973526_bnturt.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763410/creshna/kleidi%20tou%20fa/12976718_nckeiq.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763414/creshna/kleidi%20tou%20fa/12983872_dsf78q.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763414/creshna/kleidi%20tou%20fa/13041141_d5bmic.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763413/creshna/kleidi%20tou%20fa/13041237_azifj0.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763414/creshna/kleidi%20tou%20fa/13041268_wjkv8b.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763636/creshna/ekko/10286999_qgvjeo.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763636/creshna/ekko/10623572_oofubt.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763634/creshna/ekko/12265891_iqiyqw.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763635/creshna/ekko/12593724_eljpht.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763635/creshna/ekko/12633683_famxxb.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763636/creshna/ekko/12823369_axmhzm.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763636/creshna/ekko/12829355_ve9jed.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763637/creshna/ekko/12841211_grgldp.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763637/creshna/ekko/1614122_itx8mw.webp',
    'https://res.cloudinary.com/dmdbza74n/image/upload/v1632763634/creshna/ekko/701943_mailpm.webp'
  ]

  return (
    <>
      <main>
        <section className='logo-section'>
          <div className='logo'>
            <img
              src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632762244/creshna/logo_havzrc.png'
              alt='logo of the band'
            />
          </div>
          <div className='title'>
            <h1>There can be no life in the void</h1>
          </div>
        </section>
        <section className='band-section'>
          <div className='title-container'>
            <h2>band</h2>
          </div>
          <div className='band-image-container'>
            <div className='band-image-left'>
              <img
                src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632762274/creshna/band-image-1_vtrlr7.webp'
                alt='Black and white photo of the band members'
              />
            </div>
            <div className='band-image-right'>
              <img
                src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632762275/creshna/band-image-2_iv2ua5.webp'
                alt='Photo of the band members in front of a graffiti wall'
              />
            </div>
          </div>
          <div className='imagemodal-container'>
            <ImageModal imageData={imageData} />
          </div>
        </section>
        <section className='albums-section'>
          <div>
            <h2>albums</h2>
          </div>
          <div className='band-image-container'>
            <div className='band-image-left'>
              <a
                href='https://creshna.bandcamp.com/album/there-can-be-no-life-in-the-void'
                target='_blank'
              >
                <img
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632762330/creshna/Album1_hmyja9.webp'
                  alt='Cover image of the album'
                />
              </a>
            </div>
            <div className='band-image-right'>
              <a
                href='https://creshna.bandcamp.com/album/the-fallout'
                target='_blank'
              >
                <img
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632762336/creshna/Album2_pmhlay.webp'
                  alt='Cover image of the album'
                />
              </a>
            </div>
          </div>
        </section>
        <section className='merch-section'>
          <div>
            <h2>merch</h2>
          </div>
          <div className='merch-container'>
            <div>
              <a
                href='https://creshna.bandcamp.com/merch/lake-creshna'
                target='_blank'
              >
                <img
                  className='hover'
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632762511/creshna/T-Shirt-1_o7up2y.webp'
                  alt='Black T-Shirt zoomed'
                />
              </a>
            </div>
            <div>
              <a
                href='https://creshna.bandcamp.com/merch/lake-creshna'
                target='_blank'
              >
                <img
                  className='hover'
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632762513/creshna/T-Shirt-2_wjf1oi.webp'
                  alt='Black and white T-shirt side by side comparison'
                />
              </a>
            </div>
            <div>
              <a
                href='https://creshna.bandcamp.com/merch/lake-creshna'
                target='_blank'
              >
                <img
                  className='hover'
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632762512/creshna/T-Shirt-3_z9vlmp.webp'
                  alt='Black T-Shirt'
                />
              </a>
            </div>
            <div>
              <a
                href='https://creshna.bandcamp.com/merch/lake-creshna'
                target='_blank'
              >
                <img
                  className='hover'
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632762511/creshna/T-Shirt-4_kfchkm.webp'
                  alt='White T-Shirt'
                />
              </a>
            </div>
            <div>
              <a
                href='https://creshna.bandcamp.com/album/the-fallout'
                target='_blank'
              >
                <img
                  className='hover'
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632763160/creshna/CD-1_witssg.webp'
                  alt='CD case closed'
                />
              </a>
            </div>
            <div>
              <a
                href='https://creshna.bandcamp.com/album/the-fallout'
                target='_blank'
              >
                <img
                  className='hover'
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632763159/creshna/CD-2_o2tzhq.webp'
                  alt='CD case opened'
                />
              </a>
            </div>
            <div>
              <a
                href='https://creshna.bandcamp.com/album/the-fallout'
                target='_blank'
              >
                <img
                  className='hover'
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632763159/creshna/CD-3_hs5mqm.webp'
                  alt='CD case opened inside'
                />
              </a>
            </div>
            <div>
              <a
                href='https://creshna.bandcamp.com/album/there-can-be-no-life-in-the-void'
                target='_blank'
              >
                <img
                  className='hover'
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632763208/creshna/CRESHNA_VINYL_BACK_SIDE_mlqrel.webp'
                  alt='Vinyl back side'
                />
              </a>
            </div>
            <div>
              <a
                href='https://creshna.bandcamp.com/album/there-can-be-no-life-in-the-void'
                target='_blank'
              >
                <img
                  className='hover'
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632763208/creshna/CRESHNA_VINYL_FRONT_pk1jov.webp'
                  alt='Vinyl front side'
                />
              </a>
            </div>
            <div>
              <a
                href='https://creshna.bandcamp.com/album/there-can-be-no-life-in-the-void'
                target='_blank'
              >
                <img
                  className='hover'
                  src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632763208/creshna/CRESHNA_VINYL_PACKAGE_ptlwem.webp'
                  alt='Vinyl package'
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Starfield
        starCount={500}
        starColor={[255, 255, 255]}
        speedFactor={0.02}
      />
    </>
  )
}

export default Homepage
