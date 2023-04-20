import React from 'react';
import ChatBot from 'react-simple-chatbot';

const Chatbot = (index) => {
	const steps = [
		{
			id: '0',
			message: 'Welcome to our Customer Service Chatbot!',
			trigger: '1'
		},
		{
			id: '1',
			message: 'How can we assist you today?',
			trigger: 'options'
		},
		{
			id: 'options',
			options: [
				{ value: 'order', label: 'Check Order Status', trigger: 'order' },
				{ value: 'return', label: 'Return or Exchange', trigger: 'return' },
				{ value: 'faq', label: 'Frequently Asked Questions', trigger: 'faq' },
				{ value: 'bye', label: 'Exit', trigger: 'bye' }
			]
		},
		{
			id: 'order',
			message: 'Please provide your order number so we can check the status for you.',
			trigger: 'orderNumber'
		},
		{
			id: 'orderNumber',
			user: true,
			trigger: 'checkOrderStatus'
		},
		{
			id: 'checkOrderStatus',
			message: 'We are checking your order status. Please wait...'
			// Add a function to fetch the order status, then trigger the appropriate response.
		},
		{
			id: 'return',
			message: 'Please visit our return center at https://example.com/returns to initiate a return or exchange.',
			trigger: '1'
		},
		{
			id: 'faq',
			message:
				'You can find answers to frequently asked questions on our FAQ page at https://example.com/faq. If you have any other questions, feel free to ask!',
			trigger: '1'
		},
		{
			id: 'bye',
			message: 'Thank you for using our Customer Service Chatbot. Have a great day!',
			end: true
		}
	];

	return (
		<div>
			<ChatBot steps={steps} />
		</div>
	);
};

export default Chatbot;
