import { ref } from "vue";
import { auth } from "../firebase/config"

let user=ref(auth.currentUser);

auth.onAuthStateChanged((_user)=>{
     console.log("user stage change , user is ",_user);
     user.value=_user;
})

let getUser = () => {
    return { user };
}
export default getUser;