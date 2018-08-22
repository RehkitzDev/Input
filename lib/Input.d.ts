export declare class Input {
    private static isKeyPressed;
    private static keyDownEventsOnce;
    private static keyDownEvents;
    private static keyUpEvents;
    private static mouseMoveEvents;
    private static mouseDownLeftEventsOnce;
    private static mouseDownRightEventsOnce;
    private static mouseDownLeftEvents;
    private static mouseDownRightEvents;
    private static mouseUpLeftEvents;
    private static mouseUpRightEvents;
    static Init(): void;
    private static addToMap(key, event, map);
    static AddOnMouseMove(event: Function): void;
    static AddOnMouseLeftDownOnce(event: Function): void;
    static AddOnMouseRightDownOnce(event: Function): void;
    static AddOnMouseLeftDown(event: Function): void;
    static AddOnMouseRightDown(event: Function): void;
    static AddOnMouseLeftUp(event: Function): void;
    static AddOnMouseRightUp(event: Function): void;
    static AddOnKeyDown(key: string, event: Function): void;
    static AddOnKeyUp(key: string, event: Function): void;
    static AddOnKeyDownOnce(key: string, event: Function): void;
    static IsKeyPressed(key: string): boolean | undefined;
    private static onKeyDown(event);
    private static onKeyUp(event);
    private static onMouseMove(event);
    private static onMouseDown(event);
    private static onMouseUp(event);
}
