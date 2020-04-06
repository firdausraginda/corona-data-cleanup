obj = {}

obj['total_cases'] = {}

timeline = {}
timeline['03-01-2020'] = 2
timeline['03-02-2020'] = 10
timeline['03-03-2020'] = 3

obj['total_cases'] = timeline

arrDate = []
arrValue = []

for (let [key, value] of Object.entries(obj['total_cases'])) {
    arrDate.push(key)
    arrValue.push(value)
}
console.log(arrDate[2]);
console.log(arrValue);