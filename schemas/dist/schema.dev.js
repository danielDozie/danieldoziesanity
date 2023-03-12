"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _schemaCreator = _interopRequireDefault(require("part:@sanity/base/schema-creator"));

var _schemaType = _interopRequireDefault(require("all:part:@sanity/base/schema-type"));

var _pages = _interopRequireDefault(require("./pages"));

var _blog = _interopRequireDefault(require("./blog"));

var _author = _interopRequireDefault(require("./author"));

var _menu = _interopRequireDefault(require("./menu"));

var _logo = _interopRequireDefault(require("./logo"));

var _services = _interopRequireDefault(require("./services"));

var _messages = _interopRequireDefault(require("./messages"));

var _workSection = _interopRequireDefault(require("./components/workSection"));

var _heroSection = _interopRequireDefault(require("./components/heroSection"));

var _techStack = _interopRequireDefault(require("./components/techStack"));

var _button = _interopRequireDefault(require("./components/button"));

var _block = _interopRequireDefault(require("./components/block"));

var _text = _interopRequireDefault(require("./components/text"));

var _blogs = _interopRequireDefault(require("./components/blogs"));

var _logoIcons = _interopRequireDefault(require("./components/logoIcons"));

var _service = _interopRequireDefault(require("./components/service"));

var _projects = _interopRequireDefault(require("./projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
//content imports
//Re-usable components import
// Then we give our schema to the builder and provide the result to Sanity
var _default = (0, _schemaCreator["default"])({
  // We name our schema
  name: 'badtfolio',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: _schemaType["default"].concat([
  /* Your types here! */
  //Document/Contents Types
  _menu["default"], _pages["default"], _blog["default"], _services["default"], _messages["default"], _author["default"], _logo["default"], _projects["default"], //Objects/components Types      
  _workSection["default"], _heroSection["default"], _techStack["default"], _button["default"], _text["default"], _block["default"], _blogs["default"], _logoIcons["default"], _service["default"]])
});

exports["default"] = _default;