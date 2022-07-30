import styled from 'styled-components'

export const AboutWrapper = styled.div`
  background-color: ${(props) => props.theme.clrWhite};
  height: auto;

  scroll-margin-block-start: 150px;
`

export const AboutInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const AboutContent = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h3 {
    color: ${(props) => props.theme.clrGrey1};
    font-size: 30px;
  }

  p {
    color: ${(props) => props.theme.clrGrey4};
    font-size: 20px;
  }
  h4 {
    color: ${(props) => props.theme.clrGrey1};
    font-size: 22px;
  }
`

export const AboutInformation = styled.div`
  flex: 1;
  padding: 1.5rem;
  @media (max-width: 768px) {
    padding-bottom: 0.25rem;
  }
`

export const AboutEducation = styled.div`
  flex: 1;
  padding: 1.5rem;
  @media (max-width: 768px) {
    padding-top: 0.25rem;
  }
  p {
    margin: 0;
  }
`

export const Title = styled.h2`
  position: relative;
  text-align: center;
  color: ${(props) => props.theme.clrPrimary5};

  &::before {
    margin: 0 auto;

    content: '';
    top: 100%;
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: ${(props) => props.theme.clrPrimary5};
  }
`
