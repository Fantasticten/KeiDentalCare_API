module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    phone_number: {
      type: Sequelize.STRING,
    },
    profile_photo: {
      type: Sequelize.STRING,
    },
    tanggal_lahir: {
      type: Sequelize.STRING,
    },
    jenis_kelamin: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
