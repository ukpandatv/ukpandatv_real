import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWeixin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div className="d-flex justify-content-around w-100">
      <a
        href="https://www.wechat.com/" className="wechat social">
        <FontAwesomeIcon icon={faWeixin} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.whatsapp.com/" className="whatsapp social">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

    </div>
  )
}