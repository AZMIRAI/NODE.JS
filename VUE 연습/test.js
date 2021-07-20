const http = require('http')

// http라는 함수를 받아옴

const server = http.createServer	((req, res)=>{res.end('hello')
})

// => 람다식 
// res.end('??')
// createServer 라는 객체


server.listen(3000)
// 마지막으로 3000번
