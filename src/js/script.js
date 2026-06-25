document.body.addEventListener('keyup', (event)=>{
    // Mudando para tudo minusculo pois no console mostra KeyW ... e precisamos de keyq para pegar o id corretamente
    playSound(event.code.toLocaleLowerCase());
});

// button para composição
const btn = document.querySelector('.composer button');
btn.addEventListener('click', ()=> {
    let song = document.getElementById('input').value.toLocaleLowerCase();

    //console.log('musica', song)
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});


function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
        console.log(songItem)

        setTimeout(()=>{
            playSound(`key${songItem}`);
        },wait);

         wait += 250;
    }
}

function playSound(sound) {
     // # --> selecionar o id definido no html porem vamos torna dinamico e vamos usar template para conseguir pegar o id do som idividual
    let audioElement = document.querySelector(`#s_${sound}`);
    // Consultand/pesquisando o seletor para pegar referencia da div pelo id do seu atributo 
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        // INTERFACE HTMLMediaElement = atributo currentTime
        audioElement.currentTime = 0;
        // metodo da tag de audio no javascript para tocar o som
        audioElement.play();
    }

    if(keyElement){
        // Na lista de classe adiciono a classe active do css na div clicada baseado na referencia da div selecionada pelo data* que guarda o dado personalizado exemplo: keyq
        keyElement.classList.add('active'); // essa class no css mudar o backgournd e a borda para amarela


        // metodo da WINDOW essa interface temporizadora que executa uma função quando o temporizado expira
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300)
    }
} 