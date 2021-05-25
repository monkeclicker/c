var db = openDatabase('Usernames', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id AUTO_INCREMENT, log)')
})

function increment() {
    
       var input = document.getElementById('someId').value
    
    db.transaction(function (tx) {
        
        tx.executeSql('INSERT INTO LOGS (log) VALUES (?)', [input])
    })
}
