 class Query {
   constructor(firstName,lastName) {
   	this.firstName = firstName;
   	this.lastName = lastName;
        displayName(){

       console.log(this.firstName+ " " +this.lastName);
  }
     
   }
}
export const Server = Query;