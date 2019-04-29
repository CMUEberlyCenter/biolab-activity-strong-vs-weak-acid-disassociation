$( document ).ready(function() {
	$('input[type=radio][name=defaultradio0]').change(function() {
		if (this.value == 'WeakConjugateBase') {
			APIActivity.logNavigation ("defaultradio0","Weak conjugate base selected");
		}
		else if (this.value == 'StrongConjugateBase') {
			APIActivity.logNavigation ("defaultradio0","Strong conjugate base selected");
		}
	});
});