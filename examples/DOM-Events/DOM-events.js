const changeText = () => {
	const p = document.querySelector('p')

	p.textContent = "I changed because of an event handler property."
} 

const alertText = () => {
	alert('Will I alert?')
}

const btnA = document.querySelector('.click')
// button.onclick = changeText
// button.onclick = alertText
btnA.addEventListener('click', () => {
  const p = document.querySelector('p')
	p.textContent = "Will I change?";
});

const btnB = document.querySelector('.dbl-click')
btnB.addEventListener('dblclick', () => {
  const p = document.querySelector('p')
  p.style.color = 'blue'
})

const btnC = document.querySelector('.mouse-enter')
btnC.addEventListener('mouseenter', () => {
  const p = document.querySelector('p')
  p.style.color = 'green'
})

const btnD = document.querySelector('.mouse-leave')
btnD.addEventListener('mouseleave', () => {
  const p = document.querySelector('p')
  p.style.color = 'red'
})

const form = document.querySelector('form')
form.addEventListener('submit', () => {
  const p = document.querySelector('p')
  p.style.backgroundColor = 'yellow'
})

document.addEventListener('keydown', event => {
  console.log(event)
  var element = document.querySelector('.key');
  var a = 'KeyA';
	var s = 'KeyS';
	var d = 'KeyD';
	var w = 'KeyW';

  switch (event.code) {
		case a:
			element.textContent = 'Left';
			break;
		case s:
			element.textContent = 'Down';
			break;
		case d:
			element.textContent = 'Right';
			break;
		case w:
			element.textContent = 'Up';
			break;
	}
})

const section = document.querySelector('section');

// Print the selected target
section.addEventListener('click', event => {
	console.log(event.target);
});