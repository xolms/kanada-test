jQuery(document).ready(function($) {
	$('.form .form__input').change(function(event) {
		$(this).parent().toggleClass('checked');
		if($(this).parents('.form').find('.form__input:checked').length > 0) {
			$(this).parents('.form').find('.form__button').prop('disabled', false);
		}
		else {
			$(this).parents('.form').find('.form__button').prop('disabled', true);

		}
	});
});