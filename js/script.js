const { DateTime } = luxon;

const { createApp } = Vue;

createApp({
  data(){
    return{
      title: 'Luxon',
      dataOra:'',
      dataOra2:'',
      dataOra3:'',
    }
  },
  methods:{
    printData(){
      // prendo la data di adesso
    this.dataOra = DateTime.now()
    .setLocale('it')
    .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)

    this.dataOra2 = DateTime.now()
        .setLocale('it')
        .toFormat('dd/MM/yyyy hh:mm:ss')

    this.dataOra3 = DateTime.now()
        .setLocale('it')
        .toFormat('F' )
    }
  },
  mounted(){
    this.printData();
    setInterval(this.printData, 1000);
  }
}).mount('#app')