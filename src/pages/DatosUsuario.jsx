import React, { Fragment } from "react";

export const DatosUsuario = () => {

const Lista_Usuarios = [
    {nombre:'Andrew', id:"12345", mensaje:"Ninguno", nombreAdulto:"Jose", idAdulto:"123456", celular:"3045678456", email:"josePolo@gmail.com", direccion:"Cll 00 # 00 - 00", esquema:"Ninguno"}, {nombre:'felipe', id:"12345", mensaje:"Cualquier mensaje", nombreAdulto:"Antonio", idAdulto:"123456", celular:"3045678456", email:"antonio@gmail.com", direccion:"Cll 00 # 00 - 00", esquema:"Ninguno"}
    ]
  return (
    <Fragment>
      <div className="DatosUsuario">
        <div className="row">
            <div className="row ">
                <form>
                    <div className = "row buscarnino">
                        <div className="input-field col s12">
                            <input name="docId" type="text" class="form-control" placeholder="Numero de documento" autoFocus />                            
                        </div>
                        <div className="input-field col s12 btn-buscar">
                            <button type="submit" className="btn btn-default">Buscar</button>                            
                        </div>
                        
                    </div>
                </form>
        </div>          
        <div className = "col s7 table-responsive">
            <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className="panel panel-primary">
                      <th scope="col">Nombre del niño</th>
                      <th scope="col">ID del niño</th>
                      <th scope="col">Mensaje</th>
                      <th scope="col">Nombre adulto</th>
                      <th scope="col">ID del adulto</th>
                      <th scope="col"> Celular</th>
                      <th scope="col">Email</th>
                      <th scope="col">Direccion</th>
                      <th scope="col">Esquema</th>
                    </tr>
                    
                  </thead>
                  <tbody>
                    <tr className="panel panel-info">
                        <td className="table-secondary">{Lista_Usuarios.nombre}Andrew</td>
                        <td className="table-secondary">{Lista_Usuarios.id}1234567</td>
                        <td className="table-secondary">{Lista_Usuarios.mensaje}Ninguno</td>
                        <td className="table-secondary">{Lista_Usuarios.nombreAdulto}Jose Polo</td>
                        <td className="table-secondary">{Lista_Usuarios.idAdulto}12345678</td>
                        <td className="table-secondary">{Lista_Usuarios.celular}3024564765</td>
                        <td className="table-secondary">{Lista_Usuarios.email}jose@gmail.com</td>
                        <td className="table-secondary">{Lista_Usuarios.direccion}calle 00 # 00 - 00</td>
                        <td className="table-secondary">{Lista_Usuarios.esquema}Ninguno</td>

                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
                    
                
            </div>
        </div>

      {/*  <!-- FOOTER--> */}
      <div id="f" className="fixed-bottom">
                <div className="container-fluid">
                    <div className="row centered">
                        <a href="/"><i className="fa fa-twitter"></i></a><a href="/"><i className="fa fa-facebook"></i></a><a href="/"><i className="fa fa-dribbble"></i></a>

                    </div>
                {/*  <!-- row--> */}
                </div>
            {/*  <!-- container--> */}
            </div>
        {/*  <!-- Footer--> */}

        {/*  <!-- MODAL FOR CONTACT--> */}
        {/*  <!-- Modal--> */}
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
                                        <input type="name" name="name" className="form-control" id="contact-name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
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
                {/*  <!-- /.modal-content--> */}
                </div>
            {/*  <!-- /.modal-dialog--> */}
            </div>
        {/*  <!-- /.modal--> */}

        <div id="copyrights">
            <div className="container">
                <p>
                &copy; Copyrights <br/> <strong>Grupo 7 - NRC 1257</strong>
                <br/>
                <strong>MISION TIC 2022</strong>
                </p>
            </div>
        </div>
    </Fragment>
  );
};
