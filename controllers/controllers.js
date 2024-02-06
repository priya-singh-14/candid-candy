import path from "path";

export default class Controller{
    static getHomePage(req, res){
        res.sendFile(path.resolve() + "/public/homepage.html");
    }
}