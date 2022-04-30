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
    time_required: {
      type: Sequelize.DATE,
      get() {
        return this.getDataValue("time_required").toLocaleString("en-GB", { timeZone: "UTC" });
      },
    },
    available: Sequelize.BOOLEAN,
    fee: Sequelize.STRING,
    notif: Sequelize.STRING,
  });

  return Job;
};

export default Jobs;
