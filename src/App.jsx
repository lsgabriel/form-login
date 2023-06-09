import React, { useState } from "react";
import {Container} from './css/styles';

import Logo from './assets/logo.svg';
import eye from './assets/eye.png';

function App() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Container className="container">
      <form>
        <img src={Logo} alt="logo" />
        
        <div className="form-article">
          <h1>Acesse a plataforma</h1>
          <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>

          
            <label for="email">E-mail</label>
            <div>
              <input type='email' id="email" placeholder='Digite seu e-mail'/>
            </div>

            <span>
              <label for="password">Senha</label><a href="#">Esqueceu a senha?</a>
            </span>
            <div className="password-input">
              <input type={passwordShown ? "text" : "password"} id="password" placeholder='Digite sua senha'/>  
              <img className="eye-icon" onClick={togglePassword} src={eye} />
            </div>

          <button>Entrar</button>

          <p className="new-account">Ainda não tem uma conta? <a href="#">Inscreva-se</a></p>
        </div>

      </form>

      <div class="image"></div>
    </Container>
  );
}

export default App;
