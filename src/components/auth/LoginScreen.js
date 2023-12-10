

import React from 'react';
import './login.css';
import { useForm } from '../../Hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';

export const LoginScreen = () => {
      
    const dispach = useDispatch()
      const [formLoginValues, handleLoginInputChange]=useForm({
        lEamil:'fernando2@gmail.com',
        lPassword:'1234567'
      })
      
      const {lEamil,lPassword} =formLoginValues

      const [formRegisterValues, handleRegisterInputChange]=useForm({
        rName:'Nasndo',
        rEmail:'nansdo@gmail.com',
        rPassword1:'1234567',
        rPassword2:'1234567'
      })
     

      const  {rName, rEmail, rPassword1,rPassword2} = formRegisterValues


      
    const handleLogin = (e) =>{
        e.preventDefault()
      
        dispach(startLogin(lEamil,lPassword))

    }

    const handleRegister = (e)=>{
        e.preventDefault();
        if(rPassword1!== rPassword2){
            return Swal.fire('Error','Las contrasenas deben ser iguales','error')
        }else{
            dispach(startRegister(rName, rEmail, rPassword2))
            

        }
     }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEamil"
                                value={lEamil}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                  name="rName"
                                value={rName}
                                onChange={handleRegisterInputChange}

                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                value={rEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="rPassword1"
                                value={rPassword1}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="rPassword2"
                                value={rPassword2}
                                onChange={handleRegisterInputChange} 
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}