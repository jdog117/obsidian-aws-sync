/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => Sync
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var Sync = class extends import_obsidian.Plugin {
  async onLoad() {
    console.log("loading plugin");
    const openFile = this.app.workspace.getActiveFile();
    if (openFile) {
      console.log(openFile.name);
      console.log(openFile.path);
    }
  }
  async onunload() {
    console.log("unloading plugin");
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeW5jIGV4dGVuZHMgUGx1Z2luIHtcblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gQ29uZmlndXJlIHJlc291cmNlcyBuZWVkZWQgYnkgdGhlIHBsdWdpbi5cbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcgcGx1Z2luJylcbiAgICAgICAgY29uc3Qgb3BlbkZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xuICAgICAgICBpZihvcGVuRmlsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cob3BlbkZpbGUubmFtZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wZW5GaWxlLnBhdGgpXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9wZW5GaWxlLnN0YXQubXRpbWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvbnVubG9hZCgpIHtcbiAgICAgICAgLy8gUmVsZWFzZSBhbnkgcmVzb3VyY2VzIGNvbmZpZ3VyZWQgYnkgdGhlIHBsdWdpbi5cbiAgICAgICAgY29uc29sZS5sb2coJ3VubG9hZGluZyBwbHVnaW4nKVxuICAgICAgfVxuXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUF1QjtBQUV2QixJQUFxQixPQUFyQixjQUFrQyx1QkFBTztBQUFBLEVBRXJDLE1BQU0sU0FBUztBQUVYLFlBQVEsSUFBSSxnQkFBZ0I7QUFDNUIsVUFBTSxXQUFXLEtBQUssSUFBSSxVQUFVLGNBQWM7QUFDbEQsUUFBRyxVQUFVO0FBQ1QsY0FBUSxJQUFJLFNBQVMsSUFBSTtBQUN6QixjQUFRLElBQUksU0FBUyxJQUFJO0FBQUEsSUFFN0I7QUFBQSxFQUNKO0FBQUEsRUFFQSxNQUFNLFdBQVc7QUFFYixZQUFRLElBQUksa0JBQWtCO0FBQUEsRUFDaEM7QUFFTjsiLAogICJuYW1lcyI6IFtdCn0K