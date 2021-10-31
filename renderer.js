import Webpack, {Events} from "./webpack.js";

// Webpack.on(Events.CREATE, () => {
//     console.log("Webpack has been created!");
// });

// Webpack.on(Events.LENGTH_CHANGE, (len) => {
//     console.log("Webpack length has changed to:", len);
// });

// Webpack.on(Events.PUSH, (chunks) => {
//     console.log("Chunks were pushed:", chunks);
// });

// Webpack.on(Events.LOADED, () => {
//     console.log("Webpack has been initialized!");
// });

export default new class Experiments {
    start() {Webpack.once(Events.LOADED, () => this.onStart());}

    onStart() {this.define(true);}

    define(value) {
        console.log("define", value);
        this.DeveloperStore = this.DeveloperStore || Webpack.findByProps("isDeveloper");

        Object.defineProperty(this.DeveloperStore, "isDeveloper", {
            value: value,
            configurable: true
        });

        try {this.DeveloperStore.emitChange();}
        catch {}
    }

    stop() {this.define(false);}
}