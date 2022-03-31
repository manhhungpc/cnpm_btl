const Reviews = (sequelize, Sequelize) => {
  const Review = sequelize.define("reviews", {
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
