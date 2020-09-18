const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>  "Your Notes...";


// add note 
const addNote = (title, body) => {
    const notes = loadNotes();

    const dupicateNotes = notes.filter(note => note.title === title );

    if (dupicateNotes.length === 0){
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
    const titles = notes.forEach(note => {
        console.log(chalk.blue(note.title));
    });
    
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
    listNotes: listNotes
}