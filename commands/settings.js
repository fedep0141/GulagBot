module.exports = {
    name: "setting",
    description: "Aiuto con i comandi",
    execute(message, args, db) {
        console.log(db.all());
        // if(args.lenght == 0) {
            message.channel.send(db.all());
        // }
    }
}