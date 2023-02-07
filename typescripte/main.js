// les classe 
var Contact = /** @class */ (function () {
    function Contact(_name) {
        this._name = _name;
    }
    Contact.prototype.afficheContact = function () {
        console.log("name =" + this._name);
    };
    Object.defineProperty(Contact.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Contact;
}());
var contact2 = new Contact("ee");
contact2.name = "kouider";
contact2.afficheContact();
