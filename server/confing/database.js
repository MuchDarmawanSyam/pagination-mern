import { Sequelize } from "sequelize";


const db = new Sequelize('mern_pagination_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;