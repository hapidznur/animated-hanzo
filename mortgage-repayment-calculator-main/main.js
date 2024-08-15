const defaultText = document.getElementById('default-text');
const calculateContainer = document.getElementById('calculation-container');

document.querySelectorAll('.mortgage-type').forEach(input => {
	input.addEventListener('change', function() { 
		document.querySelectorAll('.radio-inputs').forEach(div => {
			div.classList.remove('selected');
		})
		if (this.checked){
			this.parentElement.classList.add('selected');
		}
	})
})
