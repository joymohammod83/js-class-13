let studage = [18, 19, 20, 22, 21];
console.log(studage [1]);

for (let i = 1; i <= 10; i++){

    console.log(i * 10);
}

for (let i = 1; i <= 10; i++){

    console.log(i, 'x', 10, '=', (i * 10));
}

for ( let i=1; i <= 10; i++){
    console.log(i, 'x', 8, '=',(i *8) );

}

function multifly(numm){
    for (let i=1; i <=10; i++){
        console.log(numm, 'x', i, '=', (i * numm));
    }
   
}
multifly(2)
multifly(4)
multifly(6)
multifly(8)

function namta(multi){
    for (let i=1; i <=10; i++){
       console.log(multi, 'x', i, '=', (i * multi)); 
    }
}

namta(3)
namta(5)
namta(7)
namta(9)

for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        console.log(j, 'x', 10, '=', (i * j));
    }
}

for (let i = 1; i <= 25; i++){
    for(let j = 1; j <= 25; j++){
        console.log(j, 'x',10, '=', (i * j) );
    }
 }

 for (let i = 1; i <= 30; i ++){
    if (i < 15){
        continue
    }
    console.log(i);
 }

 for (let i = 1; i <= 20; i ++){
    if (i == 10){
        break
    }
    console.log(i);
 }

//  object

let studantName = {name: 'joy mohammod', age: 21, semi: 8, id:480248}
console.log(studantName.name);
console.log(studantName.age);
console.log(studantName.semi);
console.log(studantName.id);

let footballer = {gk:'alison', defence:'silva,militao', midfield:'cassemiro,bruno', forword:'neymar,vini,rapinha' }
console.log(footballer['gk']);
console.log(footballer['defence']);
console.log(footballer['midfield']);
console.log(footballer['forword']);

let homeWork = 'done';
console.log(homeWork);
