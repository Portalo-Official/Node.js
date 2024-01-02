const fs = require("fs");

const crearArchivo = async (numero = 5) => {
  try {
    let filename = `tabla-${numero}.txt`;
    let contenido = gentablaMultiplicar(numero);

    fs.writeFileSync(filename, contenido);

    function gentablaMultiplicar(base) {
      let salida = "";
      for (let i = 1; i <= 10; i++) {
        let multiplicacion = i * base;
        salida += `${base} x ${i} = ${multiplicacion}\n`;
      }
      return salida;
    }
    return filename;
  } catch (error) {
    throw error;
  }
};
// Exportar en Node.js
module.exports = {
  crearArchivo: crearArchivo,
};
