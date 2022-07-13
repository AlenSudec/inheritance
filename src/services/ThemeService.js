import {BaseService} from "./BaseService";

class ThemeService extends BaseService {
    constructor(){
        super();
    }

    get(){
        return 2;
    }
}
export default new ThemeService();