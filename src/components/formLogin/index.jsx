import { FormSt } from '../../styled/formSt'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import api from '../../services/api';
import { useState } from 'react';

function FormLogin () {

    const [userId, setUserId] = useState("")
    
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
           window.localStorage.clear();
           window.localStorage.setItem("@token", response.data.token) 
           setUserId(response.data.user.id)
           localStorage.setItem("@userData", JSON.stringify(response.data.user))
           window.localStorage.setItem("@userId", response.data.user.id)
           navigate(`/dashboard/:${userId}`)
        })
        .catch(err => console.log(err))

        
    };
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
                <button className='cadastro' type='button'>
                    <Link replace to='/cadastro'>
                        Cadastre-se
                    </Link>
                    </button>
            </div>
            </form>
        </FormSt>
    )
}

export default FormLogin