window.addEventListener('load', function(e){

    const url = 'https://www.google.com';
    async function getUrl(url){
        fetch(url).then((data)=>console.log(data)).catch((err)=>console.log(err));
    }
    getUrl(url);
})

