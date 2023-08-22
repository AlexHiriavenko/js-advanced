async function parseJson(path) {
    try {
        const response = await fetch(path);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching or parsing JSON:", error);
        throw error; // Rethrow the error to handle it outside this function if needed.
    }
}

export default parseJson;
