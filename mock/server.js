let http=require("http");
let fs=require('fs');
let url=require('url');
//* 获取轮播图 */
let siders=require("./slider");
function read(cb){
    fs.readFile('./book.json','utf8',(err,data)=>{
          if(err||data.length==0){
               cb([])  //如果有错误或者没数据，就是空数组
          }else{
              cb(JSON.parse(data)) //将读出的内容转化成对象
          }
    })
}
function write(data,cb){
    fs.writeFile("./book.json",JSON.stringify(data),cb)
}

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
       return  res.end(); /*让options请求快速返回*/
    }
    let {pathname,query}=url.parse(req.url,true);   //true吧query转化成对象
    if(pathname==="/sliders"){
       return  res.end(JSON.stringify(siders))
    }
    if(pathname==='/hot'){
        read(function(books){
         let hot= books.reverse().slice(0,6);
         res.end(JSON.stringify(hot))
        })
        return;
    }
    if(pathname==="/book"){  //对书得增删该查
        let id=parseInt(query.id);
        switch (req.method){
            case "GET" :
            if(id){  //查询一个
               read(function(books){
                 let book= books.find(item=>item.bookId===id);
                 if(!book) book={}   //如果妹找到，则是undefine
                 res.end(JSON.stringify(book))
               })

            }else{  //获取所有图书
               read(function(books){
                   res.end(JSON.stringify(books))
               }) 

            }
            break;
          case "DELETE":
          console.log(id);
          read(function(books){
              books=books.filter(item=>item.bookId !==id);
              write(books,function(){
                  res.end(JSON.stringify({})) //删除返回空对象
              })

          });
          break;
        }
        return;

    }
}).listen(3000)