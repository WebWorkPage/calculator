function Clear(){
    document.getElementById("res").value="";
}

function Back(){
    var ele = document.getElementById("res");
    ele.value = ele.value.slice(0,-1)
}

function Result() {
   var num1 = document.getElementById('res').value;
   try {
      var num2 = eval(num1.replace('x', '*'));
      document.getElementById('res').value = num2;
   } catch {
      document.getElementById('res').value = 'Error';
   }
}

function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}


document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
      //  Solve(key === '*' ? 'x' : key);
    }
    else if (key === 'Enter') {
       Result();
    } else if (key === 'Backspace') {
       Back();
    } else if (key.toLowerCase() === 'c') {
       Clear();
    }
    else{ //!validKeys.includes(key) (ie other than numbers entered )
      alert("Only numbers are allowed");
    }
 });