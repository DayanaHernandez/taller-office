import './inicioSesion.css'
import BotonAtras from './BotonAtras'
import BotonSiguiente from './BotonSiguiente'
import OpcionesInicio from './OpcionesInicio'

function InicioSesion(){
    return(
        <div className="inicio-sesion"> 
            <img className='logo' src='src\assets\microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg'/>
            <div className='datos'>
                <h2 className='titulo'>Iniciar sesión</h2>
                <input className="informacion"type="email" placeholder='Correo electrónico,teléfono o Skype' /> 
                <p className='crear-cuenta'>¿No tiene una cuenta?<a href='#'> Cree una.</a></p>
                <a href='#'>¿No puede acceder a su cuenta?</a>
                <div className='botones'>
                    <BotonAtras/>
                    <BotonSiguiente/>
                </div>
            </div>
                <OpcionesInicio/>
        </div>
    )
}
export default InicioSesion