import {Sequelize} from "sequelize-typescript";
import Config from "../config";

export default new Sequelize({
    database: Config.db.db,
    dialect: "postgres",
    host: Config.db.server,
    modelPaths: [__dirname + "/../entity/"],
    password: Config.db.password,
    port: Config.db.port,
    username: Config.db.user,
});
