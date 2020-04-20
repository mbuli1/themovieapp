/* eslint-disable no-undef */
<template>
<div>
<div class="registracija">
    <b-container>
        <b-form-group
            id="fieldset-1"
            label="Ime"
            label-for="input-1">
            <b-form-input id="input-1" v-model="ime"></b-form-input>
        </b-form-group>

        <b-form-group
        id="fieldset-2"
        label="Prezime"
        label-for="input-2">
        <b-form-input id="input-2" v-model="prezime"></b-form-input>
        </b-form-group>

        <b-form-group
        id="fieldset-3"
        label="E-mail"
        label-for="input-3">
        <b-form-input id="input-3" v-model="email"></b-form-input>
        </b-form-group>

        <b-form-group
        id="fieldset-4"
        label="Lozinka"
        label-for="input-4">
        <b-form-input id="input-4" v-model="lozinka" type="password"></b-form-input>
        </b-form-group>

        <b-button v-on:click="registracija" style="background-color:limegreen;margin-right:1%;border-radius:20px"><router-link to="/">Registriraj se</router-link></b-button>
        <b-button style="border-radius:20px;height:37px;background-color:lightgrey"><router-link to="/">Imaš račun?</router-link></b-button>
    </b-container>
</div>
</div>
</template>

<script>
import { auth } from '@/main';

export default {
    name: 'registracija',
    data () {
        return {
            ime: '',
            prezime: '',
            email: '',
            lozinka: ''
        }
    },
    methods: {
        registracija: function () {
            // eslint-disable-next-line no-undef
            auth.createUserWithEmailAndPassword(this.email, this.lozinka)
                    .then(function() {
                        alert('Registracija je uspješna!')
                    })
                    .catch(function(error) {
                console.log('error: ', error)
            })
        }
    }
}
</script>

<style>
 .registracija {
  margin-top:3%;
  margin-bottom:30%;
  margin-right:30%;
  margin-left:30%;
  border-style:none;
  border-radius: 20px;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-right: 20px;
  padding-left: 20px;
  background-color: #6b5b95;
}
  
</style>