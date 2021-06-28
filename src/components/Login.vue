<template>
  <h1>Login</h1>
    <form @submit.prevent="Login">
            <div class="" v-if="error">{{error}}</div>
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button>Login</button>
      </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from "../firebase/config"
import userLogin from "../composables/useLogin"

export default {
    setup(props,context){
        let email=ref("");
        let password=ref("");

        let {error,signIn} = userLogin();

        let Login=async()=>{
           let res = await signIn(email.value,password.value)
           if(res){
              context.emit("entetChatroom")
           }
        }

        return {email,password,Login,error};
    }
}
</script>

<style>

</style>