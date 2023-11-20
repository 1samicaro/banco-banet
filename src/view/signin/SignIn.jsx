import React from "react";
import logo from "../../assets/logoba.png";
import { Link } from "react-router-dom";
import credito from "../../assets/contenido/credito.jpg";



export default function SignIn() {

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
                CREDITO
              </b> 
              </h3>
    
              <br />
              <div className="imagenesTam">
                <img
                className="d-block w-100"
                src={credito}
                height="250"
                alt="..."
                />
                </div>
    
                <br />

                <p>
                El crédito para dotar a las unidades de la economía popular de los recursos financieros para hacer crecer su actividad y
                mejorar la rentabilidad, constituye uno de los objetivos misionales de BANEP como banco de la economía popular
                colombiana.    </p>

                <p>
                Y la razón es sencilla: más del 80% de las empresas en Colombia pertenecen a la categoría de microempresas, que son las
                mayores generadoras de empleo. Del total de 22,2 millones de trabajadores, las microempresas vinculan 14 millones (63.4%),
                las empresas pequeñas 2,2 millones (10%), las medianas a 1,54 millones (7%) y las empresas grandes a 4,33 millones de
                trabajadores (19.6%). Por su parte, las MiPymes representan más del 99% de las empresas del país, generan
                aproximadamente 79% del empleo y aportan 40% al Producto Interno Bruto (PIB).
                </p>
                <p>
                En este contexto, BANEP proyecta iniciar operaciones con 2 líneas de crédito para la economía popular: <br />
                • Crédito de Inversión para ampliar la capacidad productiva de las unidades empresariales. <br />
                • Crédito de Capital de trabajo, para compra de insumos y funcionamiento de las empresas.
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