const nav = document.getElementById('mynav');
window.onscroll = function () {
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 200) {
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
    }
    else {
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    }
};
//const abclist = ['length', 'getItem', 'setItem', 'clear', 'key', 'removeItem']
//for (var i in localStorage) {
//	if (abclist.includes(i)) {
//	} else {
//		alert(i)
//	}
//}
//$: doubled = thats*2