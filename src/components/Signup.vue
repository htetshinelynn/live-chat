<template>
  <h1>SignUp</h1>

  <div v-if="error" class="signup-error">{{error}}</div>

    <form @submit.prevent="signUp">
            <input type="text" placeholder="Name" v-model="displayname">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button>Sign Up</button>
      </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from "../composables/useSignup"

export default {
    setup(props,context){

        let displayname=ref("");
        let email=ref("");
        let password=ref("");

        let {error,createAccount}= useSignup();
        let signUp=async()=>{

            let res=await createAccount(email.value,password.value,displayname.value)
            if(res){
              context.emit("entetChatroom")

            }
        }

        return {displayname,email,password,signUp,error};
    }
}
</script>

<style>
.signup-error{
    color:red;
}
</style>