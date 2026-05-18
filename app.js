   const meses = [
      null,
      "Enero", "Febrero", "Marzo", "Abril",
      "Mayo", "Junio", "Julio", "Agosto",
      "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    function mostrarMes() {
      const numero = parseInt(document.getElementById("mesInput").value);
      const resultado = document.getElementById("resultado");

      if (numero >= 1 && numero <= 12) {
        resultado.textContent = `El mes ${numero} se corresponde con ${meses[numero]}.`;
      } else {
        resultado.textContent = "Por favor, introduce un número válido entre 1 y 12.";
      }
    }