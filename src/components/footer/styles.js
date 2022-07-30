import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100% ;
  padding: 2rem 0;
  background: #1d251c;
  display: grid;
  place-items: center;

  @media screen and (min-width: 320px) {
    p {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 1rem;
    text-transform: capitalize;
    text-align: center;
    color: #fff;
  }
`
export const SocialNetwork = styled.h3`
  margin: 2rem 0;

  i {
    font-size: 35px;
    cursor: pointer;
    margin: 15px;
    color: ${(props) => props.theme.clrGrey1};
  }
`
