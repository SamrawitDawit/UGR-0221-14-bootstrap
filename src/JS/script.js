function hideMenuList() {
    var menuList = document.getElementById("menuList");
    if (window.matchMedia("(max-width: 576px)").matches) {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
}
hideMenuList()
window.addEventListener("resize", hideMenuList);

var mIcon = document.getElementById("menuIcon");
mIcon.addEventListener("click", function(){
console.log("clicked")
var myMenu = document.querySelector("#menuList");
if (myMenu.style.display === "none") {
    myMenu.style.display = "block";

} else {
    console.log('none')
    myMenu.style.display = "none"
}
})

var dropDownContent = document.querySelectorAll(".dropDownContent")
dropDownContent.forEach(function hideDropDown(content) {
    content.style.display = "none"
})

var dropdowns = document.querySelectorAll('.dropDown');
dropdowns.forEach(function(dropdown) {
var icon = dropdown.querySelector('.drop-down');
var content = dropdown.querySelector('.dropDownContent');

icon.addEventListener('click', function() {
    if (content.style.display === "flex") {
        content.style.display = "none";
    } else {
        content.style.display = "flex";
    } 
});
});
confirmation = document.getElementById('confirmation-popup')
confirmation.style.display = "none"
document.querySelector('#contact-form').addEventListener('submit', function (event) {

    event.preventDefault(); 
    confirmation.style.display = 'block'; 
    setTimeout(function () {
        confirmation.style.display = 'none'; 
    }, 5000); 
    document.getElementById('contact-form').reset();
});