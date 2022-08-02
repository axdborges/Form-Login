import { FormSt } from '../../styled/formSt'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

function FormCadastro () {

    const schema = yup.object().shape({
        nome: yup.string().required("Nome Obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        senha: yup.string().required("Senha obrigatória"),
        bio: yup.string().required("Bio obrigatória"),
        tel: yup.string().required("Telefone obrigatório"),
        módulo: yup.string().required("Módulo obrigatório"),
    });

    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(schema),
    });

    const submitFunction = (data) => console.log(data);

    return ( 
        <FormSt>
            <div className="top">
                <h2>Kenzie Hub</h2>
                <button>Voltar</button>
            </div>
            <form action="" className='form-cadastro'> 
            <h4>Crie sua Conta</h4>
            <p>Rápido e grátis, vamos nessa</p>
            <div className='input-cadastro'>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder='Digite aqui seu nome'/>
            </div>
            <div className='input-cadastro'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Digite aqui seu Email'/>
            </div>
            <div className='input-cadastro'>
                <label htmlFor="">Senha</label>
                <input type="password" placeholder='Crie sua senha'/>
            </div>
            <div className='input-cadastro'>
                <label htmlFor="">Confirmar Senha</label>
                <input type="password" placeholder='Repita sua senha'/>
            </div>
            <div className='input-cadastro'>
                <label htmlFor="">Bio</label>
                <input type="text" placeholder='Fale sobre você'/>
            </div>
            <div className='input-cadastro'>
                <label htmlFor="">Contato</label>
                <input type="number" placeholder='Opções de contato'/>
            </div>
            <div className='input-cadastro'>
                <label htmlFor="">Selecionar Módulo</label>
                <select name="modulos" id="">
                    <option value="primeiro modulo">Primeiro módulo</option>
                    <option value="segundo modulo">Segundo módulo</option>
                    <option value="terceiro modulo">Terceiro módulo</option>
                </select>
            </div>
            <button className='cadastrar'>Cadastrar</button>
            </form>
        </FormSt>
    )

}

export default FormCadastro