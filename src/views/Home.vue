<template>
<div id="home">
  <b-container>
    <b-form-group 
    id="fieldset-1"
    label="E-mail" 
    label-for="input-1">
    <b-form-input id="input-1" v-model="email" ></b-form-input>
    </b-form-group>

    <b-form-group 
    id="fieldset-2"
    label="Lozinka"
    label-for="input-2">
    <b-form-input id="input-2" v-model="lozinka" type="password"></b-form-input>
    </b-form-group>

    <b-button v-on:click="prijava" style="background-color:limegreen;margin-right:1%;border-radius:20px">Prijavi se</b-button>
    <b-button style="border-radius:20px;height:36px;background-color:lightgrey"><router-link to="registracija">Nemaš račun?</router-link></b-button>
  </b-container>
</div>
</template>

<script>
import {auth} from '@/main';
export default {
  name: 'Home',
  data () {
    return {
      email: '',
      lozinka: ''
    }
  },
  methods: {
    prijava: function () {
      var self = this;
      // eslint-disable-next-line no-undef
      auth.signInWithEmailAndPassword(this.email, this.lozinka)
      .then(result => {
          self.$emit("authenticated", true);
          self.$router.replace({name: 'Profil'});
          console.log('result', result)
      })
      .catch(function(error) {
        console.log('greska: ', error)
      });
    }
  }
}
</script>

<style scoped>
  #home {
    margin-top:10%;
    margin-bottom:30%;
    margin-right:30%;
    margin-left:30%;
    border-style:none;
    border-radius: 20px;
    padding-top: 80px;
    padding-bottom: 80px;
    padding-right: 20px;
    padding-left: 20px;
    background-color:#6b5b95;
  }
</style>