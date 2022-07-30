import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background-color: ${(props) => props.theme.clrPrimary10};
`

export const BannerInner = styled.div`
  display: flex;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.5rem;
  }
`

export const BannerInformation = styled.div`
  flex: 1;
  text-align: start;
  margin-top: 4rem;
  margin: 0 auto;

  h1 {
    line-height: 1;
    font-weight: 900;
    font-size: 5rem;
    color: ${(props) => props.theme.clrGrey1};
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    color: ${(props) => props.theme.clrGrey4};
    font-size: 25px;
  }

  @media (max-width: 1024px) {
    margin-top: 0;
    text-align: center;
  }
`

export const BannerImage = styled.div`
  flex: 1;
  img {
    border: 5px solid ${(props) => props.theme.clrPrimary3};
  }

  &:hover {
    transform: scale(1.2);
    transition: all 0.25s;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    img {
      width: 100%;
    }
  }
`

export const SocialNetwork = styled.h3`
  margin: 2rem 0;

  i {
    font-size: 35px;
    cursor: pointer;
    margin: 15px;
    color: ${(props) => props.theme.clrGrey1};

    &:hover{
      transform: scale(1.1);
      transition: all 1s;
    }
  }

`
