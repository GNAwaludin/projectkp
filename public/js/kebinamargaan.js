function toggleShared() {
    var form = this.form;
        kategori = form.elements.kategori;
        // Use gender's parent because we want the label to be hidden too
        subkategori = form.elements.subkategori.parentNode;
        subkategori02 = form.elements.subkategori02.parentNode;;
    // Start by giving the default nature of things, with gender hidden
    subkategori.style.display = 'none';
    subkategori02.style.display ='none';
    // Now only show gender if applicable
    if (kategori.value == 'bkfj01') {
        // An empty string is more compatible than using 'block' or 'inline' as it allows the element to use its own default display type.
        subkategori.style.display = '';
        $(function(){
        	$('#subkategori').change(function(){
        		$('table').hide();
        		// if ($(this).val() == "hsk01") {
          //   		$('#t1').show();
        		// 	}else{
        		// 		$('#t1').hide();
        		// 	}
        		if ($(this).val() == "hsk02") {
        			$('#t2').show();
        			}else{
        				$('#t2').hide();
        			}

        	});
        });
    }else if (kategori.value =='bkfj02') {
    	subkategori02.style.display='';
        $(function(){
            $('#subkategori02').change(function(){
                $('table').hide();
                if ($(this).val() == "hsdm") {
                    $('#t12').show();
                    }else{
                        $('#t12').hide();
                    }
            });
        });
    }
}


	// connect the function to the selects onchange event
	var form = document.getElementById('rentalProperties');
	form.elements.kategori.onchange = toggleShared;

	// and lastly, trigger the onchange event, which causes the gender select to be hidden
	form.elements.kategori.onchange();

function myFunction() {
    var txt;
    if (confirm("Apakah Anda Yakin Akan Edit Data ini ??")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
        window.location.href='/kebinamargaan';
    }
    document.getElementById("alertBoxEdit").innerHTML = txt;
}

function myFunction2() {
    var txt;
    if (confirm("Apakah Anda Yakin Akan Delete Data ini ??")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
        window.location.href='/kebinamargaan';
    }
    document.getElementById("alertBoxDelete").innerHTML = txt;
}