
var menuBtn= document.getElementById("menuBtn")
    var sideNav document.getElementById("sideNav")
    var menu= document.getElementById("menu")

    sideNav.style.right== "-250px";

    menuBtn.onclick= function(){


        if (sideNav.style.right== "-250px"){
            sideNav.style.right = "0";
            menu.src="images/close.png"

        }
        else{
            sideNav.style.right = "-250px";
            menu.src="images/menu.png"
        }
    }
    function openImg() {
        var image = document.getElementById('image');
        var source = image.src;
        window.open(source);
    }