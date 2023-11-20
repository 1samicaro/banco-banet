import React from "react";
import logo from "../../assets/logoba.png";
import { Link } from "react-router-dom";
import ahorros from "../../assets/contenido/ahorros.jpg";



export default function SignUp() {

    return (
        <div className="contenedor-joinus" id="padding">
           <nav className="navbar navbar-light mb-5">
                    <Link to="/" className="container-fluid">
                        <img
                        src={logo}
                        width="290"
                        height="550"
                        className="img-fluid d-block mx-auto"
                        alt='logoMingga'
                        />
                    </Link>
                </nav>
    
                <div className="container-fluid" align="left">
    
                <h3 id="titulo" align="center"> <b>BANCO DE LA ECONOMIA POPULAR  DE COLOMBIA <br />
                CUENTA DE AHORROS
              </b> 
              </h3>
    
              <br />
              <div className="imagenesTam">
                <img
                className="d-block w-100"
                src={ahorros}
                height="250"
                alt="..."
                />
                </div>
    
                <br />

                <p>
                Con la evolución del sistema financiero y el soporte de internet que permite servicio 24/7 y realización de operaciones en tiempo real, la cuenta de ahorros constituye actualmente el principal servicio financiero que utilizan los colombianos, porque su apertura es sencilla, y permite el depósito del dinero y facilita las operaciones de pago y recibo de recursos por las diferentes transacciones que realizan las personas y unidades económicas.
                </p>
    
                    
              <p>BANEP ofrecerá inicialmente el servicio de Cuenta de Ahorros, tanto para personas naturales como para negocios y empresas, con las siguientes características: <br />

              • Apertura y manejo on line desde el teléfono celular o PC del usuario.
    
              <br />
    
              •	Apertura gratuita sin depósito mínimo obligatorio.
              <br />
     
              • Sin cuota de manejo. <br />

              •	Cobertura en los 1.123 municipios del territorio nacional, en las áreas urbanas y rurales. <br />
              •	Sin límite de edad para personas naturales.


    
    
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

    
                  
                  
    
    
                  </div>
                  
                 
        </div>
      );
    
    

}