
/* Routes Bidang Kebinamargaan*/

/*====================================Bidang Kedinasan=============================================*/

exports.perjalananDinas = function(req, res){
    res.render('perjalanan_dinas_dalam_negeri', {title: 'Perjalanan Dinas Dalam Negeri'});
};

exports.sbuBatasTertinggi = function(req, res){
    res.render('sbu_batas_tertinggi', {title: 'SBU Sebagai Batas Tertinggi'});
};

exports.sbu_estimasi = function(req, res){
    res.render('sbu_estimasi', {title: 'SBU Sebagai Estimasi'});
};
/*================================================================================================*/

/*=====================================Fisik Jalan Add============================================*/
exports.fisikjalanAdd = function(req, res){

    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM binamarga", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('fisikJalanAdd', {
                title: 'Add SUB Fisik Jalan',
                page_title: "Sub Fisik Jalan", data:rows
            });
        });
    });
};

exports.fisikjalanSave = function(req, res){
    var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            id: input.id,
            kategori : input.kategori,
            binamarga_id : input.binamarga_id
        };

        var query = connection.query("INSERT INTO fsk_jl set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan');
        });
    });
};
/*================================================================================================*/

/*=====================================Tampilkan Bidang===========================================*/
exports.sbk = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query('SELECT * FROM binamarga', function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbk', {
                title: "SBK",
                page_title: "Standar Biaya Khusus", data:rows
            });
        });
    });
};
/*================================================================================================*/

/*=====================================Add Bidang=================================================*/
exports.bidangAdd = function(req, res){
    res.render('bidang', {title: 'Bidang'});
};

/*================================================================================================*/

/*=====================================Save Add Bidang============================================*/
exports.saveBidang = function(req, res, next){
    var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            id : input.id,
            kategori : input.kategori
        };

        var query = connection.query("INSERT INTO binamarga set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbk');
        });
    });
};

/*==================================================================================================*/

/*=====================================Bidang Kebinamargaan=========================================*/
exports.kebinamargaan = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query('SELECT * FROM fsk_jl', function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan', {
                title: "Bidang Kebinamargaan",
                page_title: "Bidang Kebinamargaan", data:rows
            });
        });
    });
};


/*==================================================================================================*/


/*=====================================Peningkatan Jalan Hotmix=====================================*/

/*Render Tabel*/
exports.kebinamargaan_1_1 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query('SELECT * FROM sub_fsk_jl', function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_1', {
                title: "Kebinamargaan",
                page_title: "Bidang Kebinamargaan", data:rows
            });
        });
    });
};


/* Tambah Data */
exports.tambah_kebinamargaan_1_1 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query('SELECT * FROM fsk_jl', function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/tambah_kebinamargaan_1_1', {
                title: "Kebinamargaan",
                page_title: "Bidang Kebinamargaan", data:rows
            });
        });
    });
};

exports.save_Tambahkebinamargaan_1_1 = function(req, res){
     var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            lebar : input.lebar,
            nominal : input.nominal,
            fsk_jl_id : input.fsk_jl_id
        };

        var query = connection.query("INSERT INTO sub_fsk_jl set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('kebinamargaan/kebinamargaan_1_1');
        });
    });
}
/* Edit Data */
exports.edit_kebinamargaan_1_1 = function(req, res){

    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM sub_fsk_jl WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_1',{
                title : 'Edit Kebinamargaan',
                page_title:"Edit kebinamargaan_1_1",data:rows
            });
                
           
         });
         
         //console.log(query.sql);
    }); 
};

exports.save_edit_kebinamargaan_1_1 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            lebar    : input.lebar,
            nominal : input.nominal
        
        };
        
        connection.query("UPDATE sub_fsk_jl set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('kebinamargaan/kebinamargaan_1_1');
          
        });
    
    });
};

exports.delete_kebinamargaan_1_1 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM sub_fsk_jl  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('kebinamargaan/kebinamargaan_1_1');
             
        });
        
     });
}

/*=================================================================================================*/


/*=====================================Peningkatan Jalan Beton=====================================*/

/*Render Tabel*/
exports.kebinamargaan_1_2 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_2', {title: 'Kebinamargaan'});
};

/*Tambah Data Baru*/
exports.tambah_kebinamargaan_1_2 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_2', {title: 'Kebinamargaan'});
};

/*show data From database*/

exports.list = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM sub_fsk_jl',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/kebinamargaan',{
                page_title:"Customers - Node.js",data:rows,
                title: "Kebinamargaan SI"
            });
                
           
         });
         
         //console.log(query.sql);
    });
  
};

/*edit data From database*/
exports.edit_kebinamargaan_1_2 = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM sub_fsk_jl WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_2',{
                page_title:"Edit Customers - Node.js",data:rows,
                title: "Edit Kebinamargaan"
            });
                
           
         });
         
         //console.log(query.sql);
    }); 
};

/* Update Data */
exports.save_edit_kebinamargaan_1_2 = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            lebar    : input.lebar,
            nominal : input.nominal
        
        };
        
        connection.query("UPDATE sub_fsk_jl set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('kebinamargaan/kebinamargaan');
          
        });
    
    });
};

/*Delete Data*/
exports.delete_kebinamargaan_1_2 = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM sub_fsk_jl  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('kebinamargaan/kebinamargaan');
             
        });
        
     });
};
/*=========================Rehabilitasi/Pemeliharaan Berkala (HOTMIX)==========================*/

/*Render Tabel*/
exports.kebinamargaan_1_3 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_3', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_3 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_3', {title: 'Kebinamargaan'});
};

/* Edit Data */
exports.edit_kebinamargaan_1_3 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_3', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*=====================================Pemeliharaan Rutin======================================*/
/*Render Tabel*/
exports.kebinamargaan_1_4 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_4', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_4 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_4', {title: 'Kebinamargaan'})
};

/* Edit Data */
exports.edit_kebinamargaan_1_4 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_4', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*====================================Pemeliharaan Rutin*======================================*/
/*Render Tabel*/
exports.kebinamargaan_1_5 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_5', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_5 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_5', {title: 'Kebinamargaan'})
};

/* Edit Data */
exports.edit_kebinamargaan_1_5 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_5', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*===============================Pembangunan Jalan Baru Hotmix=================================*/
/*Render Tabel*/
exports.kebinamargaan_1_6 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_6', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_6 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_6', {title: 'Kebinamargaan'})
};

/* Edit Data */
exports.edit_kebinamargaan_1_6 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_6', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*================================Pembangunan Jalan Baru Beton=================================*/
/*Render Tabel*/
exports.kebinamargaan_1_7 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_7', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_7 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_7', {title: 'Kebinamargaan'})
};

/* Edit Data */
exports.edit_kebinamargaan_1_7 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_7', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*==================================Bahu di Perkeras Beton=====================================*/
/*Render Tabel*/
exports.kebinamargaan_1_8 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_8', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_8 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_8', {title: 'Kebinamargaan'})
};

/* Edit Data */
exports.edit_kebinamargaan_1_8 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_8', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*==================================Pelebaran Jalan Beton======================================*/
/*Render Tabel*/
exports.kebinamargaan_1_9 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_9', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_9 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_9', {title: 'Kebinamargaan'})
};

/* Edit Data */
exports.edit_kebinamargaan_1_9 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_9', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*================================Pelebaran Jalan AGREGAT======================================*/
/*Render Tabel*/
exports.kebinamargaan_1_10 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_10', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_10 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_10', {title: 'Kebinamargaan'})
};

/* Edit Data */
exports.edit_kebinamargaan_1_10 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_10', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*=================================Rekonstrksi Jalan HOTMIX====================================*/
/*Render Tabel*/
exports.kebinamargaan_1_11 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_11', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_11 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_11', {title: 'Kebinamargaan'})
};

/* Edit Data */
exports.edit_kebinamargaan_1_11 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_11', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*===============================Minimal Penanganan Jembatan===================================*/
/*Render Tabel*/
exports.kebinamargaan_1_12 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_12', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_12 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_12', {title: 'Kebinamargaan'})
};

/* Edit Data */
exports.edit_kebinamargaan_1_12 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_12', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*==========================Perencanaan dan Pengawasan Jalan Jembatan==========================*/
/*Render Tabel*/
exports.kebinamargaan_1_13 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_13', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_13 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_13', {title: 'Kebinamargaan'})
};

/* Edit Data */
exports.edit_kebinamargaan_1_13 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_13', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*=====================================Sewa Alat/Kendaraaan====================================*/
/*Render Tabel*/
exports.kebinamargaan_1_17 = function(req, res){
    res.render('kebinamargaan/kebinamargaan_1_17', {title: 'Kebinamargaan'});
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_17 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_17', {title: 'Kebinamargaan'})
};

/* Edit Data */
exports.edit_kebinamargaan_1_17 = function(req, res){
    res.render('kebinamargaan/edit_kebinamargaan_1_17', {title: 'Kebinamargaan'});
};

/*=============================================================================================*/

/*========================================Bidang SDA===========================================*/
exports.sumber_daya_air = function(req, res){
    res.render('sda/sumber_daya_air', {title: 'Sumber Daya Air'});
};
/*========================Honorarium Tenaga Teknis NON PNS Khusus Bidang SDA===================*/
/*Render Tabel*/
exports.sda_2_1 = function(req, res){
    res.render('sda/sda_2_1', {title: 'Sumber Daya Air'});
};

/* Tambah Data */
exports.tambah_sda_2_1 = function(req, res){
    res.render('sda/tambah_sda_2_1', {title: 'Sumber Daya Air'});
};

/* Edit Data */
exports.edit_sda_2_1 = function(req, res){
    res.render('sda/edit_sda_2_1', {title: 'Sumber Daya Air'});
};
/*============================================================================================*/
/*=================Besaran Uang Saku Tenaga Teknis Non PNS  Piket Banjir/Kekeringan===========*/
/*Render Tabel*/
exports.sda_2_2 = function(req, res){
    res.render('sda/sda_2_2', {title: 'Sumber Daya Air'});
};

/* Tambah Data */
exports.tambah_sda_2_2 = function(req, res){
    res.render('sda/tambah_sda_2_2', {title: 'Sumber Daya Air'});
};

/* Edit Data */
exports.edit_sda_2_2 = function(req, res){
    res.render('sda/edit_sda_2_2', {title: 'Sumber Daya Air'});
};
/*============================================================================================*/
/*=================Pengukuran dan Perencanaan Rehabilitasi Irigasi (Pedataran)================*/
/*Render Tabel*/
exports.sda_2_3 = function(req, res){
    res.render('sda/sda_2_3', {title: 'Sumber Daya Air'});
};

/* Tambah Data */
exports.tambah_sda_2_3 = function(req, res){
    res.render('sda/tambah_sda_2_3', {title: 'Sumber Daya Air'});
};

/* Edit Data */
exports.edit_sda_2_3 = function(req, res){
    res.render('sda/edit_sda_2_3', {title: 'Sumber Daya Air'});
};
/*============================================================================================*/
/*=================Pengukuran dan Perencanaan Rehabilitasi Irigasi (Pegunungan)===============*/
/*Render Tabel*/
exports.sda_2_4 = function(req, res){
    res.render('sda/sda_2_4', {title: 'Sumber Daya Air'});
};

/* Tambah Data */
exports.tambah_sda_2_4 = function(req, res){
    res.render('sda/tambah_sda_2_4', {title: 'Sumber Daya Air'});
};

/* Edit Data */
exports.edit_sda_2_4 = function(req, res){
    res.render('sda/edit_sda_2_4', {title: 'Sumber Daya Air'});
};
/*============================================================================================*/
/*==========================Pengukuran dan Perencanaan Sungai/Drainase========================*/
/*Render Tabel*/
exports.sda_2_5 = function(req, res){
    res.render('sda/sda_2_5', {title: 'Sumber Daya Air'});
};

/* Tambah Data */
exports.tambah_sda_2_5 = function(req, res){
    res.render('sda/tambah_sda_2_5', {title: 'Sumber Daya Air'});
};

/* Edit Data */
exports.edit_sda_2_5 = function(req, res){
    res.render('sda/edit_sda_2_5', {title: 'Sumber Daya Air'});
};
/*============================================================================================*/
/*==============================Pengukuran dan Perencanaan Situ===============================*/
/*Render Tabel*/
exports.sda_2_6 = function(req, res){
    res.render('sda/sda_2_6', {title: 'Sumber Daya Air'});
};

/* Tambah Data */
exports.tambah_sda_2_6 = function(req, res){
    res.render('sda/tambah_sda_2_6', {title: 'Sumber Daya Air'});
};

/* Edit Data */
exports.edit_sda_2_6 = function(req, res){
    res.render('sda/edit_sda_2_6', {title: 'Sumber Daya Air'});
};
/*============================================================================================*/
/*==========Pengukuran dan Perencanaan Pengamanan Pantai dan Perbaikan Muara Sungai===========*/
/*Render Tabel*/
exports.sda_2_7 = function(req, res){
    res.render('sda/sda_2_7', {title: 'Sumber Daya Air'});
};

/* Tambah Data */
exports.tambah_sda_2_7 = function(req, res){
    res.render('sda/tambah_sda_2_7', {title: 'Sumber Daya Air'});
};

/* Edit Data */
exports.edit_sda_2_7 = function(req, res){
    res.render('sda/edit_sda_2_7', {title: 'Sumber Daya Air'});
};
/*============================================================================================*/
/*=================Biaya Penyelidikan Lapangan & Pengujian Laboratorium Geoteknik=============*/
/*Render Tabel*/
exports.sda_2_8 = function(req, res){
    res.render('sda/sda_2_8', {title: 'Sumber Daya Air'});
};

/* Tambah Data */
exports.tambah_sda_2_8 = function(req, res){
    res.render('sda/tambah_sda_2_8', {title: 'Sumber Daya Air'});
};

/* Edit Data */
exports.edit_sda_2_8 = function(req, res){
    res.render('sda/edit_sda_2_8', {title: 'Sumber Daya Air'});
};
/*============================================================================================*/
/*=============================Biaya Pengelolaan Jaringan Irigasi=============================*/
/*Render Tabel*/
exports.sda_2_9 = function(req, res){
    res.render('sda/sda_2_9', {title: 'Sumber Daya Air'});
};

/* Tambah Data */
exports.tambah_sda_2_9 = function(req, res){
    res.render('sda/tambah_sda_2_9', {title: 'Sumber Daya Air'});
};

/* Edit Data */
exports.edit_sda_2_9 = function(req, res){
    res.render('sda/edit_sda_2_9', {title: 'Sumber Daya Air'});
};
/*============================================================================================*/
/*============================Biaya Sewa Alat Pemotretan Topografi============================*/
/*Render Tabel*/
exports.sda_drone = function(req, res){
    res.render('sda/sda_drone', {title: 'Sumber Daya Air'});
};

/* Tambah Data */
exports.tambah_sda_drone = function(req, res){
    res.render('sda/tambah_sda_drone', {title: 'Sumber Daya Air'});
};

/* Edit Data */
exports.edit_sda_drone = function(req, res){
    res.render('sda/edit_sda_drone', {title: 'Sumber Daya Air'});
};
/*============================================================================================*/

/*======================================Keciptakaryaan========================================*/
exports.keciptakaryaan = function(req, res){
    res.render('keciptakaryaan/keciptakaryaan', {title: 'Keciptakaryaan'});
};
/*=====================Tenaga Ahli Berdasarkan Pengalaman dan Sertifikasi ====================*/
/*Render Tabel*/
exports.cipta_3_1 = function(req, res){
    res.render('keciptakaryaan/cipta_3_1', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_1 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_1', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_1 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_1', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*==========================Tenaga sub Profesional Jasa Konsultansi===========================*/
/*Render Tabel*/
exports.cipta_3_2 = function(req, res){
    res.render('keciptakaryaan/cipta_3_2', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_2 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_2', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_2 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_2', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*==============================Tenaga Pendukung Jasa Konsultansi=============================*/
/*Render Tabel*/
exports.cipta_3_3 = function(req, res){
    res.render('keciptakaryaan/cipta_3_3', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_3 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_3', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_3 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_3', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*============Biaya Langsung Non Personil Untuk Jenis Pengeluaran Reimbursable================*/
/*Render Tabel*/
exports.cipta_3_4 = function(req, res){
    res.render('keciptakaryaan/cipta_3_4', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_4 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_4', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_4 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_4', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*===========Biaya Langsung Non Personil Untuk  Jenis Pengeluaran Fixed Unit Rate=============*/
/*Render Tabel*/
exports.cipta_3_5 = function(req, res){
    res.render('keciptakaryaan/cipta_3_5', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_5 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_5', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_5 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_5', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*=====================Daftar Harga  Standar Upah  Pekerja Jasa Konstruksi====================*/
/*Render Tabel*/
exports.cipta_3_6 = function(req, res){
    res.render('keciptakaryaan/cipta_3_6', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_6 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_6', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_6 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_6', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*====Prosentase Komponen Biaya Pembangunan Bangunan Gedung Negara Klasifikasi Sederhana======*/
/*Render Tabel*/
exports.cipta_3_7 = function(req, res){
    res.render('keciptakaryaan/cipta_3_7', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_7 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_7', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_7 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_7', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*==Prosentase Komponen Biaya Pembangunan Bangunan Gedung Negara Klasifikasi Tidak Sederhana===*/
/*Render Tabel*/
exports.cipta_3_8 = function(req, res){
    res.render('keciptakaryaan/cipta_3_8', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_8 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_8', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_8 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_8', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*=============Prosentase Komponen Biaya Pembangunan Bangunan Gedung Negara Khusus============*/
/*Render Tabel*/
exports.cipta_3_9 = function(req, res){
    res.render('keciptakaryaan/cipta_3_9', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_9 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_9', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_9 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_9', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*=Pedoman Harga Satuan Per Meter Persegi Tertinggi Bangunan  Gedung Pemerintah dan Rumah Dinas=*/
/*Render Tabel*/
exports.cipta_3_10 = function(req, res){
    res.render('keciptakaryaan/cipta_3_10', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_10 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_10', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_10 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_10', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*===================Pedoman Harga Satuan Per Meter Tertinggi Bangunan Pagar==================*/
/*Render Tabel*/
exports.cipta_3_11 = function(req, res){
    res.render('keciptakaryaan/cipta_3_11', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_11 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_11', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_11 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_11', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*==============Standar Kegiatan Pekerjaan Fisik Pembangunan Fisik Air Bersih=================*/
/*Render Tabel*/
exports.cipta_3_12 = function(req, res){
    res.render('keciptakaryaan/cipta_3_12', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_12 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_12', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_12 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_12', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*=========Standar Kegiatan Pekerjaan Fisik Perencanaan Teknis Sistem Air Bersih==============*/
/*Render Tabel*/
exports.cipta_3_13 = function(req, res){
    res.render('keciptakaryaan/cipta_3_13', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_13 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_13', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_13 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_13', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*=================Standar Kegiatan Pekerjaan Fisik Bidang Penyehatan Lingkungan==============*/
/*Render Tabel*/
exports.cipta_3_14 = function(req, res){
    res.render('keciptakaryaan/cipta_3_14', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_14 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_14', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_14 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_14', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*=========Sub Bidang Proyek Untuk Kegiatan Perumahan Kota (PLPK)/ Bidang Permukiman==========*/
/*Render Tabel*/
exports.cipta_3_15 = function(req, res){
    res.render('keciptakaryaan/cipta_3_15', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_15 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_15', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_15 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_15', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*===========Sub Bidang Untuk Kegiatan Perumahan Kota (PLPK)/ Bidang Permukiman===============*/
/*Render Tabel*/
exports.cipta_3_16 = function(req, res){
    res.render('keciptakaryaan/cipta_3_16', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_16 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_16', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_16 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_16', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*========================Prosentase Komponen Pekerjaan Bangunan==============================*/
/*Render Tabel*/
exports.cipta_3_17 = function(req, res){
    res.render('keciptakaryaan/cipta_3_17', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_17 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_17', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_17 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_17', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*=========Standar Kegiatan Pekerjaan Fisik Perencanaan Teknis Sistem Air Bersih==============*/
/*Render Tabel*/
exports.cipta_3_18 = function(req, res){
    res.render('keciptakaryaan/cipta_3_18', {title: 'Keciptakaryaan'});
};

/* Tambah Data */
exports.tambah_cipta_3_18 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_18', {title: 'Keciptakaryaan'});
};

/* Edit Data */
exports.edit_cipta_3_18 = function(req, res){
    res.render('keciptakaryaan/edit_cipta_3_18', {title: 'Keciptakaryaan'});
};
/*============================================================================================*/
/*======================================Perhubungan===========================================*/
exports.perhubungan = function(req, res){
    res.render('perhubungan/perhubungan', {title: 'Perhubungan'});
};
/*====================================Perhubungan Darat=======================================*/
/*Render Tabel*/
exports.hub_4_1IA = function(req, res){
    res.render('perhubungan/hub_4_1IA', {title: 'Perhubungan'});
};

/* Tambah Data */
exports.tambah_hub_4_1IA = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IA', {title: 'Perhubungan'});
};

/* Edit Data */
exports.edit_hub_4_1IA = function(req, res){
    res.render('perhubungan/edit_hub_4_1IA', {title: 'Perhubungan'});
};
/*===========================================================================================*/
exports.hub_4_1IB = function(req, res){
    res.render('perhubungan/hub_4_1IB', {title: 'Perhubungan'});
};

/* Tambah Data */
exports.tambah_hub_4_1IB = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IB', {title: 'Perhubungan'});
};

/* Edit Data */
exports.edit_hub_4_1IB = function(req, res){
    res.render('perhubungan/edit_hub_4_1IB', {title: 'Perhubungan'});
};
/*===========================================================================================*/
exports.hub_4_1IC = function(req, res){
    res.render('perhubungan/hub_4_1IC', {title: 'Perhubungan'});
};

/* Tambah Data */
exports.tambah_hub_4_1IC = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IC', {title: 'Perhubungan'});
};

/* Edit Data */
exports.edit_hub_4_1IC = function(req, res){
    res.render('perhubungan/edit_hub_4_1IC', {title: 'Perhubungan'});
};
/*====================================Perhubungan Laut=======================================*/
/*Render Tabel*/
exports.hub_4_1IIA = function(req, res){
    res.render('perhubungan/hub_4_1IIA', {title: 'Perhubungan'});
};

/* Tambah Data */
exports.tambah_hub_4_1IIA = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IIA', {title: 'Perhubungan'});
};

/* Edit Data */
exports.edit_hub_4_1IIA = function(req, res){
    res.render('perhubungan/edit_hub_4_1IIA', {title: 'Perhubungan'});
};
/*===========================================================================================*/
exports.hub_4_1IIB = function(req, res){
    res.render('perhubungan/hub_4_1IIB', {title: 'Perhubungan'});
};

/* Tambah Data */
exports.tambah_hub_4_1IIB = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IIB', {title: 'Perhubungan'});
};

/* Edit Data */
exports.edit_hub_4_1IIB = function(req, res){
    res.render('perhubungan/edit_hub_4_1IIB', {title: 'Perhubungan'});
};
/*====================================Perhubungan Udara=======================================*/
/*Render Tabel*/
exports.hub_4_1IIIA = function(req, res){
    res.render('perhubungan/hub_4_1IIIA', {title: 'Perhubungan'});
};

/* Tambah Data */
exports.tambah_hub_4_1IIIA = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IIIA', {title: 'Perhubungan'});
};

/* Edit Data */
exports.edit_hub_4_1IIIA = function(req, res){
    res.render('perhubungan/edit_hub_4_1IIIA', {title: 'Perhubungan'});
};
/*===========================================================================================*/

/*===================================Lingkungan Hidup=========================================*/
exports.lingkungan_hidup = function(req, res){
    res.render('lhidup/lingkungan_hidup', {title: 'Lingkungan Hidup'});
};
/*==========================Pengujian Parameter Kualitas Lingkungan===========================*/
/*Render Tabel*/
exports.lh_5_1a = function(req, res){
    res.render('lhidup/lh_5_1a', {title: 'Lingkungan Hidup'});
};

/* Tambah Data */
exports.tambah_lh_5_1a = function(req, res){
    res.render('lhidup/tambah_lh_5_1a', {title: 'Lingkungan Hidup'});
};

/* Edit Data */
exports.edit_lh_5_1a = function(req, res){
    res.render('lhidup/edit_lh_5_1a', {title: 'Lingkungan Hidup'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1b = function(req, res){
    res.render('lhidup/lh_5_1b', {title: 'Lingkungan Hidup'});
};

/* Tambah Data */
exports.tambah_lh_5_1b = function(req, res){
    res.render('lhidup/tambah_lh_5_1b', {title: 'Lingkungan Hidup'});
};

/* Edit Data */
exports.edit_lh_5_1b = function(req, res){
    res.render('lhidup/edit_lh_5_1b', {title: 'Lingkungan Hidup'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1c = function(req, res){
    res.render('lhidup/lh_5_1c', {title: 'Lingkungan Hidup'});
};

/* Tambah Data */
exports.tambah_lh_5_1c = function(req, res){
    res.render('lhidup/tambah_lh_5_1c', {title: 'Lingkungan Hidup'});
};

/* Edit Data */
exports.edit_lh_5_1c = function(req, res){
    res.render('lhidup/edit_lh_5_1c', {title: 'Lingkungan Hidup'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1d = function(req, res){
    res.render('lhidup/lh_5_1d', {title: 'Lingkungan Hidup'});
};

/* Tambah Data */
exports.tambah_lh_5_1d = function(req, res){
    res.render('lhidup/tambah_lh_5_1d', {title: 'Lingkungan Hidup'});
};

/* Edit Data */
exports.edit_lh_5_1d = function(req, res){
    res.render('lhidup/edit_lh_5_1d', {title: 'Lingkungan Hidup'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1e = function(req, res){
    res.render('lhidup/lh_5_1e', {title: 'Lingkungan Hidup'});
};

/* Tambah Data */
exports.tambah_lh_5_1e = function(req, res){
    res.render('lhidup/tambah_lh_5_1e', {title: 'Lingkungan Hidup'});
};

/* Edit Data */
exports.edit_lh_5_1e = function(req, res){
    res.render('lhidup/edit_lh_5_1e', {title: 'Lingkungan Hidup'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1f = function(req, res){
    res.render('lhidup/lh_5_1f', {title: 'Lingkungan Hidup'});
};

/* Tambah Data */
exports.tambah_lh_5_1f = function(req, res){
    res.render('lhidup/tambah_lh_5_1f', {title: 'Lingkungan Hidup'});
};

/* Edit Data */
exports.edit_lh_5_1f = function(req, res){
    res.render('lhidup/edit_lh_5_1f', {title: 'Lingkungan Hidup'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1g = function(req, res){
    res.render('lhidup/lh_5_1g', {title: 'Lingkungan Hidup'});
};

/* Tambah Data */
exports.tambah_lh_5_1g = function(req, res){
    res.render('lhidup/tambah_lh_5_1g', {title: 'Lingkungan Hidup'});
};

/* Edit Data */
exports.edit_lh_5_1g = function(req, res){
    res.render('lhidup/edit_lh_5_1g', {title: 'Lingkungan Hidup'});
};
/*============================================================================================*/

/*=======================Pengambilan Contoh Parameter Kualitas Lingkungan=====================*/
/*Render Tabel*/
exports.lh_5_2 = function(req, res){
    res.render('lhidup/lh_5_2', {title: 'Lingkungan Hidup'});
};

/* Tambah Data */
exports.tambah_lh_5_2 = function(req, res){
    res.render('lhidup/tambah_lh_5_2', {title: 'Lingkungan Hidup'});
};

/* Edit Data */
exports.edit_lh_5_2 = function(req, res){
    res.render('lhidup/edit_lh_5_2', {title: 'Lingkungan Hidup'});
};
/*============================================================================================*/
/*=========================================Honorarium=========================================*/
/*Render Tabel*/
exports.lh_5_3 = function(req, res){
    res.render('lhidup/lh_5_3', {title: 'Lingkungan Hidup'});
};

/* Tambah Data */
exports.tambah_lh_5_3 = function(req, res){
    res.render('lhidup/tambah_lh_5_3', {title: 'Lingkungan Hidup'});
};

/* Edit Data */
exports.edit_lh_5_3 = function(req, res){
    res.render('lhidup/edit_lh_5_3', {title: 'Lingkungan Hidup'});
};
/*============================================================================================*/

/*=====================================Bidang Kearsipan=======================================*/
exports.kearsipan = function(req, res){
    res.render('kearsipan/kearsipan', {title: 'Kearsipan'});
};
/*============================Standar Biaya Satuan Pembenahan Arsip===========================*/
/*Render Tabel*/
exports.arsip_6_1 = function(req, res){
    res.render('kearsipan/arsip_6_1', {title: 'Kearsipan'});
};

/* Tambah Data */
exports.tambah_arsip_6_1 = function(req, res){
    res.render('kearsipan/tambah_arsip_6_1', {title: 'Kearsipan'});
};

/* Edit Data */
exports.edit_arsip_6_1 = function(req, res){
    res.render('kearsipan/edit_arsip_6_1', {title: 'Kearsipan'});
};
/*============================================================================================*/
/*======================Standar Biaya Pemeliharaan dan Perawatan Arsip========================*/
/*Render Tabel*/
exports.arsip_6_2 = function(req, res){
    res.render('kearsipan/arsip_6_2', {title: 'Kearsipan'});
};

/* Tambah Data */
exports.tambah_arsip_6_2 = function(req, res){
    res.render('kearsipan/tambah_arsip_6_2', {title: 'Kearsipan'});
};

/* Edit Data */
exports.edit_arsip_6_2 = function(req, res){
    res.render('kearsipan/edit_arsip_6_2', {title: 'Kearsipan'});
};
/*============================================================================================*/
/*============================Satuan Biaya Reproduksi dan Transkripsi=========================*/
/*Render Tabel*/
exports.arsip_6_3 = function(req, res){
    res.render('kearsipan/arsip_6_3', {title: 'Kearsipan'});
};

/* Tambah Data */
exports.tambah_arsip_6_3 = function(req, res){
    res.render('kearsipan/tambah_arsip_6_3', {title: 'Kearsipan'});
};

/* Edit Data */
exports.edit_arsip_6_3 = function(req, res){
    res.render('kearsipan/edit_arsip_6_3', {title: 'Kearsipan'});
};
/*============================================================================================*/
/*=================================Satuan Biaya Pembersihan Arsip=============================*/
/*Render Tabel*/
exports.arsip_6_4 = function(req, res){
    res.render('kearsipan/arsip_6_4', {title: 'Kearsipan'});
};

/* Tambah Data */
exports.tambah_arsip_6_4 = function(req, res){
    res.render('kearsipan/tambah_arsip_6_4', {title: 'Kearsipan'});
};

/* Edit Data */
exports.edit_arsip_6_4 = function(req, res){
    res.render('kearsipan/edit_arsip_6_4', {title: 'Kearsipan'});
};
/*============================================================================================*/
/*=============================Satuan Biaya Jasa Penerjemahan Arsip===========================*/
/*Render Tabel*/
exports.arsip_6_5 = function(req, res){
    res.render('kearsipan/arsip_6_5', {title: 'Kearsipan'});
};

/* Tambah Data */
exports.tambah_arsip_6_5 = function(req, res){
    res.render('kearsipan/tambah_arsip_6_5', {title: 'Kearsipan'});
};

/* Edit Data */
exports.edit_arsip_6_5 = function(req, res){
    res.render('kearsipan/edit_arsip_6_5', {title: 'Kearsipan'});
};
/*============================================================================================*/

/*===================================Bidang Perpustakaan======================================*/
exports.perpustakaan = function(req, res){
    res.render('perpustakaan/perpustakaan', {title: 'Perpustakaan'});
};
/*==========================================Honorarium========================================*/
/*Render Tabel*/
exports.perpus_7_1 = function(req, res){
    res.render('perpustakaan/perpus_7_1', {title: 'Perpustakaan'});
};

/* Tambah Data */
exports.tambah_perpus_7_1 = function(req, res){
    res.render('perpustakaan/tambah_perpus_7_1', {title: 'Perpustakaan'});
};

/* Edit Data */
exports.edit_perpus_7_1 = function(req, res){
    res.render('perpustakaan/edit_perpus_7_1', {title: 'Perpustakaan'});
};
/*============================================================================================*/
/*=================================Standar biaya jasa perpustakaan============================*/
/*Render Tabel*/
exports.perpus_7_2 = function(req, res){
    res.render('perpustakaan/perpus_7_2', {title: 'Perpustakaan'});
};

/* Tambah Data */
exports.tambah_perpus_7_2 = function(req, res){
    res.render('perpustakaan/tambah_perpus_7_2', {title: 'Perpustakaan'});
};

/* Edit Data */
exports.edit_perpus_7_2 = function(req, res){
    res.render('perpustakaan/edit_perpus_7_2', {title: 'Perpustakaan'});
};
/*============================================================================================*/

/*=======================================Bidang Perkebunan====================================*/
exports.perkebunan = function(req, res){
    res.render('perkebunan/perkebunan', {title: 'Perkebunan'});
};

/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_1 = function(req, res){
    res.render('perkebunan/kebun_8_1', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_1 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_1', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_1 = function(req, res){
    res.render('perkebunan/edit_kebun_8_1', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_2 = function(req, res){
    res.render('perkebunan/kebun_8_2', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_2 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_2', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_2 = function(req, res){
    res.render('perkebunan/edit_kebun_8_2', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_3 = function(req, res){
    res.render('perkebunan/kebun_8_3', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_3 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_3', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_3 = function(req, res){
    res.render('perkebunan/edit_kebun_8_3', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_4 = function(req, res){
    res.render('perkebunan/kebun_8_4', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_4 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_4', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_4 = function(req, res){
    res.render('perkebunan/edit_kebun_8_4', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_5 = function(req, res){
    res.render('perkebunan/kebun_8_5', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_5 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_5', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_5 = function(req, res){
    res.render('perkebunan/edit_kebun_8_5', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_6 = function(req, res){
    res.render('perkebunan/kebun_8_6', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_6 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_6', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_6 = function(req, res){
    res.render('perkebunan/edit_kebun_8_6', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_7 = function(req, res){
    res.render('perkebunan/kebun_8_7', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_7 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_7', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_7 = function(req, res){
    res.render('perkebunan/edit_kebun_8_7', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_8 = function(req, res){
    res.render('perkebunan/kebun_8_8', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_8 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_8', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_8 = function(req, res){
    res.render('perkebunan/edit_kebun_8_8', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_9 = function(req, res){
    res.render('perkebunan/kebun_8_9', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_9 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_9', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_9 = function(req, res){
    res.render('perkebunan/edit_kebun_8_9', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_10 = function(req, res){
    res.render('perkebunan/kebun_8_10', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_10 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_10', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_10 = function(req, res){
    res.render('perkebunan/edit_kebun_8_10', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_11 = function(req, res){
    res.render('perkebunan/kebun_8_11', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_11 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_11', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_11 = function(req, res){
    res.render('perkebunan/edit_kebun_8_11', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_12 = function(req, res){
    res.render('perkebunan/kebun_8_12', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_12 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_12', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_12 = function(req, res){
    res.render('perkebunan/edit_kebun_8_12', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_13 = function(req, res){
    res.render('perkebunan/kebun_8_13', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_13 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_13', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_13 = function(req, res){
    res.render('perkebunan/edit_kebun_8_13', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_14 = function(req, res){
    res.render('perkebunan/kebun_8_14', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_14 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_14', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_14 = function(req, res){
    res.render('perkebunan/edit_kebun_8_14', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_15 = function(req, res){
    res.render('perkebunan/kebun_8_15', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_15 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_15', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_15 = function(req, res){
    res.render('perkebunan/edit_kebun_8_15', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_16 = function(req, res){
    res.render('perkebunan/kebun_8_16', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_16 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_16', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_16 = function(req, res){
    res.render('perkebunan/edit_kebun_8_16', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_17 = function(req, res){
    res.render('perkebunan/kebun_8_17', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_17 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_17', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_17 = function(req, res){
    res.render('perkebunan/edit_kebun_8_17', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_18 = function(req, res){
    res.render('perkebunan/kebun_8_18', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_18 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_18', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_18 = function(req, res){
    res.render('perkebunan/edit_kebun_8_18', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_19 = function(req, res){
    res.render('perkebunan/kebun_8_19', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_19 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_19', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_19 = function(req, res){
    res.render('perkebunan/edit_kebun_8_19', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_20 = function(req, res){
    res.render('perkebunan/kebun_8_20', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_20 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_20', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_20 = function(req, res){
    res.render('perkebunan/edit_kebun_8_20', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_21 = function(req, res){
    res.render('perkebunan/kebun_8_21', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_21 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_21', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_21 = function(req, res){
    res.render('perkebunan/edit_kebun_8_21', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_22 = function(req, res){
    res.render('perkebunan/kebun_8_22', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_22 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_22', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_22 = function(req, res){
    res.render('perkebunan/edit_kebun_8_22', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_23 = function(req, res){
    res.render('perkebunan/kebun_8_23', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_23 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_23', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_23 = function(req, res){
    res.render('perkebunan/edit_kebun_8_23', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_24 = function(req, res){
    res.render('perkebunan/kebun_8_24', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_24 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_24', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_24 = function(req, res){
    res.render('perkebunan/edit_kebun_8_24', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_25 = function(req, res){
    res.render('perkebunan/kebun_8_25', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_25 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_25', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_25 = function(req, res){
    res.render('perkebunan/edit_kebun_8_25', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_26 = function(req, res){
    res.render('perkebunan/kebun_8_26', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_26 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_26', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_26 = function(req, res){
    res.render('perkebunan/edit_kebun_8_26', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_27 = function(req, res){
    res.render('perkebunan/kebun_8_27', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_27 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_27', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_27 = function(req, res){
    res.render('perkebunan/edit_kebun_8_27', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_28 = function(req, res){
    res.render('perkebunan/kebun_8_28', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_28 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_28', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_28 = function(req, res){
    res.render('perkebunan/edit_kebun_8_28', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_29 = function(req, res){
    res.render('perkebunan/kebun_8_29', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_29 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_29', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_29 = function(req, res){
    res.render('perkebunan/edit_kebun_8_29', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_30 = function(req, res){
    res.render('perkebunan/kebun_8_30', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_30 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_30', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_30 = function(req, res){
    res.render('perkebunan/edit_kebun_8_30', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_31 = function(req, res){
    res.render('perkebunan/kebun_8_31', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_31 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_31', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_31 = function(req, res){
    res.render('perkebunan/edit_kebun_8_31', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_32 = function(req, res){
    res.render('perkebunan/kebun_8_32', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_32 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_32', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_32 = function(req, res){
    res.render('perkebunan/edit_kebun_8_32', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_33 = function(req, res){
    res.render('perkebunan/kebun_8_33', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_33 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_33', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_33 = function(req, res){
    res.render('perkebunan/edit_kebun_8_33', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_34 = function(req, res){
    res.render('perkebunan/kebun_8_34', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_34 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_34', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_34 = function(req, res){
    res.render('perkebunan/edit_kebun_8_34', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_35 = function(req, res){
    res.render('perkebunan/kebun_8_35', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_35 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_35', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_35 = function(req, res){
    res.render('perkebunan/edit_kebun_8_35', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_36 = function(req, res){
    res.render('perkebunan/kebun_8_36', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_36 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_36', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_36 = function(req, res){
    res.render('perkebunan/edit_kebun_8_36', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_37 = function(req, res){
    res.render('perkebunan/kebun_8_37', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_37 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_37', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_37 = function(req, res){
    res.render('perkebunan/edit_kebun_8_37', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_38 = function(req, res){
    res.render('perkebunan/kebun_8_38', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_38 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_38', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_38 = function(req, res){
    res.render('perkebunan/edit_kebun_8_38', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_39 = function(req, res){
    res.render('perkebunan/kebun_8_39', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_39 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_39', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_39 = function(req, res){
    res.render('perkebunan/edit_kebun_8_39', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_40 = function(req, res){
    res.render('perkebunan/kebun_8_40', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_40 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_40', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_40 = function(req, res){
    res.render('perkebunan/edit_kebun_8_40', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_41 = function(req, res){
    res.render('perkebunan/kebun_8_41', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_41 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_41', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_41 = function(req, res){
    res.render('perkebunan/edit_kebun_8_41', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_42 = function(req, res){
    res.render('perkebunan/kebun_8_42', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_42 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_42', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_42 = function(req, res){
    res.render('perkebunan/edit_kebun_8_42', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_43 = function(req, res){
    res.render('perkebunan/kebun_8_43', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_43 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_43', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_43 = function(req, res){
    res.render('perkebunan/edit_kebun_8_43', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_44 = function(req, res){
    res.render('perkebunan/kebun_8_44', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_44 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_44', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_44 = function(req, res){
    res.render('perkebunan/edit_kebun_8_44', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_45 = function(req, res){
    res.render('perkebunan/kebun_8_45', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_45 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_45', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_45 = function(req, res){
    res.render('perkebunan/edit_kebun_8_45', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_46 = function(req, res){
    res.render('perkebunan/kebun_8_46', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_46 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_46', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_46 = function(req, res){
    res.render('perkebunan/edit_kebun_8_46', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_47 = function(req, res){
    res.render('perkebunan/kebun_8_47', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_47 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_47', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_47 = function(req, res){
    res.render('perkebunan/edit_kebun_8_47', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_48 = function(req, res){
    res.render('perkebunan/kebun_8_48', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_48 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_48', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_48 = function(req, res){
    res.render('perkebunan/edit_kebun_8_48', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_49 = function(req, res){
    res.render('perkebunan/kebun_8_49', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_49 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_49', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_49 = function(req, res){
    res.render('perkebunan/edit_kebun_8_49', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_50 = function(req, res){
    res.render('perkebunan/kebun_8_50', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_50 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_50', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_50 = function(req, res){
    res.render('perkebunan/edit_kebun_8_50', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_51 = function(req, res){
    res.render('perkebunan/kebun_8_51', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_51 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_51', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_51 = function(req, res){
    res.render('perkebunan/edit_kebun_8_51', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_52 = function(req, res){
    res.render('perkebunan/kebun_8_52', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_52 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_52', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_52 = function(req, res){
    res.render('perkebunan/edit_kebun_8_52', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_53 = function(req, res){
    res.render('perkebunan/kebun_8_53', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_53 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_53', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_53 = function(req, res){
    res.render('perkebunan/edit_kebun_8_53', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_54 = function(req, res){
    res.render('perkebunan/kebun_8_54', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_54 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_54', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_54 = function(req, res){
    res.render('perkebunan/edit_kebun_8_54', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_55 = function(req, res){
    res.render('perkebunan/kebun_8_55', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_55 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_55', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_55 = function(req, res){
    res.render('perkebunan/edit_kebun_8_55', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_56 = function(req, res){
    res.render('perkebunan/kebun_8_56', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_56 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_56', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_56 = function(req, res){
    res.render('perkebunan/edit_kebun_8_56', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_57 = function(req, res){
    res.render('perkebunan/kebun_8_57', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_57 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_57', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_57 = function(req, res){
    res.render('perkebunan/edit_kebun_8_57', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_58 = function(req, res){
    res.render('perkebunan/kebun_8_58', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_58 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_58', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_58 = function(req, res){
    res.render('perkebunan/edit_kebun_8_58', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_59 = function(req, res){
    res.render('perkebunan/kebun_8_59', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_59 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_59', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_59 = function(req, res){
    res.render('perkebunan/edit_kebun_8_59', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_60 = function(req, res){
    res.render('perkebunan/kebun_8_60', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_60 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_60', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_60 = function(req, res){
    res.render('perkebunan/edit_kebun_8_60', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_61 = function(req, res){
    res.render('perkebunan/kebun_8_61', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_61 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_61', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_61 = function(req, res){
    res.render('perkebunan/edit_kebun_8_61', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_62 = function(req, res){
    res.render('perkebunan/kebun_8_62', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_62 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_62', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_62 = function(req, res){
    res.render('perkebunan/edit_kebun_8_62', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_63 = function(req, res){
    res.render('perkebunan/kebun_8_63', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_63 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_63', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_63 = function(req, res){
    res.render('perkebunan/edit_kebun_8_63', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_64 = function(req, res){
    res.render('perkebunan/kebun_8_64', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_64 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_64', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_64 = function(req, res){
    res.render('perkebunan/edit_kebun_8_64', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_65 = function(req, res){
    res.render('perkebunan/kebun_8_65', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_65 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_65', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_65 = function(req, res){
    res.render('perkebunan/edit_kebun_8_65', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_66 = function(req, res){
    res.render('perkebunan/kebun_8_66', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_66 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_66', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_66 = function(req, res){
    res.render('perkebunan/edit_kebun_8_66', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_67 = function(req, res){
    res.render('perkebunan/kebun_8_67', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_67 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_67', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_67 = function(req, res){
    res.render('perkebunan/edit_kebun_8_67', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_68 = function(req, res){
    res.render('perkebunan/kebun_8_68', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_68 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_68', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_68 = function(req, res){
    res.render('perkebunan/edit_kebun_8_68', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_69 = function(req, res){
    res.render('perkebunan/kebun_8_69', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_69 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_69', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_69 = function(req, res){
    res.render('perkebunan/edit_kebun_8_69', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_70 = function(req, res){
    res.render('perkebunan/kebun_8_70', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_70 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_70', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_70 = function(req, res){
    res.render('perkebunan/edit_kebun_8_70', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_71 = function(req, res){
    res.render('perkebunan/kebun_8_71', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_71 = function(req, res){
    res.render('perkebunan/tambah_kebun_8_71', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_71 = function(req, res){
    res.render('perkebunan/edit_kebun_8_71', {title: 'Perkebunan'});
};
/*============================================================================================*/

/*=================================Kebudayaan dan Pariwisata==================================*/
exports.pariwisata = function(req, res){
    res.render('pariwisata/pariwisata', {title: 'Kebudayaan dan Pariwisata'});
};
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.budpar_9_1 = function(req, res){
    res.render('pariwisata/budpar_9_1', {title: 'Kebudayaan dan Pariwisata'});
};

/* Tambah Data */
exports.tambah_budpar_9_1 = function(req, res){
    res.render('pariwisata/tambah_budpar_9_1', {title: 'Kabudayaan dan Pariwisata'});
};

/* Edit Data */
exports.edit_budpar_9_1 = function(req, res){
    res.render('pariwisata/edit_budpar_9_1', {title: 'Kebudayaan dan Pariwisata'});
};
/*============================================================================================*/

/*=================================Industri dan Perdagangan===================================*/
exports.indag = function(req, res){
    res.render('indag/indag', {title: 'Industri dan Perdagangan'});
};
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.indag_10_1a = function(req, res){
    res.render('indag/indag_10_1a', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_1a = function(req, res){
    res.render('indag/tambah_indag_10_1a', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_1a = function(req, res){
    res.render('indag/edit_indag_10_1a', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.indag_10_1b = function(req, res){
    res.render('indag/indag_10_1b', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_1b = function(req, res){
    res.render('indag/tambah_indag_10_1b', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_1b = function(req, res){
    res.render('indag/edit_indag_10_1b', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.indag_10_1c = function(req, res){
    res.render('indag/indag_10_1c', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_1c = function(req, res){
    res.render('indag/tambah_indag_10_1c', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_1c = function(req, res){
    res.render('indag/edit_indag_10_1c', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.indag_10_1d = function(req, res){
    res.render('indag/indag_10_1d', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_1d = function(req, res){
    res.render('indag/tambah_indag_10_1d', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_1d = function(req, res){
    res.render('indag/edit_indag_10_1d', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.indag_10_1e = function(req, res){
    res.render('indag/indag_10_1e', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_1e = function(req, res){
    res.render('indag/tambah_indag_10_1e', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_1e = function(req, res){
    res.render('indag/edit_indag_10_1e', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.indag_10_1f = function(req, res){
    res.render('indag/indag_10_1f', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_1f = function(req, res){
    res.render('indag/tambah_indag_10_1f', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_1f = function(req, res){
    res.render('indag/edit_indag_10_1f', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.indag_10_1g = function(req, res){
    res.render('indag/indag_10_1g', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_1g = function(req, res){
    res.render('indag/tambah_indag_10_1g', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_1g = function(req, res){
    res.render('indag/edit_indag_10_1g', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.indag_10_2a = function(req, res){
    res.render('indag/indag_10_2a', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_2a = function(req, res){
    res.render('indag/tambah_indag_10_2a', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_2a = function(req, res){
    res.render('indag/edit_indag_10_2a', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.indag_10_2b = function(req, res){
    res.render('indag/indag_10_2b', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_2b = function(req, res){
    res.render('indag/tambah_indag_10_2b', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_2b = function(req, res){
    res.render('indag/edit_indag_10_2b', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.indag_10_3 = function(req, res){
    res.render('indag/indag_10_3', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_3 = function(req, res){
    res.render('indag/tambah_indag_10_3', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_3 = function(req, res){
    res.render('indag/edit_indag_10_3', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.indag_10_4 = function(req, res){
    res.render('indag/indag_10_4', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_4 = function(req, res){
    res.render('indag/tambah_indag_10_4', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_4 = function(req, res){
    res.render('indag/edit_indag_10_4', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.indag_10_5 = function(req, res){
    res.render('indag/indag_10_5', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_5 = function(req, res){
    res.render('indag/tambah_indag_10_5', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_5 = function(req, res){
    res.render('indag/edit_indag_10_5', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.indag_10_6 = function(req, res){
    res.render('indag/indag_10_6', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_6 = function(req, res){
    res.render('indag/tambah_indag_10_6', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_6 = function(req, res){
    res.render('indag/edit_indag_10_6', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.indag_10_7 = function(req, res){
    res.render('indag/indag_10_7', {title: 'Industri dan Perdagangan'});
};

/* Tambah Data */
exports.tambah_indag_10_7 = function(req, res){
    res.render('indag/tambah_indag_10_7', {title: 'Industri dan Perdagangan'});
};

/* Edit Data */
exports.edit_indag_10_7 = function(req, res){
    res.render('indag/edit_indag_10_7', {title: 'Industri dan Perdagangan'});
};
/*============================================================================================*/

/*================================Promosi dan Pnanaman Modal==================================*/
exports.promod = function(req, res){
    res.render('promod/promod', {title: 'Promosi dan Pnanaman Modal'});
};
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.promod_11_1a = function(req, res){
    res.render('promod/promod_11_1a', {title: 'Promosi dan Pnanaman Modal'});
};

/* Tambah Data */
exports.tambah_promod_11_1a = function(req, res){
    res.render('promod/tambah_promod_11_1a', {title: 'Promosi dan Pnanaman Modal'});
};

/* Edit Data */
exports.edit_promod_11_1a = function(req, res){
    res.render('promod/edit_promod_11_1a', {title: 'Promosi dan Pnanaman Modal'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.promod_11_1b = function(req, res){
    res.render('promod/promod_11_1b', {title: 'Promosi dan Pnanaman Modal'});
};

/* Tambah Data */
exports.tambah_promod_11_1b = function(req, res){
    res.render('promod/tambah_promod_11_1b', {title: 'Promosi dan Pnanaman Modal'});
};

/* Edit Data */
exports.edit_promod_11_1b = function(req, res){
    res.render('promod/edit_promod_11_1b', {title: 'Promosi dan Pnanaman Modal'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.promod_11_1c = function(req, res){
    res.render('promod/promod_11_1c', {title: 'Promosi dan Pnanaman Modal'});
};

/* Tambah Data */
exports.tambah_promod_11_1c = function(req, res){
    res.render('promod/tambah_promod_11_1c', {title: 'Promosi dan Pnanaman Modal'});
};

/* Edit Data */
exports.edit_promod_11_1c = function(req, res){
    res.render('promod/edit_promod_11_1c', {title: 'Promosi dan Pnanaman Modal'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.promod_11_1d = function(req, res){
    res.render('promod/promod_11_1d', {title: 'Promosi dan Pnanaman Modal'});
};

/* Tambah Data */
exports.tambah_promod_11_1d = function(req, res){
    res.render('promod/tambah_promod_11_1d', {title: 'Promosi dan Pnanaman Modal'});
};

/* Edit Data */
exports.edit_promod_11_1d = function(req, res){
    res.render('promod/edit_promod_11_1d', {title: 'Promosi dan Pnanaman Modal'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.promod_11_1e = function(req, res){
    res.render('promod/promod_11_1e', {title: 'Promosi dan Pnanaman Modal'});
};

/* Tambah Data */
exports.tambah_promod_11_1e = function(req, res){
    res.render('promod/tambah_promod_11_1e', {title: 'Promosi dan Pnanaman Modal'});
};

/* Edit Data */
exports.edit_promod_11_1e = function(req, res){
    res.render('promod/edit_promod_11_1e', {title: 'Promosi dan Pnanaman Modal'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.promod_11_1f = function(req, res){
    res.render('promod/promod_11_1f', {title: 'Promosi dan Pnanaman Modal'});
};

/* Tambah Data */
exports.tambah_promod_11_1f = function(req, res){
    res.render('promod/tambah_promod_11_1f', {title: 'Promosi dan Pnanaman Modal'});
};

/* Edit Data */
exports.edit_promod_11_1f = function(req, res){
    res.render('promod/edit_promod_11_1f', {title: 'Promosi dan Pnanaman Modal'});
};
/*============================================================================================*/
/*Render Tabel*/
exports.promod_11_1g = function(req, res){
    res.render('promod/promod_11_1g', {title: 'Promosi dan Pnanaman Modal'});
};

/* Tambah Data */
exports.tambah_promod_11_1g = function(req, res){
    res.render('promod/tambah_promod_11_1g', {title: 'Promosi dan Pnanaman Modal'});
};

/* Edit Data */
exports.edit_promod_11_1g = function(req, res){
    res.render('promod/edit_promod_11_1g', {title: 'Promosi dan Pnanaman Modal'});
};
/*============================================================================================*/

/*========================================Informatika=========================================*/
exports.informatika = function(req, res){
    res.render('informatika/informatika', {title: 'Informatika'});
};

/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.informatika_12_1 = function(req, res){
    res.render('informatika/informatika_12_1', {title: 'Informatika'});
};

/* Tambah Data */
exports.tambah_informatika_12_1 = function(req, res){
    res.render('informatika/tambah_informatika_12_1', {title: 'Informatika'});
};

/* Edit Data */
exports.edit_informatika_12_1 = function(req, res){
    res.render('informatika/edit_informatika_12_1', {title: 'Informatika'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.informatika_12_2 = function(req, res){
    res.render('informatika/informatika_12_2', {title: 'Informatika'});
};

/* Tambah Data */
exports.tambah_informatika_12_2 = function(req, res){
    res.render('informatika/tambah_informatika_12_2', {title: 'Informatika'});
};

/* Edit Data */
exports.edit_informatika_12_2 = function(req, res){
    res.render('informatika/edit_informatika_12_2', {title: 'Informatika'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.informatika_12_3 = function(req, res){
    res.render('informatika/informatika_12_3', {title: 'Informatika'});
};

/* Tambah Data */
exports.tambah_informatika_12_3 = function(req, res){
    res.render('informatika/tambah_informatika_12_3', {title: 'Informatika'});
};

/* Edit Data */
exports.edit_informatika_12_3 = function(req, res){
    res.render('informatika/edit_informatika_12_3', {title: 'Informatika'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.informatika_12_4 = function(req, res){
    res.render('informatika/informatika_12_4', {title: 'Informatika'});
};

/* Tambah Data */
exports.tambah_informatika_12_4 = function(req, res){
    res.render('informatika/tambah_informatika_12_4', {title: 'Informatika'});
};

/* Edit Data */
exports.edit_informatika_12_4 = function(req, res){
    res.render('informatika/edit_informatika_12_4', {title: 'Informatika'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.informatika_12_5 = function(req, res){
    res.render('informatika/informatika_12_5', {title: 'Informatika'});
};

/* Tambah Data */
exports.tambah_informatika_12_5 = function(req, res){
    res.render('informatika/tambah_informatika_12_5', {title: 'Informatika'});
};

/* Edit Data */
exports.edit_informatika_12_5 = function(req, res){
    res.render('informatika/edit_informatika_12_5', {title: 'Informatika'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.informatika_12_6 = function(req, res){
    res.render('informatika/informatika_12_6', {title: 'Informatika'});
};

/* Tambah Data */
exports.tambah_informatika_12_6 = function(req, res){
    res.render('informatika/tambah_informatika_12_6', {title: 'Informatika'});
};

/* Edit Data */
exports.edit_informatika_12_6 = function(req, res){
    res.render('informatika/edit_informatika_12_6', {title: 'Informatika'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.informatika_12_7 = function(req, res){
    res.render('informatika/informatika_12_7', {title: 'Informatika'});
};

/* Tambah Data */
exports.tambah_informatika_12_7 = function(req, res){
    res.render('informatika/tambah_informatika_12_7', {title: 'Informatika'});
};

/* Edit Data */
exports.edit_informatika_12_7 = function(req, res){
    res.render('informatika/edit_informatika_12_7', {title: 'Informatika'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.informatika_12_8 = function(req, res){
    res.render('informatika/informatika_12_8', {title: 'Informatika'});
};

/* Tambah Data */
exports.tambah_informatika_12_8 = function(req, res){
    res.render('informatika/tambah_informatika_12_8', {title: 'Informatika'});
};

/* Edit Data */
exports.edit_informatika_12_8 = function(req, res){
    res.render('informatika/edit_informatika_12_8', {title: 'Informatika'});
};
/*============================================================================================*/

/*========================================Peternakan==========================================*/
exports.peternakan = function(req, res){
    res.render('peternakan/peternakan', {title: 'Peternakan'});
};
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.peternakan_15_1 = function(req, res){
    res.render('peternakan/peternakan_15_1', {title: 'Peternakan'});
};

/* Tambah Data */
exports.tambah_peternakan_15_1 = function(req, res){
    res.render('peternakan/tambah_peternakan_15_1', {title: 'Peternakan'});
};

/* Edit Data */
exports.edit_peternakan_15_1 = function(req, res){
    res.render('peternakan/edit_peternakan_15_1', {title: 'Peternakan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.peternakan_15_2 = function(req, res){
    res.render('peternakan/peternakan_15_2', {title: 'Peternakan'});
};

/* Tambah Data */
exports.tambah_peternakan_15_2 = function(req, res){
    res.render('peternakan/tambah_peternakan_15_2', {title: 'Peternakan'});
};

/* Edit Data */
exports.edit_peternakan_15_2 = function(req, res){
    res.render('peternakan/edit_peternakan_15_2', {title: 'Peternakan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.peternakan_15_3 = function(req, res){
    res.render('peternakan/peternakan_15_3', {title: 'Peternakan'});
};

/* Tambah Data */
exports.tambah_peternakan_15_3 = function(req, res){
    res.render('peternakan/tambah_peternakan_15_3', {title: 'Peternakan'});
};

/* Edit Data */
exports.edit_peternakan_15_3 = function(req, res){
    res.render('peternakan/edit_peternakan_15_3', {title: 'Peternakan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.peternakan_15_4 = function(req, res){
    res.render('peternakan/peternakan_15_4', {title: 'Peternakan'});
};

/* Tambah Data */
exports.tambah_peternakan_15_4 = function(req, res){
    res.render('peternakan/tambah_peternakan_15_4', {title: 'Peternakan'});
};

/* Edit Data */
exports.edit_peternakan_15_4 = function(req, res){
    res.render('peternakan/edit_peternakan_15_4', {title: 'Peternakan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.peternakan_15_5 = function(req, res){
    res.render('peternakan/peternakan_15_5', {title: 'Peternakan'});
};

/* Tambah Data */
exports.tambah_peternakan_15_5 = function(req, res){
    res.render('peternakan/tambah_peternakan_15_5', {title: 'Peternakan'});
};

/* Edit Data */
exports.edit_peternakan_15_5 = function(req, res){
    res.render('peternakan/edit_peternakan_15_5', {title: 'Peternakan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.peternakan_15_6 = function(req, res){
    res.render('peternakan/peternakan_15_6', {title: 'Peternakan'});
};

/* Tambah Data */
exports.tambah_peternakan_15_6 = function(req, res){
    res.render('peternakan/tambah_peternakan_15_6', {title: 'Peternakan'});
};

/* Edit Data */
exports.edit_peternakan_15_6 = function(req, res){
    res.render('peternakan/edit_peternakan_15_6', {title: 'Peternakan'});
};
/*============================================================================================*

/*========================================Kesehatan===========================================*/
exports.kesehatan = function(req, res){
    res.render('kesehatan/kesehatan', {title: 'Kesehatan'});
};
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kesehatan_17_1 = function(req, res){
    res.render('kesehatan/kesehatan_17_1', {title: 'Kesehatan'});
};

/* Tambah Data */
exports.tambah_kesehatan_17_1 = function(req, res){
    res.render('kesehatan/tambah_kesehatan_17_1', {title: 'Kesehatan'});
};

/* Edit Data */
exports.edit_kesehatan_17_1 = function(req, res){
    res.render('kesehatan/edit_kesehatan_17_1', {title: 'Kesehatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kesehatan_17_2 = function(req, res){
    res.render('kesehatan/kesehatan_17_2', {title: 'Kesehatan'});
};

/* Tambah Data */
exports.tambah_kesehatan_17_2 = function(req, res){
    res.render('kesehatan/tambah_kesehatan_17_2', {title: 'Kesehatan'});
};

/* Edit Data */
exports.edit_kesehatan_17_2 = function(req, res){
    res.render('kesehatan/edit_kesehatan_17_2', {title: 'Kesehatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kesehatan_17_3 = function(req, res){
    res.render('kesehatan/kesehatan_17_3', {title: 'Kesehatan'});
};

/* Tambah Data */
exports.tambah_kesehatan_17_3 = function(req, res){
    res.render('kesehatan/tambah_kesehatan_17_3', {title: 'Kesehatan'});
};

/* Edit Data */
exports.edit_kesehatan_17_3 = function(req, res){
    res.render('kesehatan/edit_kesehatan_17_3', {title: 'Kesehatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kesehatan_17_4 = function(req, res){
    res.render('kesehatan/kesehatan_17_4', {title: 'Kesehatan'});
};

/* Tambah Data */
exports.tambah_kesehatan_17_4 = function(req, res){
    res.render('kesehatan/tambah_kesehatan_17_4', {title: 'Kesehatan'});
};

/* Edit Data */
exports.edit_kesehatan_17_4 = function(req, res){
    res.render('kesehatan/edit_kesehatan_17_4', {title: 'Kesehatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kesehatan_17_5 = function(req, res){
    res.render('kesehatan/kesehatan_17_5', {title: 'Kesehatan'});
};

/* Tambah Data */
exports.tambah_kesehatan_17_5 = function(req, res){
    res.render('kesehatan/tambah_kesehatan_17_5', {title: 'Kesehatan'});
};

/* Edit Data */
exports.edit_kesehatan_17_5 = function(req, res){
    res.render('kesehatan/edit_kesehatan_17_5', {title: 'Kesehatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kesehatan_17_6 = function(req, res){
    res.render('kesehatan/kesehatan_17_6', {title: 'Kesehatan'});
};

/* Tambah Data */
exports.tambah_kesehatan_17_6 = function(req, res){
    res.render('kesehatan/tambah_kesehatan_17_6', {title: 'Kesehatan'});
};

/* Edit Data */
exports.edit_kesehatan_17_6 = function(req, res){
    res.render('kesehatan/edit_kesehatan_17_6', {title: 'Kesehatan'});
};
/*============================================================================================*/

/*========================================Kediklatan==========================================*/
exports.kediklatan = function(req, res){
    res.render('kediklatan/kediklatan', {title: 'Kediklatan'});
};
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kediklatan_18_1 = function(req, res){
    res.render('kediklatan/kediklatan_18_1', {title: 'Kediklatan'});
};

/* Tambah Data */
exports.tambah_kediklatan_18_1 = function(req, res){
    res.render('kediklatan/tambah_kediklatan_18_1', {title: 'Kediklatan'});
};

/* Edit Data */
exports.edit_kediklatan_18_1 = function(req, res){
    res.render('kediklatan/edit_kediklatan_18_1', {title: 'Kediklatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kediklatan_18_2 = function(req, res){
    res.render('kediklatan/kediklatan_18_2', {title: 'Kediklatan'});
};

/* Tambah Data */
exports.tambah_kediklatan_18_2 = function(req, res){
    res.render('kediklatan/tambah_kediklatan_18_2', {title: 'Kediklatan'});
};

/* Edit Data */
exports.edit_kediklatan_18_2 = function(req, res){
    res.render('kediklatan/edit_kediklatan_18_2', {title: 'Kediklatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kediklatan_18_3 = function(req, res){
    res.render('kediklatan/kediklatan_18_3', {title: 'Kediklatan'});
};

/* Tambah Data */
exports.tambah_kediklatan_18_3 = function(req, res){
    res.render('kediklatan/tambah_kediklatan_18_3', {title: 'Kediklatan'});
};

/* Edit Data */
exports.edit_kediklatan_18_3 = function(req, res){
    res.render('kediklatan/edit_kediklatan_18_3', {title: 'Kediklatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kediklatan_18_4 = function(req, res){
    res.render('kediklatan/kediklatan_18_4', {title: 'Kediklatan'});
};

/* Tambah Data */
exports.tambah_kediklatan_18_4 = function(req, res){
    res.render('kediklatan/tambah_kediklatan_18_4', {title: 'Kediklatan'});
};

/* Edit Data */
exports.edit_kediklatan_18_4 = function(req, res){
    res.render('kediklatan/edit_kediklatan_18_4', {title: 'Kediklatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kediklatan_18_5 = function(req, res){
    res.render('kediklatan/kediklatan_18_5', {title: 'Kediklatan'});
};

/* Tambah Data */
exports.tambah_kediklatan_18_5 = function(req, res){
    res.render('kediklatan/tambah_kediklatan_18_5', {title: 'Kediklatan'});
};

/* Edit Data */
exports.edit_kediklatan_18_5 = function(req, res){
    res.render('kediklatan/edit_kediklatan_18_5', {title: 'Kediklatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kediklatan_18_6 = function(req, res){
    res.render('kediklatan/kediklatan_18_6', {title: 'Kediklatan'});
};

/* Tambah Data */
exports.tambah_kediklatan_18_6 = function(req, res){
    res.render('kediklatan/tambah_kediklatan_18_6', {title: 'Kediklatan'});
};

/* Edit Data */
exports.edit_kediklatan_18_6 = function(req, res){
    res.render('kediklatan/edit_kediklatan_18_6', {title: 'Kediklatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kediklatan_18_7 = function(req, res){
    res.render('kediklatan/kediklatan_18_7', {title: 'Kediklatan'});
};

/* Tambah Data */
exports.tambah_kediklatan_18_7 = function(req, res){
    res.render('kediklatan/tambah_kediklatan_18_7', {title: 'Kediklatan'});
};

/* Edit Data */
exports.edit_kediklatan_18_7 = function(req, res){
    res.render('kediklatan/edit_kediklatan_18_7', {title: 'Kediklatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kediklatan_18_8 = function(req, res){
    res.render('kediklatan/kediklatan_18_8', {title: 'Kediklatan'});
};

/* Tambah Data */
exports.tambah_kediklatan_18_8 = function(req, res){
    res.render('kediklatan/tambah_kediklatan_18_8', {title: 'Kediklatan'});
};

/* Edit Data */
exports.edit_kediklatan_18_8 = function(req, res){
    res.render('kediklatan/edit_kediklatan_18_8', {title: 'Kediklatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kediklatan_18_9 = function(req, res){
    res.render('kediklatan/kediklatan_18_9', {title: 'Kediklatan'});
};

/* Tambah Data */
exports.tambah_kediklatan_18_9 = function(req, res){
    res.render('kediklatan/tambah_kediklatan_18_9', {title: 'Kediklatan'});
};

/* Edit Data */
exports.edit_kediklatan_18_9 = function(req, res){
    res.render('kediklatan/edit_kediklatan_18_9', {title: 'Kediklatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kediklatan_18_10 = function(req, res){
    res.render('kediklatan/kediklatan_18_10', {title: 'Kediklatan'});
};

/* Tambah Data */
exports.tambah_kediklatan_18_10 = function(req, res){
    res.render('kediklatan/tambah_kediklatan_18_10', {title: 'Kediklatan'});
};

/* Edit Data */
exports.edit_kediklatan_18_10 = function(req, res){
    res.render('kediklatan/edit_kediklatan_18_10', {title: 'Kediklatan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kediklatan_18_11 = function(req, res){
    res.render('kediklatan/kediklatan_18_11', {title: 'Kediklatan'});
};

/* Tambah Data */
exports.tambah_kediklatan_18_11 = function(req, res){
    res.render('kediklatan/tambah_kediklatan_18_11', {title: 'Kediklatan'});
};

/* Edit Data */
exports.edit_kediklatan_18_11 = function(req, res){
    res.render('kediklatan/edit_kediklatan_18_11', {title: 'Kediklatan'});
};
/*============================================================================================*/

/*========================================Olahraga============================================*/
exports.olahraga = function(req, res){
    res.render('olahraga/olahraga', {title: 'Olahraga'});
};

/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.or_19_1 = function(req, res){
    res.render('olahraga/or_19_1', {title: 'Olahraga'});
};

/* Tambah Data */
exports.tambah_or_19_1 = function(req, res){
    res.render('olahraga/tambah_or_19_1', {title: 'Olahraga'});
};

/* Edit Data */
exports.edit_or_19_1 = function(req, res){
    res.render('olahraga/edit_or_19_1', {title: 'Olahraga'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.or_19_2 = function(req, res){
    res.render('olahraga/or_19_2', {title: 'Olahraga'});
};

/* Tambah Data */
exports.tambah_or_19_2 = function(req, res){
    res.render('olahraga/tambah_or_19_2', {title: 'Olahraga'});
};

/* Edit Data */
exports.edit_or_19_2 = function(req, res){
    res.render('olahraga/edit_or_19_2', {title: 'Olahraga'});
};
/*============================================================================================*/

/*==========================================ESDM==============================================*/
exports.esdm = function(req, res){
    res.render('esdm/esdm', {title: 'ESDM'});
};
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_1a = function(req, res){
    res.render('esdm/esdm_20_1a', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_1a = function(req, res){
    res.render('esdm/tambah_esdm_20_1a', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_1a = function(req, res){
    res.render('esdm/edit_esdm_20_1a', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_1b = function(req, res){
    res.render('esdm/esdm_20_1b', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_1b = function(req, res){
    res.render('esdm/tambah_esdm_20_1b', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_1b = function(req, res){
    res.render('esdm/edit_esdm_20_1b', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_2a = function(req, res){
    res.render('esdm/esdm_20_2a', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_2a = function(req, res){
    res.render('esdm/tambah_esdm_20_2a', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_2a = function(req, res){
    res.render('esdm/edit_esdm_20_2a', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_2b = function(req, res){
    res.render('esdm/esdm_20_2b', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_2b = function(req, res){
    res.render('esdm/tambah_esdm_20_2b', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_2b = function(req, res){
    res.render('esdm/edit_esdm_20_2b', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_2c = function(req, res){
    res.render('esdm/esdm_20_2c', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_2c = function(req, res){
    res.render('esdm/tambah_esdm_20_2c', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_2c = function(req, res){
    res.render('esdm/edit_esdm_20_2c', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_3a = function(req, res){
    res.render('esdm/esdm_20_3a', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_3a = function(req, res){
    res.render('esdm/tambah_esdm_20_3a', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_3a = function(req, res){
    res.render('esdm/edit_esdm_20_3a', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_3b = function(req, res){
    res.render('esdm/esdm_20_3b', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_3b = function(req, res){
    res.render('esdm/tambah_esdm_20_3b', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_3b = function(req, res){
    res.render('esdm/edit_esdm_20_3b', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_3c = function(req, res){
    res.render('esdm/esdm_20_3c', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_3c = function(req, res){
    res.render('esdm/tambah_esdm_20_3c', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_3c = function(req, res){
    res.render('esdm/edit_esdm_20_3c', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_4a = function(req, res){
    res.render('esdm/esdm_20_4a', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_4a = function(req, res){
    res.render('esdm/tambah_esdm_20_4a', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_4a = function(req, res){
    res.render('esdm/edit_esdm_20_4a', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_4b = function(req, res){
    res.render('esdm/esdm_20_4b', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_4b = function(req, res){
    res.render('esdm/tambah_esdm_20_4b', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_4b = function(req, res){
    res.render('esdm/edit_esdm_20_4b', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_4c = function(req, res){
    res.render('esdm/esdm_20_4c', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_4c = function(req, res){
    res.render('esdm/tambah_esdm_20_4c', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_4c = function(req, res){
    res.render('esdm/edit_esdm_20_4c', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_5a = function(req, res){
    res.render('esdm/esdm_20_5a', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_5a = function(req, res){
    res.render('esdm/tambah_esdm_20_5a', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_5a = function(req, res){
    res.render('esdm/edit_esdm_20_5a', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_5b = function(req, res){
    res.render('esdm/esdm_20_5b', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_5b = function(req, res){
    res.render('esdm/tambah_esdm_20_5b', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_5b = function(req, res){
    res.render('esdm/edit_esdm_20_5b', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_5c = function(req, res){
    res.render('esdm/esdm_20_5c', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_5c = function(req, res){
    res.render('esdm/tambah_esdm_20_5c', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_5c = function(req, res){
    res.render('esdm/edit_esdm_20_5c', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_6 = function(req, res){
    res.render('esdm/esdm_20_6', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_6 = function(req, res){
    res.render('esdm/tambah_esdm_20_6', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_6 = function(req, res){
    res.render('esdm/edit_esdm_20_6', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_7 = function(req, res){
    res.render('esdm/esdm_20_7', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_7 = function(req, res){
    res.render('esdm/tambah_esdm_20_7', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_7 = function(req, res){
    res.render('esdm/edit_esdm_20_7', {title: 'ESDM'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.esdm_20_8 = function(req, res){
    res.render('esdm/esdm_20_8', {title: 'ESDM'});
};

/* Tambah Data */
exports.tambah_esdm_20_8 = function(req, res){
    res.render('esdm/tambah_esdm_20_8', {title: 'ESDM'});
};

/* Edit Data */
exports.edit_esdm_20_8 = function(req, res){
    res.render('esdm/edit_esdm_20_8', {title: 'ESDM'});
};
/*============================================================================================*/

/*===============================Tenaga Kerja da Transmigrasi=================================*/
exports.nakertrans = function(req, res){
    res.render('nakertrans/nakertrans', {title: 'Tenaga Kerja dan Transmigrasi'});
};
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.nakertrans_21_1a = function(req, res){
    res.render('nakertrans/nakertrans_21_1a', {title: 'Tenaga Kerja dan Transmigrasi'});
};

/* Tambah Data */
exports.tambah_nakertrans_21_1a = function(req, res){
    res.render('nakertrans/tambah_nakertrans_21_1a', {title: 'Tenaga Kerja dan Transmigrasi'});
};

/* Edit Data */
exports.edit_nakertrans_21_1a = function(req, res){
    res.render('nakertrans/edit_nakertrans_21_1a', {title: 'Tenaga Kerja dan Transmigrasi'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.nakertrans_21_1b = function(req, res){
    res.render('nakertrans/nakertrans_21_1b', {title: 'Tenaga Kerja dan Transmigrasi'});
};

/* Tambah Data */
exports.tambah_nakertrans_21_1b = function(req, res){
    res.render('nakertrans/tambah_nakertrans_21_1b', {title: 'Tenaga Kerja dan Transmigrasi'});
};

/* Edit Data */
exports.edit_nakertrans_21_1b = function(req, res){
    res.render('nakertrans/edit_nakertrans_21_1b', {title: 'Tenaga Kerja dan Transmigrasi'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.nakertrans_21_1c = function(req, res){
    res.render('nakertrans/nakertrans_21_1c', {title: 'Tenaga Kerja dan Transmigrasi'});
};

/* Tambah Data */
exports.tambah_nakertrans_21_1c = function(req, res){
    res.render('nakertrans/tambah_nakertrans_21_1c', {title: 'Tenaga Kerja dan Transmigrasi'});
};

/* Edit Data */
exports.edit_nakertrans_21_1c = function(req, res){
    res.render('nakertrans/edit_nakertrans_21_1c', {title: 'Tenaga Kerja dan Transmigrasi'});
};
/*============================================================================================*/

/*===============================Penelitian dan Pengembangan==================================*/
exports.litbang = function(req, res){
    res.render('litbang/litbang', {title: 'Penelitian dan Pengembangan'});
};

/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.litbang_22_1 = function(req, res){
    res.render('litbang/litbang_22_1', {title: 'Penelitian dan Pengembangan'});
};

/* Tambah Data */
exports.tambah_litbang_22_1 = function(req, res){
    res.render('litbang/tambah_litbang_22_1', {title: 'Penelitian dan Pengembangan'});
};

/* Edit Data */
exports.edit_litbang_22_1 = function(req, res){
    res.render('litbang/edit_litbang_22_1', {title: 'Penelitian dan Pengembangan'});
};
/*============================================================================================*/

/*=======================================Lainnya==============================================*/
exports.lainnya = function(req, res){
    res.render('lainnya/lainnya', {title: 'Lainnya'});
};
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.lainnya_23_1 = function(req, res){
    res.render('lainnya/lainnya_23_1', {title: 'Lainnya'});
};

/* Tambah Data */
exports.tambah_lainnya_23_1 = function(req, res){
    res.render('lainnya/tambah_lainnya_23_1', {title: 'Lainnya'});
};

/* Edit Data */
exports.edit_lainnya_23_1 = function(req, res){
    res.render('lainnya/edit_lainnya_23_1', {title: 'Lainnya'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.lainnya_23_2 = function(req, res){
    res.render('lainnya/lainnya_23_2', {title: 'Lainnya'});
};

/* Tambah Data */
exports.tambah_lainnya_23_2 = function(req, res){
    res.render('lainnya/tambah_lainnya_23_2', {title: 'Lainnya'});
};

/* Edit Data */
exports.edit_lainnya_23_2 = function(req, res){
    res.render('lainnya/edit_lainnya_23_2', {title: 'Lainnya'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.lainnya_23_3 = function(req, res){
    res.render('lainnya/lainnya_23_3', {title: 'Lainnya'});
};

/* Tambah Data */
exports.tambah_lainnya_23_3 = function(req, res){
    res.render('lainnya/tambah_lainnya_23_3', {title: 'Lainnya'});
};

/* Edit Data */
exports.edit_lainnya_23_3 = function(req, res){
    res.render('lainnya/edit_lainnya_23_3', {title: 'Lainnya'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.lainnya_23_4 = function(req, res){
    res.render('lainnya/lainnya_23_4', {title: 'Lainnya'});
};

/* Tambah Data */
exports.tambah_lainnya_23_4 = function(req, res){
    res.render('lainnya/tambah_lainnya_23_4', {title: 'Lainnya'});
};

/* Edit Data */
exports.edit_lainnya_23_4 = function(req, res){
    res.render('lainnya/edit_lainnya_23_4', {title: 'Lainnya'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.lainnya_23_5 = function(req, res){
    res.render('lainnya/lainnya_23_5', {title: 'Lainnya'});
};

/* Tambah Data */
exports.tambah_lainnya_23_5 = function(req, res){
    res.render('lainnya/tambah_lainnya_23_5', {title: 'Lainnya'});
};

/* Edit Data */
exports.edit_lainnya_23_5 = function(req, res){
    res.render('lainnya/edit_lainnya_23_5', {title: 'Lainnya'});
};
/*============================================================================================*/



/*============================================================================================*/
/*                              STANDAR BIAYA UMUM BATAS TERTINGGI
/*============================================================================================*/
/*====================================Pengadan Barang/Jasa====================================*/
/*Render Tabel*/
exports.sbu1_2_1 = function(req, res){

     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_1', {
                title: 'Pengadan Barang/Jasa',
                page_title: "Pengadan Barang/Jasa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_1 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_1', {title: 'Pengadan Barang/Jasa'});
   
};

/* Save Data sbu1_2_1 */
exports.save_sbu1_2_1 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 1
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_1');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_1 = function(req, res){
    // res.render('sbu1/edit_2_1', {title: 'Pengadan Barang/Jasa'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_1',{
                title : 'Edit SBU1_2_1',
                page_title:"Edit sbu1_2_1",data:rows
            });
                
           
         });
         
         //console.log(query.sql);
    }); 
};

/* Save Edit sbu1_2_1 */
exports.save_edit_sbu1_2_1 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_1');
          
        });
    
    });
};

/* Delete sbu1_2_1 */
exports.delete_sbu1_2_1 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_1');
             
        });
        
     });
}
/*============================================================================================*/
/*====================================Pengadan Barang/Jasa====================================*/
/*Render Tabel*/
exports.sbu1_2_2 = function(req, res){
    // res.render('sbu1/sbu1_2_2', {title: 'Pengadan Barang/Jasa'});
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 2", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_2', {
                title: 'Pengadan Barang/Jasa',
                page_title: "Pengadan Barang/Jasa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_2 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_2', {title: 'Pengadan Barang/Jasa'});
};

/* Save Data sbu1_2_1 */
exports.save_sbu1_2_2 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 2
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_2');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_2 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_2', {title: 'Pengadan Barang/Jasa'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_2',{
                title : 'Edit SBU1_2_2',
                page_title:"Edit sbu1_2_2",data:rows
            });
                
           
         });
         
         //console.log(query.sql);
    }); 
};

/* Save Edit sbu1_2_1 */
exports.save_edit_sbu1_2_2 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_2');
          
        });
    
    });
};

/* Delete sbu1_2_1 */
exports.delete_sbu1_2_2 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_2');
             
        });
        
     });
};

/*============================================================================================*/
/*====================================Pengadan Barang/Jasa====================================*/
/*Render Tabel*/
exports.sbu1_2_3 = function(req, res){
    // res.render('sbu1/sbu1_2_3', {title: 'Pengadan Barang/Jasa'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail4 WHERE kategori_id = 5", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_3', {
                title: 'Pengadan Barang/Jasa',
                page_title: "Pengadan Barang/Jasa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_3 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_3', {title: 'Pengadan Barang/Jasa'});
};

/* Save Data sbu1_2_1 */
exports.save_sbu1_2_3 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan,
            kategori_id : 5
        };

        var query = connection.query("INSERT INTO detail4 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_3');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_3 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_3', {title: 'Pengadan Barang/Jasa'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail4 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_3',{
                title : 'Edit SBU1_2_3',
                page_title:"Edit sbu1_2_3",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_1 */
exports.save_edit_sbu1_2_3 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail4 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_3');
          
        });
    
    });
};

/* Delete sbu1_2_1 */
exports.delete_sbu1_2_3 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail4  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_3');
             
        });
        
     });
};

/*============================================================================================*/
/*====================================Pengadan Barang/Jasa====================================*/
/*Render Tabel*/
exports.sbu1_2_4 = function(req, res){
    // res.render('sbu1/sbu1_2_4', {title: 'Pengadan Barang/Jasa'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 3", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_4', {
                title: 'Pengadan Barang/Jasa',
                page_title: "Pengadan Barang/Jasa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_4 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_4', {title: 'Pengadan Barang/Jasa'});
};

/* Save Data sbu1_2_1 */
exports.save_sbu1_2_4 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 3
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_4');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_4 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_4', {title: 'Pengadan Barang/Jasa'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_4',{
                title : 'Edit SBU1_2_4',
                page_title:"Edit sbu1_2_4",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_1 */
exports.save_edit_sbu1_2_4 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_4');
          
        });
    
    });
};

/* Delete sbu1_2_1 */
exports.delete_sbu1_2_4 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_4');
             
        });
        
     });
};

/*============================================================================================*/
/*====================================Pengadan Barang/Jasa====================================*/
/*Render Tabel*/
exports.sbu1_2_5 = function(req, res){
    // res.render('sbu1/sbu1_2_5', {title: 'Pengadan Barang/Jasa'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 4", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_5', {
                title: 'Pengadan Barang/Jasa',
                page_title: "Pengadan Barang/Jasa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_5 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_5', {title: 'Pengadan Barang/Jasa'});
};

/* Save Data sbu1_2_1 */
exports.save_sbu1_2_5 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 4
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_5');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_5 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_5', {title: 'Pengadan Barang/Jasa'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_5',{
                title : 'Edit SBU1_2_5',
                page_title:"Edit sbu1_2_5",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_5 */
exports.save_edit_sbu1_2_5 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_5');
          
        });
    
    });
};

/* Delete sbu1_2_5 */
exports.delete_sbu1_2_5 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_5');
             
        });
        
     });
};

/*============================================================================================*/
/*====================================Pengadan Barang/Jasa====================================*/
/*Render Tabel*/
exports.sbu1_2_6 = function(req, res){
    // res.render('sbu1/sbu1_2_6', {title: 'Pengadan Barang/Jasa'});
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail10 WHERE kategori_id = 8", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_6', {
                title: 'Pengadan Barang/Jasa',
                page_title: "Pengadan Barang/Jasa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_6 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_6', {title: 'Pengadan Barang/Jasa'});
};

/* Save Data sbu1_2_6 */
exports.save_sbu1_2_6 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            keterangan : input.keterangan,
            kategori_id : 8
        };

        var query = connection.query("INSERT INTO detail10 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_6');
        });
    });

};


/* Edit Data */
exports.edit_sbu1_2_6 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_6', {title: 'Pengadan Barang/Jasa'});
     var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail10 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_6',{
                title : 'Edit SBU1_2_6',
                page_title:"Edit sbu1_2_6",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_6 */
exports.save_edit_sbu1_2_6 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail10 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_6');
          
        });
    
    });
};

/* Delete sbu1_2_6 */
exports.delete_sbu1_2_6 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail10  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_6');
             
        });
        
     });
};
/*============================================================================================*/
/*====================================Pengadan Barang/Jasa====================================*/
/*Render Tabel*/
exports.sbu1_2_7 = function(req, res){
    // res.render('sbu1/sbu1_2_7', {title: 'Pengadan Barang/Jasa'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail4 WHERE kategori_id = 6", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_7', {
                title: 'Pengadan Barang/Jasa',
                page_title: "Pengadan Barang/Jasa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_7 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_7', {title: 'Pengadan Barang/Jasa'});
};

/* Save Data sbu1_2_7 */
exports.save_sbu1_2_7 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 6
        };

        var query = connection.query("INSERT INTO detail4 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_7');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_7 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_7', {title: 'Pengadan Barang/Jasa'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail4 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_7',{
                title : 'Edit SBU1_2_7',
                page_title:"Edit sbu1_2_7",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_7 */
exports.save_edit_sbu1_2_7 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail4 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_7');
          
        });
    
    });
};

/* Delete sbu1_2_7 */
exports.delete_sbu1_2_7 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail4  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_7');
             
        });
        
     });
};
/*============================================================================================*/
/*====================================Pengadan Barang/Jasa====================================*/
/*Render Tabel*/
exports.sbu1_2_8 = function(req, res){
    // res.render('sbu1/sbu1_2_8', {title: 'Pengadan Barang/Jasa'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail4 WHERE kategori_id = 7", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_8', {
                title: 'Pengadan Barang/Jasa',
                page_title: "Pengadan Barang/Jasa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_8 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_8', {title: 'Pengadan Barang/Jasa'});
};

/* Save Data sbu1_2_8 */
exports.save_sbu1_2_8 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan,
            kategori_id : 7
        };

        var query = connection.query("INSERT INTO detail4 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_8');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_8 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_8', {title: 'Pengadan Barang/Jasa'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail4 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_8',{
                title : 'Edit SBU1_2_8',
                page_title:"Edit sbu1_2_8",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_8 */
exports.save_edit_sbu1_2_8 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail4 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_8');
          
        });
    
    });
};

/* Delete sbu1_2_8 */
exports.delete_sbu1_2_8 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail4  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_8');
             
        });
        
     });
};
/*============================================================================================*/
/*====================================Pengadan Barang/Jasa====================================*/
/*Render Tabel*/
exports.sbu1_2_9 = function(req, res){
    // res.render('sbu1/sbu1_2_9', {title: 'Pengadan Barang/Jasa'});
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail10 WHERE kategori_id = 9", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_9', {
                title: 'Pengadan Barang/Jasa',
                page_title: "Pengadan Barang/Jasa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_9 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_9', {title: 'Pengadan Barang/Jasa'});
};

/* Save Data sbu1_2_9 */
exports.save_sbu1_2_9 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 9
        };

        var query = connection.query("INSERT INTO detail10 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_9');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_9 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_9', {title: 'Pengadan Barang/Jasa'});
     var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail10 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_9',{
                title : 'Edit SBU1_2_9',
                page_title:"Edit sbu1_2_9",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_9 */
exports.save_edit_sbu1_2_9 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail10 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_9');
          
        });
    
    });
};

/* Delete sbu1_2_9 */
exports.delete_sbu1_2_9 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail10  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_9');
             
        });
        
     });
};
/*============================================================================================*/
/*====================================Pengadan Barang/Jasa====================================*/
/*Render Tabel*/
exports.sbu1_2_10 = function(req, res){
    // res.render('sbu1/sbu1_2_10', {title: 'Pengadan Barang/Jasa'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail10 WHERE kategori_id = 10", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_10', {
                title: 'Pengadan Barang/Jasa',
                page_title: "Pengadan Barang/Jasa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_10 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_10', {title: 'Pengadan Barang/Jasa'});
};

/* Save Data sbu1_2_10 */
exports.save_sbu1_2_10 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            keterangan : input.keterangan,
            kategori_id : 10
        };

        var query = connection.query("INSERT INTO detail10 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_10');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_10 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_10', {title: 'Pengadan Barang/Jasa'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail10 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_10',{
                title : 'Edit SBU1_2_10',
                page_title:"Edit sbu1_2_10",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_10 */
exports.save_edit_sbu1_2_10 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail10 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_10');
          
        });
    
    });
};

/* Delete sbu1_2_10 */
exports.delete_sbu1_2_10 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail10  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_10');
             
        });
        
     });
};
/*============================================================================================*/

/*======================Pemilihan Mitra Pemanfaatan Barang Milik Daerah=======================*/
/*Honorarium Panitia Pemilihan Mitra Pemanfaatan Barang Milik daerah

/*Render Tabel*/
exports.sbu1_2_11 = function(req, res){
    // res.render('sbu1/sbu1_2_11', {title: 'Pemilihan Mitra'});
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail10 WHERE kategori_id = 11", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_11', {
                title: 'Pemilihan Mitra',
                page_title: "Pemilihan Mitra", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_11 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_11', {title: 'Pemilihan Mitra'});
};

/* Save Data sbu1_2_11 */
exports.save_sbu1_2_11 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            keterangan : input.keterangan,
            kategori_id : 11
        };

        var query = connection.query("INSERT INTO detail10 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_11');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_11 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_11', {title: 'Pemilihan Mitra'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail10 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_11',{
                title : 'Edit SBU1_2_11',
                page_title:"Edit sbu1_2_11",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_11 */
exports.save_edit_sbu1_2_11 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail10 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_11');
          
        });
    
    });
};

/* Delete sbu1_2_10 */
exports.delete_sbu1_2_11 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail10  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_11');
             
        });
        
     });
};
/*============================================================================================*/

/*==================Pengadaan Tanah bagi Pembangunan untuk Kepentingan Umum===================*/
/*Biaya Operasional dan Biaya Pendukung Untuk Kegiatan pada Tahapan Pelaksanaan dan Penyerahan Hasil*/

/*Render Tabel*/
exports.sbu1_2_12 = function(req, res){
    // res.render('sbu1/sbu1_2_12', {title: 'Pengadaan Tanah'});
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail3 WHERE kategori_id = 12", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_12', {
                title: 'Pengadaan Tanah',
                page_title: "Pengadaan Tanah", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_12 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_12', {title: 'Pengadan Tanah'});
};

/* Save Data sbu1_2_12 */
exports.save_sbu1_2_12 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 12
        };

        var query = connection.query("INSERT INTO detail3 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_12');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_12 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_12', {title: 'Pengadan Tanah'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail3 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_12',{
                title : 'Edit SBU1_2_12',
                page_title:"Edit sbu1_2_12",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_12 */
exports.save_edit_sbu1_2_12 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail3 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_12');
          
        });
    
    });
};

/* Delete sbu1_2_12 */
exports.delete_sbu1_2_12 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail3  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_12');
             
        });
        
     });
};

/*============================================================================================*/
/*Honorarium Tim Persiapan Pengadaan Tanah, Tim Kajian Keberatan, Tim Pelaksana Pengadaan Tanah dan Satuan Tugas*/

/*Render Tabel*/
exports.sbu1_2_13 = function(req, res){
    // res.render('sbu1/sbu1_2_13', {title: 'Pengadaan Tanah'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM deatil1a WHERE detail1_id = 1", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_13', {
                title: 'Pengadaan Tanah',
                page_title: "Pengadaan Tanah", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_13 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_13', {title: 'Pengadan Tanah'});
};

/* Save Data sbu1_2_13 */
exports.save_sbu1_2_13 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            detail1_id : 1
        };

        var query = connection.query("INSERT INTO deatil1a set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_13');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_13 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_13', {title: 'Pengadan Tanah'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM deatil1a WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_13',{
                title : 'Edit SBU1_2_13',
                page_title:"Edit sbu1_2_13",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_13 */
exports.save_edit_sbu1_2_13 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE deatil1a set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_13');
          
        });
    
    });
};

/* Delete sbu1_2_13 */
exports.delete_sbu1_2_13 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM deatil1a  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_13');
             
        });
        
     });
};

/*============================================================================================*/

/*===========================Satuan Biaya Makanan dan Minuman Lembur==========================*/
/*Pengadaan Makanan dan Minuman Lembur*/

/*Render Tabel*/
exports.sbu1_2_13D = function(req, res){
    // res.render('sbu1/sbu1_2_13D', {title: 'Pengadaan Makanan dan Minuman Lembur'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 14", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_13D', {
                title: 'Pengadaan Makanan dan Minuman Lembur',
                page_title: "Pengadaan Makanan dan Minuman Lembur", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_13D = function(req, res){
    res.render('sbu1/tambah_sbu1_2_13D', {title: 'Pengadaan Makanan dan Minuman Lembur'});
};

/* Save Data sbu1_2_13D */
exports.save_sbu1_2_13D = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 14
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_13D');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_13D = function(req, res){
    // res.render('sbu1/edit_sbu1_2_13D', {title: 'Pengadaan Makanan dan Minuman Lembur'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_13D',{
                title : 'Edit SBU1_2_13D',
                page_title:"Edit sbu1_2_13D",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_13D */
exports.save_edit_sbu1_2_13D = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_13D');
          
        });
    
    });
};

/* Delete sbu1_2_13D */
exports.delete_sbu1_2_13D = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_13D');
             
        });
        
     });
};

/*============================================================================================*/

/*============Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa===========*/

/*Kepada PNS Non Pemprov dan Non PNS yang Melaksanakan Kegiatan*/

/*Render Tabel*/
exports.sbu1_2_14 = function(req, res){
    // res.render('sbu1/sbu1_2_14', {title: 'Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 15", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_14', {
                title: 'Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa',
                page_title: "Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_14 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_14', {title: 'Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa'});
};

/* Save Data sbu1_2_14 */
exports.save_sbu1_2_14 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 15
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_14');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_14 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_14', {title: 'Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_14',{
                title : 'Edit SBU1_2_14',
                page_title:"Edit sbu1_2_14",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_14 */
exports.save_edit_sbu1_2_14 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_14');
          
        });
    
    });
};

/* Delete sbu1_2_14 */
exports.delete_sbu1_2_14 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_14');
             
        });
        
     });
};

/*============================================================================================*/
/*/*Besaran Uang Transport*/

/*Render Tabel*/
exports.sbu1_2_15 = function(req, res){
    // res.render('sbu1/sbu1_2_15', {title: 'Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 16", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_15', {
                title: 'Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa',
                page_title: "Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_15 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_15', {title: 'Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa'});
};

/* Save Data sbu1_2_15 */
exports.save_sbu1_2_15 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 16
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_15');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_15 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_15', {title: 'Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_15',{
                title : 'Edit SBU1_2_15',
                page_title:"Edit sbu1_2_15",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_15 */
exports.save_edit_sbu1_2_15 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_15');
          
        });
    
    });
};

/* Delete sbu1_2_15 */
exports.delete_sbu1_2_15 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_15');
             
        });
        
     });
};

/*============================================================================================*/

/*==============Honorarium Kegiatan untuk PNS Non Pemprov Jawa Barat dan Non PNS==============*/
/*Honorarium*/

/*Render Tabel*/
exports.sbu1_2_16 = function(req, res){
    // res.render('sbu1/sbu1_2_16', {title: 'Honorarium Kegiatan untuk PNS Non Pemprov Jawa Barat dan Non PNS'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 17", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_16', {
                title: 'Honorarium Kegiatan untuk PNS Non Pemprov Jawa Barat dan Non PNS',
                page_title: "Honorarium Kegiatan untuk PNS Non Pemprov Jawa Barat dan Non PNS", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_16 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_16', {title: 'Honorarium Kegiatan untuk PNS Non Pemprov Jawa Barat dan Non PNS'});
};

/* Save Data sbu1_2_16 */
exports.save_sbu1_2_16 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 17
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_16');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_16 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_16', {title: 'Honorarium Kegiatan untuk PNS Non Pemprov Jawa Barat dan Non PNS'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_16',{
                title : 'Edit SBU1_2_16',
                page_title:"Edit sbu1_2_16",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_16 */
exports.save_edit_sbu1_2_16 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_16');
          
        });
    
    });
};

/* Delete sbu1_2_16 */
exports.delete_sbu1_2_16 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_16');
             
        });
        
     });
};

/*============================================================================================*/

/*=========================Honorarium Tenaga Teknis Non PNS===================================*/
/*Honoraium

/*Render Tabel*/
exports.sbu1_2_17 = function(req, res){
    // res.render('sbu1/sbu1_2_17', {title: 'Honorarium Tenaga Teknis Non PNS'});
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 18", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_17', {
                title: 'Honorarium Tenaga Teknis Non PNS',
                page_title: "Honorarium Tenaga Teknis Non PNS", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_17 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_17', {title: 'Honorarium Tenaga Teknis Non PNS'});
};

/* Save Data sbu1_2_17 */
exports.save_sbu1_2_17 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            keterangan : input.keterangan,
            kategori_id : 18
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_17');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_17 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_17', {title: 'Honorarium Tenaga Teknis Non PNS'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_17',{
                title : 'Edit SBU1_2_17',
                page_title:"Edit sbu1_2_17",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_17 */
exports.save_edit_sbu1_2_17 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_17');
          
        });
    
    });
};

/* Delete sbu1_2_17 */
exports.delete_sbu1_2_17 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_17');
             
        });
        
     });
};

/*============================================================================================*/

/*===============================Upah Harian Kegiatan Non PNS=================================*/
/*Honorarium*/

/*Render Tabel*/
exports.sbu1_2_18 = function(req, res){
    // res.render('sbu1/sbu1_2_18', {title: 'Upah Harian Kegiatan Non PNS'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 19", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_18', {
                title: 'Upah Harian Kegiatan Non PNS',
                page_title: "Upah Harian Kegiatan Non PNS", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_18 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_18', {title: 'Upah Harian Kegiatan Non PNS'});
};

/* Save Data sbu1_2_18 */
exports.save_sbu1_2_18 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 19
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_18');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_18 = function(req, res){
    // res.render('sbu1/tambah_sbu1_2_18', {title: 'Upah Harian Kegiatan Non PNS'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_18',{
                title : 'Edit SBU1_2_18',
                page_title:"Edit sbu1_2_18",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_18 */
exports.save_edit_sbu1_2_18 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_18');
          
        });
    
    });
};

/* Delete sbu1_2_18 */
exports.delete_sbu1_2_18 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_18');
             
        });
        
     });
};

/*============================================================================================*/

/*==========================Honorarium Harian/Kegiatan/Pertemuan Non PNS======================*/
/*Honorarium*/

/*Render Tabel*/
exports.sbu1_2_19 = function(req, res){
    // res.render('sbu1/sbu1_2_19', {title: 'Honorarium Harian/Kegiatan/Pertemuan Non PNS'});
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 20", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_19', {
                title: 'Honorarium Harian/Kegiatan/Pertemuan Non PNS',
                page_title: "Honorarium Harian/Kegiatan/Pertemuan Non PNS", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_19 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_19', {title: 'Honorarium Harian/Kegiatan/Pertemuan Non PNS'});
};

/* Save Data sbu1_2_19 */
exports.save_sbu1_2_19 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 20
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_19');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_19 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_19', {title: 'Honorarium Harian/Kegiatan/Pertemuan Non PNS'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_19',{
                title : 'Edit SBU1_2_19',
                page_title:"Edit sbu1_2_19",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_19 */
exports.save_edit_sbu1_2_19 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_19');
        
        });
    
    });
};

/* Delete sbu1_2_19 */
exports.delete_sbu1_2_19 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_19');
             
        });
        
     });
};

/*============================================================================================*/

/*===========Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office===========*/
/*Dilakukan Melalui Kontrak Perorangan*/
/*Tenaga Satpam/Pengemudi/Front Office*/

/*Render Tabel*/
exports.sbu1_2_20 = function(req, res){
    // res.render('sbu1/sbu1_2_20', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 21", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_20', {
                title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office',
                page_title: "Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_20 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_20', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
};

/* Save Data sbu1_2_20 */
exports.save_sbu1_2_20 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 21
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_20');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_20 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_20', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_20',{
                title : 'Edit SBU1_2_20',
                page_title:"Edit sbu1_2_20",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_20 */
exports.save_edit_sbu1_2_20 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_20');
        
        });
    
    });
};

/* Delete sbu1_2_20 */
exports.delete_sbu1_2_20 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_20');
             
        });
        
     });
};

/*============================================================================================*/
/*Dilakukan Melalui Kontrak Perorangan*/
/*Tenaga Kebersihan dan Pramubakti*/

/*Render Tabel*/
exports.sbu1_2_21 = function(req, res){
    // res.render('sbu1/sbu1_2_21', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 22", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_21', {
                title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office',
                page_title: "Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_21 = function(req, res){
    res.render('sbu1/edit_sbu1_2_21', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
};

/* Save Data sbu1_2_21 */
exports.save_sbu1_2_21 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 22
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_21');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_21 = function(req, res){
    // res.render('sbu1/tambah_sbu1_2_21', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_21',{
                title : 'Edit SBU1_2_21',
                page_title:"Edit sbu1_2_21",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_21 */
exports.save_edit_sbu1_2_21 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_21');
        
        });
    
    });
};

/* Delete sbu1_2_21 */
exports.delete_sbu1_2_21 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_21');
             
        });
        
     });
};

/*============================================================================================*/
/*Dilakukan Melalui Kontrak Pihak Ketiga*/
/*Tenaga Satpam/Pengemudi/Front Office*/

/*Render Tabel*/
exports.sbu1_2_22 = function(req, res){
    // res.render('sbu1/sbu1_2_22', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 24", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_22', {
                title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office',
                page_title: "Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_22 = function(req, res){
    res.render('sbu1/tambah__sbu1_2_22', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
};

/* Save Data sbu1_2_22 */
exports.save_sbu1_2_22 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 24
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_22');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_22 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_22', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_22',{
                title : 'Edit SBU1_2_22',
                page_title:"Edit sbu1_2_22",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_22 */
exports.save_edit_sbu1_2_22 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_22');
        
        });
    
    });
};

/* Delete sbu1_2_22 */
exports.delete_sbu1_2_22 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_22');
             
        });
        
     });
};

/*============================================================================================*/
/*Dilakukan Melalui Kontrak Pihak Ketiga*/
/*Tenaga Kebersihan dan Pramubakti*/

/*Render Tabel*/
exports.sbu1_2_23 = function(req, res){
    // res.render('sbu1/sbu1_2_23', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 25", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_23', {
                title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office',
                page_title: "Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_23 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_23', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
};

/* Save Data sbu1_2_23 */
exports.save_sbu1_2_23 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 25
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_23');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_23 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_23', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_23',{
                title : 'Edit SBU1_2_23',
                page_title:"Edit sbu1_2_23",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_23 */
exports.save_edit_sbu1_2_23 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_23');
        
        });
    
    });
};

/* Delete sbu1_2_23 */
exports.delete_sbu1_2_23 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_23');
             
        });
        
     });
};

/*============================================================================================*/

/*==============Honorarium Jasa Pengawalan Gubernur/Wakil Gubernur/Ketua DPRD=================*/
/*Honorarium*/

/*Render Tabel*/
exports.sbu1_2_24 = function(req, res){
    // res.render('sbu1/sbu1_2_24', {title: 'Honorarium Jasa Pengawalan Gubernur/Wakil Gubernur/Ketua DPRD'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 23", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_23', {
                title: 'Honorarium Jasa Pengawalan Gubernur/Wakil Gubernur/Ketua DPRD',
                page_title: "Honorarium Jasa Pengawalan Gubernur/Wakil Gubernur/Ketua DPRD", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_24 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_24', {title: 'Honorarium Jasa Pengawalan Gubernur/Wakil Gubernur/Ketua DPRD'});
};

/* Save Data sbu1_2_24 */
exports.save_sbu1_2_24 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 23
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_24');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_24 = function(req, res){
    // res.render('sbu1/edit_sbu1_2_24', {title: 'Honorarium Jasa Pengawalan Gubernur/Wakil Gubernur/Ketua DPRD'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_24',{
                title : 'Edit SBU1_2_24',
                page_title:"Edit sbu1_2_24",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_24 */
exports.save_edit_sbu1_2_24 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_24');
        
        });
    
    });
};

/* Delete sbu1_2_24 */
exports.delete_sbu1_2_24 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_24');
             
        });
        
     });
};

/*============================================================================================*/

/*================Satuan Biaya Uang Saku Rapat dan Bantuan Biaya Transportasi=================*/
/*Besaran Uang Saku*/

/*Render Tabel*/
exports.sbu1_2_25 = function(req, res){
    // res.render('sbu1/sbu1_2_25', {title: 'Satuan Biaya Uang Saku Rapat dan Bantuan Biaya Transportasi'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 26", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_25', {
                title: 'Satuan Biaya Uang Saku Rapat dan Bantuan Biaya Transportasi',
                page_title: "Satuan Biaya Uang Saku Rapat dan Bantuan Biaya Transportasi", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_25 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_25', {title: 'Satuan Biaya Uang Saku Rapat dan Bantuan Biaya Transportasi'});
};

/* Save Data sbu1_2_25 */
exports.save_sbu1_2_25 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 26
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_25');
        });
    });

};


/* Edit Data */
exports.edit_sbu1_2_25 = function(req, res){

    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_25',{
                title : 'Edit SBU1_2_25',
                page_title:"Edit sbu1_2_25",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_25 */
exports.save_edit_sbu1_2_25 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_25');
        
        });
    
    });
};

/* Delete sbu1_2_25 */
exports.delete_sbu1_2_25 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_25');
             
        });
        
     });
};

/*============================================================================================*/
/*Besaran Uang Saku*/

/*Render Tabel*/
exports.sbu1_2_25b = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 27", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_25b', {
                title: 'Satuan Biaya Uang Saku Rapat dan Bantuan Biaya Transportasi',
                page_title: "Satuan Biaya Uang Saku Rapat dan Bantuan Biaya Transportasi", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_25b = function(req, res){
    res.render('sbu1/tambah_sbu1_2_25b', {title: 'Satuan Biaya Uang Saku Rapat dan Bantuan Biaya Transportasi'});
};

/* Save Data sbu1_2_25b */
exports.save_sbu1_2_25b = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 27
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_25b');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_25b = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_25b',{
                title : 'Edit SBU1_2_25b',
                page_title:"Edit sbu1_2_25b",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_25b */
exports.save_edit_sbu1_2_25b = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_25b');
        
        });
    
    });
};

/* Delete sbu1_2_25b */
exports.delete_sbu1_2_25b = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_25b');
             
        });
        
     });
};

/*============================================================================================*/
/*Penggantian Uang Transport*/

/*Render Tabel*/
exports.sbu1_2_26 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 28", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_26', {
                title: 'Satuan Biaya Konsumsi Rapat',
                page_title: "Satuan Biaya Konsumsi Rapat", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_26 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_26', {title: 'Satuan Biaya Uang Saku Rapat dan Bantuan Biaya Transportasi'});
};

/* Save Data sbu1_2_26 */
exports.save_sbu1_2_26 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 28
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_26');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_26 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_26',{
                title : 'Edit SBU1_2_26',
                page_title:"Edit sbu1_2_26",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_26 */
exports.save_edit_sbu1_2_26 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_26');
        
        });
    
    });
};

/* Delete sbu1_2_26 */
exports.delete_sbu1_2_26 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_26');
             
        });
        
     });
};

/*============================================================================================*/

/*==========================Satuan Biaya Pertemuan di Luar Kantor=============================*/
/*Satuan Biaya*/

/*Render Tabel*/
exports.sbu1_2_27 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail10 WHERE kategori_id = 29", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_27', {
                title: 'Satuan Biaya Pertemuan di Luar Kantor',
                page_title: "Satuan Biaya Pertemuan di Luar Kantor", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_27 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_27', {title: 'Satuan Biaya Pertemuan di Luar Kantor'});
};

/* Save Data sbu1_2_27 */
exports.save_sbu1_2_27 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            keterangan : input.keterangan,
            kategori_id : 29
        };

        var query = connection.query("INSERT INTO detail10 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_27');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_27 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail10 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_27',{
                title : 'Edit SBU1_2_27',
                page_title:"Edit sbu1_2_27",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_27 */
exports.save_edit_sbu1_2_27 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
           nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail10 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_27');
        
        });
    
    });
};

/* Delete sbu1_2_27 */
exports.delete_sbu1_2_27 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail10  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_27');
             
        });
        
     });
};

/*============================================================================================*/

/*================================Satuan Biaya Sewa Kendaraan=================================*/
/*Kendaraan Pelaksanaan Kegiatan Insidentil*/

/*Render Tabel*/
exports.sbu1_2_28 = function(req, res){
    // res.render('sbu1/sbu1_2_28', {title: 'Satuan Biaya Sewa Kendaraan'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 30", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_28', {
                title: 'Satuan Biaya Sewa Kendaraan',
                page_title: "Satuan Biaya Sewa Kendaraan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_28 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_28', {title: 'Satuan Biaya Sewa Kendaraan'});
};


/* Save Data sbu1_2_28 */
exports.save_sbu1_2_28 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 30
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_28');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_28 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_28',{
                title : 'Edit SBU1_2_28',
                page_title:"Edit sbu1_2_28",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_28 */
exports.save_edit_sbu1_2_28 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_28');
        
        });
    
    });
};

/* Delete sbu1_2_28 */
exports.delete_sbu1_2_28 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_28');
             
        });
        
     });
};

/*============================================================================================*/

/*========Satuan Biaya Bahan Bakar, Pelumasan, dan Biaya Pembayaran Pajak Kendaraan===========*/
/*Satuan Volume Bahan Bakar Kendaraan Operasional yang aktif*/

/*Render Tabel*/
exports.sbu1_2_29 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail15 WHERE kategori_id = 31", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_29', {
                title: 'Satuan Biaya Bahan Bakar, Pelumasan, dan Biaya Pembayaran Pajak Kendaraan',
                page_title: "Satuan Biaya Bahan Bakar, Pelumasan, dan Biaya Pembayaran Pajak Kendaraan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_29 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_29', {title: 'Satuan Biaya Bahan Bakar, Pelumasan, dan Biaya Pembayaran Pajak Kendaraan'});
};

/* Save Data sbu1_2_29 */
exports.save_sbu1_2_29 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama : input.nama,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 31
        };

        var query = connection.query("INSERT INTO detail15 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_29');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_29 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail15 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_29',{
                title : 'Edit SBU1_2_29',
                page_title:"Edit sbu1_2_29",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_29 */
exports.save_edit_sbu1_2_29 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama : input.nama,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail15 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_29');
        
        });
    
    });
};

/* Delete sbu1_2_29 */
exports.delete_sbu1_2_29 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail15  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_29');
             
        });
        
     });
};

/*============================================================================================*/
/*Satuan Biaya Pelumasan Kendaraan Dinas*/

/*Render Tabel*/
exports.sbu1_2_30 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail15 WHERE kategori_id = 32", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_30', {
                title: 'Satuan Biaya Bahan Bakar, Pelumasan, dan Biaya Pembayaran Pajak Kendaraan',
                page_title: "Satuan Biaya Bahan Bakar, Pelumasan, dan Biaya Pembayaran Pajak Kendaraan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_30 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_30', {title: 'Satuan Biaya Bahan Bakar, Pelumasan, dan Biaya Pembayaran Pajak Kendaraan'});
};

/* Save Data sbu1_2_30 */
exports.save_sbu1_2_30 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama : input.nama,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 32
        };

        var query = connection.query("INSERT INTO detail15 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_30');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_30 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail15 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_30',{
                title : 'Edit SBU1_2_30',
                page_title:"Edit sbu1_2_30",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_30 */
exports.save_edit_sbu1_2_30 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama : input.nama,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail15 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_30');
        
        });
    
    });
};

/* Delete sbu1_2_30 */
exports.delete_sbu1_2_30 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail15  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_30');
             
        });
        
     });
};

/*============================================================================================*/
/*Satuan Biaya Pembayaran Pajak Kendaraan Dinas*/

/*Render Tabel*/
exports.sbu1_2_30c = function(req, res){
    res.render('sbu1/sbu1_2_30c', {title: 'Satuan Biaya Bahan Bakar, Pelumasan, dan Biaya Pembayaran Pajak Kendaraan'});
};

/* Tambah Data */
exports.tambah_sbu1_2_30c = function(req, res){
    res.render('sbu1/tambah_sbu1_2_30c', {title: 'Satuan Biaya Bahan Bakar, Pelumasan, dan Biaya Pembayaran Pajak Kendaraan'});
};

/* Edit Data */
exports.edit_sbu1_2_30c = function(req, res){
    res.render('sbu1/edit_sbu1_2_30c', {title: 'Satuan Biaya Bahan Bakar, Pelumasan, dan Biaya Pembayaran Pajak Kendaraan'});
};
/*============================================================================================*/

/*==========Satuan Biaya Pengamanan dan Ruang Tunggu dalam Rangka Kegiatan Pimpinan===========*/
/*Satuan Biaya*/

/*Render Tabel*/
exports.sbu1_2_31 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 33", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_31', {
                title: 'Satuan Biaya Pengamanan dan Ruang Tunggu dalam Rangka Kegiatan Pimpinan',
                page_title: "Satuan Biaya Pengamanan dan Ruang Tunggu dalam Rangka Kegiatan Pimpinan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_31 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_31', {title: 'Satuan Biaya Pengamanan dan Ruang Tunggu dalam Rangka Kegiatan Pimpinan'});
};

/* Save Data sbu1_2_31 */
exports.save_sbu1_2_31 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 33
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_31');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_31 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_31',{
                title : 'Edit SBU1_2_31',
                page_title:"Edit sbu1_2_31",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_31 */
exports.save_edit_sbu1_2_31 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
             nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_31');
        
        });
    
    });
};

/* Delete sbu1_2_31 */
exports.delete_sbu1_2_31 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_31');
             
        });
        
     });
};

/*============================================================================================*/

/*=======================================Perjalanan Dinas=====================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_32 = function(req, res){
    // res.render('sbu1/sbu1_2_32', {title: 'Perjalanan Dinas'});
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 34", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_32', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_32 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_32', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_32 */
exports.save_sbu1_2_32 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 34
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_32');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_32 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_32',{
                title : 'Edit SBU1_2_32',
                page_title:"Edit sbu1_2_32",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_32 */
exports.save_edit_sbu1_2_32 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_32');
        
        });
    
    });
};

/* Delete sbu1_2_32 */
exports.delete_sbu1_2_32 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_32');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_33 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 35", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_33', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_33 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_33', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_33 */
exports.save_sbu1_2_33 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 35
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_33');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_33 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_33',{
                title : 'Edit SBU1_2_33',
                page_title:"Edit sbu1_2_33",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_33 */
exports.save_edit_sbu1_2_33 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_33');
        
        });
    
    });
};

/* Delete sbu1_2_33 */
exports.delete_sbu1_2_33 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_33');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_34 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 36", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_34', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_34 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_34', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_34 */
exports.save_sbu1_2_34 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 36
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_34');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_34 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_34',{
                title : 'Edit SBU1_2_34',
                page_title:"Edit sbu1_2_34",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_34 */
exports.save_edit_sbu1_2_34 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_34');
        
        });
    
    });
};

/* Delete sbu1_2_34 */
exports.delete_sbu1_2_34 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_34');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_35 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 37", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_35', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_35 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_35', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_35 */
exports.save_sbu1_2_35 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 37
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_35');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_35 = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_35',{
                title : 'Edit SBU1_2_35',
                page_title:"Edit sbu1_2_35",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_35 */
exports.save_edit_sbu1_2_35 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_35');
        
        });
    
    });
};

/* Delete sbu1_2_35 */
exports.delete_sbu1_2_35 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_35');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_36 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 38", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_36', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_36 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_36', {title: 'Perjalanan Dinas'});
};


/* Save Data sbu1_2_36 */
exports.save_sbu1_2_36 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 38
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_36');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_36 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_36',{
                title : 'Edit SBU1_2_36',
                page_title:"Edit sbu1_2_36",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_36 */
exports.save_edit_sbu1_2_36 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_36');
        
        });
    
    });
};

/* Delete sbu1_2_36 */
exports.delete_sbu1_2_36 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_36');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_37 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 39", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_37', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_37 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_37', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_37 */
exports.save_sbu1_2_37 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 39
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_37');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_37 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_37',{
                title : 'Edit SBU1_2_37',
                page_title:"Edit sbu1_2_37",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_37 */
exports.save_edit_sbu1_2_37 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_37');
        
        });
    
    });
};

/* Delete sbu1_2_37 */
exports.delete_sbu1_2_37 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_37');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_38 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 40", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_38', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_38 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_38', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_38 */
exports.save_sbu1_2_38 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 40
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_38');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_38 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_38',{
                title : 'Edit SBU1_2_38',
                page_title:"Edit sbu1_2_38",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_38 */
exports.save_edit_sbu1_2_38 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_38');
        
        });
    
    });
};

/* Delete sbu1_2_38 */
exports.delete_sbu1_2_38 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_38');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_39 = function(req, res){
    // res.render('sbu1/sbu1_2_39', {title: 'Perjalanan Dinas'});
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail4 WHERE kategori_id = 41", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_39', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_39 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_39', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_39 */
exports.save_sbu1_2_39 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan,
            kategori_id : 41
        };

        var query = connection.query("INSERT INTO detail4 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_39');
        });
    });

};


/* Edit Data */
exports.edit_sbu1_2_39 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail4 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_39',{
                title : 'Edit SBU1_2_39',
                page_title:"Edit sbu1_2_39",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_39 */
exports.save_edit_sbu1_2_39 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail4 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_39');
        
        });
    
    });
};

/* Delete sbu1_2_38 */
exports.delete_sbu1_2_39 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail4  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_39');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_39 = function(req, res){
    // res.render('sbu1/sbu1_2_39', {title: 'Perjalanan Dinas'});
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail4 WHERE kategori_id = 41", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_39', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_40 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail3 WHERE kategori_id = 42", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_40', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_40 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_40', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_40 */
exports.save_sbu1_2_40 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 42
        };

        var query = connection.query("INSERT INTO detail3 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_40');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_40 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail3 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_40',{
                title : 'Edit SBU1_2_40',
                page_title:"Edit sbu1_2_40",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_40 */
exports.save_edit_sbu1_2_40 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail3 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_40');
        
        });
    
    });
};

/* Delete sbu1_2_40 */
exports.delete_sbu1_2_40 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail3  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_40');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_41 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail4 WHERE kategori_id = 43", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_41', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_41 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_41', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_41 */
exports.save_sbu1_2_41 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan,
            kategori_id : 43
        };

        var query = connection.query("INSERT INTO detail4 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_41');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_41 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail4 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_41',{
                title : 'Edit SBU1_2_41',
                page_title:"Edit sbu1_2_41",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_41 */
exports.save_edit_sbu1_2_41 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail4 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_41');
        
        });
    
    });
};

/* Delete sbu1_2_41 */
exports.delete_sbu1_2_41 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail4  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_41');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_42 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail11 WHERE kategori_id = 44", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_42', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_42 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_42', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_42 */
exports.save_sbu1_2_42 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 44
        };

        var query = connection.query("INSERT INTO detail11 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_42');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_42 = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail11 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_42',{
                title : 'Edit SBU1_2_42',
                page_title:"Edit sbu1_2_42",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_42 */
exports.save_edit_sbu1_2_42 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail11 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_42');
        
        });
    
    });
};

/* Delete sbu1_2_42 */
exports.delete_sbu1_2_42 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail11  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_42');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_43 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail11 WHERE kategori_id = 45", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_43', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_43 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_43', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_43 */
exports.save_sbu1_2_43 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 45
        };

        var query = connection.query("INSERT INTO detail11 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_43');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_43 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail11 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_43',{
                title : 'Edit SBU1_2_43',
                page_title:"Edit sbu1_2_43",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_43 */
exports.save_edit_sbu1_2_43 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail11 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_43');
        
        });
    
    });
};

/* Delete sbu1_2_43 */
exports.delete_sbu1_2_43 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail11  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_43');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_44 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 46", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_44', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_44 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_44', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_44 */
exports.save_sbu1_2_44 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 46
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_44');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_44 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail11 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_43',{
                title : 'Edit SBU1_2_43',
                page_title:"Edit sbu1_2_43",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_44 */
exports.save_edit_sbu1_2_44 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_44');
        
        });
    
    });
};

/* Delete sbu1_2_44 */
exports.delete_sbu1_2_44 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_44');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Dalam Negeri*/

/*Render Tabel*/
exports.sbu1_2_45 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 47", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_45', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_45 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_45', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_45 */
exports.save_sbu1_2_45 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 47
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_45');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_45 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_45',{
                title : 'Edit SBU1_2_45',
                page_title:"Edit sbu1_2_45",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_45 */
exports.save_edit_sbu1_2_45 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_45');
        
        });
    
    });
};

/* Delete sbu1_2_45 */
exports.delete_sbu1_2_45 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_45');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Luar Negeri*/

/*Render Tabel*/
exports.sbu1_2_46 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail4 WHERE kategori_id = 48", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_46', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_46 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_46', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_46 */
exports.save_sbu1_2_46 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan,
            kategori_id : 48
        };

        var query = connection.query("INSERT INTO detail4 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_46');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_46 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail4 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_46',{
                title : 'Edit SBU1_2_46',
                page_title:"Edit sbu1_2_46",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_46 */
exports.save_edit_sbu1_2_46 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail4 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_46');
        
        });
    
    });
};

/* Delete sbu1_2_46 */
exports.delete_sbu1_2_46 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail4  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_46');
             
        });
        
     });
};

/*============================================================================================*/
/*Pengelompokan Fasilitas Berdasar Golongan*/

/*Render Tabel*/
exports.sbu1_2_47 = function(req, res){
   req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 49", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_47', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_47 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_47', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_47 */
exports.save_sbu1_2_47 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            keterangan : input.keterangan,
            kategori_id : 49
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_47');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_47 = function(req, res){
     var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_47',{
                title : 'Edit SBU1_2_47',
                page_title:"Edit sbu1_2_47",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_47 */
exports.save_edit_sbu1_2_47 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_47');
        
        });
    
    });
};

/* Delete sbu1_2_47 */
exports.delete_sbu1_2_47 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_47');
             
        });
        
     });
};

/*============================================================================================*/
/*Klasifikasi Fasilitas Transport*/

/*Render Tabel*/
exports.sbu1_2_48 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail6 WHERE kategori_id = 50", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_48', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_48 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_48', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_48 */
exports.save_sbu1_2_48 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nama4 : input.nama4,
            nama5 : input.nama5,
            keterangan : input.keterangan,
            kategori_id : 50
        };

        var query = connection.query("INSERT INTO detail6 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_48');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_48 = function(req, res){
     var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail6 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_48',{
                title : 'Edit SBU1_2_48',
                page_title:"Edit sbu1_2_48",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_48 */
exports.save_edit_sbu1_2_48 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nama4 : input.nama4,
            nama5 : input.nama5,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail6 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_48');
        
        });
    
    });
};

/* Delete sbu1_2_48 */
exports.delete_sbu1_2_48 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail6  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_48');
             
        });
        
     });
};

/*============================================================================================*/
/*Perjalanan Dinas Pindah*/

/*Render Tabel*/
exports.sbu1_2_49 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail3 WHERE kategori_id = 51", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_49', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_49 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_49', {title: 'Perjalanan Dinas'});
};

/* Save Data sbu1_2_49 */
exports.save_sbu1_2_49 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 51
        };

        var query = connection.query("INSERT INTO detail3 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_49');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_49 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail3 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_49',{
                title : 'Edit SBU1_2_49',
                page_title:"Edit sbu1_2_49",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_49 */
exports.save_edit_sbu1_2_49 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail3 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_49');
        
        });
    
    });
};

/* Delete sbu1_2_49 */
exports.delete_sbu1_2_49 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail3  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_49');
             
        });
        
     });
};

/*============================================================================================*/

/*===============================Biaya Penginapan Perjalanan Dinas============================*/
/*Satuan Biaya Penginapan Perjalanan Dinas Dalam Daerah*/

/*Render Tabel*/
exports.sbu1_2_50 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail5 WHERE kategori_id = 52", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_50', {
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_50 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_50', {title: 'Biaya Penginapan Perjalanan Dinas'});
};

/* Save Data sbu1_2_50 */
exports.save_sbu1_2_50 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            nilai5 : input.nilai5,
            keterangan : input.keterangan,
            kategori_id : 52
        };

        var query = connection.query("INSERT INTO detail5 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_50');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_50 = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail5 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_50',{
                title : 'Edit SBU1_2_50',
                page_title:"Edit sbu1_2_50",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_50 */
exports.save_edit_sbu1_2_50 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            nilai5 : input.nilai5,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail5 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_50');
        
        });
    
    });
};

/* Delete sbu1_2_50 */
exports.delete_sbu1_2_50 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail5  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_50');
             
        });
        
     });
};

/*============================================================================================*/
/*Satuan Biaya Penginapan Perjalanan Dinas Luar Provinsi*/

/*Render Tabel*/
exports.sbu1_2_51 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail5 WHERE kategori_id = 53", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_51', {
                title: 'Biaya Penginapan Perjalanan Dinas',
                page_title: "Biaya Penginapan Perjalanan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_51 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_51', {title: 'Biaya Penginapan Perjalanan Dinas'});
};

/* Save Data sbu1_2_51 */
exports.save_sbu1_2_51 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            nilai5 : input.nilai5,
            keterangan : input.keterangan,
            kategori_id : 53
        };

        var query = connection.query("INSERT INTO detail5 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_51');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_51 = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail5 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_51',{
                title : 'Edit SBU1_2_51',
                page_title:"Edit sbu1_2_51",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_51 */
exports.save_edit_sbu1_2_51 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            nilai5 : input.nilai5,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail5 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_51');
        
        });
    
    });
};

/* Delete sbu1_2_51 */
exports.delete_sbu1_2_51 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail5  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_51');
             
        });
        
     });
};

/*============================================================================================*/

/*======================================Akomodasi=============================================*/
/*Fasilitas akomodasi Tamu Negara, Pejabat Negara dan Tamu Pemerintah*/

/*Render Tabel*/
exports.sbu1_2_52 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 54", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_52', {
                title: 'Akomodasi',
                page_title: "Akomodasi", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_52 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_52', {title: 'Akomodasi'});
};

/* Save Data sbu1_2_52 */
exports.save_sbu1_2_52 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 54
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_52');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_52 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_52',{
                title : 'Edit SBU1_2_52',
                page_title:"Edit sbu1_2_52",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_52 */
exports.save_edit_sbu1_2_52 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_52');
        
        });
    
    });
};

/* Delete sbu1_2_52 */
exports.delete_sbu1_2_52 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_52');
             
        });
        
     });
};

/*============================================================================================*/

/*===============================Perjalanan Dinas Non PNS=====================================*/
/*Uang Harian dan Akomodasi Perjalanan Dinas Dalam Provinsi dan Luar Provinsi Non PNS*/

/*Render Tabel*/
exports.sbu1_2_53 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail6 WHERE kategori_id = 55", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_53', {
                title: 'Perjalanan Dinas Non PNS',
                page_title: "Perjalanan Dinas Non PNS", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_53 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_53', {title: 'Perjalanan Dinas Non PNS'});
};

/* Save Data sbu1_2_53 */
exports.save_sbu1_2_53 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nama4 : input.nama4,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 55
        };

        var query = connection.query("INSERT INTO detail6 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_53');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_53 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail6 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_53',{
                title : 'Edit SBU1_2_53',
                page_title:"Edit sbu1_2_53",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_53 */
exports.save_edit_sbu1_2_53 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nama4 : input.nama4,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail6 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_53');
        
        });
    
    });
};

/* Delete sbu1_2_53 */
exports.delete_sbu1_2_53 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail6  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_53');
             
        });
        
     });
};

/*============================================================================================*/

/*===============================Penyetaraan TNI dan POLRI=====================================*/

/*Render Tabel*/
exports.sbu1_2_54 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail6 WHERE kategori_id = 56", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_54', {
                title: 'Penyetaraan TNI dan POLRI',
                page_title: "Penyetaraan TNI dan POLRI", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_54 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_54', {title: 'Penyetaraan TNI dan POLRI'});
};

/* Save Data sbu1_2_54 */
exports.save_sbu1_2_54 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nama4 : input.nama4,
            keterangan : input.keterangan,
            kategori_id : 56
        };

        var query = connection.query("INSERT INTO detail6 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_54');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_54 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail6 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_54',{
                title : 'Edit SBU1_2_54',
                page_title:"Edit sbu1_2_54",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_54 */
exports.save_edit_sbu1_2_54 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nama4 : input.nama4,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail6 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_54');
        
        });
    
    });
};

/* Delete sbu1_2_54 */
exports.delete_sbu1_2_54 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail6  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_54');
             
        });
        
     });
};

/*============================================================================================*/

/*======================================Biaya Pakaian=========================================*/
/*Satuan Biaya Pakaian*/

/*Render Tabel*/
exports.sbu1_2_55 = function(req, res){
   req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 57", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_55', {
                title: 'Biaya Pakaian',
                page_title: "Biaya Pakaian", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_55 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_55', {title: 'Biaya Pakaian'});
};

/* Save Data sbu1_2_55 */
exports.save_sbu1_2_55 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 57
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_55');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_55 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_55',{
                title : 'Edit SBU1_2_55',
                page_title:"Edit sbu1_2_55",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_55 */
exports.save_edit_sbu1_2_55 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_55');
        
        });
    
    });
};

/* Delete sbu1_2_55 */
exports.delete_sbu1_2_55 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_55');
             
        });
        
     });
};

/*============================================================================================*/

/*============================Biaya Makanan Penambah Daya Tahan tubuh=========================*/
/*Satuan Biaya Makanan Penambah Daya Tahan Tubuh*/

/*Render Tabel*/
exports.sbu1_2_58 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 58", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_58', {
                title: 'Biaya Makanan Penambah Daya Tahan tubuh',
                page_title: "Biaya Makanan Penambah Daya Tahan tubuh", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_58 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_58', {title: 'Biaya Makanan Penambah Daya Tahan tubuh'});
};

/* Save Data sbu1_2_58 */
exports.save_sbu1_2_58 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 58
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_58');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_58 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_58',{
                title : 'Edit SBU1_2_58',
                page_title:"Edit sbu1_2_58",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_58 */
exports.save_edit_sbu1_2_58 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_58');
        
        });
    
    });
};

/* Delete sbu1_2_58 */
exports.delete_sbu1_2_58 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_58');
             
        });
        
     });
};

/*============================================================================================*/
/*==========================Satuan Biaya Pemeliharaan ISO 9001-2000===========================*/

/*Render Tabel*/
exports.sbu1_2_59 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 59", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_59', {
                title: 'Satuan Biaya Pemeliharaan ISO 9001-2000',
                page_title: "Satuan Biaya Pemeliharaan ISO 9001-2000", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_59 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_59', {title: 'Satuan Biaya Pemeliharaan ISO 9001-2000'});
};

/* Save Data sbu1_2_59 */
exports.save_sbu1_2_59 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 59
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_59');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_59 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_59',{
                title : 'Edit SBU1_2_59',
                page_title:"Edit sbu1_2_59",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_59 */
exports.save_edit_sbu1_2_59 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_59');
        
        });
    
    });
};

/* Delete sbu1_2_59 */
exports.delete_sbu1_2_59 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_59');
             
        });
        
     });
};

/*============================================================================================*/
/*=============================Pekerjaan Konsultasi Non Sertifikat===========================*/

/*Render Tabel*/
exports.sbu1_2_60 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail11 WHERE kategori_id = 60", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu1/sbu1_2_60', {
                title: 'Pekerjaan Konsultasi Non Sertifikat',
                page_title: "Pekerjaan Konsultasi Non Sertifikat", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu1_2_60 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_60', {title: 'Pekerjaan Konsultasi Non Sertifikat'});
};

/* Save Data sbu1_2_60 */
exports.save_sbu1_2_60 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 60
        };

        var query = connection.query("INSERT INTO detail11 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu1_2_60');
        });
    });

};

/* Edit Data */
exports.edit_sbu1_2_60 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu1/edit_sbu1_2_59',{
                title : 'Edit SBU1_2_59',
                page_title:"Edit sbu1_2_59",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu1_2_60 */
exports.save_edit_sbu1_2_60 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan
        
        };
        
        connection.query("UPDATE detail11 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sbu1_2_60');
        
        });
    
    });
};

/* Delete sbu1_2_60 */
exports.delete_sbu1_2_60 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail11  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu1_2_60');
             
        });
        
     });
};

/*============================================================================================*/

/*==========================================SBU ESTIMASI======================================*/
/*==============================Satuan Sewa Gedung/Lapang Olahraga===========================*/

/*Render Tabel*/
exports.sbu2_3_1 = function(req, res){
    res.render('sbu2/sbu2_3_1', {title: 'Satuan Sewa Gedung/Lapang Olahraga'});
};

/* Tambah Data */
exports.tambah_sbu2_3_1 = function(req, res){
    res.render('sbu2/tambah_sbu2_3_1', {title: 'Satuan Sewa Gedung/Lapang Olahraga'});
};

/* Edit Data */
exports.edit_sbu2_3_1 = function(req, res){
    res.render('sbu2/edit_sbu2_3_1', {title: 'Satuan Sewa Gedung/Lapang Olahraga'});
};
/*============================================================================================*/
/*===================Satuan Biaya Taksi Perjalanan Dinas Jabatan Luar Provinsi================*/

/*Render Tabel*/
exports.sbu2_3_2 = function(req, res){
    res.render('sbu2/sbu2_3_2', {title: 'Satuan Biaya Taksi Perjalanan Dinas Jabatan Luar Provinsi'});
};

/* Tambah Data */
exports.tambah_sbu2_3_2 = function(req, res){
    res.render('sbu2/tambah_sbu2_3_2', {title: 'Satuan Biaya Taksi Perjalanan Dinas Jabatan Luar Provinsi'});
};

/* Edit Data */
exports.edit_sbu2_3_2 = function(req, res){
    res.render('sbu2/edit_sbu2_3_2', {title: 'Satuan Biaya Taksi Perjalanan Dinas Jabatan Luar Provinsi'});
};
/*============================================================================================*/
/*==============Satuan Biaya Tiket Pesawat Perjalanan Dinas Luar Provinsi (PP)================*/

/*Render Tabel*/
exports.sbu2_3_3 = function(req, res){
    res.render('sbu2/sbu2_3_3', {title: 'Satuan Biaya Tiket Pesawat Perjalanan Dinas Luar Provinsi (PP)'});
};

/* Tambah Data */
exports.tambah_sbu2_3_3 = function(req, res){
    res.render('sbu2/tambah_sbu2_3_3', {title: 'Satuan Biaya Tiket Pesawat Perjalanan Dinas Luar Provinsi (PP)'});
};

/* Edit Data */
exports.edit_sbu2_3_3 = function(req, res){
    res.render('sbu2/edit_sbu2_3_3', {title: 'Satuan Biaya Tiket Pesawat Perjalanan Dinas Luar Provinsi (PP)'});
};
/*============================================================================================*/
/*====================Satuan Biaya Tiket Perjalanan Dinas Luar Negeri (PP)====================*/

/*Render Tabel*/
exports.sbu2_3_4 = function(req, res){
    res.render('sbu2/sbu2_3_4', {title: 'Satuan Biaya Tiket Perjalanan Dinas Luar Negeri (PP)'});
};

/* Tambah Data */
exports.tambah_sbu2_3_4 = function(req, res){
    res.render('sbu2/tambah_sbu2_3_4', {title: 'Satuan Biaya Tiket Perjalanan Dinas Luar Negeri (PP)'});
};

/* Edit Data */
exports.edit_sbu2_3_4 = function(req, res){
    res.render('sbu2/edit_sbu2_3_4', {title: 'Satuan Biaya Tiket Perjalanan Dinas Luar Negeri (PP)'});
};
/*============================================================================================*/
/*===============================Biaya Perawatan Kendaraan Dinas==============================*/

/*Render Tabel*/
exports.sbu2_3_5 = function(req, res){
    res.render('sbu2/sbu2_3_5', {title: 'Biaya Perawatan Kendaraan Dinas'});
};

/* Tambah Data */
exports.tambah_sbu2_3_5 = function(req, res){
    res.render('sbu2/tambah_sbu2_3_5', {title: 'Biaya Perawatan Kendaraan Dinas'});
};

/* Edit Data */
exports.edit_sbu2_3_5 = function(req, res){
    res.render('sbu2/edit_sbu2_3_5', {title: 'Biaya Perawatan Kendaraan Dinas'});
};
/*============================================================================================*/

exports.kategoriA = function(req, res){
    res.render('sbu1/kategoriA', {title: 'Pengadaan Barang dan Jasa'});
};
exports.kategoriB = function(req, res){
    res.render('sbu1/kategoriB', {title: 'Pengadaan Barang dan Jasa'});
};
exports.kategoriC = function(req, res){
    res.render('sbu1/kategoriC', {title: 'Pengadaan Tanah Bagi Pembangunan untuk Kepentingan Umum'});
};
exports.kategoriD = function(req, res){
    res.render('sbu1/kategoriD', {title: 'Jasa Narasumber, Moderator, Pembawa Acara, Rohaniwan, dan Pembaca Doa'});
};
exports.kategoriE = function(req, res){
    res.render('sbu1/kategoriE', {title: 'Honorarium Satpam/Pengemudi/Petugas Kebersihan/Pramubakti/Front Office'});
};
exports.kategoriF = function(req, res){
    res.render('sbu1/kategoriF', {title: 'Satuan Biaya Uang Saku Rapat dan Bantuan Biaya Transportasi'});
};
exports.kategoriG = function(req, res){
    res.render('sbu1/kategoriG', {title: 'Satuan Biaya Bahan Bakar, Pelumasan, dan Biaya Pembayaran Pajak Kendaraan'});
};
exports.kategoriH = function(req, res){
    res.render('sbu1/kategoriH', {title: 'Perjalanan Dinas'});
};
exports.kategoriI = function(req, res){
    res.render('sbu1/kategoriI', {title: 'Satuan Biaya Penginapan Perjalanan Dinas'});
};
