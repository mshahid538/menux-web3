const useSession = require("../models/userSession");
const api = process.env.API_URL;

// http://localhost:5000/categories/
const getUserSession = async (req, res) => {
  try {
    const userSession = await useSession.find();
    res.send(userSession);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const values = [
  "language",
  "platform",
  "os",
  "cpuCores",
  "isAuthoritative",
  "silkAccelerated",
  "isKindleFire",
  "isLinux64",
  "isMac",
  "isiPad",
  "isiPhone",
  "isiPod",
  "isSmartTV",
  "pixelDepth",
  "isTouchScreen",
  "restaurantName",
  "allergies",
  "dietary",
  "menuDrinks",
  "menuFood",
  "businessid",
  "ipAddress",
  "selectedProducts",
  "checkDevice",
  "uuId",
];

// http://localhost:5000/categories
const addUserSession = async (req, res) => {
  debugger;
  try {
    req.body.created_at = new Date();
    const createdItem = await useSession.create({
      language: req.body.language,
      platform: req.body.platform,
      os: req.body.os,
      cpuCores: req.body.cpuCores,
      isAuthoritative: req.body.isAuthoritative,
      silkAccelerated: req.body.silkAccelerated,
      isKindleFire: req.body.isKindleFire,
      isLinux64: req.body.isLinux64,
      isMac: req.body.isMac,
      isiPad: req.body.isiPad,
      isiPhone: req.body.isiPhone,
      isiPod: req.body.isiPod,
      isSmartTV: req.body.isSmartTV,
      pixelDepth: req.body.pixelDepth,
      isTouchScreen: req.body.isTouchScreen,
      restaurantName: req.body.restaurantName,
      allergies: req.body.allergies,
      dietary: req.body.dietary,
      menuDrinks: req.body.menuDrinks,
      menuFood: req.body.menuFood,
      businessid: req.body.businessid,
      ipAddress: req.body.ipAddress,
      selectedProducts: req.body.selectedProducts,
      checkDevice: req.body.checkDevice,
      uuId: req.body.uuId,
    });
    res.status(200).json(createdItem);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { getUserSession, addUserSession };
