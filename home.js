const http=require('http');
const port=7500;
const fs=require('fs');


function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'Content-type':'text/html'});
       
       let filepath;

       switch(req.url){
        case '/':
            filepath='./home.html';
            break;

        case '/activities':
            filepath='./activities.html';
            break;

        case '/contactus':
            filepath='./contactus.html';
            break;
            
        case '/donateus':
            filepath='./donateus.html';
            break;

        case '/events':
            filepath='./events.html';
            break;

        case '/gallery':
            filepath='./gallery.html';
            break;

        case '/media':
            filepath='./media.html';
            break;

        case '/overview':
            filepath='./overview.html';
            break;

        case '/placestovisit':
            filepath='./placestovisit.html';
            break;

        case '/schedule':
            filepath='./schedule.html';
            break;

        default:
            filepath='404.html';
        }

        fs.readFile(filepath,function(err,data){
            if(err){
             console.log('Error',err);
             return res.end('<h1 style="text-align:center">असुविधा के लिए खेद है</h1><br><h1 style="text-align:center">जय हनुमान</h1>');
            }
            
            return res.end(data);
        })
}

const server=http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log('error',err)
        return;
    }

    console.log('Server is running on port:',port);
})