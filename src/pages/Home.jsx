import React, { Fragment,useState} from 'react'
import {Link} from 'react-router-dom'
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
export const Home = () => {

  //formulario
  //Array de Lista de usuarios Externos
  let listadoUsuarioe;
  
 

  const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
  const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
	const [nacionalidad, cambiarNacionalidad] = useState({campo: '', valido: null});
	const [genero, cambiarGenero] = useState({campo: '', valido: null});
	const [documento, cambiarDocumento] = useState({campo: '', valido: null});
  const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		nacionalidad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    genero: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    documento: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccion: /^[a-zA-Z0-9_.+-]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const validarPassword2 = () => {
		if(password.campo.length > 0){
			if(password.campo !== password2.campo){
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}

	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			nombre.valido === 'true' &&
			apellido.valido === 'true' &&
      nacionalidad.valido === 'true' &&
      genero.valido === 'true' &&
      documento.valido === 'true' &&
      correo.valido === 'true' &&
      telefono.valido === 'true' &&
      password.valido === 'true' &&
			terminos
		){
      //Captura los datos de las cajas de texto
      const nom = nombre.campo;
      const apell = apellido.campo;
      const nac = nacionalidad.campo;
      const gen = genero.campo;
      const doc = documento.campo;
      const dir = direccion.campo;
      const corr = correo.campo;
      const cel = telefono.campo;
      const cla = password.campo;

      //Crea un objeto JSON, con los datos capturados
      const usue = { nom, apell,nac, gen, doc, dir,corr, cel, cla};
      //Obtiene los usuarios Externos guardados en Local Storage
      listadoUsuarioe = JSON.parse(localStorage.getItem("listaUsuariose")) || [];
      //Se adiciona el nuevo usuarios Externo al array
      listadoUsuarioe.push(usue);
      //Se guarda en local storage
      localStorage.setItem("listaUsuariose", JSON.stringify(listadoUsuarioe));
      // Borrar los campos
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarApellido({campo: '', valido: null});
			cambiarPassword({campo: '', valido: null});
			cambiarPassword2({campo: '', valido: null});
			cambiarCorreo({campo: '', valido: null});
			cambiarTelefono({campo: '', valido: null});
      cambiarDireccion({campo: '', valido: null});
      cambiarNacionalidad({campo: '', valido: null});
      cambiarGenero({campo: '', valido: null});
      cambiarDocumento({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

  return (
    <Fragment>
      <div id="headerwrap">
        <div className="container">
          <div className="row centered">
          <img src="header-bg.jpg" alt=""/>
            <div className="col-lg-8 col-lg-offset-2">
              
              <h1>It Doesn't Take a Rocket <b>Scientist</b></h1>
              <h2>It Takes a Designer</h2>
              
            </div>
          </div>
        {/* <!-- row --> */} 
        </div>
      {/* <!-- container --> */} 
      </div>
      {/*  <!-- headerwrap --> */} 

      <div className="container w">
        <div className="row centered">
          <br/><br/>
          <div className="col-lg-4">
            <i className="fa fa-heart"></i>
            <h4>DESIGN</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.</p>
          </div>
          {/*{/*{/* {/*  <!-- col-lg-4 --> */} 

          <div className="col-lg-4">
            <i className="fa fa-laptop"></i>
            <h4>BOOTSTRAP</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.</p>
          </div>
          {/*{/*{/* {/*  <!-- col-lg-4 --> */} 

          <div className="col-lg-4">
            <i className="fa fa-trophy"></i>
            <h4>SUPPORT</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.</p>
          </div>
          {/*{/*{/* {/*  <!-- col-lg-4 --> */} 
        </div>
        {/*{/*{/* {/*  <!-- row --> */} *
        <br/>
        <br/>
      </div>
      {/*{/*{/* {/*  <!-- container --> */} 

      {/*{/* {/*  <!-- PORTFOLIO SECTION --> */} 
      <div id="dg">
        <div className="container">
          <div className="row centered">
            <h4>LATEST WORKS</h4>
            <br/>
            <div className="col-lg-4">
              <div className="tilt">
                <Link to="#"><img src="img/p01.png" alt=""/></Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="tilt">
                <Link to="#"><img src="img/p03.png" alt=""/></Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="tilt">
                <Link to="#"><img src="img/p02.png" alt=""/></Link>
              </div>
            </div>
          </div>
        {/*{/* {/*  <!-- row --> */} 
        </div>
        {/*{/* {/*  <!-- container --> */} 
      </div>
      {/*{/* {/*  <!-- DG --> */} 

      {/* {/*  <!-- FEATURE SECTION --> */} 
      <div className="container wb">
        <div className="row centered">
          <br/><br/>
          <div className="col-lg-8 col-lg-offset-2">
            <h4>WE CREATE FIRST CLASS DESIGN</h4>
            <p>By being true to the brand we represent, we elevate the audiences’ relationship to it. Like becomes love becomes a passion. Passion becomes advocacy. And we see the brand blossom from within, creating a whole story the audience embraces. That’s
              when the brand can truly flex its muscles.</p>
            <p><br/><br/></p>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-10 col-lg-offset-1">
            <img className="img-responsive" src="img/munter.png" alt=""/>
          </div>
        </div>
      {/* {/*  <!-- row --> */} 
      </div>
      {/* {/*  <!-- container --> */} 

      <div id="lg">
        <div className="container">
          <div className="row centered">
            <h4>OUR AWESOME CLIENTS</h4>
            <div className="col-lg-2 col-lg-offset-1">
              <img src="img/c01.gif" alt=""/>
            </div>
            <div className="col-lg-2">
              <img src="img/c02.gif" alt=""/>
            </div>
            <div className="col-lg-2">
              <img src="img/c03.gif" alt=""/>
            </div>
            <div className="col-lg-2">
              <img src="img/c04.gif" alt=""/>
            </div>
            <div className="col-lg-2">
              <img src="img/c05.gif" alt=""/>
            </div>
          </div>
        {/* {/*  <!-- row --> */} 
        </div>
      {/* {/*  <!-- container --> */} 
      </div>
      {/* {/*  <!-- dg --> */} 

      <div id="r">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-8 col-lg-offset-2">
              <h4>WE ARE STORYTELLERS. BRANDS ARE OUR SUBJECTS. DESIGN IS OUR VOICE.</h4>
              <p>We believe ideas come from everyone, everywhere. At BlackTie, everyone within our agency walls is a designer in their own right. And there are a few principles we believe—and we believe everyone should believe—about our design craft. These truths
                drive us, motivate us, and ultimately help us redefine the power of design.</p>
            </div>
          </div>
        {/* {/*  <!-- row --> */} 
        </div>
      {/* {/*  <!-- container --> */} 
      </div>

      {/* {/*  <!-- FOOTER --> */} 
      <div id="f">
        <div className="container">
          <div className="row centered">
            <Link to="#"><i className="fa fa-twitter"></i></Link><Link to="#"><i className="fa fa-facebook"></i></Link><Link to="#"><i className="fa fa-dribbble"></i></Link>
          </div>
        {/* {/*  <!-- row --> */} 
        </div>
      {/* {/*  <!-- container --> */} 
      </div>
      {/* {/*  <!-- Footer --> */} 

      {/* {/*  <!-- MODAL FOR CONTACT --> */} 
      {/* {/*  <!-- Modal --> */} 
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title" id="myModalLabel">contact us</h4>
            </div>
            <div className="modal-body">
              <div className="row centered">
                <p>We are available 24/7, so don't hesitate to contact us.</p>
                <p>
                  Somestreet Ave, 987<br/> London, UK.<br/> +44 8948-4343<br/> contact@example.com
                </p>

                <form className="contact-form php-mail-form" action="contactform/contactform.php" method="POST">

                  <div className="form-group">
                    <label for="contact-name">Your Name</label>
                    <input type="name" name="name" className="form-control" id="contact-name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <label for="contact-email">Your Email</label>
                    <input type="email" name="email" className="form-control" id="contact-email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <label for="contact-subject">Subject</label>
                    <input type="text" name="subject" className="form-control" id="contact-subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>
                    <div className="validate"></div>
                  </div>

                  <div className="form-group">
                    <label for="contact-message">Your Message</label>
                    <textarea className="form-control" name="message" id="contact-message" placeholder="Your Message" rows="5" data-rule="required" data-msg="Please write something for us"></textarea>
                    <div className="validate"></div>
                  </div>

                    <div className="loading"></div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>

                    <div className="form-send">
                      <button type="submit" className="btn btn-large">Send Message</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
            {/* {/*  <!-- /.modal-content --> */} 
          </div>
          {/* {/*  <!-- /.modal-dialog --> */} 
        </div>
        {/* {/*  <!-- /.modal --> */}

        <div id="copyrights">
          <div className="container">
            <p>
              &copy; Copyrights <br/> <strong>Grupo 7 - NRC 1257</strong>
              <br/>
              <strong>MISION TIC 2022</strong>
            </p>
          </div>
      </div>
      {/*  <!-- Formulario --> */}
      <main>
			<Formulario action="" onSubmit={onSubmit}>
				
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder=""
					name="nombre"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
        <Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder=""
					name="apellido"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.apellido}
				/>
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label="Contraseña"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
				/>
				<Input
					estado={password2}
					cambiarEstado={cambiarPassword2}
					tipo="password"
					label="Repetir Contraseña"
					name="password2"
					leyendaError="Ambas contraseñas deben ser iguales."
					funcion={validarPassword2}
				/>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="john@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono"
					placeholder=""
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>
        <Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					tipo="text"
					label="Direccion"
					placeholder=""
					name="direccion"
				/>
        <Input
					estado={nacionalidad}
					cambiarEstado={cambiarNacionalidad}
					tipo="text"
					label="Nacionalidad"
					placeholder=""
					name="nacionalidad"
					leyendaError="La Nacionalidad solo puede contener letras y espacios."
					expresionRegular={expresiones.nacionalidad}
				/>
        <Input
					estado={genero}
					cambiarEstado={cambiarGenero}
					tipo="text"
					label="Genero"
					placeholder=""
					name="genero"
					leyendaError="El genero solo puede contener letras y espacios."
					expresionRegular={expresiones.genero}
          />
         <Input
					estado={documento}
					cambiarEstado={cambiarDocumento}
					tipo="text"
					label="Documento"
					name="documento"
					leyendaError="el documento tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.documento}
				/>


				<ContenedorTerminos>
					<Label>
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos} 
							onChange={onChangeTerminos}
						/>
						Acepto los Terminos y Condiciones
					</Label>
				</ContenedorTerminos>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
          <Link to="/lista">Listar</Link>
        {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main> 
	);
    
      {/*  <!-- JavaScript Libraries --> */}
      <script src="lib/jquery/jquery.min.js"></script>
      <script src="lib/bootstrap/js/bootstrap.min.js"></script>
      <script src="lib/php-mail-form/validate.js"></script>
      <script src="lib/chart/chart.js"></script>

      {/*  <!-- Template Main Javascript File --> */}
      <script src="js/main.js"></script>
   </Fragment>
       
  )
}

