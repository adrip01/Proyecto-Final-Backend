const { User, Card } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId } = req;
  const { user_id, type_id, title, category, is_completed } = req.body;

  try {
    let card;

    // is the user a User?
    const isUser = await User.findOne({ where: { id: userId } });

    if (isUser) {
      card = await Card.create({
        user_id: isUser.id,
        type_id,
        title,
        category,
        is_completed,
      });
    } else {
      // for other roles, insert manually user_id and type_id, both required
      if (!user_id) {
        return res.status(400).json({
          status: "error",
          message: errorMsg.card.REQUIERED,
        });
      }

      card = await Card.create({
        user_id,
        type_id,
        title,
        category,
        is_completed,
      });
    }

    res.status(200).json({
      message: successMsg.card.CREATE,
      card,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
