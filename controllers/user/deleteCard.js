const { User, Card, Task } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId, userRole } = req;
  const cardId = req.params.id;

  try {
    let card;

    // getting the card by id
    card = await Card.findOne({ where: { id: cardId } });

    if (!card) {
      return res.status(404).json({
        status: "error",
        message: errorMsg.card.NOTFOUND,
      });
    }

    // check if the user is the User from the Card
    if (userId === card.user_id || userRole === "admin") {
      const tasks = await card.getTasks();

      await Promise.all(
        tasks.map(async (task) => {
          await task.destroy();
        })
      );

      await Promise.all(
        tasks.map(async (task) => {
          await card.removeTask(task);
        })
      );

      await card.destroy();

      return res.status(200).json({
        message: successMsg.card.DELETE,
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
