// destructury: del comando inicial extraigo la 3era y 4ta palabra
const [, , method, resource] = process.argv;

// funcion reutilizable para obtener el json
async function fetchData(path) {
  // Hacemos la petición con fetch
  const response = await fetch("https://fakestoreapi.com/" + path);
  return await response.json();
}

if (method && resource) {
  // .toUpperCase() convierte todo a mayuscula
  // "get" => "GET", "poST" => "POST"
  if (method.toUpperCase() !== "GET") {
    console.error("solo GET esta soportado");
  }

  // usamos la funcion de arriba pasandole resource como parametro
  fetchData(resource)
    .then(data => {
      console.log([...data]);
    })
    .catch(err => {
      console.error('Error:', err.message);
    })
    .finally(() => process.exit());
}