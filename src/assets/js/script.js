document.addEventListener("DOMContentLoaded", function () {
  const gap = 25;

  const carousel = document.getElementById("carousel");
  const content = document.getElementById("content");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  let width = carousel.offsetWidth;

  next.addEventListener("click", e => {
		carousel.scrollBy(width + gap, 0);
		if (carousel.scrollWidth !== 0) {
			prev.style.display = "flex";
		}
		if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
			next.style.display = "none";
		}
	});
	prev.addEventListener("click", e => {
		carousel.scrollBy(-(width + gap), 0);
		if (carousel.scrollLeft - width - gap <= 0) {
			prev.style.display = "none";
		}
		if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
			next.style.display = "flex";
		}
	});

	window.addEventListener("resize", e => (width = carousel.offsetWidth));
});


//Script aba suspensa

function openModal(){
	const modal = document.getElementById('modal-container')
	modal.classList.add('mostrar')

	modal.addEventListener('click', (e) =>{
			if (e.target.id == 'modal-container' || e.target.id == "fechar"){
					modal.classList.remove('mostrar')
					localStorage.fechaModal = 'modal-container'
			}
	})
}



function openModalEndereço(){
	const modal = document.getElementById('modal-endereco')
	modal.classList.add('mostrar')

	modal.addEventListener('click', (e) =>{
			if (e.target.id == 'modal-endereco' || e.target.id == "fechar"){
					modal.classList.remove('mostrar')
					localStorage.fechaModal = 'modal-endereco'
			}
	})
}

let contador = 1;

setInterval(function(){
		document.getElementById('slide' + contador).checked = true;
		contador ++;

		if(contador > 2){
				contador = 1
		}

},8000)
