const user = [
  { nombre: "Enoc", apellido: "Pineda", edad: 24 },
  { nombre: "Pineda", apellido: "Aguirre", edad: 23 },
];

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);
const head = (xs) => xs[0];
const filter = (f) => xs.filter(f);
const formateo = (x) => ({
  nombreCompleto: `${x.nombre} ${x.apellido}`,
  edad: x.edad,
});

const formato = (x) => `${x.nombreCompleto} tiene ${x.edad}`;

const traerPrimerInfante = compose(
  formato,
  formateo,
  head,
  filter((x) => x.edad < 24)
);
