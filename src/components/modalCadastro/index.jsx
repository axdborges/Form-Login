const ModalCa = ({estadoBotao , botao}) => {

    function ativaCadastro () {
        estadoBotao(false)
    }
    return (
        <aside className="modal-cadastro">
            <header>
                <p>Cadastrar Tecnologia</p>
                <button onClick={() => ativaCadastro()}>X</button>
            </header>
            <form> 
                <label htmlFor="">Nome</label>
                <input type="text" />
                <label htmlFor="">Selecionar status</label>
                <select name="" id="">
                    <option value="iniciante">iniciante</option>
                    <option value="intermediario">intermediário</option>
                    <option value="avançado">Avançado</option>
                </select>
                <button type='submit'> Cadastrar tecnologia</button>
            </form>
        </aside>
    )
}


export default ModalCa