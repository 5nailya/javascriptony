const addButton = document.querySelector('#add-button');
const sortButton = document.querySelector('#sort-button');
const peopleTable = document.querySelector('#people-table tbody');
const newPersonInput = document.querySelector('#new-person');
const newPhoneInput = document.querySelector('#new-phone');
const sortLetterInput = document.querySelector('#sort-letter');

// Массив для хранения участников
const peopleList = [];

// Функция для нормализации имени (для уникальности и сортировки)
function normalizeName(name) {
    return name.trim().toLowerCase().split(/\s+/).sort().join(' ');
}

// Функция для добавления нового участника
addButton.addEventListener('click', () => {
    const name = newPersonInput.value.trim();
    const phone = newPhoneInput.value.trim();
    
    if (name && phone) {
        // Проверка на уникальность имени и телефона
        const normalizedNewPerson = normalizeName(name);
        const existingPeople = peopleList.map(person => normalizeName(person.name));

        // Проверка, чтобы номер телефона не превышал 6 символов
        if (phone.length > 6) {
            alert('Номер телефона не может быть длиннее 6 символов!');
            return;
        }

        // Проверка на дублирование
        if (existingPeople.includes(normalizedNewPerson)) {
            alert('Такой участник уже существует!');
            return;
        }

        // Добавляем нового участника в список
        const newPerson = { name, phone };
        peopleList.push(newPerson);

        // Добавляем запись в таблицу
        const row = document.createElement('tr');
        row.innerHTML = `<td>${name}</td><td>${phone}</td>`;
        peopleTable.appendChild(row);

        // Очищаем поля ввода
        newPersonInput.value = '';
        newPhoneInput.value = '';
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
});

// Функция для сортировки по фамилии (или по букве, если указано)
sortButton.addEventListener('click', () => {
    const sortLetter = sortLetterInput.value.trim().toLowerCase();

    // Если введена буква для сортировки
    let sortedPeople;
    if (sortLetter) {
        sortedPeople = peopleList.filter(person => person.name.toLowerCase().includes(sortLetter));
    } else {
        // Если не введена буква — сортируем по всем
        sortedPeople = [...peopleList];  // Создаем копию массива
    }

    // Сортировка по фамилии (по второму слову в имени)
    sortedPeople.sort((a, b) => {
        const surnameA = a.name.split(' ')[1]?.toLowerCase() || '';
        const surnameB = b.name.split(' ')[1]?.toLowerCase() || '';
        return surnameA.localeCompare(surnameB);
    });

    // Очищаем таблицу перед добавлением отсортированных записей
    peopleTable.innerHTML = '';

    // Перезаполняем таблицу отсортированными данными
    sortedPeople.forEach(person => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${person.name}</td><td>${person.phone}</td>`;
        peopleTable.appendChild(row);
    });
});
