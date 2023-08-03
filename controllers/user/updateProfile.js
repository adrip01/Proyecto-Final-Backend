const { errorMsg, successMsg } = require("../../_utils/messages");
const { User, Role } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { userId } = req;
    const { user_name, first_name, last_name, email, birthday } = req.body;

    const user = await User.findOne({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: errorMsg.user.NOTFOUND,
      });
    }

    const updateUser = await User.update(
      {
        user_name: user_name || user.user_name,
        first_name: first_name || user.first_name,
        user_last_name: last_name || user.last_name,
        email: email || user.email,
        birthday: birthday || user.birthday,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    updateUser;

    const updatedUser = await User.findOne({
      attributes: {
        exclude: ["id", "role_id", "password", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Role,
          as: "role",
          attributes: { exclude: ["id", "createdAt", "updatedAt"] },
        },
      ],
      where: { id: userId },
    });

    res.status(200).json({
      message: successMsg.user.UPDATE,
      results: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: errorMsg.user.UPDATE,
    });
  }
};
