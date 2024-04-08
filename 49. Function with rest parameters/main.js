logHobbies("coding", "sleeping", "eating", "modeling");
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I love ".concat(hobby, " in my leisure time"));
    });
}
