module.exports = function (app) {

    /* Rota para pagina index ou home */
    app.get('/',(req,res) => {
        res.status(200).json({ok:'conected'})
    })
}
