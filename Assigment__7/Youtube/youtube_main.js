var Youtube_Video = /** @class */ (function () {
    function Youtube_Video(Title, Number_Of_View, Number_Of_Like, Number_Of_Dislike, Channel_Name, Publish_Date, Subscriber, Description, Category, Duration, Subtitle, Number_Of_Comment) {
        this.Resolution = [144, 240, 360, 480, 720, 1080];
        this.Title = Title;
        this.Number_Of_View = Number_Of_View;
        this.Number_Of_Like = Number_Of_Like;
        this.Number_Of_Dislike = Number_Of_Dislike;
        this.Channel_Name = Channel_Name;
        this.Publish_Date = Publish_Date;
        this.Subscriber = Subscriber;
        this.Description = Description;
        this.Category = Category;
        this.Duration = Duration;
        this.Subtitle = Subtitle;
        this.Number_Of_Comment = Number_Of_Comment;
    }
    Youtube_Video.prototype.getTitle = function () {
        return this.Title;
    };
    Youtube_Video.prototype.getNumber_Of_View = function () {
        return this.Number_Of_View;
    };
    Youtube_Video.prototype.getNumber_Of_Like = function () {
        return this.Number_Of_Like;
    };
    Youtube_Video.prototype.getNumber_Of_Dislike = function () {
        return this.Number_Of_Dislike;
    };
    Youtube_Video.prototype.getChannel_Name = function () {
        return this.Channel_Name;
    };
    Youtube_Video.prototype.getPublish_Date = function () {
        return this.Publish_Date;
    };
    Youtube_Video.prototype.getSubscriber = function () {
        return this.Subscriber;
    };
    Youtube_Video.prototype.getDescription = function () {
        return this.Description;
    };
    Youtube_Video.prototype.getCategory = function () {
        return this.Category;
    };
    Youtube_Video.prototype.getDuration = function () {
        return this.Duration;
    };
    Youtube_Video.prototype.getSubtitle = function () {
        return this.Subtitle;
    };
    Youtube_Video.prototype.getResolution = function () {
        return this.Resolution;
    };
    Youtube_Video.prototype.getNumber_Of_Comment = function () {
        return this.Number_Of_Comment;
    };
    Youtube_Video.prototype.setTitle = function (title) {
        this.Title = title;
    };
    Youtube_Video.prototype.setNumber_Of_View = function (Number_Of_View) {
        this.Number_Of_View = Number_Of_View;
    };
    Youtube_Video.prototype.setNumber_Of_Like = function (Number_Of_Like) {
        this.Number_Of_Like = Number_Of_Like;
    };
    Youtube_Video.prototype.setNumber_Of_Dislike = function (Number_Of_Dislike) {
        this.Number_Of_Dislike = Number_Of_Dislike;
    };
    Youtube_Video.prototype.setChannel_Name = function (Channel_Name) {
        this.Channel_Name = Channel_Name;
    };
    Youtube_Video.prototype.setPublish_Date = function (Publish_Date) {
        this.Publish_Date = Publish_Date;
    };
    Youtube_Video.prototype.setSubscriber = function (Subscriber) {
        this.Subscriber = Subscriber;
    };
    Youtube_Video.prototype.setDescription = function (Description) {
        this.Description = Description;
    };
    Youtube_Video.prototype.setCategory = function (Category) {
        this.Category = Category;
    };
    Youtube_Video.prototype.setDuration = function (Duration) {
        this.Duration = Duration;
    };
    Youtube_Video.prototype.setSubtitle = function (subtitle) {
        this.Subtitle = subtitle;
    };
    Youtube_Video.prototype.SetResolution = function (resolution) {
        this.Resolution = resolution;
    };
    Youtube_Video.prototype.setNumber_Of_Comment = function (Number_Of_Comment) {
        this.Number_Of_Comment = Number_Of_Comment;
    };
    return Youtube_Video;
}());
//Store value
var Views = 9829916;
//Instance creation of Video class
var Video = new Youtube_Video("FIFA 19 | Official Reveal Trailer with UEFA Champions League", 8829916, 232000, 10000, "EA SPORTS FIFA", "29/06/2018", 3402829, "EA SPORTS™ FIFA 19 officially launches worldwide September 28 on PlayStation 4,Xbox One, Nintendo Switch™, and PC.Experience the world's most prestigious club competition in FIFA 19 with the addition of the UEFA Champions League: http://x.ea.com/47112.", "Gaming", "1:24", ["English", "German", "French"], 52200);
//Set Value
Video.setNumber_Of_View(Views);
//print In Console
console.log("Title : " + Video.getTitle());
console.log("Views : " + Video.getNumber_Of_View());
console.log("Like : " + Video.getNumber_Of_Like());
console.log("DisLike : " + Video.getNumber_Of_Dislike());
console.log("Channel Name : " + Video.getChannel_Name());
console.log("Date of Publish : " + Video.getPublish_Date());
console.log("Subscriber : " + Video.getSubscriber());
console.log("Description: " + Video.getDescription());
console.log("Category : " + Video.getCategory());
console.log("Video Duration : " + Video.getDuration());
console.log("Subtitle : " + Video.getSubtitle());
console.log("Number of Comment : " + Video.getNumber_Of_Comment());
