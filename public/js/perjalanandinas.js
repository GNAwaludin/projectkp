function swapConfig(x) {
    var radioName = document.getElementsByName(x.name);
    for(i = 0 ; i < radioName.length; i++){
      document.getElementById(radioName[i].id.concat("Settings")).style.display="none";
    }
    document.getElementById(x.id.concat("Settings")).style.display="initial";
  }
   	
   	var tujuan_dari;
	var tujuan_ke;
	// var jarak = new Array(400);
            
function setTujuanDari() {
    tujuan_dari = document.expiration.tujuandari.options[document.expiration.tujuandari.selectedIndex].value;
    document.expiration.expires.value = tujuan_dari + "-" + tujuan_ke;

            }
function setTujuanKe() {
    tujuan_ke = document.expiration.tujuanke.options[document.expiration.tujuanke.selectedIndex].value;
    document.expiration.expires.value = tujuan_dari + "-" + tujuan_ke;
}
function showHiddenValue() {
    alert(document.expiration.expires.value);
}
function jarakTempuh(){
	if ((document.expiration.tujuandari.value == 'Kota Bogor') && (document.expiration.tujuanke.value == 'Kabupaten Bogor')) {
		document.expiration.jarak.value = 17;
	}
}
function uangHarian(){
	if (document.expiration.golongan.value == 'I') {
		document.expiration.uangharian.value = 330.000;
	}else if (document.expiration.golongan.value == 'II') {
		document.expiration.uangharian.value = 340.000;
	}else if (document.expiration.golongan.value == 'III') {
		document.expiration.uangharian.value = 350.000;
	}else if (document.expiration.golongan.value == 'IV') {
		document.expiration.uangharian.value = 360.000;
	}else{
		document.expiration.uangharian.value = '';
	}
}

function hitungJumlah(){
	var textbox1 = document.getElementById('koordinator').value;
	var textbox2 = document.getElementById('jmlorang').value;
	var textbox3 = document.getElementById('jmlhari').value;
	var textbox4 = document.getElementById('expires').value;
	var textbox5 = document.getElementById('jarak').value;
	var textbox6 = document.getElementById('uangharian').value;
	var textbox7 = textbox5 * textbox3 * textbox2;
	var textbox8 = (textbox2 * textbox6) * textbox3;
	alert("Nama Koordinator: "+textbox1+ "\nJumlah Orang : "+textbox2+ "\nJumlah Hari : "+textbox3+ "\nTujuan Dinas : "+textbox4+ "\nJarak Tempuh : "+textbox5+ "\nUang Harian/Orang : "+textbox6+ "\nJumlah : "+textbox7+"\nJumlah Uang Harian/Tujuan : Rp."+textbox8);
	location.reload();
}