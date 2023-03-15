var axios = require('axios')

function getLastId(callback){
    axios.get("http://localhost:3000/tasks?_sort=id&_order=desc")
    .then(response => {
        callback(response.data[0].id)
    })
    .catch(err => {
        return err
    })
}

module.exports.getAllToDos = () => {
    return axios.get("http://localhost:3000/tasks")
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err
        })
}

module.exports.addToDo = (toDoItem) => {
    return new Promise((resolve, reject) => {
            getLastId(lastID =>{
            return axios.post('http://localhost:3000/tasks',{
                ateQuando: toDoItem.ateQuando,
                quem: toDoItem.quem,
                oQue: toDoItem.oQue,
                feito: false,
                id: lastID + 1
            }).then(function(response){
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
        })
    })
}

module.exports.updateToDo = (toDoItem) => {
    return axios.put('http://localhost:3000/tasks/' + toDoItem.id,{
        feito: toDoItem.feito  == 'on' ? true: false,
        ateQuando: toDoItem.ateQuando,
        quem: toDoItem.quem,
        oQue: toDoItem.oQue,
    })
    .then(function(response){
        return response.data
    })
    .catch(err => {
        return err
    })
}

module.exports.deleteToDo = (toDoID) => {
    return axios.delete('http://localhost:3000/tasks/' + toDoID,{
    })
    .then(function(response){
        return response.data
    }).catch(err => {
        return err
    })
}