import { DataService } from "./DataService";

// ova klasa mi treba kao instanca, a trebam ju moc extendat u theme service da overrideam odredene metode
// is this a good solve or no?
// jedino sta imam je ovako ili da sve bude static

export class BaseService {
    constructor(){
        this.dataService = new DataService();
    }

    get(){
       return this.dataService.get();
    }
}
//
export const BaseServiceInst = new BaseService();