const Reviews = (sequelize, Sequelize) => {
  const Review = sequelize.define("reviews", {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    review: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    target: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    stars: Sequelize.INTEGER,
    pleasure: Sequelize.BOOLEAN,
  });

  return Review;
};

export default Reviews;
