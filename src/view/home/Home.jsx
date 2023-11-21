import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import logo from "../../assets/logoba.png";
import { Link } from "react-router-dom";
import "./Home.css"




export default function Home() {

    
    return (
        <div id='paginaprincipal'>
      <div>

      <div className="container-fluid">
        <br />
        <br />
        <br />
        <br />
        

        <div className="row">
          <div className="col-lg-6 col-md-6">
          <Link to="/" className="container-fluid">
                    <img
                    align="left"
                    src={logo}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logo'
                    />
                </Link>
          </div>
          <div className="col-lg-6 col-md-6">
          <div className="social-links mt-3" align="right">
              <Link to="https://twitter.com/mingga_rmb">
              <svg  id="color"
              xmlns="http://www.w3.org/2000/svg" 
              width="40" height="40" fill="currentColor" class="bi bi-envelope-fill" 
              viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
              </svg>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <Link to="https://www.facebook.com/profile.php?id=100093289494718">
              <svg id="color"
              xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" 
              class="bi bi-lock" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
              </svg>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              

              <Link to="https://www.instagram.com/mingga_rmb/">
              <svg id="color"
              xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" 
              class="bi bi-file-earmark-fill" viewBox="0 0 16 16">
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"/>
              </svg>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


              <Link to="https://www.linkedin.com/in/mingga-rmb/">
              <svg id="color"
              xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" 
              class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="https://www.tiktok.com/@mingga_rmb">
              <svg id="color"
              xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" 
              class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
            </div>
            
          </div>

          </div>
           
    </div >
    <br />
    <br />
  
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
          <Link to="/AboutUs" className="navbar-brand">
          <h5> <b>   Abrir Cuenta de Ahorros </b></h5>
          </Link>
          <Link to="/SignUp" className="navbar-brand">
          <h5><b> Solicitar Crédito</b></h5>
          </Link>
          <Link to="/SignIn" className="navbar-brand">
          <h5> <b>   Aliados </b></h5>
          </Link>
          <Link to="/" className="navbar-brand">
          <h5><b> Convenios </b></h5>
          </Link>
          <Link to="https://banep.info/" className="navbar-brand">
          <h5> <b>   Noticias </b></h5>
          </Link>
          <Link to="/AboutUs" className="navbar-brand">
          <h5> <b>   Legal </b></h5>
          </Link>
        </div>
      </nav>
      </div>

    <div className="row" id="margin">
      
    <div className="col-sm-12 col-md-4 col-lg-4 col-sm-4 col-xl-4 col-xxl-4" id="margin"> 
     
      <Link to="/AboutUs">
      <img id="photo"
            className="img-fluid"
            src={banner1}
            alt="First slide"
          
          />
        </Link>
       
    </div>

    <div className="col-sm-12 col-md-4 col-lg-4 col-sm-4 col-xl-4 col-xxl-4" id="margin">
      <div className="card" id="photo">
      <Link to="/SignUp">
      <img id="photo"
                    src={banner2}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
          </Link>

          
      
      </div>
    </div>

    <div className="col-sm-12 col-md-4 col-lg-4 col-sm-4 col-xl-4 col-xxl-4" id="margin">
      <div className="card" id="photo">
      <Link to="/SignIn">
      <img
            className="img-fluid"
            src={banner3}
            alt="First slide"
            id="photo"
          />
          </Link>
        
      </div>
    </div>

</div>

<br />
          
          <h2 id="titulo"> <b> Somos el Banco de la Economía Popular <br />
          <h3>Servimos a la economía de base para contribuir a la generación de riqueza,  <br />
          trabajo e ingreso para las clases populares de Colombia</h3> 
          </b> 
          </h2>
          

      </div>
      
      <br />
      <br />
      <br />
      <br />
    </div>
    
    );
}
