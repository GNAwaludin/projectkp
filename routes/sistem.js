
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

    res.render('kebinamargaan/kebinamargaan', {
    title: "Bidang Kebinamargaan",
    page_title: "Bidang Kebinamargaan",
});
};


/*==================================================================================================*/


/*=====================================Peningkatan Jalan Hotmix=====================================*/

/*Render Tabel*/
exports.kebinamargaan_1_1 = function(req, res){

     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 66", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_1', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_1 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_1', {title: 'Peningkatan Jalan Hotmix'});
   
};

/* Save Data kebinamargaan_1_1 */
exports.save_kebinamargaan_1_1 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 66
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_1');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_1 = function(req, res){
    // res.render('sbu1/edit_2_1', {title: 'Pengadan Barang/Jasa'});
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_1',{
                title : 'Edit kebinamargaan_1_1',
                page_title:"Edit kebinamargaan_1_1",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit sbu1_2_1 */
exports.save_edit_kebinamargaan_1_1 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_1');
          
        });
    
    });
};

/* Delete sbu1_2_1 */
exports.delete_kebinamargaan_1_1 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_1');
             
        });
        
     });
};

/*=================================================================================================*/


/*=====================================Peningkatan Jalan Beton=====================================*/

/*Render Tabel*/
exports.kebinamargaan_1_2 = function(req, res){
   req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 67", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_2', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/*Tambah Data Baru*/
exports.tambah_kebinamargaan_1_2 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_2', {title: 'Kebinamargaan'});
};

/* Save Data kebinamargaan_1_2 */
exports.save_kebinamargaan_1_2 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 67
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_2');
        });
    });

};


/*edit data From database*/
exports.edit_kebinamargaan_1_2 = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_2',{
                title : 'Edit kebinamargaan_1_2',
                page_title:"Edit kebinamargaan_1_2",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_2 */
exports.save_edit_kebinamargaan_1_2 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_2');
          
        });
    
    });
};

/* Delete kebinamargaan_1_2 */
exports.delete_kebinamargaan_1_2 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_2');
             
        });
        
     });
};

/*=========================Rehabilitasi/Pemeliharaan Berkala (HOTMIX)==========================*/

/*Render Tabel*/
exports.kebinamargaan_1_3 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 68", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_3', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_3 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_3', {title: 'Kebinamargaan'});
};

/* Save Data kebinamargaan_1_3 */
exports.save_kebinamargaan_1_3 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 68
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_3');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_3 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_3',{
                title : 'Edit kebinamargaan_1_3',
                page_title:"Edit kebinamargaan_1_3",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_3 */
exports.save_edit_kebinamargaan_1_3 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_3');
          
        });
    
    });
};

/* Delete kebinamargaan_1_3 */
exports.delete_kebinamargaan_1_3 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_3');
             
        });
        
     });
};

/*=============================================================================================*/

/*=====================================Pemeliharaan Rutin======================================*/
/*Render Tabel*/
exports.kebinamargaan_1_4 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 69", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_4', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_4 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_4', {title: 'Kebinamargaan'})
};

/* Save Data kebinamargaan_1_4 */
exports.save_kebinamargaan_1_4 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 69
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_4');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_4 = function(req, res){
     var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_4',{
                title : 'Edit kebinamargaan_1_4',
                page_title:"Edit kebinamargaan_1_4",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_4 */
exports.save_edit_kebinamargaan_1_4 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_4');
          
        });
    
    });
};

/* Delete kebinamargaan_1_4 */
exports.delete_kebinamargaan_1_4 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_4');
             
        });
        
     });
};

/*=============================================================================================*/

/*====================================Pemeliharaan Rutin*======================================*/
/*Render Tabel*/
exports.kebinamargaan_1_5 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 70", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_5', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_5 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_5', {title: 'Kebinamargaan'})
};

/* Save Data kebinamargaan_1_5 */
exports.save_kebinamargaan_1_5 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 70
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_5');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_5 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_5',{
                title : 'Edit kebinamargaan_1_5',
                page_title:"Edit kebinamargaan_1_5",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_5 */
exports.save_edit_kebinamargaan_1_5 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_5');
          
        });
    
    });
};

/* Delete kebinamargaan_1_5 */
exports.delete_kebinamargaan_1_5 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_5');
             
        });
        
     });
};

/*=============================================================================================*/

/*===============================Pembangunan Jalan Baru Hotmix=================================*/
/*Render Tabel*/
exports.kebinamargaan_1_6 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 71", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_6', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_6 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_6', {title: 'Kebinamargaan'})
};

/* Save Data kebinamargaan_1_6 */
exports.save_kebinamargaan_1_6 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 71
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_6');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_6 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_6',{
                title : 'Edit kebinamargaan_1_6',
                page_title:"Edit kebinamargaan_1_6",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_6 */
exports.save_edit_kebinamargaan_1_6 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_6');
          
        });
    
    });
};

/* Delete kebinamargaan_1_6 */
exports.delete_kebinamargaan_1_6 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_6');
             
        });
        
     });
};

/*=============================================================================================*/

/*================================Pembangunan Jalan Baru Beton=================================*/
/*Render Tabel*/
exports.kebinamargaan_1_7 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 72", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_7', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_7 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_7', {title: 'Kebinamargaan'})
};

/* Save Data kebinamargaan_1_7 */
exports.save_kebinamargaan_1_7 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 72
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_7');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_7 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_7',{
                title : 'Edit kebinamargaan_1_7',
                page_title:"Edit kebinamargaan_1_7",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_7 */
exports.save_edit_kebinamargaan_1_7 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_7');
          
        });
    
    });
};

/* Delete kebinamargaan_1_7 */
exports.delete_kebinamargaan_1_7 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_7');
             
        });
        
     });
};

/*=============================================================================================*/

/*==================================Bahu di Perkeras Beton=====================================*/
/*Render Tabel*/
exports.kebinamargaan_1_8 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 73", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_8', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_8 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_8', {title: 'Kebinamargaan'})
};

/* Save Data kebinamargaan_1_8 */
exports.save_kebinamargaan_1_8 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 73
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_8');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_8 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_8',{
                title : 'Edit kebinamargaan_1_8',
                page_title:"Edit kebinamargaan_1_8",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_8 */
exports.save_edit_kebinamargaan_1_8 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_8');
          
        });
    
    });
};

/* Delete kebinamargaan_1_8*/
exports.delete_kebinamargaan_1_8 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_8');
             
        });
        
     });
};

/*=============================================================================================*/

/*==================================Pelebaran Jalan Beton======================================*/
/*Render Tabel*/
exports.kebinamargaan_1_9 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 74", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_9', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_9 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_9', {title: 'Kebinamargaan'})
};

/* Save Data kebinamargaan_1_9 */
exports.save_kebinamargaan_1_9 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 74
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_9');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_9 = function(req, res){
     var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_9',{
                title : 'Edit kebinamargaan_1_9',
                page_title:"Edit kebinamargaan_1_9",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_9 */
exports.save_edit_kebinamargaan_1_9 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_9');
          
        });
    
    });
};

/* Delete kebinamargaan_1_9*/
exports.delete_kebinamargaan_1_9 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_9');
             
        });
        
     });
};

/*=============================================================================================*/

/*================================Pelebaran Jalan AGREGAT======================================*/
/*Render Tabel*/
exports.kebinamargaan_1_10 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 75", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_10', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_10 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_10', {title: 'Kebinamargaan'})
};

/* Save Data kebinamargaan_1_10 */
exports.save_kebinamargaan_1_10 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 75
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_10');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_10 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_10',{
                title : 'Edit kebinamargaan_1_10',
                page_title:"Edit kebinamargaan_1_10",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_10 */
exports.save_edit_kebinamargaan_1_10 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_10');
          
        });
    
    });
};

/* Delete kebinamargaan_1_10*/
exports.delete_kebinamargaan_1_10 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_10');
             
        });
        
     });
};

/*=============================================================================================*/

/*=================================Rekonstrksi Jalan HOTMIX====================================*/
/*Render Tabel*/
exports.kebinamargaan_1_11 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 76", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_11', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_11 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_11', {title: 'Kebinamargaan'})
};

/* Save Data kebinamargaan_1_11 */
exports.save_kebinamargaan_1_11 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 76
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_11');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_11 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_11',{
                title : 'Edit kebinamargaan_1_11',
                page_title:"Edit kebinamargaan_1_11",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_11 */
exports.save_edit_kebinamargaan_1_11 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_11');
          
        });
    
    });
};

/* Delete kebinamargaan_1_11*/
exports.delete_kebinamargaan_1_11 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_11');
             
        });
        
     });
};

/*=============================================================================================*/

/*===============================Minimal Penanganan Jembatan===================================*/
/*Render Tabel*/
exports.kebinamargaan_1_12 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail4 WHERE kategori_id = 77", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_12', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_12 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_12', {title: 'Kebinamargaan'})
};

/* Save Data kebinamargaan_1_12 */
exports.save_kebinamargaan_1_12 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan,
            kategori_id : 77
        };

        var query = connection.query("INSERT INTO detail4 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_12');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_12 = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail4 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_12',{
                title : 'Edit kebinamargaan_1_12',
                page_title:"Edit kebinamargaan_1_12",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_12 */
exports.save_edit_kebinamargaan_1_12 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail4 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_12');
          
        });
    
    });
};

/* Delete kebinamargaan_1_12*/
exports.delete_kebinamargaan_1_12 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail4  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_12');
             
        });
        
     });
};

/*=============================================================================================*/

/*==========================Perencanaan dan Pengawasan Jalan Jembatan==========================*/
/*Render Tabel*/
exports.kebinamargaan_1_13 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 78", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_13', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_13 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_13', {title: 'Kebinamargaan'})
};

/* Save Data kebinamargaan_1_13 */
exports.save_kebinamargaan_1_13 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 78
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_13');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_13 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_13',{
                title : 'Edit kebinamargaan_1_13',
                page_title:"Edit kebinamargaan_1_13",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_13 */
exports.save_edit_kebinamargaan_1_13 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail2 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/kebinamargaan_1_13');
          
        });
    
    });
};

/* Delete kebinamargaan_1_13*/
exports.delete_kebinamargaan_1_13 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_13');
             
        });
        
     });
};

/*=============================================================================================*/

/*=====================================Sewa Alat/Kendaraaan====================================*/
/*Render Tabel*/
exports.kebinamargaan_1_17 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 82", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('kebinamargaan/kebinamargaan_1_17', {
                title: 'Kebinamargaan',
                page_title: "Kebinamargaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_kebinamargaan_1_17 = function(req, res){
    res.render('kebinamargaan/tambah_kebinamargaan_1_17', {title: 'Kebinamargaan'})
};

/* Save Data kebinamargaan_1_17 */
exports.save_kebinamargaan_1_17 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 82
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/kebinamargaan_1_17');
        });
    });

};

/* Edit Data */
exports.edit_kebinamargaan_1_17 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('kebinamargaan/edit_kebinamargaan_1_17',{
                title : 'Edit kebinamargaan_1_17',
                page_title:"Edit kebinamargaan_1_17",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit kebinamargaan_1_17 */
exports.save_edit_kebinamargaan_1_17 = function(req, res){

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
         
          res.redirect('/kebinamargaan_1_17');
          
        });
    
    });
};

/* Delete kebinamargaan_1_17*/
exports.delete_kebinamargaan_1_17 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/kebinamargaan_1_17');
             
        });
        
     });
};

/*=============================================================================================*/

/*========================================Bidang SDA===========================================*/
exports.sumber_daya_air = function(req, res){
    res.render('sda/sumber_daya_air', {title: 'Sumber Daya Air'});
};
/*========================Honorarium Tenaga Teknis NON PNS Khusus Bidang SDA===================*/
/*Render Tabel*/
exports.sda_2_1 = function(req, res){
      req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail3 WHERE kategori_id = 83", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sda/sda_2_1', {
                title: 'Sumber Daya Air',
                page_title: "Sumber Daya Air", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sda_2_1 = function(req, res){
    res.render('sda/tambah_sda_2_1', {title: 'Sumber Daya Air'});
};

/* Save Data sda_2_1 */
exports.save_sda_2_1 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 83
        };

        var query = connection.query("INSERT INTO detail3 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sda_2_1');
        });
    });

};

/* Edit Data */
exports.edit_sda_2_1 = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail3 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sda/edit_sda_2_1',{
                title : 'Edit sda_2_1',
                page_title:"Edit sda_2_1",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit sda_2_1 */
exports.save_edit_sda_2_1 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail3 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sda_2_1');
          
        });
    
    });
};

/* Delete kebinamargaan_1_17*/
exports.delete_sda_2_1 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail3  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sda_2_1');
             
        });
        
     });
};

/*============================================================================================*/
/*=================Besaran Uang Saku Tenaga Teknis Non PNS  Piket Banjir/Kekeringan===========*/
/*Render Tabel*/
exports.sda_2_2 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 84", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sda/sda_2_2', {
                title: 'Sumber Daya Air',
                page_title: "Sumber Daya Air", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sda_2_2 = function(req, res){
    res.render('sda/tambah_sda_2_2', {title: 'Sumber Daya Air'});
};

/* Save Data sda_2_2 */
exports.save_sda_2_2 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 84
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sda_2_2');
        });
    });

};

/* Edit Data */
exports.edit_sda_2_2 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sda/edit_sda_2_2',{
                title : 'Edit sda_2_2',
                page_title:"Edit sda_2_2",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit sda_2_2 */
exports.save_edit_sda_2_2 = function(req, res){

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
         
          res.redirect('/sda_2_2');
          
        });
    
    });
};

/* Delete sda_2_2*/
exports.delete_sda_2_2 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sda_2_2');
             
        });
        
     });
};

/*============================================================================================*/
/*=================Pengukuran dan Perencanaan Rehabilitasi Irigasi (Pedataran)================*/
/*Render Tabel*/
exports.sda_2_3 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 85", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sda/sda_2_3', {
                title: 'Sumber Daya Air',
                page_title: "Sumber Daya Air", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sda_2_3 = function(req, res){
    res.render('sda/tambah_sda_2_3', {title: 'Sumber Daya Air'});
};

/* Save Data sda_2_3 */
exports.save_sda_2_3 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 85
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sda_2_3');
        });
    });

};

/* Edit Data */
exports.edit_sda_2_3 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sda/edit_sda_2_3',{
                title : 'Edit sda_2_3',
                page_title:"Edit sda_2_3",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit sda_2_3 */
exports.save_edit_sda_2_3 = function(req, res){

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
         
          res.redirect('/sda_2_3');
          
        });
    
    });
};

/* Delete sda_2_3*/
exports.delete_sda_2_3 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sda_2_3');
             
        });
        
     });
};

/*============================================================================================*/
/*=================Pengukuran dan Perencanaan Rehabilitasi Irigasi (Pegunungan)===============*/
/*Render Tabel*/
exports.sda_2_4 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 86", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sda/sda_2_4', {
                title: 'Sumber Daya Air',
                page_title: "Sumber Daya Air", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sda_2_4 = function(req, res){
    res.render('sda/tambah_sda_2_4', {title: 'Sumber Daya Air'});
};

/* Save Data sda_2_4 */
exports.save_sda_2_4 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 86
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sda_2_4');
        });
    });

};

/* Edit Data */
exports.edit_sda_2_4 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sda/edit_sda_2_4',{
                title : 'Edit sda_2_4',
                page_title:"Edit sda_2_4",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit sda_2_4 */
exports.save_edit_sda_2_4 = function(req, res){

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
         
          res.redirect('/sda_2_4');
          
        });
    
    });
};

/* Delete sda_2_4*/
exports.delete_sda_2_4 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sda_2_4');
             
        });
        
     });
};

/*============================================================================================*/
/*==========================Pengukuran dan Perencanaan Sungai/Drainase========================*/
/*Render Tabel*/
exports.sda_2_5 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail5 WHERE kategori_id = 87", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sda/sda_2_5', {
                title: 'Sumber Daya Air',
                page_title: "Sumber Daya Air", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sda_2_5 = function(req, res){
    res.render('sda/tambah_sda_2_5', {title: 'Sumber Daya Air'});
};

/* Save Data sda_2_5 */
exports.save_sda_2_5 = function(req, res){

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
            kategori_id : 87
        };

        var query = connection.query("INSERT INTO detail5 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sda_2_5');
        });
    });

};

/* Edit Data */
exports.edit_sda_2_5 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail5 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sda/edit_sda_2_5',{
                title : 'Edit sda_2_5',
                page_title:"Edit sda_2_5",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit sda_2_5 */
exports.save_edit_sda_2_5 = function(req, res){

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
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail5 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sda_2_5');
          
        });
    
    });
};

/* Delete sda_2_5*/
exports.delete_sda_2_5 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail5  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sda_2_5');
             
        });
        
     });
};

/*============================================================================================*/
/*==============================Pengukuran dan Perencanaan Situ===============================*/
/*Render Tabel*/
exports.sda_2_6 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 88", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sda/sda_2_6', {
                title: 'Sumber Daya Air',
                page_title: "Sumber Daya Air", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sda_2_6 = function(req, res){
    res.render('sda/tambah_sda_2_6', {title: 'Sumber Daya Air'});
};

/* Save Data sda_2_6 */
exports.save_sda_2_6 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 88
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sda_2_6');
        });
    });

};

/* Edit Data */
exports.edit_sda_2_6 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sda/edit_sda_2_6',{
                title : 'Edit sda_2_6',
                page_title:"Edit sda_2_6",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit sda_2_6 */
exports.save_edit_sda_2_6 = function(req, res){

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
         
          res.redirect('/sda_2_6');
          
        });
    
    });
};

/* Delete sda_2_6*/
exports.delete_sda_2_6 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sda_2_6');
             
        });
        
     });
};

/*============================================================================================*/
/*==========Pengukuran dan Perencanaan Pengamanan Pantai dan Perbaikan Muara Sungai===========*/
/*Render Tabel*/
exports.sda_2_7 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 89", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sda/sda_2_7', {
                title: 'Sumber Daya Air',
                page_title: "Sumber Daya Air", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sda_2_7 = function(req, res){
    res.render('sda/tambah_sda_2_7', {title: 'Sumber Daya Air'});
};

/* Save Data sda_2_7 */
exports.save_sda_2_7 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 89
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sda_2_7');
        });
    });

};

/* Edit Data */
exports.edit_sda_2_7 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sda/edit_sda_2_7',{
                title : 'Edit sda_2_7',
                page_title:"Edit sda_2_7",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit sda_2_7 */
exports.save_edit_sda_2_7 = function(req, res){

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
         
          res.redirect('/sda_2_7');
          
        });
    
    });
};

/* Delete sda_2_7*/
exports.delete_sda_2_7 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sda_2_7');
             
        });
        
     });
};

/*============================================================================================*/
/*=================Biaya Penyelidikan Lapangan & Pengujian Laboratorium Geoteknik=============*/
/*Render Tabel*/
exports.sda_2_8 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM deatil1a WHERE detail1_id = 2", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sda/sda_2_8', {
                title: 'Sumber Daya Air',
                page_title: "Sumber Daya Air", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sda_2_8 = function(req, res){
    res.render('sda/tambah_sda_2_8', {title: 'Sumber Daya Air'});
};

/* Save Data sda_2_8 */
exports.save_sda_2_8 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            detail1_id : 2
        };

        var query = connection.query("INSERT INTO deatil1a set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sda_2_8');
        });
    });

};

/* Edit Data */
exports.edit_sda_2_8 = function(req, res){
     var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM deatil1a WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sda/edit_sda_2_8',{
                title : 'Edit sda_2_8',
                page_title:"Edit sda_2_8",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit sda_2_8 */
exports.save_edit_sda_2_8 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE deatil1a set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/sda_2_8');
          
        });
    
    });
};

/* Delete sda_2_8*/
exports.delete_sda_2_8 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM deatil1a  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sda_2_8');
             
        });
        
     });
};

/*============================================================================================*/
/*=============================Biaya Pengelolaan Jaringan Irigasi=============================*/
/*Render Tabel*/
exports.sda_2_9 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 91", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sda/sda_2_9', {
                title: 'Sumber Daya Air',
                page_title: "Sumber Daya Air", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sda_2_9 = function(req, res){
    res.render('sda/tambah_sda_2_9', {title: 'Sumber Daya Air'});
};

/* Save Data sda_2_9 */
exports.save_sda_2_9 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 91
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sda_2_9');
        });
    });

};

/* Edit Data */
exports.edit_sda_2_9 = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sda/edit_sda_2_9',{
                title : 'Edit sda_2_9',
                page_title:"Edit sda_2_9",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit sda_2_9 */
exports.save_edit_sda_2_9 = function(req, res){

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
         
          res.redirect('/sda_2_9');
          
        });
    
    });
};

/* Delete sda_2_9*/
exports.delete_sda_2_9 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sda_2_9');
             
        });
        
     });
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
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail6 WHERE kategori_id = 92", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('keciptakaryaan/cipta_3_1', {
                title: 'Keciptakaryaan',
                page_title: "Keciptakaryaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_cipta_3_1 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_1', {title: 'Keciptakaryaan'});
};

/* Save Data cipta_3_1 */
exports.save_cipta_3_1 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nama4 : input.nama4,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 92
        };

        var query = connection.query("INSERT INTO detail6 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/cipta_3_1');
        });
    });

};

/* Edit Data */
exports.edit_cipta_3_1 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail6 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('keciptakaryaan/edit_cipta_3_1',{
                title : 'Edit cipta_3_1',
                page_title:"Edit cipta_3_1",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit cipta_3_1 */
exports.save_edit_cipta_3_1 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nama4 : input.nama4,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail6 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/cipta_3_1');
          
        });
    
    });
};

/* Delete cipta_3_1*/
exports.delete_cipta_3_1 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail6  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/cipta_3_1');
             
        });
        
     });
};

/*============================================================================================*/
/*==========================Tenaga sub Profesional Jasa Konsultansi===========================*/
/*Render Tabel*/
exports.cipta_3_2 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail6 WHERE kategori_id = 93", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('keciptakaryaan/cipta_3_2', {
                title: 'Keciptakaryaan',
                page_title: "Keciptakaryaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_cipta_3_2 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_2', {title: 'Keciptakaryaan'});
};

/* Save Data cipta_3_2 */
exports.save_cipta_3_2 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nama4 : input.nama4,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 93
        };

        var query = connection.query("INSERT INTO detail6 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/cipta_3_2');
        });
    });

};

/* Edit Data */
exports.edit_cipta_3_2 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail6 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('keciptakaryaan/edit_cipta_3_2',{
                title : 'Edit cipta_3_2',
                page_title:"Edit cipta_3_2",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit cipta_3_2 */
exports.save_edit_cipta_3_2 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nama4 : input.nama4,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail6 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/cipta_3_2');
          
        });
    
    });
};

/* Delete cipta_3_2*/
exports.delete_cipta_3_2 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail6  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/cipta_3_2');
             
        });
        
     });
};

/*============================================================================================*/
/*==============================Tenaga Pendukung Jasa Konsultansi=============================*/
/*Render Tabel*/
exports.cipta_3_3 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 94", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('keciptakaryaan/cipta_3_3', {
                title: 'Keciptakaryaan',
                page_title: "Keciptakaryaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_cipta_3_3 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_3', {title: 'Keciptakaryaan'});
};

/* Save Data cipta_3_3 */
exports.save_cipta_3_3 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 94
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/cipta_3_3');
        });
    });

};

/* Edit Data */
exports.edit_cipta_3_3 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('keciptakaryaan/edit_cipta_3_3',{
                title : 'Edit cipta_3_3',
                page_title:"Edit cipta_3_3",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit cipta_3_3 */
exports.save_edit_cipta_3_3 = function(req, res){

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
         
          res.redirect('/cipta_3_3');
          
        });
    
    });
};

/* Delete cipta_3_3*/
exports.delete_cipta_3_3 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/cipta_3_3');
             
        });
        
     });
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
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail7 WHERE kategori_id = 101", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('keciptakaryaan/cipta_3_10', {
                title: 'Keciptakaryaan',
                page_title: "Keciptakaryaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_cipta_3_10 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_10', {title: 'Keciptakaryaan'});
};

/* Save Data cipta_3_10 */
exports.save_cipta_3_10 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama : input.nama,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            nilai5 : input.nilai5,
            nilai6 : input.nilai6,
            nilai7 : input.nilai7,
            keterangan : input.keterangan,
            kategori_id : 101
        };

        var query = connection.query("INSERT INTO detail7 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/cipta_3_10');
        });
    });

};

/* Edit Data */
exports.edit_cipta_3_10 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail7 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('keciptakaryaan/edit_cipta_3_10',{
                title : 'Edit cipta_3_10',
                page_title:"Edit cipta_3_10",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit cipta_3_10 */
exports.save_edit_cipta_3_10 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama : input.nama,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            nilai4 : input.nilai4,
            nilai5 : input.nilai5,
            nilai6 : input.nilai6,
            nilai7 : input.nilai7,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail7 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/cipta_3_10');
          
        });
    
    });
};

/* Delete cipta_3_10*/
exports.delete_cipta_3_10 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail7  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/cipta_3_10');
             
        });
        
     });
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
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail8 WHERE kategori_id = 106", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('keciptakaryaan/cipta_3_15', {
                title: 'Keciptakaryaan',
                page_title: "Keciptakaryaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_cipta_3_15 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_15', {title: 'Keciptakaryaan'});
};

/* Save Data cipta_3_15 */
exports.save_cipta_3_15 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama : input.nama,
            float1 : input.float1,
            float2 : input.float2,
            float3 : input.float3,
            keterangan : input.keterangan,
            kategori_id : 106
        };

        var query = connection.query("INSERT INTO detail8 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/cipta_3_15');
        });
    });

};

/* Edit Data */
exports.edit_cipta_3_15 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail8 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('keciptakaryaan/edit_cipta_3_15',{
                title : 'Edit cipta_3_15',
                page_title:"Edit cipta_3_15",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit cipta_3_15 */
exports.save_edit_cipta_3_15 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama : input.nama,
            float1 : input.float1,
            float2 : input.float2,
            float3 : input.float3,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail8 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/cipta_3_15');
          
        });
    
    });
};

/* Delete cipta_3_15*/
exports.delete_cipta_3_15 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail8  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/cipta_3_15');
             
        });
        
     });
};

/*============================================================================================*/
/*===========Sub Bidang Untuk Kegiatan Perumahan Kota (PLPK)/ Bidang Permukiman===============*/
/*Render Tabel*/
exports.cipta_3_16 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail8 WHERE kategori_id = 107", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('keciptakaryaan/cipta_3_16', {
                title: 'Keciptakaryaan',
                page_title: "Keciptakaryaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_cipta_3_16 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_16', {title: 'Keciptakaryaan'});
};

/* Save Data cipta_3_16 */
exports.save_cipta_3_16 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama : input.nama,
            float1 : input.float1,
            float2 : input.float2,
            float3 : input.float3,
            keterangan : input.keterangan,
            kategori_id : 107
        };

        var query = connection.query("INSERT INTO detail8 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/cipta_3_16');
        });
    });

};

/* Edit Data */
exports.edit_cipta_3_16 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail8 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('keciptakaryaan/edit_cipta_3_16',{
                title : 'Edit cipta_3_16',
                page_title:"Edit cipta_3_16",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit cipta_3_16 */
exports.save_edit_cipta_3_16 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama : input.nama,
            float1 : input.float1,
            float2 : input.float2,
            float3 : input.float3,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail8 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/cipta_3_16');
          
        });
    
    });
};

/* Delete cipta_3_16*/
exports.delete_cipta_3_16 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail8  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/cipta_3_16');
             
        });
        
     });
};

/*============================================================================================*/
/*========================Prosentase Komponen Pekerjaan Bangunan==============================*/
/*Render Tabel*/
exports.cipta_3_17 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 108", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('keciptakaryaan/cipta_3_17', {
                title: 'Keciptakaryaan',
                page_title: "Keciptakaryaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_cipta_3_17 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_17', {title: 'Keciptakaryaan'});
};

/* Save Data cipta_3_17 */
exports.save_cipta_3_17 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 108
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/cipta_3_17');
        });
    });

};

/* Edit Data */
exports.edit_cipta_3_17 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('keciptakaryaan/edit_cipta_3_17',{
                title : 'Edit cipta_3_17',
                page_title:"Edit cipta_3_17",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit cipta_3_17 */
exports.save_edit_cipta_3_17 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/cipta_3_17');
          
        });
    
    });
};

/* Delete cipta_3_17*/
exports.delete_cipta_3_17 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/cipta_3_17');
             
        });
        
     });
};

/*============================================================================================*/
/*=========Standar Kegiatan Pekerjaan Fisik Perencanaan Teknis Sistem Air Bersih==============*/
/*Render Tabel*/
exports.cipta_3_18 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 109", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('keciptakaryaan/cipta_3_18', {
                title: 'Keciptakaryaan',
                page_title: "Keciptakaryaan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_cipta_3_18 = function(req, res){
    res.render('keciptakaryaan/tambah_cipta_3_18', {title: 'Keciptakaryaan'});
};

/* Save Data cipta_3_18 */
exports.save_cipta_3_18 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 109
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/cipta_3_18');
        });
    });

};

/* Edit Data */
exports.edit_cipta_3_18 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('keciptakaryaan/edit_cipta_3_18',{
                title : 'Edit cipta_3_18',
                page_title:"Edit cipta_3_18",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit cipta_3_18 */
exports.save_edit_cipta_3_18 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail9 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/cipta_3_18');
          
        });
    
    });
};

/* Delete cipta_3_18*/
exports.delete_cipta_3_18 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/cipta_3_18');
             
        });
        
     });
};

/*============================================================================================*/
/*======================================Perhubungan===========================================*/
exports.perhubungan = function(req, res){
    res.render('perhubungan/perhubungan', {title: 'Perhubungan'});
};
/*====================================Perhubungan Darat=======================================*/
/*Render Tabel*/
exports.hub_4_1IA = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 110", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('perhubungan/hub_4_1IA', {
                title: 'Perhubungan',
                page_title: "Perhubungan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_hub_4_1IA = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IA', {title: 'Perhubungan'});
};

/* Save Data hub_4_1IA */
exports.save_hub_4_1IA = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 110
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/hub_4_1IA');
        });
    });

};

/* Edit Data */
exports.edit_hub_4_1IA = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('perhubungan/edit_hub_4_1IA',{
                title : 'Edit hub_4_1IA',
                page_title:"Edit hub_4_1IA",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit hub_4_1IA */
exports.save_edit_hub_4_1IA = function(req, res){

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
         
          res.redirect('/hub_4_1IA');
          
        });
    
    });
};

/* Delete hub_4_1IA*/
exports.delete_hub_4_1IA = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/hub_4_1IA');
             
        });
        
     });
};

/*===========================================================================================*/
exports.hub_4_1IB = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 111", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('perhubungan/hub_4_1IB', {
                title: 'Perhubungan',
                page_title: "Perhubungan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_hub_4_1IB = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IB', {title: 'Perhubungan'});
};

/* Save Data hub_4_1IB */
exports.save_hub_4_1IB = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 111
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/hub_4_1IB');
        });
    });

};

/* Edit Data */
exports.edit_hub_4_1IB = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('perhubungan/edit_hub_4_1IB',{
                title : 'Edit hub_4_1IB',
                page_title:"Edit hub_4_1IB",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit hub_4_1IB */
exports.save_edit_hub_4_1IB = function(req, res){

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
         
          res.redirect('/hub_4_1IB');
          
        });
    
    });
};

/* Delete hub_4_1IB*/
exports.delete_hub_4_1IB = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/hub_4_1IB');
             
        });
        
     });
};

/*===========================================================================================*/
exports.hub_4_1IC = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 112", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('perhubungan/hub_4_1IC', {
                title: 'Perhubungan',
                page_title: "Perhubungan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_hub_4_1IC = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IC', {title: 'Perhubungan'});
};

/* Save Data hub_4_1IC */
exports.save_hub_4_1IC = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 112
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/hub_4_1IC');
        });
    });

};

/* Edit Data */
exports.edit_hub_4_1IC = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('perhubungan/edit_hub_4_1IC',{
                title : 'Edit hub_4_1IC',
                page_title:"Edit hub_4_1IC",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit hub_4_1IC */
exports.save_edit_hub_4_1IC = function(req, res){

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
         
          res.redirect('/hub_4_1IC');
          
        });
    
    });
};

/* Delete hub_4_1IC*/
exports.delete_hub_4_1IC = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/hub_4_1IC');
             
        });
        
     });
};

/*====================================Perhubungan Laut=======================================*/
/*Render Tabel*/
exports.hub_4_1IIA = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 113", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('perhubungan/hub_4_1IIA', {
                title: 'Perhubungan',
                page_title: "Perhubungan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_hub_4_1IIA = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IIA', {title: 'Perhubungan'});
};

/* Save Data hub_4_1IIA */
exports.save_hub_4_1IIA = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 113
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/hub_4_1IIA');
        });
    });

};

/* Edit Data */
exports.edit_hub_4_1IIA = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('perhubungan/edit_hub_4_1IIA',{
                title : 'Edit hub_4_1IIA',
                page_title:"Edit hub_4_1IIA",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit hub_4_1IIA */
exports.save_edit_hub_4_1IIA = function(req, res){

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
         
          res.redirect('/hub_4_1IIA');
          
        });
    
    });
};

/* Delete hub_4_1IIA*/
exports.delete_hub_4_1IIA = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/hub_4_1IIA');
             
        });
        
     });
};

/*===========================================================================================*/
exports.hub_4_1IIB = function(req, res){
   req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 114", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('perhubungan/hub_4_1IIB', {
                title: 'Perhubungan',
                page_title: "Perhubungan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_hub_4_1IIB = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IIB', {title: 'Perhubungan'});
};

/* Save Data hub_4_1IIB */
exports.save_hub_4_1IIB = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 114
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/hub_4_1IIB');
        });
    });

};

/* Edit Data */
exports.edit_hub_4_1IIB = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('perhubungan/edit_hub_4_1IIB',{
                title : 'Edit hub_4_1IIB',
                page_title:"Edit hub_4_1IIB",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit hub_4_1IIB */
exports.save_edit_hub_4_1IIB = function(req, res){

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
         
          res.redirect('/hub_4_1IIB');
          
        });
    
    });
};

/* Delete hub_4_1IIB*/
exports.delete_hub_4_1IIB = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/hub_4_1IIB');
             
        });
        
     });
};

/*====================================Perhubungan Udara=======================================*/
/*Render Tabel*/
exports.hub_4_1IIIA = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 115", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('perhubungan/hub_4_1IIIA', {
                title: 'Perhubungan',
                page_title: "Perhubungan", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_hub_4_1IIIA = function(req, res){
    res.render('perhubungan/tambah_hub_4_1IIIA', {title: 'Perhubungan'});
};

/* Save Data hub_4_1IIIA */
exports.save_hub_4_1IIIA = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 115
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/hub_4_1IIIA');
        });
    });

};

/* Edit Data */
exports.edit_hub_4_1IIIA = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('perhubungan/edit_hub_4_1IIIA',{
                title : 'Edit hub_4_1IIIA',
                page_title:"Edit hub_4_1IIIA",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit hub_4_1IIIA */
exports.save_edit_hub_4_1IIIA = function(req, res){

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
         
          res.redirect('/hub_4_1IIIA');
          
        });
    
    });
};

/* Delete hub_4_1IIIA*/
exports.delete_hub_4_1IIIA = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/hub_4_1IIIA');
             
        });
        
     });
};

/*===========================================================================================*/

/*===================================Lingkungan Hidup=========================================*/
exports.lingkungan_hidup = function(req, res){
    res.render('lhidup/lingkungan_hidup', {title: 'Lingkungan Hidup'});
};
/*==========================Pengujian Parameter Kualitas Lingkungan===========================*/
/*Render Tabel*/
exports.lh_5_1a = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail1c WHERE detail1_id = 3", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('lhidup/lh_5_1a', {
                title: 'Lingkungan Hidup',
                page_title: "Lingkungan Hidup", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_lh_5_1a = function(req, res){
    res.render('lhidup/tambah_lh_5_1a', {title: 'Lingkungan Hidup'});
};

/* Save Data lh_5_1a */
exports.save_lh_5_1a = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            detail1_id : 3
        };

        var query = connection.query("INSERT INTO detail1c set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/lh_5_1a');
        });
    });

};

/* Edit Data */
exports.edit_lh_5_1a = function(req, res){
     var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail1c WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('lhidup/edit_lh_5_1a',{
                title : 'Edit lh_5_1a',
                page_title:"Edit lh_5_1a",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit lh_5_1a */
exports.save_edit_lh_5_1a = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail1c set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/lh_5_1a');
          
        });
    
    });
};

/* Delete lh_5_1a*/
exports.delete_lh_5_1a = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail1c WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/lh_5_1a');
             
        });
        
     });
};

/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1b = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail1c WHERE detail1_id = 4", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('lhidup/lh_5_1b', {
                title: 'Lingkungan Hidup',
                page_title: "Lingkungan Hidup", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_lh_5_1b = function(req, res){
    res.render('lhidup/tambah_lh_5_1b', {title: 'Lingkungan Hidup'});
};

/* Save Data lh_5_1b */
exports.save_lh_5_1b = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            detail1_id : 4
        };

        var query = connection.query("INSERT INTO detail1c set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/lh_5_1b');
        });
    });

};

/* Edit Data */
exports.edit_lh_5_1b = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail1c WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('lhidup/edit_lh_5_1b',{
                title : 'Edit lh_5_1b',
                page_title:"Edit lh_5_1b",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit lh_5_1b */
exports.save_edit_lh_5_1b = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail1c set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/lh_5_1b');
          
        });
    
    });
};

/* Delete lh_5_1b*/
exports.delete_lh_5_1b = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail1c WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/lh_5_1b');
             
        });
        
     });
};

/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1c = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail1c WHERE detail1_id = 5", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('lhidup/lh_5_1c', {
                title: 'Lingkungan Hidup',
                page_title: "Lingkungan Hidup", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_lh_5_1c = function(req, res){
    res.render('lhidup/tambah_lh_5_1c', {title: 'Lingkungan Hidup'});
};

/* Save Data lh_5_1c */
exports.save_lh_5_1c = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            detail1_id : 5
        };

        var query = connection.query("INSERT INTO detail1c set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/lh_5_1c');
        });
    });

};

/* Edit Data */
exports.edit_lh_5_1c = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail1c WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('lhidup/edit_lh_5_1c',{
                title : 'Edit lh_5_1c',
                page_title:"Edit lh_5_1c",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit lh_5_1c */
exports.save_edit_lh_5_1c = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail1c set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/lh_5_1c');
          
        });
    
    });
};

/* Delete lh_5_1c*/
exports.delete_lh_5_1c = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail1c WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/lh_5_1c');
             
        });
        
     });
};

/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1d = function(req, res){
   req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail1c WHERE detail1_id = 6", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('lhidup/lh_5_1d', {
                title: 'Lingkungan Hidup',
                page_title: "Lingkungan Hidup", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_lh_5_1d = function(req, res){
    res.render('lhidup/tambah_lh_5_1d', {title: 'Lingkungan Hidup'});
};

/* Save Data lh_5_1d */
exports.save_lh_5_1d = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            detail1_id : 6
        };

        var query = connection.query("INSERT INTO detail1c set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/lh_5_1d');
        });
    });

};

/* Edit Data */
exports.edit_lh_5_1d = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail1c WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('lhidup/edit_lh_5_1d',{
                title : 'Edit lh_5_1d',
                page_title:"Edit lh_5_1d",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit lh_5_1d */
exports.save_edit_lh_5_1d = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail1c set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/lh_5_1d');
          
        });
    
    });
};

/* Delete lh_5_1d*/
exports.delete_lh_5_1d = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail1c WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/lh_5_1d');
             
        });
        
     });
};

/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1e = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail1c WHERE detail1_id = 7", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('lhidup/lh_5_1e', {
                title: 'Lingkungan Hidup',
                page_title: "Lingkungan Hidup", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_lh_5_1e = function(req, res){
    res.render('lhidup/tambah_lh_5_1e', {title: 'Lingkungan Hidup'});
};

/* Save Data lh_5_1e */
exports.save_lh_5_1e = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            detail1_id : 7
        };

        var query = connection.query("INSERT INTO detail1c set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/lh_5_1e');
        });
    });

};

/* Edit Data */
exports.edit_lh_5_1e = function(req, res){
     var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail1c WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('lhidup/edit_lh_5_1e',{
                title : 'Edit lh_5_1e',
                page_title:"Edit lh_5_1e",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit lh_5_1e */
exports.save_edit_lh_5_1e = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail1c set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/lh_5_1e');
          
        });
    
    });
};

/* Delete lh_5_1e*/
exports.delete_lh_5_1e = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail1c WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/lh_5_1e');
             
        });
        
     });
};

/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1f = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail1c WHERE detail1_id = 8", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('lhidup/lh_5_1f', {
                title: 'Lingkungan Hidup',
                page_title: "Lingkungan Hidup", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_lh_5_1f = function(req, res){
    res.render('lhidup/tambah_lh_5_1f', {title: 'Lingkungan Hidup'});
};

/* Save Data lh_5_1f */
exports.save_lh_5_1f = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            detail1_id : 8
        };

        var query = connection.query("INSERT INTO detail1c set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/lh_5_1f');
        });
    });

};

/* Edit Data */
exports.edit_lh_5_1f = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail1c WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('lhidup/edit_lh_5_1f',{
                title : 'Edit lh_5_1f',
                page_title:"Edit lh_5_1f",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit lh_5_1f */
exports.save_edit_lh_5_1f = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail1c set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/lh_5_1f');
          
        });
    
    });
};

/* Delete lh_5_1f*/
exports.delete_lh_5_1f = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail1c WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/lh_5_1f');
             
        });
        
     });
};

/*============================================================================================*/
/*Render Tabel*/
exports.lh_5_1g = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail1c WHERE detail1_id = 9", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('lhidup/lh_5_1g', {
                title: 'Lingkungan Hidup',
                page_title: "Lingkungan Hidup", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_lh_5_1g = function(req, res){
    res.render('lhidup/tambah_lh_5_1g', {title: 'Lingkungan Hidup'});
};

/* Save Data lh_5_1g */
exports.save_lh_5_1g = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            detail1_id : 9
        };

        var query = connection.query("INSERT INTO detail1c set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/lh_5_1g');
        });
    });

};

/* Edit Data */
exports.edit_lh_5_1g = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail1c WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('lhidup/edit_lh_5_1g',{
                title : 'Edit lh_5_1g',
                page_title:"Edit lh_5_1g",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit lh_5_1g */
exports.save_edit_lh_5_1g = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail1c set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/lh_5_1g');
          
        });
    
    });
};

/* Delete lh_5_1g*/
exports.delete_lh_5_1g = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail1c WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/lh_5_1g');
             
        });
        
     });
};

/*============================================================================================*/

/*=======================Pengambilan Contoh Parameter Kualitas Lingkungan=====================*/
/*Render Tabel*/
exports.lh_5_2 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail3 WHERE kategori_id = 117", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('lhidup/lh_5_2', {
                title: 'Lingkungan Hidup',
                page_title: "Lingkungan Hidup", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_lh_5_2 = function(req, res){
    res.render('lhidup/tambah_lh_5_2', {title: 'Lingkungan Hidup'});
};

/* Save Data lh_5_2 */
exports.save_lh_5_2 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 117
        };

        var query = connection.query("INSERT INTO detail3 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/lh_5_2');
        });
    });

};

/* Edit Data */
exports.edit_lh_5_2 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail3 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('lhidup/edit_lh_5_2',{
                title : 'Edit lh_5_2',
                page_title:"Edit lh_5_2",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit lh_5_2 */
exports.save_edit_lh_5_2 = function(req, res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
        
        };
        
        connection.query("UPDATE detail3 set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/lh_5_2');
          
        });
    
    });
};

/* Delete lh_5_2*/
exports.delete_lh_5_2 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail3 WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/lh_5_2');
             
        });
        
     });
};

/*============================================================================================*/
/*=========================================Honorarium=========================================*/
/*Render Tabel*/
exports.lh_5_3 = function(req, res){
   req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 118", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('lhidup/lh_5_3', {
                title: 'Lingkungan Hidup',
                page_title: "Lingkungan Hidup", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_lh_5_3 = function(req, res){
    res.render('lhidup/tambah_lh_5_3', {title: 'Lingkungan Hidup'});
};

/* Save Data lh_5_3 */
exports.save_lh_5_3 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 118
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/lh_5_3');
        });
    });

};

/* Edit Data */
exports.edit_lh_5_3 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('lhidup/edit_lh_5_3',{
                title : 'Edit lh_5_3',
                page_title:"Edit lh_5_3",data:rows
            });
                
           
         });
         
    }); 
};

/* Save Edit lh_5_3 */
exports.save_edit_lh_5_3 = function(req, res){

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
         
          res.redirect('/lh_5_3');
          
        });
    
    });
};

/* Delete lh_5_3*/
exports.delete_lh_5_3 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9 WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/lh_5_3');
             
        });
        
     });
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
exports.kebun_8_1a = function(req, res){
    res.render('perkebunan/kebun_8_1a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_1a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_1a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_1a = function(req, res){
    res.render('perkebunan/edit_kebun_8_1a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_1b = function(req, res){
    res.render('perkebunan/kebun_8_1b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_1b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_1b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_1b = function(req, res){
    res.render('perkebunan/edit_kebun_8_1b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_1c = function(req, res){
    res.render('perkebunan/kebun_8_1c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_1c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_1c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_1c = function(req, res){
    res.render('perkebunan/edit_kebun_8_1c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_2a = function(req, res){
    res.render('perkebunan/kebun_8_2a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_2a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_2a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_2a = function(req, res){
    res.render('perkebunan/edit_kebun_8_2a', {title: 'Perkebunan'});
};

exports.kebun_8_2b = function(req, res){
    res.render('perkebunan/kebun_8_2b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_2b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_2b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_2b = function(req, res){
    res.render('perkebunan/edit_kebun_8_2b', {title: 'Perkebunan'});
};

exports.kebun_8_2c = function(req, res){
    res.render('perkebunan/kebun_8_2c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_2c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_2c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_2c = function(req, res){
    res.render('perkebunan/edit_kebun_8_2c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_3a = function(req, res){
    res.render('perkebunan/kebun_8_3a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_3a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_3a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_3a = function(req, res){
    res.render('perkebunan/edit_kebun_8_3a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_3b = function(req, res){
    res.render('perkebunan/kebun_8_3b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_3b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_3b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_3b = function(req, res){
    res.render('perkebunan/edit_kebun_8_3b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_3c = function(req, res){
    res.render('perkebunan/kebun_8_3c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_3c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_3c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_3c = function(req, res){
    res.render('perkebunan/edit_kebun_8_3c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_4a = function(req, res){
    res.render('perkebunan/kebun_8_4a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_4a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_4a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_4a = function(req, res){
    res.render('perkebunan/edit_kebun_8_4a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_4b = function(req, res){
    res.render('perkebunan/kebun_8_4b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_4b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_4b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_4b = function(req, res){
    res.render('perkebunan/edit_kebun_8_4b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_4c = function(req, res){
    res.render('perkebunan/kebun_8_4c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_4c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_4c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_4c = function(req, res){
    res.render('perkebunan/edit_kebun_8_4c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_5a = function(req, res){
    res.render('perkebunan/kebun_8_5a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_5a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_5a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_5a = function(req, res){
    res.render('perkebunan/edit_kebun_8_5a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_5b = function(req, res){
    res.render('perkebunan/kebun_8_5b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_5b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_5b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_5b = function(req, res){
    res.render('perkebunan/edit_kebun_8_5b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_6a = function(req, res){
    res.render('perkebunan/kebun_8_6a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_6a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_6a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_6a = function(req, res){
    res.render('perkebunan/edit_kebun_8_6a', {title: 'Perkebunan'});
};

exports.kebun_8_6b = function(req, res){
    res.render('perkebunan/kebun_8_6b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_6b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_6b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_6b = function(req, res){
    res.render('perkebunan/edit_kebun_8_6b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_7a = function(req, res){
    res.render('perkebunan/kebun_8_7a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_7a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_7a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_7a = function(req, res){
    res.render('perkebunan/edit_kebun_8_7a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_7b = function(req, res){
    res.render('perkebunan/kebun_8_7b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_7b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_7b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_7b = function(req, res){
    res.render('perkebunan/edit_kebun_8_7b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_8a = function(req, res){
    res.render('perkebunan/kebun_8_8a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_8a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_8a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_8a = function(req, res){
    res.render('perkebunan/edit_kebun_8_8a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_8b = function(req, res){
    res.render('perkebunan/kebun_8_8b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_8b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_8b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_8b = function(req, res){
    res.render('perkebunan/edit_kebun_8_8b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_9a = function(req, res){
    res.render('perkebunan/kebun_8_9a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_9a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_9a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_9a = function(req, res){
    res.render('perkebunan/edit_kebun_8_9a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_9b = function(req, res){
    res.render('perkebunan/kebun_8_9b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_9b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_9b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_9b = function(req, res){
    res.render('perkebunan/edit_kebun_8_9b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_10a = function(req, res){
    res.render('perkebunan/kebun_8_10a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_10a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_10a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_10a = function(req, res){
    res.render('perkebunan/edit_kebun_8_10a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_10b = function(req, res){
    res.render('perkebunan/kebun_8_10b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_10b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_10b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_10b = function(req, res){
    res.render('perkebunan/edit_kebun_8_10b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_11a = function(req, res){
    res.render('perkebunan/kebun_8_11a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_11a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_11a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_11a = function(req, res){
    res.render('perkebunan/edit_kebun_8_11a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_11b = function(req, res){
    res.render('perkebunan/kebun_8_11b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_11b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_11b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_11b = function(req, res){
    res.render('perkebunan/edit_kebun_8_11b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_12a = function(req, res){
    res.render('perkebunan/kebun_8_12a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_12a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_12a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_12a = function(req, res){
    res.render('perkebunan/edit_kebun_8_12a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_12b = function(req, res){
    res.render('perkebunan/kebun_8_12b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_12b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_12b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_12b = function(req, res){
    res.render('perkebunan/edit_kebun_8_12b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_13a = function(req, res){
    res.render('perkebunan/kebun_8_13a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_13a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_13a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_13a = function(req, res){
    res.render('perkebunan/edit_kebun_8_13a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_13b = function(req, res){
    res.render('perkebunan/kebun_8_13b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_13b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_13b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_13b = function(req, res){
    res.render('perkebunan/edit_kebun_8_13b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_14a = function(req, res){
    res.render('perkebunan/kebun_8_14a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_14a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_14a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_14a = function(req, res){
    res.render('perkebunan/edit_kebun_8_14a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_14b = function(req, res){
    res.render('perkebunan/kebun_8_14b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_14b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_14b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_14b = function(req, res){
    res.render('perkebunan/edit_kebun_8_14b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_15a = function(req, res){
    res.render('perkebunan/kebun_8_15a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_15a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_15a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_15a = function(req, res){
    res.render('perkebunan/edit_kebun_8_15a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_15b = function(req, res){
    res.render('perkebunan/kebun_8_15b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_15b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_15b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_15b = function(req, res){
    res.render('perkebunan/edit_kebun_8_15b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_16a = function(req, res){
    res.render('perkebunan/kebun_8_16a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_16a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_16a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_16a = function(req, res){
    res.render('perkebunan/edit_kebun_8_16a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_16b = function(req, res){
    res.render('perkebunan/kebun_8_16b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_16b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_16b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_16b = function(req, res){
    res.render('perkebunan/edit_kebun_8_16b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_17a = function(req, res){
    res.render('perkebunan/kebun_8_17a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_17a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_17a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_17a = function(req, res){
    res.render('perkebunan/edit_kebun_8_17a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_17b = function(req, res){
    res.render('perkebunan/kebun_8_17b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_17b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_17b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_17b = function(req, res){
    res.render('perkebunan/edit_kebun_8_17b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_18a = function(req, res){
    res.render('perkebunan/kebun_8_18a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_18a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_18a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_18a = function(req, res){
    res.render('perkebunan/edit_kebun_8_18a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_18b = function(req, res){
    res.render('perkebunan/kebun_8_18b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_18b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_18b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_18b = function(req, res){
    res.render('perkebunan/edit_kebun_8_18b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_19a = function(req, res){
    res.render('perkebunan/kebun_8_19a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_19a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_19a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_19a = function(req, res){
    res.render('perkebunan/edit_kebun_8_19a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_19b = function(req, res){
    res.render('perkebunan/kebun_8_19b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_19b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_19b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_19b = function(req, res){
    res.render('perkebunan/edit_kebun_8_19b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_20a = function(req, res){
    res.render('perkebunan/kebun_8_20a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_20a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_20a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_20a = function(req, res){
    res.render('perkebunan/edit_kebun_8_20a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_20b = function(req, res){
    res.render('perkebunan/kebun_8_20b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_20b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_20b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_20b = function(req, res){
    res.render('perkebunan/edit_kebun_8_20b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_21a = function(req, res){
    res.render('perkebunan/kebun_8_21a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_21a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_21a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_21a = function(req, res){
    res.render('perkebunan/edit_kebun_8_21a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_21b = function(req, res){
    res.render('perkebunan/kebun_8_21b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_21b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_21b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_21b = function(req, res){
    res.render('perkebunan/edit_kebun_8_21b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_22a = function(req, res){
    res.render('perkebunan/kebun_8_22a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_22a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_22a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_22a = function(req, res){
    res.render('perkebunan/edit_kebun_8_22a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_22b = function(req, res){
    res.render('perkebunan/kebun_8_22b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_22b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_22b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_22b = function(req, res){
    res.render('perkebunan/edit_kebun_8_22b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_23a = function(req, res){
    res.render('perkebunan/kebun_8_23a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_23a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_23a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_23a = function(req, res){
    res.render('perkebunan/edit_kebun_8_23a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_23b = function(req, res){
    res.render('perkebunan/kebun_8_23b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_23b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_23b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_23b = function(req, res){
    res.render('perkebunan/edit_kebun_8_23b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_24a = function(req, res){
    res.render('perkebunan/kebun_8_24a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_24a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_24a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_24a = function(req, res){
    res.render('perkebunan/edit_kebun_8_24a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_24b = function(req, res){
    res.render('perkebunan/kebun_8_24b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_24b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_24b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_24b = function(req, res){
    res.render('perkebunan/edit_kebun_8_24b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_25a = function(req, res){
    res.render('perkebunan/kebun_8_25a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_25a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_25a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_25a = function(req, res){
    res.render('perkebunan/edit_kebun_8_25a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_25b = function(req, res){
    res.render('perkebunan/kebun_8_25b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_25b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_25b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_25b = function(req, res){
    res.render('perkebunan/edit_kebun_8_25b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_26a = function(req, res){
    res.render('perkebunan/kebun_8_26a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_26a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_26a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_26a = function(req, res){
    res.render('perkebunan/edit_kebun_8_26a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_26b = function(req, res){
    res.render('perkebunan/kebun_8_26b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_26b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_26b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_26b = function(req, res){
    res.render('perkebunan/edit_kebun_8_26b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_27a = function(req, res){
    res.render('perkebunan/kebun_8_27a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_27a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_27a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_27a = function(req, res){
    res.render('perkebunan/edit_kebun_8_27a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_27b = function(req, res){
    res.render('perkebunan/kebun_8_27b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_27b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_27b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_27b = function(req, res){
    res.render('perkebunan/edit_kebun_8_27b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_28a = function(req, res){
    res.render('perkebunan/kebun_8_28a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_28a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_28a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_28a = function(req, res){
    res.render('perkebunan/edit_kebun_8_28a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_28b = function(req, res){
    res.render('perkebunan/kebun_8_28b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_28b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_28b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_28b = function(req, res){
    res.render('perkebunan/edit_kebun_8_28b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_29a = function(req, res){
    res.render('perkebunan/kebun_8_29a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_29a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_29a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_29a = function(req, res){
    res.render('perkebunan/edit_kebun_8_29a', {title: 'Perkebunan'});
};

exports.kebun_8_29b = function(req, res){
    res.render('perkebunan/kebun_8_29b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_29b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_29b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_29b = function(req, res){
    res.render('perkebunan/edit_kebun_8_29b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_30a = function(req, res){
    res.render('perkebunan/kebun_8_30a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_30a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_30a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_30a = function(req, res){
    res.render('perkebunan/edit_kebun_8_30a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_30b = function(req, res){
    res.render('perkebunan/kebun_8_30b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_30b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_30b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_30b = function(req, res){
    res.render('perkebunan/edit_kebun_8_30b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_31a = function(req, res){
    res.render('perkebunan/kebun_8_31a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_31a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_31a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_31a = function(req, res){
    res.render('perkebunan/edit_kebun_8_31a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_31b = function(req, res){
    res.render('perkebunan/kebun_8_31b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_31b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_31b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_31b = function(req, res){
    res.render('perkebunan/edit_kebun_8_31b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_32a = function(req, res){
    res.render('perkebunan/kebun_8_32a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_32a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_32a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_32a = function(req, res){
    res.render('perkebunan/edit_kebun_8_32a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_32b = function(req, res){
    res.render('perkebunan/kebun_8_32b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_32b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_32b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_32b = function(req, res){
    res.render('perkebunan/edit_kebun_8_32b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_33a = function(req, res){
    res.render('perkebunan/kebun_8_33a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_33a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_33a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_33a = function(req, res){
    res.render('perkebunan/edit_kebun_8_33a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_33b = function(req, res){
    res.render('perkebunan/kebun_8_33b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_33b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_33b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_33b = function(req, res){
    res.render('perkebunan/edit_kebun_8_33b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_34a = function(req, res){
    res.render('perkebunan/kebun_8_34a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_34a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_34a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_34a = function(req, res){
    res.render('perkebunan/edit_kebun_8_34a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_34b = function(req, res){
    res.render('perkebunan/kebun_8_34b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_34b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_34b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_34b = function(req, res){
    res.render('perkebunan/edit_kebun_8_34b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_35a = function(req, res){
    res.render('perkebunan/kebun_8_35a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_35a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_35a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_35a = function(req, res){
    res.render('perkebunan/edit_kebun_8_35a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_35b = function(req, res){
    res.render('perkebunan/kebun_8_35b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_35b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_35b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_35b = function(req, res){
    res.render('perkebunan/edit_kebun_8_35b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_36a = function(req, res){
    res.render('perkebunan/kebun_8_36a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_36a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_36a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_36a = function(req, res){
    res.render('perkebunan/edit_kebun_8_36a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_36b = function(req, res){
    res.render('perkebunan/kebun_8_36b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_36b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_36b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_36b = function(req, res){
    res.render('perkebunan/edit_kebun_8_36b', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_37a = function(req, res){
    res.render('perkebunan/kebun_8_37a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_37a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_37a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_37a = function(req, res){
    res.render('perkebunan/edit_kebun_8_37a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_37b = function(req, res){
    res.render('perkebunan/kebun_8_37b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_37b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_37b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_37b = function(req, res){
    res.render('perkebunan/edit_kebun_8_37b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_37c = function(req, res){
    res.render('perkebunan/kebun_8_37c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_37c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_37c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_37c = function(req, res){
    res.render('perkebunan/edit_kebun_8_37c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_37d = function(req, res){
    res.render('perkebunan/kebun_8_37d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_37d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_37d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_37d = function(req, res){
    res.render('perkebunan/edit_kebun_8_37d', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_37e = function(req, res){
    res.render('perkebunan/kebun_8_37e', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_37e = function(req, res){
    res.render('perkebunan/tambah_kebun_8_37e', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_37e = function(req, res){
    res.render('perkebunan/edit_kebun_8_37e', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_38a = function(req, res){
    res.render('perkebunan/kebun_8_38a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_38a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_38a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_38a = function(req, res){
    res.render('perkebunan/edit_kebun_8_38a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_38b = function(req, res){
    res.render('perkebunan/kebun_8_38b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_38b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_38b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_38b = function(req, res){
    res.render('perkebunan/edit_kebun_8_38b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_38c = function(req, res){
    res.render('perkebunan/kebun_8_38c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_38c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_38c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_38c = function(req, res){
    res.render('perkebunan/edit_kebun_8_38c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_38d = function(req, res){
    res.render('perkebunan/kebun_8_38d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_38d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_38d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_38d = function(req, res){
    res.render('perkebunan/edit_kebun_8_38d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_39a = function(req, res){
    res.render('perkebunan/kebun_8_39a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_39a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_39a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_39a = function(req, res){
    res.render('perkebunan/edit_kebun_8_39a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_39b = function(req, res){
    res.render('perkebunan/kebun_8_39b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_39b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_39b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_39b = function(req, res){
    res.render('perkebunan/edit_kebun_8_39b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_39c = function(req, res){
    res.render('perkebunan/kebun_8_39c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_39c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_39c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_39c = function(req, res){
    res.render('perkebunan/edit_kebun_8_39c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_39d = function(req, res){
    res.render('perkebunan/kebun_8_39d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_39d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_39d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_39d = function(req, res){
    res.render('perkebunan/edit_kebun_8_39d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_40a = function(req, res){
    res.render('perkebunan/kebun_8_40a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_40a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_40a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_40a = function(req, res){
    res.render('perkebunan/edit_kebun_8_40a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_40b = function(req, res){
    res.render('perkebunan/kebun_8_40b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_40b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_40b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_40b = function(req, res){
    res.render('perkebunan/edit_kebun_8_40b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_40c = function(req, res){
    res.render('perkebunan/kebun_8_40c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_40c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_40c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_40c = function(req, res){
    res.render('perkebunan/edit_kebun_8_40c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_40d = function(req, res){
    res.render('perkebunan/kebun_8_40d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_40d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_40d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_40d = function(req, res){
    res.render('perkebunan/edit_kebun_8_40d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_41a = function(req, res){
    res.render('perkebunan/kebun_8_41a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_41a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_41a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_41a = function(req, res){
    res.render('perkebunan/edit_kebun_8_41a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_41b = function(req, res){
    res.render('perkebunan/kebun_8_41b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_41b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_41b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_41b = function(req, res){
    res.render('perkebunan/edit_kebun_8_41b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_41c = function(req, res){
    res.render('perkebunan/kebun_8_41c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_41c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_41c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_41c = function(req, res){
    res.render('perkebunan/edit_kebun_8_41c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_41d = function(req, res){
    res.render('perkebunan/kebun_8_41d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_41d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_41d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_41d = function(req, res){
    res.render('perkebunan/edit_kebun_8_41d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_42a = function(req, res){
    res.render('perkebunan/kebun_8_42a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_42a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_42a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_42a = function(req, res){
    res.render('perkebunan/edit_kebun_8_42a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_42b = function(req, res){
    res.render('perkebunan/kebun_8_42b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_42b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_42b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_42b = function(req, res){
    res.render('perkebunan/edit_kebun_8_42b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_42c = function(req, res){
    res.render('perkebunan/kebun_8_42c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_42c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_42c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_42c = function(req, res){
    res.render('perkebunan/edit_kebun_8_42c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_42d = function(req, res){
    res.render('perkebunan/kebun_8_42d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_42d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_42d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_42d = function(req, res){
    res.render('perkebunan/edit_kebun_8_42d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_43a = function(req, res){
    res.render('perkebunan/kebun_8_43a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_43a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_43a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_43a = function(req, res){
    res.render('perkebunan/edit_kebun_8_43a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_43b = function(req, res){
    res.render('perkebunan/kebun_8_43b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_43b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_43b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_43b = function(req, res){
    res.render('perkebunan/edit_kebun_8_43b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_43c = function(req, res){
    res.render('perkebunan/kebun_8_43c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_43c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_43c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_43c = function(req, res){
    res.render('perkebunan/edit_kebun_8_43c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_43d = function(req, res){
    res.render('perkebunan/kebun_8_43d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_43d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_43d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_43d = function(req, res){
    res.render('perkebunan/edit_kebun_8_43d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_44aa = function(req, res){
    res.render('perkebunan/kebun_8_44aa', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_44aa = function(req, res){
    res.render('perkebunan/tambah_kebun_8_44aa', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_44aa = function(req, res){
    res.render('perkebunan/edit_kebun_8_44aa', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_44ab = function(req, res){
    res.render('perkebunan/kebun_8_44ab', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_44ab = function(req, res){
    res.render('perkebunan/tambah_kebun_8_44ab', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_44ab = function(req, res){
    res.render('perkebunan/edit_kebun_8_44ab', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_44ac = function(req, res){
    res.render('perkebunan/kebun_8_44ac', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_44ac = function(req, res){
    res.render('perkebunan/tambah_kebun_8_44ac', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_44ac = function(req, res){
    res.render('perkebunan/edit_kebun_8_44ac', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_44b = function(req, res){
    res.render('perkebunan/kebun_8_44b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_44b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_44b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_44b = function(req, res){
    res.render('perkebunan/edit_kebun_8_44b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_44c = function(req, res){
    res.render('perkebunan/kebun_8_44c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_44c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_44c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_44c = function(req, res){
    res.render('perkebunan/edit_kebun_8_44c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_44d = function(req, res){
    res.render('perkebunan/kebun_8_44d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_44d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_44d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_44d = function(req, res){
    res.render('perkebunan/edit_kebun_8_44d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_45aa = function(req, res){
    res.render('perkebunan/kebun_8_45aa', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_45aa = function(req, res){
    res.render('perkebunan/tambah_kebun_8_45aa', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_45aa = function(req, res){
    res.render('perkebunan/edit_kebun_8_45aa', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_45ab = function(req, res){
    res.render('perkebunan/kebun_8_45ab', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_45ab = function(req, res){
    res.render('perkebunan/tambah_kebun_8_45ab', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_45ab = function(req, res){
    res.render('perkebunan/edit_kebun_8_45ab', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_45b = function(req, res){
    res.render('perkebunan/kebun_8_45b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_45b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_45b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_45b = function(req, res){
    res.render('perkebunan/edit_kebun_8_45b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_45c = function(req, res){
    res.render('perkebunan/kebun_8_45c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_45c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_45c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_45c = function(req, res){
    res.render('perkebunan/edit_kebun_8_45c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_45d = function(req, res){
    res.render('perkebunan/kebun_8_45d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_45d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_45d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_45d = function(req, res){
    res.render('perkebunan/edit_kebun_8_45d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_46aa = function(req, res){
    res.render('perkebunan/kebun_8_46aa', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_46aa = function(req, res){
    res.render('perkebunan/tambah_kebun_8_46aa', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_46aa = function(req, res){
    res.render('perkebunan/edit_kebun_8_46aa', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_46ab = function(req, res){
    res.render('perkebunan/kebun_8_46ab', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_46ab = function(req, res){
    res.render('perkebunan/tambah_kebun_8_46ab', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_46ab = function(req, res){
    res.render('perkebunan/edit_kebun_8_46ab', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_46b = function(req, res){
    res.render('perkebunan/kebun_8_46b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_46b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_46b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_46b = function(req, res){
    res.render('perkebunan/edit_kebun_8_46b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_46c = function(req, res){
    res.render('perkebunan/kebun_8_46c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_46c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_46c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_46c = function(req, res){
    res.render('perkebunan/edit_kebun_8_46c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_46d = function(req, res){
    res.render('perkebunan/kebun_8_46d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_46d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_46d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_46d = function(req, res){
    res.render('perkebunan/edit_kebun_8_46d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_47aa = function(req, res){
    res.render('perkebunan/kebun_8_47aa', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_47aa = function(req, res){
    res.render('perkebunan/tambah_kebun_8_47aa', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_47aa = function(req, res){
    res.render('perkebunan/edit_kebun_8_47aa', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_47ab = function(req, res){
    res.render('perkebunan/kebun_8_47ab', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_47ab = function(req, res){
    res.render('perkebunan/tambah_kebun_8_47ab', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_47ab = function(req, res){
    res.render('perkebunan/edit_kebun_8_47ab', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_47b = function(req, res){
    res.render('perkebunan/kebun_8_47b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_47b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_47b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_47b = function(req, res){
    res.render('perkebunan/edit_kebun_8_47b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_47c = function(req, res){
    res.render('perkebunan/kebun_8_47c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_47c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_47c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_47c = function(req, res){
    res.render('perkebunan/edit_kebun_8_47c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_47d = function(req, res){
    res.render('perkebunan/kebun_8_47d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_47d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_47d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_47d = function(req, res){
    res.render('perkebunan/edit_kebun_8_47d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_48a = function(req, res){
    res.render('perkebunan/kebun_8_48a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_48a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_48a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_48a = function(req, res){
    res.render('perkebunan/edit_kebun_8_48a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_48b = function(req, res){
    res.render('perkebunan/kebun_8_48b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_48b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_48b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_48b = function(req, res){
    res.render('perkebunan/edit_kebun_8_48b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_48c = function(req, res){
    res.render('perkebunan/kebun_8_48c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_48c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_48c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_48c = function(req, res){
    res.render('perkebunan/edit_kebun_8_48c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_48d = function(req, res){
    res.render('perkebunan/kebun_8_48d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_48d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_48d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_48d = function(req, res){
    res.render('perkebunan/edit_kebun_8_48d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_49a = function(req, res){
    res.render('perkebunan/kebun_8_49a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_49a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_49a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_49a = function(req, res){
    res.render('perkebunan/edit_kebun_8_49a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_49b = function(req, res){
    res.render('perkebunan/kebun_8_49b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_49b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_49b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_49b = function(req, res){
    res.render('perkebunan/edit_kebun_8_49b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_49c = function(req, res){
    res.render('perkebunan/kebun_8_49c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_49c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_49c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_49c = function(req, res){
    res.render('perkebunan/edit_kebun_8_49c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_49d = function(req, res){
    res.render('perkebunan/kebun_8_49d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_49d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_49d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_49d = function(req, res){
    res.render('perkebunan/edit_kebun_8_49d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_50aa = function(req, res){
    res.render('perkebunan/kebun_8_50aa', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_50aa = function(req, res){
    res.render('perkebunan/tambah_kebun_8_50aa', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_50aa = function(req, res){
    res.render('perkebunan/edit_kebun_8_50aa', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_50ab = function(req, res){
    res.render('perkebunan/kebun_8_50ab', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_50ab = function(req, res){
    res.render('perkebunan/tambah_kebun_8_50ab', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_50ab = function(req, res){
    res.render('perkebunan/edit_kebun_8_50ab', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_50b = function(req, res){
    res.render('perkebunan/kebun_8_50b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_50b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_50b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_50b = function(req, res){
    res.render('perkebunan/edit_kebun_8_50b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_50c = function(req, res){
    res.render('perkebunan/kebun_8_50c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_50c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_50c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_50c = function(req, res){
    res.render('perkebunan/edit_kebun_8_50c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_50d = function(req, res){
    res.render('perkebunan/kebun_8_50d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_50d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_50d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_50d = function(req, res){
    res.render('perkebunan/edit_kebun_8_50d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_51a = function(req, res){
    res.render('perkebunan/kebun_8_51a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_51a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_51a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_51a = function(req, res){
    res.render('perkebunan/edit_kebun_8_51a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_51b = function(req, res){
    res.render('perkebunan/kebun_8_51b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_51b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_51b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_51b = function(req, res){
    res.render('perkebunan/edit_kebun_8_51b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_51c = function(req, res){
    res.render('perkebunan/kebun_8_51c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_51c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_51c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_51c = function(req, res){
    res.render('perkebunan/edit_kebun_8_51c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_51d = function(req, res){
    res.render('perkebunan/kebun_8_51d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_51d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_51d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_51d = function(req, res){
    res.render('perkebunan/edit_kebun_8_51d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_52a = function(req, res){
    res.render('perkebunan/kebun_8_52a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_52a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_52a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_52a = function(req, res){
    res.render('perkebunan/edit_kebun_8_52a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_52b = function(req, res){
    res.render('perkebunan/kebun_8_52b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_52b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_52b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_52b = function(req, res){
    res.render('perkebunan/edit_kebun_8_52b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_52c = function(req, res){
    res.render('perkebunan/kebun_8_52c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_52c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_52c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_52c = function(req, res){
    res.render('perkebunan/edit_kebun_8_52c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_52d = function(req, res){
    res.render('perkebunan/kebun_8_52d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_52d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_52d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_52d = function(req, res){
    res.render('perkebunan/edit_kebun_8_52d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_53aa = function(req, res){
    res.render('perkebunan/kebun_8_53aa', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_53aa = function(req, res){
    res.render('perkebunan/tambah_kebun_8_53aa', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_53aa = function(req, res){
    res.render('perkebunan/edit_kebun_8_53aa', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_53ab = function(req, res){
    res.render('perkebunan/kebun_8_53ab', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_53ab = function(req, res){
    res.render('perkebunan/tambah_kebun_8_53ab', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_53ab = function(req, res){
    res.render('perkebunan/edit_kebun_8_53ab', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_53ac = function(req, res){
    res.render('perkebunan/kebun_8_53ac', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_53ac = function(req, res){
    res.render('perkebunan/tambah_kebun_8_53ac', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_53ac = function(req, res){
    res.render('perkebunan/edit_kebun_8_53ac', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_53b = function(req, res){
    res.render('perkebunan/kebun_8_53b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_53b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_53b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_53b = function(req, res){
    res.render('perkebunan/edit_kebun_8_53b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_53c = function(req, res){
    res.render('perkebunan/kebun_8_53c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_53c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_53c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_53c = function(req, res){
    res.render('perkebunan/edit_kebun_8_53c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_53d = function(req, res){
    res.render('perkebunan/kebun_8_53d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_53d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_53d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_53d = function(req, res){
    res.render('perkebunan/edit_kebun_8_53d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_54aa = function(req, res){
    res.render('perkebunan/kebun_8_54aa', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_54aa = function(req, res){
    res.render('perkebunan/tambah_kebun_8_54aa', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_54aa = function(req, res){
    res.render('perkebunan/edit_kebun_8_54aa', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_54ab = function(req, res){
    res.render('perkebunan/kebun_8_54ab', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_54ab = function(req, res){
    res.render('perkebunan/tambah_kebun_8_54ab', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_54ab = function(req, res){
    res.render('perkebunan/edit_kebun_8_54ab', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_54b = function(req, res){
    res.render('perkebunan/kebun_8_54b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_54b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_54b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_54b = function(req, res){
    res.render('perkebunan/edit_kebun_8_54b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_54c = function(req, res){
    res.render('perkebunan/kebun_8_54c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_54c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_54c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_54c = function(req, res){
    res.render('perkebunan/edit_kebun_8_54c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_54d = function(req, res){
    res.render('perkebunan/kebun_8_54d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_54d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_54d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_54d = function(req, res){
    res.render('perkebunan/edit_kebun_8_54d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_55aa = function(req, res){
    res.render('perkebunan/kebun_8_55aa', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_55aa = function(req, res){
    res.render('perkebunan/tambah_kebun_8_55aa', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_55aa = function(req, res){
    res.render('perkebunan/edit_kebun_8_55aa', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_55ab = function(req, res){
    res.render('perkebunan/kebun_8_55ab', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_55ab = function(req, res){
    res.render('perkebunan/tambah_kebun_8_55ab', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_55ab = function(req, res){
    res.render('perkebunan/edit_kebun_8_55ab', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_55b = function(req, res){
    res.render('perkebunan/kebun_8_55b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_55b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_55b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_55b = function(req, res){
    res.render('perkebunan/edit_kebun_8_55b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_55c = function(req, res){
    res.render('perkebunan/kebun_8_55c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_55c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_55c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_55c = function(req, res){
    res.render('perkebunan/edit_kebun_8_55c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_55d = function(req, res){
    res.render('perkebunan/kebun_8_55d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_55d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_55d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_55d = function(req, res){
    res.render('perkebunan/edit_kebun_8_55d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_56a = function(req, res){
    res.render('perkebunan/kebun_8_56a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_56a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_56a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_56a = function(req, res){
    res.render('perkebunan/edit_kebun_8_56a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_56b = function(req, res){
    res.render('perkebunan/kebun_8_56b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_56b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_56b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_56b = function(req, res){
    res.render('perkebunan/edit_kebun_8_56b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_56c = function(req, res){
    res.render('perkebunan/kebun_8_56c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_56c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_56c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_56c = function(req, res){
    res.render('perkebunan/edit_kebun_8_56c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_56d = function(req, res){
    res.render('perkebunan/kebun_8_56d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_56d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_56d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_56d = function(req, res){
    res.render('perkebunan/edit_kebun_8_56d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_57a = function(req, res){
    res.render('perkebunan/kebun_8_57a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_57a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_57a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_57a = function(req, res){
    res.render('perkebunan/edit_kebun_8_57a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_57b = function(req, res){
    res.render('perkebunan/kebun_8_57b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_57b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_57b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_57b = function(req, res){
    res.render('perkebunan/edit_kebun_8_57b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_57c = function(req, res){
    res.render('perkebunan/kebun_8_57c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_57c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_57c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_57c = function(req, res){
    res.render('perkebunan/edit_kebun_8_57c', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_57d = function(req, res){
    res.render('perkebunan/kebun_8_57d', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_57d = function(req, res){
    res.render('perkebunan/tambah_kebun_8_57d', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_57d = function(req, res){
    res.render('perkebunan/edit_kebun_8_57d', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_58a = function(req, res){
    res.render('perkebunan/kebun_8_58a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_58a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_58a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_58a = function(req, res){
    res.render('perkebunan/edit_kebun_8_58a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_58b = function(req, res){
    res.render('perkebunan/kebun_8_58b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_58b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_58b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_58b = function(req, res){
    res.render('perkebunan/edit_kebun_8_58b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_58c = function(req, res){
    res.render('perkebunan/kebun_8_58c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_58c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_58c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_58c = function(req, res){
    res.render('perkebunan/edit_kebun_8_58c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_59a = function(req, res){
    res.render('perkebunan/kebun_8_59a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_59a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_59a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_59a = function(req, res){
    res.render('perkebunan/edit_kebun_8_59a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_59b = function(req, res){
    res.render('perkebunan/kebun_8_59b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_59b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_59b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_59b = function(req, res){
    res.render('perkebunan/edit_kebun_8_59b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_59c = function(req, res){
    res.render('perkebunan/kebun_8_59c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_59c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_59c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_59c = function(req, res){
    res.render('perkebunan/edit_kebun_8_59c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_60a = function(req, res){
    res.render('perkebunan/kebun_8_60a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_60a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_60a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_60a = function(req, res){
    res.render('perkebunan/edit_kebun_8_60a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_60b = function(req, res){
    res.render('perkebunan/kebun_8_60b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_60b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_60b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_60b = function(req, res){
    res.render('perkebunan/edit_kebun_8_60b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_60c = function(req, res){
    res.render('perkebunan/kebun_8_60c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_60c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_60c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_60c = function(req, res){
    res.render('perkebunan/edit_kebun_8_60c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_61a = function(req, res){
    res.render('perkebunan/kebun_8_61a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_61a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_61a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_61a = function(req, res){
    res.render('perkebunan/edit_kebun_8_61a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_61b = function(req, res){
    res.render('perkebunan/kebun_8_61b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_61b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_61b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_61b = function(req, res){
    res.render('perkebunan/edit_kebun_8_61b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_61c = function(req, res){
    res.render('perkebunan/kebun_8_61c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_61c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_61c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_61c = function(req, res){
    res.render('perkebunan/edit_kebun_8_61c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_62a = function(req, res){
    res.render('perkebunan/kebun_8_62a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_62a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_62a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_62a = function(req, res){
    res.render('perkebunan/edit_kebun_8_62a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_62b = function(req, res){
    res.render('perkebunan/kebun_8_62b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_62b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_62b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_62b = function(req, res){
    res.render('perkebunan/edit_kebun_8_62b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_62c = function(req, res){
    res.render('perkebunan/kebun_8_62c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_62c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_62c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_62c = function(req, res){
    res.render('perkebunan/edit_kebun_8_62c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_63a = function(req, res){
    res.render('perkebunan/kebun_8_63a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_63a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_63a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_63a = function(req, res){
    res.render('perkebunan/edit_kebun_8_63a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_63b = function(req, res){
    res.render('perkebunan/kebun_8_63b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_63b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_63b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_63b = function(req, res){
    res.render('perkebunan/edit_kebun_8_63b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_63c = function(req, res){
    res.render('perkebunan/kebun_8_63c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_63c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_63c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_63c = function(req, res){
    res.render('perkebunan/edit_kebun_8_63c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_64a = function(req, res){
    res.render('perkebunan/kebun_8_64a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_64a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_64a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_64a = function(req, res){
    res.render('perkebunan/edit_kebun_8_64a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_64b = function(req, res){
    res.render('perkebunan/kebun_8_64b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_64b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_64b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_64b = function(req, res){
    res.render('perkebunan/edit_kebun_8_64b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_64c = function(req, res){
    res.render('perkebunan/kebun_8_64c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_64c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_64c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_64c = function(req, res){
    res.render('perkebunan/edit_kebun_8_64c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_65a = function(req, res){
    res.render('perkebunan/kebun_8_65a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_65a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_65a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_65a = function(req, res){
    res.render('perkebunan/edit_kebun_8_65a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_65b = function(req, res){
    res.render('perkebunan/kebun_8_65b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_65b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_65b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_65b = function(req, res){
    res.render('perkebunan/edit_kebun_8_65b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_65c = function(req, res){
    res.render('perkebunan/kebun_8_65c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_65c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_65c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_65c = function(req, res){
    res.render('perkebunan/edit_kebun_8_65c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_66a = function(req, res){
    res.render('perkebunan/kebun_8_66a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_66a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_66a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_66a = function(req, res){
    res.render('perkebunan/edit_kebun_8_66a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_66b = function(req, res){
    res.render('perkebunan/kebun_8_66b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_66b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_66b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_66b = function(req, res){
    res.render('perkebunan/edit_kebun_8_66b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_66c = function(req, res){
    res.render('perkebunan/kebun_8_66c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_66c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_66c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_66c = function(req, res){
    res.render('perkebunan/edit_kebun_8_66c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_67a = function(req, res){
    res.render('perkebunan/kebun_8_67a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_67a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_67a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_67a = function(req, res){
    res.render('perkebunan/edit_kebun_8_67a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_67b = function(req, res){
    res.render('perkebunan/kebun_8_67b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_67b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_67b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_67b = function(req, res){
    res.render('perkebunan/edit_kebun_8_67b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_67c = function(req, res){
    res.render('perkebunan/kebun_8_67c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_67c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_67c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_67c = function(req, res){
    res.render('perkebunan/edit_kebun_8_67c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_68a = function(req, res){
    res.render('perkebunan/kebun_8_68a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_68a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_68a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_68a = function(req, res){
    res.render('perkebunan/edit_kebun_8_68a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_68b = function(req, res){
    res.render('perkebunan/kebun_8_68b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_68b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_68b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_68b = function(req, res){
    res.render('perkebunan/edit_kebun_8_68b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_68c = function(req, res){
    res.render('perkebunan/kebun_8_68c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_68c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_68c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_68c = function(req, res){
    res.render('perkebunan/edit_kebun_8_68c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_69a = function(req, res){
    res.render('perkebunan/kebun_8_69a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_69a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_69a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_69a = function(req, res){
    res.render('perkebunan/edit_kebun_8_69a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_69b = function(req, res){
    res.render('perkebunan/kebun_8_69b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_69b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_69b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_69b = function(req, res){
    res.render('perkebunan/edit_kebun_8_69b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_69c = function(req, res){
    res.render('perkebunan/kebun_8_69c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_69c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_69c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_69c = function(req, res){
    res.render('perkebunan/edit_kebun_8_69c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_70a = function(req, res){
    res.render('perkebunan/kebun_8_70a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_70a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_70a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_70a = function(req, res){
    res.render('perkebunan/edit_kebun_8_70a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_70b = function(req, res){
    res.render('perkebunan/kebun_8_70b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_70b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_70b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_70b = function(req, res){
    res.render('perkebunan/edit_kebun_8_70b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_70c = function(req, res){
    res.render('perkebunan/kebun_8_70c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_70c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_70c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_70c = function(req, res){
    res.render('perkebunan/edit_kebun_8_70c', {title: 'Perkebunan'});
};
/*============================================================================================*/
/*======================================Rehab Teh Tahun 1=====================================*/
/*Render Tabel*/
exports.kebun_8_71a = function(req, res){
    res.render('perkebunan/kebun_8_71a', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_71a = function(req, res){
    res.render('perkebunan/tambah_kebun_8_71a', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_71a = function(req, res){
    res.render('perkebunan/edit_kebun_8_71a', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_71b = function(req, res){
    res.render('perkebunan/kebun_8_71b', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_71b = function(req, res){
    res.render('perkebunan/tambah_kebun_8_71b', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_71b = function(req, res){
    res.render('perkebunan/edit_kebun_8_71b', {title: 'Perkebunan'});
};

/*Render Tabel*/
exports.kebun_8_71c = function(req, res){
    res.render('perkebunan/kebun_8_71c', {title: 'Perkebunan'});
};

/* Tambah Data */
exports.tambah_kebun_8_71c = function(req, res){
    res.render('perkebunan/tambah_kebun_8_71c', {title: 'Perkebunan'});
};

/* Edit Data */
exports.edit_kebun_8_71c = function(req, res){
    res.render('perkebunan/edit_kebun_8_71c', {title: 'Perkebunan'});
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

/*==============================Tanaman Pangan dan Hortikultura===============================*/
exports.hortikultura = function(req, res){
    res.render('hortikultura/hortikultura', {title: 'Hortikultura'});
};
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_1a = function(req, res){
    res.render('hortikultura/hortikultura_13_1a', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_1a = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_1a', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_1a = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_1a', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_1b = function(req, res){
    res.render('hortikultura/hortikultura_13_1b', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_1b = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_1b', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_1b = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_1b', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_1c = function(req, res){
    res.render('hortikultura/hortikultura_13_1c', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_1c = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_1c', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_1c = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_1c', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_1d = function(req, res){
    res.render('hortikultura/hortikultura_13_1d', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_1d = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_1d', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_1d = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_1d', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_1e = function(req, res){
    res.render('hortikultura/hortikultura_13_1e', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_1e = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_1e', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_1e = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_1e', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_1f = function(req, res){
    res.render('hortikultura/hortikultura_13_1f', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_1f = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_1f', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_1f = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_1f', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_2a = function(req, res){
    res.render('hortikultura/hortikultura_13_2a', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_2a = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_2a', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_2a = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_2a', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_2b = function(req, res){
    res.render('hortikultura/hortikultura_13_2b', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_2b = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_2b', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_2b = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_2b', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_2c = function(req, res){
    res.render('hortikultura/hortikultura_13_2c', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_2c = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_2c', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_2c = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_2c', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_2d = function(req, res){
    res.render('hortikultura/hortikultura_13_2d', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_2d = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_2d', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_2d = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_2d', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3aa = function(req, res){
    res.render('hortikultura/hortikultura_13_3aa', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3aa = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3aa', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3aa = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3aa', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3ab = function(req, res){
    res.render('hortikultura/hortikultura_13_3ab', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3ab = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3ab', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3ab = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3ab', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3ac = function(req, res){
    res.render('hortikultura/hortikultura_13_3ac', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3ac = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3ac', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3ac = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3ac', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3ad = function(req, res){
    res.render('hortikultura/hortikultura_13_3ad', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3ad = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3ad', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3ad = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3ad', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3ae = function(req, res){
    res.render('hortikultura/hortikultura_13_3ae', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3ae = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3ae', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3ae = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3ae', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3ba = function(req, res){
    res.render('hortikultura/hortikultura_13_3ba', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3ba = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3ba', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3ba = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3ba', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3bb = function(req, res){
    res.render('hortikultura/hortikultura_13_3bb', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3bb = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3bb', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3bb = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3bb', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3bc = function(req, res){
    res.render('hortikultura/hortikultura_13_3bc', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3bc = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3bc', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3bc = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3bc', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3bd = function(req, res){
    res.render('hortikultura/hortikultura_13_3bd', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3bd = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3bd', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3bd = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3bd', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3be = function(req, res){
    res.render('hortikultura/hortikultura_13_3be', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3be = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3be', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3be = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3be', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3ca = function(req, res){
    res.render('hortikultura/hortikultura_13_3ca', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3ca = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3ca', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3ca = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3ca', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3cb = function(req, res){
    res.render('hortikultura/hortikultura_13_3cb', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3cb = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3cb', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3cb = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3cb', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3cc = function(req, res){
    res.render('hortikultura/hortikultura_13_3cc', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3cc = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3cc', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3cc = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3cc', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3cd = function(req, res){
    res.render('hortikultura/hortikultura_13_3cd', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3cd = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3cd', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3cd = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3cd', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3ce = function(req, res){
    res.render('hortikultura/hortikultura_13_3ce', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3ce = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3ce', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3ce = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3ce', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3da = function(req, res){
    res.render('hortikultura/hortikultura_13_3da', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3da = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3da', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3da = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3da', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3db = function(req, res){
    res.render('hortikultura/hortikultura_13_3db', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3db = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3db', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3db = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3db', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3dc = function(req, res){
    res.render('hortikultura/hortikultura_13_3dc', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3dc = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3dc', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3dc = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3dc', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3dd = function(req, res){
    res.render('hortikultura/hortikultura_13_3dd', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3dd = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3dd', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3dd = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3dd', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3de = function(req, res){
    res.render('hortikultura/hortikultura_13_3de', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3de = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3de', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3de = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3de', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3ea = function(req, res){
    res.render('hortikultura/hortikultura_13_3ea', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3ea = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3ea', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3ea = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3ea', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3eb = function(req, res){
    res.render('hortikultura/hortikultura_13_3eb', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3eb = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3eb', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3eb = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3eb', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3ec = function(req, res){
    res.render('hortikultura/hortikultura_13_3ec', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3ec = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3ec', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3ec = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3ec', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3fa = function(req, res){
    res.render('hortikultura/hortikultura_13_3fa', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3fa = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3fa', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3fa = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3fa', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3fb = function(req, res){
    res.render('hortikultura/hortikultura_13_3fb', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3fb = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3fb', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3fb = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3fb', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3fc = function(req, res){
    res.render('hortikultura/hortikultura_13_3fc', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3fc = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3fc', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3fc = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3fc', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3ga = function(req, res){
    res.render('hortikultura/hortikultura_13_3ga', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3ga = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3ga', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3ga = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3ga', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3gb = function(req, res){
    res.render('hortikultura/hortikultura_13_3gb', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3gb = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3gb', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3gb = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3gb', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_3gc = function(req, res){
    res.render('hortikultura/hortikultura_13_3gc', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_3gc = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_3gc', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_3gc = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_3gc', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4aa = function(req, res){
    res.render('hortikultura/hortikultura_13_4aa', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4aa = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4aa', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4aa = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4aa', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ab = function(req, res){
    res.render('hortikultura/hortikultura_13_4ab', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ab = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ab', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ab = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ab', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ac = function(req, res){
    res.render('hortikultura/hortikultura_13_4ac', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ac = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ac', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ac = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ac', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ad = function(req, res){
    res.render('hortikultura/hortikultura_13_4ad', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ad = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ad', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ad = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ad', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ae = function(req, res){
    res.render('hortikultura/hortikultura_13_4ae', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ae = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ae', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ae = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ae', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4af = function(req, res){
    res.render('hortikultura/hortikultura_13_4af', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4af = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4af', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4af = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4af', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ag = function(req, res){
    res.render('hortikultura/hortikultura_13_4ag', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ag = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ag', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ag = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ag', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ba = function(req, res){
    res.render('hortikultura/hortikultura_13_4ba', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ba = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ba', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ba = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ba', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4bb = function(req, res){
    res.render('hortikultura/hortikultura_13_4bb', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4bb = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4bb', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4bb = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4bb', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4bc = function(req, res){
    res.render('hortikultura/hortikultura_13_4bc', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4bc = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4bc', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4bc = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4bc', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4bd = function(req, res){
    res.render('hortikultura/hortikultura_13_4bd', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4bd = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4bd', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4bd = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4bd', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4be = function(req, res){
    res.render('hortikultura/hortikultura_13_4be', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4be = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4be', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4be = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4be', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4bf = function(req, res){
    res.render('hortikultura/hortikultura_13_4bf', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4bf = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4bf', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4bf = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4bf', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4bg = function(req, res){
    res.render('hortikultura/hortikultura_13_4bg', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4bg = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4bg', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4bg = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4bg', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ca = function(req, res){
    res.render('hortikultura/hortikultura_13_4ca', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ca = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ca', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ca = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ca', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4cb = function(req, res){
    res.render('hortikultura/hortikultura_13_4cb', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4cb = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4cb', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4cb = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4cb', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4cc = function(req, res){
    res.render('hortikultura/hortikultura_13_4cc', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4cc = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4cc', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4cc = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4cc', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4cd = function(req, res){
    res.render('hortikultura/hortikultura_13_4cd', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4cd = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4cd', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4cd = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4cd', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ce = function(req, res){
    res.render('hortikultura/hortikultura_13_4ce', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ce = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ce', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ce = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ce', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4cf = function(req, res){
    res.render('hortikultura/hortikultura_13_4cf', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4cf = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4cf', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4cf = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4cf', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4cg = function(req, res){
    res.render('hortikultura/hortikultura_13_4cg', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4cg = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4cg', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4cg = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4cg', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4da = function(req, res){
    res.render('hortikultura/hortikultura_13_4da', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4da = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4da', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4da = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4da', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4db = function(req, res){
    res.render('hortikultura/hortikultura_13_4db', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4db = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4db', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4db = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4db', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4dc = function(req, res){
    res.render('hortikultura/hortikultura_13_4dc', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4dc = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4dc', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4dc = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4dc', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4dd = function(req, res){
    res.render('hortikultura/hortikultura_13_4dd', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4dd = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4dd', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4dd = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4dd', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4de = function(req, res){
    res.render('hortikultura/hortikultura_13_4de', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4de = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4de', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4de = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4de', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4df = function(req, res){
    res.render('hortikultura/hortikultura_13_4df', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4df = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4df', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4df = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4df', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4dg = function(req, res){
    res.render('hortikultura/hortikultura_13_4dg', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4dg = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4dg', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4dg = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4dg', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ea = function(req, res){
    res.render('hortikultura/hortikultura_13_4ea', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ea = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ea', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ea = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ea', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4eb = function(req, res){
    res.render('hortikultura/hortikultura_13_4eb', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4eb = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4eb', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4eb = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4eb', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ec = function(req, res){
    res.render('hortikultura/hortikultura_13_4ec', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ec = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ec', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ec = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ec', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ed = function(req, res){
    res.render('hortikultura/hortikultura_13_4ed', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ed = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ed', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ed = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ed', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ee = function(req, res){
    res.render('hortikultura/hortikultura_13_4ee', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ee = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ee', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ee = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ee', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ef = function(req, res){
    res.render('hortikultura/hortikultura_13_4ef', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ef = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ef', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ef = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ef', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4eg = function(req, res){
    res.render('hortikultura/hortikultura_13_4eg', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4eg = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4eg', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4eg = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4eg', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4fa = function(req, res){
    res.render('hortikultura/hortikultura_13_4fa', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4fa = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4fa', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4fa = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4fa', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4fb = function(req, res){
    res.render('hortikultura/hortikultura_13_4fb', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4fb = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4fb', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4fb = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4fb', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4fc = function(req, res){
    res.render('hortikultura/hortikultura_13_4fc', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4fc = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4fc', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4fc = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4fc', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4fd = function(req, res){
    res.render('hortikultura/hortikultura_13_4fd', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4fd = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4fd', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4fd = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4fd', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4fe = function(req, res){
    res.render('hortikultura/hortikultura_13_4fe', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4fe = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4fe', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4fe = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4fe', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ff = function(req, res){
    res.render('hortikultura/hortikultura_13_4ff', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ff = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ff', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ff = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ff', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4fg = function(req, res){
    res.render('hortikultura/hortikultura_13_4fg', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4fg = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4fg', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4fg = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4fg', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ga = function(req, res){
    res.render('hortikultura/hortikultura_13_4ga', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ga = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ga', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ga = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ga', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4gb = function(req, res){
    res.render('hortikultura/hortikultura_13_4gb', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4gb = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4gb', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4gb = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4gb', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4gc = function(req, res){
    res.render('hortikultura/hortikultura_13_4gc', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4gc = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4gc', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4gc = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4gc', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4gd = function(req, res){
    res.render('hortikultura/hortikultura_13_4gd', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4gd = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4gd', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4gd = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4gd', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4ge = function(req, res){
    res.render('hortikultura/hortikultura_13_4ge', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4ge = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4ge', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4ge = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4ge', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4gf = function(req, res){
    res.render('hortikultura/hortikultura_13_4gf', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4gf = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4gf', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4gf = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4gf', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_4gg = function(req, res){
    res.render('hortikultura/hortikultura_13_4gg', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_4gg = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_4gg', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_4gg = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_4gg', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_5a = function(req, res){
    res.render('hortikultura/hortikultura_13_5a', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_5a = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_5a', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_5a = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_5a', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_5b = function(req, res){
    res.render('hortikultura/hortikultura_13_5b', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_5b = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_5b', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_5b = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_5b', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_5c = function(req, res){
    res.render('hortikultura/hortikultura_13_5c', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_5c = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_5c', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_5c = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_5c', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_5d = function(req, res){
    res.render('hortikultura/hortikultura_13_5d', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_5d = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_5d', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_5d = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_5d', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_5e = function(req, res){
    res.render('hortikultura/hortikultura_13_5e', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_5e = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_5e', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_5e = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_5e', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_5f = function(req, res){
    res.render('hortikultura/hortikultura_13_5f', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_5f = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_5f', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_5f = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_5f', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_6a = function(req, res){
    res.render('hortikultura/hortikultura_13_6a', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_6a = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_6a', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_6a = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_6a', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_6b = function(req, res){
    res.render('hortikultura/hortikultura_13_6b', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_6b = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_6b', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_6b = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_6b', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_6c = function(req, res){
    res.render('hortikultura/hortikultura_13_6c', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_6c = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_6c', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_6c = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_6c', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_7a = function(req, res){
    res.render('hortikultura/hortikultura_13_7a', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_7a = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_7a', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_7a = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_7a', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_7b = function(req, res){
    res.render('hortikultura/hortikultura_13_7b', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_7b = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_7b', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_7b = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_7b', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_7c = function(req, res){
    res.render('hortikultura/hortikultura_13_7c', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_7c = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_7c', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_7c = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_7c', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_8a = function(req, res){
    res.render('hortikultura/hortikultura_13_8a', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_8a = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_8a', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_8a = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_8a', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_8b = function(req, res){
    res.render('hortikultura/hortikultura_13_8b', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_8b = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_8b', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_8b = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_8b', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_8c = function(req, res){
    res.render('hortikultura/hortikultura_13_8c', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_8c = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_8c', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_8c = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_8c', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_9 = function(req, res){
    res.render('hortikultura/hortikultura_13_9', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_9 = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_9', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_9 = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_9', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_10 = function(req, res){
    res.render('hortikultura/hortikultura_13_10', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_10 = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_10', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_10 = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_10', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_11a = function(req, res){
    res.render('hortikultura/hortikultura_13_11a', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_11a = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_11a', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_11a = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_11a', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_11b = function(req, res){
    res.render('hortikultura/hortikultura_13_11b', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_11b = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_11b', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_11b = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_11b', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_11c = function(req, res){
    res.render('hortikultura/hortikultura_13_11c', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_11c = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_11c', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_11c = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_11c', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_12 = function(req, res){
    res.render('hortikultura/hortikultura_13_12', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_12 = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_12', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_12 = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_12', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_13 = function(req, res){
    res.render('hortikultura/hortikultura_13_13', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_13 = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_13', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_13 = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_13', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_14 = function(req, res){
    res.render('hortikultura/hortikultura_13_14', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_14 = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_14', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_14 = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_14', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_15a = function(req, res){
    res.render('hortikultura/hortikultura_13_15a', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_15a = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_15a', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_15a = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_15a', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_15b = function(req, res){
    res.render('hortikultura/hortikultura_13_15b', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_15b = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_15b', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_15b = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_15b', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_15c = function(req, res){
    res.render('hortikultura/hortikultura_13_15c', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_15c = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_15c', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_15c = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_15c', {title: 'Hortikultura'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.hortikultura_13_15d = function(req, res){
    res.render('hortikultura/hortikultura_13_15d', {title: 'Hortikultura'});
};

/* Tambah Data */
exports.tambah_hortikultura_13_15d = function(req, res){
    res.render('hortikultura/tambah_hortikultura_13_15d', {title: 'Hortikultura'});
};

/* Edit Data */
exports.edit_hortikultura_13_15d = function(req, res){
    res.render('hortikultura/edit_hortikultura_13_15d', {title: 'Hortikultura'});
};
/*============================================================================================*/

/*=========================================Kehutanan==========================================*/
exports.kehutanan = function(req, res){
    res.render('Kehutanan/kehutanan', {title: 'Kehutanan'});
};
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_1a = function(req, res){
    res.render('kehutanan/kehutanan_14_1a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_1a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_1a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_1a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_1a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_1b = function(req, res){
    res.render('kehutanan/kehutanan_14_1b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_1b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_1b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_1b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_1b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_1c = function(req, res){
    res.render('kehutanan/kehutanan_14_1c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_1c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_1c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_1c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_1c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_1d = function(req, res){
    res.render('kehutanan/kehutanan_14_1d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_1d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_1d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_1d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_1d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_2a = function(req, res){
    res.render('kehutanan/kehutanan_14_2a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_2a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_2a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_2a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_2a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_2b = function(req, res){
    res.render('kehutanan/kehutanan_14_2b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_2b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_2b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_2b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_2b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_2c = function(req, res){
    res.render('kehutanan/kehutanan_14_2c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_2c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_2c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_2c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_2c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_2d = function(req, res){
    res.render('kehutanan/kehutanan_14_2d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_2d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_2d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_2d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_2d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_3a = function(req, res){
    res.render('kehutanan/kehutanan_14_3a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_3a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_3a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_3a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_3a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_3b = function(req, res){
    res.render('kehutanan/kehutanan_14_3b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_3b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_3b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_3b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_3b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_3c = function(req, res){
    res.render('kehutanan/kehutanan_14_3c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_3c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_3c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_3c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_3c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_3d = function(req, res){
    res.render('kehutanan/kehutanan_14_3d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_3d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_3d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_3d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_3d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_4a = function(req, res){
    res.render('kehutanan/kehutanan_14_4a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_4a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_4a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_4a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_4a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_4b = function(req, res){
    res.render('kehutanan/kehutanan_14_4b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_4b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_4b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_4b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_4b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_5a = function(req, res){
    res.render('kehutanan/kehutanan_14_5a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_5a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_5a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_5a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_5a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_5b = function(req, res){
    res.render('kehutanan/kehutanan_14_5b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_5b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_5b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_5b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_5b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_6a = function(req, res){
    res.render('kehutanan/kehutanan_14_6a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_6a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_6a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_6a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_6a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_6b = function(req, res){
    res.render('kehutanan/kehutanan_14_6b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_6b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_6b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_6b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_6b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_6c = function(req, res){
    res.render('kehutanan/kehutanan_14_6c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_6c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_6c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_6c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_6c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_6d = function(req, res){
    res.render('kehutanan/kehutanan_14_6d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_6d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_6d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_6d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_6d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_7a = function(req, res){
    res.render('kehutanan/kehutanan_14_7a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_7a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_7a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_7a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_7a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_7b = function(req, res){
    res.render('kehutanan/kehutanan_14_7b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_7b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_7b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_7b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_7b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_7c = function(req, res){
    res.render('kehutanan/kehutanan_14_7c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_7c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_7c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_7c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_7c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_7d = function(req, res){
    res.render('kehutanan/kehutanan_14_7d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_7d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_7d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_7d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_7d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_8a = function(req, res){
    res.render('kehutanan/kehutanan_14_8a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_8a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_8a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_8a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_8a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_8b = function(req, res){
    res.render('kehutanan/kehutanan_14_8b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_8b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_8b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_8b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_8b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_8c = function(req, res){
    res.render('kehutanan/kehutanan_14_8c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_8c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_8c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_8c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_8c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_8d = function(req, res){
    res.render('kehutanan/kehutanan_14_8d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_8d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_8d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_8d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_8d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_9a = function(req, res){
    res.render('kehutanan/kehutanan_14_9a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_9a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_9a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_9a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_9a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_9b = function(req, res){
    res.render('kehutanan/kehutanan_14_9b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_9b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_9b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_9b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_9b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_10a = function(req, res){
    res.render('kehutanan/kehutanan_14_10a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_10a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_10a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_10a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_10a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_10b = function(req, res){
    res.render('kehutanan/kehutanan_14_10b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_10b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_10b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_10b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_10b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_10c = function(req, res){
    res.render('kehutanan/kehutanan_14_10c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_10c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_10c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_10c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_10c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_11a = function(req, res){
    res.render('kehutanan/kehutanan_14_11a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_11a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_11a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_11a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_11a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_11b = function(req, res){
    res.render('kehutanan/kehutanan_14_11b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_11b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_11b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_11b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_11b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_11c = function(req, res){
    res.render('kehutanan/kehutanan_14_11c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_11c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_11c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_11c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_11c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_12a = function(req, res){
    res.render('kehutanan/kehutanan_14_12a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_12a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_12a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_12a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_12a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_12b = function(req, res){
    res.render('kehutanan/kehutanan_14_12b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_12b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_12b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_12b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_12b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_13a = function(req, res){
    res.render('kehutanan/kehutanan_14_13a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_13a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_13a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_13a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_13a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_13b = function(req, res){
    res.render('kehutanan/kehutanan_14_13b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_13b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_13b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_13b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_13b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_14a = function(req, res){
    res.render('kehutanan/kehutanan_14_14a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_14a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_14a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_14a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_14a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_14b = function(req, res){
    res.render('kehutanan/kehutanan_14_14b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_14b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_14b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_14b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_14b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_14c = function(req, res){
    res.render('kehutanan/kehutanan_14_14c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_14c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_14c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_14c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_14c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_14d = function(req, res){
    res.render('kehutanan/kehutanan_14_14d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_14d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_14d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_14d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_14d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_15a = function(req, res){
    res.render('kehutanan/kehutanan_14_15a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_15a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_15a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_15a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_15a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_15b = function(req, res){
    res.render('kehutanan/kehutanan_14_15b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_15b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_15b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_15b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_15b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_16a = function(req, res){
    res.render('kehutanan/kehutanan_14_16a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_16a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_16a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_16a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_16a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_16b = function(req, res){
    res.render('kehutanan/kehutanan_14_16b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_16b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_16b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_16b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_16b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_17a = function(req, res){
    res.render('kehutanan/kehutanan_14_17a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_17a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_17a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_17a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_17a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_17b = function(req, res){
    res.render('kehutanan/kehutanan_14_17b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_17b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_17b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_17b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_17b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_18a = function(req, res){
    res.render('kehutanan/kehutanan_14_18a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_18a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_18a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_18a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_18a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_18b = function(req, res){
    res.render('kehutanan/kehutanan_14_18b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_18b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_18b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_18b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_18b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_19a = function(req, res){
    res.render('kehutanan/kehutanan_14_19a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_19a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_19a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_19a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_19a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_19b = function(req, res){
    res.render('kehutanan/kehutanan_14_19b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_19b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_19b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_19b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_19b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_19c = function(req, res){
    res.render('kehutanan/kehutanan_14_19c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_19c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_19c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_19c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_19c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_19d = function(req, res){
    res.render('kehutanan/kehutanan_14_19d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_19d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_19d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_19d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_19d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_20a = function(req, res){
    res.render('kehutanan/kehutanan_14_20a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_20a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_20a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_20a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_20a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_20b = function(req, res){
    res.render('kehutanan/kehutanan_14_20b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_20b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_20b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_20b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_20b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_20c = function(req, res){
    res.render('kehutanan/kehutanan_14_20c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_20c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_20c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_20c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_20c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_20d = function(req, res){
    res.render('kehutanan/kehutanan_14_20d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_20d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_20d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_20d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_20d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_21a = function(req, res){
    res.render('kehutanan/kehutanan_14_21a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_21a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_21a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_21a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_21a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_21b = function(req, res){
    res.render('kehutanan/kehutanan_14_21b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_21b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_21b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_21b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_21b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_21c = function(req, res){
    res.render('kehutanan/kehutanan_14_21c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_21c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_21c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_21c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_21c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_21d = function(req, res){
    res.render('kehutanan/kehutanan_14_21d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_21d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_21d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_21d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_21d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_22a = function(req, res){
    res.render('kehutanan/kehutanan_14_22a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_22a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_22a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_22a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_22a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_22b = function(req, res){
    res.render('kehutanan/kehutanan_14_22b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_22b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_22b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_22b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_22b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_23a = function(req, res){
    res.render('kehutanan/kehutanan_14_23a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_23a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_23a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_23a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_23a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_23b = function(req, res){
    res.render('kehutanan/kehutanan_14_23b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_23b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_23b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_23b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_23b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_24a = function(req, res){
    res.render('kehutanan/kehutanan_14_24a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_24a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_24a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_24a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_24a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_24b = function(req, res){
    res.render('kehutanan/kehutanan_14_24b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_24b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_24b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_24b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_24b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_25a = function(req, res){
    res.render('kehutanan/kehutanan_14_25a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_25a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_25a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_25a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_25a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_25b = function(req, res){
    res.render('kehutanan/kehutanan_14_25b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_25b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_25b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_25b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_25b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_26a = function(req, res){
    res.render('kehutanan/kehutanan_14_26a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_26a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_26a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_26a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_26a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_26b = function(req, res){
    res.render('kehutanan/kehutanan_14_26b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_26b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_26b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_26b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_26b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_27a = function(req, res){
    res.render('kehutanan/kehutanan_14_27a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_27a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_27a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_27a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_27a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_27b = function(req, res){
    res.render('kehutanan/kehutanan_14_27b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_27b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_27b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_27b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_27b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_28a = function(req, res){
    res.render('kehutanan/kehutanan_14_28a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_28a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_28a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_28a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_28a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_28b = function(req, res){
    res.render('kehutanan/kehutanan_14_28b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_28b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_28b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_28b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_28b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_28c = function(req, res){
    res.render('kehutanan/kehutanan_14_28c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_28c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_28c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_28c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_28c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_28d = function(req, res){
    res.render('kehutanan/kehutanan_14_28d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_28d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_28d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_28d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_28d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_29a = function(req, res){
    res.render('kehutanan/kehutanan_14_29a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_29a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_29a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_29a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_29a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_29b = function(req, res){
    res.render('kehutanan/kehutanan_14_29b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_29b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_29b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_29b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_29b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_29c = function(req, res){
    res.render('kehutanan/kehutanan_14_29c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_29c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_29c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_29c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_29c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_29d = function(req, res){
    res.render('kehutanan/kehutanan_14_29d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_29d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_29d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_29d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_29d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_30a = function(req, res){
    res.render('kehutanan/kehutanan_14_30a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_30a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_30a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_30a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_30a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_30b = function(req, res){
    res.render('kehutanan/kehutanan_14_30b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_30b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_30b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_30b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_30b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_30c = function(req, res){
    res.render('kehutanan/kehutanan_14_30c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_30c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_30c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_30c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_30c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_30d = function(req, res){
    res.render('kehutanan/kehutanan_14_30d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_30d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_30d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_30d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_30d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_31 = function(req, res){
    res.render('kehutanan/kehutanan_14_31', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_31 = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_31', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_31 = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_31', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_32 = function(req, res){
    res.render('kehutanan/kehutanan_14_32', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_32 = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_32', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_32 = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_32', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_33 = function(req, res){
    res.render('kehutanan/kehutanan_14_33', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_33 = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_33', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_33 = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_33', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_34 = function(req, res){
    res.render('kehutanan/kehutanan_14_34', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_34 = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_34', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_34 = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_34', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_35 = function(req, res){
    res.render('kehutanan/kehutanan_14_35', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_35 = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_35', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_35 = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_35', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_36 = function(req, res){
    res.render('kehutanan/kehutanan_14_36', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_36 = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_36', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_36 = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_36', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_37 = function(req, res){
    res.render('kehutanan/kehutanan_14_37', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_37 = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_37', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_37 = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_37', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_38a = function(req, res){
    res.render('kehutanan/kehutanan_14_38a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_38a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_38a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_38a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_38a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_38b = function(req, res){
    res.render('kehutanan/kehutanan_14_38b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_38b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_38b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_38b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_38b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_39a = function(req, res){
    res.render('kehutanan/kehutanan_14_39a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_39a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_39a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_39a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_39a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_39b = function(req, res){
    res.render('kehutanan/kehutanan_14_39b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_39b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_39b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_39b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_39b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_39c = function(req, res){
    res.render('kehutanan/kehutanan_14_39c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_39c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_39c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_39c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_39c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_39d = function(req, res){
    res.render('kehutanan/kehutanan_14_39d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_39d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_39d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_39d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_39d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_40a = function(req, res){
    res.render('kehutanan/kehutanan_14_40a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_40a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_40a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_40a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_40a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_40b = function(req, res){
    res.render('kehutanan/kehutanan_14_40b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_40b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_40b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_40b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_40b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_40c = function(req, res){
    res.render('kehutanan/kehutanan_14_40c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_40c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_40c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_40c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_40c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_40d = function(req, res){
    res.render('kehutanan/kehutanan_14_40d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_40d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_40d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_40d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_40d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_41a = function(req, res){
    res.render('kehutanan/kehutanan_14_41a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_41a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_41a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_41a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_41a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_41b = function(req, res){
    res.render('kehutanan/kehutanan_14_41b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_41b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_41b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_41b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_41b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_41c = function(req, res){
    res.render('kehutanan/kehutanan_14_41c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_41c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_41c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_41c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_41c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_41d = function(req, res){
    res.render('kehutanan/kehutanan_14_41d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_41d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_41d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_41d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_41d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_42a = function(req, res){
    res.render('kehutanan/kehutanan_14_42a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_42a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_42a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_42a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_42a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_42b = function(req, res){
    res.render('kehutanan/kehutanan_14_42b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_42b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_42b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_42b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_42b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_42c = function(req, res){
    res.render('kehutanan/kehutanan_14_42c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_42c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_42c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_42c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_42c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_43a = function(req, res){
    res.render('kehutanan/kehutanan_14_43a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_43a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_43a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_43a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_43a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_43b = function(req, res){
    res.render('kehutanan/kehutanan_14_43b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_43b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_43b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_43b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_43b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_43c = function(req, res){
    res.render('kehutanan/kehutanan_14_43c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_43c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_43c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_43c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_43c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_43d = function(req, res){
    res.render('kehutanan/kehutanan_14_43d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_43d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_43d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_43d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_43d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_43e = function(req, res){
    res.render('kehutanan/kehutanan_14_43e', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_43e = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_43e', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_43e = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_43e', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_44a = function(req, res){
    res.render('kehutanan/kehutanan_14_44a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_44a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_44a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_44a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_44a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_44b = function(req, res){
    res.render('kehutanan/kehutanan_14_44b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_44b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_44b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_44b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_44b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_44c = function(req, res){
    res.render('kehutanan/kehutanan_14_44c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_44c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_44c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_44c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_44c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_45a = function(req, res){
    res.render('kehutanan/kehutanan_14_45a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_45a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_45a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_45a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_45a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_45b = function(req, res){
    res.render('kehutanan/kehutanan_14_45b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_45b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_45b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_45b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_45b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_45c = function(req, res){
    res.render('kehutanan/kehutanan_14_45c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_45c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_45c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_45c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_45c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_46a = function(req, res){
    res.render('kehutanan/kehutanan_14_46a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_46a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_46a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_46a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_46a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_46b = function(req, res){
    res.render('kehutanan/kehutanan_14_46b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_46b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_46b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_46b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_46b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_46c = function(req, res){
    res.render('kehutanan/kehutanan_14_46c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_46c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_46c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_46c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_46c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_47a = function(req, res){
    res.render('kehutanan/kehutanan_14_47a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_47a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_47a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_47a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_47a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_47b = function(req, res){
    res.render('kehutanan/kehutanan_14_47b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_47b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_47b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_47b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_47b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_47c = function(req, res){
    res.render('kehutanan/kehutanan_14_47c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_47c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_47c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_47c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_47c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_48a = function(req, res){
    res.render('kehutanan/kehutanan_14_48a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_48a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_48a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_48a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_48a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_48b = function(req, res){
    res.render('kehutanan/kehutanan_14_48b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_48b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_48b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_48b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_48b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_48c = function(req, res){
    res.render('kehutanan/kehutanan_14_48c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_48c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_48c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_48c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_48c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_49a = function(req, res){
    res.render('kehutanan/kehutanan_14_49a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_49a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_49a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_49a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_49a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_49b = function(req, res){
    res.render('kehutanan/kehutanan_14_49b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_49b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_49b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_49b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_49b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_49c = function(req, res){
    res.render('kehutanan/kehutanan_14_49c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_49c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_49c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_49c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_49c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_50a = function(req, res){
    res.render('kehutanan/kehutanan_14_50a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_50a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_50a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_50a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_50a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_50b = function(req, res){
    res.render('kehutanan/kehutanan_14_50b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_50b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_50b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_50b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_50b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_50c = function(req, res){
    res.render('kehutanan/kehutanan_14_50c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_50c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_50c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_50c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_50c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_51a = function(req, res){
    res.render('kehutanan/kehutanan_14_51a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_51a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_51a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_51a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_51a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_51b = function(req, res){
    res.render('kehutanan/kehutanan_14_51b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_51b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_51b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_51b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_51b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_51c = function(req, res){
    res.render('kehutanan/kehutanan_14_51c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_51c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_51c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_51c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_51c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_52a = function(req, res){
    res.render('kehutanan/kehutanan_14_52a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_52a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_52a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_52a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_52a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_52b = function(req, res){
    res.render('kehutanan/kehutanan_14_52b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_52b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_52b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_52b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_52b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_52c = function(req, res){
    res.render('kehutanan/kehutanan_14_52c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_52c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_52c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_52c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_52c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_53a = function(req, res){
    res.render('kehutanan/kehutanan_14_53a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_53a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_53a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_53a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_53a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_53b = function(req, res){
    res.render('kehutanan/kehutanan_14_53b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_53b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_53b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_53b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_53b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_53c = function(req, res){
    res.render('kehutanan/kehutanan_14_53c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_53c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_53c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_53c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_53c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_54a = function(req, res){
    res.render('kehutanan/kehutanan_14_54a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_54a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_54a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_54a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_54a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_54b = function(req, res){
    res.render('kehutanan/kehutanan_14_54b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_54b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_54b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_54b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_54b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_55a = function(req, res){
    res.render('kehutanan/kehutanan_14_55a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_55a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_55a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_55a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_55a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_55b = function(req, res){
    res.render('kehutanan/kehutanan_14_55b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_55b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_55b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_55b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_55b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_55c = function(req, res){
    res.render('kehutanan/kehutanan_14_55c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_55c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_55c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_55c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_55c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_55d = function(req, res){
    res.render('kehutanan/kehutanan_14_55d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_55d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_55d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_55d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_55d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_55e = function(req, res){
    res.render('kehutanan/kehutanan_14_55e', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_55e = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_55e', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_55e = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_55e', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_55f = function(req, res){
    res.render('kehutanan/kehutanan_14_55f', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_55f = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_55f', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_55f = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_55f', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_55g = function(req, res){
    res.render('kehutanan/kehutanan_14_55g', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_55g = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_55g', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_55g = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_55g', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_55h = function(req, res){
    res.render('kehutanan/kehutanan_14_55h', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_55h = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_55h', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_55h = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_55h', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_56a = function(req, res){
    res.render('kehutanan/kehutanan_14_56a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_56a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_56a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_56a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_56a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_56b = function(req, res){
    res.render('kehutanan/kehutanan_14_56b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_56b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_56b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_56b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_56b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_56c = function(req, res){
    res.render('kehutanan/kehutanan_14_56c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_56c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_56c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_56c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_56c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_57a = function(req, res){
    res.render('kehutanan/kehutanan_14_57a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_57a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_57a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_57a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_57a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_57b = function(req, res){
    res.render('kehutanan/kehutanan_14_57b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_57b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_57b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_57b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_57b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_57c = function(req, res){
    res.render('kehutanan/kehutanan_14_57c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_57c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_57c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_57c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_57c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_58a = function(req, res){
    res.render('kehutanan/kehutanan_14_58a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_58a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_58a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_58a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_58a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_58b = function(req, res){
    res.render('kehutanan/kehutanan_14_58b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_58b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_58b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_58b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_58b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_58c = function(req, res){
    res.render('kehutanan/kehutanan_14_58c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_58c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_58c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_58c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_58c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_59a = function(req, res){
    res.render('kehutanan/kehutanan_14_59a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_59a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_59a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_59a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_59a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_59b = function(req, res){
    res.render('kehutanan/kehutanan_14_59b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_59b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_59b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_59b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_59b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_59c = function(req, res){
    res.render('kehutanan/kehutanan_14_59c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_59c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_59c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_59c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_59c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_60a = function(req, res){
    res.render('kehutanan/kehutanan_14_60a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_60a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_60a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_60a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_60a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_60b = function(req, res){
    res.render('kehutanan/kehutanan_14_60b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_60b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_60b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_60b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_60b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_60c = function(req, res){
    res.render('kehutanan/kehutanan_14_60c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_60c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_60c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_60c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_60c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_61a = function(req, res){
    res.render('kehutanan/kehutanan_14_61a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_61a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_61a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_61a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_61a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_61b = function(req, res){
    res.render('kehutanan/kehutanan_14_61b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_61b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_61b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_61b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_61b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_61c = function(req, res){
    res.render('kehutanan/kehutanan_14_61c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_61c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_61c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_61c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_61c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_62a = function(req, res){
    res.render('kehutanan/kehutanan_14_62a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_62a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_62a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_62a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_62a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_62b = function(req, res){
    res.render('kehutanan/kehutanan_14_62b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_62b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_62b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_62b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_62b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_62c = function(req, res){
    res.render('kehutanan/kehutanan_14_62c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_62c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_62c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_62c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_62c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_63a = function(req, res){
    res.render('kehutanan/kehutanan_14_63a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_63a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_63a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_63a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_63a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_63b = function(req, res){
    res.render('kehutanan/kehutanan_14_63b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_63b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_63b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_63b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_63b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_63c = function(req, res){
    res.render('kehutanan/kehutanan_14_63c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_63c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_63c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_63c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_63c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_64a = function(req, res){
    res.render('kehutanan/kehutanan_14_64a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_64a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_64a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_64a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_64a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_64b = function(req, res){
    res.render('kehutanan/kehutanan_14_64b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_64b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_64b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_64b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_64b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_64c = function(req, res){
    res.render('kehutanan/kehutanan_14_64c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_64c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_64c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_64c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_64c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_65a = function(req, res){
    res.render('kehutanan/kehutanan_14_65a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_65a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_65a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_65a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_65a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_65b = function(req, res){
    res.render('kehutanan/kehutanan_14_65b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_65b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_65b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_65b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_65b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_65c = function(req, res){
    res.render('kehutanan/kehutanan_14_65c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_65c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_65c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_65c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_65c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_66a = function(req, res){
    res.render('kehutanan/kehutanan_14_66a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_66a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_66a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_66a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_66a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_66b = function(req, res){
    res.render('kehutanan/kehutanan_14_66b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_66b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_66b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_66b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_66b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_66c = function(req, res){
    res.render('kehutanan/kehutanan_14_66c', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_66c = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_66c', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_66c = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_66c', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_66d = function(req, res){
    res.render('kehutanan/kehutanan_14_66d', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_66d = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_66d', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_66d = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_66d', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_66e = function(req, res){
    res.render('kehutanan/kehutanan_14_66e', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_66e = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_66e', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_66e = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_66e', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_66f = function(req, res){
    res.render('kehutanan/kehutanan_14_66f', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_66f = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_66f', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_66f = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_66f', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_66g = function(req, res){
    res.render('kehutanan/kehutanan_14_66g', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_66g = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_66g', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_66g = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_66g', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_67a = function(req, res){
    res.render('kehutanan/kehutanan_14_67a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_67a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_67a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_67a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_67a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_67b = function(req, res){
    res.render('kehutanan/kehutanan_14_67b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_67b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_67b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_67b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_67b', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_68 = function(req, res){
    res.render('kehutanan/kehutanan_14_68', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_68 = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_68', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_68 = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_68', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_69a = function(req, res){
    res.render('kehutanan/kehutanan_14_69a', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_69a = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_69a', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_69a = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_69a', {title: 'Kehutanan'});
};
/*============================================================================================*/
/*===============================Satuan Biaya Tenaga Teknis Khusus============================*/
/*Render Tabel*/
exports.kehutanan_14_69b = function(req, res){
    res.render('kehutanan/kehutanan_14_69b', {title: 'Kehutanan'});
};

/* Tambah Data */
exports.tambah_kehutanan_14_69b = function(req, res){
    res.render('kehutanan/tambah_kehutanan_14_69b', {title: 'Kehutanan'});
};

/* Edit Data */
exports.edit_kehutanan_14_69b = function(req, res){
    res.render('kehutanan/edit_kehutanan_14_69b', {title: 'Kehutanan'});
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
                title: 'Perjalanan Dinas',
                page_title: "Perjalanan Dinas", data:rows
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
    res.render('sbu1/sbu1_2_52', {title: 'Akomodasi'});
};

/* Tambah Data */
exports.tambah_sbu1_2_52 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_52', {title: 'Akomodasi'});
};

/* Edit Data */
exports.edit_sbu1_2_52 = function(req, res){
    res.render('sbu1/edit_sbu1_2_52', {title: 'Akomodasi'});
};
/*============================================================================================*/

/*===============================Perjalanan Dinas Non PNS=====================================*/
/*Uang Harian dan Akomodasi Perjalanan Dinas Dalam Provinsi dan Luar Provinsi Non PNS*/

/*Render Tabel*/
exports.sbu1_2_53 = function(req, res){
    res.render('sbu1/sbu1_2_53', {title: 'Perjalanan Dinas Non PNS'});
};

/* Tambah Data */
exports.tambah_sbu1_2_53 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_53', {title: 'Perjalanan Dinas Non PNS'});
};

/* Edit Data */
exports.edit_sbu1_2_53 = function(req, res){
    res.render('sbu1/edit_sbu1_2_53', {title: 'Perjalanan Dinas Non PNS'});
};
/*============================================================================================*/

/*===============================Penyetaraan TNI dan POLRI=====================================*/

/*Render Tabel*/
exports.sbu1_2_54 = function(req, res){
    res.render('sbu1/sbu1_2_54', {title: 'Penyetaraan TNI dan POLRI'});
};

/* Tambah Data */
exports.tambah_sbu1_2_54 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_54', {title: 'Penyetaraan TNI dan POLRI'});
};

/* Edit Data */
exports.edit_sbu1_2_54 = function(req, res){
    res.render('sbu1/edit_sbu1_2_54', {title: 'Penyetaraan TNI dan POLRI'});
};
/*============================================================================================*/

/*======================================Biaya Pakaian=========================================*/
/*Satuan Biaya Pakaian*/

/*Render Tabel*/
exports.sbu1_2_55 = function(req, res){
    res.render('sbu1/sbu1_2_55', {title: 'Biaya Pakaian'});
};

/* Tambah Data */
exports.tambah_sbu1_2_55 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_55', {title: 'Biaya Pakaian'});
};

/* Edit Data */
exports.edit_sbu1_2_55 = function(req, res){
    res.render('sbu1/edit_sbu1_2_55', {title: 'Biaya Pakaian'});
};
/*============================================================================================*/

/*============================Biaya Makanan Penambah Daya Tahan tubuh=========================*/
/*Satuan Biaya Makanan Penambah Daya Tahan Tubuh*/

/*Render Tabel*/
exports.sbu1_2_58 = function(req, res){
    res.render('sbu1/sbu1_2_58', {title: 'Biaya Makanan Penambah Daya Tahan tubuh'});
};

/* Tambah Data */
exports.tambah_sbu1_2_58 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_58', {title: 'Biaya Makanan Penambah Daya Tahan tubuh'});
};

/* Edit Data */
exports.edit_sbu1_2_58 = function(req, res){
    res.render('sbu1/edit_sbu1_2_58', {title: 'Biaya Makanan Penambah Daya Tahan tubuh'});
};
/*============================================================================================*/
/*==========================Satuan Biaya Pemeliharaan ISO 9001-2000===========================*/

/*Render Tabel*/
exports.sbu1_2_59 = function(req, res){
    res.render('sbu1/sbu1_2_59', {title: 'Satuan Biaya Pemeliharaan ISO 9001-2000'});
};

/* Tambah Data */
exports.tambah_sbu1_2_59 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_59', {title: 'Satuan Biaya Pemeliharaan ISO 9001-2000'});
};

/* Edit Data */
exports.edit_sbu1_2_59 = function(req, res){
    res.render('sbu1/edit_sbu1_2_59', {title: 'Satuan Biaya Pemeliharaan ISO 9001-2000'});
};
/*============================================================================================*/
/*=============================Pekerjaan Konsultasi Non Sertifikat===========================*/

/*Render Tabel*/
exports.sbu1_2_60 = function(req, res){
    res.render('sbu1/sbu1_2_60', {title: 'Pekerjaan Konsultasi Non Sertifikat'});
};

/* Tambah Data */
exports.tambah_sbu1_2_60 = function(req, res){
    res.render('sbu1/tambah_sbu1_2_60', {title: 'Pekerjaan Konsultasi Non Sertifikat'});
};

/* Edit Data */
exports.edit_sbu1_2_60 = function(req, res){
    res.render('sbu1/edit_sbu1_2_60', {title: 'Pekerjaan Konsultasi Non Sertifikat'});
};
/*============================================================================================*/

/*==========================================SBU ESTIMASI======================================*/
/*==============================Satuan Sewa Gedung/Lapang Olahraga===========================*/

/*Render Tabel*/
exports.sbu2_3_1 = function(req, res){
   req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail9 WHERE kategori_id = 61", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu2/sbu2_3_1', {
                title: 'Satuan Sewa Gedung/Lapang Olahraga',
                page_title: "Satuan Sewa Gedung/Lapang Olahraga", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu2_3_1 = function(req, res){
    res.render('sbu2/tambah_sbu2_3_1', {title: 'Satuan Sewa Gedung/Lapang Olahraga'});
};

/* Save Data sbu2_3_1 */
exports.save_sbu2_3_1 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            keterangan : input.keterangan,
            kategori_id : 61
        };

        var query = connection.query("INSERT INTO detail9 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu2_3_1');
        });
    });

};

/* Edit Data */
exports.edit_sbu2_3_1 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail9 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu2/edit_sbu2_3_1',{
                title : 'Edit SBU2_3_1',
                page_title:"Edit sbu2_3_1",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu2_3_1 */
exports.save_edit_sbu2_3_1 = function(req, res){

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
         
          res.redirect('/sbu2_3_1');
        
        });
    
    });
};

/* Delete sbu2_3_1 */
exports.delete_sbu2_3_1 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail9  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu2_3_1');
             
        });
        
     });
};

/*============================================================================================*/
/*===================Satuan Biaya Taksi Perjalanan Dinas Jabatan Luar Provinsi================*/

/*Render Tabel*/
exports.sbu2_3_2 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail2 WHERE kategori_id = 62", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu2/sbu2_3_2', {
                title: 'Satuan Biaya Taksi Perjalanan Dinas Jabatan Luar Provinsi',
                page_title: "Satuan Biaya Taksi Perjalanan Dinas Jabatan Luar Provinsi", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu2_3_2 = function(req, res){
    res.render('sbu2/tambah_sbu2_3_2', {title: 'Satuan Biaya Taksi Perjalanan Dinas Jabatan Luar Provinsi'});
};

/* Save Data sbu2_3_2 */
exports.save_sbu2_3_2 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 62
        };

        var query = connection.query("INSERT INTO detail2 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu2_3_2');
        });
    });

};

/* Edit Data */
exports.edit_sbu2_3_2 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail2 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu2/edit_sbu2_3_2',{
                title : 'Edit SBU2_3_2',
                page_title:"Edit sbu2_3_2",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu2_3_2 */
exports.save_edit_sbu2_3_2 = function(req, res){

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
         
          res.redirect('/sbu2_3_2');
        
        });
    
    });
};

/* Delete sbu2_3_2 */
exports.delete_sbu2_3_2 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail2  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu2_3_2');
             
        });
        
     });
};

/*============================================================================================*/
/*==============Satuan Biaya Tiket Pesawat Perjalanan Dinas Luar Provinsi (PP)================*/

/*Render Tabel*/
exports.sbu2_3_3 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail3 WHERE kategori_id = 63", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu2/sbu2_3_3', {
                title: 'Satuan Biaya Tiket Pesawat Perjalanan Dinas Luar Provinsi (PP)',
                page_title: "Satuan Biaya Tiket Pesawat Perjalanan Dinas Luar Provinsi (PP)", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu2_3_3 = function(req, res){
    res.render('sbu2/tambah_sbu2_3_3', {title: 'Satuan Biaya Tiket Pesawat Perjalanan Dinas Luar Provinsi (PP)'});
};

/* Save Data sbu2_3_3 */
exports.save_sbu2_3_3 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 63
        };

        var query = connection.query("INSERT INTO detail3 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu2_3_3');
        });
    });

};

/* Edit Data */
exports.edit_sbu2_3_3 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail3 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu2/edit_sbu2_3_3',{
                title : 'Edit SBU2_3_3',
                page_title:"Edit sbu2_3_3",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu2_3_3 */
exports.save_edit_sbu2_3_3 = function(req, res){

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
         
          res.redirect('/sbu2_3_3');
        
        });
    
    });
};

/* Delete sbu2_3_3 */
exports.delete_sbu2_3_3 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail3  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu2_3_3');
             
        });
        
     });
};

/*============================================================================================*/
/*====================Satuan Biaya Tiket Perjalanan Dinas Luar Negeri (PP)====================*/

/*Render Tabel*/
exports.sbu2_3_4 = function(req, res){
    req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail10 WHERE kategori_id = 64", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu2/sbu2_3_4', {
                title: 'Satuan Biaya Tiket Perjalanan Dinas Luar Negeri (PP)',
                page_title: "Satuan Biaya Tiket Perjalanan Dinas Luar Negeri (PP)", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu2_3_4 = function(req, res){
    res.render('sbu2/tambah_sbu2_3_4', {title: 'Satuan Biaya Tiket Perjalanan Dinas Luar Negeri (PP)'});
};

/* Save Data sbu2_3_4 */
exports.save_sbu2_3_4 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nilai1 : input.nilai1,
            nilai2 : input.nilai2,
            nilai3 : input.nilai3,
            keterangan : input.keterangan,
            kategori_id : 64
        };

        var query = connection.query("INSERT INTO detail10 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu2_3_4');
        });
    });

};

/* Edit Data */
exports.edit_sbu2_3_4 = function(req, res){
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail10 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu2/edit_sbu2_3_4',{
                title : 'Edit SBU2_3_4',
                page_title:"Edit sbu2_3_4",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu2_3_4 */
exports.save_edit_sbu2_3_4 = function(req, res){

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
         
          res.redirect('/sbu2_3_4');
        
        });
    
    });
};

/* Delete sbu2_3_4 */
exports.delete_sbu2_3_4 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail10  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu2_3_4');
             
        });
        
     });
};

/*============================================================================================*/
/*===============================Biaya Perawatan Kendaraan Dinas==============================*/

/*Render Tabel*/
exports.sbu2_3_5 = function(req, res){
     req.getConnection(function(err, connection){

        var query = connection.query("SELECT * FROM detail3 WHERE kategori_id = 65", function(err, rows){

            if(err)
                console.log("Error Selecting : %s ", err);

            res.render('sbu2/sbu2_3_5', {
                title: 'Biaya Perawatan Kendaraan Dinas',
                page_title: "Biaya Perawatan Kendaraan Dinas", data:rows
            });
        });
    });
};

/* Tambah Data */
exports.tambah_sbu2_3_5 = function(req, res){
    res.render('sbu2/tambah_sbu2_3_5', {title: 'Biaya Perawatan Kendaraan Dinas'});
};

/* Save Data sbu2_3_5 */
exports.save_sbu2_3_5 = function(req, res){

 var input = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){

        var data = {

            nama1 : input.nama1,
            nama2 : input.nama2,
            nama3 : input.nama3,
            nilai : input.nilai,
            keterangan : input.keterangan,
            kategori_id : 65
        };

        var query = connection.query("INSERT INTO detail3 set ?", data, function(err, rows){

            if(err)
                console.log("Error Instering : %s", err);
            res.redirect('/sbu2_3_5');
        });
    });

};

/* Edit Data */
exports.edit_sbu2_3_5 = function(req, res){
   var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM detail3 WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('sbu2/edit_sbu2_3_5',{
                title : 'Edit SBU2_3_5',
                page_title:"Edit sbu2_3_5",data:rows
            });
                
           
         });
    }); 
};

/* Save Edit sbu2_3_5 */
exports.save_edit_sbu2_3_5 = function(req, res){

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
         
          res.redirect('/sbu2_3_5');
        
        });
    
    });
};

/* Delete sbu2_3_5 */
exports.delete_sbu2_3_5 = function(req, res){

    var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM detail3  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/sbu2_3_5');
             
        });
        
     });
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
