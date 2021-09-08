const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar, hasta = 10)=>{


    try{

        console.log('======================'.blue);
        console.log('   Tabla del: '.rainbow,colors.bgYellow (base)); 
        console.log('======================'.red);
    
    
        let salida = '';
        let consola = '';
    
        for (let i = 1; i<=hasta; i++){
        
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.red} ${i} = ${base*i}\n`;
        
        }
        if (listar){
            console.log(consola);
        }
        
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;


    } catch (err){
        throw err;
    }

  
}


module.exports = {
    crearArchivo

}