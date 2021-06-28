<template>
  <div class="chat-window">
      <div class="messages">
          <div class="single" v-for="message in formattedMessage" :key="message.id">
              <span class="name">{{message.name}}</span>
              <span class="created_at">{{message.created_at}}</span>
              <br>
              <span class="message">{{message.message}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {db} from "../firebase/config"
import { computed } from '@vue/runtime-core'
import { formatDistanceToNow } from 'date-fns'
export default {
  setup(){

    let messages=ref([]);

    let formattedMessage=computed(()=>{
      return messages.value.map((msg)=>{

        let formatTime=formatDistanceToNow(msg.created_at.toDate())

        return {...msg,created_at:formatTime}
      })
    });

    db.collection("message").orderBy("created_at").onSnapshot((snap)=>{
      let results=[];
      snap.docs.forEach((doc)=>{
        
        let document = {...doc.data(),id:doc.id};
        
        doc.data().created_at && results.push(document);

      })
      messages.value=results;
    })

    return {messages,formattedMessage};
  }
}
</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        width:50%;
        max-width: 80%;
        margin: 12px 0;
        background-color: #fff;
        padding: 20px;
        border:1px solid #fafafa;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
      .seprate{
          height: 1px;
      }
</style>