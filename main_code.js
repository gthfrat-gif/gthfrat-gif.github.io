async function callPythonScript() {
    // URL вашего удаленного сервера (замените localhost на IP или домен сервера)
    //const serverUrl = 'http://localhost:8000/run-script'; 
	const serverUrl = 'https://gthfrat-gif.github.io'
    
    // Данные, которые мы хотим передать в Python
	const tableBody = document.getElementById('test_table');
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
