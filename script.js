function tell(){
    //declarando as variaveis apenas o res e declarado vazio pois como tera que aparece todos os passos da contagem ate o fim 
    //apenas quando for colocar no html tera que declarar ela com document 
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var pass = document.getElementById('pass')
    var res =''
    //condição para que se algum valor colocado ser 0 ou vazio retorna o "impossivel contar"
    if(Number(start.value)=="" ||Number(end.value)=='' ||Number(end.value)=="" ){
        
        res='Impossivel contar'
        document.getElementById('res').innerHTML=res
    }else{
        for(i=Number(start.value);i<=Number(end.value);i+=Number(pass.value)){ 
            res+='👉'+i+', ';
        document.getElementById('res').innerHTML=res
        
        }
    } 
}



