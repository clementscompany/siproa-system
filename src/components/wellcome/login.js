export default function Login() {
    return (
        `
        <div class="login-page" id="login">
            <form action="" class="form-login">
                <div class="icons"><span><i class="bi bi-person"></i></span><h1>Login</h1></div>
                    <div class="fields">
                        <label for="">Usuario</label>
                    <select id="username">
                        <option value="">Selecione um utilizador </option>
                        <option value="admin">admin</option>
                    </select>
                    </div>
                    <div class="fields">
                        <label for="">Senha</label>
                    <input type="password" placeholder="Digete a sua senha" id="password">
                    <i class="bi bi-eye"></i>
                    </div>
                <button class="botao">Entrar</button>
            </form>
        </div>
        <div id="popup-erro" class="modal">
            <div class="modal-content">
                <h2>Aviso!</h2>
                <p id="mensagem-erro">Lorem, ipsum dolor.</p>
                <button id="fecharerro">Fechar</button>
            </div>
        </div>

        <div id="popup-sucesso" class="modal">
            <div class="modal-content-sucess">
                <h2>Aviso</h2>
                <p id="mensagemSucesso"></p>
            </div>
        </div>
        `
    );
}