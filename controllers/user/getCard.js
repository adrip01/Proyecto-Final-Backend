const { Card } = require("../../models");
const { errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const card = await Card.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id: id },
    });

    res.status(200).json({
      status: "success",
      card,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: errorMsg.card.GETONE,
    });
  }
};
