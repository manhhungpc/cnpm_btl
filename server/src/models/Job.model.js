const Jobs = (sequelize, Sequelize) => {
  const Job = sequelize.define("jobs", {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    title: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    content: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    skill_required: Sequelize.STRING,
    area: Sequelize.STRING,
    contact: Sequelize.STRING,
    type: Sequelize.INTEGER,
    time_required: Sequelize.DATE,
    available: Sequelize.BOOLEAN,
    fee: Sequelize.STRING,
  });

  return Job;
};

export default Jobs;
