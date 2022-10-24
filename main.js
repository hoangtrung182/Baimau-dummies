


const menuBtn = document.getElementById('icon');
const navbar = document.querySelector('.nav__mobile');
// console.log(menuBtn)
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', openMenu)
overlay.addEventListener('click', closeMenu)


function openMenu() {
	navbar.style.display = 'block';
	overlay.style.display = 'block';
}

function closeMenu() {
	navbar.style.display = 'none';
	overlay.style.display = 'none';
}