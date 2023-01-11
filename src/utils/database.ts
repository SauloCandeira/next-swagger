import { Pool } from 'pg'

let conn: any;

if (!conn) {
    conn = new Pool({
        user: 'postgres',
        password: 'root',
        host: 'localhost',
        database: 'postgres'
    })
}

export {conn};
