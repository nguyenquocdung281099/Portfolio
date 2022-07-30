import styled from 'styled-components'

export const PortfolioWrapper = styled.div`
  background-color: ${(props) => props.theme.clrWhite};
  height: auto;
  scroll-margin-block-start: 150px;

  .more-btn {
    height: 100px;
    margin-top: 3rem;
    width: 100%;
    text-align: center;
    button {
      width: 50%;
    }
  }
`

export const PortfolioInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const PortfolioContent = styled.div`
  padding: 20px;
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

export const PortfolioItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px dotted ${(props) => props.theme.clrGrey1};
  border-radius: 10px;
  padding: 3rem 0;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    box-shadow: 0 0 10px 1px rgb(0 0 0 / 40%);
    margin-bottom: 3rem;
    justify-content: center;
    padding: 0;
    border: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
  }
`

export const PortfolioItemInfor = styled.div`
  width: 50%;
  text-align: start;
  @media (max-width: 1024px) {
    width: 80%;
  }
  ul {
    list-style-type: square;

    @media (max-width: 1024px) {
      display: flex;
      flex-wrap: wrap;
      padding-left: 15px;

      li {
        margin-right: 30px;
      }
    }
  }
  button {
    width: 100%;
    margin: 1rem auto;
  }
`

export const PortfolioItemImg = styled.div`
  position: relative;
  height: 100%;
  width: 45%;
  margin-left: 30px;

  img {
    width: 100%;
    height: 100%;
    filter: brightness(100%) grayscale(0);
    border-radius: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #483f3f61;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`
