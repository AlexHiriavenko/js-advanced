function getAllSurveyPaths(config) {
    // рекурсивная функция которая проходится по опросу и собирает все возможные пути в результирующий объект
    function traverseSurvey(currentConfig, currentPath = [], allPaths = {}) {
        if (Object.keys(currentConfig).length === 0) {
            return allPaths; // Пустой опрос
        }

        //  двойной цикл forEach. Внешний цикл проходит по вопросам,
        // а внутренний цикл - по вариантам ответов для каждого вопроса.
        Object.entries(currentConfig).forEach(([question, answers]) => {
            Object.entries(answers).forEach(([answer, nextConfig]) => {
                // Для каждой комбинации вопроса и ответа создается новый путь newPath,
                // который содержит все предыдущие вопросы и ответы, включая текущие.
                const newPath = [...currentPath, { question, answer }];

                // базовое условие прекращение рекурсии
                if (nextConfig === null) {
                    // Генерируем ключ с порядковым номером (path1, path2, ...)
                    const key = `path${Object.keys(allPaths).length + 1}`;
                    // добавляем путь в результирующий объект
                    allPaths[key] = newPath;
                    // рекурсия
                } else {
                    traverseSurvey(nextConfig, newPath, allPaths);
                }
            });
        });

        return allPaths;
    }

    return traverseSurvey(config);
}

export default getAllSurveyPaths;
