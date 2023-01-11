function affiche(message) {
    console.log(message);
}
var message = "bonjour type scripte ";
affiche(message);
var age;
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["grean"] = 1] = "grean";
    Color[Color["bleu"] = 2] = "bleu";
})(Color || (Color = {}));
var backroundClor;
var somthing = "kouider rahmani";
var char = somthing.charAt(2);
var somthing2 = somthing;
var somthing3;
var somthing4 = "gggg";
somthing4.concat("dddd");
// les fonctions
var somthing6 = function (message1, message2) {
    message = message1.concat(message2);
    return message;
};
var affiche2 = function (message1, message2) {
    message = message1.concat(message2);
    return message;
};
var affiche4 = function () {
    console.log("test messgae ");
};
var affiche3 = function (message1, message2) {
    message = message1.concat(message2);
    return message;
};
var createContact = function (contact) {
};
createContact({
    name: "kouider",
    telephone: "021154"
});
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
