import { HomeSt } from '../../styled/homeSt'
import { Link } from 'react-router-dom'

function Home () {

    const userData = JSON.parse(localStorage.getItem("@userData"))
    console.log(userData)
    return (
        <HomeSt>
            <header>
                <h3>Kenzie Hub</h3>
                <button>
                    <Link to="/">
                        Voltar
                    </Link>
                </button>
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