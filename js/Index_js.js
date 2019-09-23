
let imgs =document.getElementsByClassName("item-img"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev"),
    wClose = document.getElementById("wClose"),
    lightboxContainer =document.querySelector(".lightboxContainer"),
    lightboxItem = document.querySelector(".lightboxItem") ,
    currentIndex = 0 ,
    imgsArray = [] ;

for (let i = 0 ; i < imgs.length ; i++ )
{
    imgsArray.push(imgs[i]) ;
    imgs[i].addEventListener("click" , function(e) 
    {
        let imgSrc = e.target.src ;
        lightboxContainer.classList.add("show") ;
        lightboxItem.style.backgroundImage = "url("+imgSrc+")";
        currentIndex = imgsArray.indexOf(e.target) ;
    })
}
next.onclick = function() 
{
    nextMove()
}
function nextMove() 
{
    
    if (currentIndex == imgsArray.length-1 )
    {
        currentIndex = 0 ;
    }
    currentIndex ++ ;
    lightboxItem.style.backgroundImage = "url("+imgsArray[currentIndex].src+")";
}

prev.onclick = function() 
{
    prevMove()
}
function prevMove() 
{
    
    if (currentIndex == 0 )
    {
        currentIndex = imgsArray.length-1 ;
    }
    currentIndex -- ;
    lightboxItem.style.backgroundImage = "url("+imgsArray[currentIndex].src+")";
}
wClose.onclick = function() 
{
    lightboxContainer.classList.remove("show") ;
}
document.addEventListener("keydown" , function (e) 
{
    if (e.keyCode == 27 )
    {
    lightboxContainer.classList.remove("show") ;
    }
    else if (e.keyCode == 39 )
    {
        nextMove() ;
    }
    else if (e.keyCode == 37 ) 
    {
        prevMove() ;

    }
}) ;
lightboxContainer.onclick = function(e)
{
    if (e.target == lightboxContainer) 
    {
        lightboxContainer.classList.remove("show") ;
    }
}