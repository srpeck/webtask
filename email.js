var request = require('request');

module.exports = function(ctx, cb) {
	request.post('https://api.mailgun.net/v3/sandbox7744667f83c2496c83f69ada1cbb4e8b.mailgun.org/messages',
		{
			form: {
				from: 'Mailgun User <mailgun@sandbox7744667f83c2496c83f69ada1cbb4e8b.mailgun.org>',
				to: 'EMAIL',
				subject: 'Webtask Email',
				text: ctx.data.visitor || "Blank"
			},
			auth: {
				user: 'api',
				password: 'API_KEY'
			}
		},
		function(err, res, body) {
			if(err) cb(err);
			else cb(null, {status: res.statusCode});
		});
}