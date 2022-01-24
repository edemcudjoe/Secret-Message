let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove last item
secretMessage.pop();
console.log(secretMessage.length)

//adding items to end of array
secretMessage.push('to');
secretMessage.push('Program');

//replacing string
secretMessage[7] = 'right';

//remove first element
secretMessage.shift();

//add element to beginning of array
secretMessage.unshift('Programming');

//replacing multiple elements
secretMessage.splice(6, 5, 'know,');

console.log(secretMessage.join(' '));

