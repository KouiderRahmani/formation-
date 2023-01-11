function affiche(message) {
    console.log(message)
}
var message = "bonjour type scripte ";
affiche(message);
let age: number;
enum Color { red = 0, grean = 1, bleu = 2 }
let backroundClor: Color.red;


let somthing: String = "kouider rahmani";
let char = somthing.charAt(2);



let somthing2 = (somthing as string);
let somthing3: String;
let somthing4 = "gggg";
(<string>somthing4).concat("dddd");

// les fonctions


let somthing6 = function (message1: string, message2: string): string {
    message = message1.concat(message2);
    return message;
}


let affiche2 = (message1: string, message2: string): string => {
    message = message1.concat(message2);
    return message;
}


let affiche4 = () => {
    console.log("test messgae ")
};

let affiche3 = (message1,message2) => {
    message = message1.concat(message2);
    return message;
};

//les interfaces
interface ContactInterface {
name:string,
telephone:string

}
 let createContact = (contact :ContactInterface )=>
 {

 }

 createContact({
    name : "kouider",
    telephone:"021154"
 });

// les classe 
  class Contact{
    
    constructor  (private  _name : string) 
    {
    }
    
   
    afficheContact()
    {
        console.log("name ="+this._name );
        
    }
    
   get  name():string{
       return  this._name;
   }
   set name(value:string )
   {
    this._name=value;
   }
  }

  let contact2:Contact =new Contact("ee");
  contact2.name = "kouider";
  contact2.afficheContact();
  
  
