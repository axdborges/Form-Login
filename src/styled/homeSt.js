import styled from "styled-components";

export  const HomeSt = styled.div`

    height: 100%;
    width: 100%; 

    header{
        max-width: 100%;
        display: flex;
        height: 40px;
        padding: 20px;
        text-align: center;
        align-items: center;
        justify-content: space-between;

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
        margin-top: 10px;
        height: 40px;
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
        justify-content: center;
        

        p {
            color: var(--cinza-4)
        }
    }

    @media screen and (min-width: 700px) {

        section {
           flex-direction: row;
           justify-content: space-between;
           height: 20px;
           margin-top: 10px;
        }

    }

    .btn-techs {
        display: flex;
        justify-content:space-between;
        

        button {
            height: 27px;
            width: 27.485294342041016px;
            border-radius: 4px;
            display: flex; 
            align-items: center;
            justify-content: center;
            background-color: var(--cinza-2);
            
            svg{
                width: 20px;
                height: 20px;
                color: var(--cinza-5);
            }
        }
    }

    .lista-techs{
        background-color: var(--cinza-3);
        display: flex;
        flex-direction: column;
        gap: 18px;
        border-radius: 5px;
        padding: 10px;
    }

    .tech {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        max-width: 100%;
        background-color: var(--cinza-1);
        border-radius: 4px;
        height: 30px;
        align-items: center;

        h6 {
            font-size: 14px;
        }

        p {
            font-size: 13px;
        }
    }

`;  