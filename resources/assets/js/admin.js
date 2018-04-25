try {
    window.$ = window.jQuery = require('jquery');
    require('selectize');

} catch (e) {}
try {
	require('bootstrap-editable');
	$.fn.editable.defaults.mode = 'inline';
} catch (e) {}
try {
	const alertify = require('alertifyjs');
} catch (e) {}

// Admin scripts
require('./admin/index');
