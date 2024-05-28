//codigo 403: Forbidden (el usuario no tiene permisos para consultar el endpoint)
//handleError default le doy este nombre de forma default.

const handleHTTPError = (res,msg = "HANDLE_ERROR_DEFAULT",code = 403) => {
    res.status(code);
    res.send({error: msg})
}

export default handleHTTPError