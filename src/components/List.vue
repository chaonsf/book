<!--  -->
<template>
  <div>
     <MHead>列表页</MHead>
     <div class="content">
         <ul>
           <router-link v-for="(book,index) in books" :key="index" :to="{name:'Detail',params:{bid:book.bookId}}" tag="li" >
               <img :src="book.bookCover">
               <div>
                  <h4>{{book.bookName}}</h4>
                  <p>{{book.bookInfo}}</p>
                  <b>{{book.bookPrice}}</b>
                  <button @click.stop="remove(book.bookId)">删除</button>
               </div>
           </router-link>
           <!-- tag就能让router-link变为li标签 -->
         </ul>
     </div>
  </div>
</template>

<script>
import MHead from '../base/MHead';
import {getBooks,removeBook} from '../api'
export default {
    name: 'List',
  data () {
    return {
      books:[]
    };
  },
  components:{
    MHead
  },
  created(){
      this.getData()
  },
  methods: {
    async getData(){
       let {data:book}= await getBooks();
         this.books=book
    },
    async remove(id){
        await removeBook(id);
        this.books=this.books.filter(item=>item.bookId!==id);
    }
  }
}

</script>
<style scoped lang="less">
ul{
  padding: 10px;
  li{
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
    img{
      width:130px;
      height: 150px;
    }
  }
}
h4{
  font-size: 20px;
  line-height: 25px;
}
p{
  color: #2a2a2a;
  line-height: 25px;
  margin: 5px 0;
}
b{
  color: red
}
button{
  display: block;
  width:60px;
  height: 25px;
  background: orangered;
  color: #fff;
  outline: none;
  border: none;
  border-radius:12px;
}
</style>