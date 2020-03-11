document.addEventListener('DOMContentLoaded', function(){

    const counter = document.getElementById("counter")
    const likes = document.getElementById("likes")
    let input
    const list = document.getElementById("list")

    let currentTime
    let numLikes
    let index

    var i = 1;

    document.addEventListener("click", function(event){
        if (event.target.id == "pause") {
            i = 0
            event.target.id = "restart"
            event.target.innerText = "restart"
        } else if (event.target.id == "restart") {
                i = 1
                event.target.id = "pause"
                event.target.innerText = "pause"
        }

        if (event.target.id == "<3") {
            currentTime = parseInt(counter.innerText)
            if (!document.getElementById(`${currentTime}-likes`)) {
                newLikesNode = document.createElement("LI")
                newLikesNode.id = `${currentTime}-likes`
                newLikesNode.innerText = `${currentTime} has been liked 1 time`
                likes.append(newLikesNode)
            } else {
                index = document.getElementById(`${currentTime}-likes`).innerText.search(/time/) - 2
                numLikes = (document.getElementById(`${currentTime}-likes`).innerText[index])
                numLikes++
                document.getElementById(`${currentTime}-likes`).innerText = `${currentTime} has been liked ${numLikes} times`
            }
        }
        if (event.target.id == "submit") {
            input = document.getElementById("input")
            newCommentNode = document.createElement("P")
            newCommentNode.innerText = input.value
            list.append(newCommentNode)
            input.value = ''
        }

        if (event.target.id == "-") {
            currentTime = parseInt(counter.innerText)
            currentTime--
            counter.innerText = currentTime
        }

        if (event.target.id == "+") {
            currentTime = parseInt(counter.innerText)
            currentTime++
            counter.innerText = currentTime
        }

    })

    var funcNameHere = function(){
        if (i == 0) clearInterval(this);
        else 
        {currentTime = parseInt(counter.innerText)
        currentTime++
        counter.innerText = currentTime}
    };
    // This block will be executed 100 times.
    setInterval(funcNameHere, 1000);
    funcNameHere();
 // End

})

