import axios from 'axios';
axios.defaults.baseURL="http://localhost:3000"   //默认的请求路径；


//获取轮播图数据,返回的是promise
export let getSliders=()=>{
    return   axios.get("/sliders")
}
//获取热门图书
export let getHotBook=()=>{
    return axios.get("/hot")
}

//获取全部图书
export let getBooks=()=>{
    return axios.get("/book")
}

//删除某一本图书
export let removeBook=(id)=>{
    return axios.delete(`/book?id=${id}`);
}
//获取某一本书
export let findOneBook=(id)=>{
    return axios.get(`/book?id=${id}`)
}