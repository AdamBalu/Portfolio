import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD
	}
});

export const POST = async (request: NextRequest) => {
	const { email, message } = await request.json();

	const mailOptions = {
		from: email,
		to: process.env.EMAIL_USER,
		subject: `${email}`,
		text: `${message}`
	};

	try {
		await transporter.sendMail(mailOptions);
		return NextResponse.json({ message: 'Email sent successfully' });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Email failed to send' },
			{ status: 500 }
		);
	}
};
