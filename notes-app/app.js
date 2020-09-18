const yargs = require('yargs');
const fs = require('fs');

const val = require('validator');
const chalk = require('chalk');
const notes = require('./notes.js');

// console.log(process.argv);

// create add command
yargs.command({
    command: 'add',
    describe: "add a new note",
    builder:{
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            desribe: "note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
});


yargs.command({
    command: 'remove',
    describe: "remove a note",
    builder: {
        title :{
            describe: "note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: "read a note",
    builder: {
        describe: "read note",
        demandOption: true,
        type: "string"
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: "list your notes",
    handler()  {
        notes.listNotes();
    }
});


yargs.parse();

