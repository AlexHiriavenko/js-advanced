import { initiallistTitle, resultTitle } from "./modules/variablesDOM.js";
import getAllSurveyPaths from "./modules/getAllSurveyPaths.js";
import renderInitialList from "./modules/renderInitialList.js";
import renderAllPathsList from "./modules/renderAllPathsList.js";

// розробити формат JSON конфігурації яка дозволить задавати правила,
// що пов'яжуть запитання з відповідями.
const surveyConfig = {
    "What is your marital status?": {
        Single: {
            "Are you planning on getting married next year?": {
                Yes: null,
                No: null,
            },
        },
        Married: {
            "How long have you been married?": {
                "Less than a year": null,
                "More than a year": {
                    "Have you celebrated your one year anniversary?": {
                        Yes: null,
                        No: null,
                    },
                },
            },
        },
    },
};

console.log("вхiднi данi", surveyConfig);

// функция которая возвращает об’єкт, що є результатом роботи скрипту тестування, з інформацією про кількість всіх
// можливих шляхів опитувань (paths.number), та всіма можливими послідовностями запитань з відповідями (paths.list).
const allPaths = getAllSurveyPaths(surveyConfig);
console.log("дані на виході", allPaths);

// рендерим в DOM входные данные в виде списка
renderInitialList(surveyConfig, initiallistTitle);

// рендерим в DOM выходные данные в виде списка
const initialDataList = document.querySelector(".initialDataList");
initialDataList.insertAdjacentElement("afterend", resultTitle);

renderAllPathsList(allPaths, resultTitle);
