
(()=>{
    let vue_vm = new Vue({

        data:{
            message:"Roku Flashback",
            anotherMessage:" There is a nostalgia here, the channel are filled with old films and songs. ",
           
            allMedia:[
                { media_title: "Friends", media_src:"Friends.mp4" ,media_poster: "Friends.jpg", media_release:"1994", media_storyline: "Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, Chandler Bing, and Phoebe Buffay are six 20 something year olds living in New York City. Over the course of 10 years, these friends go through family, love, drama, friendship, and comedy." },
                { media_title: "Tom and Jerry", media_src:"Tom and Jerry.mp4" ,media_poster: "Tom and Jerry.jpg", media_release:"1964", media_storyline: "Tom is a gray and white domestic shorthair cat.  He is usually but not always, portrayed as living a comfortable, or even pampered life, while Jerry is a small, brown house mouse who always lives in close proximity to Tom. Despite being very energetic, determined and much larger, Tom is no match for Jerry's wits. Jerry also possesses surprising strength for his size, approximately the equivalent of Tom's, lifting items such as anvils with relative ease and withstanding considerable impacts." },
                { media_title: "Hotel California", media_src:"Hotel California.mp3" ,media_poster: "Hotel California.png", media_release:"1976", media_storyline: "Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, Chandler Bing, and Phoebe Buffay are six 20 something year olds living in New York City. Over the course of 10 years, these friends go through family, love, drama, friendship, and comedy.Hotel California is the fifth studio album by American rock band the Eagles. The album was recorded by Bill Szymczyk at the Criteria and Record Plant studios between March and October 1976, and then released on Asylum in December. It was their first album with guitarist Joe Walsh, who had replaced founding member Bernie Leadon, and is the last album to feature bassist Randy Meisner. The front cover is a photograph of the Beverly Hills Hotel by David Alexander." }
            ],

            showMediaDetails:false,

            currentMediaData:{}



       },
             
      

        methods:{
            
            showMedia(target){
                console.log('clicked to show Media detail',target, target.name);

                this.showMediaDetails=this.showMediaDetails ? false:true 
                this.currentMediaData = target 
            },

            logClicked(){
                console.log("clicked on a prof name");
            }
            
        
        },

        components:{
            
        }

    }).$mount("#app");
     

   })();