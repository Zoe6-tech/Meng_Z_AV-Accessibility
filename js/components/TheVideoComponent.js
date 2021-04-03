export default{
    
    name:"TheVideoCard",
  
    props:['media'],

    template:`

            <li @click="logClicked">
               
                  <img :src="'images/' + media.media_poster"  alt="poster">
              
            </li>
        
    `,

    methods:{
        logClicked(){
            this.$emit("show", this.media)
        }
    }     

}
        
