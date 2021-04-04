export default{

    name:"TheMeidaCard",
  
    props:['media'],

    // data: function(){
    //     return {
    //         mediaPoster: this.media.media_poster
    //     }
    // },

    template:`

            <li @click="logClicked">

                <h3>{{media.media_type}}</h3>       
                <img :src="'images/' + media.media_poster"  alt="poster">
              
            </li>
        
    `,

    methods:{
        logClicked(){
            this.$emit("show", this.media)
        }
    }     

}
        
