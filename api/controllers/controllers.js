// sends a page back to the user - will eventually process many kinds of requests
import path from "path";

class PageController{
    static getHomepage(req,res){
        res.sendFile(path.resolve() + "/index.html");
    }
}

export default PageController;