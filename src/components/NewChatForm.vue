<template>
    <form action="">

        <textarea 
             placeholder="Enter message"
            v-model="message"
            @keypress.enter="handleSubmit"
        ></textarea>
        <button class="send" @click.prevent="handleSubmit">Send</button>

    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser';
import {timestamp} from "../firebase/config"
import useCollection from "../composables/useCollection"
export default {
    setup(){
        let message=ref("");
        let {user}=getUser();
        let {error,addDoc}=useCollection("message");

        let handleSubmit=async()=>{

            let chat={
                message:message.value,
                name:user.value.displayName,
                created_at:timestamp()
            }
            // console.log(chat);

            let res=await addDoc(chat);
            
            message.value="";

        }

        return {message,handleSubmit};
    }
}
</script>

<style scoped>
      form {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: none;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
      .send:hover{
        cursor: pointer;
      }
</style>