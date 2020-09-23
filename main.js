//Perguntar o nome
let nome = prompt("Qual o seu nome?")
document.write("Olá "+ nome)
let inicio=confirm("Bem-Vindo " + nome + ", Você tem certeza de que quer participar?");
let sair = "Voce nao quis participar. Obrigado pela sua resposta!";
if(inicio==false){document.write(sair);}
else{ window.alert('Começou o Vestibular! Clique em Ok abaixo para começar');
//Inicio do quiz
let certo = "<b style='color:green;'>Correto!</b>"; 
let errado = "<b style='color:red;'>Errado!</b>";
let o = new Array();
let acertos=0; 
let erros=0; 
let respostas = new Array(); 
let p = new Array();
let r = new Array();
let t=3; //COLOQUE AQUI TOTAL DE PERGUNTAS DO QUIZ !!!!
// LISTA DE PERGUNTAS
p[1] = "Quanto é 100/5? \n a:) 20 \n b:)30 \n c:)40 ";
r[1] = 20;
p[2] = "Se um triângulo retângulo tem lados 6 e 8, qual é o valor da sua hipotenusa? \n a:) 25 \n b:)11 \n c:)10 ";
r[2] = 10;
p[3] = "Qual o unico numero primo par \n a:) 6 \n b:)2 \n c:)8";
r[3] = 2;
//ADICIONE MAIS PERGUNTAS AQUI COPIANDO 2 EM 2 LINHAS: P[] = PERGUNTA R[] = RESPOSTA
for(let i=1;i<=t;i++){o[i] = i;} //gera uma sequencia de t numeros
for(let i=1;i<=10;i++)          //embaralha a sequencia 10 vezes
{
n=Math.round(t*(Math.random())); 
m=Math.round(t*(Math.random()));
if(m==0){m++;}
if(n==0){n++;}
let temp = o[n];
o[n]=o[m];
o[m]=temp;
} 
for(let i=1;i<=t;i++)
{
respostas[o[i]] = prompt(p[o[i]],"");
if(respostas[o[i]]==r[o[i]]){respostas[o[i]]=certo;acertos++;}else{respostas[o[i]]=errado;erros++;}
}
//fim do quiz
document.write(", suas respostas:");
document.write("<ol>");
for(let i=1;i<=t;i++)
{
document.write("<li>"+respostas[o[i]]);}
document.write("</ol>");
document.write("<br>Total de acertos: "+acertos);
document.write("<br>Total de erros: "+erros);
document.write("<br><br><input type=button value='Respostas' Onclick=javascript:if(document.getElementById('rp').style.display=='none'){document.getElementById('rp').style.display='block';}else{document.getElementById('rp').style.display='none';}>");
document.write("<br><div id='rp' class='rp' style='display:none;'><ol>");
for(let i=1;i<=t;i++)
{ document.write("<li>"+p[o[i]]+"<br>R:"+r[o[i]]);}
document.write("</ol></div>");
}
