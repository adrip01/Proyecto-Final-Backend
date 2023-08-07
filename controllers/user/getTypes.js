const { errorMsg } = require("../../_utils/messages");
const { Type } = require("../../models");

module.exports = async (req, res) => {
  try {
    const types = await Type.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json({
      status: "success",
      results: types,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
