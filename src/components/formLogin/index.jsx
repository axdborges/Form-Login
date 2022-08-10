import { FormSt } from '../../styled/formSt';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import api from '../../services/api';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { LoginContext } from '../../contexts/loginContext/index'

function FormLogin () {

    const { setUser, setUserId } = useContext(LoginContext)
    
    const navigate = useNavigate()

    const schema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
    });

    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(schema),
    });

    const submitFunction = (data) => {
        api.post('/sessions' , data)
        .then(response => {
        localStorage.clear();
        localStorage.setItem("@token", response.data.token) 
        setUserId(response.data.user.id)
        setUser(response.data.user)
        localStorage.setItem("@userData", JSON.stringify(response.data.user))
        localStorage.setItem("@userId", response.data.user.id)
        
        toast.success('Login feito com sucesso!')
        navigate(`/dashboard`)
        
        })
        .catch(err => {
            toast.error('Email ou Senha incorretos')
            localStorage.clear()
            console.log(err)
        })
        
    }

    const cadastro = () => {
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