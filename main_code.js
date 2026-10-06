async function callPythonScript() {
    // URL вашего удаленного сервера (замените localhost на IP или домен сервера)
    const serverUrl = 'http://localhost:8000/run-script'; 
    
    // Данные, которые мы хотим передать в Python
	const dataToSend = Array.from(tableBody.rows).map(row => Array.from(row.cells).map(val => val.querySelector('input').value));

    try {
        const response = await fetch(serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.status}`);
        }

        const data = await response.json();
        console.log('Ответ от сервера:', data.result); 
        // Выведет: "Python успешно обработал строку: 'ПРИВЕТ ИЗ БРАУЗЕРА!'"
        
    } catch (error) {
        console.error('Не удалось выполнить скрипт:', error);
    }
}

// Вызов функции
callPythonScript();

// const tableBody = document.getElementById('test_table');
// //console.log(tableBody['children'][0]['children'][0]['children'][0][0])
// //console.log(tableBody.rows[0].cells[0].querySelector('input').value)

// // for(i of tableBody.rows){
	// // for(j of i.cells){
		// // console.log(j.querySelector('input').value);
	// // }
// // }

// //const qwe = Array.from(tableBody.rows);
// const qwe = Array.from(tableBody.rows).map(row => Array.from(row.cells).map(val => val.querySelector('input').value));
// //const wer = qwe.map(row => Array.from(row.cells))
// //const qwe = [1,2,3,4]
// //console.log(qwe.map(row => Array.from(row.cells.querySelector('input').value)));
// //console.log(wer[0][0].querySelector('input').value);
// //console.log(qwe);

// wer = JSON.stringify(qwe, null, 2);
// console.log(wer)