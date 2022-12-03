const fs = require('fs');
const crearArchivo = async (base, hasta = 10, listar) => {    
    let salida = '';
    for(let i = 1; i <= hasta; i++){
        salida += `${base} x ${i} = ${base*i}\n`;
    }
    const nombreArchivo = `salida/tabla-${base}.txt`;
    fs.writeFile(nombreArchivo, salida, (err)=> {
        if(err) throw err;
    });
    if(listar){
        console.log( salida );
    }
    return nombreArchivo;
}
module.exports = {
    crearArchivo: crearArchivo
}