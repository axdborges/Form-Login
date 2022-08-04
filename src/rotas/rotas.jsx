import { Routes, Route, Navigate } from 'react-router-dom';
import FormLogin from '../components/formLogin'
import FormCadastro from '../components/formCadastro'; 
import Home from '../components/home';

function Rotas () {
    return (
        <Routes>
            <Route path='/' element={<FormLogin/>} />               
            <Route path='/cadastro' element={<FormCadastro/>} />
            <Route path='/dashboard/:id' element={<Home/>} />
            <Route path='*' element={<Navigate replace to='/'/>} /> 
        </Routes>
    )
}

export default Rotas