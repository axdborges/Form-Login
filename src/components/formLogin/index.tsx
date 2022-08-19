import { FormSt } from '../../styled/formSt';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import api from '../../services/api';
import { AxiosError, AxiosResponse } from 'axios'
// import { useState } from 'react';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { LoginContext } from '../../contexts/loginContext/index'
import { BotaoAddContext } from '../../contexts/addTechContext';

interface IData {
    email:    string
    password: string
}


function FormLogin () {

    const { setUser, setUserId } = useContext(LoginContext)
    const { setBotaoCadastro } = useContext(BotaoAddContext)
    
    const navigate = useNavigate()

    const schema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
    });

    const { register, handleSubmit, formState: {errors}, } = useForm<IData>({
        resolver: yupResolver(schema),
    });

    const submitFunction = (data: IData) => {
        api.post('/sessions' , data)
        .then((response: AxiosResponse) => {
        localStorage.clear();
        localStorage.setItem("@token", response.data.token) 
        setUserId(response.data.user.id)
        setUser(response.data.user)
        localStorage.setItem("@userData", JSON.stringify(response.data.user))
        localStorage.setItem("@userId", response.data.user.id)
        
        toast.success('Login feito com sucesso!')
        navigate(`/dashboard`)
        
        })
        .catch((err: AxiosError) => {
            toast.error('Email ou Senha incorretos')
            localStorage.clear()
            console.log(err)
        })
        
    }

    const cadastro = () => {
        setBotaoCadastro(true)
        navigate('/cadastro')
    }
    
    return ( 
        <FormSt>
            <h2>Kenzie Hub</h2>
            <form action="" onSubmit={handleSubmit(submitFunction)}> 
            <h4>Login</h4>
            <div>
                <label htmlFor="">Email <span>{errors.email?.message}</span></label>
                <input type="email" placeholder='email@email.com' {...register("email")}/>
            </div>
            <div>
                <label htmlFor="">Senha <span>{errors.password?.message}</span></label>
                <input type="password" placeholder='senha' {...register("password")}/>
            </div>
            <button className='submit' type='submit'>Entrar</button>
            <div>
                <p>Ainda não possui conta?</p>

                <button className='cadastro' type='button'
                onClick={() => cadastro()}>Cadastre-se</button>
            </div>
            </form>
        </FormSt>
    )
}

export default FormLogin