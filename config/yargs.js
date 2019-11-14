const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const Completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        Completado
    })
    .command('borrar', 'borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}