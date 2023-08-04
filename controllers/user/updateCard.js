const { User, Card } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { userId, userRole } = req;
  const { type_id, title, category, is_completed } = req.body;
  const cardId = req.params.id;

  try {
    let card;

    card = await Card.findOne({ where: { id: cardId } });

    if (!card) {
      return res.status(404).json({
        status: "error",
        message: errorMsg.card.NOTFOUND,
      });
    }

    if (card.user_id !== userId && userRole !== "admin") {
      return res.status(403).json({
        status: "error",
        message: errorMsg.card.NOAUTH,
      });
    }

    const updateCard = await Card.update(
      {
        type_id: type_id,
        title: title,
        category: category,
        is_completed: is_completed,
      },
      {
        where: {
          id: cardId,
        },
      }
    );

    updateCard;

    const updatedCard = await Card.findOne({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: { id: cardId },
    });

    res.status(200).json({
      message: successMsg.card.UPDATE,
      results: updatedCard,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
