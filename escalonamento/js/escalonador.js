(function (window, document) { //IIFE immediately invoked function expression
    
    let Simulador
    let StatusSimulador = ['Parado', 'Executando','Finalizado']

    let statusProcesso = {
        NOVO: 0,
        PROCESSANDO: 1,
        AGUARDANDO: 2,
        CONCLUIDO:3,
        ESPERANDO_IO:4,
    }

    let btnExecutarSimulador = document.querySelector('#btnExecutar')
    let statusSimulador = document.querySelector('#simulatorStatus')

    btnExecutarSimulador.addEventListener("click",function(){Simulador.iniciar()})

    Simulador = {
        Status: null,

        quantum: document.querySelector('#quantum'),
        processPerMin: document.querySelector('#ppm'),
        processTime: document.querySelector('#lifeTime'),
        ioChance: document.querySelector('#ioChance'),
        waitTimeIO: document.querySelector('#waitTimeIO'),
        simuladorStatus: document.querySelector('#simuladorStatus'),
        cycles: document.querySelector('#cycles'),
        createdProcess: document.querySelector('#createdProcess'),
        completedProcess: document.querySelector('#completedProcess'),
        IoProcessQtd: document.querySelector('#IoProcess'),
        processTable: document.querySelector('#processTable'),

        iniciar: function () {
            this.processTable.innerHTML = ''

            
        }
    }
}(window, document))