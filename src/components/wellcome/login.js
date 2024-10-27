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
                    <div class="fields password-field">
                        <label for="password">Senha</label>
                        <div class="password-wrapper">
                            <input type="password" placeholder="Digite a sua senha" id="password" />
                            <i class="bi bi-eye" id="togglePassword" aria-label="Mostrar senha" role="button"></i>
                        </div>
                    </div>
                <button class="btnlogin">Entrar</button>
            </form>
        </div>
        `
  );
}