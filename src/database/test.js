const Database = require('./db.js')
const createProffy = require('./createProffy.js')

Database.then(async (db) => {
    //inserir
    proffyValue = {
        name     : "Matheus Vidigal", 
        avatar   : "https://avatars2.githubusercontent.com/u/52816125?s=460&u=8e986562ce5d3b23b51a97eea57ebd92ac126deb&v=4", 
        whatsapp : "11971321587", 
        bio      : "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    },
    classValue = {
        subject  : "4", 
        cost     : "100"
    },
    classScheduleValues = [
        { 
        weekday  : 1, 
        time_from: 720, 
        time_to  : 1220
        },
        {
        weekday  : 0, 
        time_from: 520, 
        time_to  : 1220
        }
    ]
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
   
    //consultar
    const selectProffys = await db.all("SELECT * FROM proffys")
    
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    console.log(selectClassesSchedule)
})