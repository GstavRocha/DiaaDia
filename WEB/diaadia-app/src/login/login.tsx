import React from 'react';
import '../styles/login.css';
import logo  from '../styles/img/logoGrande.png';

const LoginIndex = () =>{
 return (
         <header className="headerPosition">
            <div className="LoginIndex1">
                 <div>
                    <h1 className="LoginHeader1">DIA A DIA</h1>
                    <h3 className="LoginHeader2"> Índice Glicêmico</h3>
                     <div className="loginBox">
                         <p className="loginText"> login</p>
                         <input placeholder="Email" type="text" className="loginInputText"/>
                         <br/>
                         <input placeholder="Senha" type="text" className="loginInputText2"/>
                         <br/>
                         <input value="login" type="button" className="loginButton"/>
                         <p className="rescuepass"> Esqueceu a senha?</p>
                         <p className="fakelink"> Clinque Aqui!</p>
                     </div>
                </div>
                <div className="loginIndex2">
                    <img className="logoGrande" src={logo} alt="logo D"/>
                </div>
            </div>
             <div className="rectangle">

             </div>
         </header>
 );
}
export default LoginIndex;
