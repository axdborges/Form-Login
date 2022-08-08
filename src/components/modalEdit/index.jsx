const ModalEdita = ({estadoBotao}) => {

    function ativaEdita () {
        estadoBotao(false)
    }
    return (
        <aside className="modal-edita">
            <header>
                <p>Tecnologia detalhes</p>
                <button onClick={() => ativaEdita()}>X</button>
            </header>
            <form> 
                <label htmlFor="">Nome do projeto</label>
                <input type="text" />
                <label htmlFor="">Status</label>
                <select name="" id="">
                    <option value="iniciante">iniciante</option>
                    <option value="intermediario">intermediário</option>
                    <option value="avançado">Avançado</option>
                </select>
                <div className="botoes">
                    <button type='submit' className="salvar"> Salvar alterações</button>
                    <button type="submit" className="excluir">Excluir</button>
                </div>
                

            </form>
        </aside>
    )
}


export default ModalEdita