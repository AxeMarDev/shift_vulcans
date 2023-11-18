"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ScreenDimensionStyling_1 = __importDefault(require("../../api/ScreenDimensionStyling"));
const Navbar = ({ user, children }) => {
    // screenDimension( "w-auto h-screen bg-white border-r-2", "","",700).style
    return (user.isLoggedIn ? (react_1.default.createElement("div", { className: (0, ScreenDimensionStyling_1.default)(" bg-white border-r-2", "w-screen  absolute bottom-0 ", "w-auto h-screen", 700).style },
        react_1.default.createElement("div", { className: (0, ScreenDimensionStyling_1.default)("flex", "flex-row ", "w-56 px-2 flex-col ", 700).style },
            react_1.default.createElement("div", { className: (0, ScreenDimensionStyling_1.default)("border-2 rounded flex flex-row my-2 p-2", "hidden", " ", 700).style },
                react_1.default.createElement("p", { className: "text-black" },
                    " ",
                    react_1.default.createElement("strong", null,
                        " ",
                        user.username),
                    "  "),
                react_1.default.createElement("p", { className: "text-black" },
                    " @",
                    user.company,
                    " ")),
            react_1.default.createElement("div", { className: (0, ScreenDimensionStyling_1.default)("flex", "w-full flex-row justify-between px-4 pb-4", " flex-col ", 700).style }, children)))) : (react_1.default.createElement(react_1.default.Fragment, null)));
};
exports.default = Navbar;
