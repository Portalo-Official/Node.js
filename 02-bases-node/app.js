
const {crearArchivo} = require('./helpers/multiplicar')

const [ , ,arg3 = 'base=5'] = process.argv;
const [ , numero] = arg3.split('=');
crearArchivo(numero).then((nombreArchivo)=> console.log(nombreArchivo, 'creado'))
                    .catch(err => onsole.log('Ocurrio un error', err));
