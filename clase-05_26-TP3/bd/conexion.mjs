import pg from 'pg'

//Clase Pool -> hacer consultas simples
const pool = new pg.Pool({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'soltec',
    port: 5432
})

export default pool