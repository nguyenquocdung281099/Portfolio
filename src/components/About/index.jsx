import * as Style from './styles'

import React from 'react'

function AboutComponent() {
  return (
    <Style.AboutWrapper id='about'>
      <Style.AboutInner>
        <Style.Title data-aos="flip-left">About Me</Style.Title>
        <Style.AboutContent>
          <Style.AboutInformation data-aos="fade-right">
            <h3>Get To Know Me!</h3>
            <p>
              My name is Dung Nguyen Quoc. I enjoy coding and the challenge of learning something
              new everyday. I graduated with a good degree from Da Nang University of Science and
              Technology and I have a good certificate from Iviettech programming center. I am
              currently working, and have over 1 year of experience working with HTML, CSS,
              Javascript, typescript, React, a little Veujs, Nextjs, and basic NodeJS. My goal is to
              pursue a career in the field of Web development.
            </p>
            <h4>Come with me, and grow together !!</h4>
          </Style.AboutInformation>
          <Style.AboutEducation data-aos="fade-left">
            <h3>Education</h3>
            <p>2017-2022</p>
            <h4>Da Nang University of Science and Technology</h4>
            <p>2021-2022</p>
            <h4>Iviettech programming center</h4>
          </Style.AboutEducation>
        </Style.AboutContent>
      </Style.AboutInner>
    </Style.AboutWrapper>
  )
}

export default AboutComponent
