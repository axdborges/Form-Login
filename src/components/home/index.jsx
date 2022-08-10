import { HomeSt } from '../../styled/homeSt';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CgPlayListAdd } from 'react-icons/cg';
import { BsTrash } from 'react-icons/bs';
import { ModalSt } from '../modalSt/style';
import { useState, useEffect } from 'react'
import ModalCa from '../modalCadastro';
import { set } from 'react-hook-form';
import ModalEdita from '../modalEdit';
import { useContext } from 'react';
import { LoginContext } from '../../contexts/loginContext';
import { BotaoAddContext } from '../../contexts/addTechContext';
import api from '../../services/api';

function Home () {
    const userData = JSON.parse(localStorage.getItem("@userData"))

    const { user , setUser, setLoading, loading } = useContext(LoginContext)
    const { botaoAdd, setBotaoAdd, botaoEdit, setBotaoEdit, idAtual, setId } = useContext(BotaoAddContext)
    const [techs, setTechs] = useState([])
    
    useEffect(() => {

       const idUser = localStorage.getItem("@userId")
       

       function confere () {
        api.get(`/users/${idUser}`).then(res => {
            setTechs(res.data.techs)
            setUser(res.data)
            setLoading(false)
        }).catch(err => {console.log(err)})
       }
       return confere()
    }, [techs])

    const carregar = () => {
        setLoading(false)
    }

    const voltar = () => {
        localStorage.clear()
        setUser(null)
        toast.success('Logout feito com sucesso!')
    }

    function ativaCadastro () {
        setBotaoAdd(true)
    }

    function ativaEdita (id) {
        setBotaoEdit(true)
        setId(id)
    }

    if(loading) return <div>Carregando...</div>

    if(user) {
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
                        {
                            techs.map((item,index) => {
                                return (
                                    <div className="tech" key={index} id={item.id}
                                    onClick={() => ativaEdita(item.id)}>
                                        <h6>{item.title}</h6>
                                        <div className="botao">
                                            <p>{item.status}</p>
                                            <button><BsTrash/></button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {botaoAdd && 
                    <ModalSt>
                        <ModalCa/>
                    </ModalSt> 
                    }
                    {botaoEdit &&
                    <ModalSt>
                        <ModalEdita/>
                    </ModalSt>
                    }
                </main>
            </HomeSt>
        )
    } else { return (
        <>        
            {carregar()}
            <Navigate to='/login' replace/>
        </>
    )}
}

export default Home