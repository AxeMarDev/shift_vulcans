"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ScreenDimensionStyling_1 = __importDefault(require("../api/ScreenDimensionStyling"));
const NavButton = ({ title, to, className, isActive, changeActive }) => {
    const handleChange = () => {
        console.log(isActive[1]);
        changeActive(isActive[1]);
    };
    return (react_1.default.createElement(react_router_dom_1.NavLink, { to: `${to}`, className: (0, ScreenDimensionStyling_1.default)("flex", "flex-row", " flex-col", 700).style },
        react_1.default.createElement("button", { onClick: handleChange, className: (0, ScreenDimensionStyling_1.default)("", `w-20  h-20 grid rounded-2xl content-center ${isActive[0] === isActive[1] ? ("bg-gray-300") : ("bg-white")}`, `${className} justify-start grid content-start p-2 rounded w-auto ${isActive[0] === isActive[1] ? ("bg-gray-300") : ("bg-white")}`, 700).style }, !(0, ScreenDimensionStyling_1.default)("", "", "", 700).isDesktop ? (title[0]) : (title))));
};
exports.default = NavButton;
