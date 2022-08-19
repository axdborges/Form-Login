import styled from "styled-components";

export const FormSt = styled.div`

    max-height: 100%;
    width: 90%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    
    h2 {
        height: 14.00307559967041px;
        width: 101px;
        left: 109px;
        top: 81px;
        border-radius: 0px;
        font-size: 18px;
        text-align: center;
        color: var(--rosa-2);
    }

    form {
        background-color: var(--cinza-2);
        height: 402.6883544921875px;
        width: 296px;
        left: 12px;
        top: 114.3956298828125px;
        border-radius: 3.208672046661377px;
        padding: 34px, 18px, 34px, 18px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .form-cadastro {
        height: 437px;
    }

    @media screen and (min-width: 700px) {
        .form-cadastro {
            height: 500px;
        }
    }

    h4{
        margin-top: 10px;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 9px;
    }

    label{
        font-size: 12px;
        color: var(--cinza-4);
        display: flex;
        justify-content: space-between;
    }

    input{
        height: 38.504066467285156px;
        width: 264.6582946777344px;
        left: 0px;
        top: 23.09326171875px;
        border-radius: 3.208672046661377px;
        padding: 0px, 13px, 0px, 13px;
        border: 1px solid var(--cinza-5);
        background-color: var(--cinza-3);
        color: var(--cinza-5);
    }

    input::placeholder  {
        padding-left: 7px;
        color: var(--cinza-5)
    }

    button {
        height: 38.504066467285156px;
        width: 259.9024353027344px;
        left: 18.04876708984375px;
        top: 232.6287841796875px;
        border-radius: 4.060661792755127px;
        padding: 0px, 22px, 0px, 22px;
    }

    .submit {
        background-color: var(--rosa-2);
        color: var(--cinza-5);
    }

    div > p {
        text-align: center;
        font-size: 13px;
        color: var(--cinza-4)
    }

    .cadastro {
        background-color: var(--cinza-4);
        color: var(--cinza-5);
    }

    .top {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }

    .top > h2 {
        text-align: center;
        font-size: 16px;
        align-self: center;
    }

    .top > button {
        height: 31.95315170288086px;
        width: 79.54158020019531px;
        left: 228.45849609375px;
        top: 49.4627685546875px;
        border-radius: 4px;
        padding: 0px, 16px, 0px, 16px;
        background-color: var(--cinza-2);
        color: var(--cinza-5);
        font-size: 12px;
    }

    form > p {
        text-align: center;
        font-size: 13px;
        color: var(--cinza-4)
    }

    .cadastrar {
        background-color: var(--roxo);
        color: var(--cinza-5);
        height: 29.504066467285156px;
        width: 232.90243530273438px;
        margin-bottom: 3px;
        margin-top: 3px;
    }

    .input-cadastro {
        gap: 2px;
    }

    select {
        height: 29.504066467285156px;
        width: 232.90243530273438px;
        border-radius: 3.208672046661377px;
        padding: 0px, 13px, 0px, 13px;
        border: 1px solid var(--cinza-5);
        background-color: var(--cinza-3);
        color: var(--cinza-5);
    }

    .input-cadastro > input {
        height: 29.504066467285156px;
        width: 232.90243530273438px;

    }

    span {
        color: var(--vermelho);
    }

    a {
        color: var(--cinza-5);
        text-decoration: none;
    }

    .senha-span{
        font-size: 11px;
        max-width: 230px;
    }

`;