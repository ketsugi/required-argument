function required(argumentName){
	const funcName = required.caller.name ? `"${required.caller.name}"` : "<anonymous function>";
	let exception = 'Missing argument ';
	if (argumentName) {
		exception += `${argumentName} `;
	}
	exception += `in function ${funcName}`;
	throw new Error(exception);
}

module.exports = required;
