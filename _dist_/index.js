

const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app')


//intl
//1--format-monedas

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
    return price;
}



//web api
// Conectarnos al server
window.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
//JSON -> Data -> REnderizar infro browser
    .then((responseJson) => {
        const todosLosItems = [];
        responseJson.data.forEach((item) => {
            //Creo una imagen
            const imagen = document.createElement('img');
            imagen.src = `${baseUrl}${item.image}`;
            imagen.className = 'avocado-img'
            //Crear titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = 'muy-grande'; //como uso tailwind puedo poner 'text-2xl' y ya le aplica una letra grande. Tambien puedo ir pegando varias clases de tailwind para darle estilo.
            //crear precio 
            const price = document.createElement('div');
            price.textContent = formatPrice(item.price);

            const container = document.createElement('div');
            container.append(imagen, title, price)

            todosLosItems.push(container);
        });

        appNode.append(...todosLosItems);
    }) 
