const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  cpuCores: Number,
  isAuthoritative: Boolean,
  isDesktop: Boolean,
  isKindleFire: Boolean,
  isLinux: Boolean,
  isLinux64: Boolean,
  isMac: Boolean,
  isMobile: Boolean,
  isSmartTV: Boolean,
  isTablet: Boolean,
  isTouchScreen: Boolean,
  isWindows: Boolean,
  isiPad: Boolean,
  isiPhone: Boolean,
  isiPod: Boolean,
  language: String,
  os: String,
  pixelDepth: Number,
  platform: String,
  silkAccelerated: Boolean,
  uuId: String
});

module.exports = mongoose.model('userSession', userSchema);

