
const fs = require ('fs');

const requestHandel= ((req, res)=>{

    const url= req.url;
    const method= req.method

    if (url === '/') { // vérification de l'url 
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head> <title> Ma première réponse</title> </head> <body> <form action="/message" method="POST"> <input type="text" name= "message"> <button>send</button></form></body></head>');
        return res.end() // retourne la page pour terminer l'écriture
    }
    
    if (url=='/message' && method==='POST') {
        const body=[]; 
        // écouteur d'évenement, va nous permettre de récupérer les données de demande
        req.on('data', (chunk)=>{
            console.log('Merceaux :',chunk);
            body.push(chunk); 
        }) 
        // récupération de tous les morceaux de demande
        req.on('end', ()=>{
            const parsedBody= Buffer.concat(body).toString() // buffer (tamponage) et concatenation du body, cree un new tampon dans le body avec tous les morceaux recoltés
            const message= parsedBody.split('=')[1]; // récupère l'index 2 du tableau body 
            fs.writeFile('message.txt', message, ()=>{
                res.statusCode=302; // redirection
                res.setHeader('Location', '/'); // en-tête par défaut accepté par le navig
                return res.end()
            })   
            console.log(parsedBody);
        })
    }
    
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html><head> <title> Ma première réponse</title></head> <body> Hello World !</body></head>');
    // res.end()
})

module.exports = requestHandel; 

