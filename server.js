//  import htpp 
const http = require('http')

// create server
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    const url = req.url
    if (url === '/') { // vérification de l'url 

        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head> <title> Ma première réponse</title> </head> <body> <form action="/message" methode="POST"> <input type="text" name= "message"> <button>send</button></form></body></head>');
        return res.end() // retourne la page pour terminer l'écriture
    }

    // ce qui est renvoyer une fois la demande a été envoyé
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head> <title> Ma première réponse</title> </head> <body> Hello World !</body></head>');
    res.end()

    
})

server.listen(3005)