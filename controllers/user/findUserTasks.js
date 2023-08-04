const { User, Task } = require("../../models");
const { errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    // find user
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: errorMsg.user.NOTFOUND,
      });
    }

    // find all Tasks
    const userTasks = await Task.findAll({
      where: { user_id: user.id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.status(200).json({
      status: "success",
      userTasks,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
