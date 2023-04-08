function is_valid(params) {
	/* your code here */
	let brackets = {
		'(': ')',
		'{': '}',
		'[': ']'
	};
	
	// nếu chuỗi có số ký tự là số lẻ thì false
	if (params.length % 2 != 0) return false;
	
	// nếu ký tự đầu tiên trong chuỗi là dấu ngoặc đóng thì false
	if (params[0] == ')' || params[0] == '}' || params[0] == ']') return false;
	
	// nếu ký tự cuối cùng trong chuỗi là dấu ngoặc mở thì false
	if (params[params.length - 1] == '(' || params[params.length - 1] == '{' || params[params.length - 1] == '[') {
		return false;
	}
	
	let compare = [];
	for (let i = 0; i < params.length; i ++) {
		if (params[i] == '(' || params[i] == '{' || params[i] == '[') {
			compare.push(params[i]);
			return true;
		}
		if (brackets[compare.pop()] != params[i]) {
			return false;
		}
		
	}
	return !compare.length;
	
	
}
console.log(is_valid('(){}[]'));