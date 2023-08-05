const { User, Card, Task } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId, userRole } = req;
  const taskId = req.params.id;

  try {
    let task;

    // getting the apointment by id
    task = await Task.findOne({ where: { id: taskId } });

    if (!task) {
      return res.status(404).json({
        status: "error",
        message: errorMsg.task.NOTFOUND,
      });
    }

    // check if the user is the User from the task
    if (userId === task.user_id || userRole === "admin") {
      await task.destroy();

      return res.status(200).json({
        message: successMsg.task.DELETE,
      });
    }

    return res.status(403).json({
      status: "error",
      message: errorMsg.authentication.NOAUTH,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
