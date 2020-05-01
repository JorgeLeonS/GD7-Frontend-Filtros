const FormaBasePath = "/Cortes/Forma";
const ColorBasePath = "/Cortes/Color";
const ClaridadBasePath = "/Cortes/Claridad";
const CorteBasePath = "/Cortes/Corte";
const QuilatajeBasePath = "/Cortes/Quilataje";

const ImgsForma = [
    `${FormaBasePath}/redondo.png`,
    `${FormaBasePath}/princesa.png`,
    `${FormaBasePath}/esmeralda.png`,
    `${FormaBasePath}/ovalo.png`,
    `${FormaBasePath}/marquesa.png`,
    `${FormaBasePath}/pera.png`,
    `${FormaBasePath}/asscher.png`,
    `${FormaBasePath}/corazon.png`,
    `${FormaBasePath}/cojijn.png`,
    `${FormaBasePath}/baguette.png`,
    `${FormaBasePath}/trillon.png`,
    `${FormaBasePath}/radiante.png`,
];

const ValorForma = [
    "REDONDO",
    "PRINCESA",
    "ESMERALDA",
    "ÓVALO",
    "MARQUESA",
    "PERA",
    "ASSCHER",
    "CORAZÓN",
    "COJÍN",
    "BAGUETTE",
    "TRILLÓN",
    "RADIANTE",
];

const ImgsColor = [
    `${ColorBasePath}/incoloro.png`,
    `${ColorBasePath}/casi-incoloro.png`,
    `${ColorBasePath}/ligeramente-amarillo.png`,
    `${ColorBasePath}/amarillo-claro.png`,
];

const ValorColor = [
    "TRANSPARENTE",
    "CASI INCOLORO",
    "LIGERAMENTE AMARILLO",
    "AMARILLO CLARO",
];

const ImgsClaridad = [
    `${ClaridadBasePath}/perfecta.png`,
    `${ClaridadBasePath}/imperfecciones-no-visibles.png`,
    `${ClaridadBasePath}/imperfecciones-10x.png`,
    `${ClaridadBasePath}/imperfecciones-simple-vista.png`,
];

const ValorClaridad = [
    "PERFECTA",
    "IMPERFECCIONES NO VISIBLES",
    "IMPERFECCIONES VISIBLES A 10X",
    "IMPERFECCIONES VISIBLES A SIMPLE VISTA",
];

const ImgsCorte = [
    `${CorteBasePath}/excelente.png`,
    `${CorteBasePath}/muy-bueno.png`,
    `${CorteBasePath}/bueno.png`,
    `${CorteBasePath}/regular.png`,
];

const ValorCorte = [
    "EXCELENTE (MAXIMO BRILLO)",
    "MUY BUENO (MUY BRILLANTE",
    "BUENO (BRILLANTE)",
    "REGULAR (POCO BRILLANTE)",
];

const ImgsQuilataje = [
    `${QuilatajeBasePath}/pequeno.png`,
    `${QuilatajeBasePath}/grande.png`,
]

export{
    ImgsForma,
    ValorForma,
    ImgsColor,
    ValorColor,
    ImgsClaridad,
    ValorClaridad,
    ImgsCorte,
    ValorCorte,
};