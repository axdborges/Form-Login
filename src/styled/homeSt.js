import styled from "styled-components";

export  const HomeSt = styled.div`

    height: 100%;
    width: 100%; 

    header{
        width: 100%;
        display: flex;
        height: 60px;
        text-align: center;
        align-items: center;
        justify-content: space-around;

        h3{
            color: var(--rosa-2);
            
        }

        button {
            height: 32px;
            width: 55.485294342041016px;
            left: 253.8134765625px;
            top: 17px;
            border-radius: 4px;
            padding: 0px, 16px, 0px, 16px;
            background-color: var(--cinza-2);
            color: var(--cinza-5);
        }

        border-bottom: solid 3px var(--cinza-2)
    }

    a {
        
        text-decoration: none;
    }

    section {
        margin-top: 20px;
        height: 50px;
        max-width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        p {
            color: var(--cinza-4)
        }

        border-bottom: solid 3px var(--cinza-2)
    }

    main {
        max-width: 100%;
        padding: 20px;
        display:flex;
        flex-direction: column;
        gap: 15px;

        p {
            color: var(--cinza-4)
        }
    }

    @media screen and (min-width: 700px) {

        section {
           flex-direction: row;
           justify-content: space-around;
           height: 20px;
           margin-top: 10px;
        }

    }

`;  