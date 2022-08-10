import { useContext } from 'react';
import { BotaoAddContext } from '../../contexts/addTechContext';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import api from '../../services/api';



const ModalEdita = () => {

    const { botaoEdit, setBotaoEdit, idAtual } = useContext(BotaoAddContext)
    const token = localStorage.getItem("@token")

    function ativaEdita () {
        setBotaoEdit(false)
    }

    const schema = yup.object().shape({
        status: yup.string().required("Informe a tecnologia")
    });

    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(schema),
    });
    
    const submitEditar = (data) => {
        console.log(data)
        api.defaults.headers.authorization = `Bearer ${token}`
        api.put(`/users/techs/${idAtual}` , data)
        .then(response => {
        toast.success('Tecnologia Editada')
        ativaEdita()
        })
        .catch(err => {
        // toast.error(`${err.message}`) 
        console.log(err)}) 
    };

    const excluirTech = () => {
        api.defaults.headers.authorization = `Bearer ${token}`
        api.delete(`/users/techs/${idAtual}`)
        .then(response => {
        toast.success('Tecnologia Excluída')
        ativaEdita()
        })
        .catch(err => {
        // toast.error(`${err.message}`) 
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

    return (
        <aside className="modal-edita">
            <header>
                <p>Tecnologia detalhes</p>
                <button onClick={() => ativaEdita()}>X</button>
            </header>
            <form onSubmit={handleSubmit(submitEditar)}> 
                <div className="organiza" style={estilo}>
                    <label htmlFor="">Nome do projeto</label>
                    <span style={span}>{errors.status?.message}</span>
                </div>
                <input type="text" />
                <label htmlFor="">Status</label>
                <select name="" id=""  {...register("status")}>
                    <option value="Iniciante">iniciante</option>
                    <option value="Intermediario">intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <div className="botoes">
                    <button type='submit' className="salvar"> Salvar alterações</button>
                    <button type="click" className="excluir"
                    onClick={() => excluirTech()}>Excluir</button>
                </div>
            </form>
        </aside>
    )
}


export default ModalEdita