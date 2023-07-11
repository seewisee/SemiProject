        /* 게시글 글자 수 세기 */
        document.getElementById("detail").addEventListener("input", function() {
        let length = this.value.length;
        console.log(length);
            
        let interval;

        document.getElementById("counter").innerText = length ;
        if(length <= 499 && length >= 0) {
            document.getElementById("counter").style.color = "black";
            
        } else { 
            document.getElementById("counter").style.color = "red"
            


            document.getElementById("counter").innerText = 500;
        }

    })

    document.getElementById("title").addEventListener("input", function() {

        let length = this.value.length;
        
        let interval;
        
        if(length <= 20 && length >= 0){
            this.style.color = "black";
            
        }else {
            this.innerText = 20;
        
        }





    })

    

