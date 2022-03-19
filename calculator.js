function getValue(btnId) {
  // alert(btnId);
  // console.log(btnId);

  if (
    btnId == "btn+" ||
    btnId == "btn-" ||
    btnId == "btn/" ||
    btnId == "btn*"
  ) {
    // console.log(btnId);
    var data = document.getElementById("workspace");
    var val = document.getElementById(btnId).innerHTML;
    data.innerHTML += val;
  } else {
    var val = document.getElementById(btnId).innerHTML;
    console.log(val);
    var num = parseInt(val);
    // console.log(typeof num);
    var data = document.getElementById("workspace");
    data.innerHTML += val;
    // data.appendChild(data);
    // clear();
  }
}

function doOperation(btnId) {
  if (btnId == "btn=") {
    var data = document.getElementById("workspace").innerHTML;

    var res = eval(data);

    document.getElementById("workspace").innerHTML = res;
    //console.log( data);
    //data = data.split(" ").join("");

    //console.log(data);
    /*
    if (
      data.includes("*") ||
      data.includes("/") ||
      data.includes("-") ||
      data.includes("+")
    ) {
      var sum = 0;

      console.log(typeof data);

      // var arr = Array.from(data);
    var arrOp=data.match(/[+,-,*,/]/gi);
    console.log(arrOp);
      
      // Addition Loop
      console.log(data.length); 
      for (var i = 0; i < data.length-i; i++) {

          
        
        //console.log(parseFloat(data[o]));
        if(data.split("+")){
          var arr = data.split("+");
          console.log(parseFloat(arr[i]));
          sum = sum + parseFloat(arr[i]);
          console.log("Addition:", sum);
          continue;
        }
         
        if(data.split("-")){
          var arr = data.split("-"); 
          sum = sum - parseFloat(arr[i]);
          console.log("Subtraction:", sum);
        }
      /*l
        {
          let arr = data.split("*");
          sum = 1;
          sum = sum * parseFloat(arr[i]);
          console.log("Multiplition:", sum);
        }

        {
          let arr = data.split("/");
          sum = parseFloat(arr[0]);
          sum = sum / parseFloat(arr[i]);
          console.log("Division:", sum);
        }
      }
      console.log(sum);
      document.getElementById("workspace").innerHTML = sum;
    }

    /*
     //Perform addition
      if (data.includes("+")) {
        var arr = data.split("+");
        console.log(arr);
        var sum=0;
        for (var i = 0; i < arr.length; i++) {
          console.log(parseFloat(arr[i]));
          sum = sum + parseFloat(arr[i]);
        }
        document.getElementById("workspace").innerHTML = sum;
      }
       //Perform substraction
      if (data.includes("-")) {
        var arr = data.split("-");
        //console.log(data);
        var sum = parseFloat(arr[0]);
        for (var i = 1; i < arr.length; i++) {
          
          //console.log(parseInt(arr[i]));
          sum = sum - parseFloat(arr[i]);

        }
        console.log(sum);
        document.getElementById("workspace").innerHTML = sum;
      }
       //Perform multiplication
      if (data.includes("*")) {
        var arr = data.split("*");
        var sum = 1;
        for (var i = 0; i < arr.length; i++) {
          //console.log(parseInt(arr[i]));
          sum = sum * parseFloat(arr[i]);
        }
        document.getElementById("workspace").innerHTML = sum;
      }
       //Perform division
      if (data.includes("/")) {
        var arr = data.split("/");
       // console.log(data);
       var sum = parseFloat(arr[0]);
        for (var i = 1; i < arr.length; i++) {
          console.log(sum);
         // console.log(parseInt(arr[i])); 
           sum = sum / parseFloat(arr[i]);
        }
        document.getElementById("workspace").innerHTML = sum;
      }*/
  }
}

function getDel(btnId) {
  if (btnId == "btnDel") {
    var data = document.getElementById("workspace").innerHTML;
    //console.log(typeof data);
    data = data.split(" ").join("").slice(0, -1);
    if (data.includes("0", 0))
      document.getElementById("workspace").innerHTML = data;
  }
}

function clearValue(btnId) {
  //alert(btnId);
  if (btnId == "btnC") {
    //var val = document.getElementById(btnId).innerHTML;
    var data = document.getElementById("workspace");
    data.innerHTML = "";
  }
}
