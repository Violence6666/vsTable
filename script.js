let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);
// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Критерий";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Яндекс.практикум";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Stepik";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Андрей Созыкин";



row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Мобильная версия";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "+";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "+";
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "+";


row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "Обратная связь";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "+";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "+";
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "-";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
tbody.appendChild(row_3);




// Creating and adding data to third row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "Перечень разделов сайта в основной навигации";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "+";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "+";
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = "-";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
tbody.appendChild(row_4);


let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "Наличие личного кабинета";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = "+";
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "+";
let row_5_data_4 = document.createElement('td');
row_5_data_4.innerHTML = "-";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
tbody.appendChild(row_5);



let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerHTML = "Обновление данных";
let row_6_data_2 = document.createElement('td');
row_6_data_2.innerHTML = "+";
let row_6_data_3 = document.createElement('td');
row_6_data_3.innerHTML = "+";
let row_6_data_4 = document.createElement('td');
row_6_data_4.innerHTML = "+";

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
row_6.appendChild(row_6_data_3);
row_6.appendChild(row_6_data_4);
tbody.appendChild(row_6);


let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.innerHTML = "Возможность редактирования/изменения личных данных";
let row_7_data_2 = document.createElement('td');
row_7_data_2.innerHTML = "+";
let row_7_data_3 = document.createElement('td');
row_7_data_3.innerHTML = "+";
let row_7_data_4 = document.createElement('td');
row_7_data_4.innerHTML = "-";

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
row_7.appendChild(row_7_data_3);
row_7.appendChild(row_7_data_4);
tbody.appendChild(row_7);