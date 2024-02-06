// sends a page back to the user - will eventually process many kinds of requests
import path from "path";

class PageController{
    static getHomepage(req,res){
        res.sendFile(path.resolve() + "/index.html");
    }

    static getAddHeart(req,res){
        res.sendFile(path.resolve() + "/addHeart.html")
    }

    static getLogin(req,res){
        res.sendFile(path.resolve() + "/login.html")
    }

    static getProfile(req,res){
        res.sendFile(path.resolve() + "/profile.html")
    }
}

export default PageController;