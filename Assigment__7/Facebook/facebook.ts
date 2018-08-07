class Facebook_Profile {
    private Name: string;
    private Nick_Name: string;
    private Mobile: number;
    private Email: string;
    private DOB: string;
    private Gender: string;
    private Work: string;
    private University_Name: string;
    private School_Name: string;
    private Address: string;
    private Professional_Skills: string[];
    private Relationship: string;
    private Profile_Picture: string;
    private Cover_Picture: string;
    private Blood_Group: string;
    private Life_Events: string[];
    private Language: string[];
    private Religious_View: string;
    private Political_Views: string;
    private Website_Links: string[];
    private Social_Links: string[];



    constructor(
        Name: string,
        Nick_Name: string,
        Mobile: number,
        Email: string,
        DOB: string,
        Gender: string,
        Work: string,
        University_Name: string,
        School_Name: string,
        Address: string,
        Professional_Skills: string[],
        Relationship: string,
        Profile_Picture: string,
        Cover_Picture: string,
        Blood_Group: string,
        Life_Events: string[],
        Language: string[],
        Religious_View: string,
        Political_Views: string,
        Website_Links: string[],
        Social_Links: string[],
    ) {
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
    public getName(): string {
        return this.Name;
    }
    public getNick_Name(): string {
        return this.Nick_Name;
    }
    public getMobile(): number {
        return this.Mobile;
    }
    public getEmail(): string {
        return this.Email;
    }
    public getDOB(): string {
        return this.DOB;
    }
    public getGender(): string {
        return this.Gender;
    }
    public getWork(): string {
        return this.Work;
    }
    public getUniversity_Name(): string {
        return this.University_Name;
    }
    public getSchool_Name(): string {
        return this.School_Name;
    }
    public getAddress(): string {
        return this.Address;
    }
    public getProfessionalSkill(): string[] {
        return this.Professional_Skills;
    }
    public getRelationship(): string {
        return this.Relationship;
    }
    public getProfile_Picture(): string {
        return this.Profile_Picture;
    }
    public getCover_Picture(): string {
        return this.Cover_Picture;
    }
    public getBlood_Group(): string {
        return this.Blood_Group;
    }
    public getLife_Event(): string[] {
        return this.Life_Events;
    }
    public getLanguage(): string[] {
        return this.Language;
    }
    public getReligious_View(): string {
        return this.Religious_View;
    }
    public getPolitical_Views(): string {
        return this.Political_Views;
    }
    public getWebsite_Link(): string[] {
        return this.Website_Links;
    }
    public getSocial_Link(): string[] {
        return this.Social_Links;
    }
    //Get Social link using Array
    public getSocial_Links = () => {
        let Social_Links = this.Social_Links;
        let len = Social_Links.length;
        console.log("Social Links : ");
        for (let i = 0; i < len; i++) {
            console.log(Social_Links[i]);
        }

    }
    //Get website link using Array
    public getWebsite_Links = () => {
        let Website_Link = this.Website_Links;
        let len = Website_Link.length;
        console.log("Website Links : ");
        for (let i = 0; i < len; i++) {
            console.log(Website_Link[i]);
        }

    }

    //setter
    public setName(Name: string) {
        return this.Name = Name;
    }
    public setNick_Name(Nick_Name: string) {
        return this.Nick_Name = Nick_Name;
    }
    public setMobile(Mobile: number) {
        return this.Mobile = Mobile;
    }
    public setEmail(Email: string) {
        return this.Email = Email;
    }
    public setDOB(DOB: string) {
        return this.DOB = DOB;
    }
    public setGender(Gender: string) {
        return this.Gender = Gender;
    }
    public setWork(Work: string) {
        return this.Work = Work;
    }
    public setUniversity_Name(University_Name: string) {
        return this.University_Name = University_Name;
    }
    public setSchool_Name(School_Name: string) {
        return this.School_Name = School_Name;
    }
    public setAddress(Address: string) {
        return this.Address = Address;
    }
    public setProfessional_Skills(Professional_Skills: string[]) {
        return this.Professional_Skills = Professional_Skills;
    }
    public setRelationship(Relationship: string) {
        return this.Relationship = Relationship;
    }
    public setProfile_Picture(Profile_Picture: string) {
        return this.Profile_Picture = Profile_Picture;
    }
    public setCover_Picture(Cover_Picture: string) {
        return this.Cover_Picture = Cover_Picture;
    }
    public setBlood_Group(Blood_Group: string) {
        return this.Blood_Group = Blood_Group;
    }
    public setLife_Events(Life_Events: string[]) {
        return this.Life_Events = Life_Events;
    }
    public setLanguage(Language: string[]) {
        return this.Language = Language;
    }
    public setReligious_View(Religious_View: string) {
        return this.Religious_View = Religious_View;
    }
    public setPolitical_Views(Political_Views: string) {
        return this.Political_Views = Political_Views;
    }
    public setWebsite_Links(Website_Links: string[]) {
        return this.Website_Links = Website_Links;
    }
    public setSocial_Links(Social_Links: string[]) {
        return this.Social_Links = Social_Links;
    }
}


let Profile = new Facebook_Profile(
    "Soumojit Sadhukhan",
    "Piglu",
    9804559517,
    "soumojit.sad@gmail.com",
    "27.5.1995",
    "Male",
    "Student",
    "MAKAUT",
    "Belkulai C.K.A.C. Vidyapith",
    "Howrah", 
    ["Java", "C++", "Angular", " JS", ],
    "Single",
    "https://www.facebook.com/Profile_Photo.php",
    "https://www.facebook.com/Cover_Photo.php",
    "AB+", 
    ["Born on 27 May 1995"], ["Bengali", "English", "Hindi"],
    "Hindu",
    "BJP",
     ["https://soumojit1995.github.io/", ],
      ["https://github.com/Soumojit1995", "https://www.linkedin.com/in/soumojit-sadhukhan-929410108"],


);

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
console.log("Life Event : "+Profile.getLife_Event())
console.log("Relationship : " + Profile.getRelationship());
console.log("Religious View : " + Profile.getReligious_View());
console.log("Political Views : " + Profile.getPolitical_Views());
Profile.getSocial_Links();
Profile.getWebsite_Links();