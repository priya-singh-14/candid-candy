// sends a page back to the user - will eventually process many kinds of requests
import path from "path";
import HeartsAccessor from "../db_accessor/hearts.accessor.js";


class PageController {
    static async getHomepage(req, res) {
        //res.sendFile(path.resolve() + "/public/html/homepage.html");
        const hearts = await HeartsAccessor.getAllHearts();
        //console.log(hearts);
        res.render("homepage", { hearts });
    }

    static getAddHeart(req, res){
        res.render("addHeart.ejs", {});
    }

    static openAddHeart(req, res){
        res.render("/addHeart");
    }
    
    static async postHeart(req, res) {
        const heartToPost = {
          to: req.body.to,
          text: req.body.text,
          date: req.body.date,
        };
    
        const returned = await HeartsAccessor.postHeart(heartToPost);
    
        res.redirect("/");
      }

    static getLogin(req,res){
        res.sendFile(path.resolve() + "/public/html/login.html")
    }

    static getProfile(req,res){
        res.sendFile(path.resolve() + "/public/html/profile.html")
    }
}


export default PageController;