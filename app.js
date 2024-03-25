const mongoose = require('mongoose');
const database = "mongodb://localhost:27017/practica";
// con un /name despues de 27017, hara el nombre de la base de datos

//la constanre db debe de ser la que se use en connect
//nota mental... no usar comillas en el connect y no usar punto y coma
mongoose.connect(database)

//el then catch es para poder verificar la conexión
    .then(() => {
        console.log("Conexión Exitosa!")
    })
    .catch((err) => {
        console.log("Conexión Fallida...")
    })

//aqui se crearia el esquema de la base de datos
const practiceSchemas = new mongoose.Schema(
    {
        username: {
            type: String
        },
        number: {
            type: Number
        },
        email: {
            type: String
        },
        birthdate:{
            type: Date
        },
        password:{
            type: String
        }
    }
)

//ahora se hara el modelo con el nombre del esquema y su comentario
const practice = new mongoose.model('practica de mongoDB', practiceSchemas);

//ahora haremos una funcion para crear registros, primero parentesis luego llaves
practice.create(
    {
        username: 'Emilio',
        number: 4494375085,
        email: 'utm22030756@utma.edu.mx',
        birthdate: new Date ('2003, 03, 01'),
        password: 'quesito123'
    }
)