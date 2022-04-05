const Commander = (()=> {
    const o = {
        comprar: x => {
            console.log(`Comprar ${x}`)
        },
        vender: x => {
            console.log(`Vender ${x}`)
        }
    }

    return {
        run: (comando, argumentos) => {
            if(!comando){
                console.log('comando no existe')
                return;

            }
            o[comando](argumentos)
        }
    }
})();