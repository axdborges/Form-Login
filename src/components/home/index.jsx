import { HomeSt } from '../../styled/homeSt';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CgPlayListAdd } from 'react-icons/cg';
import { ModalSt } from '../modalSt/style';
import { useState } from 'react'
import ModalCa from '../modalCadastro';
import { set } from 'react-hook-form';
import ModalEdita from '../modalEdit';


function Home () {
    const navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem("@userData"))
    console.log(userData)

    const voltar = () => {
        localStorage.clear()
        navigate('/')
        toast.success('Logout feito com sucesso!')
    }

    const [botao, setBotao ] = useState(false)

    function ativaCadastro () {
        setBotao(true)
    }

    return (
        <HomeSt>
            <header>
                <h3>Kenzie Hub</h3>
                <button onClick={() => voltar()}>Voltar</button>
            </header>
            <section>
                <h4>Olá, {userData.name}</h4>
                <p>{userData.course_module}</p>
            </section>
            <main>
                <div className='btn-techs'>
                   <strong>Tecnologias</strong>
                    <button onClick={() => ativaCadastro()}><CgPlayListAdd/></button>
                </div>
                <div className="lista-techs">
                    <div className="tech">
                        <h6>React JS</h6>
                        <p>Intermediário</p>
                    </div>
                    <div className="tech">
                        <h6>Next JS</h6>
                        <p>Iniciante</p>
                    </div>
                    <div className="tech">
                        <h6>Material UI</h6>
                        <p>Avançado</p>
                    </div>
                    <div className="tech">
                        <h6>Styled-components</h6>
                        <p>Intermediário</p>
                    </div>
                </div>
                {botao && 
                <ModalSt>
                    <ModalCa estadoBotao={setBotao}
                    btn={botao}/>
                </ModalSt> 
                }

                {/* <ModalSt>
                    <ModalEdita/>
                </ModalSt> */}
            </main>
        </HomeSt>
    )
}

export default Home