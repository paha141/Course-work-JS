////disabled блокирует возможность изменения 

var addButton= document.getElementById("addButton");
addButton.onclick = handleButtonClick;    

function handleButtonClick() { //выполняется при нажатии кнопки
  var m = document.getElementById("m").value;
  var n = document.getElementById("n").value;
  var arr = Create2DArray(m);
  var flag = true;
  var str = '';
  var error = 'Введите либо 0, либо 1';

  for(var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      str = 'tb' + i + j;

      var numberElement = document.getElementById(str);
      if (numberElement.value == 1 || numberElement.value == 0) {
        if (numberElement.value == 1) 
          numberElement.className = 'island';
        else
          numberElement.className = 'noisland';
        arr[i][j] = numberElement.value;
      }
      else  {
        flag = false;
      }
    }
  }
      
  if (flag){
    getMaxArea(arr, m, n);
  }
  else alert(error);
}

function getMaxArea(arr, m, n){
  var length = Math.ceil(m*n/4);
  var listOfAreas = new Array(length).fill(0); 
  var index = -1;
  
  //поиск по матрице
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
        index++;
        arr[i][j] = 0;
        recursion(arr, listOfAreas, index, i, j);
        }
      }
  }

  //поиск max элемента в листе
  var max = listOfAreas[0];
  for (var i = 1; i < listOfAreas.length; i++) {
    if (listOfAreas[i] > max) 
    max = listOfAreas[i];    
  }

  //вывод значения 
  var resultElement = document.getElementById("result");
  resultElement.value = max;
}
      

function recursion(arr, listOfAreas, index, x, y) {
  listOfAreas[index]++;
  for (var i = x - 1; i <= x + 1; i++) {
    if (i < 0 || i >= arr.length) 
      continue;
      for (var j = y - 1; j <= y + 1; j++) {
        if (j < 0 || j >= arr[i].length)
          continue;
          if (arr[i][j] == 1) {
            arr[i][j] = 0;
            recursion(arr, listOfAreas, index, i, j);
      }
    }
  }
}

function Create2DArray(rows) {
let arr = []; 
  for (let i=0;i<rows;i++) {
      arr[i] = [];
  }
  return arr;
}