export class Input{

    private static isKeyPressed = new Map<string, boolean>();
    private static keyDownEventsOnce = new Map<string,Array<Function>>();
    private static keyDownEvents = new Map<string,Array<Function>>();
    private static keyUpEvents = new Map<string,Array<Function>>();

    private static mouseMoveEvents = new Array<Function>();
    private static mouseDownLeftEventsOnce = new Array<Function>();
    private static mouseDownRightEventsOnce = new Array<Function>();
    private static mouseDownLeftEvents = new Array<Function>();
    private static mouseDownRightEvents = new Array<Function>();
    private static mouseUpLeftEvents = new Array<Function>();
    private static mouseUpRightEvents = new Array<Function>();

    public static Init(){
        document.addEventListener('keydown',(event: KeyboardEvent) => { Input.onKeyDown(event); });
        document.addEventListener('keyup',(event: KeyboardEvent) => { Input.onKeyUp(event); });

        document.addEventListener('mousemove',(event: MouseEvent) => { Input.onMouseMove(event); });
        document.addEventListener('mousedown',(event: MouseEvent) => { Input.onMouseDown(event); });
        document.addEventListener('mouseup',(event: MouseEvent) => { Input.onMouseUp(event); });
    }

    private static addToMap(key:string, event:Function, map: Map<string, Array<Function>>){
        if(!map.has(key)){
            map.set(key,new Array<Function>());
        }
        
        let functionArray = map.get(key) as Array<Function>;
        functionArray.push(event);
    }

    public static AddOnMouseMove(event: Function){
        this.mouseMoveEvents.push(event);
    }

    public static AddOnMouseLeftDownOnce(event: Function){
        this.mouseDownLeftEventsOnce.push(event);
    }

    public static AddOnMouseRightDownOnce(event: Function){
        this.mouseDownRightEventsOnce.push(event);
    }

    public static AddOnMouseLeftDown(event: Function){
        this.mouseDownLeftEvents.push(event);
    }

    public static AddOnMouseRightDown(event: Function){
        this.mouseDownRightEvents.push(event);
    }

    public static AddOnMouseLeftUp(event: Function){
        this.mouseUpLeftEvents.push(event);
    }

    public static AddOnMouseRightUp(event: Function){
        this.mouseUpRightEvents.push(event);
    }

    public static AddOnKeyDown(key: string, event: Function){
        Input.addToMap(key,event,Input.keyDownEvents);
        Input.isKeyPressed.set(key,false);
    }

    public static AddOnKeyUp(key: string, event: Function){
        Input.addToMap(key,event,Input.keyUpEvents);
        Input.isKeyPressed.set(key,false);
    }

    public static AddOnKeyDownOnce(key: string, event: Function){
        Input.addToMap(key,event,Input.keyDownEventsOnce);
        Input.isKeyPressed.set(key,false);
    }

    public static IsKeyPressed(key: string){
        if(Input.isKeyPressed.has(key))
        {
            return Input.isKeyPressed.get(key);
        }
        return false;
    }

    private static onKeyDown(event: KeyboardEvent){
        if(Input.keyDownEvents.has(event.key)){
            let functionArray = Input.keyDownEvents.get(event.key) as Array<Function>;
            functionArray.forEach((func: Function) => {
                func();
            });
        }

        if(Input.isKeyPressed.get(event.key) == false){
            if(Input.keyDownEventsOnce.has(event.key)){
                let functionArray = Input.keyDownEventsOnce.get(event.key) as Array<Function>;
                functionArray.forEach((func: Function) => {
                    func();
                });
            }
        }

        if(Input.isKeyPressed.has(event.key)){
            Input.isKeyPressed.set(event.key,true);
        }
    }

    private static onKeyUp(event: KeyboardEvent){
        if(Input.keyUpEvents.has(event.key)){
            let functionArray = Input.keyUpEvents.get(event.key) as Array<Function>;
            functionArray.forEach((func: Function) => {
                func();
            });
        }

        if(Input.isKeyPressed.has(event.key)){
            Input.isKeyPressed.set(event.key,false);
        }
    }

    private static onMouseMove(event: MouseEvent){
        Input.mouseMoveEvents.forEach((func: Function) => {
            func(event);
        })
    }

    private static onMouseDown(event: MouseEvent){
        if(event.button == 0){
            Input.mouseDownLeftEventsOnce.forEach((func: Function) => {
                func(event);
            });

            Input.mouseDownLeftEvents.forEach((func: Function) => {
                func(event);
            });
        }
        else if(event.button == 2){
            Input.mouseDownRightEventsOnce.forEach((func: Function) => {
                func(event);
            });

            Input.mouseDownRightEvents.forEach((func: Function) => {
                func(event);
            });
        }
    }

    private static onMouseUp(event:MouseEvent){
        if(event.button == 0){
            Input.mouseUpLeftEvents.forEach((func: Function) => {
                func(event);
            });
        }
        else if(event.button == 2){
            Input.mouseUpRightEvents.forEach((func: Function) => {
                func(event);
            });
        }
    }

}