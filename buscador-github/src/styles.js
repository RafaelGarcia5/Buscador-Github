import styled from 'styled-components'

export const Header = styled.header`
  color: #fff;
  background-color: #1a202c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 5vh;
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #525561;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #525561;
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1a202c;
  margin: auto;
  height: 30rem;
  width: 50rem;
  border-radius: 25px;

  .formulario {
    display: flex;
    flex-direction: row;
    margin: 1.2rem;
  }

  .user {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    .nameUser {
      font-size: 32px;
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 4px solid #4c66dd;
    }
  }

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1a202c;
    margin: 2rem;
    height: 30rem;
    width: 50rem;
    border-radius: 25px;
    overflow: auto;

    .formulario {
      display: flex;
      flex-direction: row;
    }

    .user {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;

      .nameUser {
        font-size: 32px;
      }

      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 4px solid #4c66dd;
      }
    }
  }
`
