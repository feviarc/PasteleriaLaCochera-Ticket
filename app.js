let PWD = '';
let userPwd;
userPwd = prompt('Contraseña');
if (userPwd === PWD) {
    window.location.assign('https://forms.office.com/Pages/ResponsePage.aspx?id=mo2Ft2APZkOdAuXbcgDTLyYzP21RSYdKuPfv5TSCOWZUN09DUzZPTVlWS0NUQklGNzFQTzVPVUQ3Ti4');	
} else {
    alert('Contraseña incorrecta');
    window.location.reload();
}
