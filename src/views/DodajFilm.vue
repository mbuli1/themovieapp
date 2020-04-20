<template>
    <div>
        <b-container style="margin-top:2%">
        <b-form-input v-model="noviFilm" placeholder="Unesite film"></b-form-input><br>
        <b-form-input v-model="godina" placeholder="Unesite godinu"></b-form-input><br>
        <b-form-input v-model="redatelj" placeholder="Unesite redatelja"></b-form-input><br>
        <b-form-textarea id="textarea" v-model="opis" placeholder="Unesite opis filma"></b-form-textarea>

        <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <b-list-group>
            <b-button @click="spremiFilm()" variant="light">Spremi film</b-button>
            <b-list-group-item style="margin:2%;" v-for="film in filmovi" v-bind:key="film.id">
                <span style="display: inline-block; width:30%; border-right: 1px solid rgba(0, 0, 0, .125);">
                    <p>Film: {{ film.ime}}</p><br>
                    <p>Redatelj: {{film.redatelj}}</p><br>
                    <p>Godina izdanja: {{film.godina}}</p><br>
                    <p>Opis: {{film.opis}}</p>
                    <b-button @click="obrisiFilm(film.id)" variant="danger">Obriši film</b-button>
                </span>
                <span style="padding-left: 2%; display: inline-block; width: 70%;">
                    <div style="overflow-y: scroll; height: 170px;">
                        <b-list-group-item v-for="k in film.komentari" v-bind:key="k.id">
                        &#8226; {{k}} 
                    </b-list-group-item>
                    </div>
                    <b-form-textarea
                        v-model="film.noviKomentar"
                        style="margin-bottom: 1.5%;"></b-form-textarea>
                    <b-button @click="spremiKomentar(film.noviKomentar, film.id)" variant="success">Dodaj svoj komentar</b-button>
                </span>
            </b-list-group-item>
        </b-list-group>



         <b-button @click="dohvatiFilmove" style="margin-left:auto;margin-right:auto;display:block;margin-top:2%;margin-bottom:2%" variant="info">Učitaj filmove</b-button>
        </div>
        </b-container>
    </div>
</template>

<script>
import { db } from '@/main';
export default {
    name: 'DodajFilm',
    data() {
        return {
            noviFilm: '',
            godina: '',
            redatelj: '',
            opis:'',
            filmovi: [],
            komentari: [],
        }
},
methods: {
    spremiFilm () {
        db.collection("filmovi").add({
            ime: this.noviFilm,
            godina: this.godina,
            redatelj: this.redatelj,
            opis: this.opis
        });
        this.formReset();
    },
    async dohvatiFilmove () {
        this.dohvatiKomentare();
        let podaci = await db.collection('filmovi').get();
        let filmovi = [];
        var self = this;
        console.log('podaci: ', podaci);
        podaci.forEach(doc => {
            let p = doc.data();
            console.log('podaci: ', p);
            console.log('p: ', p);
            p.id = doc.id;
            p.komentari = [];
            self.komentari.forEach(function (k){
                console.log('k: ', k);
                if (k.komFilmId === p.id) {
                    p.komentari.push(k.text);
                }
            });
            p.noviKomentar = '';
            filmovi.push(p);
        });
        this.filmovi = filmovi;
        console.log('Filmovi: ', this.filmovi);
    },
    async dohvatiKomentare () {
      let podaci = await db.collection('komentari').get();
      let kom = [];
      podaci.forEach(doc => {
          let p = doc.data();
          p.id = doc.id;
          kom.push(p);
      });
      this.komentari = kom;
    },
    obrisiFilm (id) {
        db.collection('filmovi').doc(id).delete();
        this.dohvatiFilmove();
    },    
    formReset () {
        this.noviFilm = '';
        this.godina = '';
        this.redatelj = '';
        this.opis = '';
    },
    spremiKomentar (k, fId) {
        db.collection("komentari").add({
            text: k,
            komFilmId: fId
        });
        k = '';
        this.dohvatiFilmove();
    }
}}



</script>
<style>
#textarea {
    margin-top: 2%;
    margin-bottom: 2%;
}
.container {
    margin:10% auto;
    border-style:none;
    border-radius: 20px;
    padding-top: 80px;
    padding-bottom: 80px;
    padding-right: 20px;
    padding-left: 20px;
    background-color:cornsilk;
}
.list-group-item{
    border-top-width: 1px !important;
}