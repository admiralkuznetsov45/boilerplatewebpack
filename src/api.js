module.exports = {
    search: async function(keyword) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        return response.json()

    }
}