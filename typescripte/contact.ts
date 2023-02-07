export class Contact{
    
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