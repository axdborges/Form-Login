import { useContext } from 'react';
import { BotaoAddContext } from '../../contexts/addTechContext';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { AxiosError, AxiosResponse } from 'axios'

interface IData {
    status: string
}

const ModalEdita = () => {

    const { setBotaoEdit, idAtual, placeholder } = useContext(BotaoAddContext)
    const token = localStorage.getItem("@token")

    function ativaEdita () {
        setBotaoEdit(false)
    }

    const schema = yup.object().shape({
        status: yup.string().required("Informe a tecnologia")
    });

    const { register, handleSubmit, formState: {errors}, } = useForm<IData>({
        resolver: yupResolver(schema),
    });
    
    const submitEditar = (data: IData) => {

        const headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        // console.log(data)
        // api.defaults.headers.authorization<HeadersDefaults> = `Bearer ${token}`
        api.put(`/users/techs/${idAtual}` , data, headers)
        .then((response: AxiosResponse) => {
        toast.success('Tecnologia Editada')
        ativaEdita()
        console.log(response)
        })
        .catch((err: AxiosError) => {
        // toast.error(`${err.message}`) 
        console.log(err)}) 
    };

    const excluirTech = () => {
        const headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        // api.defaults.headers.authorization = `Bearer ${token}`
        api.delete(`/users/techs/${idAtual}`, headers)
        .then((response: AxiosResponse) => {
        toast.success('Tecnologia Excluída')
        ativaEdita()
        })
        .catch((err: AxiosError) => {
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
                <input type="text" placeholder={placeholder} value={placeholder}/>
                <label htmlFor="">Status</label>
                <select id=""  {...register("status")}>
                    <option value="Iniciante">iniciante</option>
                    <option value="Intermediario">intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <div className="botoes">
                    <button type='submit' className="salvar"> Salvar alterações</button>
                    <button type="button" className="excluir"
                    onClick={() => excluirTech()}>Excluir</button>
                </div>
            </form>
        </aside>
    )
}


export default ModalEdita