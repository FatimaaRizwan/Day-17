logHobbies("coding", "sleeping", "eating", "modeling");

function logHobbies(...hobbies:string[]){
    hobbies.forEach(hobby =>{
        console.log(`I love ${hobby} in my leisure time`);
    });
}