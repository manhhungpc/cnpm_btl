const Users = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    username: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    email: Sequelize.STRING,
    password: Sequelize.TEXT,
    phone_number: Sequelize.INTEGER,
    address: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    area: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    skills: Sequelize.STRING,
    votes: Sequelize.INTEGER,
  });
  return User;
};

export default Users;
