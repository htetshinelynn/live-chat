const { ref } = require("vue");
import {auth} from "../firebase/config"

let error = ref(null);

let createAccount = async(email,password,displayname) => {
    try{
        let res=await auth.createUserWithEmailAndPassword(email,password);
        if(!res){
            throw new Error("Can't Create New User");
            }

        res.user.updateProfile({displayName:displayname});
        return res;
    } catch (err) {
        console.log(err.message);
        error.value=err.message;
    }
}

let useSignup = () => {

    return { error, createAccount };
}

export default useSignup;