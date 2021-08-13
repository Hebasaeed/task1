
const notes=require('./notes')
const yargs=require('yargs')



////////////////add//////////////


yargs.command({
    command:'add',
    describe:'add notes',
    builder:{
        id:{
            describe:'this is describe id',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'this is describe name',
            demandOption:true,
            type:'string'

        },
        grade:{
            describe:'this is describe grade',
            demandOption:true,//must write this parameter
            type:'number'

        },
        comment:{
            describe:'this is describe comment',
            type:'string'

        }

    },
    handler:(argv)=>{
        
        notes.addNotes(argv.id,argv.name,argv.grade,argv.comment)
        // console.log('id='+argv.id)
        // console.log('name='+argv.name)
        // console.log('grade='+argv.grade)
        // console.log('comment='+argv.comment)

    }
})

//////////////list///////////
yargs.command({
    command:'list',
    describe:'list notes',
    handler:()=>{
        notes.listNotes()
    }
})

///////////////delete///////////


yargs.command({
    command:'delete',
    describe:'delete notes',
    builder:{
        id:{
            describe:'this is describe id',
            demandOption:true,
            type:'number'
        }
    },
    handler:(argv)=>{
        notes.deleteNotes(argv.id)
    }
})


/////////////read///////////////////
yargs.command({
    command:'read',
    describe:'read notes',
    builder:{
        id:{
            describe:'this is discribe id',
            demandOption:true,
            type:'number'
        }
    },
    handler:(argv)=>{
        notes.readNotes(argv.id)
    }
});

//  console.log(yargs.argv)
    yargs.parse()