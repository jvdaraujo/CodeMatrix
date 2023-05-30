function encrypt() {
    var input = document.getElementById('inputText').value;
    var output = '';

    for (var i = 0; i < input.length; i++) {
        var letter = input[i];
        switch (letter) {
            case 'e':
                output += 'enter';
                break;
            case 'i':
                output += 'imes';
                break;
            case 'a':
                output += 'ai';
                break;
            case 'o':
                output += 'ober';
                break;
            case 'u':
                output += 'ufat';
                break;
            default:
                output += letter;
                break;
        }
    }

    document.getElementById('outputText').value = output;
}

function decrypt() {
    var input = document.getElementById('inputText').value;
    var output = '';

    while (input.length > 0) {
        if (input.startsWith('enter')) {
            output += 'e';
            input = input.slice(5);
        } else if (input.startsWith('imes')) {
            output += 'i';
            input = input.slice(4);
        } else if (input.startsWith('ai')) {
            output += 'a';
            input = input.slice(2);
        } else if (input.startsWith('ober')) {
            output += 'o';
            input = input.slice(4);
        } else if (input.startsWith('ufat')) {
            output += 'u';
            input = input.slice(4);
        } else {
            output += input[0];
            input = input.slice(1);
        }
    }

    document.getElementById('outputText').value = output;
}

function copyToClipboard() {
    var output = document.getElementById('outputText');
    output.select();
    output.setSelectionRange(0, 99999); // mobile function
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
