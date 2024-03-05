import pg from "pg"
// Importanto drive de conexção com Postgres

// definindo  url de conexão com o banco de dados
const database =  new pg.Client("postgres://rwiemqia:I_jfseoXMJlDLH9KypxxM7CLlpGyZFN9@kesavan.db.elephantsql.com/rwiemqia")

//abrindo conexão com banco de dados
database.connect((erro) => {
    if(erro){
        return console.log("Não foi possivel conectar")
    }else{
        console.log("Conectado ao ElephantSQL")
    }
})

//Exportando conexão para ser utilizada em outras partes do projeto
export default database