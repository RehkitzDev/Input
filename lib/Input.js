"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Input {
    static Init() {
        document.addEventListener('keydown', (event) => { Input.onKeyDown(event); });
        document.addEventListener('keyup', (event) => { Input.onKeyUp(event); });
        document.addEventListener('mousemove', (event) => { Input.onMouseMove(event); });
        document.addEventListener('mousedown', (event) => { Input.onMouseDown(event); });
        document.addEventListener('mouseup', (event) => { Input.onMouseUp(event); });
    }
    static addToMap(key, event, map) {
        if (!map.has(key)) {
            map.set(key, new Array());
        }
        let functionArray = map.get(key);
        functionArray.push(event);
    }
    static AddOnMouseMove(event) {
        this.mouseMoveEvents.push(event);
    }
    static AddOnMouseLeftDownOnce(event) {
        this.mouseDownLeftEventsOnce.push(event);
    }
    static AddOnMouseRightDownOnce(event) {
        this.mouseDownRightEventsOnce.push(event);
    }
    static AddOnMouseLeftDown(event) {
        this.mouseDownLeftEvents.push(event);
    }
    static AddOnMouseRightDown(event) {
        this.mouseDownRightEvents.push(event);
    }
    static AddOnMouseLeftUp(event) {
        this.mouseUpLeftEvents.push(event);
    }
    static AddOnMouseRightUp(event) {
        this.mouseUpRightEvents.push(event);
    }
    static AddOnKeyDown(key, event) {
        Input.addToMap(key, event, Input.keyDownEvents);
        Input.isKeyPressed.set(key, false);
    }
    static AddOnKeyUp(key, event) {
        Input.addToMap(key, event, Input.keyUpEvents);
        Input.isKeyPressed.set(key, false);
    }
    static AddOnKeyDownOnce(key, event) {
        Input.addToMap(key, event, Input.keyDownEventsOnce);
        Input.isKeyPressed.set(key, false);
    }
    static IsKeyPressed(key) {
        if (Input.isKeyPressed.has(key)) {
            return Input.isKeyPressed.get(key);
        }
        return false;
    }
    static onKeyDown(event) {
        if (Input.keyDownEvents.has(event.key)) {
            let functionArray = Input.keyDownEvents.get(event.key);
            functionArray.forEach((func) => {
                func();
            });
        }
        if (Input.isKeyPressed.get(event.key) == false) {
            if (Input.keyDownEventsOnce.has(event.key)) {
                let functionArray = Input.keyDownEventsOnce.get(event.key);
                functionArray.forEach((func) => {
                    func();
                });
            }
        }
        if (Input.isKeyPressed.has(event.key)) {
            Input.isKeyPressed.set(event.key, true);
        }
    }
    static onKeyUp(event) {
        if (Input.keyUpEvents.has(event.key)) {
            let functionArray = Input.keyUpEvents.get(event.key);
            functionArray.forEach((func) => {
                func();
            });
        }
        if (Input.isKeyPressed.has(event.key)) {
            Input.isKeyPressed.set(event.key, false);
        }
    }
    static onMouseMove(event) {
        Input.mouseMoveEvents.forEach((func) => {
            func(event);
        });
    }
    static onMouseDown(event) {
        if (event.button == 0) {
            Input.mouseDownLeftEventsOnce.forEach((func) => {
                func(event);
            });
            Input.mouseDownLeftEvents.forEach((func) => {
                func(event);
            });
        }
        else if (event.button == 2) {
            Input.mouseDownRightEventsOnce.forEach((func) => {
                func(event);
            });
            Input.mouseDownRightEvents.forEach((func) => {
                func(event);
            });
        }
    }
    static onMouseUp(event) {
        if (event.button == 0) {
            Input.mouseUpLeftEvents.forEach((func) => {
                func(event);
            });
        }
        else if (event.button == 2) {
            Input.mouseUpRightEvents.forEach((func) => {
                func(event);
            });
        }
    }
}
Input.isKeyPressed = new Map();
Input.keyDownEventsOnce = new Map();
Input.keyDownEvents = new Map();
Input.keyUpEvents = new Map();
Input.mouseMoveEvents = new Array();
Input.mouseDownLeftEventsOnce = new Array();
Input.mouseDownRightEventsOnce = new Array();
Input.mouseDownLeftEvents = new Array();
Input.mouseDownRightEvents = new Array();
Input.mouseUpLeftEvents = new Array();
Input.mouseUpRightEvents = new Array();
exports.Input = Input;
