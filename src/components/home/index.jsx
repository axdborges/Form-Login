import { HomeSt } from '../../styled/homeSt';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Home () {
    const navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem("@userData"))
    console.log(userData)

    const voltar = () => {
        localStorage.clear()
        navigate('/')
        toast.success('Logout feito com sucesso!')
    }
    return (
        <HomeSt>
            <header>
                <h3>Kenzie Hub</h3>
                <button onClick={() => voltar()}>Voltar</button>
            </header>
            <section>
                <h4>Olá, {userData.name}</h4>
                <p>{userData.course_module}</p>
            </section>
            <main>
                <strong>Que pena! Estamos em desenvolvimento :/ </strong>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </main>
        </HomeSt>
    )
}

export default Home