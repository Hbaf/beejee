export default function simpleSanitier(_string: string): string {
	let string = _string;
	while (string.includes('<script>')) {
		string = string.replace('<script>', '');
	}

	while (string.includes('</script>')) {
		string = string.replace('</script>', '');
	}

	return string;
}
