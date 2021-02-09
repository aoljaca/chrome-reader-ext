
$(document).ready(function() {
    function singleWords() {
        p_tags = document.querySelectorAll('p')
        li_tags = document.querySelectorAll('li') // use this for list items
        $(p_tags).lettering('words');
        $("span, ul, li, ol").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
            $(this).css("background-color", "white");
        }
        )
    }
    async function paragraphs() {
        $("p").hover(function(){
            $("p, h1, h3, h2, ul, li, ol").css("background-color", "white");
            $(this).css("background-color", "pink");
            
        }
        //     , function(){
        //     $(this).css("background-color", "white");
        //     // $('span').css("background-color", "white");
        // }
        );
        $("li").hover(function(){
            $("p, h1, h3, h2, ul, li, ol").css("background-color", "white");
            $(this).css("background-color", "pink");
            
        })
        p_tags = document.querySelectorAll('p')
        await setTimeout(() => {
            p_tags = document.querySelectorAll('p')
            body = document.querySelector('body')
            // console.log(p_tags);
            $(p_tags).lettering('words');
            $("p").on("click", function() {
                $("p").css("background-color", "white");
                $(this).css("background-color", "pink");
            })
            $("h1, h3, h2").on("click", function() {
                $(this).css("background-color", "white");
            })
            document.onkeydown = function(e) {
                switch(e.keyCode) {
                    case 37: // left
                    break;
            
                    case 38: // up
                    $('p, li').filter(function() {
                        var match = 'rgb(255, 192, 203)'; // match background-color: pink
                        /*
                            true = keep this element in our wrapped set
                            false = remove this element from our wrapped set
                                                                             */
                        if ($(this).css('background-color') == match) {
                            $(this).css("background-color", "white");
                            return true;
                        }
                        // return ( $(this).css('background-color') == match );
                        
                    
                    }).prev().css('background-color', 'pink'); // change background color of all black spans
                    break;
            
                    case 39: // right
                    break;
            
                    case 40: // down
                    $('p, li').filter(function() {
                        var match = 'rgb(255, 192, 203)'; // match background-color: pink
                        /*
                            true = keep this element in our wrapped set
                            false = remove this element from our wrapped set
                                                                             */
                        if ($(this).css('background-color') == match) {
                            $(this).css("background-color", "white");
                            return true;
                        }
                        // return ( $(this).css('background-color') == match );
                        
                    
                    }).next().css('background-color', 'pink'); // change background color of all black spans
                    break;
            
                    default: return; // exit this handler for other keys
                }
                e.preventDefault(); // prevent the default action (scroll / move caret)
            };
            var style = document.createElement('style');
            // p:hover {
            //     background-color: pink !important; put below in inner html
            // }
            style.innerHTML = `
            
            
            span:hover, li:hover {
                background-color: yellow;
            }
            `;
            document.head.appendChild(style);
        }, 5000)
        
        // $(p_tags).lettering('words');
        // $("p").on("click", function() {
        //     $("p").css("background-color", "white");
        //     $(this).css("background-color", "pink");
        // })
        // // $("span").hover(function(){
        // // $(this).css("background-color", "yellow");
        // // }, function(){
        // //     // $(this).css("background-color", "pink");
        // // }
        // // )
        // document.onkeydown = function(e) {
        //     switch(e.keyCode) {
        //         case 37: // left
        //         break;
        
        //         case 38: // up
        //         $('p').filter(function() {
        //             var match = 'rgb(255, 192, 203)'; // match background-color: pink
        //             /*
        //                 true = keep this element in our wrapped set
        //                 false = remove this element from our wrapped set
        //                                                                  */
        //             if ($(this).css('background-color') == match) {
        //                 $(this).css("background-color", "white");
        //                 return true;
        //             }
        //             // return ( $(this).css('background-color') == match );
                    
                
        //         }).prev().css('background-color', 'pink'); // change background color of all black spans
        //         break;
        
        //         case 39: // right
        //         break;
        
        //         case 40: // down
        //         $('p').filter(function() {
        //             var match = 'rgb(255, 192, 203)'; // match background-color: pink
        //             /*
        //                 true = keep this element in our wrapped set
        //                 false = remove this element from our wrapped set
        //                                                                  */
        //             if ($(this).css('background-color') == match) {
        //                 $(this).css("background-color", "white");
        //                 return true;
        //             }
        //             // return ( $(this).css('background-color') == match );
                    
                
        //         }).next().css('background-color', 'pink'); // change background color of all black spans
        //         break;
        
        //         default: return; // exit this handler for other keys
        //     }
        //     e.preventDefault(); // prevent the default action (scroll / move caret)
        // };
        // var style = document.createElement('style');
        // // p:hover {
        // //     background-color: pink !important; put below in inner html
        // // }
        // style.innerHTML = `
        
        
        // span:hover {
        //     background-color: yellow;
        // }
        // `;
        // document.head.appendChild(style);
    }
    paragraphs();
});
