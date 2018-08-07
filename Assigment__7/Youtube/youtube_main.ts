
  
  class Youtube_Video {
    
    private Title: string;
    private Number_Of_View: number;
    private Number_Of_Like: number;
    private Number_Of_Dislike: number;
    private Channel_Name: string; 
    private Publish_Date: string;
    private Subscriber: number;
    private Description: string;
    private Category: string;
    private Duration: string;
    private Subtitle: string[];
    private Resolution: number[] = [144, 240, 360, 480, 720, 1080];
    private Number_Of_Comment: number;


    constructor(
     
      Title: string,
      Number_Of_View: number,
      Number_Of_Like: number,
      Number_Of_Dislike: number,
      Channel_Name: string,
      Publish_Date: string,
      Subscriber: number,
      Description: string,
      Category: string,
      Duration: string,
      Subtitle: string[],
      Number_Of_Comment: number,
      

    ) {
      
      this.Title = Title;
      this.Number_Of_View = Number_Of_View;
      this.Number_Of_Like = Number_Of_Like;
      this.Number_Of_Dislike = Number_Of_Dislike;
      this.Channel_Name = Channel_Name;
      this.Publish_Date = Publish_Date;
      this.Subscriber= Subscriber;
      this.Description = Description;
      this.Category = Category;
      this.Duration = Duration;
      this.Subtitle = Subtitle;
      this.Number_Of_Comment = Number_Of_Comment;

    }
  
  
   
    public getTitle(): string {
      return this.Title;
    }
    public getNumber_Of_View(): number {
      return this.Number_Of_View;
    }
  
    public getNumber_Of_Like(): number {
      return this.Number_Of_Like;
    }
  
    public getNumber_Of_Dislike(): number {
      return this.Number_Of_Dislike;
    }
  
    public getChannel_Name(): string {
      return this.Channel_Name;
    }
    public getPublish_Date(): string {
      return this.Publish_Date;
    }
    public getSubscriber(): number {
      return this.Subscriber;
    }
    public getDescription(): string {
      return this.Description;
    }
    public getCategory(): string {
      return this.Category;
    }
    public getDuration(): string {
      return this.Duration;
    }
    public getSubtitle() {
      return this.Subtitle;
    }
    public getResolution(): number[] {
      return this.Resolution;
    }
    public getNumber_Of_Comment(): number {
      return this.Number_Of_Comment;
    }
  

  
   
    public setTitle(title: string) {
      this.Title = title;
    }
    public setNumber_Of_View(Number_Of_View: number) {
      this.Number_Of_View = Number_Of_View;
    }
    public setNumber_Of_Like(Number_Of_Like: number) {
      this.Number_Of_Like = Number_Of_Like;
    }
    public setNumber_Of_Dislike(Number_Of_Dislike: number) {
      this.Number_Of_Dislike = Number_Of_Dislike;
    }
    public setChannel_Name(Channel_Name: string) {
      this.Channel_Name = Channel_Name;
    }
    public setPublish_Date(Publish_Date: string) {
      this.Publish_Date=Publish_Date;
    }   
    public setSubscriber(Subscriber: number) {
      this.Subscriber = Subscriber;
    }
    public setDescription(Description: string) {
      this.Description = Description;
    }
    public setCategory(Category:string) {
      this.Category=Category;
    }
    public setDuration(Duration: string) {
      this.Duration = Duration;
    }  
    public setSubtitle(subtitle: string[]) {
      this.Subtitle = subtitle;
    }
    public SetResolution(resolution: number[]) {
      this.Resolution = resolution;
    }
    public setNumber_Of_Comment(Number_Of_Comment: number) {
      this.Number_Of_Comment = Number_Of_Comment;
    }
  
   
  }
  
//Store value
  let Views=9829916;
  //Instance creation of Video class
  let Video = new Youtube_Video(
   
    "FIFA 19 | Official Reveal Trailer with UEFA Champions League",
    8829916,
    232000,
    10000,
    "EA SPORTS FIFA",
    "29/06/2018",
    3402829,
    "EA SPORTS™ FIFA 19 officially launches worldwide September 28 on PlayStation 4,Xbox One, Nintendo Switch™, and PC.Experience the world's most prestigious club competition in FIFA 19 with the addition of the UEFA Champions League: http://x.ea.com/47112.",
    "Gaming",
    "1:24",
    ["English","German","French"],
   52200,
  );
  //Set Value
 Video.setNumber_Of_View(Views);
 //print In Console
  console.log("Title : "+Video.getTitle());
  console.log("Views : "+Video.getNumber_Of_View());
  console.log("Like : "+Video.getNumber_Of_Like());
  console.log("DisLike : "+Video.getNumber_Of_Dislike());
  console.log("Channel Name : "+Video.getChannel_Name());
  console.log("Date of Publish : "+Video.getPublish_Date());
  console.log("Subscriber : "+Video.getSubscriber());
  console.log("Description: "+Video.getDescription());
  console.log("Category : "+Video.getCategory());
  console.log("Video Duration : "+Video.getDuration());
  console.log("Subtitle : "+Video.getSubtitle());
  console.log("Number of Comment : "+Video.getNumber_Of_Comment());
  