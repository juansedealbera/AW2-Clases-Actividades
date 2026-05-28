import {Pool} from 'pg'


const bdConfig = {
    host: process.env.BD_HOST || 'localhost',
    database:process.env.BD_BD,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    port: process.env.BD_PORT
}

const pg = new Pool(bdConfig)

export default pg