let lista = [1,2,3,4,5];
let otra = lista;
otra[0] = 67
/*PARA CREAR UNA COPIA DEL ARRAY LO HACEMOS CON CONSTRUCTOR DE COPIA*/
//let luis = [...lista];
/*Para copiar varios
/let luis = [...lista,...otra];*/

/*
let ulti = "MARTILLO VA!!!"
let luis = [...ulti];//ES COMO UN SPLIT

console.log(luis);*/


/*Asignacion para variables desde un array*/
/*
let a,b,c,otros;
lista = [23,24,25,26,27,28,29];

[a,b,c,...otros] = lista;


console.log(a);
console.log(b);
console.log(c);
console.log(otros);*/

//Intercambiar posicion 1 con la pos 4

let a,b,c,otros;
lista = [23,24,25,26,27,28,29];
[lista[1],lista[4]] = [lista[4] , lista[1]];

console.log(lista);

//let res = lista.concat(6,7,8,9);

//res = lista.concat(otra);
/*
//Funcion que mete por detras
res.push("flipao");
//funcion que mete por delante
res.unshift("pordelante");

//SACAR
let ultimo = res.pop(); //Me cargo el último elemento
ultimo = res.shift();//Me cargo por el principio.

res.reverse();//Altera el array

let salida = res.join("-");//Me devuelve una cadena desde un array

console.log(salida);

console.log(ultimo)
*/


//Devuelve verdadero o falso
/*let ok = res.some(function (edad){
    return edad > 18;
});*/

//every => Mirame si todos cumplen esa condicion
//let ok =  res.every((edad) => edad>18);//Funcion anonima

/*
res.forEach(function(ele){
    if(ele % 2 == 0){
        console.log("Es par");
    }else{
        console.log("Es impar");
        
    }
});*/

/*
res.forEach((ele) =>{
    if(ele % 2 == 0){
        console.log("Es par");
    }else{
        console.log("Es impar");
        
    }
});*/

/*
let otro =res.map((ele,pos)=>{
    if(ele % 2 != 0)
        return ele;
    else
        return pos;
})*/

//SPREAD OPERATOS{...}

//console.log(otro);

//console.log(ok)
//console.log(res);