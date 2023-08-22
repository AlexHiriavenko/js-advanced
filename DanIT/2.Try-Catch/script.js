const root = document.getElementById("root");

const books = [
    { 
      author: "Люсі Фолі",
      name: "Список запрошених",
      price: 70 
    }, 
    {
     author: "Сюзанна Кларк",
     name: "Джонатан Стрейндж і м-р Норрелл",
    }, 
    { 
      name: "Дизайн. Книга для недизайнерів.",
      price: 70
    }, 
    { 
      author: "Алан Мур",
      name: "Неономікон",
      price: 70
    }, 
    {
     author: "Террі Пратчетт",
     name: "Рухомі картинки",
     price: 40
    },
    {
     author: "Анґус Гайленд",
     name: "Коти в мистецтві",
    }
  ];

function createList(objsArr) {
    function isValidKey (obj, validKeys, index) {
        validKeys.forEach((validKey) => {
           if (!(validKey in obj) /*!obj.hasOwnProperty(validKey)*/) {
            throw new Error(`Відсутня властивість *** ${validKey} *** у об'єкта, 
            котрий знаходиться у масиві під індексом ${index}`)
           }
        })
    };
    const validKeys = ['author', 'name', 'price'];

    const ul = document.createElement("ul");
    root.append(ul);
    objsArr.map((obj, index) => {
        try {
            isValidKey(obj, validKeys, index)
            const li = document.createElement("li");
            li.innerHTML = `Назва Книги: ${obj.name.bold()}; Автор: ${obj.author.bold()}; 
            Вартість: ${obj.price.toString().bold()} тугриків`
            ul.append(li);
        } catch (error) {
            console.log(error.message);
        }
    })
}

createList(books);