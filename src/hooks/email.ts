import { useMutation } from '@tanstack/react-query';

import { type ContactFormSchema } from '@/components/contact/contact-form';

const sendMail = async (data: ContactFormSchema) => {
	const response = await fetch('/api/form/send-email', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	if (!response.ok) {
		throw new Error('Failed to send email');
	}

	return await response.json();
};

export const useSendEmailMutation = () =>
	useMutation({
		mutationFn: sendMail,
		onSuccess: () => {
			console.log('Email sent!');
		},
		onError: e => {
			console.log('Email failed to send!', e.message);
		}
	});
