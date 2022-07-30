import styled from 'styled-components'

export const dark = {
  clrPrimary1: '#fff',
  clrPrimary2: '#9da9ac',
  clrPrimary3: '#6b7e83',
  clrPrimary4: '#3a5359',
  clrPrimary5: '#efd871',
  clrPrimary6: '#d7c264',
  clrPrimary7: '#a7974e',
  clrPrimary8: '#786c38',
  clrPrimary9: '#484021',
  clrPrimary10: '#051418',
  clrGrey1: '#fff',
  clrGrey2: '#f9efc5',
  clrGrey3: '#f5e7a9',
  clrGrey4: '#f2df8c',
  clrGrey5: '#f9efc5',
  clrGrey6: '#08242b',
  clrGrey7: '#072026',
  clrGrey8: '#061c22',
  clrGrey9: '#05181d',
  clrGrey10: '#051418',
  clrWhite: '#072026',
}

export const light = {
  clrPrimary1: '#513c06',
  clrPrimary2: '#7a5c10',
  clrPrimary3: '#a27c1a',
  clrPrimary4: '#c8992d',
  clrPrimary5: '#e9b949',
  clrPrimary6: '#f7d06e',
  clrPrimary7: '#f9da8b',
  clrPrimary8: '#f8e3a5',
  clrPrimary9: '#fceec5',
  clrPrimary10: '#fffaeb',
  clrGrey1: '#102a42',
  clrGrey2: '#243a52',
  clrGrey3: '#324d67',
  clrGrey4: '#48647f',
  clrGrey5: '#617d98',
  clrGrey6: '#829ab0',
  clrGrey7: '#9eb2c7',
  clrGrey8: '#bcccdc',
  clrGrey9: '#dae2ec',
  clrGrey10: '#f1f5f8',
  clrWhite: '#fff',
}

export const Button = styled.button`
  text-transform: uppercase;
  background: ${(props) => props.theme.clrPrimary5};
  color: ${(props) => props.theme.clrGrey1};
  padding: 0.5rem 0.75rem;
  letter-spacing: 0.25rem;
  display: inline-block;
  font-weight: 700;
  transition: all 0.2s linear;
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.clrGrey1};
  }

  &:hover {
    background: ${(props) => props.theme.clrPrimary7};
    color: ${(props) => props.theme.clrGrey5};
    transform: scale(1.05);
  }
`
