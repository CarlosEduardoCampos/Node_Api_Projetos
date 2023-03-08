const express = require('express');
const rotas = express.Router();

let cursosInfo = [
    {
        'curso':'Node.js',
        'info' :'Curso de Node.js'
    },
    {
        'curso':'REACT',
        'info' :'Curso de REACT'
    },
    {
        'curso':'Java',
        'info' :'Curso de Java'
    }
]

rotas.get('/', (req, res) => {
    res.json({ola:'Seja Bem Vindo'});
});

rotas.get('/:cursoID', (req, res) => {
    const curso = req.params.cursoID;
    let cursoInfo = cursosInfo.find(i => i.curso == curso);
    
    if (!cursoInfo)
    {
        res.status(404).json(
            {
                erro:'Curso não encontrado',
                pesquisa:curso
            }
        );
    }
    else{
        res.status(200).json(cursoInfo);
    }
});

module.exports = rotas;