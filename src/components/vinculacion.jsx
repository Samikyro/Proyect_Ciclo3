import GoogleLogin from 'react-google-login';

function ActivacionGmail(){

    const respuestaGoogle=(respuesta) =>{
        console.log(respuesta);
        console.log(respuesta.profileobj);
    }
    return(
        <div>
            <br /> <br />
            <GoogleLogin
                clientId="467833203824-unf04ujaf0ssa575mqg96t1jhlt7mgn0.apps.googleusercontent.com"
                //buttonText="Login"
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="mainButton8">Iniciar Sesión con Gmail</button>
                    )}   
                onSuccess={respuestaGoogle}
                onFailure={respuestaGoogle}
                cookiePolicy={'single_host_origin'}
            />,
        </div>
    )
}

export default ActivacionGmail;