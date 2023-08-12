const { User, Task } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId } = req;
  const { description, target_timer, limit_date, limit_time, is_completed } =
    req.body;
  const taskId = req.params.id;

  try {
    let task;

    task = await Task.findOne({ where: { id: taskId } });

    if (!task) {
      return res.status(404).json({
        status: "error",
        message: errorMsg.task.NOTFOUND,
      });
    }

    if (task.user_id !== userId && userRole !== "admin") {
      return res.status(403).json({
        status: "error",
        message: errorMsg.task.NOAUTH,
      });
    }

    const updateTask = await Task.update(
      {
        description: description,
        target_timer: target_timer,
        limit_date: limit_date,
        limit_time: limit_time,
        is_completed: is_completed,
      },
      {
        where: {
          id: taskId,
        },
      }
    );

    updateTask;

    const updatedTask = await Task.findOne({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: { id: taskId },
    });

    res.status(200).json({
      message: successMsg.task.UPDATE,
      results: updatedTask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
