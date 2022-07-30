import * as Style from "./styles"

import React from 'react';

const Footer = () => {
  return (
    <Style.Footer>
      <>
        
      <Style.SocialNetwork>
            <i class="fab fa-github-square"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fas fa-home"></i>
          </Style.SocialNetwork>
        <p>
          &copy; <span>{new Date().getFullYear()}</span> Dung Nguyen Quoc. all rights
          reserved
        </p>
      </>
    </Style.Footer>
  );
};

export default Footer;