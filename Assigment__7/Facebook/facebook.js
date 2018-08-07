var Facebook_Profile = /** @class */ (function () {
    function Facebook_Profile(Name, Nick_Name, Mobile, Email, DOB, Gender, Work, University_Name, School_Name, Address, Professional_Skills, Relationship, Profile_Picture, Cover_Picture, Blood_Group, Life_Events, Language, Religious_View, Political_Views, Website_Links, Social_Links) {
        var _this = this;
        //Get Social link using Array
        this.getSocial_Links = function () {
            var Social_Links = _this.Social_Links;
            var len = Social_Links.length;
            console.log("Social Links : ");
            for (var i = 0; i < len; i++) {
                console.log(Social_Links[i]);
            }
        };
        //Get website link using Array
        this.getWebsite_Links = function () {
            var Website_Link = _this.Website_Links;
            var len = Website_Link.length;
            console.log("Website Links : ");
            for (var i = 0; i < len; i++) {
                console.log(Website_Link[i]);
            }
        };
        this.Name = Name;
        this.Nick_Name = Nick_Name;
        this.Mobile = Mobile;
        this.Email = Email;
        this.DOB = DOB;
        this.Gender = Gender;
        this.Work = Work;
        this.University_Name = University_Name;
        this.School_Name = School_Name;
        this.Address = Address;
        this.Professional_Skills = Professional_Skills;
        this.Relationship = Relationship;
        this.Profile_Picture = Profile_Picture;
        this.Cover_Picture = Cover_Picture;
        this.Blood_Group = Blood_Group;
        this.Life_Events = Life_Events;
        this.Language = Language;
        this.Religious_View = Religious_View;
        this.Political_Views = Political_Views;
        this.Website_Links = Website_Links;
        this.Social_Links = Social_Links;
    }
    //getter
    Facebook_Profile.prototype.getName = function () {
        return this.Name;
    };
    Facebook_Profile.prototype.getNick_Name = function () {
        return this.Nick_Name;
    };
    Facebook_Profile.prototype.getMobile = function () {
        return this.Mobile;
    };
    Facebook_Profile.prototype.getEmail = function () {
        return this.Email;
    };
    Facebook_Profile.prototype.getDOB = function () {
        return this.DOB;
    };
    Facebook_Profile.prototype.getGender = function () {
        return this.Gender;
    };
    Facebook_Profile.prototype.getWork = function () {
        return this.Work;
    };
    Facebook_Profile.prototype.getUniversity_Name = function () {
        return this.University_Name;
    };
    Facebook_Profile.prototype.getSchool_Name = function () {
        return this.School_Name;
    };
    Facebook_Profile.prototype.getAddress = function () {
        return this.Address;
    };
    Facebook_Profile.prototype.getProfessionalSkill = function () {
        return this.Professional_Skills;
    };
    Facebook_Profile.prototype.getRelationship = function () {
        return this.Relationship;
    };
    Facebook_Profile.prototype.getProfile_Picture = function () {
        return this.Profile_Picture;
    };
    Facebook_Profile.prototype.getCover_Picture = function () {
        return this.Cover_Picture;
    };
    Facebook_Profile.prototype.getBlood_Group = function () {
        return this.Blood_Group;
    };
    Facebook_Profile.prototype.getLife_Event = function () {
        return this.Life_Events;
    };
    Facebook_Profile.prototype.getLanguage = function () {
        return this.Language;
    };
    Facebook_Profile.prototype.getReligious_View = function () {
        return this.Religious_View;
    };
    Facebook_Profile.prototype.getPolitical_Views = function () {
        return this.Political_Views;
    };
    Facebook_Profile.prototype.getWebsite_Link = function () {
        return this.Website_Links;
    };
    Facebook_Profile.prototype.getSocial_Link = function () {
        return this.Social_Links;
    };
    //setter
    Facebook_Profile.prototype.setName = function (Name) {
        return this.Name = Name;
    };
    Facebook_Profile.prototype.setNick_Name = function (Nick_Name) {
        return this.Nick_Name = Nick_Name;
    };
    Facebook_Profile.prototype.setMobile = function (Mobile) {
        return this.Mobile = Mobile;
    };
    Facebook_Profile.prototype.setEmail = function (Email) {
        return this.Email = Email;
    };
    Facebook_Profile.prototype.setDOB = function (DOB) {
        return this.DOB = DOB;
    };
    Facebook_Profile.prototype.setGender = function (Gender) {
        return this.Gender = Gender;
    };
    Facebook_Profile.prototype.setWork = function (Work) {
        return this.Work = Work;
    };
    Facebook_Profile.prototype.setUniversity_Name = function (University_Name) {
        return this.University_Name = University_Name;
    };
    Facebook_Profile.prototype.setSchool_Name = function (School_Name) {
        return this.School_Name = School_Name;
    };
    Facebook_Profile.prototype.setAddress = function (Address) {
        return this.Address = Address;
    };
    Facebook_Profile.prototype.setProfessional_Skills = function (Professional_Skills) {
        return this.Professional_Skills = Professional_Skills;
    };
    Facebook_Profile.prototype.setRelationship = function (Relationship) {
        return this.Relationship = Relationship;
    };
    Facebook_Profile.prototype.setProfile_Picture = function (Profile_Picture) {
        return this.Profile_Picture = Profile_Picture;
    };
    Facebook_Profile.prototype.setCover_Picture = function (Cover_Picture) {
        return this.Cover_Picture = Cover_Picture;
    };
    Facebook_Profile.prototype.setBlood_Group = function (Blood_Group) {
        return this.Blood_Group = Blood_Group;
    };
    Facebook_Profile.prototype.setLife_Events = function (Life_Events) {
        return this.Life_Events = Life_Events;
    };
    Facebook_Profile.prototype.setLanguage = function (Language) {
        return this.Language = Language;
    };
    Facebook_Profile.prototype.setReligious_View = function (Religious_View) {
        return this.Religious_View = Religious_View;
    };
    Facebook_Profile.prototype.setPolitical_Views = function (Political_Views) {
        return this.Political_Views = Political_Views;
    };
    Facebook_Profile.prototype.setWebsite_Links = function (Website_Links) {
        return this.Website_Links = Website_Links;
    };
    Facebook_Profile.prototype.setSocial_Links = function (Social_Links) {
        return this.Social_Links = Social_Links;
    };
    return Facebook_Profile;
}());
var Profile = new Facebook_Profile("Soumojit Sadhukhan", "Piglu", 9804559517, "soumojit.sad@gmail.com", "27.5.1995", "Male", "Student", "MAKAUT", "Belkulai C.K.A.C. Vidyapith", "Howrah", ["Java", "C++", "Angular", " JS",], "Single", "https://www.facebook.com/Profile_Photo.php", "https://www.facebook.com/Cover_Photo.php", "AB+", ["Born on 27 May 1995"], ["Bengali", "English", "Hindi"], "Hindu", "BJP", ["https://soumojit1995.github.io/",], ["https://github.com/Soumojit1995", "https://www.linkedin.com/in/soumojit-sadhukhan-929410108"]);
console.log("Name : " + Profile.getName());
console.log("Nick Name : " + Profile.getNick_Name());
console.log("Mobile No : " + Profile.getMobile());
console.log("Email : " + Profile.getEmail());
console.log("Date Of Birth : " + Profile.getDOB());
console.log("Gender : " + Profile.getGender());
console.log("Profile Picture : " + Profile.getProfile_Picture());
console.log("Cover Picture : " + Profile.getCover_Picture());
console.log("Address : " + Profile.getAddress());
console.log("Work : " + Profile.getWork());
console.log("University Name : " + Profile.getUniversity_Name());
console.log("School Name : " + Profile.getSchool_Name());
console.log("Professional Skills : " + Profile.getProfessionalSkill());
console.log("Language : " + Profile.getLanguage());
console.log("Blood Group : " + Profile.getBlood_Group());
//console.log("Website Links: "+Profile.getWebsite_Link());
//console.lo""g("Social Links : "+Profile.getSocial_Links());
console.log("Life Event : " + Profile.getLife_Event());
console.log("Relationship : " + Profile.getRelationship());
console.log("Religious View : " + Profile.getReligious_View());
console.log("Political Views : " + Profile.getPolitical_Views());
Profile.getSocial_Links();
Profile.getWebsite_Links();
