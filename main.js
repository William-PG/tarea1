//1.MAYOR NUMERO-------------------------------------------------------
function agregarNumeros(){
    var num1= prompt('Ingrese un numero');
    if(num1<0){
        alert('El numero es invalido')
        num1= prompt('Ingrese otro numero');
    
    }
    var num2= prompt('Ingrese un numero');
    
    if(num2===num1 || num2<0){
        alert('El numero es invalido')
        num2= prompt('Ingrese otro numero');
    
    }
    
    var num3= prompt('Ingrese un numero');
    if(num3===num1 || num3<0 || num3===num2){
        alert('El numero es invalido')
        num3= prompt('Ingrese otro numero');
    
    }
    
    var dats=document.getElementById("datos");
    
    dats.innerHTML =`
       
        Numero : ${num1}<br>
        Numero : ${num2}<br>
        Numero : ${num3}<br>
    `
    
    if(num1>num2 && num1>num3){
        dats.innerHTML +=`
        El número ${num1} es mayor
    `
    }else if(num2>num1 && num2>num3){
        dats.innerHTML +=`
        El número ${num2} es mayor
    `
    }else{
        dats.innerHTML +=`
        El número ${num3} es mayor
    `
        
        
    }
    }
    const boton =document.createElement('button');
    boton.innerHTML='INGRESAR NUMEROS'
    
    boton.addEventListener('click',function(){
        agregarNumeros();
        
    
    })
    
    botn.appendChild(boton);
    //2.NUMEROS PRIMOS---------------------------------------------------------------
    
    function numPrimo(){
        
    let numero= prompt('Ingrese un numero');
    var primo=document.getElementById("primo");
    primo.innerHTML =`SU NUMERO ES : ${numero} <br>`
    let x=2;
    let nprimo=true;
    while(x<numero){
        if(numero%x===0){
           nprimo=false
    }
    x++;
    }

   
    if(nprimo==true){
        primo.innerHTML +=`
                El numero ${numero} es primo
            `
    }else{
        primo.innerHTML +=`
                El numero ${numero} no es primo
            `
    }
        
   
}

const boton2 =document.createElement('button');
    boton2.innerHTML='INGRESAR NUMERO';
    
    boton2.addEventListener('click',function(){
        numPrimo();
        
    
    })
   
    botn2.appendChild(boton2)
//3.IMC---------------------------------------------------
function ingresarDatos(){
    let peso= prompt('Ingrese su peso en KG');
    let altura= prompt('Ingrese su altura en m');

    var imc=document.getElementById("imc");
    imc.innerHTML=`
        Su peso es: ${peso}<br>
        Su altura es: ${altura}<br>
    `
    let pimc=peso/(altura*altura)

    if(pimc<16){
        imc.innerHTML +=`
            Criterio de Ingreso
        `
    }
    if(pimc>=16 && pimc<17){
        imc.innerHTML +=`
            Infra peso
        `
    }
    if(pimc>=17 && pimc<18.5){
        imc.innerHTML +=`
            Bajo peso
        `

    }
    if(pimc>=18.5 && pimc<25){
        imc.innerHTML +=`
            Peso normal
        `

    }
    if(pimc>=25 && pimc<30){
        imc.innerHTML +=`
            Sobre peso
        `

    }
    if(pimc>=30 && pimc<35){
        imc.innerHTML +=`
            obesidad premórbida
        `

    }
    if(pimc>=40 && pimc<=45){
        imc.innerHTML +=`
            Obesidad Mórbida
        `

    }
    if(pimc>45){
        imc.innerHTML +=`
            Obesidad Hipermórbida
        `

    }

}
const boton3 =document.createElement('button');
    boton3.innerHTML='INGRESAR PESO Y ALTURA';
    
    boton3.addEventListener('click',function(){
        ingresarDatos();
        
    
    })
   
    botn3.appendChild(boton3)
//4.Ingreso de palabras--------------------------------------------------------------------------------------------------------
function palabraword(){
    var palabras=document.getElementById("palabras");
    
    let palabra=prompt('Ingrese la palabra: ');
    palabra=palabra.toLocaleLowerCase();
    palabras.innerHTML=`
        La palabra que ingreso es: ${palabra} <br>
    `
    palabra=palabra.toLocaleLowerCase();
    if(palabra=="casa"){
        palabras.innerHTML +=`
            La traduccion es: House
        `
        
    }
    if(palabra=="mesa"){
        palabras.innerHTML +=`
        La traduccion es: Table
    `
        
    }

    if(palabra=="perro"){
        palabras.innerHTML +=`
        La traduccion es: Dog
    `
        
    }

    if(palabra=="gato"){
        palabras.innerHTML +=`
        La traduccion es: Cat
    `
        
    }



}
const boton4 =document.createElement('button');
    boton4.innerHTML='Ingresar Palabra';
    
    boton4.addEventListener('click',function(){
        palabraword();
    
    })
   
    botn4.appendChild(boton4);

//5.TRIANGULOS----------------------------------------------------------------------------------

const triangulos=new Array(4)
let te=0;
let tesca=0;
let tis=0;
const triangulo=new Array(3)
function agregrarTriangulo(){
    var lados=document.getElementById("lados");
    lados.innerHTML=``;
    var clasificacion=document.getElementById("clasificacion");
    clasificacion.innerHTML=``
    for(let x=0;x<triangulos.length;x++){
        alert=(`Ingrese medidas del Triangulo ${x+1}`)
        lados.innerHTML +=`
            Triangulo ${x+1}: <br>
        `
        for(let j=0;j<triangulo.length;j++){
            triangulo[j]=prompt(`
            
            Ingrese longitud del lado ${j+1}:` );
            lados.innerHTML +=`
                ${triangulo[j]}
            `
            
    }
    lados.innerHTML +=`<br>`
    if(triangulo[0]==triangulo[1] && triangulo[0]==triangulo[2] ){
        lados.innerHTML +=`
            El triangulo es Equilatero
        `
        te++;
        
    }
    
    if((triangulo[0]==triangulo[1]&&triangulo[0]!=triangulo[2])||(triangulo[0]==triangulo[2]&&triangulo[0]!=triangulo[1])||(triangulo[1]==triangulo[2]&&triangulo[1]!=triangulo[0])){
        lados.innerHTML +=`el triangulo es isósceles`
        tis++;
    }
    if(triangulo[0]!=triangulo[1]&&triangulo[0]!=triangulo[2]&&triangulo[1]!=triangulo[2]){
    lados.innerHTML +=`el triangulo es escaleno`
    tesca++;
    }
    triangulos[x]=triangulo;
    lados.innerHTML +=`<br>`
    }
    clasificacion.innerHTML +=`
    Total de triangulos Equilateros: ${te} <br>
`

clasificacion.innerHTML +=`
            Total de triangulos Escalenos: ${tesca}<br>
        `
        
        clasificacion.innerHTML +=`
            Total de triangulos Isósceles: ${tis}<br>
        `
        
    
        if(te>tesca && te>tis){
            clasificacion.innerHTML +=`
            El triangulo mas repetido es el equilatero <br>
        `
        }else if(tesca>te && tesca>tis){
            clasificacion.innerHTML +=`
            El triangulos mas repetido es el escaleno <br>
        `
        }else{
            clasificacion.innerHTML +=`
            El triangulo mas repetido es el isosceles <br>
        `
            
            
        }
        if(te<tesca && te<tis){
            clasificacion.innerHTML +=`
            El triangulo menos repetido es el equilatero 
        `
        }else if(tesca<te && tesca<tis){
            clasificacion.innerHTML +=`
            El triangulos menos repetido es el escaleno
        `
        }else{
            clasificacion.innerHTML +=`
            El triangulo menos repetido es el isosceles
        `
            
            
        }
   tesca=0;
   te=0;
   tis=0;



}
const boton5 =document.createElement('button');
    boton5.innerHTML='Ingresar medidas de los triangulos';
    
    boton5.addEventListener('click',function(){
        agregrarTriangulo();
        
    })
   
    botn5.appendChild(boton5);