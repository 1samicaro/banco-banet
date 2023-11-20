import React from "react";
import "./AboutUs.css"
import logo from "../../assets/logoba.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";




export default function AboutUs() {
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
            Las Mipymes constituyen 99,5% de las empresas, aportan el 35% al Producto Interno Bruto <br />
            y dan empleo al 65% de la fuerza laboral colombiana
          </b> 
          </h3>

          <br />
          <div className="imagenesTam">
            <img
            className="d-block w-100"
            src={aboutus}
            height="250"
            alt="..."
            />
            </div>

            <br />

            <h3 id="titulo" align="center"> <b>Nosotros <br />
          </b> 
          </h3>
          <br />
          <p>
          El Banco de la Economía Popular de Colombia –BANEP-, es una institución financiera creada como sociedad anónima mercantil, que opera bajo la modalidad de neobanco (100% virtual) y presta servicios en todo el territorio colombiano.          </p>
          <p>
          BANEP fue creado bajo el amparo de la política del gobierno nacional Pacto por la Economía Popular, que plantea entre sus medidas “Crearemos líneas especiales de microcrédito y crédito condonable para las organizaciones de la economía popular, con líneas especiales de financiación y mediante exigencia de requisitos y garantías flexibles y/o con el respaldo del Estado”, y “Articularemos las tiendas populares de manera asociativa al sistema de microcrédito público. El sistema financiero público al lado de una banca cooperativa reemplazará el gota a gota y proveerá alternativas a la banca privada para los actores de la economía popular. Así, salvaguardaremos la pervivencia a las y los tenderos, hoy amenazados por las grandes superficies.”          
          </p>
          <br />

          <h3 id="titulo" align="center"> <b>Misión <br />
          </b> 
          </h3> 
          <br />
          <p>
          Somos el soporte financiero de la economía popular para promover su modernización, crecimiento y rentabilidad,
          en beneficio de la microempresa y el 65% de los trabajadores colombianos.
          </p>
                
          <br />

          <h3 id="titulo" align="center"> <b>Objetivos <br />
          </b> 
          </h3> 
          <br />      
          <p>
          •	Bancarizar a los sectores y agentes de la economía de base colombiana, urbanos y rurales.

          <br />

          •	Ofrecer programas y servicios que atiendas las necesidades de financiamiento de la economía popular colombiana.
          <br />
 
          •	Apalancar a los productores y comerciantes de la economía popular para lograr condiciones favorables que modernicen su actividad, aumenten su competitividad y generen riqueza y empleo para los colombianos. <br />


          </p>

          <br />

          <h3 id="titulo" align="center"> <b>Servicios <br />
          </b> 
          </h3> 
          <br />  
          <p>
          Siguiendo la tendencia mundial, y con el propósito de reducir los costos operativos y el valor de los servicios, BANEP se proyecta como un neobanco, con organización y operación 100% virtual. Tenemos como propósito lograr una cobertura en los 1.123 municipios del país, en donde operan microempresarios, tenderos, comercios minoristas y ventas informales.
          </p>
          <p>
          Inicialmente, BANEP prestará los servicios de cuenta de ahorros y crédito de inversión y capital de trabajo, que constituyen las principales necesidades de la economía popular.

          </p>
          <p>
          Un servicio estratégico de BANEP para los sectores de economía de base será el respaldo financiero para sus operaciones de compra, producción y venta de bienes y servicios.
          </p>
          <p>
          Los grandes proveedores venden al por mayor, concediendo plazo entre 1 y 3 meses para el pago (tiempo utilizado por las grandes cadenas).  Los tenderos y demás agentes tienen compras mínimas que no son atendidas por los grandes proveedores, por lo cual tienen que recurrir a la cadena intermediarios, con mayores precios y menores plazos de pago. Además, muchos no están legalizados (registro en cámara de comercio, RUT, seguridad social), no poseen el capital y las garantías que respalden pagos a plazos, por lo cual tienen cerrado el acceso a los grandes productores/proveedores.
          </p>
          <p>
          BANEP aprovecha los esquemas asociativos ya existentes o promueve la asociatividad, de manera que se sumen pedidos minoristas en grandes volúmenes, y ofrece el respaldo financiero que requieren los grandes proveedores.
          </p>

          <br />

         

              
              


              </div>
              
             
    </div>
  );
}
