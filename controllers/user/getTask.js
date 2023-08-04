const { Task } = require("../../models");
const { errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id: id },
    });

    res.status(200).json({
      status: "success",
      task,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: errorMsg.task.GETONE,
    });
  }
};
