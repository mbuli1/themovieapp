<template>
    <div id="profil">
        <h1>TheMovieApp</h1>
    <b-card
    overlay
    img-src="https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60.jpg"
    img-alt="Movies"
  >
  <b-button router to="dodajFilm" variant="success">Dodaj novi film</b-button>
    <b-button @click="odjava()" style="margin-left: 1%;" variant="danger">Odjavi se</b-button>
    <b-card-text>
      Dobro došli u aplikaciju TheMovieApp.<br>
    </b-card-text>
  </b-card>
    </div>
   


</template>
<script>
export default {
    name: 'Profil',
    methods: {
        odjava () {
            this.$emit("authenticated", false);
            this.$router.replace({ name: "Home" });
        }
    }
}
</script>
<style>
#profil{
    margin-top: 3%;
    padding-left: 20px;
    padding-bottom: 50px;
}
h1{
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
}
.card-text {
    margin-top: 5%;
}
</style>
