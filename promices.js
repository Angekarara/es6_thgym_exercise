new Promise(function(resolve , reject){
    window.setTimeout(function createSunday(flavor = 'chocolate'){
        const sundae = {}
        if ( / *iceCreamConeIsEmpty(flavor)* / ) {
            reject(`Sorry, we're out of that flavor :-(`);
        }
        resolve(sundae)
    },Math.random() * 2000)})