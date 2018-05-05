 class Query {
   constructor(public firstName : String, public lastName : String) {
   	this.firstName = firstName;
   	this.lastName = lastName;
   }
   displayName(){ 
     console.log(this.firstName+ " " +this.lastName);
   }
}
export const Server = Query;