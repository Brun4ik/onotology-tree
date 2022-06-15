const fs = require('fs');

const creatingFile = function createFile(dir, data, fileName) {
    fs.open(fileName, 'w+', (err) =>{
        if(err) throw err;
        fs.writeFile(fileName,data, (err) =>{
            if(err) throw err;
            console.log('Файл создан с новыми данными')
        } )
    })
}



module.exports = {
    creatingFile
}