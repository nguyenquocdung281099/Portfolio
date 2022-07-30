import * as Style from './styles'

import React, { useEffect, useState } from 'react'

import Avatar from '../../asset/images/avtar.png'
import { Button } from '../../styles/themes'

function Banner() {
  return (
    <Style.BannerWrapper>
      <Style.BannerInner>
        <Style.BannerInformation>
          <h1 data-aos="flip-left">I'm A Web Developer</h1>
          <p data-aos="flip-right">I Love Building Beautiful Web Experience</p>
          <Button style={{ marginRight: 30 }}>
            <a href="#about">About Me</a>
          </Button>
          <Button> portfolio</Button>

          <Style.SocialNetwork>
            <a href="https://github.com/nguyenquocdung281099" target={'_blank'}>
              <i class="fab fa-github-square"></i>
            </a>
            <a href="https://www.facebook.com/nguyen.quocdung.5602" target={'_blank'}>
              {' '}
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i class="fas fa-home"></i>
            </a>
          </Style.SocialNetwork>
        </Style.BannerInformation>
        <Style.BannerImage>
          <img src={Avatar} alt="avatar" />
        </Style.BannerImage>
      </Style.BannerInner>
    </Style.BannerWrapper>
  )
}

export default Banner
