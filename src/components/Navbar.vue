<template>
  <nav v-if="user">
      <div class="">
          <p>Hi {{user.displayName}}</p>
          <p class="email">Logged in as eamil {{user.email}}</p>
      </div>
      <button class="" @click="Logout">Logout</button>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from "../firebase/config"
import getUser from "../composables/getUser"

export default {
    setup(){

        let error=ref(null);

        let {user}=getUser();  

        let Logout=async()=>{
            try{
                let res =  await auth.signOut();
                console.log("Logout");
            }catch(err){
                error.value=err.message;
            }
        }


        return {Logout,user};
    }

}
</script>

<style>

</style>