
export function Footer() {
  const data = [
    {
      icon: <i class='ri-mail-line'></i>,
      text: 'info@plusultra.ba',
      link: 'mailto:info@plusultra.ba',
    },
    {
      icon: <i class='ri-map-pin-line'></i>,
      text: 'Reisa Fehima Spahe 96, 71000 Sarajevo',
      link: 'https://www.google.com/search?q=Reisa+Fehima+Spahe+96%2C+71000+Sarajevo&oq=Reisa+Fehima+Spahe+96%2C+71000+Sarajevo&aqs=chrome..69i57.152j0j1&sourceid=chrome&ie=UTF-8',
    },
    {
      icon: <i class='ri-phone-line'></i>,
      text: '+387 62 907-022',
      link: 'tel:+38762907022',
    },
  ];

  const socialMedias = [
    {
      icon: <i class='ri-facebook-circle-fill'></i>,
      url: 'https://www.facebook.com/PlusUltraYouth/',
    },
    {
      icon: <i class='ri-instagram-fill'></i>,
      url: 'https://www.instagram.com/plusultrayouth/',
    },
    {
      icon: <i class='ri-linkedin-box-fill'></i>,
      url: 'https://www.linkedin.com/company/plusultrayouth/?originalSubdomain=ba',
    },
    {
      icon: <i class='ri-youtube-fill'></i>,
      url: 'https://www.youtube.com/channel/UCTdTYI_K02uV__r73Jx-f_g',
    },
  ];

  return (
    <footer>
      <div className='contact_info'>
        <div className='contact_info__info'>
          <h3 className='footer__title'>Contact info</h3>
          <div className='contact_info__content'>
            {data.map(({ icon, text, link }, i) => (
              <div className='contact_info__link' key={i}>
                {icon}
                <a href={link}>{text}</a>
              </div>
            ))}
          </div>
        </div>
        <div className='contact_info__social_media'>
          {socialMedias.map(({ url, icon }, i) => (
            <a href={url} key={i}>
              {icon}
            </a>
          ))}
        </div>
        <p className='copyright'>Copyright © 2022 | slaven.design</p>
      </div>
      <form className='contact_form'>
        <h3 className='footer__title'>Send us a message</h3>
        <input type='email' name='email' placeholder='Email' />
        <textarea
          name='email'
          id='email'
          rows='10'
          placeholder='Message'
        ></textarea>
      </form>
    </footer>
  );
}
