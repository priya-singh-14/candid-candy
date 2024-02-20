// sends a page back to the user - will eventually process many kinds of requests
import path from "path";


class PageController{
    // tied to the view engine command in app.js, that's how the ejs works
    static getHomepage(req,res){
        // define the object here or get it from another source (aka database)
        const heart1 = {
            author: "~ anonymous",
            text: "this is a candy heart",
            date: "Feb 13, 2024",
            to: "john doe",
            id: "asdfs"
        };
        const heart2 = {
            author: "~ anonymous",
            text: "this is another candy heart",
            date: "Feb 12, 2024",
            to: "barak obama",
            id: "asdi"
        };

        const heart = [heart1, heart2];

        res.render("homepage", { heart });
    }
    static getAddHeart(req,res){
        res.sendFile(path.resolve() + "/public/html/addHeart.html")
    }

    static getLogin(req,res){
        res.sendFile(path.resolve() + "/public/html/login.html")
    }

    static getProfile(req,res){
        res.sendFile(path.resolve() + "/public/html/profile.html")
    }
}

export default PageController;