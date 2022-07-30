import styled, { keyframes } from 'styled-components'

export const SkillWrapper = styled.div`
  background-color: ${(props) => props.theme.clrGrey10};
  height: auto;
  scroll-margin-block-start: 150px;

`

export const SkillInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const SkillContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 4rem;
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const SkillItem = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  svg {
    width: 50px;
    height: 50px;

    path {
      fill: ${(props) => props.theme.clrPrimary1};
    }
  }

  @media (max-width: 1024px) {
    width: 25%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  p {
    color: ${(props) => props.theme.clrGrey4};
    font-size: 25px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 400px) {
      width: 15px;
    }
  }

  &:hover {
    animation: ${rotate} 3s;
    cursor: pointer;
    opacity: 0.8;
  }
`
