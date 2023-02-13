let jsonData = '{"drawings":['+
'{"date": "11-02-2023","numbers": [6, 14, 16, 24, 28, 44]},'+
'{"date": "09-02-2023","numbers": [1, 13, 26, 40, 45, 49]},'+
'{"date": "07-02-2023","numbers": [10,13,14,23,40,44]},'+
'{"date": "04-02-2023","numbers": [14,20,22,26,47,48]},'+
'{"date": "02-02-2023","numbers": [18,29,31,35,40,46]},'+
'{"date": "31-01-2023","numbers": [5,8,19,28,41,46]},'+
'{"date": "28-01-2023","numbers": [4,24,34,39,40,44]},'+
'{"date": "26-01-2023","numbers": [7,15,26,28,33,35]}]}';


let jsObject = JSON.parse(jsonData);

const numbers = Array(49).fill(0);

var text1="<table><tr><th>Losowanie z dnia</th><th colspan=\"6\">Wytypowane Numery</th>";
var ball1,ball2,ball3,ball4,ball5,ball6;
for(let i=0; i<7; i++)
    {
        numbers[jsObject.drawings[i].numbers[0]-1]++;
        numbers[jsObject.drawings[i].numbers[1]-1]++;
        numbers[jsObject.drawings[i].numbers[2]-1]++;
        numbers[jsObject.drawings[i].numbers[3]-1]++;
        numbers[jsObject.drawings[i].numbers[4]-1]++;
        numbers[jsObject.drawings[i].numbers[5]-1]++;
        ball1="<td><div class=\"ball\"><p class=\"number\">"+jsObject.drawings[i].numbers[0]+"</div></p></td>"
        ball2="<td><div class=\"ball\"><p class=\"number\">"+jsObject.drawings[i].numbers[1]+"</div></p></td>"
        ball3="<td><div class=\"ball\"><p class=\"number\">"+jsObject.drawings[i].numbers[2]+"</div></p></td>"
        ball4="<td><div class=\"ball\"><p class=\"number\">"+jsObject.drawings[i].numbers[3]+"</div></p></td>"
        ball5="<td><div class=\"ball\"><p class=\"number\">"+jsObject.drawings[i].numbers[4]+"</div></p></td>"
        ball6="<td><div class=\"ball\"><p class=\"number\">"+jsObject.drawings[i].numbers[5]+"</div></p></td></tr>"

        text1=text1+"<tr><td>"+jsObject.drawings[i].date+"</td>"
        text1=text1+ball1+ball2+ball3+ball4+ball5+ball6

    }
    text1=text1+"</table>"
    document.getElementById("stats").innerHTML =
     text1;


     var text2="<table><tr><th>Numer</th><th>Ilość powtórzeń</th><th>Numer</th><th>Ilość powtórzeń</th><th>Numer</th><th>Ilość powtórzeń</th><th>Numer</th><th>Ilość powtórzeń</th><th>Numer</th><th>Ilość powtórzeń</th>"
     for(let i=0; i<10; i++)
     {
        text2=text2+"<tr><td>"+"<div class=\"ball\"><p class=\"number\">"+(i+1)+"</div>"+"<td>"+numbers[i]+"</td><td>"+"<div class=\"ball\"><p class=\"number\">"+(i+10)+"</div>"+"<td>"+numbers[9+i]+"</td><td>"+"<div class=\"ball\"><p class=\"number\">"+(i+20)+"</div>"+"<td>"+numbers[19+i]+"</td><td>"+"<div class=\"ball\"><p class=\"number\">"+(i+30)+"</div>"+"<td>"+numbers[29+i]+"</td><td>"+"<div class=\"ball\"><p class=\"number\">"+(i+40)+"</div>"+"<td>"+numbers[39+i]+"</td></tr>"
     }
     text2=text2+"</table>"
     document.getElementById("chart").innerHTML =
     text2;


     //napisy wygenerowane przez chat
     var xValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
     "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
     "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
     "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
     "41", "42", "43", "44", "45", "46", "47", "48", "49"
     ];
     var yValues = [numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], 
     numbers[5], numbers[6], numbers[7], numbers[8], numbers[9], 
     numbers[10], numbers[11], numbers[12], numbers[13], numbers[14], 
     numbers[15], numbers[16], numbers[17], numbers[18], numbers[19], 
     numbers[20], numbers[21], numbers[22], numbers[23], numbers[24], 
     numbers[25], numbers[26], numbers[27], numbers[28], numbers[29], 
     numbers[30], numbers[31], numbers[32], numbers[33], numbers[34], 
     numbers[35], numbers[36], numbers[37], numbers[38], numbers[39], 
     numbers[40], numbers[41], numbers[42], numbers[43], numbers[44], 
     numbers[45], numbers[46], numbers[47], numbers[48]
     ];

     const rainbowColors = [];
        for (let i = 0; i < 49; i++) {
        let angle = i * 360 / 49;
        let color = `hsl(${angle}, 100%, 50%)`;
        rainbowColors.push(color);
        }
     var barColors = [
        rainbowColors[0], rainbowColors[1], rainbowColors[2], rainbowColors[3], rainbowColors[4], rainbowColors[5], 
        rainbowColors[6], rainbowColors[7], rainbowColors[8], rainbowColors[9], rainbowColors[10], rainbowColors[11], 
        rainbowColors[12], rainbowColors[13], rainbowColors[14], rainbowColors[15], rainbowColors[16], rainbowColors[17], 
        rainbowColors[18], rainbowColors[19], rainbowColors[20], rainbowColors[21], rainbowColors[22], rainbowColors[23], 
        rainbowColors[24], rainbowColors[25], rainbowColors[26], rainbowColors[27], rainbowColors[28], rainbowColors[29], 
        rainbowColors[30], rainbowColors[31], rainbowColors[32], rainbowColors[33], rainbowColors[34], rainbowColors[35], 
        rainbowColors[36], rainbowColors[37], rainbowColors[38], rainbowColors[39], rainbowColors[40], rainbowColors[41], 
        rainbowColors[42], rainbowColors[43], rainbowColors[44], rainbowColors[45], rainbowColors[46], rainbowColors[47], 
        rainbowColors[48]   
     ];

     
     
        
     
     new Chart("myChart", {
       type: "doughnut",
       data: {
         labels: xValues,
         datasets: [{
           backgroundColor: barColors,
           data: yValues
         }]
       },
       options: {
         title: {
           display: true,
           text: "Numery losowań"
         }
       }
     });

     //generowany przez chat nie dziala poprawnie
     let sortedNumbers = numbers.slice().sort((a, b) => b - a); // posortuj liczby w kolejności malejącej
     let sixLargestNumbers = sortedNumbers.slice(0, 6); // pobierz pierwsze 6 największych liczb
     
     let indices = [];
     for (let i = 0; i < numbers.length; i++) {
       if (sixLargestNumbers.includes(numbers[i]) && !indices.includes(i)) {
         indices.push(i);
       }
       if (indices.length === 6) {
         break;
       }
     }


        

        let text3="<table><tr><th colspan=\"6\">Sześć najczęstszych liczb</th></tr>"
        text3=text3+"<tr><td>"+"<div class=\"ball\"><p class=\"number\">"+(indices[0]+1)+"</div>"+"</td><td>"+"<div class=\"ball\"><p class=\"number\">"+(indices[1]+1)+"</div>"+"</td><td>"+"<div class=\"ball\"><p class=\"number\">"+(indices[2]+1)+"</div>"+"</td><td>"+"<div class=\"ball\"><p class=\"number\">"+(indices[3]+1)+"</div>"+"</td><td>"+"<div class=\"ball\"><p class=\"number\">"+(indices[4]+1)+"</div>"+"</td><td>"+"<div class=\"ball\"><p class=\"number\">"+(indices[5]+1)+"</div>"+"</td></tr>"
        document.getElementById("most").innerHTML = text3;

