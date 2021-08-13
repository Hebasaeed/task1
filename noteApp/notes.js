
const fs=require('fs')
/////////add////////////
const addNotes=(id,name,grade,comment)=>{
    const notes=loadNotes()

    const dupId=notes.filter((note)=>{
        return note.id===id
    })
    console.log(dupId)
    if(dupId.length===0){
    notes.push(
        {
            id:id,
            name,
            grade,
            comment
    }
    )
    saveNotes(notes)
    console.log('save successfully')
}else
console.log('error duplicate id')
}

///////load///////
const loadNotes=()=>{
    try{const dataBuffer =fs.readFileSync('notes.json').toString()
     return JSON.parse(dataBuffer)
}
catch(e){
    return []
}
}



////save//////
const saveNotes=(notes)=>{
    const saveData=JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}



//////////////delete/////////////////
const deleteNotes=(id)=>{
    const notes=loadNotes()
    const notesTokeep=notes.filter((note)=>{
        return note.id !==id
    })
    saveNotes(notesTokeep)
    console.log(notesTokeep)

}

///////////read//////////////
const readNotes=(id)=>{
    const notes=loadNotes()
    const notee=notes.find((note)=>{
         return note.id===id

    })
    if(notee){
        console.log(notee)
        console.log('id='+notee.id+' ....student name='+notee.name+'....grade='+notee.grade)
    }else
    console.log('this id not found')
}
//////////list///////////////
const listNotes=()=>{
    const notes=loadNotes()
    notes.forEach((note)=>{
        console.log('id='+note.id+'.....name='+note.name)

    })
}


module.exports={
    addNotes:addNotes,
    readNotes,
    listNotes,
    deleteNotes
}