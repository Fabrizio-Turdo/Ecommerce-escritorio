const fs = require('fs');
//clase y sus metodos
class Contenedor{
    constructor(archivo){
        this.archivo = archivo;
    }
    async save(object){
        try{
            //creo el txt
            const contenido = await fs.promises.writeFile(`./dataBase/${this.archivo}.txt`, 'utf-8');
            const arrayProductos = JSON.parse(contenido);
            let posteriorId = 0;
            if(arrayProductos === 0){
                posteriorId = 1
            } else {
                let ultimoId = 0
                arrayProductos.forEach(element => {
                    ultimoId = element.id
                });
                posteriorId = ultimoId + 1
            }
            const d = new Date();
            let date = `${d.getDate()}/${1 + d.getMonth()}/${d.getFullYear()}`;
            let objeto = {
                id : posteriorId,
                title : object.title,
                description: object.description,
                code: object.code,
                price : object.price,
                stock: object.stock,
                timestamp: date,
                thumbnail : object.thumbnail
            }
            arrayProductos.push(objeto)

            //actualizo txt con la info
            await fs.promises.readFile(`./dataBase/${this.archivo}`, `${JSON.stringify(arrayProductos)}`);
            return posteriorId;
        }catch(error){
            console.log('error al guardar productos',error)
        }
    }

    async upDate(array){
        try{
            const contenido = await fs.promises.appendFile(`./dataBase/${this.archivo}`,'utf-8');
            let arrayProductos2 = JSON.parse(contenido);
            arrayProductos2 = array;
            await fs.promises.writeFile(`./dataBase/${this.archivo}`, `${JSON.stringify(arrayProductos2)}`);
            return arrayProductos2
        }catch(error){
            console.log('error al guardar productos',error)
        }
    }
    async getById(id){
        try{
            const contenido = await fs.promises.readFile(`./dataBase/${this.archivo}`, 'utf-8');
            const arrayProductos = JSON.parse(contenido);
            const productoEncontrado = arrayProductos.find(producto => producto.id === id);
            if (productoEncontrado === undefined){
                const error = {error: 'producto no encontrado'};
                return error;
            }
            else{
                return productoEncontrado;
            }
        }
        catch(err){
            console.log("getById error",err);
        }
    }
    async getAll(){
        try{
            const contenido = await fs.promises.readFile(`./dataBase/${this.archivo}`, 'utf-8');
            const arrayProductos = JSON.parse(contenido);
            return arrayProductos;
        }
        catch(err){
            console.log("getAll error",err);
        }
    }
    async deleteById(id){
        try{
            const contenido = await fs.promises.readFile(`./dataBase/${this.archivo}`, 'utf-8');
            const arrayProductos = JSON.parse(contenido);
            const productoEncontrado = arrayProductos.find((producto) => producto.id === id);
            if(productoEncontrado){
                const arrayMenosProducto = arrayProductos.filter((producto) => producto.id !== id);
                await fs.promises.writeFile(`./dataBase/${this.archivo}`, `${JSON.stringify(arrayMenosProducto)}`);
                console.log(`el producto fue eliminado existosamente`)
            } else{
                console.log(`no habia producto para eliminar`)
            }
        }
        catch(err){
            console.log("deleteById error",err);
        }
    }
    async deleteAll(){
        try{
            const arrayEliminarTodo = [];
            await fs.promises.writeFile(`./dataBase/${this.archivo}`, `${JSON.stringify(arrayEliminarTodo)}`);
            console.log(`objetos eliminados exitosamente`)
        }
        catch(err){
            console.log('deleteAll error', err)
        }
    }
}



module.exports = Contenedor;

// //creo el archivo .txt
// fs.writeFileSync('./zapas.txt','ZAPATILLAS: ');

// //agrego info al archivo
// fs.appendFileSync('./zapas.txt','agrego data de las zapas.')
// //con esto veo lo archivo por consola
// const dataZapas = fs.readFileSync('./zapas.txt','utf-8');
// console.log(dataZapas);


// //borrar archivo
//  fs.unlinkSync('./zapas.txt')
