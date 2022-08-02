import { FormSt } from '../../styled/formSt'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

function FormLogin () {

    const schema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        senha: yup.string().required("Senha obrigatória"),
    });

    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(schema),
    });

    const submitFunction = (data) => console.log(data);

    return ( 
        <FormSt>
            <h2>Kenzie Hub</h2>
            <form action=""> 
            <h4>Login</h4>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='email@email.com'/>
            </div>
            <div>
                <label htmlFor="">Senha</label>
                <input type="password" placeholder='senha'/>
            </div>
            <button className='submit'>Entrar</button>
            <div>
                <p>Ainda não possui conta?</p>
                <button className='cadastro'>Cadastre-se</button>
            </div>
            </form>
        </FormSt>
    )
}

export default FormLogin