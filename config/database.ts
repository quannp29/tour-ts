import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  `${process.env.DATABASE_NAME}`,
  `${process.env.DATABASE_USERNAME}`,
  `${process.env.DATABASE_PASSWORD}`,
  {
    host: `${process.env.DATABASE_HOST}`,
    dialect: "mysql"
  }
);

sequelize.authenticate().then(() => {
  console.log("Connected DB");
}).catch((error) => {
  console.log("Connected faild", error);
});

export default sequelize;