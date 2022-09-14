//  import htpp 
const http = require('http')

//  appel au systeme de fichier
const fs = require ('fs')

// create server
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    const url = req.url
    const method = req.method

    if (url === '/') { // vérification de l'url 
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head> <title> Ma première réponse</title> </head> <body> <form action="/message" method="POST"> <input type="text" name= "message"> <button>send</button></form></body></head>');
        return res.end() // retourne la page pour terminer l'écriture
    }

    if (url=='/message' && method==='POST') {
        const body=[]; 
        // écouteur d'évenement, va nous permettre de récupérer les données de demande
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk); 
        }) 
        // récupération de tous les morceaux de demande
        req.on('end', ()=>{
            const parsedBody= Buffer.concat(body).toString() // buffer (tamponage) et concatenation du body, cree un new tampon dans le body avec tous les morceaux recoltés
            const message= parsedBody.split('=')[1]; // récupère l'index 2 du tableau body 
            fs.writeFileSync('message.txt', message) 
            console.log(parsedBody);
        })

        res.statusCode=302; // redirection
        res.setHeader('Location', '/'); // en-tête par défaut accepté par le navig
        return res.end()
    }
    // else{
    //     console.log('Url :',url);
    //     console.log('Methode :',method);
    // }
    
    // ce qui est renvoyé une fois la demande a été envoyé
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html><head> <title> Ma première réponse</title></head> <body> Hello World !</body></head>');
    // res.end()

    
})

server.listen(3005)