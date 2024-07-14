import {createElement as e} from "react";

function TestApp() {
    return e('div', {className:"main_text text"}, [
        e('h1',{className: "title"},'Hello world, I\'m React test App!')]);
}

export default TestApp;