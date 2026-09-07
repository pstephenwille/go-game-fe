import { Amplify } from 'aws-amplify';

Amplify.configure({
	Auth: {
		Cognito: {
			userPoolId: 'us-east-1_ocLbkU9OW',
			userPoolClientId: '3sfkggll3j1u91fc9rom4j0leg',
			loginWith: {
				oauth: {
					domain: 'us-east-1oclbku9ow.auth.us-east-1.amazoncognito.com',
					scopes: ['openid', 'email', 'profile'],
					redirectSignIn: [import.meta.env.APP_REDIRECT_AUTH_URL],
					redirectSignOut: [import.meta.env.APP_REDIRECT_AUTH_URL],
					responseType: 'code',
				},
			},
		},
	},
});
