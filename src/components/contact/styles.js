import styled from 'styled-components'

export const ContactWrapper = styled.div`
  background-color: ${(props) => props.theme.clrGrey10};
  height: auto;
  scroll-margin-block-start: 150px;

`

export const ContactInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }

  h3 {
    color: ${(props) => props.theme.clrGrey1};
    font-size: 30px;
  }

  p {
    color: ${(props) => props.theme.clrGrey4};
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 450px) {
      width: 15px;
    }
  }

  span {
    color: ${(props) => props.theme.clrGrey4};
  }
  h4 {
    color: ${(props) => props.theme.clrGrey1};
    font-size: 22px;
  }
`

export const ContactInformation = styled.div`
  padding: 1.5rem;
  width: 50%;

  @media (max-width: 1024px) {
    padding-bottom: 0.25rem;
    width: 100%;
  }
`

export const ContactEducation = styled.div`
  width: 50%;
  padding: 1.5rem;

  @media (max-width: 1024px) {
    padding-top: 0.25rem;
    width: 90%;
  }

  p {
    margin: 0;
  }

  form {
    width: 100%;
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

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 0;
`

export const ContactListItem = styled.li`
  display: flex;
  margin-bottom: 2rem;

  svg {
    margin-right: 0.5rem;
    fill: ${(props) => props.theme.clrPrimary1};
  }

  a {
    color: ${(props) => props.theme.clrGrey1};
    overflow-wrap: break-word;
  }

  a:hover {
    color: ${(props) => props.theme.clrPrimary5};
  }

  span,
  a {
    font-size: 18px;
  }
`

export const InputContainer = styled.div`
  position: relative;
  margin: 1rem 0;

  .form-input {
    width: 100%;
    background: transparent;
    caret-color: ${(props) => props.theme.clrGrey1};
    border: 1px solid ${(props) => props.theme.clrGrey1};
    color: ${(props) => props.theme.clrGrey1};
    transition: border 500ms;
    padding: 1.5rem 1rem 0.5rem;
    box-sizing:border-box 
  }

  .form-input:hover,
  .form-input:focus,
  .focused .form-input {
    outline: none;
    border-color: ${(props) => props.theme.clrPrimary5};
  }

  .form-input:focus + label,
  .focused label {
    top: 0rem;
    font-size: 0.75rem;
    background-color: ${(props) => props.theme.clrPrimary5};
    color: ${(props) => props.theme.clrGrey10};
    user-select: auto;
    font-weight: 700;
  }

  textarea {
    height: 300px;
    resize: none;
    font: inherit;
  }
  label {
    display: block;
    position: absolute;
    width: 100%;
    font-size: 1rem;
    top: 15px;
    padding: 0.25rem 1rem;
    color: ${(props) => props.theme.clrGrey1};
    transform-origin: left;
    user-select: none;
    transition: all 500ms;
    margin-bottom: 1rem;
  }

  small {
    color: ${(props) => props.theme.clrGrey1};
  }
`
