/*  Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */


const { createApp } = Vue;

createApp({
  data() {
    return {
      userMail : [],
    }
  },
  created(){
    this.genRandomEmail();
  },
  methods: {
    genRandomEmail(){
      for (let index = 0; index < 10; index++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => (this.userMail = response.data.email));  
      };
      console.log(this.userMail);
    }
  }
}).mount('#app');

