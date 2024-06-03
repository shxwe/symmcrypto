$(document).ready(function () {
    $('#keygenBtn').click(function () {
        var keyLength = 16; // Длина ключа (можно изменить по желанию)
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Допустимые символы для ключа
        var key = "";
        for (var i = 0; i < keyLength; i++) {
            var randomIndex = Math.floor(Math.random() * charset.length);
            key += charset[randomIndex];
        }
        document.getElementById("password").value = key;
    });

    $('#encryptBtn').click(function () {
        var inputText = document.getElementById("plaintext").value;
        var key = document.getElementById("password").value;
        var encryptedText = rc4(key, inputText);
        document.getElementById("cipher").value = encryptedText;
    });

    $('#decryptBtn').click(function () {
        var inputText = document.getElementById("cipher").value;
        var key = document.getElementById("password").value;
        var decryptedText = rc4(key, inputText);
        document.getElementById("plaintext").value = decryptedText;
    });

    // Функция для шифрования и дешифрования текста с помощью алгоритма RC4
    function rc4(key, str) {
        var s = [], j = 0, x, res = '';
        for (var i = 0; i < 256; i++) {
            s[i] = i;
        }
        for (i = 0; i < 256; i++) {
            j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
        }
        i = j = 0;
        for (var y = 0; y < str.length; y++) {
            i = (i + 1) % 256;
            j = (j + s[i]) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
            res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
        }
        return res;
    }
});