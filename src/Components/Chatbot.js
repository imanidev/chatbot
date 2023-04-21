import React from 'react';
import ChatBot from 'react-simple-chatbot';

const Chatbot = (index) => {
	const steps = [
		{
			id: '0',
			message: "Hi, I'm Imani!",
			trigger: '1'
		},
		{
			id: '1',
			message: 'How can I help you today?',
			trigger: 'options'
		},
		{
			id: 'options',
			options: [
				{ value: 'joke', label: 'Tell a joke', trigger: 'joke' },
				{ value: 'about', label: 'About Me', trigger: 'about' },
				{ value: 'portfolio', label: 'View Portfolio', trigger: 'portfolio' },
				{ value: 'twitter', label: 'Follow on Twitter', trigger: 'twitter' }
			],
			trigger: 'joke'
		},
		{
			id: 'joke',
			message: "Why did the programmer quit their job? They didn't get arrays!",
			trigger: 'options'
		},
		{
			id: 'about',
			message: 'I am a full-stack developer. I love to code!',
			trigger: 'options'
		},
		{
			id: 'portfolio',
			message: 'I am currently working on a portfolio site. Check back soon for updates!',
			trigger: 'options'
		},
		{
			id: 'twitter',
			message: 'Follow me on Twitter @imaniverse. See you there!',
			trigger: 'options'
		}
	];

	return (
		<div>
			<ChatBot steps={steps} />
		</div>
	);
};

export default Chatbot;
