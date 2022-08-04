import { FormSt } from '../../styled/formSt'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../services/api'


function FormCadastro () {

    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome Obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
        'Deve ter 8 letras, uma maiúscula, uma minúscula,um número e um caracter especial'),
        passwordConfirm: yup.string().oneOf([yup.ref("password")], "Senhas não conferem")
        .required("Confirmação obrigatória!"),
        bio: yup.string().required("Bio obrigatória"),
        contact: yup.string().required("Contato obrigatório"),
        course_module: yup.string().required("Módulo obrigatório"),
    });

    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(formSchema),
    });
    
    const submitFunction = (data) => {
        const cadastro = {
            email: data.email,
            password: data.password,
            name: data.name,
            bio: data.bio,
            contact: data.contact,
            course_module: data.course_module
        }
        api.post('/users', cadastro).then(response => {
            console.log(response)
            navigate(`/`)
        })
        .catch(err => console.log(err))
        
    };    

    return ( 
        <FormSt>
            <div className="top">
                <h2>Kenzie Hub</h2>
                <button>
                    <Link to='/'>
                        Voltar
                    </Link>
                </button>
            </div>
            <form action="" className='form-cadastro' onSubmit={handleSubmit(submitFunction)}> 
                <h4>Crie sua Conta</h4>
                <p>Rápido e grátis, vamos nessa</p>
                <div className='input-cadastro'>
                    <label htmlFor="">Nome     <span>{errors.name?.message}</span>  </label>
                    <input type="text" placeholder='Digite aqui seu nome' {...register("name")}/>
                </div>
                <div className='input-cadastro'>
                    <label htmlFor="">Email    <span>{errors.email?.message}</span></label>
                    <input type="email" placeholder='Digite aqui seu Email' {...register("email")}/>
                </div>
                <div className='input-cadastro'>
                    <label htmlFor="">Senha    </label>
                    <input type="password" placeholder='Crie sua senha' {...register("password")}/>
                    <span className='senha-span'>{errors.password?.message}</span>
                </div>
                <div className='input-cadastro'>
                    <label htmlFor="">Confirmar Senha <span>{errors.passwordConfirm?.message}</span></label>
                    <input type="password" placeholder='Repita sua senha'{...register("passwordConfirm")}/>
                </div>
                <div className='input-cadastro'>
                    <label htmlFor="">Bio      <span>{errors.bio?.message}</span></label>
                    <input type="text" placeholder='Fale sobre você' {...register("bio")}/>
                </div>
                <div className='input-cadastro'>
                    <label htmlFor="">Contato  <span>{errors.contact?.message} </span></label>
                    <input type="text" placeholder='Opções de contato' {...register("contact")}/>
                </div>
                <div className='input-cadastro'>
                    <label htmlFor="">Selecionar Módulo <span>{errors.course_module?.message} </span></label>
                    <select name="modulos" id="" {...register("course_module")}>
                        <option value="primeiro modulo">Primeiro módulo</option>
                        <option value="segundo modulo">Segundo módulo</option>
                        <option value="terceiro modulo">Terceiro módulo</option>
                    </select>
                </div>
                <button className='cadastrar' type='submit'>Cadastrar</button>
            </form>
        </FormSt>
    )

}

export default FormCadastro