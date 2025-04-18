import './Footer.css'

function Footer () {
  return (
    <footer>
      <ul>
        <li>
          <a href='https://www.facebook.com/creshna.band' target='_blank'>
            <img
              className='svg hover'
              src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632761623/creshna/facebook_qvstfu.svg'
              alt="facebook icon that directs to the band's facebook page"
            />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/creshna_the_band' target='_blank'>
            <img
              className='svg hover'
              src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632761623/creshna/instagram_wqgoti.svg'
              alt="instagram icon that directs to the band's instagram page"
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com/channel/UCa06De2c4N4ei8Af7B8isPQ/featured'
            target='_blank'
          >
            <img
              className='svg hover'
              src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632761623/creshna/youtube_bndcj3.svg'
              alt="facebook icon that directs to the band's facebook page"
            />
          </a>
        </li>
      </ul>
      <p>© 2024 Creshna</p>
      <p>
        Website created by&nbsp;
        <a href='https://www.vasiliszisis.me/' target='_blank'>
          Vasilis Zisis
        </a>
      </p>
    </footer>
  )
}

export default Footer
