let numask = document.getElementById('test').value
let askcontent = document.getElementById('ask')
let point = 0;


document.getElementById("test").addEventListener("click", function(){
  document.getElementById('test').value++
    suivant(numask,askcontent)
    console.log(document.getElementById('test').value)
    
    numask = document.getElementById('test').value
});
const test = document.querySelector('#test')
test.onclick = function () {

  
};

function suivant(numask,askcontent){
  let rbs = document.querySelectorAll("input[name='onetoten']");
  if(numask == 0){}
  else if(numask == 1){
    rbs = document.querySelectorAll("input[name='ask2']");
  }
  else if(numask == 2){
    rbs = document.querySelectorAll("input[name='radio']");
  }
  let selectedValue;
  for (const rb of rbs) {
      if (rb.checked) {
          selectedValue = rb.value;
          if (selectedValue == "truth"){
            alert("Bonne réponse")
            point++
          }
          else{
            if(numask == 0){
            alert("Mauvaise réponse, la bonne réponse était 10")
            }
            else if(numask == 1)
            alert("Mauvais réponse, la bonne réponse était Coup Résonant et Fracture")
            else if(numask == 2)
            alert("Mauvais réponse, la bonne réponse était 1820")
          }
          break;
      }
      
  }
 
if(numask == 0){
    askcontent.innerHTML = "<h2> Quels propositions sont des sorts de Lee Sin</h2>\
    <label class='container'><p>Coup résonant</p>\
  <input type='checkbox' name='ask2' value='truth']>\
  <span class='checkmark'></span>\
</label>\
<label class='container'><p>Forteresse</p>\
  <input type='checkbox' name='ask2' value='fake']>\
  <span class='checkmark'></span>\
</label>\
<label class='container'><p>Fracture</p>\
  <input type='checkbox' name='ask2' value='truth']>\
  <span class='checkmark'></span>\
</label>\
<label class='container'><p>Coup du Dragon</p>\
  <input type='checkbox' name='ask2' value='fake']>\
  <span class='checkmark'></span>\
</label>";
}
else if(numask == 1){
    askcontent.innerHTML = "<h2>Combien coûte Storm Dragon Lee Sin :</h2>  \
    <label class='container'><p>750 RP</p>\
  <input type='radio' name='radio' value='fake'>\
  <span class='checkmark'></span>\
</label>\
<label class='container'><p>975 RP</p>\
  <input type='radio' name='radio' value='fake'>\
  <span class='checkmark'></span>\
</label>\
<label class='container'><p>1350 RP</p>\
  <input type='radio' name='radio' value='fake'>\
  <span class='checkmark'></span>\
</label>\
<label class='container'><p>1820 RP</p>\
  <input type='radio' name='radio' value='truth'>\
  <span class='checkmark'></span>\
</label>";
document.getElementById('test').innerHTML = "Envoyer"
}

else if(numask == 2){

    askcontent.innerHTML = "<h2>Votre résultat : <span id='points'></span> points</h2>";
    document.getElementById("points").innerHTML = point;
    document.getElementById('test').innerHTML = "Félicitations!"
}

};

