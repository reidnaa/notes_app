const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>  "Your Notes...";


// add note 
const addNote = (title, body) => {
    const notes = loadNotes();

    // const dupicateNotes = notes.filter(note => note.title === title );
    const dupicateNote = notes.find(note => note.title === title );

    if (!dupicateNote){
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes);
        console.log(chalk.green.inverse('new note added'));
    } else {
        console.log(chalk.red.inverse('duplicate note'));
    }
 
}

const removeNote = title => {
    const notes = loadNotes();
    const newNotes = notes.filter(note => note.title !== title);

    if (notes.length > newNotes.length){
        console.log(chalk.bgGreen('Note Removed'));
        saveNotes(newNotes);
    }else{
        console.log(chalk.bgRed('That note is not here'));
    }

    
    
    
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse('Your Notes...'));
    notes.forEach(note => {
        console.log(chalk.blue(note.title));
    });
    
}

const readNote = (title) => {
    const notes = loadNotes();
    notes.find(note => {
        if(note.title === title){
            console.log("title: " + chalk.blue.inverse(note.title)+ " " + "body: " + note.body);
        }
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {

    try{
        const dataBuffer =  fs.readFileSync('notes.json');

        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e){
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote : removeNote,
    listNotes: listNotes,
    readNote: readNote
}