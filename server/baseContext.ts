import { IContextContainer } from "./container";



export default class BaseContext {
    protected di: IContextContainer;
    // private static stopInit: boolean = false;

    constructor(opts: IContextContainer) {
        this.di = opts
        console.log('Hello');
        
        // if (!BaseContext.stopInit) {
        //     opts.initModels();
        //     BaseContext.stopInit = true;
        // }    
    }
}