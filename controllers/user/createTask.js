const { User, Task } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId } = req;
  const { user_id, description, limit_date, limit_time, is_completed } =
    req.body;

  try {
    let task;

    // is the user a User?
    const isUser = await User.findOne({ where: { id: userId } });

    if (isUser) {
      task = await Task.create({
        user_id: isUser.id,
        description,
        limit_date,
        limit_time,
        is_completed,
      });
    } else {
      // for other roles, insert manually user_id
      if (!user_id) {
        return res.status(400).json({
          status: "error",
          message: errorMsg.Task.REQUIERED,
        });
      }

      task = await Task.create({
        user_id,
        description,
        limit_date,
        limit_time,
        is_completed,
      });
    }

    res.status(200).json({
      message: successMsg.task.CREATE,
      task,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
