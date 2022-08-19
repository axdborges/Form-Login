import styled from "styled-components";

export const ModalSt = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: 00000020;
  backdrop-filter: blur(7px);
  z-index: 6000;

  .modal-cadastro, .modal-edita {
        height: 274.3414611816406px;
        width: 296px;
        left: 12px;
        top: 148.8292694091797px;
        border-radius: 3.208672046661377px;
        padding: 55px, 18px, 26px, 18px;
        background-color: var(--cinza-2);

        header {
            background-color: var(--cinza-3);
            height: 30.108402252197266px;
            width: 93%;
            left: 12px;
            top: 148.8292694091797px;
            border-radius: 5px 5px 0px 0px;
            padding: 10px;
            justify-content: space-between;
            align-items: center;
            border-bottom: none;
            margin-bottom: 10px;

            
            p {
                font-weight: bold;
                color: var(--cinza-5);
                font-size: 14px;
            }

            button {
                background-color:  var(--cinza-3);
                font-size: 16px;
                width: 20px;
                cursor:pointer;
            }
        }

        border-radius: 0px 0px 5px 5px;

        display: flex;
        flex-direction: column;
        align-items: center;

        form {
            padding: 55px, 18px, 26px, 18px;
            height: 80%;
            display: flex; 
            flex-direction: column;
            width: 80%;
            gap: 10px;

            label {
                font-size: 11px;
                color: var(--cinza-4)    
            }

            input {
                height: 28.504066467285156px;
                max-width: 100%;
                left: 0px;
                top: 23.093292236328125px;
                border-radius: 3.208672046661377px;
                padding: 5px;
                background-color:  var(--cinza-3);
                color: var(--cinza-5);

            }

            select {
                height: 38.504066467285156px;
                width: 100%;
                left: 0px;
                top: 23.093292236328125px;
                border-radius: 3.208672046661377px;
                padding: 0px, 13px, 0px, 13px;
                background-color:  var(--cinza-3);
                color: var(--cinza-5);
            }

            button {
                height: 38.504066467285156px;
                max-width: 259.9024353027344px;
                left: 17.647705078125px;
                top: 210.1680145263672px;
                border-radius: 4.060661792755127px;
                padding: 0px, 22px, 0px, 22px;
                background-color: var(--rosa-1);
                color: var(--cinza-5);
                margin-top: 10px;
            }
        }

        .botoes {
            display: flex;
            width: 100%;
            justify-content: space-between;

            .salvar {
                height: 35.37398147583008px;
                width: 143.0894317626953px;
                left: 0px;
                top: 0px;
                border-radius: 4px;
                padding: 0px, 22px, 0px, 22px;
                background-color: var(--roxo)
            }

            .excluir {
                height: 35.37398147583008px;
                width: 67.34687805175781px;
                left: 180.677490234375px;
                top: 0px;
                border-radius: 4px;
                padding: 0px, 22px, 0px, 22px;
                background-color: var(--cinza-4);   
            }
        }

    }
`;