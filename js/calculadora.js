const GRUPOS_POR_JERARQUIA = {
  "Jefe de Policía": "A",
  "Subjefe de Policía": "B",
  "Comisario General": "C",
  "Comisario Mayor": "C",
  "Comisario Inspector": "D",
  Comisario: "D",
  Subcomisario: "D",
  Principal: "D",
  Inspector: "D",
  Subinspector: "D",
  Ayudante: "D",
  "Suboficial Mayor": "D",
  "Suboficial Auxiliar": "D",
  "Suboficial Escribiente": "D",
  "Sargento 1ro": "D",
  Sargento: "D",
  "Cabo 1ro": "D",
  Cabo: "D",
  Agente: "D",
  "Auxiliar Superior 1°": "D",
  "Auxiliar Superior 2°": "D",
  "Auxiliar Superior 3°": "D",
  "Auxiliar Superior 4°": "D",
  "Auxiliar Superior 5°": "D",
  "Auxiliar Superior 6°": "D",
  "Auxiliar de 1°": "D",
  "Auxiliar de 2°": "D",
  "Auxiliar de 3°": "D",
  "Auxiliar de 4°": "D",
  "Auxiliar de 5°": "D",
  "Auxiliar de 6°": "D",
  "Oficial de Inteligencia": "D",
  "Auxiliar de Inteligencia": "D",
};

const TARIFAS = {
  A: {
    1: { viatico: 119, alojamiento: 315 },
    2: { viatico: 144, alojamiento: 388 },
    3: { viatico: 138, alojamiento: 388 },
  },
  B: {
    1: { viatico: 102, alojamiento: 268 },
    2: { viatico: 123, alojamiento: 330 },
    3: { viatico: 117, alojamiento: 330 },
  },
  C: {
    1: { viatico: 87, alojamiento: 228 },
    2: { viatico: 105, alojamiento: 281 },
    3: { viatico: 100, alojamiento: 281 },
  },
  D: {
    1: { viatico: 74, alojamiento: 194 },
    2: { viatico: 89, alojamiento: 239 },
    3: { viatico: 85, alojamiento: 239 },
  },
};

const COBERTURA_MEDICA_DIARIA_USD = 9;

const ALIAS_PAISES = {
  eeuu: "estados unidos",
  usa: "estados unidos",
  "u.s.a": "estados unidos",
  "u.s.a.": "estados unidos",
  "estados unidos de america": "estados unidos",
  "estados unidos de américa": "estados unidos",
  brasilia: "brasil",
  "republica federativa del brasil": "brasil",
  "república federativa del brasil": "brasil",
  "estado plurinacional de bolivia": "bolivia",
  "republica de chile": "chile",
  "república de chile": "chile",
  "republica de colombia": "colombia",
  "república de colombia": "colombia",
  "republica del paraguay": "paraguay",
  "república del paraguay": "paraguay",
  "republica oriental del uruguay": "uruguay",
  "república oriental del uruguay": "uruguay",
  "republica del peru": "peru",
  "república del perú": "peru",
  "republica de mexico": "mexico",
  "república de méxico": "mexico",
  "republica de canada": "canada",
  "república de canadá": "canada",
  "republica de panama": "panama",
  "república de panamá": "panama",
};

const PAISES_ZONAS = {
  belice: 1,
  "costa rica": 1,
  "el salvador": 1,
  guatemala: 1,
  honduras: 1,
  nicaragua: 1,
  panama: 1,
  peru: 1,
  venezuela: 1,
  paraguay: 1,
  uruguay: 1,
  brasil: 1,
  bolivia: 1,
  chile: 1,
  colombia: 1,
  ecuador: 1,
  guyana: 1,
  surinam: 1,

  canada: 2,
  mexico: 2,
  "estados unidos": 2,

  albania: 3,
  alemania: 3,
  andorra: 3,
  armenia: 3,
  austria: 3,
  belgica: 3,
  bielorrusia: 3,
  bosnia: 3,
  "bosnia y herzegovina": 3,
  bulgaria: 3,
  azerbaiyan: 3,
  "ciudad del vaticano": 3,
  croacia: 3,
  dinamarca: 3,
  eslovaquia: 3,
  eslovenia: 3,
  espana: 3,
  estonia: 3,
  finlandia: 3,
  francia: 3,
  grecia: 3,
  hungria: 3,
  irlanda: 3,
  islandia: 3,
  italia: 3,
  letonia: 3,
  liechtenstein: 3,
  lituania: 3,
  luxemburgo: 3,
  "macedonia del norte": 3,
  malta: 3,
  moldavia: 3,
  monaco: 3,
  montenegro: 3,
  noruega: 3,
  "paises bajos": 3,
  polonia: 3,
  portugal: 3,
  "reino unido": 3,
  "republica checa": 3,
  rumania: 3,
  "san marino": 3,
  serbia: 3,
  suecia: 3,
  suiza: 3,
  ucrania: 3,
  chipre: 3,
  angola: 3,
  argelia: 3,
  benin: 3,
  "burkina faso": 3,
  "cabo verde": 3,
  camerun: 3,
  chad: 3,
  botsuana: 3,
  burundi: 3,
  comoras: 3,
  "costa de marfil": 3,
  egipto: 3,
  eritrea: 3,
  etiopia: 3,
  gabon: 3,
  gambia: 3,
  ghana: 3,
  guinea: 3,
  "guinea-bisau": 3,
  "guinea bisau": 3,
  "guinea ecuatorial": 3,
  kenia: 3,
  lesoto: 3,
  liberia: 3,
  libia: 3,
  madagascar: 3,
  malaui: 3,
  malawi: 3,
  mali: 3,
  marruecos: 3,
  mauricio: 3,
  mauritania: 3,
  mozambique: 3,
  namibia: 3,
  niger: 3,
  nigeria: 3,
  "republica centroafricana": 3,
  "republica del congo": 3,
  "republica democratica del congo": 3,
  ruanda: 3,
  "santo tome y principe": 3,
  senegal: 3,
  seychelles: 3,
  "sierra leona": 3,
  somalia: 3,
  suazilandia: 3,
  sudafrica: 3,
  sudan: 3,
  "sudan del sur": 3,
  tanzania: 3,
  togo: 3,
  tunez: 3,
  uganda: 3,
  yibuti: 3,
  zambia: 3,
  zimbabue: 3,
  australia: 3,
  fiyi: 3,
  fiji: 3,
  kiribati: 3,
  "islas marshall": 3,
  nauru: 3,
  "nueva zelanda": 3,
  "nueva zelandia": 3,
  "nueva guinea": 3,
  "papua nueva guinea": 3,
  "islas salomon": 3,
  palaos: 3,
  samoa: 3,
  tonga: 3,
  tuvalu: 3,
  vanuatu: 3,
  israel: 3,
  japon: 3,
  china: 3,
  tailandia: 3,
  "emiratos arabes": 3,
  "emiratos arabes unidos": 3,
  libano: 3,
  india: 3,
  iran: 3,
  irak: 3,
  corea: 3,
  afganistan: 3,
  "arabia saudita": 3,
  bangladesh: 3,
  bahrein: 3,
  birmania: 3,
  myanmar: 3,
  brunei: 3,
  butan: 3,
  camboya: 3,
  catar: 3,
  "corea del norte": 3,
  "corea del sur": 3,
  filipinas: 3,
  indonesia: 3,
  jordania: 3,
  kirguistan: 3,
  kuwait: 3,
  laos: 3,
  malasia: 3,
  maldivas: 3,
  mongolia: 3,
  nepal: 3,
  oman: 3,
  pakistan: 3,
  singapur: 3,
  siria: 3,
  "sri lanka": 3,
  tayikistan: 3,
  "timor oriental": 3,
  turkmenistan: 3,
  uzbekistan: 3,
  vietnam: 3,
  yemen: 3,
  rusia: 3,
  turquia: 3,
  georgia: 3,
  kazajistan: 3,
};

const formulario = document.getElementById("formularioComision");
const paisInput = document.getElementById("pais");
const zonaDetectadaInput = document.getElementById("zonaDetectada");
const monedaDetectadaInput = document.getElementById("monedaDetectada");
const cantidadFuncionariosSelect = document.getElementById(
  "cantidadFuncionarios",
);
const cantidadDetenidosSelect = document.getElementById("cantidadDetenidos");
const contenedorFuncionarios = document.getElementById(
  "contenedorFuncionarios",
);
const templateFuncionario = document.getElementById("templateFuncionario");
const btnLimpiar = document.getElementById("btnLimpiar");
const resultado = document.getElementById("resultado");
const bloquePasajes = document.getElementById("bloquePasajes");
const bloquePasajesDetenidos = document.getElementById(
  "bloquePasajesDetenidos",
);
const bloqueCoberturaEuro = document.getElementById("bloqueCoberturaEuro");
const montoPasajesArsInput = document.getElementById("montoPasajesArs");
const montoPasajesDetenidosArsInput = document.getElementById(
  "montoPasajesDetenidosArs",
);
const cotizacionMonedaInput = document.getElementById("cotizacionMoneda");
const cotizacionUsdEurInput = document.getElementById("cotizacionUsdEur");
const textoMonedaCotizacion = document.getElementById("textoMonedaCotizacion");
const tituloPasajesDetenidos = document.getElementById(
  "tituloPasajesDetenidos",
);
const labelPasajesDetenidos = document.getElementById("labelPasajesDetenidos");
const ayudaPasajesDetenidos = document.getElementById("ayudaPasajesDetenidos");

document.addEventListener("DOMContentLoaded", () => {
  sincronizarCantidadFuncionarios(Number(cantidadFuncionariosSelect.value));
  detectarZonaYMoneda();
  actualizarBloquePasajes();
  actualizarBloquePasajesDetenidos();
  actualizarBloqueCoberturaEuro();
});

paisInput.addEventListener("input", () => {
  detectarZonaYMoneda();
  actualizarTextoCotizacion();
  actualizarBloqueCoberturaEuro();
});

cantidadFuncionariosSelect.addEventListener("change", () => {
  sincronizarCantidadFuncionarios(Number(cantidadFuncionariosSelect.value));
});

cantidadDetenidosSelect.addEventListener("change", () => {
  actualizarBloquePasajesDetenidos();
});

document.querySelectorAll('input[name="gastosErogar"]').forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    actualizarBloquePasajes();
    actualizarBloquePasajesDetenidos();
    actualizarBloqueCoberturaEuro();
  });
});

btnLimpiar.addEventListener("click", () => {
  formulario.reset();
  zonaDetectadaInput.value = "";
  monedaDetectadaInput.value = "";
  textoMonedaCotizacion.textContent = "USD/EUR";
  resultado.classList.add("oculto");
  resultado.innerHTML = "";
  cantidadFuncionariosSelect.value = "1";
  cantidadDetenidosSelect.value = "0";
  sincronizarCantidadFuncionarios(1);
  actualizarBloquePasajes();
  actualizarBloquePasajesDetenidos();
  actualizarBloqueCoberturaEuro();
});

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  calcularComision();
});

function sincronizarCantidadFuncionarios(cantidadDeseada) {
  const actual = obtenerCantidadActualFuncionarios();

  if (actual < cantidadDeseada) {
    for (let i = actual + 1; i <= cantidadDeseada; i += 1) {
      crearBloqueFuncionario(i);
    }
  } else if (actual > cantidadDeseada) {
    while (obtenerCantidadActualFuncionarios() > cantidadDeseada) {
      contenedorFuncionarios.removeChild(
        contenedorFuncionarios.lastElementChild,
      );
    }
  }

  renumerarFuncionarios();
}

function obtenerCantidadActualFuncionarios() {
  return contenedorFuncionarios.querySelectorAll(".tarjeta-funcionario").length;
}

function crearBloqueFuncionario(numero) {
  const clon = templateFuncionario.content.cloneNode(true);
  const tarjeta = clon.querySelector(".tarjeta-funcionario");
  const titulo = clon.querySelector(".titulo-funcionario");
  const selectJerarquia = clon.querySelector(".select-jerarquia");
  const inputGrupo = clon.querySelector(".input-grupo");

  tarjeta.dataset.numero = String(numero);
  titulo.textContent = `Funcionario ${numero}`;

  selectJerarquia.addEventListener("change", () => {
    const grupo = GRUPOS_POR_JERARQUIA[selectJerarquia.value] || "";
    inputGrupo.value = grupo ? `Grupo ${grupo}` : "";
  });

  contenedorFuncionarios.appendChild(clon);
}

function renumerarFuncionarios() {
  const tarjetas = contenedorFuncionarios.querySelectorAll(
    ".tarjeta-funcionario",
  );

  tarjetas.forEach((tarjeta, indice) => {
    tarjeta.dataset.numero = String(indice + 1);
    tarjeta.querySelector(".titulo-funcionario").textContent =
      `Funcionario ${indice + 1}`;
  });
}

function normalizarTexto(texto) {
  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function resolverNombrePais(texto) {
  const normalizado = normalizarTexto(texto);
  return ALIAS_PAISES[normalizado] || normalizado;
}

function detectarZonaYMoneda() {
  const paisResuelto = resolverNombrePais(paisInput.value);
  const zona = PAISES_ZONAS[paisResuelto];

  if (!zona) {
    zonaDetectadaInput.value = "";
    monedaDetectadaInput.value = "";
    actualizarTextoCotizacion();
    return null;
  }

  zonaDetectadaInput.value = `Zona ${zona}`;
  monedaDetectadaInput.value = zona === 3 ? "EUR" : "USD";
  actualizarTextoCotizacion();

  return {
    zona,
    moneda: zona === 3 ? "EUR" : "USD",
  };
}

function actualizarTextoCotizacion() {
  textoMonedaCotizacion.textContent = monedaDetectadaInput.value || "USD/EUR";
}

function obtenerCantidadDetenidos() {
  return Number(cantidadDetenidosSelect.value) || 0;
}

function obtenerTextoDetenidos(cantidad) {
  return cantidad === 1 ? "detenido" : "detenidos";
}

function obtenerGastosSeleccionados() {
  return Array.from(
    document.querySelectorAll('input[name="gastosErogar"]:checked'),
  ).map((checkbox) => checkbox.value);
}

function actualizarBloquePasajesDetenidos() {
  const mostrarPasajes = obtenerGastosSeleccionados().includes("pasajes");
  const cantidadDetenidos = obtenerCantidadDetenidos();
  const mostrar = mostrarPasajes && cantidadDetenidos > 0;
  const texto = obtenerTextoDetenidos(cantidadDetenidos);

  bloquePasajesDetenidos.classList.toggle("oculto", !mostrar);

  tituloPasajesDetenidos.textContent = `Pasaje aéreo para ${texto}`;
  labelPasajesDetenidos.textContent = `Monto total de pasaje para ${texto} (ARS)`;
  ayudaPasajesDetenidos.textContent =
    cantidadDetenidos === 1
      ? "Este importe corresponde exclusivamente al pasaje del detenido. Se muestra por separado y se suma al total general."
      : "Este importe corresponde exclusivamente a los pasajes de los detenidos. Se muestra por separado y se suma al total general.";

  if (!mostrar) {
    montoPasajesDetenidosArsInput.value = "";
  }
}

function actualizarBloquePasajes() {
  const mostrar = obtenerGastosSeleccionados().includes("pasajes");
  bloquePasajes.classList.toggle("oculto", !mostrar);

  if (!mostrar) {
    montoPasajesArsInput.value = "";
    cotizacionMonedaInput.value = "";
  }
}

function actualizarBloqueCoberturaEuro() {
  const gastos = obtenerGastosSeleccionados();
  const zonaInfo = detectarZonaYMoneda();
  const mostrar =
    gastos.includes("coberturaMedica") && zonaInfo && zonaInfo.zona === 3;

  bloqueCoberturaEuro.classList.toggle("oculto", !mostrar);

  if (!mostrar) {
    cotizacionUsdEurInput.value = "";
  }
}

function parsearHora(hora) {
  const [horas, minutos] = hora.split(":").map(Number);
  return horas * 60 + minutos;
}

function diferenciaDiasCalendario(fechaInicioStr, fechaFinStr) {
  const inicio = new Date(`${fechaInicioStr}T00:00:00`);
  const fin = new Date(`${fechaFinStr}T00:00:00`);
  return Math.floor((fin - inicio) / (1000 * 60 * 60 * 24));
}

function calcularDiasCobertura(fechaInicioStr, fechaFinStr) {
  return diferenciaDiasCalendario(fechaInicioStr, fechaFinStr) + 1;
}

function calcularDiasViaticos(
  fechaInicioStr,
  fechaFinStr,
  horaSalida,
  horaRegreso,
) {
  const diasEntreFechas = diferenciaDiasCalendario(fechaInicioStr, fechaFinStr);
  const minutosSalida = parsearHora(horaSalida);
  const minutosRegreso = parsearHora(horaRegreso);
  const mediodia = 12 * 60;

  if (diasEntreFechas === 0) {
    const fraccionIda = minutosSalida < mediodia ? 1 : 0.5;
    const fraccionRegreso = minutosRegreso > mediodia ? 1 : 0.5;
    return Math.max(fraccionIda, fraccionRegreso);
  }

  const diasIntermedios = Math.max(diasEntreFechas - 1, 0);
  const fraccionIda = minutosSalida < mediodia ? 1 : 0.5;
  const fraccionRegreso = minutosRegreso > mediodia ? 1 : 0.5;

  return diasIntermedios + fraccionIda + fraccionRegreso;
}

function calcularNochesAlojamiento(fechaInicioStr, fechaFinStr, horaRegreso) {
  const diasEntreFechas = diferenciaDiasCalendario(fechaInicioStr, fechaFinStr);
  const minutosRegreso = parsearHora(horaRegreso);
  const seisAM = 6 * 60;

  if (diasEntreFechas <= 0) {
    return 0;
  }

  let noches = diasEntreFechas;

  // La última noche solo se reconoce si el regreso es después de las 06:00.
  // Si vuelve a las 06:00 o antes, no corresponde esa última noche.
  if (minutosRegreso <= seisAM) {
    noches -= 1;
  }

  if (noches < 0) {
    noches = 0;
  }

  return noches;
}

function validarFormulario(zonaInfo) {
  const fechaInicio = document.getElementById("fechaInicio").value;
  const fechaRegreso = document.getElementById("fechaRegreso").value;
  const horaSalida = document.getElementById("horaSalida").value;
  const horaRegreso = document.getElementById("horaRegreso").value;
  const gastos = obtenerGastosSeleccionados();
  const selectsJerarquia =
    contenedorFuncionarios.querySelectorAll(".select-jerarquia");
  const cantidadDetenidos = obtenerCantidadDetenidos();

  if (!paisInput.value.trim()) {
    return "Tenés que completar el país.";
  }

  if (!zonaInfo) {
    return "El país no fue reconocido.";
  }

  if (!fechaInicio || !fechaRegreso || !horaSalida || !horaRegreso) {
    return "Tenés que completar fechas y horarios.";
  }

  if (fechaRegreso < fechaInicio) {
    return "La fecha de regreso no puede ser anterior a la fecha de inicio.";
  }

  if (fechaInicio === fechaRegreso && horaRegreso < horaSalida) {
    return "La hora de regreso no puede ser anterior a la hora de salida si es el mismo día.";
  }

  if (gastos.length === 0) {
    return "Tenés que seleccionar al menos un gasto a erogar.";
  }

  if (gastos.includes("pasajes")) {
    const montoPasajesArs = Number(montoPasajesArsInput.value);
    const cotizacionMoneda = Number(cotizacionMonedaInput.value);

    if (!montoPasajesArs || montoPasajesArs <= 0) {
      return "Tenés que ingresar el monto total de pasajes de funcionarios en pesos argentinos.";
    }

    if (!cotizacionMoneda || cotizacionMoneda <= 0) {
      return "Tenés que ingresar la cotización para convertir los pasajes.";
    }

    if (cantidadDetenidos > 0) {
      const montoPasajesDetenidosArs = Number(
        montoPasajesDetenidosArsInput.value,
      );

      if (!montoPasajesDetenidosArs || montoPasajesDetenidosArs <= 0) {
        return cantidadDetenidos === 1
          ? "Tenés que ingresar el monto del pasaje del detenido en pesos argentinos."
          : "Tenés que ingresar el monto total de pasajes de los detenidos en pesos argentinos.";
      }
    }
  }

  if (gastos.includes("coberturaMedica") && zonaInfo.zona === 3) {
    const valorDiarioCoberturaEur = Number(cotizacionUsdEurInput.value);

    if (!valorDiarioCoberturaEur || valorDiarioCoberturaEur <= 0) {
      return "Tenés que ingresar el valor diario en EUR equivalente a los 9 USD de cobertura médica.";
    }
  }

  for (const select of selectsJerarquia) {
    if (!select.value) {
      return "Todos los funcionarios deben tener jerarquía seleccionada.";
    }
  }

  return "";
}

function formatearMonto(valor, moneda) {
  return `${valor.toFixed(2)} ${moneda}`;
}

function formatearMontoArs(valor) {
  return `${valor.toFixed(2)} ARS`;
}

function calcularMontoConvertidoDesdeArs(montoArs, cotizacionMoneda) {
  if (montoArs <= 0 || cotizacionMoneda <= 0) {
    return 0;
  }

  return montoArs / cotizacionMoneda;
}

function obtenerCoberturaDiaria(zonaInfo) {
  if (zonaInfo.zona === 3) {
    return Number(cotizacionUsdEurInput.value) || 0;
  }

  return COBERTURA_MEDICA_DIARIA_USD;
}

function obtenerDetalleCoberturaDiaria(zonaInfo) {
  if (zonaInfo.zona === 3) {
    const valorDiarioCoberturaEur = Number(cotizacionUsdEurInput.value) || 0;
    return `${valorDiarioCoberturaEur.toFixed(2)} EUR`;
  }

  return `9 USD`;
}

function calcularComision() {
  const zonaInfo = detectarZonaYMoneda();
  const error = validarFormulario(zonaInfo);

  if (error) {
    resultado.classList.remove("oculto");
    resultado.innerHTML = `<p class="error">${error}</p>`;
    return;
  }

  const fechaInicio = document.getElementById("fechaInicio").value;
  const fechaRegreso = document.getElementById("fechaRegreso").value;
  const horaSalida = document.getElementById("horaSalida").value;
  const horaRegreso = document.getElementById("horaRegreso").value;
  const gastos = obtenerGastosSeleccionados();
  const tarjetasFuncionarios = contenedorFuncionarios.querySelectorAll(
    ".tarjeta-funcionario",
  );
  const cantidadDetenidos = obtenerCantidadDetenidos();

  const diasViaticos = calcularDiasViaticos(
    fechaInicio,
    fechaRegreso,
    horaSalida,
    horaRegreso,
  );
  const nochesAlojamiento = calcularNochesAlojamiento(
    fechaInicio,
    fechaRegreso,
    horaRegreso,
  );
  const diasCobertura = calcularDiasCobertura(fechaInicio, fechaRegreso);

  const montoPasajesFuncionariosArs = Number(montoPasajesArsInput.value) || 0;
  const montoPasajesDetenidosArs =
    Number(montoPasajesDetenidosArsInput.value) || 0;
  const cotizacionMoneda = Number(cotizacionMonedaInput.value) || 0;

  const montoPasajesFuncionariosConvertido = gastos.includes("pasajes")
    ? calcularMontoConvertidoDesdeArs(
        montoPasajesFuncionariosArs,
        cotizacionMoneda,
      )
    : 0;

  const montoPasajesDetenidosConvertido =
    gastos.includes("pasajes") && cantidadDetenidos > 0
      ? calcularMontoConvertidoDesdeArs(
          montoPasajesDetenidosArs,
          cotizacionMoneda,
        )
      : 0;

  const coberturaDiaria = obtenerCoberturaDiaria(zonaInfo);
  const detalleCoberturaDiaria = obtenerDetalleCoberturaDiaria(zonaInfo);

  let totalPasajesFuncionarios = 0;
  let totalPasajesDetenidos = 0;
  let totalViaticos = 0;
  let totalAlojamiento = 0;
  let totalCoberturaMedica = 0;
  let htmlFuncionarios = "";

  tarjetasFuncionarios.forEach((tarjeta, indice) => {
    const jerarquia = tarjeta.querySelector(".select-jerarquia").value;
    const grupo = GRUPOS_POR_JERARQUIA[jerarquia];
    const tarifas = TARIFAS[grupo][zonaInfo.zona];

    const montoViaticos = gastos.includes("viaticos")
      ? diasViaticos * tarifas.viatico
      : 0;
    const montoAlojamiento = gastos.includes("alojamiento")
      ? nochesAlojamiento * tarifas.alojamiento
      : 0;
    const montoCobertura = gastos.includes("coberturaMedica")
      ? diasCobertura * coberturaDiaria
      : 0;

    totalViaticos += montoViaticos;
    totalAlojamiento += montoAlojamiento;
    totalCoberturaMedica += montoCobertura;

    const subtotalFuncionario =
      montoViaticos + montoAlojamiento + montoCobertura;

    htmlFuncionarios += `
      <div class="resultado-bloque">
        <h4>Funcionario ${indice + 1}</h4>
        <p><strong>Jerarquía:</strong> ${jerarquia}</p>
        <p><strong>Grupo:</strong> ${grupo}</p>
        <p><strong>Viáticos:</strong> ${
          gastos.includes("viaticos")
            ? `${diasViaticos} x ${tarifas.viatico} = ${formatearMonto(montoViaticos, zonaInfo.moneda)}`
            : "No seleccionado"
        }</p>
        <p><strong>Alojamiento:</strong> ${
          gastos.includes("alojamiento")
            ? `${nochesAlojamiento} x ${tarifas.alojamiento} = ${formatearMonto(montoAlojamiento, zonaInfo.moneda)}`
            : "No seleccionado"
        }</p>
        <p><strong>Cobertura médica:</strong> ${
          gastos.includes("coberturaMedica")
            ? `${diasCobertura} x ${detalleCoberturaDiaria} = ${formatearMonto(montoCobertura, zonaInfo.moneda)}`
            : "No seleccionado"
        }</p>
        <p><strong>Pasajes:</strong> ${
          gastos.includes("pasajes")
            ? "Incluido solo en total general"
            : "No seleccionado"
        }</p>
        <p><strong>Subtotal funcionario:</strong> ${formatearMonto(subtotalFuncionario, zonaInfo.moneda)}</p>
      </div>
    `;
  });

  if (gastos.includes("pasajes")) {
    totalPasajesFuncionarios = montoPasajesFuncionariosConvertido;
    totalPasajesDetenidos = montoPasajesDetenidosConvertido;
  }

  const totalGeneral =
    totalPasajesFuncionarios +
    totalPasajesDetenidos +
    totalViaticos +
    totalAlojamiento +
    totalCoberturaMedica;

  const textoPasajesDetenidos =
    cantidadDetenidos === 1 ? "Pasaje detenido" : "Pasajes detenidos";

  resultado.classList.remove("oculto");
  resultado.innerHTML = `
    <h2>Resultado</h2>

    <div class="resultado-bloque">
      <p><strong>País:</strong> ${paisInput.value.trim()}</p>
      <p><strong>Zona:</strong> Zona ${zonaInfo.zona}</p>
      <p><strong>Moneda:</strong> ${zonaInfo.moneda}</p>
      <p><strong>Período:</strong> ${fechaInicio} al ${fechaRegreso}</p>
      <p><strong>Horario:</strong> ${horaSalida} a ${horaRegreso}</p>
      <p><strong>Días de viáticos:</strong> ${diasViaticos}</p>
      <p><strong>Noches de alojamiento:</strong> ${nochesAlojamiento}</p>
      <p><strong>Días de cobertura médica:</strong> ${diasCobertura}</p>
      <p><strong>Funcionarios:</strong> ${tarjetasFuncionarios.length}</p>
      <p><strong>Detenidos:</strong> ${cantidadDetenidos}</p>
    </div>

    <h3>Detalle por funcionario</h3>
    <div class="resultado-grid">
      ${htmlFuncionarios}
    </div>

    <div class="total-general">
      <h3>Totales generales</h3>
      <p><strong>Total pasajes funcionarios:</strong> ${
        gastos.includes("pasajes")
          ? `${formatearMonto(totalPasajesFuncionarios, zonaInfo.moneda)} <br><small>Convertido desde ${formatearMontoArs(montoPasajesFuncionariosArs)} con cotización ${cotizacionMoneda}</small>`
          : formatearMonto(totalPasajesFuncionarios, zonaInfo.moneda)
      }</p>
      <p><strong>${textoPasajesDetenidos}:</strong> ${
        gastos.includes("pasajes") && cantidadDetenidos > 0
          ? `${formatearMonto(totalPasajesDetenidos, zonaInfo.moneda)} <br><small>Convertido desde ${formatearMontoArs(montoPasajesDetenidosArs)} con cotización ${cotizacionMoneda}</small>`
          : formatearMonto(totalPasajesDetenidos, zonaInfo.moneda)
      }</p>
      <p><strong>Total viáticos:</strong> ${formatearMonto(totalViaticos, zonaInfo.moneda)}</p>
      <p><strong>Total alojamiento:</strong> ${formatearMonto(totalAlojamiento, zonaInfo.moneda)}</p>
      <p><strong>Total cobertura médica:</strong> ${
        gastos.includes("coberturaMedica")
          ? `${formatearMonto(totalCoberturaMedica, zonaInfo.moneda)} <br><small>Base diaria: ${detalleCoberturaDiaria}</small>`
          : formatearMonto(totalCoberturaMedica, zonaInfo.moneda)
      }</p>
      <p><strong>TOTAL GENERAL:</strong> ${formatearMonto(totalGeneral, zonaInfo.moneda)}</p>
    </div>
  `;
}

/* =========================
   BURBUJA ARRASTRABLE
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const burbuja = document.getElementById("burbujaConversor");

  if (!burbuja) return;

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;
  let moved = false;

  // Cargar posición guardada
  const savedX = localStorage.getItem("burbujaX");
  const savedY = localStorage.getItem("burbujaY");

  if (savedX && savedY) {
    burbuja.style.left = savedX + "px";
    burbuja.style.top = savedY + "px";
    burbuja.style.transform = "none";
  }

  burbuja.addEventListener("mousedown", (e) => {
    isDragging = true;
    moved = false;

    const rect = burbuja.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    moved = true;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    burbuja.style.left = `${x}px`;
    burbuja.style.top = `${y}px`;
    burbuja.style.transform = "none";
  });

  document.addEventListener("mouseup", () => {
    if (!isDragging) return;

    isDragging = false;

    // Guardar posición
    localStorage.setItem("burbujaX", burbuja.offsetLeft);
    localStorage.setItem("burbujaY", burbuja.offsetTop);

    // Si no se movió → es click
    if (!moved) {
      window.open(
        "https://www.aduanaargentina.com/conversor-de-monedas/",
        "_blank",
      );
    }
  });
});
