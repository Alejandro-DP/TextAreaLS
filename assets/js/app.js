//vars
const listtwets = document.getElementById('lista-tweets');



//eventos 
eventos();

function eventos (){

document.querySelector('#formulario').addEventListener('submit', agregarTweet);

//eventList Borrar tweet
listtwets.addEventListener('click',BorrarTweet);
//cargar lo almacenado
document.addEventListener('DOMContentLoaded',cargarLS);
}

//funciones 
function agregarTweet(e){
    e.preventDefault();
    //agreagar tweet
    const tweet = document.getElementById('tweet').value;
    const li = document.createElement('li');
    //boton de borrar tweet
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

 
   


    
    li.innerText = tweet;
    //agrega a la lista 
    listtwets.appendChild(li);
    //agrega boton borrar
    li.appendChild(botonBorrar);

    agregarLS(tweet);
    

}
//eliminar del DOM
function BorrarTweet(e){
    e.preventDefault();

    if (e.target.className == 'borrar-tweet'){
     e.target.parentElement.remove();
     borrarTweetLocalStorage(e.target.parentElement.innerText);    }
    
}
//añadir a local
function agregarLS(tweet){
  let tweets;
/// añadir 
tweets = ArayStorge();
    tweets.push(tweet);
    //convertir a string
    localStorage.setItem('tweets', JSON.stringify(tweets));
    
    
}
function ArayStorge(){
    let tweets;

    //revisar u valor en local
    if (localStorage.getItem('tweets') === null){

        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}
function cargarLS(){
    let tweets;
    tweets = ArayStorge();
    
    tweets.forEach(function(tweet) {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

         const li = document.createElement('li');
         li.innerText = tweet;
         li.appendChild(botonBorrar);
         listtwets.appendChild(li);
    //agrega a la lista 
   
  
    });
}
function borrarTweetLocalStorage(tweet) {

    let tweets, tweetBorrar;
    // Elimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length -1);

    tweets = ArayStorge();

    tweets.forEach(function(tweet, index) {
         if(tweetBorrar === tweet) {
              tweets.splice(index, 1);
         }
    }) ;

    localStorage.setItem('tweets', JSON.stringify(tweets) );
}







