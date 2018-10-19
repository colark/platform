import React from 'react'

export default function Footer(props) {
    const footerIcons = [
    {
      imageUrl: 'https://res.cloudinary.com/colark/image/upload/v1539947869/Colark%20Marketing%20Site/LINKEDIN.png',
      linkUrl: 'https://www.linkedin.com/company/colark/',
      alt: 'Find Colark on LinkedIn'
    },
    {
      imageUrl: 'https://res.cloudinary.com/colark/image/upload/v1539947855/Colark%20Marketing%20Site/Facebook.png',
      linkUrl: 'https://www.facebook.com/colarkHQ/',
      alt: 'Find Colark on Facebook'
    },
    {
      imageUrl: 'https://res.cloudinary.com/colark/image/upload/v1539947832/Colark%20Marketing%20Site/Twitter.png',
      linkUrl: 'https://www.twitter.com/colarkHQ/',
      alt: 'Follow us on Twitter'
    }];

    const footerIconList =
      footerIcons.map((icon, index) => {
          return (<a key={index} href={icon.linkUrl} target={ icon.linkUrl.includes("@") ? "" : "_blank"}>
            <img
            src={icon.imageUrl}
            alt={icon.alt}
            className="footer__icons--icon-image"/>
          </a>);
    });

    return (
      <div className="footer colark-footer">
        <div className="footer__contents">
          <a href="/">
          <img className="footer__logo" src="https://res.cloudinary.com/colark/image/upload/v1539948868/Colark%20Marketing%20Site/ColarkFooter.svg"/>
          </a>
          <div className="footer__icons">
            {footerIconList}
          </div>
        </div>
      </div>
    );
}
