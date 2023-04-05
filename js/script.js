
const { createApp }= Vue;
createApp({
    data(){
        return{
            contacts: [
                {
                    id:1,
                    name: 'AMORE ❤️',
                    avatar: './img/purple-heart-with-yellow-stars-illustration-png-clipart.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'DOVE STAI???',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'PERCHE? NON RISPONDI?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:15',
                            message: 'Tra noi è FINITA !!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:45',
                            message: 'Amore stavo a lavoro....cosa ti arrabbi?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15',
                            message: 'Sono tutte scuse',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:15',
                            message: 'NON MI CERCARE PIU!!',
                            status: 'received'
                        },
                        {
                            date: '12/01/2020 00:02',
                            message: 'Sono passati due giorni....che fine hai fatto?',
                            status: 'received'
                        },
                        {
                            date: '12/01/2020 08:15',
                            message: 'Tu hai detto di non scriverti più',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15',
                            message: 'E allora sei proprio cretino, ADDIO !!',
                            status: 'received'
                        },
                    ],
                },
                {
                    id:2,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:3,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:4,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:5,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:6,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:7,
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:8,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:9,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            chatSearch: '',
            chatFiltered: '',
            chatActive : false,
            indexChat: 0,
            currentDate: this.getDate(),
            newMessageText: '',
            newMessage:{
                date: this.currentDate,
                text: '',
                status: 'sent',
            },
            selectPerson: '',
        }
        

    },
    methods:{
        changeChat(index){
            this.indexChat = this.contacts.findIndex(item => item.id === index)
            this.selectPerson = this.contacts.find(item => item.id === index).id
        },
        getDate(){
            let date = new Date();
            let dateTime = date.getHours() + ':'+ date.getMinutes();
            return dateTime;
        },
        sendMex(){
            if (this.newMessageText != ''){
                let hours = new Date().getHours();
                let minutes = new Date().getMinutes();
                const newMessage = {
                    date: hours + ":" + minutes,
                    message: this.newMessageText,
                    status: 'sent'
                }
                this.contacts[this.indexChat].messages.push(newMessage);
                this.newMessageText = '';
                this.scrollMsg();
                setTimeout(this.addMex, 3000);
        }
        },
        scrollMsg(){
            this.$nextTick(() => {
                this.$refs.texts[this.$refs.texts.length - 1].scrollIntoView({behavior: 'smooth'})
            })
            
        },
        filterChat(){        
            if (this.chatSearch === ''){
                this.chatFiltered = this.contacts;
            } else {
                this.chatFiltered = this.contacts.filter(contact => {
                    if (contact.name.toLowerCase().includes(this.chatSearch.toLowerCase()) || contact.messages.some(text => text.message.toLowerCase().includes(this.chatSearch.toLowerCase()))) {
                      return true;
                    }      
            })
        }
        },
        casualMex(randomMex){ 
            return randomMex[Math.floor(Math.random()*randomMex.length)]
            },
        addMex(){
                let hours = new Date().getHours();
                let minutes = new Date().getMinutes();
                 const listMex = ['ciao', 
                 'come stai', 
                 'non va bene', 
                 'se lo dici tu', 
                 'ok!',
                 'La vita è per il 10% cosa ti accade e per il 90% come reagisci.',
                 'Se qualcosa non ti piace, cambiala. Se non puoi cambiarla, cambia il tuo atteggiamento. Non lamentarti',
                 'Non è mai troppo tardi per essere ciò che avresti voluto essere',
                 'Sono il migliore, è vero. Io però penso ancora a migliorare. Quando credi di essere perfetto vuol dire che sei finito',
                 'OKHEY',
                 'DAJE ROMA DAJEEEEEE',
                 'HAI VINTO !!',
                 'e mamt?',
                 'filibuguzzi',
                 'Innamorati prima di te, poi della vita',
                 'cosi de botto, senza senso',
                 'Che BELLOOO  EEEEEEE quando esco di CASAAAAAA per andare allo STADIOOOOOO a vedere la BARIIIIIIIII OOOOOOOOOO',
                 'Ma se il prete ha la tonaca nerazzurra è un Inter-prete?',
                 'AHAHAHAHAHAHAHAHAH',
                 'Cesare, il popolo di Roma chiede sesterzi No digli che vado dritto',
                 'Non solo Dio non esiste, ma provate a cercare un idraulico durante i weekend',
                 'CHE COOOUUSA VUOI????'
                ];
                const newMex = {
                    date: hours + ":" + minutes,
                    message : this.casualMex(listMex),
                    status : 'received'
            }
            this.contacts[this.indexChat].messages.push(newMex)
            this.scrollMsg();
        },
        
    }
}).mount('#app')