
const fetchData = require('./fetchData.js')

fetchData()
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    data.forEach(record => {
      record.timeStatus = record.Time + record.Status
      record.timeStatusFaculty = record.Time + record.Status + record.Faculty
      record.cohortTime = x => { }
      record.value = 1
    })
    const IDs = data.map(x => x.ID)
    const distinctIDs = R.uniq(IDs)
    const cohortDictionaryByID = distinctIDs.map(x => {
      return { ID: x, cohort: 123 }
    })
    console.log(cohortDictionaryByID)

    console.log(IDs)
    console.log(distinctIDs)
    console.log(data)
  })


var array = [
  {
    "ID": "1",
    "Time": "201009",
    "Status": "Enrolled",
    "Faculty": "Arts"
  },
  {
    "ID": "1",
    "Time": "201109",
    "Status": "Enrolled",
    "Faculty": "Arts"
  },
  {
    "ID": "1",
    "Time": "201209",
    "Status": "Enrolled",
    "Faculty": "Arts"
  },
  {
    "ID": "1",
    "Time": "201309",
    "Status": "Enrolled",
    "Faculty": "Arts"
  },
  {
    "ID": "1",
    "Time": "201409",
    "Status": "Enrolled",
    "Faculty": "Arts"
  },
  {
    "ID": "2",
    "Time": "201009",
    "Status": "Enrolled",
    "Faculty": "Arts"
  },
  {
    "ID": "2",
    "Time": "201109",
    "Status": "Enrolled",
    "Faculty": "Arts"
  },
  {
    "ID": "2",
    "Time": "201209",
    "Status": "Enrolled",
    "Faculty": "Arts"
  },
  {
    "ID": "2",
    "Time": "201309",
    "Status": "Enrolled",
    "Faculty": "Science"
  },
  {
    "ID": "2",
    "Time": "201409",
    "Status": "Enrolled",
    "Faculty": "Science"
  },
  {
    "ID": "3",
    "Time": "201009",
    "Status": "Enrolled",
    "Faculty": "Science"
  },
  {
    "ID": "3",
    "Time": "201109",
    "Status": "Enrolled",
    "Faculty": "Science"
  },
  {
    "ID": "3",
    "Time": "201209",
    "Status": "Left",
    "Faculty": "Science"
  },
  {
    "ID": "3",
    "Time": "201309",
    "Status": "Left",
    "Faculty": "Science"
  },
  {
    "ID": "3",
    "Time": "201409",
    "Status": "Enrolled",
    "Faculty": "Science"
  },
  {
    "ID": "4",
    "Time": "201009",
    "Status": "Enrolled",
    "Faculty": "Arts"
  },
  {
    "ID": "4",
    "Time": "201109",
    "Status": "Enrolled",
    "Faculty": "Arts"
  },
  {
    "ID": "4",
    "Time": "201209",
    "Status": "Enrolled",
    "Faculty": "Arts"
  },
  {
    "ID": "4",
    "Time": "201309",
    "Status": "Awarded",
    "Faculty": "Arts"
  },
  {
    "ID": "4",
    "Time": "201409",
    "Status": "Awarded",
    "Faculty": "Arts"
  }
]
array.sort((a, b) => {

  return a.ID - b.ID
  return a.Time - b.Time
})
console.log(array)
