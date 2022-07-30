import * as Style from './styles'

import { Button } from '../../styles/themes'
import React from 'react'
import { projects } from '../../const'

function PortfolioComponent() {
  return (
    <Style.PortfolioWrapper>
      <Style.PortfolioInner>
        <Style.Title data-aos="flip-left" id="Portfolio">
          Portfolio
        </Style.Title>
        <Style.PortfolioContent>
          {projects.map((project, index) => (
            <Style.PortfolioItem key={`project-${index + 1}`}>
              <Style.PortfolioItemInfor data-aos="zoom-out-right">
                <h3>{project.title}</h3>
                <h4>{project.description}</h4>
                <ul>
                  {project.tags.map((tag, index) => (
                    <li index={`tags-${index}`}>{tag}</li>
                  ))}
                </ul>
                {project.liveLink && (
                  <Button>
                    <a href={project.liveLink}>Live</a>
                  </Button>
                )}
                <Button>
                  <a href={project.ghLink}>Source</a>
                </Button>
              </Style.PortfolioItemInfor>
              <Style.PortfolioItemImg data-aos="zoom-out-left">
                <img src={project.img} alt={project.title} />
                <Style.Overlay></Style.Overlay>
              </Style.PortfolioItemImg>
            </Style.PortfolioItem>
          ))}

          <div className='more-btn'>
          <Button >
            <a href='https://github.com/nguyenquocdung281099?tab=repositories'>Source</a>
          </Button>
          </div>
        </Style.PortfolioContent>
      </Style.PortfolioInner>
    </Style.PortfolioWrapper>
  )
}

export default PortfolioComponent
