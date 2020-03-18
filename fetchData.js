const fetchData = () => fetch('./testData.json')
  .then((response) => {
    return response.json()
  })

module.exports = fetchData
