import styled from 'styled-components'



const DivCard = styled.div `
   display: flex;
   align-content: center;
   align-items: center;
   flex-direction: column;
   border: solid 1px;
   border-radius: 20px;
   margin: 15px;
   padding: 25px;
   background-color: grey;
   width: 25em;
   height: 30em;
`
const DivCards = styled.div`
   display: block;
`
// 
//    flex-direction: row;
//    max-width: 50%;

export {DivCard, DivCards}