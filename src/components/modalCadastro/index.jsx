import { useContext } from 'react';
import { BotaoAddContext } from "../../contexts/addTechContext"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

const ModalCa = () => {

    const {setBotaoAdd} = useContext(BotaoAddContext)
    const token = localStorage.getItem("@token")

    const schema = yup.object().shape({
        title: yup.string().required("Insira uma Tecnologia")
    });

    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(schema),
    });

    const submitFunction = (data) => {
        api.defaults.headers.authorization = `Bearer ${token}`
        api.post('/users/techs' , data)
        .then(response => {
        toast.success('Tecnologia cadastrada')
        console.log(response)
        ativaCadastro()
        })
        .catch(err => {
        toast.error(`${err.message}`) 
        console.log(err)})
        
    };

    const estilo = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    const span = {
        color: 'red',
        fontSize: '13px'
    }

    function ativaCadastro () {
        setBotaoAdd(false)
    };
    
    return (
        <aside className="modal-cadastro">
            <header>
                <p>Cadastrar Tecnologia</p>
                <button onClick={() => ativaCadastro()}>X</button>
            </header>
            <form  onSubmit={handleSubmit(submitFunction)}>
                <div className="organiza" style={estilo}>
                    <label htmlFor="">Nome</label> 
                    <span style={span}>{errors.title?.message}</span>
                </div> 
                <input type="text" {...register("title")}/>
                <label htmlFor="">Selecionar status</label>
                <select name="" id="" {...register("status")}>
                    <option value="iniciante">iniciante</option>
                    <option value="intermediario">intermediário</option>
                    <option value="avançado">Avançado</option>
                </select>
                <button type='submit'> Cadastrar tecnologia</button>
            </form>
        </aside>
    )
}


export default ModalCa