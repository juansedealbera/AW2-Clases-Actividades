import {Pool} from 'pg';
import dotenv from 'dotenv'
dotenv.config()
//localhost
const pool = new Pool({
    host: '192.169.0.200',
    user: 'root',
    password: 'pass',
    database: 'admin',
    port: 5432,
})

export default pool