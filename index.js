// destructury: del comando inicial extraigo la 3era y 4ta palabra
const [, , method, resource] = process.argv;

// funcion para obtener datos
// path => [3] palabra del comando
async function getData(path) {
  const response = await fetch("https://fakestoreapi.com/" + path);
  const data = await response.json();
  console.log(data);
}

// funcion para crear un dato en el servidor
// path => [3] palabra del comando
// body => objeto conformado por:
//   title => [4] palabra del comando
//   price => [5] palabra del comando
//   category => [6] palabra del comando
async function postData(path, body) {
  const response = await fetch("https://fakestoreapi.com/" + path, {
    method: "POST",
    body: body
  });

  const data = await response.json();
  console.log(data);
}

// funcion para eliminar un dato en el servidor
// path => [3] palabra del comando
// id => [4] palabra del comando
async function deleteData(path, id) {
  const response = await fetch("https://fakestoreapi.com/" + path + "/" + id, {
    method: "DELETE",
  });

  const data = await response.json();
  console.log(data);
}

if (method && resource) {
  if (method.toUpperCase() === "GET") {
    getData(resource);
  }

  if (method.toUpperCase() === "POST") {
    const title = process.argv[4];
    const price = process.argv[5];
    const category = process.argv[6];

    const body = {
      title,
      price,
      category
    };

    postData(resource, body);
  }

  if (method.toUpperCase() === "DELETE") {
    const id = process.argv[4];

    deleteData(resource, id);
  }
}