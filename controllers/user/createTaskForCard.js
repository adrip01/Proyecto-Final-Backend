const { User, Task, CardTask, Card } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId } = req;
  const { id } = req.params;
  const {
    user_id,
    description,
    target_timer,
    limit_date,
    limit_time,
    is_completed,
    card_id = id,
  } = req.body;

  try {
    let task;
    let card_task;

    const cardExists = await Card.findOne({ where: { id: card_id } });
    if (!cardExists) {
      return res.status(404).json({
        status: "error",
        message: errorMsg.card.NOTFOUND,
      });
    }

    // is the user a User?
    const isUser = await User.findOne({ where: { id: userId } });

    if (isUser) {
      console.log("card_id:", card_id);//TODO
      task = await Task.create({
        user_id: isUser.id,
        description,
        target_timer,
        limit_date,
        limit_time,
        is_completed,
      });
      console.log("task created:", task.dataValues);//TODO

      card_task = await CardTask.create({
        card_id: card_id,
        task_id: task.id,
      });
      console.log("CardTask created:", card_task.dataValues);
    } else {
      // for other roles, insert manually user_id
      if (!user_id) {
        return res.status(400).json({
          status: "error",
          message: errorMsg.task.REQUIERED,
        });
      }
    }
    res.status(200).json({
      message: successMsg.task.CREATE,
      task,
      card_task,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
