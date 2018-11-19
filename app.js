
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//load customers route
var sistem = require('./routes/sistem'); 
var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/

app.use(
    
    connection(mysql,{
        
        host: 'localhost', //'localhost',
        user: 'root',
        password : '',
        port : 3306, //port mysql
        database:'projectkp'

    },'pool') //or single

);



app.get('/', routes.index);

/*==================================Main Index=================================*/
/*app.get('/kebinamargaan', sistem.list);*/
app.get('/sbu_batas_tertinggi', sistem.sbuBatasTertinggi);
app.get('/sbu_estimasi', sistem.sbu_estimasi);
app.get('/sbk', sistem.sbk);
/*=============================================================================*/

/*============================Bidang Kedinasan=================================*/
app.get('/Bidang/add', sistem.bidangAdd);
app.post('/Bidang/add', sistem.saveBidang);
app.get('/Kebinamargaan', sistem.kebinamargaan);
/*=============================================================================*/

/*==========================Kebinamargaan Jalan Hotmix==========================*/
app.get('/kebinamargaan_1_1', sistem.kebinamargaan_1_1);
app.get('/tambah_kebinamargaan_1_1/add', sistem.tambah_kebinamargaan_1_1);
app.post('/tambah_kebinamargaan_1_1/add', sistem.save_kebinamargaan_1_1);
app.get('/edit_kebinamargaan_1_1/edit/:id', sistem.edit_kebinamargaan_1_1);
app.post('/edit_kebinamargaan_1_1/edit/:id', sistem.save_edit_kebinamargaan_1_1);
app.get('/edit_kebinamargaan_1_1/delete/:id', sistem.delete_kebinamargaan_1_1);
/*=============================================================================*/

/*==========================Kebinamargaan Jalan Beton==========================*/
app.get('/kebinamargaan_1_2', sistem.kebinamargaan_1_2);
app.get('/tambah_kebinamargaan_1_2/add', sistem.tambah_kebinamargaan_1_2);
app.post('/tambah_kebinamargaan_1_2/add', sistem.save_kebinamargaan_1_2);
app.get('/edit_kebinamargaan_1_2/edit/:id', sistem.edit_kebinamargaan_1_2);
app.post('/edit_kebinamargaan_1_2/edit/:id', sistem.save_edit_kebinamargaan_1_2);
app.get('/edit_kebinamargaan_1_2/delete/:id', sistem.delete_kebinamargaan_1_2);
/*==============================================================================*/

/*==========================Kebinamargaan Jalan Aspal==========================*/
app.get('/kebinamargaan_1_3', sistem.kebinamargaan_1_3);
app.get('/tambah_kebinamargaan_1_3/add', sistem.tambah_kebinamargaan_1_3);
app.post('/tambah_kebinamargaan_1_3/add', sistem.save_kebinamargaan_1_3);
app.get('/edit_kebinamargaan_1_3/edit/:id', sistem.edit_kebinamargaan_1_3);
app.post('/edit_kebinamargaan_1_3/edit/:id', sistem.save_edit_kebinamargaan_1_3);
app.get('/edit_kebinamargaan_1_3/delete/:id', sistem.delete_kebinamargaan_1_3);
/*=============================================================================*/

/*=============================Pemeliharaan Rutin==============================*/
app.get('/kebinamargaan_1_4', sistem.kebinamargaan_1_4);
app.get('/tambah_kebinamargaan_1_4/add', sistem.tambah_kebinamargaan_1_4);
app.post('/tambah_kebinamargaan_1_4/add', sistem.save_kebinamargaan_1_4);
app.get('/edit_kebinamargaan_1_4/edit/:id', sistem.edit_kebinamargaan_1_4);
app.post('/edit_kebinamargaan_1_4/edit/:id', sistem.save_edit_kebinamargaan_1_4);
app.get('/edit_kebinamargaan_1_4/delete/:id', sistem.delete_kebinamargaan_1_4);
/*=============================================================================*/

/*============================Pemeliharaan Rutin*==============================*/
app.get('/kebinamargaan_1_5', sistem.kebinamargaan_1_5);
app.get('/tambah_kebinamargaan_1_5/add', sistem.tambah_kebinamargaan_1_5);
app.post('/tambah_kebinamargaan_1_5/add', sistem.save_kebinamargaan_1_5);
app.get('/edit_kebinamargaan_1_5/edit/:id', sistem.edit_kebinamargaan_1_5);
app.post('/edit_kebinamargaan_1_5/edit/:id', sistem.save_edit_kebinamargaan_1_5);
app.get('/edit_kebinamargaan_1_5/delete/:id', sistem.delete_kebinamargaan_1_5);
/*=============================================================================*/

/*======================Pembangunan Jalan Baru Hotmix==========================*/
app.get('/kebinamargaan_1_6', sistem.kebinamargaan_1_6);
app.get('/tambah_kebinamargaan_1_6/add', sistem.tambah_kebinamargaan_1_6);
app.post('/tambah_kebinamargaan_1_6/add', sistem.save_kebinamargaan_1_6);
app.get('/edit_kebinamargaan_1_6/edit/:id', sistem.edit_kebinamargaan_1_6);
app.post('/edit_kebinamargaan_1_6/edit/:id', sistem.save_edit_kebinamargaan_1_6);
app.get('/edit_kebinamargaan_1_6/delete/:id', sistem.delete_kebinamargaan_1_6);
/*=============================================================================*/

/*======================Pembangunan Jalan Baru Beton==========================*/
app.get('/kebinamargaan_1_7', sistem.kebinamargaan_1_7);
app.get('/tambah_kebinamargaan_1_7/add', sistem.tambah_kebinamargaan_1_7);
app.post('/tambah_kebinamargaan_1_7/add', sistem.save_kebinamargaan_1_7);
app.get('/edit_kebinamargaan_1_7/edit/:id', sistem.edit_kebinamargaan_1_7);
app.post('/edit_kebinamargaan_1_7/edit/:id', sistem.save_edit_kebinamargaan_1_7);
app.get('/edit_kebinamargaan_1_7/delete/:id', sistem.delete_kebinamargaan_1_7);
/*=============================================================================*/

/*==========================Bahu di Perkeras Beton=============================*/
app.get('/kebinamargaan_1_8', sistem.kebinamargaan_1_8);
app.get('/tambah_kebinamargaan_1_8/add', sistem.tambah_kebinamargaan_1_8);
app.post('/tambah_kebinamargaan_1_8/add', sistem.save_kebinamargaan_1_8);
app.get('/edit_kebinamargaan_1_8/edit/:id', sistem.edit_kebinamargaan_1_8);
app.post('/edit_kebinamargaan_1_8/edit/:id', sistem.save_edit_kebinamargaan_1_8);
app.get('/edit_kebinamargaan_1_8/delete/:id', sistem.delete_kebinamargaan_1_8);
/*=============================================================================*/

/*==========================Peleberan Jalan Beton=============================*/
app.get('/kebinamargaan_1_9', sistem.kebinamargaan_1_9);
app.get('/tambah_kebinamargaan_1_9/add', sistem.tambah_kebinamargaan_1_9);
app.post('/tambah_kebinamargaan_1_9/add', sistem.save_kebinamargaan_1_9);
app.get('/edit_kebinamargaan_1_9/edit/:id', sistem.edit_kebinamargaan_1_9);
app.post('/edit_kebinamargaan_1_9/edit/:id', sistem.save_edit_kebinamargaan_1_9);
app.get('/edit_kebinamargaan_1_9/delete/:id', sistem.delete_kebinamargaan_1_9);
/*=============================================================================*/

/*==========================Peleberan Jalan Agregat============================*/
app.get('/kebinamargaan_1_10', sistem.kebinamargaan_1_10);
app.get('/tambah_kebinamargaan_1_10/add', sistem.tambah_kebinamargaan_1_10);
app.post('/tambah_kebinamargaan_1_10/add', sistem.save_kebinamargaan_1_10);
app.get('/edit_kebinamargaan_1_10/edit/:id', sistem.edit_kebinamargaan_1_10);
app.post('/edit_kebinamargaan_1_10/edit/:id', sistem.save_edit_kebinamargaan_1_10);
app.get('/edit_kebinamargaan_1_10/delete/:id', sistem.delete_kebinamargaan_1_10);
/*=============================================================================*/

/*=========================Rekonstruksi Jalan HOTMIX===========================*/
app.get('/kebinamargaan_1_11', sistem.kebinamargaan_1_11);
app.get('/tambah_kebinamargaan_1_11/add', sistem.tambah_kebinamargaan_1_11);
app.post('/tambah_kebinamargaan_1_11/add', sistem.save_kebinamargaan_1_11);
app.get('/edit_kebinamargaan_1_11/edit/:id', sistem.edit_kebinamargaan_1_11);
app.post('/edit_kebinamargaan_1_11/edit/:id', sistem.save_edit_kebinamargaan_1_11);
app.get('/edit_kebinamargaan_1_11/delete/:id', sistem.delete_kebinamargaan_1_11);
/*=============================================================================*/

/*=========================Dasar Penanganan Jembatan===========================*/
app.get('/kebinamargaan_1_12', sistem.kebinamargaan_1_12);
app.get('/tambah_kebinamargaan_1_12/add', sistem.tambah_kebinamargaan_1_12);
app.post('/tambah_kebinamargaan_1_12/add', sistem.save_kebinamargaan_1_12);
app.get('/edit_kebinamargaan_1_12/edit/:id', sistem.edit_kebinamargaan_1_12);
app.post('/edit_kebinamargaan_1_12/edit/:id', sistem.save_edit_kebinamargaan_1_12);
app.get('/edit_kebinamargaan_1_12/delete/:id', sistem.delete_kebinamargaan_1_12);
/*=============================================================================*/

/*===============Perencanaan dan Pengawasan Jalan Jembatan=====================*/
app.get('/kebinamargaan_1_13', sistem.kebinamargaan_1_13);
app.get('/tambah_kebinamargaan_1_13/add', sistem.tambah_kebinamargaan_1_13);
app.post('/tambah_kebinamargaan_1_13/add', sistem.save_kebinamargaan_1_13);
app.get('/edit_kebinamargaan_1_13/edit/:id', sistem.edit_kebinamargaan_1_13);
app.post('/edit_kebinamargaan_1_13/edit/:id', sistem.save_edit_kebinamargaan_1_13);
app.get('/edit_kebinamargaan_1_13/delete/:id', sistem.delete_kebinamargaan_1_13);
/*=============================================================================*/

/*==========================Sewa Alat/Kendaraan================================*/
app.get('/kebinamargaan_1_17', sistem.kebinamargaan_1_17);
app.get('/tambah_kebinamargaan_1_17/add', sistem.tambah_kebinamargaan_1_17);
app.post('/tambah_kebinamargaan_1_17/add', sistem.save_kebinamargaan_1_17);
app.get('/edit_kebinamargaan_1_17/edit/:id', sistem.edit_kebinamargaan_1_17);
app.post('/edit_kebinamargaan_1_17/edit/:id', sistem.save_edit_kebinamargaan_1_17);
app.get('/edit_kebinamargaan_1_17/delete/:id', sistem.delete_kebinamargaan_1_17);
/*=============================================================================*/

/*===========================Sumber Daya Air===================================*/
app.get('/sumber_daya_air', sistem.sumber_daya_air);
/*======================SDA Honorarium Tenaga Teknis Non PNS===================*/
app.get('/sda_2_1', sistem.sda_2_1);
app.get('/tambah_sda_2_1/add', sistem.tambah_sda_2_1);
app.post('/tambah_sda_2_1/add', sistem.save_sda_2_1);
app.get('/edit_sda_2_1/edit/:id', sistem.edit_sda_2_1);
app.post('/edit_sda_2_1/edit/:id', sistem.save_edit_sda_2_1);
app.get('/edit_sda_2_1/delete/:id', sistem.delete_sda_2_1);
/*+============================================================================*/

/*======Besaran Uang Saku Tenaga Teknis Non PNS Piket Banjir/Kekeringan========*/
app.get('/sda_2_2', sistem.sda_2_2);
app.get('/tambah_sda_2_2/add', sistem.tambah_sda_2_2);
app.post('/tambah_sda_2_2/add', sistem.save_sda_2_2);
app.get('/edit_sda_2_2/edit/:id', sistem.edit_sda_2_2);
app.post('/edit_sda_2_2/edit/:id', sistem.save_edit_sda_2_2);
app.get('/edit_sda_2_2/delete/:id', sistem.delete_sda_2_2);
/*==============================================================================*/

/*========Pengukuran dan Perencanaan Rehabilitasi Irigasi (Pedataran)===========*/
app.get('/sda_2_3', sistem.sda_2_3);
app.get('/tambah_sda_2_3/add', sistem.tambah_sda_2_3);
app.post('/tambah_sda_2_3/add', sistem.save_sda_2_3);
app.get('/edit_sda_2_3/edit/:id', sistem.edit_sda_2_3);
app.post('/edit_sda_2_3/edit/:id', sistem.save_edit_sda_2_3);
app.get('/edit_sda_2_3/delete/:id', sistem.delete_sda_2_3);
/*==============================================================================*/

/*========Pengukuran dan Perencanaan Rehabilitasi Irigasi (Pegunungan)==========*/
app.get('/sda_2_4', sistem.sda_2_4);
app.get('/tambah_sda_2_4/add', sistem.tambah_sda_2_4);
app.post('/tambah_sda_2_4/add', sistem.save_sda_2_4);
app.get('/edit_sda_2_4/edit/:id', sistem.edit_sda_2_4);
app.post('/edit_sda_2_4/edit/:id', sistem.save_edit_sda_2_4);
app.get('/edit_sda_2_4/delete/:id', sistem.delete_sda_2_4);
/*==============================================================================*/

/*=================Pengukuran dan Perencanaan Sungai/Drainase===================*/
app.get('/sda_2_5', sistem.sda_2_5);
app.get('/tambah_sda_2_5/add', sistem.tambah_sda_2_5);
app.post('/tambah_sda_2_5/add', sistem.save_sda_2_5);
app.get('/edit_sda_2_5/edit/:id', sistem.edit_sda_2_5);
app.post('/edit_sda_2_5/edit/:id', sistem.save_edit_sda_2_5);
app.get('/edit_sda_2_5/delete/:id', sistem.delete_sda_2_5);
/*==============================================================================*/

/*==========================Pengukuran dan Perencanaan Situ=====================*/
app.get('/sda_2_6', sistem.sda_2_6);
app.get('/tambah_sda_2_6/add', sistem.tambah_sda_2_6);
app.post('/tambah_sda_2_6/add', sistem.save_sda_2_6);
app.get('/edit_sda_2_6/edit/:id', sistem.edit_sda_2_6);
app.post('/edit_sda_2_6/edit/:id', sistem.save_edit_sda_2_6);
app.get('/edit_sda_2_6/delete/:id', sistem.delete_sda_2_6);
/*==============================================================================*/

/*====Pengukuran dan Perencanaan Pengamanan Pantai dan Perbaikan Muara Sungai===*/
app.get('/sda_2_7', sistem.sda_2_7);
app.get('/tambah_sda_2_7/add', sistem.tambah_sda_2_7);
app.post('/tambah_sda_2_7/add', sistem.save_sda_2_7);
app.get('/edit_sda_2_7/edit/:id', sistem.edit_sda_2_7);
app.post('/edit_sda_2_7/edit/:id', sistem.save_edit_sda_2_7);
app.get('/edit_sda_2_7/delete/:id', sistem.delete_sda_2_7);
/*==============================================================================*/

/*========Biaya Penyelidikan Lapangan & Pengujian Laboratorium Geoteknik========*/
app.get('/sda_2_8', sistem.sda_2_8);
app.get('/tambah_sda_2_8/add', sistem.tambah_sda_2_8);
app.post('/tambah_sda_2_8/add', sistem.save_sda_2_8);
app.get('/edit_sda_2_8/edit/:id', sistem.edit_sda_2_8);
app.post('/edit_sda_2_8/edit/:id', sistem.save_edit_sda_2_8);
app.get('/edit_sda_2_8/delete/:id', sistem.delete_sda_2_8);
/*==============================================================================*/

/*=======================Biaya Pengelolaan Jaringan Irigasi=====================*/
app.get('/sda_2_9', sistem.sda_2_9);
app.get('/tambah_sda_2_9/add', sistem.tambah_sda_2_9);
app.post('/tambah_sda_2_9/add', sistem.save_sda_2_9);
app.get('/edit_sda_2_9/edit/:id', sistem.edit_sda_2_9);
app.post('/edit_sda_2_9/edit/:id', sistem.save_edit_sda_2_9);
app.get('/edit_sda_2_9/delete/:id', sistem.delete_sda_2_9);
/*==============================================================================*/

/*====================Biaya Sewa Alat Pemotretan Topografi======================*/
app.get('/sda_drone', sistem.sda_drone);
app.get('/tambah_sda_drone', sistem.tambah_sda_drone);
app.get('/edit_sda_drone', sistem.edit_sda_drone);
/*==============================================================================*/
/*===============================Keciptakaryaan=================================*/
app.get('/keciptakaryaan', sistem.keciptakaryaan);
/*==============Tenaga Ahli Berdasarkan Pengalaman dan Sertifikasi==============*/
app.get('/cipta_3_1', sistem.cipta_3_1);
app.get('/tambah_cipta_3_1/add', sistem.tambah_cipta_3_1);
app.post('/tambah_cipta_3_1/add', sistem.save_cipta_3_1);
app.get('/edit_cipta_3_1/edit/:id', sistem.edit_cipta_3_1);
app.post('/edit_cipta_3_1/edit/:id', sistem.save_edit_cipta_3_1);
app.get('/edit_cipta_3_1/delete/:id', sistem.delete_cipta_3_1);
/*==============================================================================*/
/*===================Tenaga sub  Profesional jasa  konsultansi==================*/
app.get('/cipta_3_2', sistem.cipta_3_2);
app.get('/tambah_cipta_3_2/add', sistem.tambah_cipta_3_2);
app.post('/tambah_cipta_3_2/add', sistem.save_cipta_3_2);
app.get('/edit_cipta_3_2/edit/:id', sistem.edit_cipta_3_2);
app.post('/edit_cipta_3_2/edit/:id', sistem.save_edit_cipta_3_2);
app.get('/edit_cipta_3_2/delete/:id', sistem.delete_cipta_3_2);
/*==============================================================================*/  
/*=======================Tenaga pendukung jasa konsultansi======================*/
app.get('/cipta_3_3', sistem.cipta_3_3);
app.get('/tambah_cipta_3_3/add', sistem.tambah_cipta_3_3);
app.post('/tambah_cipta_3_3/add', sistem.save_cipta_3_3);
app.get('/edit_cipta_3_3/edit/:id', sistem.edit_cipta_3_3);
app.post('/edit_cipta_3_3/edit/:id', sistem.save_edit_cipta_3_3);
app.get('/edit_cipta_3_3/delete/:id', sistem.delete_cipta_3_3);
/*==============================================================================*/  
/*=====Biaya Langsung Non Personil Untuk Jenis Pengeluaran Reimbursable=========*/
app.get('/cipta_3_4', sistem.cipta_3_4);
app.get('/tambah_cipta_3_4', sistem.tambah_cipta_3_4);
app.get('/edit_cipta_3_4', sistem.edit_cipta_3_4);
/*==============================================================================*/  
/*====Biaya Langsung Non Personil Untuk  Jenis Pengeluaran Fixed Unit Rate======*/
app.get('/cipta_3_5', sistem.cipta_3_5);
app.get('/tambah_cipta_3_5', sistem.tambah_cipta_3_5);
app.get('/edit_cipta_3_5', sistem.edit_cipta_3_5);
/*==============================================================================*/  
/*===============Daftar Harga  Standar Upah  Pekerja Jasa Konstruksi============*/
app.get('/cipta_3_6', sistem.cipta_3_6);
app.get('/tambah_cipta_3_6', sistem.tambah_cipta_3_6);
app.get('/edit_cipta_3_6', sistem.edit_cipta_3_6);
/*==============================================================================*/  
/*Prosentase Komponen Biaya Pembangunan Bangunan Gedung Negara Klasifikasi Sederhana*/
app.get('/cipta_3_7', sistem.cipta_3_7);
app.get('/tambah_cipta_3_7', sistem.tambah_cipta_3_7);
app.get('/edit_cipta_3_7', sistem.edit_cipta_3_7);
/*==============================================================================*/  
/*Prosentase Komponen Biaya Pembangunan Bangunan Gedung Negara Klasifikasi Tidak Sederhana*/
app.get('/cipta_3_8', sistem.cipta_3_8);
app.get('/tambah_cipta_3_8', sistem.tambah_cipta_3_8);
app.get('/edit_cipta_3_8', sistem.edit_cipta_3_8);
/*==============================================================================*/  
/*======Prosentase Komponen Biaya Pembangunan Bangunan Gedung Negara Khusus=====*/
app.get('/cipta_3_9', sistem.cipta_3_9);
app.get('/tambah_cipta_3_9', sistem.tambah_cipta_3_9);
app.get('/edit_cipta_3_9', sistem.edit_cipta_3_9);
/*==============================================================================*/  
/*Pedoman Harga Satuan Per Meter Persegi Tertinggi Bangunan  Gedung Pemerintah dan Rumah Dinas*/
app.get('/cipta_3_10', sistem.cipta_3_10);
app.get('/tambah_cipta_3_10/add', sistem.tambah_cipta_3_10);
app.post('/tambah_cipta_3_10/add', sistem.save_cipta_3_10);
app.get('/edit_cipta_3_10/edit/:id', sistem.edit_cipta_3_10);
app.post('/edit_cipta_3_10/edit/:id', sistem.save_edit_cipta_3_10);
app.get('/edit_cipta_3_10/delete/:id', sistem.delete_cipta_3_10);
/*==============================================================================*/
/*=========Pedoman Harga Satuan Per Meter Tertinggi Bangunan Pagar=============*/
app.get('/cipta_3_11', sistem.cipta_3_11);
app.get('/tambah_cipta_3_11', sistem.tambah_cipta_3_11);
app.get('/edit_cipta_3_11', sistem.edit_cipta_3_11);
/*==============================================================================*/
/*==========Standar Kegiatan Pekerjaan Fisik Pembangunan Fisik Air Bersih=========*/
app.get('/cipta_3_12', sistem.cipta_3_12);
app.get('/tambah_cipta_3_12', sistem.tambah_cipta_3_12);
app.get('/edit_cipta_3_12', sistem.edit_cipta_3_12);
/*==============================================================================*/
/*=====Standar Kegiatan Pekerjaan Fisik Perencanaan Teknis Sistem Air Bersih====*/
app.get('/cipta_3_13', sistem.cipta_3_13);
app.get('/tambah_cipta_3_13', sistem.tambah_cipta_3_13);
app.get('/edit_cipta_3_13', sistem.edit_cipta_3_13);
/*==============================================================================*/
/*=========Standar Kegiatan Pekerjaan Fisik Bidang Penyehatan Lingkungan========*/
app.get('/cipta_3_14', sistem.cipta_3_14);
app.get('/tambah_cipta_3_14', sistem.tambah_cipta_3_14);
app.get('/edit_cipta_3_14', sistem.edit_cipta_3_14);
/*==============================================================================*/
/*==Sub Bidang Proyek Untuk Kegiatan Perumahan Kota (PLPK)/ Bidang Permukiman===*/
app.get('/cipta_3_15', sistem.cipta_3_15);
app.get('/tambah_cipta_3_15/add', sistem.tambah_cipta_3_15);
app.post('/tambah_cipta_3_15/add', sistem.save_cipta_3_15);
app.get('/edit_cipta_3_15/edit/:id', sistem.edit_cipta_3_15);
app.post('/edit_cipta_3_15/edit/:id', sistem.save_edit_cipta_3_15);
app.get('/edit_cipta_3_15/delete/:id', sistem.delete_cipta_3_15);
/*==============================================================================*/
/*======Sub Bidang Untuk Kegiatan Perumahan Kota (PLPK)/ Bidang Permukiman======*/
app.get('/cipta_3_16', sistem.cipta_3_16);
app.get('/tambah_cipta_3_16/add', sistem.tambah_cipta_3_16);
app.post('/tambah_cipta_3_16/add', sistem.save_cipta_3_16);
app.get('/edit_cipta_3_16/edit/:id', sistem.edit_cipta_3_16);
app.post('/edit_cipta_3_16/edit/:id', sistem.save_edit_cipta_3_16);
app.get('/edit_cipta_3_16/delete/:id', sistem.delete_cipta_3_16);
/*==============================================================================*/
/*===================Prosentase Komponen Pekerjaan Bangunan=====================*/
app.get('/cipta_3_17', sistem.cipta_3_17);
app.get('/tambah_cipta_3_17/add', sistem.tambah_cipta_3_17);
app.post('/tambah_cipta_3_17/add', sistem.save_cipta_3_17);
app.get('/edit_cipta_3_17/edit/:id', sistem.edit_cipta_3_17);
app.post('/edit_cipta_3_17/edit/:id', sistem.save_edit_cipta_3_17);
app.get('/edit_cipta_3_17/delete/:id', sistem.delete_cipta_3_17);
/*==============================================================================*/
/*================Prosentase Komponen Pekerjaan Rumah Negara====================*/
app.get('/cipta_3_18', sistem.cipta_3_18);
app.get('/tambah_cipta_3_18/add', sistem.tambah_cipta_3_18);
app.post('/tambah_cipta_3_18/add', sistem.save_cipta_3_18);
app.get('/edit_cipta_3_18/edit/:id', sistem.edit_cipta_3_18);
app.post('/edit_cipta_3_18/edit/:id', sistem.save_edit_cipta_3_18);
app.get('/edit_cipta_3_18/delete/:id', sistem.delete_cipta_3_18);
/*==============================================================================*/
/*=================================Perhubungan==================================*/
/*=============Standar Harga Satuan Kegiatan Pembangunan Prasarana==============*/
app.get('/perhubungan', sistem.perhubungan);
/*==============================Perhubungan Darat===============================*/
app.get('/hub_4_1IA', sistem.hub_4_1IA);
app.get('/tambah_hub_4_1IA/add', sistem.tambah_hub_4_1IA);
app.post('/tambah_hub_4_1IA/add', sistem.save_hub_4_1IA);
app.get('/edit_hub_4_1IA/edit/:id', sistem.edit_hub_4_1IA);
app.post('/edit_hub_4_1IA/edit/:id', sistem.save_edit_hub_4_1IA);
app.get('/edit_hub_4_1IA/delete/:id', sistem.delete_hub_4_1IA);

app.get('/hub_4_1IB', sistem.hub_4_1IB);
app.get('/tambah_hub_4_1IB/add', sistem.tambah_hub_4_1IB);
app.post('/tambah_hub_4_1IB/add', sistem.save_hub_4_1IB);
app.get('/edit_hub_4_1IB/edit/:id', sistem.edit_hub_4_1IB);
app.post('/edit_hub_4_1IB/edit/:id', sistem.save_edit_hub_4_1IB);
app.get('/edit_hub_4_1IB/delete/:id', sistem.delete_hub_4_1IB);

app.get('/hub_4_1IC', sistem.hub_4_1IC);
app.get('/tambah_hub_4_1IC/add', sistem.tambah_hub_4_1IC);
app.post('/tambah_hub_4_1IC/add', sistem.save_hub_4_1IC);
app.get('/edit_hub_4_1IC/edit/:id', sistem.edit_hub_4_1IC);
app.post('/edit_hub_4_1IC/edit/:id', sistem.save_edit_hub_4_1IC);
app.get('/edit_hub_4_1IC/delete/:id', sistem.delete_hub_4_1IC);
/*==============================================================================*/
/*==============================Perhubungan Laut================================*/
app.get('/hub_4_1IIA', sistem.hub_4_1IIA);
app.get('/tambah_hub_4_1IIA/add', sistem.tambah_hub_4_1IIA);
app.post('/tambah_hub_4_1IIA/add', sistem.save_hub_4_1IIA);
app.get('/edit_hub_4_1IIA/edit/:id', sistem.edit_hub_4_1IIA);
app.post('/edit_hub_4_1IIA/edit/:id', sistem.save_edit_hub_4_1IIA);
app.get('/edit_hub_4_1IIA/delete/:id', sistem.delete_hub_4_1IIA);

app.get('/hub_4_1IIB', sistem.hub_4_1IIB);
app.get('/tambah_hub_4_1IIB/add', sistem.tambah_hub_4_1IIB);
app.post('/tambah_hub_4_1IIB/add', sistem.save_hub_4_1IIB);
app.get('/edit_hub_4_1IIB/edit/:id', sistem.edit_hub_4_1IIB);
app.post('/edit_hub_4_1IIB/edit/:id', sistem.save_edit_hub_4_1IIB);
app.get('/edit_hub_4_1IIB/delete/:id', sistem.delete_hub_4_1IIB);
/*==============================================================================*/
/*==============================Perhubungan Udara===============================*/
app.get('/hub_4_1IIIA', sistem.hub_4_1IIIA);
app.get('/tambah_hub_4_1IIIA/add', sistem.tambah_hub_4_1IIIA);
app.post('/tambah_hub_4_1IIIA/add', sistem.save_hub_4_1IIIA);
app.get('/edit_hub_4_1IIIA/edit/:id', sistem.edit_hub_4_1IIIA);
app.post('/edit_hub_4_1IIIA/edit/:id', sistem.save_edit_hub_4_1IIIA);
app.get('/edit_hub_4_1IIIA/delete/:id', sistem.delete_hub_4_1IIIA);
/*==============================================================================*/

/*===============================Lingkungan Hidup===============================*/
app.get('/lingkungan_hidup', sistem.lingkungan_hidup);
/*==================Pengujian Parameter Kualitas Lingkungan=====================*/
app.get('/lh_5_1a', sistem.lh_5_1a);
app.get('/tambah_lh_5_1a/add', sistem.tambah_lh_5_1a);
app.post('/tambah_lh_5_1a/add', sistem.save_lh_5_1a);
app.get('/edit_lh_5_1a/edit/:id', sistem.edit_lh_5_1a);
app.post('/edit_lh_5_1a/edit/:id', sistem.save_edit_lh_5_1a);
app.get('/edit_lh_5_1a/delete/:id', sistem.delete_lh_5_1a);

app.get('/lh_5_1b', sistem.lh_5_1b);
app.get('/tambah_lh_5_1b/add', sistem.tambah_lh_5_1b);
app.post('/tambah_lh_5_1b/add', sistem.save_lh_5_1b);
app.get('/edit_lh_5_1b/edit/:id', sistem.edit_lh_5_1b);
app.post('/edit_lh_5_1b/edit/:id', sistem.save_edit_lh_5_1b);
app.get('/edit_lh_5_1b/delete/:id', sistem.delete_lh_5_1b);

app.get('/lh_5_1c', sistem.lh_5_1c);
app.get('/tambah_lh_5_1c/add', sistem.tambah_lh_5_1c);
app.post('/tambah_lh_5_1c/add', sistem.save_lh_5_1c);
app.get('/edit_lh_5_1c/edit/:id', sistem.edit_lh_5_1c);
app.post('/edit_lh_5_1c/edit/:id', sistem.save_edit_lh_5_1c);
app.get('/edit_lh_5_1c/delete/:id', sistem.delete_lh_5_1c);

app.get('/lh_5_1d', sistem.lh_5_1d);
app.get('/tambah_lh_5_1d/add', sistem.tambah_lh_5_1d);
app.post('/tambah_lh_5_1d/add', sistem.save_lh_5_1d);
app.get('/edit_lh_5_1d/edit/:id', sistem.edit_lh_5_1d);
app.post('/edit_lh_5_1d/edit/:id', sistem.save_edit_lh_5_1d);
app.get('/edit_lh_5_1d/delete/:id', sistem.delete_lh_5_1d);

app.get('/lh_5_1e', sistem.lh_5_1e);
app.get('/tambah_lh_5_1e/add', sistem.tambah_lh_5_1e);
app.post('/tambah_lh_5_1e/add', sistem.save_lh_5_1e);
app.get('/edit_lh_5_1e/edit/:id', sistem.edit_lh_5_1e);
app.post('/edit_lh_5_1e/edit/:id', sistem.save_edit_lh_5_1e);
app.get('/edit_lh_5_1e/delete/:id', sistem.delete_lh_5_1e);

app.get('/lh_5_1f', sistem.lh_5_1f);
app.get('/tambah_lh_5_1f/add', sistem.tambah_lh_5_1f);
app.post('/tambah_lh_5_1f/add', sistem.save_lh_5_1f);
app.get('/edit_lh_5_1f/edit/:id', sistem.edit_lh_5_1f);
app.post('/edit_lh_5_1f/edit/:id', sistem.save_edit_lh_5_1f);
app.get('/edit_lh_5_1f/delete/:id', sistem.delete_lh_5_1f);

app.get('/lh_5_1g', sistem.lh_5_1g);
app.get('/tambah_lh_5_1g/add', sistem.tambah_lh_5_1g);
app.post('/tambah_lh_5_1g/add', sistem.save_lh_5_1g);
app.get('/edit_lh_5_1g/edit/:id', sistem.edit_lh_5_1g);
app.post('/edit_lh_5_1g/edit/:id', sistem.save_edit_lh_5_1g);
app.get('/edit_lh_5_1g/delete/:id', sistem.delete_lh_5_1g);
/*==============================================================================*/
/*==============Pengambilan Contoh Parameter Kualitas Lingkungan================*/
app.get('/lh_5_2', sistem.lh_5_2);
app.get('/tambah_lh_5_2/add', sistem.tambah_lh_5_2);
app.post('/tambah_lh_5_2/add', sistem.save_lh_5_2);
app.get('/edit_lh_5_2/edit/:id', sistem.edit_lh_5_2);
app.post('/edit_lh_5_2/edit/:id', sistem.save_edit_lh_5_2);
app.get('/edit_lh_5_2/delete/:id', sistem.delete_lh_5_2);
/*==============================================================================*/
/*===================================Honorarium=================================*/
app.get('/lh_5_3', sistem.lh_5_3);
app.get('/tambah_lh_5_3/add', sistem.tambah_lh_5_3);
app.post('/tambah_lh_5_3/add', sistem.save_lh_5_3);
app.get('/edit_lh_5_3/edit/:id', sistem.edit_lh_5_3);
app.post('/edit_lh_5_3/edit/:id', sistem.save_edit_lh_5_3);
app.get('/edit_lh_5_3/delete/:id', sistem.delete_lh_5_3);
/*==============================================================================*/

/*=================================Kearsipan====================================*/
app.get('/kearsipan', sistem.kearsipan);
/*======================Standar Biaya Satuan Pembenahan Arsip===================*/
app.get('/arsip_6_1', sistem.arsip_6_1);
app.get('/tambah_arsip_6_1/add', sistem.tambah_arsip_6_1);
app.post('/tambah_arsip_6_1/add', sistem.save_arsip_6_1);
app.get('/edit_arsip_6_1/edit/:id', sistem.edit_arsip_6_1);
app.post('/edit_arsip_6_1/edit/:id', sistem.save_edit_arsip_6_1);
app.get('/edit_arsip_6_1/delete/:id', sistem.delete_arsip_6_1);
/*==============================================================================*/
/*================Standar Biaya Pemeliharaan dan Perawatan Arsip================*/
app.get('/arsip_6_2', sistem.arsip_6_2);
app.get('/tambah_arsip_6_2/add', sistem.tambah_arsip_6_2);
app.post('/tambah_arsip_6_2/add', sistem.save_arsip_6_2);
app.get('/edit_arsip_6_2/edit/:id', sistem.edit_arsip_6_2);
app.post('/edit_arsip_6_2/edit/:id', sistem.save_edit_arsip_6_2);
app.get('/edit_arsip_6_2/delete/:id', sistem.delete_arsip_6_2);
/*==============================================================================*/
/*====================Satuan Biaya Reproduksi dan Transkripsi===================*/
app.get('/arsip_6_3', sistem.arsip_6_3);
app.get('/tambah_arsip_6_3/add', sistem.tambah_arsip_6_3);
app.post('/tambah_arsip_6_3/add', sistem.save_arsip_6_3);
app.get('/edit_arsip_6_3/edit/:id', sistem.edit_arsip_6_3);
app.post('/edit_arsip_6_3/edit/:id', sistem.save_edit_arsip_6_3);
app.get('/edit_arsip_6_3/delete/:id', sistem.delete_arsip_6_3);
/*==============================================================================*/
/*=========================Satuan Biaya Pembersihan Arsip=======================*/
app.get('/arsip_6_4', sistem.arsip_6_4);
app.get('/tambah_arsip_6_4/add', sistem.tambah_arsip_6_4);
app.post('/tambah_arsip_6_4/add', sistem.save_arsip_6_4);
app.get('/edit_arsip_6_4/edit/:id', sistem.edit_arsip_6_4);
app.post('/edit_arsip_6_4/edit/:id', sistem.save_edit_arsip_6_4);
app.get('/edit_arsip_6_4/delete/:id', sistem.delete_arsip_6_4);
/*==============================================================================*/
/*======================Satuan Biaya Jasa Penerjemahan Arsip====================*/
app.get('/arsip_6_5', sistem.arsip_6_5);
app.get('/tambah_arsip_6_5/add', sistem.tambah_arsip_6_5);
app.post('/tambah_arsip_6_5/add', sistem.save_arsip_6_5);
app.get('/edit_arsip_6_5/edit/:id', sistem.edit_arsip_6_5);
app.post('/edit_arsip_6_5/edit/:id', sistem.save_edit_arsip_6_5);
app.get('/edit_arsip_6_5/delete/:id', sistem.delete_arsip_6_5);
/*==============================================================================*/

/*================================Perpustakaan==================================*/
app.get('/perpustakaan', sistem.perpustakaan);
/*=================================Honorarium===================================*/
app.get('/perpus_7_1', sistem.perpus_7_1);
app.get('/tambah_perpus_7_1/add', sistem.tambah_perpus_7_1);
app.post('/tambah_perpus_7_1/add', sistem.save_perpus_7_1);
app.get('/edit_perpus_7_1/edit/:id', sistem.edit_perpus_7_1);
app.post('/edit_perpus_7_1/edit/:id', sistem.save_edit_perpus_7_1);
app.get('/edit_perpus_7_1/delete/:id', sistem.delete_perpus_7_1);
/*==============================================================================*/
/*========================Standar biaya jasa perpustakaan=======================*/
app.get('/perpus_7_2', sistem.perpus_7_2);
app.get('/tambah_perpus_7_2/add', sistem.tambah_perpus_7_2);
app.post('/tambah_perpus_7_2/add', sistem.save_perpus_7_2);
app.get('/edit_perpus_7_2/edit/:id', sistem.edit_perpus_7_2);
app.post('/edit_perpus_7_2/edit/:id', sistem.save_edit_perpus_7_2);
app.get('/edit_perpus_7_2/delete/:id', sistem.delete_perpus_7_2);
/*==============================================================================*/

/*=================================Perkebunan===================================*/
app.get('/perkebunan', sistem.perkebunan);
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_1a', sistem.kebun_8_1a);
app.get('/tambah_kebun_8_1a', sistem.tambah_kebun_8_1a);
app.get('/edit_kebun_8_1a', sistem.edit_kebun_8_1a);

app.get('/kebun_8_1b', sistem.kebun_8_1b);
app.get('/tambah_kebun_8_1b', sistem.tambah_kebun_8_1b);
app.get('/edit_kebun_8_1b', sistem.edit_kebun_8_1b);

app.get('/kebun_8_1c', sistem.kebun_8_1c);
app.get('/tambah_kebun_8_1c', sistem.tambah_kebun_8_1c);
app.get('/edit_kebun_8_1c', sistem.edit_kebun_8_1c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_2a', sistem.kebun_8_2a);
app.get('/tambah_kebun_8_2a', sistem.tambah_kebun_8_2a);
app.get('/edit_kebun_8_2a', sistem.edit_kebun_8_2a);

app.get('/kebun_8_2b', sistem.kebun_8_2b);
app.get('/tambah_kebun_8_2b', sistem.tambah_kebun_8_2b);
app.get('/edit_kebun_8_2b', sistem.edit_kebun_8_2b);

app.get('/kebun_8_2c', sistem.kebun_8_2c);
app.get('/tambah_kebun_8_2c', sistem.tambah_kebun_8_2c);
app.get('/edit_kebun_8_2c', sistem.edit_kebun_8_2c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_3a', sistem.kebun_8_3a);
app.get('/tambah_kebun_8_3a', sistem.tambah_kebun_8_3a);
app.get('/edit_kebun_8_3a', sistem.edit_kebun_8_3a);

app.get('/kebun_8_3', sistem.kebun_8_3b);
app.get('/tambah_kebun_8_3b', sistem.tambah_kebun_8_3b);
app.get('/edit_kebun_8_3b', sistem.edit_kebun_8_3b);

app.get('/kebun_8_3c', sistem.kebun_8_3c);
app.get('/tambah_kebun_8_3c', sistem.tambah_kebun_8_3c);
app.get('/edit_kebun_8_3c', sistem.edit_kebun_8_3c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_4a', sistem.kebun_8_4a);
app.get('/tambah_kebun_8_4a', sistem.tambah_kebun_8_4a);
app.get('/edit_kebun_8_4a', sistem.edit_kebun_8_4a);

app.get('/kebun_8_4b', sistem.kebun_8_4b);
app.get('/tambah_kebun_8_4b', sistem.tambah_kebun_8_4b);
app.get('/edit_kebun_8_4b', sistem.edit_kebun_8_4b);

app.get('/kebun_8_4c', sistem.kebun_8_4c);
app.get('/tambah_kebun_8_4c', sistem.tambah_kebun_8_4c);
app.get('/edit_kebun_8_4c', sistem.edit_kebun_8_4c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_5a', sistem.kebun_8_5a);
app.get('/tambah_kebun_8_5a', sistem.tambah_kebun_8_5a);
app.get('/edit_kebun_8_5a', sistem.edit_kebun_8_5a);

app.get('/kebun_8_5b', sistem.kebun_8_5b);
app.get('/tambah_kebun_8_5b', sistem.tambah_kebun_8_5b);
app.get('/edit_kebun_8_5b', sistem.edit_kebun_8_5b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_6a', sistem.kebun_8_6a);
app.get('/tambah_kebun_8_6a', sistem.tambah_kebun_8_6a);
app.get('/edit_kebun_8_6a', sistem.edit_kebun_8_6a);

app.get('/kebun_8_6b', sistem.kebun_8_6b);
app.get('/tambah_kebun_8_6b', sistem.tambah_kebun_8_6b);
app.get('/edit_kebun_8_6b', sistem.edit_kebun_8_6b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_7a', sistem.kebun_8_7a);
app.get('/tambah_kebun_8_7a', sistem.tambah_kebun_8_7a);
app.get('/edit_kebun_8_7a', sistem.edit_kebun_8_7a);

app.get('/kebun_8_7b', sistem.kebun_8_7b);
app.get('/tambah_kebun_8_7b', sistem.tambah_kebun_8_7b);
app.get('/edit_kebun_8_7b', sistem.edit_kebun_8_7b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_8a', sistem.kebun_8_8a);
app.get('/tambah_kebun_8_8a', sistem.tambah_kebun_8_8a);
app.get('/edit_kebun_8_8a', sistem.edit_kebun_8_8a);

app.get('/kebun_8_8b', sistem.kebun_8_8b);
app.get('/tambah_kebun_8_8b', sistem.tambah_kebun_8_8b);
app.get('/edit_kebun_8_8b', sistem.edit_kebun_8_8b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_9a', sistem.kebun_8_9a);
app.get('/tambah_kebun_8_9a', sistem.tambah_kebun_8_9a);
app.get('/edit_kebun_8_9a', sistem.edit_kebun_8_9a);

app.get('/kebun_8_9b', sistem.kebun_8_9b);
app.get('/tambah_kebun_8_9b', sistem.tambah_kebun_8_9b);
app.get('/edit_kebun_8_9b', sistem.edit_kebun_8_9b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_10a', sistem.kebun_8_10a);
app.get('/tambah_kebun_8_10a', sistem.tambah_kebun_8_10a);
app.get('/edit_kebun_8_10a', sistem.edit_kebun_8_10a);

app.get('/kebun_8_10b', sistem.kebun_8_10b);
app.get('/tambah_kebun_8_10b', sistem.tambah_kebun_8_10b);
app.get('/edit_kebun_8_10b', sistem.edit_kebun_8_10b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_11a', sistem.kebun_8_11a);
app.get('/tambah_kebun_8_11a', sistem.tambah_kebun_8_11a);
app.get('/edit_kebun_8_11a', sistem.edit_kebun_8_11a);

app.get('/kebun_8_11b', sistem.kebun_8_11b);
app.get('/tambah_kebun_8_11b', sistem.tambah_kebun_8_11b);
app.get('/edit_kebun_8_11b', sistem.edit_kebun_8_11b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_12a', sistem.kebun_8_12a);
app.get('/tambah_kebun_8_12a', sistem.tambah_kebun_8_12a);
app.get('/edit_kebun_8_12a', sistem.edit_kebun_8_12a);

app.get('/kebun_8_12b', sistem.kebun_8_12b);
app.get('/tambah_kebun_8_12b', sistem.tambah_kebun_8_12b);
app.get('/edit_kebun_8_12b', sistem.edit_kebun_8_12b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_13a', sistem.kebun_8_13a);
app.get('/tambah_kebun_8_13a', sistem.tambah_kebun_8_13a);
app.get('/edit_kebun_8_13a', sistem.edit_kebun_8_13a);

app.get('/kebun_8_13b', sistem.kebun_8_13b);
app.get('/tambah_kebun_8_13b', sistem.tambah_kebun_8_13b);
app.get('/edit_kebun_8_13b', sistem.edit_kebun_8_13b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_14a', sistem.kebun_8_14a);
app.get('/tambah_kebun_8_14a', sistem.tambah_kebun_8_14a);
app.get('/edit_kebun_8_14a', sistem.edit_kebun_8_14a);

app.get('/kebun_8_14b', sistem.kebun_8_14b);
app.get('/tambah_kebun_8_14b', sistem.tambah_kebun_8_14b);
app.get('/edit_kebun_8_14b', sistem.edit_kebun_8_14b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_15a', sistem.kebun_8_15a);
app.get('/tambah_kebun_8_15a', sistem.tambah_kebun_8_15a);
app.get('/edit_kebun_8_15a', sistem.edit_kebun_8_15a);

app.get('/kebun_8_15b', sistem.kebun_8_15b);
app.get('/tambah_kebun_8_15b', sistem.tambah_kebun_8_15b);
app.get('/edit_kebun_8_15b', sistem.edit_kebun_8_15b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_16a', sistem.kebun_8_16a);
app.get('/tambah_kebun_8_16a', sistem.tambah_kebun_8_16a);
app.get('/edit_kebun_8_16a', sistem.edit_kebun_8_16a);

app.get('/kebun_8_16b', sistem.kebun_8_16b);
app.get('/tambah_kebun_8_16b', sistem.tambah_kebun_8_16b);
app.get('/edit_kebun_8_16b', sistem.edit_kebun_8_16b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_17a', sistem.kebun_8_17a);
app.get('/tambah_kebun_8_17a', sistem.tambah_kebun_8_17a);
app.get('/edit_kebun_8_17a', sistem.edit_kebun_8_17a);

app.get('/kebun_8_17b', sistem.kebun_8_17b);
app.get('/tambah_kebun_8_17b', sistem.tambah_kebun_8_17b);
app.get('/edit_kebun_8_17b', sistem.edit_kebun_8_17b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_18a', sistem.kebun_8_18a);
app.get('/tambah_kebun_8_18a', sistem.tambah_kebun_8_18a);
app.get('/edit_kebun_8_18a', sistem.edit_kebun_8_18a);

app.get('/kebun_8_18b', sistem.kebun_8_18b);
app.get('/tambah_kebun_8_18b', sistem.tambah_kebun_8_18b);
app.get('/edit_kebun_8_18b', sistem.edit_kebun_8_18b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_19a', sistem.kebun_8_19a);
app.get('/tambah_kebun_8_19a', sistem.tambah_kebun_8_19a);
app.get('/edit_kebun_8_19a', sistem.edit_kebun_8_19a);

app.get('/kebun_8_19b', sistem.kebun_8_19b);
app.get('/tambah_kebun_8_19b', sistem.tambah_kebun_8_19b);
app.get('/edit_kebun_8_19b', sistem.edit_kebun_8_19b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_20a', sistem.kebun_8_20a);
app.get('/tambah_kebun_8_20a', sistem.tambah_kebun_8_20a);
app.get('/edit_kebun_8_20a', sistem.edit_kebun_8_20a);

app.get('/kebun_8_20b', sistem.kebun_8_20b);
app.get('/tambah_kebun_8_20b', sistem.tambah_kebun_8_20b);
app.get('/edit_kebun_8_20b', sistem.edit_kebun_8_20b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_21a', sistem.kebun_8_21a);
app.get('/tambah_kebun_8_21a', sistem.tambah_kebun_8_21a);
app.get('/edit_kebun_8_21a', sistem.edit_kebun_8_21a);

app.get('/kebun_8_21b', sistem.kebun_8_21b);
app.get('/tambah_kebun_8_21b', sistem.tambah_kebun_8_21b);
app.get('/edit_kebun_8_21b', sistem.edit_kebun_8_21b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_22a', sistem.kebun_8_22a);
app.get('/tambah_kebun_8_22a', sistem.tambah_kebun_8_22a);
app.get('/edit_kebun_8_22a', sistem.edit_kebun_8_22a);

app.get('/kebun_8_22b', sistem.kebun_8_22b);
app.get('/tambah_kebun_8_22b', sistem.tambah_kebun_8_22b);
app.get('/edit_kebun_8_22b', sistem.edit_kebun_8_22b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_23a', sistem.kebun_8_23a);
app.get('/tambah_kebun_8_23a', sistem.tambah_kebun_8_23a);
app.get('/edit_kebun_8_23a', sistem.edit_kebun_8_23a);

app.get('/kebun_8_23b', sistem.kebun_8_23b);
app.get('/tambah_kebun_8_23b', sistem.tambah_kebun_8_23b);
app.get('/edit_kebun_8_23b', sistem.edit_kebun_8_23b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_24a', sistem.kebun_8_24a);
app.get('/tambah_kebun_8_24a', sistem.tambah_kebun_8_24a);
app.get('/edit_kebun_8_24a', sistem.edit_kebun_8_24a);

app.get('/kebun_8_24b', sistem.kebun_8_24b);
app.get('/tambah_kebun_8_24b', sistem.tambah_kebun_8_24b);
app.get('/edit_kebun_8_24b', sistem.edit_kebun_8_24b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_25a', sistem.kebun_8_25a);
app.get('/tambah_kebun_8_25a', sistem.tambah_kebun_8_25a);
app.get('/edit_kebun_8_25a', sistem.edit_kebun_8_25a);

app.get('/kebun_8_25b', sistem.kebun_8_25b);
app.get('/tambah_kebun_8_25b', sistem.tambah_kebun_8_25b);
app.get('/edit_kebun_8_25b', sistem.edit_kebun_8_25b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_26a', sistem.kebun_8_26a);
app.get('/tambah_kebun_8_26a', sistem.tambah_kebun_8_26a);
app.get('/edit_kebun_8_26a', sistem.edit_kebun_8_26a);

app.get('/kebun_8_26b', sistem.kebun_8_26b);
app.get('/tambah_kebun_8_26b', sistem.tambah_kebun_8_26b);
app.get('/edit_kebun_8_26b', sistem.edit_kebun_8_26b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_27a', sistem.kebun_8_27a);
app.get('/tambah_kebun_8_27a', sistem.tambah_kebun_8_27a);
app.get('/edit_kebun_8_27a', sistem.edit_kebun_8_27a);

app.get('/kebun_8_27b', sistem.kebun_8_27b);
app.get('/tambah_kebun_8_27b', sistem.tambah_kebun_8_27b);
app.get('/edit_kebun_8_27b', sistem.edit_kebun_8_27b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_28a', sistem.kebun_8_28a);
app.get('/tambah_kebun_8_28a', sistem.tambah_kebun_8_28a);
app.get('/edit_kebun_8_28a', sistem.edit_kebun_8_28a);

app.get('/kebun_8_28b', sistem.kebun_8_28b);
app.get('/tambah_kebun_8_28b', sistem.tambah_kebun_8_28b);
app.get('/edit_kebun_8_28b', sistem.edit_kebun_8_28b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_29a', sistem.kebun_8_29a);
app.get('/tambah_kebun_8_29a', sistem.tambah_kebun_8_29a);
app.get('/edit_kebun_8_29a', sistem.edit_kebun_8_29a);

app.get('/kebun_8_29b', sistem.kebun_8_29b);
app.get('/tambah_kebun_8_29b', sistem.tambah_kebun_8_29b);
app.get('/edit_kebun_8_29b', sistem.edit_kebun_8_29b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_30a', sistem.kebun_8_30a);
app.get('/tambah_kebun_8_30a', sistem.tambah_kebun_8_30a);
app.get('/edit_kebun_8_30a', sistem.edit_kebun_8_30a);

app.get('/kebun_8_30b', sistem.kebun_8_30b);
app.get('/tambah_kebun_8_30b', sistem.tambah_kebun_8_30b);
app.get('/edit_kebun_8_30b', sistem.edit_kebun_8_30b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_31a', sistem.kebun_8_31a);
app.get('/tambah_kebun_8_31a', sistem.tambah_kebun_8_31a);
app.get('/edit_kebun_8_31a', sistem.edit_kebun_8_31a);

app.get('/kebun_8_31b', sistem.kebun_8_31b);
app.get('/tambah_kebun_8_31b', sistem.tambah_kebun_8_31b);
app.get('/edit_kebun_8_31b', sistem.edit_kebun_8_31b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_32a', sistem.kebun_8_32a);
app.get('/tambah_kebun_8_32a', sistem.tambah_kebun_8_32a);
app.get('/edit_kebun_8_32a', sistem.edit_kebun_8_32a);

app.get('/kebun_8_32b', sistem.kebun_8_32b);
app.get('/tambah_kebun_8_32b', sistem.tambah_kebun_8_32b);
app.get('/edit_kebun_8_32b', sistem.edit_kebun_8_32b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_33a', sistem.kebun_8_33a);
app.get('/tambah_kebun_8_33a', sistem.tambah_kebun_8_33a);
app.get('/edit_kebun_8_33a', sistem.edit_kebun_8_33a);

app.get('/kebun_8_33b', sistem.kebun_8_33b);
app.get('/tambah_kebun_8_33b', sistem.tambah_kebun_8_33b);
app.get('/edit_kebun_8_33b', sistem.edit_kebun_8_33b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_34a', sistem.kebun_8_34a);
app.get('/tambah_kebun_8_34a', sistem.tambah_kebun_8_34a);
app.get('/edit_kebun_8_34a', sistem.edit_kebun_8_34a);

app.get('/kebun_8_34b', sistem.kebun_8_34b);
app.get('/tambah_kebun_8_34b', sistem.tambah_kebun_8_34b);
app.get('/edit_kebun_8_34b', sistem.edit_kebun_8_34b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_35a', sistem.kebun_8_35a);
app.get('/tambah_kebun_8_35a', sistem.tambah_kebun_8_35a);
app.get('/edit_kebun_8_35a', sistem.edit_kebun_8_35a);

app.get('/kebun_8_35b', sistem.kebun_8_35b);
app.get('/tambah_kebun_8_35b', sistem.tambah_kebun_8_35b);
app.get('/edit_kebun_8_35b', sistem.edit_kebun_8_35b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_36a', sistem.kebun_8_36a);
app.get('/tambah_kebun_8_36a', sistem.tambah_kebun_8_36a);
app.get('/edit_kebun_8_36a', sistem.edit_kebun_8_36a);

app.get('/kebun_8_36b', sistem.kebun_8_36b);
app.get('/tambah_kebun_8_36b', sistem.tambah_kebun_8_36b);
app.get('/edit_kebun_8_36b', sistem.edit_kebun_8_36b);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_37a', sistem.kebun_8_37a);
app.get('/tambah_kebun_8_37a', sistem.tambah_kebun_8_37a);
app.get('/edit_kebun_8_37a', sistem.edit_kebun_8_37a);

app.get('/kebun_8_37b', sistem.kebun_8_37b);
app.get('/tambah_kebun_8_37b', sistem.tambah_kebun_8_37b);
app.get('/edit_kebun_8_37b', sistem.edit_kebun_8_37b);

app.get('/kebun_8_37c', sistem.kebun_8_37c);
app.get('/tambah_kebun_8_37c', sistem.tambah_kebun_8_37c);
app.get('/edit_kebun_8_37c', sistem.edit_kebun_8_37c);

app.get('/kebun_8_37d', sistem.kebun_8_37d);
app.get('/tambah_kebun_8_37d', sistem.tambah_kebun_8_37d);
app.get('/edit_kebun_8_37d', sistem.edit_kebun_8_37d);

app.get('/kebun_8_37e', sistem.kebun_8_37e);
app.get('/tambah_kebun_8_37e', sistem.tambah_kebun_8_37e);
app.get('/edit_kebun_8_37e', sistem.edit_kebun_8_37e);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_38a', sistem.kebun_8_38a);
app.get('/tambah_kebun_8_38a', sistem.tambah_kebun_8_38a);
app.get('/edit_kebun_8_38a', sistem.edit_kebun_8_38a);

app.get('/kebun_8_38b', sistem.kebun_8_38b);
app.get('/tambah_kebun_8_38b', sistem.tambah_kebun_8_38b);
app.get('/edit_kebun_8_38b', sistem.edit_kebun_8_38b);

app.get('/kebun_8_38c', sistem.kebun_8_38c);
app.get('/tambah_kebun_8_38c', sistem.tambah_kebun_8_38c);
app.get('/edit_kebun_8_38c', sistem.edit_kebun_8_38c);

app.get('/kebun_8_38d', sistem.kebun_8_38d);
app.get('/tambah_kebun_8_38d', sistem.tambah_kebun_8_38d);
app.get('/edit_kebun_8_38d', sistem.edit_kebun_8_38d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_39a', sistem.kebun_8_39a);
app.get('/tambah_kebun_8_39a', sistem.tambah_kebun_8_39a);
app.get('/edit_kebun_8_39a', sistem.edit_kebun_8_39a);

app.get('/kebun_8_39b', sistem.kebun_8_39b);
app.get('/tambah_kebun_8_39b', sistem.tambah_kebun_8_39b);
app.get('/edit_kebun_8_39b', sistem.edit_kebun_8_39b);

app.get('/kebun_8_39c', sistem.kebun_8_39c);
app.get('/tambah_kebun_8_39c', sistem.tambah_kebun_8_39c);
app.get('/edit_kebun_8_39c', sistem.edit_kebun_8_39c);

app.get('/kebun_8_39d', sistem.kebun_8_39d);
app.get('/tambah_kebun_8_39d', sistem.tambah_kebun_8_39d);
app.get('/edit_kebun_8_39d', sistem.edit_kebun_8_39d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_40a', sistem.kebun_8_40a);
app.get('/tambah_kebun_8_40a', sistem.tambah_kebun_8_40a);
app.get('/edit_kebun_8_40a', sistem.edit_kebun_8_40a);

app.get('/kebun_8_40b', sistem.kebun_8_40b);
app.get('/tambah_kebun_8_40b', sistem.tambah_kebun_8_40b);
app.get('/edit_kebun_8_40b', sistem.edit_kebun_8_40b);

app.get('/kebun_8_40c', sistem.kebun_8_40c);
app.get('/tambah_kebun_8_40c', sistem.tambah_kebun_8_40c);
app.get('/edit_kebun_8_40c', sistem.edit_kebun_8_40c);

app.get('/kebun_8_40d', sistem.kebun_8_40d);
app.get('/tambah_kebun_8_40d', sistem.tambah_kebun_8_40d);
app.get('/edit_kebun_8_40d', sistem.edit_kebun_8_40d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_41a', sistem.kebun_8_41a);
app.get('/tambah_kebun_8_41a', sistem.tambah_kebun_8_41a);
app.get('/edit_kebun_8_41a', sistem.edit_kebun_8_41a);

app.get('/kebun_8_41b', sistem.kebun_8_41b);
app.get('/tambah_kebun_8_41b', sistem.tambah_kebun_8_41b);
app.get('/edit_kebun_8_41b', sistem.edit_kebun_8_41b);

app.get('/kebun_8_41c', sistem.kebun_8_41c);
app.get('/tambah_kebun_8_41c', sistem.tambah_kebun_8_41c);
app.get('/edit_kebun_8_41c', sistem.edit_kebun_8_41c);

app.get('/kebun_8_41d', sistem.kebun_8_41d);
app.get('/tambah_kebun_8_41d', sistem.tambah_kebun_8_41d);
app.get('/edit_kebun_8_41d', sistem.edit_kebun_8_41d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_42a', sistem.kebun_8_42a);
app.get('/tambah_kebun_8_42a', sistem.tambah_kebun_8_42a);
app.get('/edit_kebun_8_42a', sistem.edit_kebun_8_42a);

app.get('/kebun_8_42b', sistem.kebun_8_42b);
app.get('/tambah_kebun_8_42b', sistem.tambah_kebun_8_42b);
app.get('/edit_kebun_8_42b', sistem.edit_kebun_8_42b);

app.get('/kebun_8_42c', sistem.kebun_8_42c);
app.get('/tambah_kebun_8_42c', sistem.tambah_kebun_8_42c);
app.get('/edit_kebun_8_42c', sistem.edit_kebun_8_42c);

app.get('/kebun_8_42d', sistem.kebun_8_42d);
app.get('/tambah_kebun_8_42d', sistem.tambah_kebun_8_42d);
app.get('/edit_kebun_8_42d', sistem.edit_kebun_8_42d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_43a', sistem.kebun_8_43a);
app.get('/tambah_kebun_8_43a', sistem.tambah_kebun_8_43a);
app.get('/edit_kebun_8_43a', sistem.edit_kebun_8_43a);

app.get('/kebun_8_43b', sistem.kebun_8_43b);
app.get('/tambah_kebun_8_43b', sistem.tambah_kebun_8_43b);
app.get('/edit_kebun_8_43b', sistem.edit_kebun_8_43b);

app.get('/kebun_8_43c', sistem.kebun_8_43c);
app.get('/tambah_kebun_8_43c', sistem.tambah_kebun_8_43c);
app.get('/edit_kebun_8_43c', sistem.edit_kebun_8_43c);

app.get('/kebun_8_43d', sistem.kebun_8_43d);
app.get('/tambah_kebun_8_43d', sistem.tambah_kebun_8_43d);
app.get('/edit_kebun_8_43d', sistem.edit_kebun_8_43d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_44aa', sistem.kebun_8_44aa);
app.get('/tambah_kebun_8_44aa', sistem.tambah_kebun_8_44aa);
app.get('/edit_kebun_8_44aa', sistem.edit_kebun_8_44aa);

app.get('/kebun_8_44ab', sistem.kebun_8_44ab);
app.get('/tambah_kebun_8_44ab', sistem.tambah_kebun_8_44ab);
app.get('/edit_kebun_8_44ab', sistem.edit_kebun_8_44ab);

app.get('/kebun_8_44ac', sistem.kebun_8_44ac);
app.get('/tambah_kebun_8_44ac', sistem.tambah_kebun_8_44ac);
app.get('/edit_kebun_8_44ac', sistem.edit_kebun_8_44ac);

app.get('/kebun_8_44b', sistem.kebun_8_44b);
app.get('/tambah_kebun_8_44b', sistem.tambah_kebun_8_44b);
app.get('/edit_kebun_8_44b', sistem.edit_kebun_8_44b);

app.get('/kebun_8_44c', sistem.kebun_8_44c);
app.get('/tambah_kebun_8_44c', sistem.tambah_kebun_8_44c);
app.get('/edit_kebun_8_44c', sistem.edit_kebun_8_44c);

app.get('/kebun_8_44d', sistem.kebun_8_44d);
app.get('/tambah_kebun_8_44d', sistem.tambah_kebun_8_44d);
app.get('/edit_kebun_8_44d', sistem.edit_kebun_8_44d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_45aa', sistem.kebun_8_45aa);
app.get('/tambah_kebun_8_45aa', sistem.tambah_kebun_8_45aa);
app.get('/edit_kebun_8_45aa', sistem.edit_kebun_8_45aa);

app.get('/kebun_8_45ab', sistem.kebun_8_45ab);
app.get('/tambah_kebun_8_45ab', sistem.tambah_kebun_8_45ab);
app.get('/edit_kebun_8_45ab', sistem.edit_kebun_8_45ab);

app.get('/kebun_8_45b', sistem.kebun_8_45b);
app.get('/tambah_kebun_8_45b', sistem.tambah_kebun_8_45b);
app.get('/edit_kebun_8_45b', sistem.edit_kebun_8_45b);

app.get('/kebun_8_45c', sistem.kebun_8_45c);
app.get('/tambah_kebun_8_45c', sistem.tambah_kebun_8_45c);
app.get('/edit_kebun_8_45c', sistem.edit_kebun_8_45c);

app.get('/kebun_8_45d', sistem.kebun_8_45d);
app.get('/tambah_kebun_8_45d', sistem.tambah_kebun_8_45d);
app.get('/edit_kebun_8_45d', sistem.edit_kebun_8_45d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_46aa', sistem.kebun_8_46aa);
app.get('/tambah_kebun_8_46aa', sistem.tambah_kebun_8_46aa);
app.get('/edit_kebun_8_46aa', sistem.edit_kebun_8_46aa);

app.get('/kebun_8_46ab', sistem.kebun_8_46ab);
app.get('/tambah_kebun_8_46ab', sistem.tambah_kebun_8_46ab);
app.get('/edit_kebun_8_46ab', sistem.edit_kebun_8_46ab);

app.get('/kebun_8_46b', sistem.kebun_8_46b);
app.get('/tambah_kebun_8_46b', sistem.tambah_kebun_8_46b);
app.get('/edit_kebun_8_46b', sistem.edit_kebun_8_46b);

app.get('/kebun_8_46c', sistem.kebun_8_46c);
app.get('/tambah_kebun_8_46c', sistem.tambah_kebun_8_46c);
app.get('/edit_kebun_8_46c', sistem.edit_kebun_8_46c);

app.get('/kebun_8_46d', sistem.kebun_8_46d);
app.get('/tambah_kebun_8_46d', sistem.tambah_kebun_8_46d);
app.get('/edit_kebun_8_46d', sistem.edit_kebun_8_46d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_47aa', sistem.kebun_8_47aa);
app.get('/tambah_kebun_8_47aa', sistem.tambah_kebun_8_47aa);
app.get('/edit_kebun_8_47aa', sistem.edit_kebun_8_47aa);

app.get('/kebun_8_47ab', sistem.kebun_8_47ab);
app.get('/tambah_kebun_8_47ab', sistem.tambah_kebun_8_47ab);
app.get('/edit_kebun_8_47ab', sistem.edit_kebun_8_47ab);

app.get('/kebun_8_47b', sistem.kebun_8_47b);
app.get('/tambah_kebun_8_47b', sistem.tambah_kebun_8_47b);
app.get('/edit_kebun_8_47b', sistem.edit_kebun_8_47b);

app.get('/kebun_8_47c', sistem.kebun_8_47c);
app.get('/tambah_kebun_8_47c', sistem.tambah_kebun_8_47c);
app.get('/edit_kebun_8_47c', sistem.edit_kebun_8_47c);

app.get('/kebun_8_47d', sistem.kebun_8_47d);
app.get('/tambah_kebun_8_47d', sistem.tambah_kebun_8_47d);
app.get('/edit_kebun_8_47d', sistem.edit_kebun_8_47d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_48a', sistem.kebun_8_48a);
app.get('/tambah_kebun_8_48a', sistem.tambah_kebun_8_48a);
app.get('/edit_kebun_8_48a', sistem.edit_kebun_8_48a);

app.get('/kebun_8_48b', sistem.kebun_8_48b);
app.get('/tambah_kebun_8_48b', sistem.tambah_kebun_8_48b);
app.get('/edit_kebun_8_48b', sistem.edit_kebun_8_48b);

app.get('/kebun_8_48c', sistem.kebun_8_48c);
app.get('/tambah_kebun_8_48c', sistem.tambah_kebun_8_48c);
app.get('/edit_kebun_8_48c', sistem.edit_kebun_8_48c);

app.get('/kebun_8_48d', sistem.kebun_8_48d);
app.get('/tambah_kebun_8_48d', sistem.tambah_kebun_8_48d);
app.get('/edit_kebun_8_48d', sistem.edit_kebun_8_48d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_49a', sistem.kebun_8_49a);
app.get('/tambah_kebun_8_49a', sistem.tambah_kebun_8_49a);
app.get('/edit_kebun_8_49a', sistem.edit_kebun_8_49a);

app.get('/kebun_8_49b', sistem.kebun_8_49b);
app.get('/tambah_kebun_8_49b', sistem.tambah_kebun_8_49b);
app.get('/edit_kebun_8_49b', sistem.edit_kebun_8_49b);

app.get('/kebun_8_49c', sistem.kebun_8_49c);
app.get('/tambah_kebun_8_49c', sistem.tambah_kebun_8_49c);
app.get('/edit_kebun_8_49c', sistem.edit_kebun_8_49c);

app.get('/kebun_8_49d', sistem.kebun_8_49d);
app.get('/tambah_kebun_8_49d', sistem.tambah_kebun_8_49d);
app.get('/edit_kebun_8_49d', sistem.edit_kebun_8_49d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_50aa', sistem.kebun_8_50aa);
app.get('/tambah_kebun_8_50aa', sistem.tambah_kebun_8_50aa);
app.get('/edit_kebun_8_50aa', sistem.edit_kebun_8_50aa);

app.get('/kebun_8_50ab', sistem.kebun_8_50ab);
app.get('/tambah_kebun_8_50ab', sistem.tambah_kebun_8_50ab);
app.get('/edit_kebun_8_50ab', sistem.edit_kebun_8_50ab);

app.get('/kebun_8_50b', sistem.kebun_8_50b);
app.get('/tambah_kebun_8_50b', sistem.tambah_kebun_8_50b);
app.get('/edit_kebun_8_50b', sistem.edit_kebun_8_50b);

app.get('/kebun_8_50c', sistem.kebun_8_50c);
app.get('/tambah_kebun_8_50c', sistem.tambah_kebun_8_50c);
app.get('/edit_kebun_8_50c', sistem.edit_kebun_8_50c);

app.get('/kebun_8_50d', sistem.kebun_8_50d);
app.get('/tambah_kebun_8_50d', sistem.tambah_kebun_8_50d);
app.get('/edit_kebun_8_50d', sistem.edit_kebun_8_50d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_51a', sistem.kebun_8_51a);
app.get('/tambah_kebun_8_51a', sistem.tambah_kebun_8_51a);
app.get('/edit_kebun_8_51a', sistem.edit_kebun_8_51a);

app.get('/kebun_8_51b', sistem.kebun_8_51b);
app.get('/tambah_kebun_8_51b', sistem.tambah_kebun_8_51b);
app.get('/edit_kebun_8_51b', sistem.edit_kebun_8_51b);

app.get('/kebun_8_51c', sistem.kebun_8_51c);
app.get('/tambah_kebun_8_51c', sistem.tambah_kebun_8_51c);
app.get('/edit_kebun_8_51c', sistem.edit_kebun_8_51c);

app.get('/kebun_8_51d', sistem.kebun_8_51d);
app.get('/tambah_kebun_8_51d', sistem.tambah_kebun_8_51d);
app.get('/edit_kebun_8_51d', sistem.edit_kebun_8_51d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_52a', sistem.kebun_8_52a);
app.get('/tambah_kebun_8_52a', sistem.tambah_kebun_8_52a);
app.get('/edit_kebun_8_52a', sistem.edit_kebun_8_52a);

app.get('/kebun_8_52b', sistem.kebun_8_52b);
app.get('/tambah_kebun_8_52b', sistem.tambah_kebun_8_52b);
app.get('/edit_kebun_8_52b', sistem.edit_kebun_8_52b);

app.get('/kebun_8_52c', sistem.kebun_8_52c);
app.get('/tambah_kebun_8_52c', sistem.tambah_kebun_8_52c);
app.get('/edit_kebun_8_52c', sistem.edit_kebun_8_52c);

app.get('/kebun_8_52d', sistem.kebun_8_52d);
app.get('/tambah_kebun_8_52d', sistem.tambah_kebun_8_52d);
app.get('/edit_kebun_8_52d', sistem.edit_kebun_8_52d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_53aa', sistem.kebun_8_53aa);
app.get('/tambah_kebun_8_53aa', sistem.tambah_kebun_8_53aa);
app.get('/edit_kebun_8_53aa', sistem.edit_kebun_8_53aa);

app.get('/kebun_8_53ab', sistem.kebun_8_53ab);
app.get('/tambah_kebun_8_53ab', sistem.tambah_kebun_8_53ab);
app.get('/edit_kebun_8_53ab', sistem.edit_kebun_8_53ab);

app.get('/kebun_8_53ac', sistem.kebun_8_53ac);
app.get('/tambah_kebun_8_53ac', sistem.tambah_kebun_8_53ac);
app.get('/edit_kebun_8_53ac', sistem.edit_kebun_8_53ac);

app.get('/kebun_8_53b', sistem.kebun_8_53b);
app.get('/tambah_kebun_8_53b', sistem.tambah_kebun_8_53b);
app.get('/edit_kebun_8_53b', sistem.edit_kebun_8_53b);

app.get('/kebun_8_53c', sistem.kebun_8_53c);
app.get('/tambah_kebun_8_53c', sistem.tambah_kebun_8_53c);
app.get('/edit_kebun_8_53c', sistem.edit_kebun_8_53c);

app.get('/kebun_8_53d', sistem.kebun_8_53d);
app.get('/tambah_kebun_8_53d', sistem.tambah_kebun_8_53d);
app.get('/edit_kebun_8_53d', sistem.edit_kebun_8_53d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_54aa', sistem.kebun_8_54aa);
app.get('/tambah_kebun_8_54aa', sistem.tambah_kebun_8_54aa);
app.get('/edit_kebun_8_54aa', sistem.edit_kebun_8_54aa);

app.get('/kebun_8_54ab', sistem.kebun_8_54ab);
app.get('/tambah_kebun_8_54ab', sistem.tambah_kebun_8_54ab);
app.get('/edit_kebun_8_54ab', sistem.edit_kebun_8_54ab);

app.get('/kebun_8_54b', sistem.kebun_8_54b);
app.get('/tambah_kebun_8_54b', sistem.tambah_kebun_8_54b);
app.get('/edit_kebun_8_54b', sistem.edit_kebun_8_54b);

app.get('/kebun_8_54c', sistem.kebun_8_54c);
app.get('/tambah_kebun_8_54c', sistem.tambah_kebun_8_54c);
app.get('/edit_kebun_8_54c', sistem.edit_kebun_8_54c);

app.get('/kebun_8_54d', sistem.kebun_8_54d);
app.get('/tambah_kebun_8_54d', sistem.tambah_kebun_8_54d);
app.get('/edit_kebun_8_54d', sistem.edit_kebun_8_54d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_55aa', sistem.kebun_8_55aa);
app.get('/tambah_kebun_8_55aa', sistem.tambah_kebun_8_55aa);
app.get('/edit_kebun_8_55aa', sistem.edit_kebun_8_55aa);

app.get('/kebun_8_55ab', sistem.kebun_8_55ab);
app.get('/tambah_kebun_8_55ab', sistem.tambah_kebun_8_55ab);
app.get('/edit_kebun_8_55ab', sistem.edit_kebun_8_55ab);

app.get('/kebun_8_55b', sistem.kebun_8_55b);
app.get('/tambah_kebun_8_55b', sistem.tambah_kebun_8_55b);
app.get('/edit_kebun_8_55b', sistem.edit_kebun_8_55b);

app.get('/kebun_8_55c', sistem.kebun_8_55c);
app.get('/tambah_kebun_8_55c', sistem.tambah_kebun_8_55c);
app.get('/edit_kebun_8_55c', sistem.edit_kebun_8_55c);

app.get('/kebun_8_55d', sistem.kebun_8_55d);
app.get('/tambah_kebun_8_55d', sistem.tambah_kebun_8_55d);
app.get('/edit_kebun_8_55d', sistem.edit_kebun_8_55d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_56a', sistem.kebun_8_56a);
app.get('/tambah_kebun_8_56a', sistem.tambah_kebun_8_56a);
app.get('/edit_kebun_8_56a', sistem.edit_kebun_8_56a);

app.get('/kebun_8_56b', sistem.kebun_8_56b);
app.get('/tambah_kebun_8_56b', sistem.tambah_kebun_8_56b);
app.get('/edit_kebun_8_56b', sistem.edit_kebun_8_56b);

app.get('/kebun_8_56c', sistem.kebun_8_56c);
app.get('/tambah_kebun_8_56c', sistem.tambah_kebun_8_56c);
app.get('/edit_kebun_8_56c', sistem.edit_kebun_8_56c);

app.get('/kebun_8_56d', sistem.kebun_8_56d);
app.get('/tambah_kebun_8_56d', sistem.tambah_kebun_8_56d);
app.get('/edit_kebun_8_56d', sistem.edit_kebun_8_56d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_57a', sistem.kebun_8_57a);
app.get('/tambah_kebun_8_57a', sistem.tambah_kebun_8_57a);
app.get('/edit_kebun_8_57a', sistem.edit_kebun_8_57a);

app.get('/kebun_8_57b', sistem.kebun_8_57b);
app.get('/tambah_kebun_8_57b', sistem.tambah_kebun_8_57b);
app.get('/edit_kebun_8_57b', sistem.edit_kebun_8_57b);

app.get('/kebun_8_57c', sistem.kebun_8_57c);
app.get('/tambah_kebun_8_57c', sistem.tambah_kebun_8_57c);
app.get('/edit_kebun_8_57c', sistem.edit_kebun_8_57c);

app.get('/kebun_8_57d', sistem.kebun_8_57d);
app.get('/tambah_kebun_8_57d', sistem.tambah_kebun_8_57d);
app.get('/edit_kebun_8_57d', sistem.edit_kebun_8_57d);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_58a', sistem.kebun_8_58a);
app.get('/tambah_kebun_8_58a', sistem.tambah_kebun_8_58a);
app.get('/edit_kebun_8_58a', sistem.edit_kebun_8_58a);

app.get('/kebun_8_58b', sistem.kebun_8_58b);
app.get('/tambah_kebun_8_58b', sistem.tambah_kebun_8_58b);
app.get('/edit_kebun_8_58b', sistem.edit_kebun_8_58b);

app.get('/kebun_8_58c', sistem.kebun_8_58c);
app.get('/tambah_kebun_8_58c', sistem.tambah_kebun_8_58c);
app.get('/edit_kebun_8_58c', sistem.edit_kebun_8_58c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_59a', sistem.kebun_8_59a);
app.get('/tambah_kebun_8_59a', sistem.tambah_kebun_8_59a);
app.get('/edit_kebun_8_59a', sistem.edit_kebun_8_59a);

app.get('/kebun_8_59b', sistem.kebun_8_59b);
app.get('/tambah_kebun_8_59b', sistem.tambah_kebun_8_59b);
app.get('/edit_kebun_8_59b', sistem.edit_kebun_8_59b);

app.get('/kebun_8_59c', sistem.kebun_8_59c);
app.get('/tambah_kebun_8_59c', sistem.tambah_kebun_8_59c);
app.get('/edit_kebun_8_59c', sistem.edit_kebun_8_59c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_60a', sistem.kebun_8_60a);
app.get('/tambah_kebun_8_60a', sistem.tambah_kebun_8_60a);
app.get('/edit_kebun_8_60a', sistem.edit_kebun_8_60a);

app.get('/kebun_8_60b', sistem.kebun_8_60b);
app.get('/tambah_kebun_8_60b', sistem.tambah_kebun_8_60b);
app.get('/edit_kebun_8_60b', sistem.edit_kebun_8_60b);

app.get('/kebun_8_60c', sistem.kebun_8_60c);
app.get('/tambah_kebun_8_60c', sistem.tambah_kebun_8_60c);
app.get('/edit_kebun_8_60c', sistem.edit_kebun_8_60c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_61a', sistem.kebun_8_61a);
app.get('/tambah_kebun_8_61a', sistem.tambah_kebun_8_61a);
app.get('/edit_kebun_8_61a', sistem.edit_kebun_8_61a);

app.get('/kebun_8_61b', sistem.kebun_8_61b);
app.get('/tambah_kebun_8_61b', sistem.tambah_kebun_8_61b);
app.get('/edit_kebun_8_61b', sistem.edit_kebun_8_61b);

app.get('/kebun_8_61c', sistem.kebun_8_61c);
app.get('/tambah_kebun_8_61c', sistem.tambah_kebun_8_61c);
app.get('/edit_kebun_8_61c', sistem.edit_kebun_8_61c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_62a', sistem.kebun_8_62a);
app.get('/tambah_kebun_8_62a', sistem.tambah_kebun_8_62a);
app.get('/edit_kebun_8_62a', sistem.edit_kebun_8_62a);

app.get('/kebun_8_62b', sistem.kebun_8_62b);
app.get('/tambah_kebun_8_62b', sistem.tambah_kebun_8_62b);
app.get('/edit_kebun_8_62b', sistem.edit_kebun_8_62b);

app.get('/kebun_8_62c', sistem.kebun_8_62c);
app.get('/tambah_kebun_8_62c', sistem.tambah_kebun_8_62c);
app.get('/edit_kebun_8_62c', sistem.edit_kebun_8_62c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_63a', sistem.kebun_8_63a);
app.get('/tambah_kebun_8_63a', sistem.tambah_kebun_8_63a);
app.get('/edit_kebun_8_63a', sistem.edit_kebun_8_63a);

app.get('/kebun_8_63b', sistem.kebun_8_63b);
app.get('/tambah_kebun_8_63b', sistem.tambah_kebun_8_63b);
app.get('/edit_kebun_8_63b', sistem.edit_kebun_8_63b);

app.get('/kebun_8_63c', sistem.kebun_8_63c);
app.get('/tambah_kebun_8_63c', sistem.tambah_kebun_8_63c);
app.get('/edit_kebun_8_63c', sistem.edit_kebun_8_63c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_64a', sistem.kebun_8_64a);
app.get('/tambah_kebun_8_64a', sistem.tambah_kebun_8_64a);
app.get('/edit_kebun_8_64a', sistem.edit_kebun_8_64a);

app.get('/kebun_8_64b', sistem.kebun_8_64b);
app.get('/tambah_kebun_8_64b', sistem.tambah_kebun_8_64b);
app.get('/edit_kebun_8_64b', sistem.edit_kebun_8_64b);

app.get('/kebun_8_64c', sistem.kebun_8_64c);
app.get('/tambah_kebun_8_64c', sistem.tambah_kebun_8_64c);
app.get('/edit_kebun_8_64c', sistem.edit_kebun_8_64c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_65a', sistem.kebun_8_65a);
app.get('/tambah_kebun_8_65a', sistem.tambah_kebun_8_65a);
app.get('/edit_kebun_8_65a', sistem.edit_kebun_8_65a);

app.get('/kebun_8_65b', sistem.kebun_8_65b);
app.get('/tambah_kebun_8_65b', sistem.tambah_kebun_8_65b);
app.get('/edit_kebun_8_65b', sistem.edit_kebun_8_65b);

app.get('/kebun_8_65c', sistem.kebun_8_65c);
app.get('/tambah_kebun_8_65c', sistem.tambah_kebun_8_65c);
app.get('/edit_kebun_8_65c', sistem.edit_kebun_8_65c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_66a', sistem.kebun_8_66a);
app.get('/tambah_kebun_8_66a', sistem.tambah_kebun_8_66a);
app.get('/edit_kebun_8_66a', sistem.edit_kebun_8_66a);

app.get('/kebun_8_66b', sistem.kebun_8_66b);
app.get('/tambah_kebun_8_66b', sistem.tambah_kebun_8_66b);
app.get('/edit_kebun_8_66b', sistem.edit_kebun_8_66b);

app.get('/kebun_8_66c', sistem.kebun_8_66c);
app.get('/tambah_kebun_8_66c', sistem.tambah_kebun_8_66c);
app.get('/edit_kebun_8_66c', sistem.edit_kebun_8_66c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_67a', sistem.kebun_8_67a);
app.get('/tambah_kebun_8_67a', sistem.tambah_kebun_8_67a);
app.get('/edit_kebun_8_67a', sistem.edit_kebun_8_67a);

app.get('/kebun_8_67b', sistem.kebun_8_67b);
app.get('/tambah_kebun_8_67b', sistem.tambah_kebun_8_67b);
app.get('/edit_kebun_8_67b', sistem.edit_kebun_8_67b);

app.get('/kebun_8_67c', sistem.kebun_8_67c);
app.get('/tambah_kebun_8_67c', sistem.tambah_kebun_8_67c);
app.get('/edit_kebun_8_67c', sistem.edit_kebun_8_67c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_68a', sistem.kebun_8_68a);
app.get('/tambah_kebun_8_68a', sistem.tambah_kebun_8_68a);
app.get('/edit_kebun_8_68a', sistem.edit_kebun_8_68a);

app.get('/kebun_8_68b', sistem.kebun_8_68b);
app.get('/tambah_kebun_8_68b', sistem.tambah_kebun_8_68b);
app.get('/edit_kebun_8_68b', sistem.edit_kebun_8_68b);

app.get('/kebun_8_68c', sistem.kebun_8_68c);
app.get('/tambah_kebun_8_68c', sistem.tambah_kebun_8_68c);
app.get('/edit_kebun_8_68c', sistem.edit_kebun_8_68c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_69a', sistem.kebun_8_69a);
app.get('/tambah_kebun_8_69a', sistem.tambah_kebun_8_69a);
app.get('/edit_kebun_8_69a', sistem.edit_kebun_8_69a);

app.get('/kebun_8_69b', sistem.kebun_8_69b);
app.get('/tambah_kebun_8_69b', sistem.tambah_kebun_8_69b);
app.get('/edit_kebun_8_69b', sistem.edit_kebun_8_69b);

app.get('/kebun_8_69c', sistem.kebun_8_69c);
app.get('/tambah_kebun_8_69c', sistem.tambah_kebun_8_69c);
app.get('/edit_kebun_8_69c', sistem.edit_kebun_8_69c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_70a', sistem.kebun_8_70a);
app.get('/tambah_kebun_8_70a', sistem.tambah_kebun_8_70a);
app.get('/edit_kebun_8_70a', sistem.edit_kebun_8_70a);

app.get('/kebun_8_70b', sistem.kebun_8_70b);
app.get('/tambah_kebun_8_70b', sistem.tambah_kebun_8_70b);
app.get('/edit_kebun_8_70b', sistem.edit_kebun_8_70b);

app.get('/kebun_8_70c', sistem.kebun_8_70c);
app.get('/tambah_kebun_8_70c', sistem.tambah_kebun_8_70c);
app.get('/edit_kebun_8_70c', sistem.edit_kebun_8_70c);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_71a', sistem.kebun_8_71a);
app.get('/tambah_kebun_8_71a', sistem.tambah_kebun_8_71a);
app.get('/edit_kebun_8_71a', sistem.edit_kebun_8_71a);

app.get('/kebun_8_71b', sistem.kebun_8_71b);
app.get('/tambah_kebun_8_71b', sistem.tambah_kebun_8_71b);
app.get('/edit_kebun_8_71b', sistem.edit_kebun_8_71b);

app.get('/kebun_8_71c', sistem.kebun_8_71c);
app.get('/tambah_kebun_8_71c', sistem.tambah_kebun_8_71c);
app.get('/edit_kebun_8_71c', sistem.edit_kebun_8_71c);
/*==============================================================================*/

/*=========================Kebudayaan dan Pariwisata============================*/
app.get('/pariwisata', sistem.pariwisata);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/budpar_9_1', sistem.budpar_9_1);
app.get('/tambah_budpar_9_1/add', sistem.tambah_budpar_9_1);
app.post('/tambah_budpar_9_1/add', sistem.save_budpar_9_1);
app.get('/edit_budpar_9_1/edit/:id', sistem.edit_budpar_9_1);
app.post('/edit_budpar_9_1/edit/:id', sistem.save_edit_budpar_9_1);
app.get('/edit_budpar_9_1/delete/:id', sistem.delete_budpar_9_1);

/*==============================================================================*/

/*=========================Industri dan Perdagangan=============================*/
app.get('/indag', sistem.indag);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_1a', sistem.indag_10_1a);
app.get('/tambah_indag_10_1a/add', sistem.tambah_indag_10_1a);
app.post('/tambah_indag_10_1a/add', sistem.save_indag_10_1a);
app.get('/edit_indag_10_1a/edit/:id', sistem.edit_indag_10_1a);
app.post('/edit_indag_10_1a/edit/:id', sistem.save_edit_indag_10_1a);
app.get('/edit_indag_10_1a/delete/:id', sistem.delete_indag_10_1a);

app.get('/indag_10_1b', sistem.indag_10_1b);
app.get('/tambah_indag_10_1b/add', sistem.tambah_indag_10_1b);
app.post('/tambah_indag_10_1b/add', sistem.save_indag_10_1b);
app.get('/edit_indag_10_1b/edit/:id', sistem.edit_indag_10_1b);
app.post('/edit_indag_10_1b/edit/:id', sistem.save_edit_indag_10_1b);
app.get('/edit_indag_10_1b/delete/:id', sistem.delete_indag_10_1b);


app.get('/indag_10_1c', sistem.indag_10_1c);
app.get('/tambah_indag_10_1c/add', sistem.tambah_indag_10_1c);
app.post('/tambah_indag_10_1c/add', sistem.save_indag_10_1c);
app.get('/edit_indag_10_1c/edit/:id', sistem.edit_indag_10_1c);
app.post('/edit_indag_10_1c/edit/:id', sistem.save_edit_indag_10_1c);
app.get('/edit_indag_10_1c/delete/:id', sistem.delete_indag_10_1c);

app.get('/indag_10_1d', sistem.indag_10_1d);
app.get('/tambah_indag_10_1d/add', sistem.tambah_indag_10_1d);
app.post('/tambah_indag_10_1d/add', sistem.save_indag_10_1d);
app.get('/edit_indag_10_1d/edit/:id', sistem.edit_indag_10_1d);
app.post('/edit_indag_10_1d/edit/:id', sistem.save_edit_indag_10_1d);
app.get('/edit_indag_10_1d/delete/:id', sistem.delete_indag_10_1d);

app.get('/indag_10_1e', sistem.indag_10_1e);
app.get('/tambah_indag_10_1e/add', sistem.tambah_indag_10_1e);
app.post('/tambah_indag_10_1e/add', sistem.save_indag_10_1e);
app.get('/edit_indag_10_1e/edit/:id', sistem.edit_indag_10_1e);
app.post('/edit_indag_10_1e/edit/:id', sistem.save_edit_indag_10_1e);
app.get('/edit_indag_10_1e/delete/:id', sistem.delete_indag_10_1e);

app.get('/indag_10_1f', sistem.indag_10_1f);
app.get('/tambah_indag_10_1f/add', sistem.tambah_indag_10_1f);
app.post('/tambah_indag_10_1f/add', sistem.save_indag_10_1f);
app.get('/edit_indag_10_1f/edit/:id', sistem.edit_indag_10_1f);
app.post('/edit_indag_10_1f/edit/:id', sistem.save_edit_indag_10_1f);
app.get('/edit_indag_10_1f/delete/:id', sistem.delete_indag_10_1f);

app.get('/indag_10_1g', sistem.indag_10_1g);
app.get('/tambah_indag_10_1g/add', sistem.tambah_indag_10_1g);
app.post('/tambah_indag_10_1g/add', sistem.save_indag_10_1g);
app.get('/edit_indag_10_1g/edit/:id', sistem.edit_indag_10_1g);
app.post('/edit_indag_10_1g/edit/:id', sistem.save_edit_indag_10_1g);
app.get('/edit_indag_10_1g/delete/:id', sistem.delete_indag_10_1g);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_2a', sistem.indag_10_2a);
app.get('/tambah_indag_10_2a/add', sistem.tambah_indag_10_2a);
app.post('/tambah_indag_10_2a/add', sistem.save_indag_10_2a);
app.get('/edit_indag_10_2a/edit/:id', sistem.edit_indag_10_2a);
app.post('/edit_indag_10_2a/edit/:id', sistem.save_edit_indag_10_2a);
app.get('/edit_indag_10_2a/delete/:id', sistem.delete_indag_10_2a);

app.get('/indag_10_2b', sistem.indag_10_2b);
app.get('/tambah_indag_10_2b/add', sistem.tambah_indag_10_2b);
app.post('/tambah_indag_10_2b/add', sistem.save_indag_10_2b);
app.get('/edit_indag_10_2b/edit/:id', sistem.edit_indag_10_2b);
app.post('/edit_indag_10_2b/edit/:id', sistem.save_edit_indag_10_2b);
app.get('/edit_indag_10_2b/delete/:id', sistem.delete_indag_10_2b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_3', sistem.indag_10_3);
app.get('/tambah_indag_10_3/add', sistem.tambah_indag_10_3);
app.post('/tambah_indag_10_3/add', sistem.save_indag_10_3);
app.get('/edit_indag_10_3/edit/:id', sistem.edit_indag_10_3);
app.post('/edit_indag_10_3/edit/:id', sistem.save_edit_indag_10_3);
app.get('/edit_indag_10_3/delete/:id', sistem.delete_indag_10_3);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_4', sistem.indag_10_4);
app.get('/tambah_indag_10_4/add', sistem.tambah_indag_10_4);
app.post('/tambah_indag_10_4/add', sistem.save_indag_10_4);
app.get('/edit_indag_10_4/edit/:id', sistem.edit_indag_10_4);
app.post('/edit_indag_10_4/edit/:id', sistem.save_edit_indag_10_4);
app.get('/edit_indag_10_4/delete/:id', sistem.delete_indag_10_4);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_5', sistem.indag_10_5);
app.get('/tambah_indag_10_5/add', sistem.tambah_indag_10_5);
app.post('/tambah_indag_10_5/add', sistem.save_indag_10_5);
app.get('/edit_indag_10_5/edit/:id', sistem.edit_indag_10_5);
app.post('/edit_indag_10_5/edit/:id', sistem.save_edit_indag_10_5);
app.get('/edit_indag_10_5/delete/:id', sistem.delete_indag_10_5);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_6', sistem.indag_10_6);
app.get('/tambah_indag_10_6/add', sistem.tambah_indag_10_6);
app.post('/tambah_indag_10_6/add', sistem.save_indag_10_6);
app.get('/edit_indag_10_6/edit/:id', sistem.edit_indag_10_6);
app.post('/edit_indag_10_6/edit/:id', sistem.save_edit_indag_10_6);
app.get('/edit_indag_10_6/delete/:id', sistem.delete_indag_10_6);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_7', sistem.indag_10_7);
app.get('/tambah_indag_10_7/add', sistem.tambah_indag_10_7);
app.post('/tambah_indag_10_7/add', sistem.save_indag_10_7);
app.get('/edit_indag_10_7/edit/:id', sistem.edit_indag_10_7);
app.post('/edit_indag_10_7/edit/:id', sistem.save_edit_indag_10_7);
app.get('/edit_indag_10_7/delete/:id', sistem.delete_indag_10_7);
/*==============================================================================*/

/*==========================Promosi dan Penanaman Modal=========================*/
app.get('/promod', sistem.promod);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/promod_11_1a', sistem.promod_11_1a);
app.get('/tambah_promod_11_1a/add', sistem.tambah_promod_11_1a);
app.post('/tambah_promod_11_1a/add', sistem.save_promod_11_1a);
app.get('/edit_promod_11_1a/edit/:id', sistem.edit_promod_11_1a);
app.post('/edit_promod_11_1a/edit/:id', sistem.save_edit_promod_11_1a);
app.get('/edit_promod_11_1a/delete/:id', sistem.delete_promod_11_1a);
/*==============================================================================*/
app.get('/promod_11_1b', sistem.promod_11_1b);
app.get('/tambah_promod_11_1b', sistem.tambah_promod_11_1b);
app.get('/edit_promod_11_1b', sistem.edit_promod_11_1b);
/*==============================================================================*/
app.get('/promod_11_1c', sistem.promod_11_1c);
app.get('/tambah_promod_11_1c', sistem.tambah_promod_11_1c);
app.get('/edit_promod_11_1c', sistem.edit_promod_11_1c);
/*==============================================================================*/
app.get('/promod_11_1d', sistem.promod_11_1d);
app.get('/tambah_promod_11_1d', sistem.tambah_promod_11_1d);
app.get('/edit_promod_11_1d', sistem.edit_promod_11_1d);
/*==============================================================================*/
app.get('/promod_11_1e', sistem.promod_11_1e);
app.get('/tambah_promod_11_1e', sistem.tambah_promod_11_1e);
app.get('/edit_promod_11_1e', sistem.edit_promod_11_1e);
/*==============================================================================*/
app.get('/promod_11_1f', sistem.promod_11_1f);
app.get('/tambah_promod_11_1f', sistem.tambah_promod_11_1f);
app.get('/edit_promod_11_1f', sistem.edit_promod_11_1f);
/*==============================================================================*/
app.get('/promod_11_1g', sistem.promod_11_1g);
app.get('/tambah_promod_11_1g', sistem.tambah_promod_11_1g);
app.get('/edit_promod_11_1g', sistem.edit_promod_11_1g);
/*==============================================================================*/

/*=================================Informatika==================================*/
app.get('/informatika', sistem.informatika);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/informatika_12_1', sistem.informatika_12_1);
app.get('/tambah_informatika_12_1', sistem.tambah_informatika_12_1);
app.get('/edit_informatika_12_1', sistem.edit_informatika_12_1);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/informatika_12_2', sistem.informatika_12_2);
app.get('/tambah_informatika_12_2', sistem.tambah_informatika_12_2);
app.get('/edit_informatika_12_2', sistem.edit_informatika_12_2);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/informatika_12_3', sistem.informatika_12_3);
app.get('/tambah_informatika_12_3', sistem.tambah_informatika_12_3);
app.get('/edit_informatika_12_3', sistem.edit_informatika_12_3);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/informatika_12_4', sistem.informatika_12_4);
app.get('/tambah_informatika_12_4', sistem.tambah_informatika_12_4);
app.get('/edit_informatika_12_4', sistem.edit_informatika_12_4);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/informatika_12_5', sistem.informatika_12_5);
app.get('/tambah_informatika_12_5', sistem.tambah_informatika_12_5);
app.get('/edit_informatika_12_5', sistem.edit_informatika_12_5);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/informatika_12_6', sistem.informatika_12_6);
app.get('/tambah_informatika_12_6', sistem.tambah_informatika_12_6);
app.get('/edit_informatika_12_6', sistem.edit_informatika_12_6);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/informatika_12_7', sistem.informatika_12_7);
app.get('/tambah_informatika_12_7', sistem.tambah_informatika_12_7);
app.get('/edit_informatika_12_7', sistem.edit_informatika_12_7);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/informatika_12_8', sistem.informatika_12_8);
app.get('/tambah_informatika_12_8', sistem.tambah_informatika_12_8);
app.get('/edit_informatika_12_8', sistem.edit_informatika_12_8);
/*==============================================================================*/

/*======================Tanaman Pangan dan Hortikultura=========================*/
app.get('/hortikultura', sistem.hortikultura);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_1a', sistem.hortikultura_13_1a);
app.get('/tambah_hortikultura_13_1a', sistem.tambah_hortikultura_13_1a);
app.get('/edit_hortikultura_13_1a', sistem.edit_hortikultura_13_1a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_1b', sistem.hortikultura_13_1b);
app.get('/tambah_hortikultura_13_1b', sistem.tambah_hortikultura_13_1b);
app.get('/edit_hortikultura_13_1b', sistem.edit_hortikultura_13_1b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_1c', sistem.hortikultura_13_1c);
app.get('/tambah_hortikultura_13_1c', sistem.tambah_hortikultura_13_1c);
app.get('/edit_hortikultura_13_1c', sistem.edit_hortikultura_13_1c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_1d', sistem.hortikultura_13_1d);
app.get('/tambah_hortikultura_13_1d', sistem.tambah_hortikultura_13_1d);
app.get('/edit_hortikultura_13_1d', sistem.edit_hortikultura_13_1d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_1e', sistem.hortikultura_13_1e);
app.get('/tambah_hortikultura_13_1e', sistem.tambah_hortikultura_13_1e);
app.get('/edit_hortikultura_13_1e', sistem.edit_hortikultura_13_1e);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_1f', sistem.hortikultura_13_1f);
app.get('/tambah_hortikultura_13_1f', sistem.tambah_hortikultura_13_1f);
app.get('/edit_hortikultura_13_1f', sistem.edit_hortikultura_13_1f);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_2a', sistem.hortikultura_13_2a);
app.get('/tambah_hortikultura_13_2a', sistem.tambah_hortikultura_13_2a);
app.get('/edit_hortikultura_13_2a', sistem.edit_hortikultura_13_2a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_2b', sistem.hortikultura_13_2b);
app.get('/tambah_hortikultura_13_2b', sistem.tambah_hortikultura_13_2b);
app.get('/edit_hortikultura_13_2b', sistem.edit_hortikultura_13_2b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_2c', sistem.hortikultura_13_2c);
app.get('/tambah_hortikultura_13_2c', sistem.tambah_hortikultura_13_2c);
app.get('/edit_hortikultura_13_2c', sistem.edit_hortikultura_13_2c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_2d', sistem.hortikultura_13_2d);
app.get('/tambah_hortikultura_13_2d', sistem.tambah_hortikultura_13_2d);
app.get('/edit_hortikultura_13_2d', sistem.edit_hortikultura_13_2d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_2d', sistem.hortikultura_13_2d);
app.get('/tambah_hortikultura_13_2d', sistem.tambah_hortikultura_13_2d);
app.get('/edit_hortikultura_13_2d', sistem.edit_hortikultura_13_2d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3aa', sistem.hortikultura_13_3aa);
app.get('/tambah_hortikultura_13_3aa', sistem.tambah_hortikultura_13_3aa);
app.get('/edit_hortikultura_13_3aa', sistem.edit_hortikultura_13_3aa);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3ab', sistem.hortikultura_13_3ab);
app.get('/tambah_hortikultura_13_3ab', sistem.tambah_hortikultura_13_3ab);
app.get('/edit_hortikultura_13_3ab', sistem.edit_hortikultura_13_3ab);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3ac', sistem.hortikultura_13_3ac);
app.get('/tambah_hortikultura_13_3ac', sistem.tambah_hortikultura_13_3ac);
app.get('/edit_hortikultura_13_3ac', sistem.edit_hortikultura_13_3ac);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3ad', sistem.hortikultura_13_3ad);
app.get('/tambah_hortikultura_13_3ad', sistem.tambah_hortikultura_13_3ad);
app.get('/edit_hortikultura_13_3ad', sistem.edit_hortikultura_13_3ad);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3ae', sistem.hortikultura_13_3ae);
app.get('/tambah_hortikultura_13_3ae', sistem.tambah_hortikultura_13_3ae);
app.get('/edit_hortikultura_13_3ae', sistem.edit_hortikultura_13_3ae);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3ba', sistem.hortikultura_13_3ba);
app.get('/tambah_hortikultura_13_3ba', sistem.tambah_hortikultura_13_3ba);
app.get('/edit_hortikultura_13_3ba', sistem.edit_hortikultura_13_3ba);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3bb', sistem.hortikultura_13_3bb);
app.get('/tambah_hortikultura_13_3bb', sistem.tambah_hortikultura_13_3bb);
app.get('/edit_hortikultura_13_3bb', sistem.edit_hortikultura_13_3bb);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3bc', sistem.hortikultura_13_3bc);
app.get('/tambah_hortikultura_13_3bc', sistem.tambah_hortikultura_13_3bc);
app.get('/edit_hortikultura_13_3bc', sistem.edit_hortikultura_13_3bc);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3bd', sistem.hortikultura_13_3bd);
app.get('/tambah_hortikultura_13_3bd', sistem.tambah_hortikultura_13_3bd);
app.get('/edit_hortikultura_13_3bd', sistem.edit_hortikultura_13_3bd);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3be', sistem.hortikultura_13_3be);
app.get('/tambah_hortikultura_13_3be', sistem.tambah_hortikultura_13_3be);
app.get('/edit_hortikultura_13_3be', sistem.edit_hortikultura_13_3be);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3ca', sistem.hortikultura_13_3ca);
app.get('/tambah_hortikultura_13_3ca', sistem.tambah_hortikultura_13_3ca);
app.get('/edit_hortikultura_13_3ca', sistem.edit_hortikultura_13_3ca);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3cb', sistem.hortikultura_13_3cb);
app.get('/tambah_hortikultura_13_3cb', sistem.tambah_hortikultura_13_3cb);
app.get('/edit_hortikultura_13_3cb', sistem.edit_hortikultura_13_3cb);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3cc', sistem.hortikultura_13_3cc);
app.get('/tambah_hortikultura_13_3cc', sistem.tambah_hortikultura_13_3cc);
app.get('/edit_hortikultura_13_3cc', sistem.edit_hortikultura_13_3cc);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3cd', sistem.hortikultura_13_3cd);
app.get('/tambah_hortikultura_13_3cd', sistem.tambah_hortikultura_13_3cd);
app.get('/edit_hortikultura_13_3cd', sistem.edit_hortikultura_13_3cd);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3ce', sistem.hortikultura_13_3ce);
app.get('/tambah_hortikultura_13_3ce', sistem.tambah_hortikultura_13_3ce);
app.get('/edit_hortikultura_13_3ce', sistem.edit_hortikultura_13_3ce);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3da', sistem.hortikultura_13_3da);
app.get('/tambah_hortikultura_13_3da', sistem.tambah_hortikultura_13_3da);
app.get('/edit_hortikultura_13_3da', sistem.edit_hortikultura_13_3da);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3db', sistem.hortikultura_13_3db);
app.get('/tambah_hortikultura_13_3db', sistem.tambah_hortikultura_13_3db);
app.get('/edit_hortikultura_13_3db', sistem.edit_hortikultura_13_3db);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3dc', sistem.hortikultura_13_3dc);
app.get('/tambah_hortikultura_13_3dc', sistem.tambah_hortikultura_13_3dc);
app.get('/edit_hortikultura_13_3dc', sistem.edit_hortikultura_13_3dc);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3dd', sistem.hortikultura_13_3dd);
app.get('/tambah_hortikultura_13_3dd', sistem.tambah_hortikultura_13_3dd);
app.get('/edit_hortikultura_13_3dd', sistem.edit_hortikultura_13_3dd);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3de', sistem.hortikultura_13_3de);
app.get('/tambah_hortikultura_13_3de', sistem.tambah_hortikultura_13_3de);
app.get('/edit_hortikultura_13_3de', sistem.edit_hortikultura_13_3de);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3ea', sistem.hortikultura_13_3ea);
app.get('/tambah_hortikultura_13_3ea', sistem.tambah_hortikultura_13_3ea);
app.get('/edit_hortikultura_13_3ea', sistem.edit_hortikultura_13_3ea);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3eb', sistem.hortikultura_13_3eb);
app.get('/tambah_hortikultura_13_3eb', sistem.tambah_hortikultura_13_3eb);
app.get('/edit_hortikultura_13_3eb', sistem.edit_hortikultura_13_3eb);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3ec', sistem.hortikultura_13_3ec);
app.get('/tambah_hortikultura_13_3ec', sistem.tambah_hortikultura_13_3ec);
app.get('/edit_hortikultura_13_3ec', sistem.edit_hortikultura_13_3ec);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3fa', sistem.hortikultura_13_3fa);
app.get('/tambah_hortikultura_13_3fa', sistem.tambah_hortikultura_13_3fa);
app.get('/edit_hortikultura_13_3fa', sistem.edit_hortikultura_13_3fa);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3fb', sistem.hortikultura_13_3fb);
app.get('/tambah_hortikultura_13_3fb', sistem.tambah_hortikultura_13_3fb);
app.get('/edit_hortikultura_13_3fb', sistem.edit_hortikultura_13_3fb);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3fc', sistem.hortikultura_13_3fc);
app.get('/tambah_hortikultura_13_3fc', sistem.tambah_hortikultura_13_3fc);
app.get('/edit_hortikultura_13_3fc', sistem.edit_hortikultura_13_3fc);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3ga', sistem.hortikultura_13_3ga);
app.get('/tambah_hortikultura_13_3ga', sistem.tambah_hortikultura_13_3ga);
app.get('/edit_hortikultura_13_3ga', sistem.edit_hortikultura_13_3ga);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3gb', sistem.hortikultura_13_3gb);
app.get('/tambah_hortikultura_13_3gb', sistem.tambah_hortikultura_13_3gb);
app.get('/edit_hortikultura_13_3gb', sistem.edit_hortikultura_13_3gb);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_3gc', sistem.hortikultura_13_3gc);
app.get('/tambah_hortikultura_13_3gc', sistem.tambah_hortikultura_13_3gc);
app.get('/edit_hortikultura_13_3gc', sistem.edit_hortikultura_13_3gc);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4aa', sistem.hortikultura_13_4aa);
app.get('/tambah_hortikultura_13_4aa', sistem.tambah_hortikultura_13_4aa);
app.get('/edit_hortikultura_13_4aa', sistem.edit_hortikultura_13_4aa);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ab', sistem.hortikultura_13_4ab);
app.get('/tambah_hortikultura_13_4ab', sistem.tambah_hortikultura_13_4ab);
app.get('/edit_hortikultura_13_4ab', sistem.edit_hortikultura_13_4ab);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ac', sistem.hortikultura_13_4ac);
app.get('/tambah_hortikultura_13_4ac', sistem.tambah_hortikultura_13_4ac);
app.get('/edit_hortikultura_13_4ac', sistem.edit_hortikultura_13_4ac);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ad', sistem.hortikultura_13_4ad);
app.get('/tambah_hortikultura_13_4ad', sistem.tambah_hortikultura_13_4ad);
app.get('/edit_hortikultura_13_4ad', sistem.edit_hortikultura_13_4ad);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ae', sistem.hortikultura_13_4ae);
app.get('/tambah_hortikultura_13_4ae', sistem.tambah_hortikultura_13_4ae);
app.get('/edit_hortikultura_13_4ae', sistem.edit_hortikultura_13_4ae);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4af', sistem.hortikultura_13_4af);
app.get('/tambah_hortikultura_13_4af', sistem.tambah_hortikultura_13_4af);
app.get('/edit_hortikultura_13_4af', sistem.edit_hortikultura_13_4af);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ag', sistem.hortikultura_13_4ag);
app.get('/tambah_hortikultura_13_4ag', sistem.tambah_hortikultura_13_4ag);
app.get('/edit_hortikultura_13_4ag', sistem.edit_hortikultura_13_4ag);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ba', sistem.hortikultura_13_4ba);
app.get('/tambah_hortikultura_13_4ba', sistem.tambah_hortikultura_13_4ba);
app.get('/edit_hortikultura_13_4ba', sistem.edit_hortikultura_13_4ba);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4bb', sistem.hortikultura_13_4bb);
app.get('/tambah_hortikultura_13_4bb', sistem.tambah_hortikultura_13_4bb);
app.get('/edit_hortikultura_13_4bb', sistem.edit_hortikultura_13_4bb);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4bc', sistem.hortikultura_13_4bc);
app.get('/tambah_hortikultura_13_4bc', sistem.tambah_hortikultura_13_4bc);
app.get('/edit_hortikultura_13_4bc', sistem.edit_hortikultura_13_4bc);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4be', sistem.hortikultura_13_4be);
app.get('/tambah_hortikultura_13_4be', sistem.tambah_hortikultura_13_4be);
app.get('/edit_hortikultura_13_4be', sistem.edit_hortikultura_13_4be);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4bf', sistem.hortikultura_13_4bf);
app.get('/tambah_hortikultura_13_4bf', sistem.tambah_hortikultura_13_4bf);
app.get('/edit_hortikultura_13_4bf', sistem.edit_hortikultura_13_4bf);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4bg', sistem.hortikultura_13_4bg);
app.get('/tambah_hortikultura_13_4bg', sistem.tambah_hortikultura_13_4bg);
app.get('/edit_hortikultura_13_4bg', sistem.edit_hortikultura_13_4bg);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ca', sistem.hortikultura_13_4ca);
app.get('/tambah_hortikultura_13_4ca', sistem.tambah_hortikultura_13_4ca);
app.get('/edit_hortikultura_13_4ca', sistem.edit_hortikultura_13_4ca);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4cb', sistem.hortikultura_13_4cb);
app.get('/tambah_hortikultura_13_4cb', sistem.tambah_hortikultura_13_4cb);
app.get('/edit_hortikultura_13_4cb', sistem.edit_hortikultura_13_4cb);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4cc', sistem.hortikultura_13_4cc);
app.get('/tambah_hortikultura_13_4cc', sistem.tambah_hortikultura_13_4cc);
app.get('/edit_hortikultura_13_4cc', sistem.edit_hortikultura_13_4cc);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4cd', sistem.hortikultura_13_4cd);
app.get('/tambah_hortikultura_13_4cd', sistem.tambah_hortikultura_13_4cd);
app.get('/edit_hortikultura_13_4cd', sistem.edit_hortikultura_13_4cd);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ce', sistem.hortikultura_13_4ce);
app.get('/tambah_hortikultura_13_4ce', sistem.tambah_hortikultura_13_4ce);
app.get('/edit_hortikultura_13_4ce', sistem.edit_hortikultura_13_4ce);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4cf', sistem.hortikultura_13_4cf);
app.get('/tambah_hortikultura_13_4cf', sistem.tambah_hortikultura_13_4cf);
app.get('/edit_hortikultura_13_4cf', sistem.edit_hortikultura_13_4cf);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4cg', sistem.hortikultura_13_4cg);
app.get('/tambah_hortikultura_13_4cg', sistem.tambah_hortikultura_13_4cg);
app.get('/edit_hortikultura_13_4cg', sistem.edit_hortikultura_13_4cg);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4da', sistem.hortikultura_13_4da);
app.get('/tambah_hortikultura_13_4da', sistem.tambah_hortikultura_13_4da);
app.get('/edit_hortikultura_13_4da', sistem.edit_hortikultura_13_4da);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4db', sistem.hortikultura_13_4db);
app.get('/tambah_hortikultura_13_4db', sistem.tambah_hortikultura_13_4db);
app.get('/edit_hortikultura_13_4db', sistem.edit_hortikultura_13_4db);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4dc', sistem.hortikultura_13_4dc);
app.get('/tambah_hortikultura_13_4dc', sistem.tambah_hortikultura_13_4dc);
app.get('/edit_hortikultura_13_4dc', sistem.edit_hortikultura_13_4dc);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4dd', sistem.hortikultura_13_4dd);
app.get('/tambah_hortikultura_13_4dd', sistem.tambah_hortikultura_13_4dd);
app.get('/edit_hortikultura_13_4dd', sistem.edit_hortikultura_13_4dd);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4de', sistem.hortikultura_13_4de);
app.get('/tambah_hortikultura_13_4de', sistem.tambah_hortikultura_13_4de);
app.get('/edit_hortikultura_13_4de', sistem.edit_hortikultura_13_4de);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4df', sistem.hortikultura_13_4df);
app.get('/tambah_hortikultura_13_4df', sistem.tambah_hortikultura_13_4df);
app.get('/edit_hortikultura_13_4df', sistem.edit_hortikultura_13_4df);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4dg', sistem.hortikultura_13_4dg);
app.get('/tambah_hortikultura_13_4dg', sistem.tambah_hortikultura_13_4dg);
app.get('/edit_hortikultura_13_4dg', sistem.edit_hortikultura_13_4dg);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ea', sistem.hortikultura_13_4ea);
app.get('/tambah_hortikultura_13_4ea', sistem.tambah_hortikultura_13_4ea);
app.get('/edit_hortikultura_13_4ea', sistem.edit_hortikultura_13_4ea);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4eb', sistem.hortikultura_13_4eb);
app.get('/tambah_hortikultura_13_4eb', sistem.tambah_hortikultura_13_4eb);
app.get('/edit_hortikultura_13_4eb', sistem.edit_hortikultura_13_4eb);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ec', sistem.hortikultura_13_4ec);
app.get('/tambah_hortikultura_13_4ec', sistem.tambah_hortikultura_13_4ec);
app.get('/edit_hortikultura_13_4ec', sistem.edit_hortikultura_13_4ec);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ed', sistem.hortikultura_13_4ed);
app.get('/tambah_hortikultura_13_4ed', sistem.tambah_hortikultura_13_4ed);
app.get('/edit_hortikultura_13_4ed', sistem.edit_hortikultura_13_4ed);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ee', sistem.hortikultura_13_4ee);
app.get('/tambah_hortikultura_13_4ee', sistem.tambah_hortikultura_13_4ee);
app.get('/edit_hortikultura_13_4ee', sistem.edit_hortikultura_13_4ee);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ef', sistem.hortikultura_13_4ef);
app.get('/tambah_hortikultura_13_4ef', sistem.tambah_hortikultura_13_4ef);
app.get('/edit_hortikultura_13_4ef', sistem.edit_hortikultura_13_4ef);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4eg', sistem.hortikultura_13_4eg);
app.get('/tambah_hortikultura_13_4eg', sistem.tambah_hortikultura_13_4eg);
app.get('/edit_hortikultura_13_4eg', sistem.edit_hortikultura_13_4eg);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4fa', sistem.hortikultura_13_4fa);
app.get('/tambah_hortikultura_13_4fa', sistem.tambah_hortikultura_13_4fa);
app.get('/edit_hortikultura_13_4fa', sistem.edit_hortikultura_13_4fa);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4fb', sistem.hortikultura_13_4fb);
app.get('/tambah_hortikultura_13_4fb', sistem.tambah_hortikultura_13_4fb);
app.get('/edit_hortikultura_13_4fb', sistem.edit_hortikultura_13_4fb);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4fc', sistem.hortikultura_13_4fc);
app.get('/tambah_hortikultura_13_4fc', sistem.tambah_hortikultura_13_4fc);
app.get('/edit_hortikultura_13_4fc', sistem.edit_hortikultura_13_4fc);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4fd', sistem.hortikultura_13_4fd);
app.get('/tambah_hortikultura_13_4fd', sistem.tambah_hortikultura_13_4fd);
app.get('/edit_hortikultura_13_4fd', sistem.edit_hortikultura_13_4fd);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4fe', sistem.hortikultura_13_4fe);
app.get('/tambah_hortikultura_13_4fe', sistem.tambah_hortikultura_13_4fe);
app.get('/edit_hortikultura_13_4fe', sistem.edit_hortikultura_13_4fe);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ff', sistem.hortikultura_13_4ff);
app.get('/tambah_hortikultura_13_4ff', sistem.tambah_hortikultura_13_4ff);
app.get('/edit_hortikultura_13_4ff', sistem.edit_hortikultura_13_4ff);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4fg', sistem.hortikultura_13_4fg);
app.get('/tambah_hortikultura_13_4fg', sistem.tambah_hortikultura_13_4fg);
app.get('/edit_hortikultura_13_4fg', sistem.edit_hortikultura_13_4fg);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ga', sistem.hortikultura_13_4ga);
app.get('/tambah_hortikultura_13_4ga', sistem.tambah_hortikultura_13_4ga);
app.get('/edit_hortikultura_13_4ga', sistem.edit_hortikultura_13_4ga);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4gb', sistem.hortikultura_13_4gb);
app.get('/tambah_hortikultura_13_4gb', sistem.tambah_hortikultura_13_4gb);
app.get('/edit_hortikultura_13_4gb', sistem.edit_hortikultura_13_4gb);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4gc', sistem.hortikultura_13_4gc);
app.get('/tambah_hortikultura_13_4gc', sistem.tambah_hortikultura_13_4gc);
app.get('/edit_hortikultura_13_4gc', sistem.edit_hortikultura_13_4gc);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4gd', sistem.hortikultura_13_4gd);
app.get('/tambah_hortikultura_13_4gd', sistem.tambah_hortikultura_13_4gd);
app.get('/edit_hortikultura_13_4gd', sistem.edit_hortikultura_13_4gd);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4ge', sistem.hortikultura_13_4ge);
app.get('/tambah_hortikultura_13_4ge', sistem.tambah_hortikultura_13_4ge);
app.get('/edit_hortikultura_13_4ge', sistem.edit_hortikultura_13_4ge);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4gf', sistem.hortikultura_13_4gf);
app.get('/tambah_hortikultura_13_4gf', sistem.tambah_hortikultura_13_4gf);
app.get('/edit_hortikultura_13_4gf', sistem.edit_hortikultura_13_4gf);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_4gg', sistem.hortikultura_13_4gg);
app.get('/tambah_hortikultura_13_4gg', sistem.tambah_hortikultura_13_4gg);
app.get('/edit_hortikultura_13_4gg', sistem.edit_hortikultura_13_4gg);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_5a', sistem.hortikultura_13_5a);
app.get('/tambah_hortikultura_13_5a', sistem.tambah_hortikultura_13_5a);
app.get('/edit_hortikultura_13_5a', sistem.edit_hortikultura_13_5a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_5b', sistem.hortikultura_13_5b);
app.get('/tambah_hortikultura_13_5b', sistem.tambah_hortikultura_13_5b);
app.get('/edit_hortikultura_13_5b', sistem.edit_hortikultura_13_5b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_5c', sistem.hortikultura_13_5c);
app.get('/tambah_hortikultura_13_5c', sistem.tambah_hortikultura_13_5c);
app.get('/edit_hortikultura_13_5c', sistem.edit_hortikultura_13_5c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_5d', sistem.hortikultura_13_5d);
app.get('/tambah_hortikultura_13_5d', sistem.tambah_hortikultura_13_5d);
app.get('/edit_hortikultura_13_5d', sistem.edit_hortikultura_13_5d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_5e', sistem.hortikultura_13_5e);
app.get('/tambah_hortikultura_13_5e', sistem.tambah_hortikultura_13_5e);
app.get('/edit_hortikultura_13_5e', sistem.edit_hortikultura_13_5e);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_5f', sistem.hortikultura_13_5f);
app.get('/tambah_hortikultura_13_5f', sistem.tambah_hortikultura_13_5f);
app.get('/edit_hortikultura_13_5f', sistem.edit_hortikultura_13_5f);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_6a', sistem.hortikultura_13_6a);
app.get('/tambah_hortikultura_13_6a', sistem.tambah_hortikultura_13_6a);
app.get('/edit_hortikultura_13_6a', sistem.edit_hortikultura_13_6a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_6b', sistem.hortikultura_13_6b);
app.get('/tambah_hortikultura_13_6b', sistem.tambah_hortikultura_13_6b);
app.get('/edit_hortikultura_13_6b', sistem.edit_hortikultura_13_6b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_6c', sistem.hortikultura_13_6c);
app.get('/tambah_hortikultura_13_6c', sistem.tambah_hortikultura_13_6c);
app.get('/edit_hortikultura_13_6c', sistem.edit_hortikultura_13_6c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_7a', sistem.hortikultura_13_7a);
app.get('/tambah_hortikultura_13_7a', sistem.tambah_hortikultura_13_7a);
app.get('/edit_hortikultura_13_7a', sistem.edit_hortikultura_13_7a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_7b', sistem.hortikultura_13_7b);
app.get('/tambah_hortikultura_13_7b', sistem.tambah_hortikultura_13_7b);
app.get('/edit_hortikultura_13_7b', sistem.edit_hortikultura_13_7b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_7c', sistem.hortikultura_13_7c);
app.get('/tambah_hortikultura_13_7c', sistem.tambah_hortikultura_13_7c);
app.get('/edit_hortikultura_13_7c', sistem.edit_hortikultura_13_7c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_8a', sistem.hortikultura_13_8a);
app.get('/tambah_hortikultura_13_8a', sistem.tambah_hortikultura_13_8a);
app.get('/edit_hortikultura_13_8a', sistem.edit_hortikultura_13_8a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_8b', sistem.hortikultura_13_8b);
app.get('/tambah_hortikultura_13_8b', sistem.tambah_hortikultura_13_8b);
app.get('/edit_hortikultura_13_8b', sistem.edit_hortikultura_13_8b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_8c', sistem.hortikultura_13_8c);
app.get('/tambah_hortikultura_13_8c', sistem.tambah_hortikultura_13_8c);
app.get('/edit_hortikultura_13_8c', sistem.edit_hortikultura_13_8c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_9', sistem.hortikultura_13_9);
app.get('/tambah_hortikultura_13_9', sistem.tambah_hortikultura_13_9);
app.get('/edit_hortikultura_13_9', sistem.edit_hortikultura_13_9);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_10', sistem.hortikultura_13_10);
app.get('/tambah_hortikultura_13_10', sistem.tambah_hortikultura_13_10);
app.get('/edit_hortikultura_13_10', sistem.edit_hortikultura_13_10);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_11a', sistem.hortikultura_13_11a);
app.get('/tambah_hortikultura_13_11a', sistem.tambah_hortikultura_13_11a);
app.get('/edit_hortikultura_13_11a', sistem.edit_hortikultura_13_11a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_11b', sistem.hortikultura_13_11b);
app.get('/tambah_hortikultura_13_11b', sistem.tambah_hortikultura_13_11b);
app.get('/edit_hortikultura_13_11b', sistem.edit_hortikultura_13_11b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_11c', sistem.hortikultura_13_11c);
app.get('/tambah_hortikultura_13_11c', sistem.tambah_hortikultura_13_11c);
app.get('/edit_hortikultura_13_11c', sistem.edit_hortikultura_13_11c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_12', sistem.hortikultura_13_12);
app.get('/tambah_hortikultura_13_12', sistem.tambah_hortikultura_13_12);
app.get('/edit_hortikultura_13_12', sistem.edit_hortikultura_13_12);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_13', sistem.hortikultura_13_13);
app.get('/tambah_hortikultura_13_13', sistem.tambah_hortikultura_13_13);
app.get('/edit_hortikultura_13_13', sistem.edit_hortikultura_13_13);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_14', sistem.hortikultura_13_14);
app.get('/tambah_hortikultura_13_14', sistem.tambah_hortikultura_13_14);
app.get('/edit_hortikultura_13_14', sistem.edit_hortikultura_13_14);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_15a', sistem.hortikultura_13_15a);
app.get('/tambah_hortikultura_13_15a', sistem.tambah_hortikultura_13_15a);
app.get('/edit_hortikultura_13_15a', sistem.edit_hortikultura_13_15a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_15b', sistem.hortikultura_13_15b);
app.get('/tambah_hortikultura_13_15b', sistem.tambah_hortikultura_13_15b);
app.get('/edit_hortikultura_13_15b', sistem.edit_hortikultura_13_15b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_15c', sistem.hortikultura_13_15c);
app.get('/tambah_hortikultura_13_15c', sistem.tambah_hortikultura_13_15c);
app.get('/edit_hortikultura_13_15c', sistem.edit_hortikultura_13_15c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/hortikultura_13_15d', sistem.hortikultura_13_15d);
app.get('/tambah_hortikultura_13_15d', sistem.tambah_hortikultura_13_15d);
app.get('/edit_hortikultura_13_15d', sistem.edit_hortikultura_13_15d);
/*==============================================================================*/

/*==================================Kehutanan===================================*/
app.get('/kehutanan', sistem.kehutanan);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_1a', sistem.kehutanan_14_1a);
app.get('/tambah_kehutanan_14_1a', sistem.tambah_kehutanan_14_1a);
app.get('/edit_kehutanan_14_1a', sistem.edit_kehutanan_14_1a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_1b', sistem.kehutanan_14_1b);
app.get('/tambah_kehutanan_14_1b', sistem.tambah_kehutanan_14_1b);
app.get('/edit_kehutanan_14_1b', sistem.edit_kehutanan_14_1b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_1c', sistem.kehutanan_14_1c);
app.get('/tambah_kehutanan_14_1c', sistem.tambah_kehutanan_14_1c);
app.get('/edit_kehutanan_14_1c', sistem.edit_kehutanan_14_1c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_2a', sistem.kehutanan_14_2a);
app.get('/tambah_kehutanan_14_2a', sistem.tambah_kehutanan_14_2a);
app.get('/edit_kehutanan_14_2a', sistem.edit_kehutanan_14_2a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_2b', sistem.kehutanan_14_2b);
app.get('/tambah_kehutanan_14_2b', sistem.tambah_kehutanan_14_2b);
app.get('/edit_kehutanan_14_2b', sistem.edit_kehutanan_14_2b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_2c', sistem.kehutanan_14_2c);
app.get('/tambah_kehutanan_14_2c', sistem.tambah_kehutanan_14_2c);
app.get('/edit_kehutanan_14_2c', sistem.edit_kehutanan_14_2c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_3a', sistem.kehutanan_14_3a);
app.get('/tambah_kehutanan_14_3a', sistem.tambah_kehutanan_14_3a);
app.get('/edit_kehutanan_14_3a', sistem.edit_kehutanan_14_3a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_3b', sistem.kehutanan_14_3b);
app.get('/tambah_kehutanan_14_3b', sistem.tambah_kehutanan_14_3b);
app.get('/edit_kehutanan_14_3b', sistem.edit_kehutanan_14_3b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_3c', sistem.kehutanan_14_3c);
app.get('/tambah_kehutanan_14_3c', sistem.tambah_kehutanan_14_3c);
app.get('/edit_kehutanan_14_3c', sistem.edit_kehutanan_14_3c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_4a', sistem.kehutanan_14_4a);
app.get('/tambah_kehutanan_14_4a', sistem.tambah_kehutanan_14_4a);
app.get('/edit_kehutanan_14_4a', sistem.edit_kehutanan_14_4a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_4b', sistem.kehutanan_14_4b);
app.get('/tambah_kehutanan_14_4b', sistem.tambah_kehutanan_14_4b);
app.get('/edit_kehutanan_14_4b', sistem.edit_kehutanan_14_4b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_5a', sistem.kehutanan_14_5a);
app.get('/tambah_kehutanan_14_5a', sistem.tambah_kehutanan_14_5a);
app.get('/edit_kehutanan_14_5a', sistem.edit_kehutanan_14_5a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_5b', sistem.kehutanan_14_5b);
app.get('/tambah_kehutanan_14_5b', sistem.tambah_kehutanan_14_5b);
app.get('/edit_kehutanan_14_5b', sistem.edit_kehutanan_14_5b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_6a', sistem.kehutanan_14_6a);
app.get('/tambah_kehutanan_14_6a', sistem.tambah_kehutanan_14_6a);
app.get('/edit_kehutanan_14_6a', sistem.edit_kehutanan_14_6a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_6b', sistem.kehutanan_14_6b);
app.get('/tambah_kehutanan_14_6b', sistem.tambah_kehutanan_14_6b);
app.get('/edit_kehutanan_14_6b', sistem.edit_kehutanan_14_6b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_6c', sistem.kehutanan_14_6c);
app.get('/tambah_kehutanan_14_6c', sistem.tambah_kehutanan_14_6c);
app.get('/edit_kehutanan_14_6c', sistem.edit_kehutanan_14_6c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_6d', sistem.kehutanan_14_6d);
app.get('/tambah_kehutanan_14_6d', sistem.tambah_kehutanan_14_6d);
app.get('/edit_kehutanan_14_6d', sistem.edit_kehutanan_14_6d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_7a', sistem.kehutanan_14_7a);
app.get('/tambah_kehutanan_14_7a', sistem.tambah_kehutanan_14_7a);
app.get('/edit_kehutanan_14_7a', sistem.edit_kehutanan_14_7a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_7b', sistem.kehutanan_14_7b);
app.get('/tambah_kehutanan_14_7b', sistem.tambah_kehutanan_14_7b);
app.get('/edit_kehutanan_14_7b', sistem.edit_kehutanan_14_7b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_7c', sistem.kehutanan_14_7c);
app.get('/tambah_kehutanan_14_7c', sistem.tambah_kehutanan_14_7c);
app.get('/edit_kehutanan_14_7c', sistem.edit_kehutanan_14_7c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_7d', sistem.kehutanan_14_7d);
app.get('/tambah_kehutanan_14_7d', sistem.tambah_kehutanan_14_7d);
app.get('/edit_kehutanan_14_7d', sistem.edit_kehutanan_14_7d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_8a', sistem.kehutanan_14_8a);
app.get('/tambah_kehutanan_14_8a', sistem.tambah_kehutanan_14_8a);
app.get('/edit_kehutanan_14_8a', sistem.edit_kehutanan_14_8a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_8b', sistem.kehutanan_14_8b);
app.get('/tambah_kehutanan_14_8b', sistem.tambah_kehutanan_14_8b);
app.get('/edit_kehutanan_14_8b', sistem.edit_kehutanan_14_8b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_8c', sistem.kehutanan_14_8c);
app.get('/tambah_kehutanan_14_8c', sistem.tambah_kehutanan_14_8c);
app.get('/edit_kehutanan_14_8c', sistem.edit_kehutanan_14_8c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_8d', sistem.kehutanan_14_8d);
app.get('/tambah_kehutanan_14_8d', sistem.tambah_kehutanan_14_8d);
app.get('/edit_kehutanan_14_8d', sistem.edit_kehutanan_14_8d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_9a', sistem.kehutanan_14_9a);
app.get('/tambah_kehutanan_14_9a', sistem.tambah_kehutanan_14_9a);
app.get('/edit_kehutanan_14_9a', sistem.edit_kehutanan_14_9a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_9b', sistem.kehutanan_14_9b);
app.get('/tambah_kehutanan_14_9b', sistem.tambah_kehutanan_14_9b);
app.get('/edit_kehutanan_14_9b', sistem.edit_kehutanan_14_9b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_10a', sistem.kehutanan_14_10a);
app.get('/tambah_kehutanan_14_10a', sistem.tambah_kehutanan_14_10a);
app.get('/edit_kehutanan_14_10a', sistem.edit_kehutanan_14_10a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_10b', sistem.kehutanan_14_10b);
app.get('/tambah_kehutanan_14_10b', sistem.tambah_kehutanan_14_10b);
app.get('/edit_kehutanan_14_10b', sistem.edit_kehutanan_14_10b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_10c', sistem.kehutanan_14_10c);
app.get('/tambah_kehutanan_14_10c', sistem.tambah_kehutanan_14_10c);
app.get('/edit_kehutanan_14_10c', sistem.edit_kehutanan_14_10c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_11a', sistem.kehutanan_14_11a);
app.get('/tambah_kehutanan_14_11a', sistem.tambah_kehutanan_14_11a);
app.get('/edit_kehutanan_14_11a', sistem.edit_kehutanan_14_11a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_11b', sistem.kehutanan_14_11b);
app.get('/tambah_kehutanan_14_11b', sistem.tambah_kehutanan_14_11b);
app.get('/edit_kehutanan_14_11b', sistem.edit_kehutanan_14_11b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_11c', sistem.kehutanan_14_11c);
app.get('/tambah_kehutanan_14_11c', sistem.tambah_kehutanan_14_11c);
app.get('/edit_kehutanan_14_11c', sistem.edit_kehutanan_14_11c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_12a', sistem.kehutanan_14_12a);
app.get('/tambah_kehutanan_14_12a', sistem.tambah_kehutanan_14_12a);
app.get('/edit_kehutanan_14_12a', sistem.edit_kehutanan_14_12a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_12b', sistem.kehutanan_14_12b);
app.get('/tambah_kehutanan_14_12b', sistem.tambah_kehutanan_14_12b);
app.get('/edit_kehutanan_14_12b', sistem.edit_kehutanan_14_12b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_13a', sistem.kehutanan_14_13a);
app.get('/tambah_kehutanan_14_13a', sistem.tambah_kehutanan_14_13a);
app.get('/edit_kehutanan_14_13a', sistem.edit_kehutanan_14_13a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_13b', sistem.kehutanan_14_13b);
app.get('/tambah_kehutanan_14_13b', sistem.tambah_kehutanan_14_13b);
app.get('/edit_kehutanan_14_13b', sistem.edit_kehutanan_14_13b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_14a', sistem.kehutanan_14_14a);
app.get('/tambah_kehutanan_14_14a', sistem.tambah_kehutanan_14_14a);
app.get('/edit_kehutanan_14_14a', sistem.edit_kehutanan_14_14a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_14b', sistem.kehutanan_14_14b);
app.get('/tambah_kehutanan_14_14b', sistem.tambah_kehutanan_14_14b);
app.get('/edit_kehutanan_14_14b', sistem.edit_kehutanan_14_14b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_14c', sistem.kehutanan_14_14c);
app.get('/tambah_kehutanan_14_14c', sistem.tambah_kehutanan_14_14c);
app.get('/edit_kehutanan_14_14c', sistem.edit_kehutanan_14_14c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_14d', sistem.kehutanan_14_14d);
app.get('/tambah_kehutanan_14_14d', sistem.tambah_kehutanan_14_14d);
app.get('/edit_kehutanan_14_14d', sistem.edit_kehutanan_14_14d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_15a', sistem.kehutanan_14_15a);
app.get('/tambah_kehutanan_14_15a', sistem.tambah_kehutanan_14_15a);
app.get('/edit_kehutanan_14_15a', sistem.edit_kehutanan_14_15a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_15b', sistem.kehutanan_14_15b);
app.get('/tambah_kehutanan_14_15b', sistem.tambah_kehutanan_14_15b);
app.get('/edit_kehutanan_14_15b', sistem.edit_kehutanan_14_15b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_16a', sistem.kehutanan_14_16a);
app.get('/tambah_kehutanan_14_16a', sistem.tambah_kehutanan_14_16a);
app.get('/edit_kehutanan_14_16a', sistem.edit_kehutanan_14_16a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_16b', sistem.kehutanan_14_16b);
app.get('/tambah_kehutanan_14_16b', sistem.tambah_kehutanan_14_16b);
app.get('/edit_kehutanan_14_16b', sistem.edit_kehutanan_14_16b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_17a', sistem.kehutanan_14_17a);
app.get('/tambah_kehutanan_14_17a', sistem.tambah_kehutanan_14_17a);
app.get('/edit_kehutanan_14_17a', sistem.edit_kehutanan_14_17a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_17b', sistem.kehutanan_14_17b);
app.get('/tambah_kehutanan_14_17b', sistem.tambah_kehutanan_14_17b);
app.get('/edit_kehutanan_14_17b', sistem.edit_kehutanan_14_17b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_18a', sistem.kehutanan_14_18a);
app.get('/tambah_kehutanan_14_18a', sistem.tambah_kehutanan_14_18a);
app.get('/edit_kehutanan_14_18a', sistem.edit_kehutanan_14_18a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_18b', sistem.kehutanan_14_18b);
app.get('/tambah_kehutanan_14_18b', sistem.tambah_kehutanan_14_18b);
app.get('/edit_kehutanan_14_18b', sistem.edit_kehutanan_14_18b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_19a', sistem.kehutanan_14_19a);
app.get('/tambah_kehutanan_14_19a', sistem.tambah_kehutanan_14_19a);
app.get('/edit_kehutanan_14_19a', sistem.edit_kehutanan_14_19a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_19b', sistem.kehutanan_14_19b);
app.get('/tambah_kehutanan_14_19b', sistem.tambah_kehutanan_14_19b);
app.get('/edit_kehutanan_14_19b', sistem.edit_kehutanan_14_19b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_19c', sistem.kehutanan_14_19c);
app.get('/tambah_kehutanan_14_19c', sistem.tambah_kehutanan_14_19c);
app.get('/edit_kehutanan_14_19c', sistem.edit_kehutanan_14_19c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_19d', sistem.kehutanan_14_19d);
app.get('/tambah_kehutanan_14_19d', sistem.tambah_kehutanan_14_19d);
app.get('/edit_kehutanan_14_19d', sistem.edit_kehutanan_14_19d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_20a', sistem.kehutanan_14_20a);
app.get('/tambah_kehutanan_14_20a', sistem.tambah_kehutanan_14_20a);
app.get('/edit_kehutanan_14_20a', sistem.edit_kehutanan_14_20a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_20b', sistem.kehutanan_14_20b);
app.get('/tambah_kehutanan_14_20b', sistem.tambah_kehutanan_14_20b);
app.get('/edit_kehutanan_14_20b', sistem.edit_kehutanan_14_20b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_20c', sistem.kehutanan_14_20c);
app.get('/tambah_kehutanan_14_20c', sistem.tambah_kehutanan_14_20c);
app.get('/edit_kehutanan_14_20c', sistem.edit_kehutanan_14_20c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_20d', sistem.kehutanan_14_20d);
app.get('/tambah_kehutanan_14_20d', sistem.tambah_kehutanan_14_20d);
app.get('/edit_kehutanan_14_20d', sistem.edit_kehutanan_14_20d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_21a', sistem.kehutanan_14_21a);
app.get('/tambah_kehutanan_14_21a', sistem.tambah_kehutanan_14_21a);
app.get('/edit_kehutanan_14_21a', sistem.edit_kehutanan_14_21a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_21b', sistem.kehutanan_14_21b);
app.get('/tambah_kehutanan_14_21b', sistem.tambah_kehutanan_14_21b);
app.get('/edit_kehutanan_14_21b', sistem.edit_kehutanan_14_21b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_21c', sistem.kehutanan_14_21c);
app.get('/tambah_kehutanan_14_21c', sistem.tambah_kehutanan_14_21c);
app.get('/edit_kehutanan_14_21c', sistem.edit_kehutanan_14_21c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_21d', sistem.kehutanan_14_21d);
app.get('/tambah_kehutanan_14_21d', sistem.tambah_kehutanan_14_21d);
app.get('/edit_kehutanan_14_21d', sistem.edit_kehutanan_14_21d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_22a', sistem.kehutanan_14_22a);
app.get('/tambah_kehutanan_14_22a', sistem.tambah_kehutanan_14_22a);
app.get('/edit_kehutanan_14_22a', sistem.edit_kehutanan_14_22a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_22b', sistem.kehutanan_14_22b);
app.get('/tambah_kehutanan_14_22b', sistem.tambah_kehutanan_14_22b);
app.get('/edit_kehutanan_14_22b', sistem.edit_kehutanan_14_22b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_23a', sistem.kehutanan_14_23a);
app.get('/tambah_kehutanan_14_23a', sistem.tambah_kehutanan_14_23a);
app.get('/edit_kehutanan_14_23a', sistem.edit_kehutanan_14_23a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_23b', sistem.kehutanan_14_23b);
app.get('/tambah_kehutanan_14_23b', sistem.tambah_kehutanan_14_23b);
app.get('/edit_kehutanan_14_23b', sistem.edit_kehutanan_14_23b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_24a', sistem.kehutanan_14_24a);
app.get('/tambah_kehutanan_14_24a', sistem.tambah_kehutanan_14_24a);
app.get('/edit_kehutanan_14_24a', sistem.edit_kehutanan_14_24a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_24b', sistem.kehutanan_14_24b);
app.get('/tambah_kehutanan_14_24b', sistem.tambah_kehutanan_14_24b);
app.get('/edit_kehutanan_14_24b', sistem.edit_kehutanan_14_24b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_25a', sistem.kehutanan_14_25a);
app.get('/tambah_kehutanan_14_25a', sistem.tambah_kehutanan_14_25a);
app.get('/edit_kehutanan_14_25a', sistem.edit_kehutanan_14_25a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_25b', sistem.kehutanan_14_25b);
app.get('/tambah_kehutanan_14_25b', sistem.tambah_kehutanan_14_25b);
app.get('/edit_kehutanan_14_25b', sistem.edit_kehutanan_14_25b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_26a', sistem.kehutanan_14_26a);
app.get('/tambah_kehutanan_14_26a', sistem.tambah_kehutanan_14_26a);
app.get('/edit_kehutanan_14_26a', sistem.edit_kehutanan_14_26a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_26b', sistem.kehutanan_14_26b);
app.get('/tambah_kehutanan_14_26b', sistem.tambah_kehutanan_14_26b);
app.get('/edit_kehutanan_14_26b', sistem.edit_kehutanan_14_26b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_27a', sistem.kehutanan_14_27a);
app.get('/tambah_kehutanan_14_27a', sistem.tambah_kehutanan_14_27a);
app.get('/edit_kehutanan_14_27a', sistem.edit_kehutanan_14_27a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_27b', sistem.kehutanan_14_27b);
app.get('/tambah_kehutanan_14_27b', sistem.tambah_kehutanan_14_27b);
app.get('/edit_kehutanan_14_27b', sistem.edit_kehutanan_14_27b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_28a', sistem.kehutanan_14_28a);
app.get('/tambah_kehutanan_14_28a', sistem.tambah_kehutanan_14_28a);
app.get('/edit_kehutanan_14_28a', sistem.edit_kehutanan_14_28a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_28b', sistem.kehutanan_14_28b);
app.get('/tambah_kehutanan_14_28b', sistem.tambah_kehutanan_14_28b);
app.get('/edit_kehutanan_14_28b', sistem.edit_kehutanan_14_28b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_28c', sistem.kehutanan_14_28c);
app.get('/tambah_kehutanan_14_28c', sistem.tambah_kehutanan_14_28c);
app.get('/edit_kehutanan_14_28c', sistem.edit_kehutanan_14_28c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_28d', sistem.kehutanan_14_28d);
app.get('/tambah_kehutanan_14_28d', sistem.tambah_kehutanan_14_28d);
app.get('/edit_kehutanan_14_28d', sistem.edit_kehutanan_14_28d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_29a', sistem.kehutanan_14_29a);
app.get('/tambah_kehutanan_14_29a', sistem.tambah_kehutanan_14_29a);
app.get('/edit_kehutanan_14_29a', sistem.edit_kehutanan_14_29a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_29b', sistem.kehutanan_14_29b);
app.get('/tambah_kehutanan_14_29b', sistem.tambah_kehutanan_14_29b);
app.get('/edit_kehutanan_14_29b', sistem.edit_kehutanan_14_29b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_29c', sistem.kehutanan_14_29c);
app.get('/tambah_kehutanan_14_29c', sistem.tambah_kehutanan_14_29c);
app.get('/edit_kehutanan_14_29c', sistem.edit_kehutanan_14_29c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_29d', sistem.kehutanan_14_29d);
app.get('/tambah_kehutanan_14_29d', sistem.tambah_kehutanan_14_29d);
app.get('/edit_kehutanan_14_29d', sistem.edit_kehutanan_14_29d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_30a', sistem.kehutanan_14_30a);
app.get('/tambah_kehutanan_14_30a', sistem.tambah_kehutanan_14_30a);
app.get('/edit_kehutanan_14_30a', sistem.edit_kehutanan_14_30a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_30b', sistem.kehutanan_14_30b);
app.get('/tambah_kehutanan_14_30b', sistem.tambah_kehutanan_14_30b);
app.get('/edit_kehutanan_14_30b', sistem.edit_kehutanan_14_30b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_30c', sistem.kehutanan_14_30c);
app.get('/tambah_kehutanan_14_30c', sistem.tambah_kehutanan_14_30c);
app.get('/edit_kehutanan_14_30c', sistem.edit_kehutanan_14_30c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_30d', sistem.kehutanan_14_30d);
app.get('/tambah_kehutanan_14_30d', sistem.tambah_kehutanan_14_30d);
app.get('/edit_kehutanan_14_30d', sistem.edit_kehutanan_14_30d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_31', sistem.kehutanan_14_31);
app.get('/tambah_kehutanan_14_31', sistem.tambah_kehutanan_14_31);
app.get('/edit_kehutanan_14_31', sistem.edit_kehutanan_14_31);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_32', sistem.kehutanan_14_32);
app.get('/tambah_kehutanan_14_32', sistem.tambah_kehutanan_14_32);
app.get('/edit_kehutanan_14_32', sistem.edit_kehutanan_14_32);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_33', sistem.kehutanan_14_33);
app.get('/tambah_kehutanan_14_33', sistem.tambah_kehutanan_14_33);
app.get('/edit_kehutanan_14_33', sistem.edit_kehutanan_14_33);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_34', sistem.kehutanan_14_34);
app.get('/tambah_kehutanan_14_34', sistem.tambah_kehutanan_14_34);
app.get('/edit_kehutanan_14_34', sistem.edit_kehutanan_14_34);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_35', sistem.kehutanan_14_35);
app.get('/tambah_kehutanan_14_35', sistem.tambah_kehutanan_14_35);
app.get('/edit_kehutanan_14_35', sistem.edit_kehutanan_14_35);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_36', sistem.kehutanan_14_36);
app.get('/tambah_kehutanan_14_36', sistem.tambah_kehutanan_14_36);
app.get('/edit_kehutanan_14_36', sistem.edit_kehutanan_14_36);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_37', sistem.kehutanan_14_37);
app.get('/tambah_kehutanan_14_37', sistem.tambah_kehutanan_14_37);
app.get('/edit_kehutanan_14_37', sistem.edit_kehutanan_14_37);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_38a', sistem.kehutanan_14_38a);
app.get('/tambah_kehutanan_14_38a', sistem.tambah_kehutanan_14_38a);
app.get('/edit_kehutanan_14_38a', sistem.edit_kehutanan_14_38a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_38b', sistem.kehutanan_14_38b);
app.get('/tambah_kehutanan_14_38b', sistem.tambah_kehutanan_14_38b);
app.get('/edit_kehutanan_14_38b', sistem.edit_kehutanan_14_38b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_39a', sistem.kehutanan_14_39a);
app.get('/tambah_kehutanan_14_39a', sistem.tambah_kehutanan_14_39a);
app.get('/edit_kehutanan_14_39a', sistem.edit_kehutanan_14_39a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_39b', sistem.kehutanan_14_39b);
app.get('/tambah_kehutanan_14_39b', sistem.tambah_kehutanan_14_39b);
app.get('/edit_kehutanan_14_39b', sistem.edit_kehutanan_14_39b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_39c', sistem.kehutanan_14_39c);
app.get('/tambah_kehutanan_14_39c', sistem.tambah_kehutanan_14_39c);
app.get('/edit_kehutanan_14_39c', sistem.edit_kehutanan_14_39c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_39d', sistem.kehutanan_14_39d);
app.get('/tambah_kehutanan_14_39d', sistem.tambah_kehutanan_14_39d);
app.get('/edit_kehutanan_14_39d', sistem.edit_kehutanan_14_40a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_40a', sistem.kehutanan_14_40a);
app.get('/tambah_kehutanan_14_40a', sistem.tambah_kehutanan_14_40a);
app.get('/edit_kehutanan_14_40a', sistem.edit_kehutanan_14_40a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_40b', sistem.kehutanan_14_40b);
app.get('/tambah_kehutanan_14_40b', sistem.tambah_kehutanan_14_40b);
app.get('/edit_kehutanan_14_40b', sistem.edit_kehutanan_14_40b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_40c', sistem.kehutanan_14_40c);
app.get('/tambah_kehutanan_14_40c', sistem.tambah_kehutanan_14_40c);
app.get('/edit_kehutanan_14_40c', sistem.edit_kehutanan_14_40c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_40d', sistem.kehutanan_14_40d);
app.get('/tambah_kehutanan_14_40d', sistem.tambah_kehutanan_14_40d);
app.get('/edit_kehutanan_14_40d', sistem.edit_kehutanan_14_40d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_41a', sistem.kehutanan_14_41a);
app.get('/tambah_kehutanan_14_41a', sistem.tambah_kehutanan_14_41a);
app.get('/edit_kehutanan_14_41a', sistem.edit_kehutanan_14_41a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_41b', sistem.kehutanan_14_41b);
app.get('/tambah_kehutanan_14_41b', sistem.tambah_kehutanan_14_41b);
app.get('/edit_kehutanan_14_41b', sistem.edit_kehutanan_14_41b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_41c', sistem.kehutanan_14_41c);
app.get('/tambah_kehutanan_14_41c', sistem.tambah_kehutanan_14_41c);
app.get('/edit_kehutanan_14_41c', sistem.edit_kehutanan_14_41c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_41d', sistem.kehutanan_14_41d);
app.get('/tambah_kehutanan_14_41d', sistem.tambah_kehutanan_14_41d);
app.get('/edit_kehutanan_14_41d', sistem.edit_kehutanan_14_41d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_42a', sistem.kehutanan_14_42a);
app.get('/tambah_kehutanan_14_42a', sistem.tambah_kehutanan_14_42a);
app.get('/edit_kehutanan_14_42a', sistem.edit_kehutanan_14_42a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_42b', sistem.kehutanan_14_42b);
app.get('/tambah_kehutanan_14_42b', sistem.tambah_kehutanan_14_42b);
app.get('/edit_kehutanan_14_42b', sistem.edit_kehutanan_14_42b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_42c', sistem.kehutanan_14_42c);
app.get('/tambah_kehutanan_14_42c', sistem.tambah_kehutanan_14_42c);
app.get('/edit_kehutanan_14_42c', sistem.edit_kehutanan_14_42c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_43a', sistem.kehutanan_14_43a);
app.get('/tambah_kehutanan_14_43a', sistem.tambah_kehutanan_14_43a);
app.get('/edit_kehutanan_14_43a', sistem.edit_kehutanan_14_43a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_43b', sistem.kehutanan_14_43b);
app.get('/tambah_kehutanan_14_43b', sistem.tambah_kehutanan_14_43b);
app.get('/edit_kehutanan_14_43b', sistem.edit_kehutanan_14_43b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_43c', sistem.kehutanan_14_43c);
app.get('/tambah_kehutanan_14_43c', sistem.tambah_kehutanan_14_43c);
app.get('/edit_kehutanan_14_43c', sistem.edit_kehutanan_14_43c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_43d', sistem.kehutanan_14_43d);
app.get('/tambah_kehutanan_14_43d', sistem.tambah_kehutanan_14_43d);
app.get('/edit_kehutanan_14_43d', sistem.edit_kehutanan_14_43d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_43e', sistem.kehutanan_14_43e);
app.get('/tambah_kehutanan_14_43e', sistem.tambah_kehutanan_14_43e);
app.get('/edit_kehutanan_14_43e', sistem.edit_kehutanan_14_43e);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_44a', sistem.kehutanan_14_44a);
app.get('/tambah_kehutanan_14_44a', sistem.tambah_kehutanan_14_44a);
app.get('/edit_kehutanan_14_44a', sistem.edit_kehutanan_14_44a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_44b', sistem.kehutanan_14_44b);
app.get('/tambah_kehutanan_14_44b', sistem.tambah_kehutanan_14_44b);
app.get('/edit_kehutanan_14_44b', sistem.edit_kehutanan_14_44b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_44c', sistem.kehutanan_14_44c);
app.get('/tambah_kehutanan_14_44c', sistem.tambah_kehutanan_14_44c);
app.get('/edit_kehutanan_14_44c', sistem.edit_kehutanan_14_44c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_45a', sistem.kehutanan_14_45a);
app.get('/tambah_kehutanan_14_45a', sistem.tambah_kehutanan_14_45a);
app.get('/edit_kehutanan_14_45a', sistem.edit_kehutanan_14_45a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_45b', sistem.kehutanan_14_45b);
app.get('/tambah_kehutanan_14_45b', sistem.tambah_kehutanan_14_45b);
app.get('/edit_kehutanan_14_45b', sistem.edit_kehutanan_14_45b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_45c', sistem.kehutanan_14_45c);
app.get('/tambah_kehutanan_14_45c', sistem.tambah_kehutanan_14_45c);
app.get('/edit_kehutanan_14_45c', sistem.edit_kehutanan_14_45c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_46a', sistem.kehutanan_14_46a);
app.get('/tambah_kehutanan_14_46a', sistem.tambah_kehutanan_14_46a);
app.get('/edit_kehutanan_14_46a', sistem.edit_kehutanan_14_46a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_46b', sistem.kehutanan_14_46b);
app.get('/tambah_kehutanan_14_46b', sistem.tambah_kehutanan_14_46b);
app.get('/edit_kehutanan_14_46b', sistem.edit_kehutanan_14_46b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_46c', sistem.kehutanan_14_46c);
app.get('/tambah_kehutanan_14_46c', sistem.tambah_kehutanan_14_46c);
app.get('/edit_kehutanan_14_46c', sistem.edit_kehutanan_14_46c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_47a', sistem.kehutanan_14_47a);
app.get('/tambah_kehutanan_14_47a', sistem.tambah_kehutanan_14_47a);
app.get('/edit_kehutanan_14_47a', sistem.edit_kehutanan_14_47a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_47b', sistem.kehutanan_14_47b);
app.get('/tambah_kehutanan_14_47b', sistem.tambah_kehutanan_14_47b);
app.get('/edit_kehutanan_14_47b', sistem.edit_kehutanan_14_47b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_47c', sistem.kehutanan_14_47c);
app.get('/tambah_kehutanan_14_47c', sistem.tambah_kehutanan_14_47c);
app.get('/edit_kehutanan_14_47c', sistem.edit_kehutanan_14_47c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_48a', sistem.kehutanan_14_48a);
app.get('/tambah_kehutanan_14_48a', sistem.tambah_kehutanan_14_48a);
app.get('/edit_kehutanan_14_48a', sistem.edit_kehutanan_14_48a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_48b', sistem.kehutanan_14_48b);
app.get('/tambah_kehutanan_14_48b', sistem.tambah_kehutanan_14_48b);
app.get('/edit_kehutanan_14_48b', sistem.edit_kehutanan_14_48b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_48c', sistem.kehutanan_14_48c);
app.get('/tambah_kehutanan_14_48c', sistem.tambah_kehutanan_14_48c);
app.get('/edit_kehutanan_14_48c', sistem.edit_kehutanan_14_48c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_49a', sistem.kehutanan_14_49a);
app.get('/tambah_kehutanan_14_49a', sistem.tambah_kehutanan_14_49a);
app.get('/edit_kehutanan_14_49a', sistem.edit_kehutanan_14_49a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_49b', sistem.kehutanan_14_49b);
app.get('/tambah_kehutanan_14_49b', sistem.tambah_kehutanan_14_49b);
app.get('/edit_kehutanan_14_49b', sistem.edit_kehutanan_14_49b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_49c', sistem.kehutanan_14_49c);
app.get('/tambah_kehutanan_14_49c', sistem.tambah_kehutanan_14_49c);
app.get('/edit_kehutanan_14_49c', sistem.edit_kehutanan_14_49c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_50a', sistem.kehutanan_14_50a);
app.get('/tambah_kehutanan_14_50a', sistem.tambah_kehutanan_14_50a);
app.get('/edit_kehutanan_14_50a', sistem.edit_kehutanan_14_50a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_50b', sistem.kehutanan_14_50b);
app.get('/tambah_kehutanan_14_50b', sistem.tambah_kehutanan_14_50b);
app.get('/edit_kehutanan_14_50b', sistem.edit_kehutanan_14_50b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_50c', sistem.kehutanan_14_50c);
app.get('/tambah_kehutanan_14_50c', sistem.tambah_kehutanan_14_50c);
app.get('/edit_kehutanan_14_50c', sistem.edit_kehutanan_14_50c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_51a', sistem.kehutanan_14_51a);
app.get('/tambah_kehutanan_14_51a', sistem.tambah_kehutanan_14_51a);
app.get('/edit_kehutanan_14_51a', sistem.edit_kehutanan_14_51a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_51b', sistem.kehutanan_14_51b);
app.get('/tambah_kehutanan_14_51b', sistem.tambah_kehutanan_14_51b);
app.get('/edit_kehutanan_14_51b', sistem.edit_kehutanan_14_51b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_51c', sistem.kehutanan_14_51c);
app.get('/tambah_kehutanan_14_51c', sistem.tambah_kehutanan_14_51c);
app.get('/edit_kehutanan_14_51c', sistem.edit_kehutanan_14_51c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_52a', sistem.kehutanan_14_52a);
app.get('/tambah_kehutanan_14_52a', sistem.tambah_kehutanan_14_52a);
app.get('/edit_kehutanan_14_52a', sistem.edit_kehutanan_14_52a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_52b', sistem.kehutanan_14_52b);
app.get('/tambah_kehutanan_14_52b', sistem.tambah_kehutanan_14_52b);
app.get('/edit_kehutanan_14_52b', sistem.edit_kehutanan_14_52b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_52c', sistem.kehutanan_14_52c);
app.get('/tambah_kehutanan_14_52c', sistem.tambah_kehutanan_14_52c);
app.get('/edit_kehutanan_14_52c', sistem.edit_kehutanan_14_52c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_53a', sistem.kehutanan_14_53a);
app.get('/tambah_kehutanan_14_53a', sistem.tambah_kehutanan_14_53a);
app.get('/edit_kehutanan_14_53a', sistem.edit_kehutanan_14_53a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_53b', sistem.kehutanan_14_53b);
app.get('/tambah_kehutanan_14_53b', sistem.tambah_kehutanan_14_53b);
app.get('/edit_kehutanan_14_53b', sistem.edit_kehutanan_14_53b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_53c', sistem.kehutanan_14_53c);
app.get('/tambah_kehutanan_14_53c', sistem.tambah_kehutanan_14_53c);
app.get('/edit_kehutanan_14_53c', sistem.edit_kehutanan_14_53c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_54a', sistem.kehutanan_14_54a);
app.get('/tambah_kehutanan_14_54a', sistem.tambah_kehutanan_14_54a);
app.get('/edit_kehutanan_14_54a', sistem.edit_kehutanan_14_54a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_54b', sistem.kehutanan_14_54b);
app.get('/tambah_kehutanan_14_54b', sistem.tambah_kehutanan_14_54b);
app.get('/edit_kehutanan_14_54b', sistem.edit_kehutanan_14_54b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_55a', sistem.kehutanan_14_55a);
app.get('/tambah_kehutanan_14_55a', sistem.tambah_kehutanan_14_55a);
app.get('/edit_kehutanan_14_55a', sistem.edit_kehutanan_14_55a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_55b', sistem.kehutanan_14_55b);
app.get('/tambah_kehutanan_14_55b', sistem.tambah_kehutanan_14_55b);
app.get('/edit_kehutanan_14_55b', sistem.edit_kehutanan_14_55b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_55c', sistem.kehutanan_14_55c);
app.get('/tambah_kehutanan_14_55c', sistem.tambah_kehutanan_14_55c);
app.get('/edit_kehutanan_14_55c', sistem.edit_kehutanan_14_55c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_55d', sistem.kehutanan_14_55d);
app.get('/tambah_kehutanan_14_55d', sistem.tambah_kehutanan_14_55d);
app.get('/edit_kehutanan_14_55d', sistem.edit_kehutanan_14_55d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_55e', sistem.kehutanan_14_55e);
app.get('/tambah_kehutanan_14_55e', sistem.tambah_kehutanan_14_55e);
app.get('/edit_kehutanan_14_55e', sistem.edit_kehutanan_14_55e);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_55f', sistem.kehutanan_14_55f);
app.get('/tambah_kehutanan_14_55f', sistem.tambah_kehutanan_14_55f);
app.get('/edit_kehutanan_14_55f', sistem.edit_kehutanan_14_55f);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_55g', sistem.kehutanan_14_55g);
app.get('/tambah_kehutanan_14_55g', sistem.tambah_kehutanan_14_55g);
app.get('/edit_kehutanan_14_55g', sistem.edit_kehutanan_14_55g);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_55h', sistem.kehutanan_14_55h);
app.get('/tambah_kehutanan_14_55h', sistem.tambah_kehutanan_14_55h);
app.get('/edit_kehutanan_14_55h', sistem.edit_kehutanan_14_55h);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_56a', sistem.kehutanan_14_56a);
app.get('/tambah_kehutanan_14_56a', sistem.tambah_kehutanan_14_56a);
app.get('/edit_kehutanan_14_56a', sistem.edit_kehutanan_14_56a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_56b', sistem.kehutanan_14_56b);
app.get('/tambah_kehutanan_14_56b', sistem.tambah_kehutanan_14_56b);
app.get('/edit_kehutanan_14_56b', sistem.edit_kehutanan_14_56b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_56c', sistem.kehutanan_14_56c);
app.get('/tambah_kehutanan_14_56c', sistem.tambah_kehutanan_14_56c);
app.get('/edit_kehutanan_14_56c', sistem.edit_kehutanan_14_56c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_57a', sistem.kehutanan_14_57a);
app.get('/tambah_kehutanan_14_57a', sistem.tambah_kehutanan_14_57a);
app.get('/edit_kehutanan_14_57a', sistem.edit_kehutanan_14_57a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_57b', sistem.kehutanan_14_57b);
app.get('/tambah_kehutanan_14_57b', sistem.tambah_kehutanan_14_57b);
app.get('/edit_kehutanan_14_57b', sistem.edit_kehutanan_14_57b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_57c', sistem.kehutanan_14_57c);
app.get('/tambah_kehutanan_14_57c', sistem.tambah_kehutanan_14_57c);
app.get('/edit_kehutanan_14_57c', sistem.edit_kehutanan_14_57c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_58a', sistem.kehutanan_14_58a);
app.get('/tambah_kehutanan_14_58a', sistem.tambah_kehutanan_14_58a);
app.get('/edit_kehutanan_14_58a', sistem.edit_kehutanan_14_58a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_58b', sistem.kehutanan_14_58b);
app.get('/tambah_kehutanan_14_58b', sistem.tambah_kehutanan_14_58b);
app.get('/edit_kehutanan_14_58b', sistem.edit_kehutanan_14_58b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_58c', sistem.kehutanan_14_58c);
app.get('/tambah_kehutanan_14_58c', sistem.tambah_kehutanan_14_58c);
app.get('/edit_kehutanan_14_58c', sistem.edit_kehutanan_14_58c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_59a', sistem.kehutanan_14_59a);
app.get('/tambah_kehutanan_14_59a', sistem.tambah_kehutanan_14_59a);
app.get('/edit_kehutanan_14_59a', sistem.edit_kehutanan_14_59a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_59b', sistem.kehutanan_14_59b);
app.get('/tambah_kehutanan_14_59b', sistem.tambah_kehutanan_14_59b);
app.get('/edit_kehutanan_14_59b', sistem.edit_kehutanan_14_59b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_59c', sistem.kehutanan_14_59c);
app.get('/tambah_kehutanan_14_59c', sistem.tambah_kehutanan_14_59c);
app.get('/edit_kehutanan_14_59c', sistem.edit_kehutanan_14_59c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_60a', sistem.kehutanan_14_60a);
app.get('/tambah_kehutanan_14_60a', sistem.tambah_kehutanan_14_60a);
app.get('/edit_kehutanan_14_60a', sistem.edit_kehutanan_14_60a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_60b', sistem.kehutanan_14_60b);
app.get('/tambah_kehutanan_14_60b', sistem.tambah_kehutanan_14_60b);
app.get('/edit_kehutanan_14_60b', sistem.edit_kehutanan_14_60b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_60c', sistem.kehutanan_14_60c);
app.get('/tambah_kehutanan_14_60c', sistem.tambah_kehutanan_14_60c);
app.get('/edit_kehutanan_14_60c', sistem.edit_kehutanan_14_60c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_61a', sistem.kehutanan_14_61a);
app.get('/tambah_kehutanan_14_61a', sistem.tambah_kehutanan_14_61a);
app.get('/edit_kehutanan_14_61a', sistem.edit_kehutanan_14_61a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_61b', sistem.kehutanan_14_61b);
app.get('/tambah_kehutanan_14_61b', sistem.tambah_kehutanan_14_61b);
app.get('/edit_kehutanan_14_61b', sistem.edit_kehutanan_14_61b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_61c', sistem.kehutanan_14_61c);
app.get('/tambah_kehutanan_14_61c', sistem.tambah_kehutanan_14_61c);
app.get('/edit_kehutanan_14_61c', sistem.edit_kehutanan_14_61c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_62a', sistem.kehutanan_14_62a);
app.get('/tambah_kehutanan_14_62a', sistem.tambah_kehutanan_14_62a);
app.get('/edit_kehutanan_14_62a', sistem.edit_kehutanan_14_62a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_62b', sistem.kehutanan_14_62b);
app.get('/tambah_kehutanan_14_62b', sistem.tambah_kehutanan_14_62b);
app.get('/edit_kehutanan_14_62b', sistem.edit_kehutanan_14_62b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_62c', sistem.kehutanan_14_62c);
app.get('/tambah_kehutanan_14_62c', sistem.tambah_kehutanan_14_62c);
app.get('/edit_kehutanan_14_62c', sistem.edit_kehutanan_14_62c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_63a', sistem.kehutanan_14_63a);
app.get('/tambah_kehutanan_14_63a', sistem.tambah_kehutanan_14_63a);
app.get('/edit_kehutanan_14_63a', sistem.edit_kehutanan_14_63a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_63b', sistem.kehutanan_14_63b);
app.get('/tambah_kehutanan_14_63b', sistem.tambah_kehutanan_14_63b);
app.get('/edit_kehutanan_14_63b', sistem.edit_kehutanan_14_63b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_63c', sistem.kehutanan_14_63c);
app.get('/tambah_kehutanan_14_63c', sistem.tambah_kehutanan_14_63c);
app.get('/edit_kehutanan_14_63c', sistem.edit_kehutanan_14_63c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_64a', sistem.kehutanan_14_64a);
app.get('/tambah_kehutanan_14_64a', sistem.tambah_kehutanan_14_64a);
app.get('/edit_kehutanan_14_64a', sistem.edit_kehutanan_14_64a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_64b', sistem.kehutanan_14_64b);
app.get('/tambah_kehutanan_14_64b', sistem.tambah_kehutanan_14_64b);
app.get('/edit_kehutanan_14_64b', sistem.edit_kehutanan_14_64b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_64c', sistem.kehutanan_14_64c);
app.get('/tambah_kehutanan_14_64c', sistem.tambah_kehutanan_14_64c);
app.get('/edit_kehutanan_14_64c', sistem.edit_kehutanan_14_64c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_65a', sistem.kehutanan_14_65a);
app.get('/tambah_kehutanan_14_65a', sistem.tambah_kehutanan_14_65a);
app.get('/edit_kehutanan_14_65a', sistem.edit_kehutanan_14_65a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_65b', sistem.kehutanan_14_65b);
app.get('/tambah_kehutanan_14_65b', sistem.tambah_kehutanan_14_65b);
app.get('/edit_kehutanan_14_65b', sistem.edit_kehutanan_14_65b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_65c', sistem.kehutanan_14_65c);
app.get('/tambah_kehutanan_14_65c', sistem.tambah_kehutanan_14_65c);
app.get('/edit_kehutanan_14_65c', sistem.edit_kehutanan_14_65c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_66a', sistem.kehutanan_14_66a);
app.get('/tambah_kehutanan_14_66a', sistem.tambah_kehutanan_14_66a);
app.get('/edit_kehutanan_14_66a', sistem.edit_kehutanan_14_66a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_66b', sistem.kehutanan_14_66b);
app.get('/tambah_kehutanan_14_66b', sistem.tambah_kehutanan_14_66b);
app.get('/edit_kehutanan_14_66b', sistem.edit_kehutanan_14_66b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_66c', sistem.kehutanan_14_66c);
app.get('/tambah_kehutanan_14_66c', sistem.tambah_kehutanan_14_66c);
app.get('/edit_kehutanan_14_66c', sistem.edit_kehutanan_14_66c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_66d', sistem.kehutanan_14_66d);
app.get('/tambah_kehutanan_14_66d', sistem.tambah_kehutanan_14_66d);
app.get('/edit_kehutanan_14_66d', sistem.edit_kehutanan_14_66d);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_66e', sistem.kehutanan_14_66e);
app.get('/tambah_kehutanan_14_66e', sistem.tambah_kehutanan_14_66e);
app.get('/edit_kehutanan_14_66e', sistem.edit_kehutanan_14_66e);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_66f', sistem.kehutanan_14_66f);
app.get('/tambah_kehutanan_14_66f', sistem.tambah_kehutanan_14_66f);
app.get('/edit_kehutanan_14_66f', sistem.edit_kehutanan_14_66f);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_66g', sistem.kehutanan_14_66g);
app.get('/tambah_kehutanan_14_66g', sistem.tambah_kehutanan_14_66g);
app.get('/edit_kehutanan_14_66g', sistem.edit_kehutanan_14_66g);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_67a', sistem.kehutanan_14_67a);
app.get('/tambah_kehutanan_14_67a', sistem.tambah_kehutanan_14_67a);
app.get('/edit_kehutanan_14_67a', sistem.edit_kehutanan_14_67a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_67b', sistem.kehutanan_14_67b);
app.get('/tambah_kehutanan_14_67b', sistem.tambah_kehutanan_14_67b);
app.get('/edit_kehutanan_14_67b', sistem.edit_kehutanan_14_67b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_68', sistem.kehutanan_14_68);
app.get('/tambah_kehutanan_14_68', sistem.tambah_kehutanan_14_68);
app.get('/edit_kehutanan_14_68', sistem.edit_kehutanan_14_68);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_69a', sistem.kehutanan_14_69a);
app.get('/tambah_kehutanan_14_69a', sistem.tambah_kehutanan_14_69a);
app.get('/edit_kehutanan_14_69a', sistem.edit_kehutanan_14_69a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kehutanan_14_69b', sistem.kehutanan_14_69b);
app.get('/tambah_kehutanan_14_69b', sistem.tambah_kehutanan_14_69b);
app.get('/edit_kehutanan_14_69b', sistem.edit_kehutanan_14_69b);
/*==============================================================================*/

/*=================================Peternakan===================================*/
app.get('/peternakan', sistem.peternakan);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/peternakan_15_1', sistem.peternakan_15_1);
app.get('/tambah_peternakan_15_1', sistem.tambah_peternakan_15_1);
app.get('/edit_peternakan_15_1', sistem.edit_peternakan_15_1);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/peternakan_15_2', sistem.peternakan_15_2);
app.get('/tambah_peternakan_15_2', sistem.tambah_peternakan_15_2);
app.get('/edit_peternakan_15_2', sistem.edit_peternakan_15_2);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/peternakan_15_3', sistem.peternakan_15_3);
app.get('/tambah_peternakan_15_3', sistem.tambah_peternakan_15_3);
app.get('/edit_peternakan_15_3', sistem.edit_peternakan_15_3);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/peternakan_15_4', sistem.peternakan_15_4);
app.get('/tambah_peternakan_15_4', sistem.tambah_peternakan_15_4);
app.get('/edit_peternakan_15_4', sistem.edit_peternakan_15_4);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/peternakan_15_5', sistem.peternakan_15_5);
app.get('/tambah_peternakan_15_5', sistem.tambah_peternakan_15_5);
app.get('/edit_peternakan_15_5', sistem.edit_peternakan_15_5);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/peternakan_15_6', sistem.peternakan_15_6);
app.get('/tambah_peternakan_15_6', sistem.tambah_peternakan_15_6);
app.get('/edit_peternakan_15_6', sistem.edit_peternakan_15_6);
/*==============================================================================*/

/*=================================Kesehatan====================================*/
app.get('/kesehatan', sistem.kesehatan);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kesehatan_17_1', sistem.kesehatan_17_1);
app.get('/tambah_kesehatan_17_1', sistem.tambah_kesehatan_17_1);
app.get('/edit_kesehatan_17_1', sistem.edit_kesehatan_17_1);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kesehatan_17_2', sistem.kesehatan_17_2);
app.get('/tambah_kesehatan_17_2', sistem.tambah_kesehatan_17_2);
app.get('/edit_kesehatan_17_2', sistem.edit_kesehatan_17_2);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kesehatan_17_3', sistem.kesehatan_17_3);
app.get('/tambah_kesehatan_17_3', sistem.tambah_kesehatan_17_3);
app.get('/edit_kesehatan_17_3', sistem.edit_kesehatan_17_3);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kesehatan_17_4', sistem.kesehatan_17_4);
app.get('/tambah_kesehatan_17_4', sistem.tambah_kesehatan_17_4);
app.get('/edit_kesehatan_17_4', sistem.edit_kesehatan_17_4);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kesehatan_17_5', sistem.kesehatan_17_5);
app.get('/tambah_kesehatan_17_5', sistem.tambah_kesehatan_17_5);
app.get('/edit_kesehatan_17_5', sistem.edit_kesehatan_17_5);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kesehatan_17_6', sistem.kesehatan_17_6);
app.get('/tambah_kesehatan_17_6', sistem.tambah_kesehatan_17_6);
app.get('/edit_kesehatan_17_6', sistem.edit_kesehatan_17_6);
/*==============================================================================*/

/*=================================Kediklatan===================================*/
app.get('/kediklatan', sistem.kediklatan);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kediklatan_18_1', sistem.kediklatan_18_1);
app.get('/tambah_kediklatan_18_1', sistem.tambah_kediklatan_18_1);
app.get('/edit_kediklatan_18_1', sistem.edit_kediklatan_18_1);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kediklatan_18_2', sistem.kediklatan_18_2);
app.get('/tambah_kediklatan_18_2', sistem.tambah_kediklatan_18_2);
app.get('/edit_kediklatan_18_2', sistem.edit_kediklatan_18_2);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kediklatan_18_3', sistem.kediklatan_18_3);
app.get('/tambah_kediklatan_18_3', sistem.tambah_kediklatan_18_3);
app.get('/edit_kediklatan_18_3', sistem.edit_kediklatan_18_3);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kediklatan_18_4', sistem.kediklatan_18_4);
app.get('/tambah_kediklatan_18_4', sistem.tambah_kediklatan_18_4);
app.get('/edit_kediklatan_18_4', sistem.edit_kediklatan_18_4);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kediklatan_18_5', sistem.kediklatan_18_5);
app.get('/tambah_kediklatan_18_5', sistem.tambah_kediklatan_18_5);
app.get('/edit_kediklatan_18_5', sistem.edit_kediklatan_18_5);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kediklatan_18_5', sistem.kediklatan_18_5);
app.get('/tambah_kediklatan_18_5', sistem.tambah_kediklatan_18_5);
app.get('/edit_kediklatan_18_5', sistem.edit_kediklatan_18_5);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kediklatan_18_6', sistem.kediklatan_18_6);
app.get('/tambah_kediklatan_18_6', sistem.tambah_kediklatan_18_6);
app.get('/edit_kediklatan_18_6', sistem.edit_kediklatan_18_6);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kediklatan_18_7', sistem.kediklatan_18_7);
app.get('/tambah_kediklatan_18_7', sistem.tambah_kediklatan_18_7);
app.get('/edit_kediklatan_18_7', sistem.edit_kediklatan_18_7);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kediklatan_18_8', sistem.kediklatan_18_8);
app.get('/tambah_kediklatan_18_8', sistem.tambah_kediklatan_18_8);
app.get('/edit_kediklatan_18_8', sistem.edit_kediklatan_18_8);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kediklatan_18_9', sistem.kediklatan_18_9);
app.get('/tambah_kediklatan_18_9', sistem.tambah_kediklatan_18_9);
app.get('/edit_kediklatan_18_9', sistem.edit_kediklatan_18_9);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/kediklatan_18_10', sistem.kediklatan_18_10);
app.get('/tambah_kediklatan_18_10', sistem.tambah_kediklatan_18_10);
app.get('/edit_kediklatan_18_10', sistem.edit_kediklatan_18_10);
/*==============================================================================*/

/*=================================Olahraga=====================================*/
app.get('/olahraga', sistem.olahraga);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/or_19_1', sistem.or_19_1);
app.get('/tambah_or_19_1', sistem.tambah_or_19_1);
app.get('/edit_or_19_1', sistem.edit_or_19_1);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/or_19_2', sistem.or_19_2);
app.get('/tambah_or_19_2', sistem.tambah_or_19_2);
app.get('/edit_or_19_2', sistem.edit_or_19_2);
/*==============================================================================*/

/*=====================================ESDM=====================================*/
app.get('/esdm', sistem.esdm);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_1a', sistem.esdm_20_1a);
app.get('/tambah_esdm_20_1a', sistem.tambah_esdm_20_1a);
app.get('/edit_esdm_20_1a', sistem.edit_esdm_20_1a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_1b', sistem.esdm_20_1b);
app.get('/tambah_esdm_20_1b', sistem.tambah_esdm_20_1b);
app.get('/edit_esdm_20_1b', sistem.edit_esdm_20_1b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_2a', sistem.esdm_20_2a);
app.get('/tambah_esdm_20_2a', sistem.tambah_esdm_20_2a);
app.get('/edit_esdm_20_2a', sistem.edit_esdm_20_2a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_2b', sistem.esdm_20_2b);
app.get('/tambah_esdm_20_2b', sistem.tambah_esdm_20_2b);
app.get('/edit_esdm_20_2b', sistem.edit_esdm_20_2b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_2c', sistem.esdm_20_2c);
app.get('/tambah_esdm_20_2c', sistem.tambah_esdm_20_2c);
app.get('/edit_esdm_20_2c', sistem.edit_esdm_20_2c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_3a', sistem.esdm_20_3a);
app.get('/tambah_esdm_20_3a', sistem.tambah_esdm_20_3a);
app.get('/edit_esdm_20_3a', sistem.edit_esdm_20_3a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_3b', sistem.esdm_20_3b);
app.get('/tambah_esdm_20_3b', sistem.tambah_esdm_20_3b);
app.get('/edit_esdm_20_3b', sistem.edit_esdm_20_3b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_3c', sistem.esdm_20_3c);
app.get('/tambah_esdm_20_3c', sistem.tambah_esdm_20_3c);
app.get('/edit_esdm_20_3c', sistem.edit_esdm_20_3c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_4a', sistem.esdm_20_4a);
app.get('/tambah_esdm_20_4a', sistem.tambah_esdm_20_4a);
app.get('/edit_esdm_20_4a', sistem.edit_esdm_20_4a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_4b', sistem.esdm_20_4b);
app.get('/tambah_esdm_20_4b', sistem.tambah_esdm_20_4b);
app.get('/edit_esdm_20_4b', sistem.edit_esdm_20_4b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_4c', sistem.esdm_20_4c);
app.get('/tambah_esdm_20_4c', sistem.tambah_esdm_20_4c);
app.get('/edit_esdm_20_4c', sistem.edit_esdm_20_4c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_5a', sistem.esdm_20_5a);
app.get('/tambah_esdm_20_5a', sistem.tambah_esdm_20_5a);
app.get('/edit_esdm_20_5a', sistem.edit_esdm_20_5a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_5b', sistem.esdm_20_5b);
app.get('/tambah_esdm_20_5b', sistem.tambah_esdm_20_5b);
app.get('/edit_esdm_20_5b', sistem.edit_esdm_20_5b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_5c', sistem.esdm_20_5c);
app.get('/tambah_esdm_20_5c', sistem.tambah_esdm_20_5c);
app.get('/edit_esdm_20_5c', sistem.edit_esdm_20_5c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_6', sistem.esdm_20_6);
app.get('/tambah_esdm_20_6', sistem.tambah_esdm_20_6);
app.get('/edit_esdm_20_6', sistem.edit_esdm_20_6);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_7', sistem.esdm_20_7);
app.get('/tambah_esdm_20_7', sistem.tambah_esdm_20_7);
app.get('/edit_esdm_20_7', sistem.edit_esdm_20_7);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/esdm_20_8', sistem.esdm_20_8);
app.get('/tambah_esdm_20_8', sistem.tambah_esdm_20_8);
app.get('/edit_esdm_20_8', sistem.edit_esdm_20_8);
/*==============================================================================*/

/*=======================Tenaga Kerja dan Transmigrasi==========================*/
app.get('/nakertrans', sistem.nakertrans);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/nakertrans_21_1a', sistem.nakertrans_21_1a);
app.get('/tambah_nakertrans_21_1a', sistem.tambah_nakertrans_21_1a);
app.get('/edit_nakertrans_21_1a', sistem.edit_nakertrans_21_1a);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/nakertrans_21_1b', sistem.nakertrans_21_1b);
app.get('/tambah_nakertrans_21_1b', sistem.tambah_nakertrans_21_1b);
app.get('/edit_nakertrans_21_1b', sistem.edit_nakertrans_21_1b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/nakertrans_21_1c', sistem.nakertrans_21_1c);
app.get('/tambah_nakertrans_21_1c', sistem.tambah_nakertrans_21_1c);
app.get('/edit_nakertrans_21_1c', sistem.edit_nakertrans_21_1c);
/*==============================================================================*/

/*======================Penelitian dan Pengembangan=============================*/
app.get('/litbang', sistem.litbang);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/litbang_22_1', sistem.litbang_22_1);
app.get('/tambah_litbang_22_1', sistem.tambah_litbang_22_1);
app.get('/edit_litbang_22_1', sistem.edit_litbang_22_1);
/*==============================================================================*/

/*================================Lainnya=======================================*/
app.get('/lainnya', sistem.lainnya);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/lainnya_23_1', sistem.lainnya_23_1);
app.get('/tambah_lainnya_23_1', sistem.tambah_lainnya_23_1);
app.get('/edit_lainnya_23_1', sistem.edit_lainnya_23_1);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/lainnya_23_2', sistem.lainnya_23_2);
app.get('/tambah_lainnya_23_2', sistem.tambah_lainnya_23_2);
app.get('/edit_lainnya_23_2', sistem.edit_lainnya_23_2);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/lainnya_23_3', sistem.lainnya_23_3);
app.get('/tambah_lainnya_23_3', sistem.tambah_lainnya_23_3);
app.get('/edit_lainnya_23_3', sistem.edit_lainnya_23_3);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/lainnya_23_4', sistem.lainnya_23_4);
app.get('/tambah_lainnya_23_4', sistem.tambah_lainnya_23_4);
app.get('/edit_lainnya_23_4', sistem.edit_lainnya_23_4);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/lainnya_23_5', sistem.lainnya_23_5);
app.get('/tambah_lainnya_23_5', sistem.tambah_lainnya_23_5);
app.get('/edit_lainnya_23_5', sistem.edit_lainnya_23_5);
/*==============================================================================*/



/*==============================================================================*/
/*                    STANDAR BIAYA UMUM BATAS TERTINGGI
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_1', sistem.sbu1_2_1);
app.get('/tambah_sbu1_2_1/add', sistem.tambah_sbu1_2_1);
app.post('/tambah_sbu1_2_1/add', sistem.save_sbu1_2_1);
app.get('/edit_sbu1_2_1/edit/:id', sistem.edit_sbu1_2_1);
app.post('/edit_sbu1_2_1/edit/:id', sistem.save_edit_sbu1_2_1);
app.get('/edit_sbu1_2_1/delete/:id', sistem.delete_sbu1_2_1);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_2', sistem.sbu1_2_2);
app.get('/tambah_sbu1_2_2/add', sistem.tambah_sbu1_2_2);
app.post('/tambah_sbu1_2_2/add', sistem.save_sbu1_2_2);
app.get('/edit_sbu1_2_2/edit/:id', sistem.edit_sbu1_2_2);
app.post('/edit_sbu1_2_2/edit/:id', sistem.save_edit_sbu1_2_2);
app.get('/edit_sbu1_2_2/delete/:id', sistem.delete_sbu1_2_2);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_3', sistem.sbu1_2_3);
app.get('/tambah_sbu1_2_3/add', sistem.tambah_sbu1_2_3);
app.post('/tambah_sbu1_2_3/add', sistem.save_sbu1_2_3);
app.get('/edit_sbu1_2_3/edit/:id', sistem.edit_sbu1_2_3);
app.post('/edit_sbu1_2_3/edit/:id', sistem.save_edit_sbu1_2_3);
app.get('/edit_sbu1_2_3/delete/:id', sistem.delete_sbu1_2_3);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_4', sistem.sbu1_2_4);
app.get('/tambah_sbu1_2_4/add', sistem.tambah_sbu1_2_4);
app.post('/tambah_sbu1_2_4/add', sistem.save_sbu1_2_4);
app.get('/edit_sbu1_2_4/edit/:id', sistem.edit_sbu1_2_4);
app.post('/edit_sbu1_2_4/edit/:id', sistem.save_edit_sbu1_2_4);
app.get('/edit_sbu1_2_4/delete/:id', sistem.delete_sbu1_2_4);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_5', sistem.sbu1_2_5);
app.get('/tambah_sbu1_2_5/add', sistem.tambah_sbu1_2_5);
app.post('/tambah_sbu1_2_5/add', sistem.save_sbu1_2_5);
app.get('/edit_sbu1_2_5/edit/:id', sistem.edit_sbu1_2_5);
app.post('/edit_sbu1_2_5/edit/:id', sistem.save_edit_sbu1_2_5);
app.get('/edit_sbu1_2_5/delete/:id', sistem.delete_sbu1_2_5);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_6', sistem.sbu1_2_6);
app.get('/tambah_sbu1_2_6/add', sistem.tambah_sbu1_2_6);
app.post('/tambah_sbu1_2_6/add', sistem.save_sbu1_2_6);
app.get('/edit_sbu1_2_6/edit/:id', sistem.edit_sbu1_2_6);
app.post('/edit_sbu1_2_6/edit/:id', sistem.save_edit_sbu1_2_6);
app.get('/edit_sbu1_2_6/delete/:id', sistem.delete_sbu1_2_6);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_7', sistem.sbu1_2_7);
app.get('/tambah_sbu1_2_7/add', sistem.tambah_sbu1_2_7);
app.post('/tambah_sbu1_2_7/add', sistem.save_sbu1_2_7);
app.get('/edit_sbu1_2_7/edit/:id', sistem.edit_sbu1_2_7);
app.post('/edit_sbu1_2_7/edit/:id', sistem.save_edit_sbu1_2_7);
app.get('/edit_sbu1_2_7/delete/:id', sistem.delete_sbu1_2_7);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_8', sistem.sbu1_2_8);
app.get('/tambah_sbu1_2_8/add', sistem.tambah_sbu1_2_8);
app.post('/tambah_sbu1_2_8/add', sistem.save_sbu1_2_8);
app.get('/edit_sbu1_2_8/edit/:id', sistem.edit_sbu1_2_8);
app.post('/edit_sbu1_2_8/edit/:id', sistem.save_edit_sbu1_2_8);
app.get('/edit_sbu1_2_8/delete/:id', sistem.delete_sbu1_2_8);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_9', sistem.sbu1_2_9);
app.get('/tambah_sbu1_2_9/add', sistem.tambah_sbu1_2_9);
app.post('/tambah_sbu1_2_9/add', sistem.save_sbu1_2_9);
app.get('/edit_sbu1_2_9/edit/:id', sistem.edit_sbu1_2_9);
app.post('/edit_sbu1_2_9/edit/:id', sistem.save_edit_sbu1_2_9);
app.get('/edit_sbu1_2_9/delete/:id', sistem.delete_sbu1_2_9);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_10', sistem.sbu1_2_10);
app.get('/tambah_sbu1_2_10/add', sistem.tambah_sbu1_2_10);
app.post('/tambah_sbu1_2_10/add', sistem.save_sbu1_2_10);
app.get('/edit_sbu1_2_10/edit/:id', sistem.edit_sbu1_2_10);
app.post('/edit_sbu1_2_10/edit/:id', sistem.save_edit_sbu1_2_10);
app.get('/edit_sbu1_2_10/delete/:id', sistem.delete_sbu1_2_10);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_11', sistem.sbu1_2_11);
app.get('/tambah_sbu1_2_11/add', sistem.tambah_sbu1_2_11);
app.post('/tambah_sbu1_2_11/add', sistem.save_sbu1_2_11);
app.get('/edit_sbu1_2_11/edit/:id', sistem.edit_sbu1_2_11);
app.post('/edit_sbu1_2_11/edit/:id', sistem.save_edit_sbu1_2_11);
app.get('/edit_sbu1_2_11/delete/:id', sistem.delete_sbu1_2_11);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_12', sistem.sbu1_2_12);
app.get('/tambah_sbu1_2_12/add', sistem.tambah_sbu1_2_12);
app.post('/tambah_sbu1_2_12/add', sistem.save_sbu1_2_12);
app.get('/edit_sbu1_2_12/edit/:id', sistem.edit_sbu1_2_12);
app.post('/edit_sbu1_2_12/edit/:id', sistem.save_edit_sbu1_2_12);
app.get('/edit_sbu1_2_12/delete/:id', sistem.delete_sbu1_2_12);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_13', sistem.sbu1_2_13);
app.get('/tambah_sbu1_2_13/add', sistem.tambah_sbu1_2_13);
app.post('/tambah_sbu1_2_13/add', sistem.save_sbu1_2_13);
app.get('/edit_sbu1_2_13/edit/:id', sistem.edit_sbu1_2_13);
app.post('/edit_sbu1_2_13/edit/:id', sistem.save_edit_sbu1_2_13);
app.get('/edit_sbu1_2_13/delete/:id', sistem.delete_sbu1_2_13);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_13D', sistem.sbu1_2_13D);
app.get('/tambah_sbu1_2_13D/add', sistem.tambah_sbu1_2_13D);
app.post('/tambah_sbu1_2_13D/add', sistem.save_sbu1_2_13D);
app.get('/edit_sbu1_2_13D/edit/:id', sistem.edit_sbu1_2_13D);
app.post('/edit_sbu1_2_13D/edit/:id', sistem.save_edit_sbu1_2_13D);
app.get('/edit_sbu1_2_13D/delete/:id', sistem.delete_sbu1_2_13D);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_14', sistem.sbu1_2_14);
app.get('/tambah_sbu1_2_14/add', sistem.tambah_sbu1_2_14);
app.post('/tambah_sbu1_2_14/add', sistem.save_sbu1_2_14);
app.get('/edit_sbu1_2_14/edit/:id', sistem.edit_sbu1_2_14);
app.post('/edit_sbu1_2_14/edit/:id', sistem.save_edit_sbu1_2_14);
app.get('/edit_sbu1_2_14/delete/:id', sistem.delete_sbu1_2_14);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_15', sistem.sbu1_2_15);
app.get('/tambah_sbu1_2_15/add', sistem.tambah_sbu1_2_15);
app.post('/tambah_sbu1_2_15/add', sistem.save_sbu1_2_15);
app.get('/edit_sbu1_2_15/edit/:id', sistem.edit_sbu1_2_15);
app.post('/edit_sbu1_2_15/edit/:id', sistem.save_edit_sbu1_2_15);
app.get('/edit_sbu1_2_15/delete/:id', sistem.delete_sbu1_2_15);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_16', sistem.sbu1_2_16);
app.get('/tambah_sbu1_2_16/add', sistem.tambah_sbu1_2_16);
app.post('/tambah_sbu1_2_16/add', sistem.save_sbu1_2_16);
app.get('/edit_sbu1_2_16/edit/:id', sistem.edit_sbu1_2_16);
app.post('/edit_sbu1_2_16/edit/:id', sistem.save_edit_sbu1_2_16);
app.get('/edit_sbu1_2_16/delete/:id', sistem.delete_sbu1_2_16);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_17', sistem.sbu1_2_17);
app.get('/tambah_sbu1_2_17/add', sistem.tambah_sbu1_2_17);
app.post('/tambah_sbu1_2_17/add', sistem.save_sbu1_2_17);
app.get('/edit_sbu1_2_17/edit/:id', sistem.edit_sbu1_2_17);
app.post('/edit_sbu1_2_17/edit/:id', sistem.save_edit_sbu1_2_17);
app.get('/edit_sbu1_2_17/delete/:id', sistem.delete_sbu1_2_17);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_18', sistem.sbu1_2_18);
app.get('/tambah_sbu1_2_18/add', sistem.tambah_sbu1_2_18);
app.post('/tambah_sbu1_2_18/add', sistem.save_sbu1_2_18);
app.get('/edit_sbu1_2_18/edit/:id', sistem.edit_sbu1_2_18);
app.post('/edit_sbu1_2_18/edit/:id', sistem.save_edit_sbu1_2_18);
app.get('/edit_sbu1_2_18/delete/:id', sistem.delete_sbu1_2_18);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_19', sistem.sbu1_2_19);
app.get('/tambah_sbu1_2_19/add', sistem.tambah_sbu1_2_19);
app.post('/tambah_sbu1_2_19/add', sistem.save_sbu1_2_19);
app.get('/edit_sbu1_2_19/edit/:id', sistem.edit_sbu1_2_19);
app.post('/edit_sbu1_2_19/edit/:id', sistem.save_edit_sbu1_2_19);
app.get('/edit_sbu1_2_19/delete/:id', sistem.delete_sbu1_2_19);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_20', sistem.sbu1_2_20);
app.get('/tambah_sbu1_2_20/add', sistem.tambah_sbu1_2_20);
app.post('/tambah_sbu1_2_20/add', sistem.save_sbu1_2_20);
app.get('/edit_sbu1_2_20/edit/:id', sistem.edit_sbu1_2_20);
app.post('/edit_sbu1_2_20/edit/:id', sistem.save_edit_sbu1_2_20);
app.get('/edit_sbu1_2_20/delete/:id', sistem.delete_sbu1_2_20);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_21', sistem.sbu1_2_21);
app.get('/tambah_sbu1_2_21/add', sistem.tambah_sbu1_2_21);
app.post('/tambah_sbu1_2_21/add', sistem.save_sbu1_2_21);
app.get('/edit_sbu1_2_21/edit/:id', sistem.edit_sbu1_2_21);
app.post('/edit_sbu1_2_21/edit/:id', sistem.save_edit_sbu1_2_21);
app.get('/edit_sbu1_2_21/delete/:id', sistem.delete_sbu1_2_21);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_22', sistem.sbu1_2_22);
app.get('/tambah_sbu1_2_22/add', sistem.tambah_sbu1_2_22);
app.post('/tambah_sbu1_2_22/add', sistem.save_sbu1_2_22);
app.get('/edit_sbu1_2_22/edit/:id', sistem.edit_sbu1_2_22);
app.post('/edit_sbu1_2_22/edit/:id', sistem.save_edit_sbu1_2_22);
app.get('/edit_sbu1_2_22/delete/:id', sistem.delete_sbu1_2_22);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_23', sistem.sbu1_2_23);
app.get('/tambah_sbu1_2_23/add', sistem.tambah_sbu1_2_23);
app.post('/tambah_sbu1_2_23/add', sistem.save_sbu1_2_23);
app.get('/edit_sbu1_2_23/edit/:id', sistem.edit_sbu1_2_23);
app.post('/edit_sbu1_2_23/edit/:id', sistem.save_edit_sbu1_2_23);
app.get('/edit_sbu1_2_23/delete/:id', sistem.delete_sbu1_2_23);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_24', sistem.sbu1_2_24);
app.get('/tambah_sbu1_2_24/add', sistem.tambah_sbu1_2_24);
app.post('/tambah_sbu1_2_24/add', sistem.save_sbu1_2_24);
app.get('/edit_sbu1_2_24/edit/:id', sistem.edit_sbu1_2_24);
app.post('/edit_sbu1_2_24/edit/:id', sistem.save_edit_sbu1_2_24);
app.get('/edit_sbu1_2_24/delete/:id', sistem.delete_sbu1_2_24);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_25', sistem.sbu1_2_25);
app.get('/tambah_sbu1_2_25/add', sistem.tambah_sbu1_2_25);
app.post('/tambah_sbu1_2_25/add', sistem.save_sbu1_2_25);
app.get('/edit_sbu1_2_25/edit/:id', sistem.edit_sbu1_2_25);
app.post('/edit_sbu1_2_25/edit/:id', sistem.save_edit_sbu1_2_25);
app.get('/edit_sbu1_2_25/delete/:id', sistem.delete_sbu1_2_25);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_25b', sistem.sbu1_2_25b);
app.get('/tambah_sbu1_2_25b/add', sistem.tambah_sbu1_2_25b);
app.post('/tambah_sbu1_2_25b/add', sistem.save_sbu1_2_25b);
app.get('/edit_sbu1_2_25b/edit/:id', sistem.edit_sbu1_2_25b);
app.post('/edit_sbu1_2_25b/edit/:id', sistem.save_edit_sbu1_2_25b);
app.get('/edit_sbu1_2_25b/delete/:id', sistem.delete_sbu1_2_25b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_26', sistem.sbu1_2_26);
app.get('/tambah_sbu1_2_26/add', sistem.tambah_sbu1_2_26);
app.post('/tambah_sbu1_2_26/add', sistem.save_sbu1_2_26);
app.get('/edit_sbu1_2_26/edit/:id', sistem.edit_sbu1_2_26);
app.post('/edit_sbu1_2_26/edit/:id', sistem.save_edit_sbu1_2_26);
app.get('/edit_sbu1_2_26/delete/:id', sistem.delete_sbu1_2_26);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_27', sistem.sbu1_2_27);
app.get('/tambah_sbu1_2_27/add', sistem.tambah_sbu1_2_27);
app.post('/tambah_sbu1_2_27/add', sistem.save_sbu1_2_27);
app.get('/edit_sbu1_2_27/edit/:id', sistem.edit_sbu1_2_27);
app.post('/edit_sbu1_2_27/edit/:id', sistem.save_edit_sbu1_2_27);
app.get('/edit_sbu1_2_27/delete/:id', sistem.delete_sbu1_2_27);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_28', sistem.sbu1_2_28);
app.get('/tambah_sbu1_2_28/add', sistem.tambah_sbu1_2_28);
app.post('/tambah_sbu1_2_28/add', sistem.save_sbu1_2_28);
app.get('/edit_sbu1_2_28/edit/:id', sistem.edit_sbu1_2_28);
app.post('/edit_sbu1_2_28/edit/:id', sistem.save_edit_sbu1_2_28);
app.get('/edit_sbu1_2_28/delete/:id', sistem.delete_sbu1_2_28);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_29', sistem.sbu1_2_29);
app.get('/tambah_sbu1_2_29/add', sistem.tambah_sbu1_2_29);
app.post('/tambah_sbu1_2_29/add', sistem.save_sbu1_2_29);
app.get('/edit_sbu1_2_29/edit/:id', sistem.edit_sbu1_2_29);
app.post('/edit_sbu1_2_29/edit/:id', sistem.save_edit_sbu1_2_29);
app.get('/edit_sbu1_2_29/delete/:id', sistem.delete_sbu1_2_29);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_30', sistem.sbu1_2_30);
app.get('/tambah_sbu1_2_30/add', sistem.tambah_sbu1_2_30);
app.post('/tambah_sbu1_2_30/add', sistem.save_sbu1_2_30);
app.get('/edit_sbu1_2_30/edit/:id', sistem.edit_sbu1_2_30);
app.post('/edit_sbu1_2_30/edit/:id', sistem.save_edit_sbu1_2_30);
app.get('/edit_sbu1_2_30/delete/:id', sistem.delete_sbu1_2_30);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_30c', sistem.sbu1_2_30c);
app.get('/tambah_sbu1_2_30c', sistem.tambah_sbu1_2_30c);
app.get('/edit_sbu1_2_30c', sistem.edit_sbu1_2_30c);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_31', sistem.sbu1_2_31);
app.get('/tambah_sbu1_2_31/add', sistem.tambah_sbu1_2_31);
app.post('/tambah_sbu1_2_31/add', sistem.save_sbu1_2_31);
app.get('/edit_sbu1_2_31/edit/:id', sistem.edit_sbu1_2_31);
app.post('/edit_sbu1_2_31/edit/:id', sistem.save_edit_sbu1_2_31);
app.get('/edit_sbu1_2_31/delete/:id', sistem.delete_sbu1_2_31);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_32', sistem.sbu1_2_32);
app.get('/tambah_sbu1_2_32/add', sistem.tambah_sbu1_2_32);
app.post('/tambah_sbu1_2_32/add', sistem.save_sbu1_2_32);
app.get('/edit_sbu1_2_32/edit/:id', sistem.edit_sbu1_2_32);
app.post('/edit_sbu1_2_32/edit/:id', sistem.save_edit_sbu1_2_32);
app.get('/edit_sbu1_2_32/delete/:id', sistem.delete_sbu1_2_32);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_33', sistem.sbu1_2_33);
app.get('/tambah_sbu1_2_33/add', sistem.tambah_sbu1_2_33);
app.post('/tambah_sbu1_2_33/add', sistem.save_sbu1_2_33);
app.get('/edit_sbu1_2_33/edit/:id', sistem.edit_sbu1_2_33);
app.post('/edit_sbu1_2_33/edit/:id', sistem.save_edit_sbu1_2_33);
app.get('/edit_sbu1_2_33/delete/:id', sistem.delete_sbu1_2_33);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_34', sistem.sbu1_2_34);
app.get('/tambah_sbu1_2_34/add', sistem.tambah_sbu1_2_34);
app.post('/tambah_sbu1_2_34/add', sistem.save_sbu1_2_34);
app.get('/edit_sbu1_2_34/edit/:id', sistem.edit_sbu1_2_34);
app.post('/edit_sbu1_2_34/edit/:id', sistem.save_edit_sbu1_2_34);
app.get('/edit_sbu1_2_34/delete/:id', sistem.delete_sbu1_2_34);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_35', sistem.sbu1_2_35);
app.get('/tambah_sbu1_2_35/add', sistem.tambah_sbu1_2_35);
app.post('/tambah_sbu1_2_35/add', sistem.save_sbu1_2_35);
app.get('/edit_sbu1_2_35/edit/:id', sistem.edit_sbu1_2_35);
app.post('/edit_sbu1_2_35/edit/:id', sistem.save_edit_sbu1_2_35);
app.get('/edit_sbu1_2_35/delete/:id', sistem.delete_sbu1_2_35);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_36', sistem.sbu1_2_36);
app.get('/tambah_sbu1_2_36/add', sistem.tambah_sbu1_2_36);
app.post('/tambah_sbu1_2_36/add', sistem.save_sbu1_2_36);
app.get('/edit_sbu1_2_36/edit/:id', sistem.edit_sbu1_2_36);
app.post('/edit_sbu1_2_36/edit/:id', sistem.save_edit_sbu1_2_36);
app.get('/edit_sbu1_2_36/delete/:id', sistem.delete_sbu1_2_36);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_37', sistem.sbu1_2_37);
app.get('/tambah_sbu1_2_37/add', sistem.tambah_sbu1_2_37);
app.post('/tambah_sbu1_2_37/add', sistem.save_sbu1_2_37);
app.get('/edit_sbu1_2_37/edit/:id', sistem.edit_sbu1_2_37);
app.post('/edit_sbu1_2_37/edit/:id', sistem.save_edit_sbu1_2_37);
app.get('/edit_sbu1_2_37/delete/:id', sistem.delete_sbu1_2_37);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_38', sistem.sbu1_2_38);
app.get('/tambah_sbu1_2_38/add', sistem.tambah_sbu1_2_38);
app.post('/tambah_sbu1_2_38/add', sistem.save_sbu1_2_38);
app.get('/edit_sbu1_2_38/edit/:id', sistem.edit_sbu1_2_38);
app.post('/edit_sbu1_2_38/edit/:id', sistem.save_edit_sbu1_2_38);
app.get('/edit_sbu1_2_38/delete/:id', sistem.delete_sbu1_2_38);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_39', sistem.sbu1_2_39);
app.get('/tambah_sbu1_2_39/add', sistem.tambah_sbu1_2_39);
app.post('/tambah_sbu1_2_39/add', sistem.save_sbu1_2_39);
app.get('/edit_sbu1_2_39/edit/:id', sistem.edit_sbu1_2_39);
app.post('/edit_sbu1_2_39/edit/:id', sistem.save_edit_sbu1_2_39);
app.get('/edit_sbu1_2_39/delete/:id', sistem.delete_sbu1_2_39);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_40', sistem.sbu1_2_40);
app.get('/tambah_sbu1_2_40/add', sistem.tambah_sbu1_2_40);
app.post('/tambah_sbu1_2_40/add', sistem.save_sbu1_2_40);
app.get('/edit_sbu1_2_40/edit/:id', sistem.edit_sbu1_2_40);
app.post('/edit_sbu1_2_40/edit/:id', sistem.save_edit_sbu1_2_40);
app.get('/edit_sbu1_2_40/delete/:id', sistem.delete_sbu1_2_40);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_41', sistem.sbu1_2_41);
app.get('/tambah_sbu1_2_41/add', sistem.tambah_sbu1_2_41);
app.post('/tambah_sbu1_2_41/add', sistem.save_sbu1_2_41);
app.get('/edit_sbu1_2_41/edit/:id', sistem.edit_sbu1_2_41);
app.post('/edit_sbu1_2_41/edit/:id', sistem.save_edit_sbu1_2_41);
app.get('/edit_sbu1_2_41/delete/:id', sistem.delete_sbu1_2_41);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_42', sistem.sbu1_2_42);
app.get('/tambah_sbu1_2_42/add', sistem.tambah_sbu1_2_42);
app.post('/tambah_sbu1_2_42/add', sistem.save_sbu1_2_42);
app.get('/edit_sbu1_2_42/edit/:id', sistem.edit_sbu1_2_42);
app.post('/edit_sbu1_2_42/edit/:id', sistem.save_edit_sbu1_2_42);
app.get('/edit_sbu1_2_42/delete/:id', sistem.delete_sbu1_2_42);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_43', sistem.sbu1_2_43);
app.get('/tambah_sbu1_2_43/add', sistem.tambah_sbu1_2_43);
app.post('/tambah_sbu1_2_43/add', sistem.save_sbu1_2_43);
app.get('/edit_sbu1_2_43/edit/:id', sistem.edit_sbu1_2_43);
app.post('/edit_sbu1_2_43/edit/:id', sistem.save_edit_sbu1_2_43);
app.get('/edit_sbu1_2_43/delete/:id', sistem.delete_sbu1_2_43);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_44', sistem.sbu1_2_44);
app.get('/tambah_sbu1_2_44/add', sistem.tambah_sbu1_2_44);
app.post('/tambah_sbu1_2_44/add', sistem.save_sbu1_2_44);
app.get('/edit_sbu1_2_44/edit/:id', sistem.edit_sbu1_2_44);
app.post('/edit_sbu1_2_44/edit/:id', sistem.save_edit_sbu1_2_44);
app.get('/edit_sbu1_2_44/delete/:id', sistem.delete_sbu1_2_44);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_45', sistem.sbu1_2_45);
app.get('/tambah_sbu1_2_45/add', sistem.tambah_sbu1_2_45);
app.post('/tambah_sbu1_2_45/add', sistem.save_sbu1_2_45);
app.get('/edit_sbu1_2_45/edit/:id', sistem.edit_sbu1_2_45);
app.post('/edit_sbu1_2_45/edit/:id', sistem.save_edit_sbu1_2_45);
app.get('/edit_sbu1_2_45/delete/:id', sistem.delete_sbu1_2_45);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_46', sistem.sbu1_2_46);
app.get('/tambah_sbu1_2_46/add', sistem.tambah_sbu1_2_46);
app.post('/tambah_sbu1_2_46/add', sistem.save_sbu1_2_46);
app.get('/edit_sbu1_2_46/edit/:id', sistem.edit_sbu1_2_46);
app.post('/edit_sbu1_2_46/edit/:id', sistem.save_edit_sbu1_2_46);
app.get('/edit_sbu1_2_46/delete/:id', sistem.delete_sbu1_2_46);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_47', sistem.sbu1_2_47);
app.get('/tambah_sbu1_2_47/add', sistem.tambah_sbu1_2_47);
app.post('/tambah_sbu1_2_47/add', sistem.save_sbu1_2_47);
app.get('/edit_sbu1_2_47/edit/:id', sistem.edit_sbu1_2_47);
app.post('/edit_sbu1_2_47/edit/:id', sistem.save_edit_sbu1_2_47);
app.get('/edit_sbu1_2_47/delete/:id', sistem.delete_sbu1_2_47);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_48', sistem.sbu1_2_48);
app.get('/tambah_sbu1_2_48/add', sistem.tambah_sbu1_2_48);
app.post('/tambah_sbu1_2_48/add', sistem.save_sbu1_2_48);
app.get('/edit_sbu1_2_48/edit/:id', sistem.edit_sbu1_2_48);
app.post('/edit_sbu1_2_48/edit/:id', sistem.save_edit_sbu1_2_48);
app.get('/edit_sbu1_2_48/delete/:id', sistem.delete_sbu1_2_48);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_49', sistem.sbu1_2_49);
app.get('/tambah_sbu1_2_49/add', sistem.tambah_sbu1_2_49);
app.post('/tambah_sbu1_2_49/add', sistem.save_sbu1_2_49);
app.get('/edit_sbu1_2_49/edit/:id', sistem.edit_sbu1_2_49);
app.post('/edit_sbu1_2_49/edit/:id', sistem.save_edit_sbu1_2_49);
app.get('/edit_sbu1_2_49/delete/:id', sistem.delete_sbu1_2_49);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_50', sistem.sbu1_2_50);
app.get('/tambah_sbu1_2_50/add', sistem.tambah_sbu1_2_50);
app.post('/tambah_sbu1_2_50/add', sistem.save_sbu1_2_50);
app.get('/edit_sbu1_2_50/edit/:id', sistem.edit_sbu1_2_50);
app.post('/edit_sbu1_2_50/edit/:id', sistem.save_edit_sbu1_2_50);
app.get('/edit_sbu1_2_50/delete/:id', sistem.delete_sbu1_2_50);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_51', sistem.sbu1_2_51);
app.get('/tambah_sbu1_2_51/add', sistem.tambah_sbu1_2_51);
app.post('/tambah_sbu1_2_51/add', sistem.save_sbu1_2_51);
app.get('/edit_sbu1_2_51/edit/:id', sistem.edit_sbu1_2_51);
app.post('/edit_sbu1_2_51/edit/:id', sistem.save_edit_sbu1_2_51);
app.get('/edit_sbu1_2_51/delete/:id', sistem.delete_sbu1_2_51);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_52', sistem.sbu1_2_52);
app.get('/tambah_sbu1_2_52', sistem.tambah_sbu1_2_52);
app.get('/edit_sbu1_2_52', sistem.edit_sbu1_2_52);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_53', sistem.sbu1_2_53);
app.get('/tambah_sbu1_2_53', sistem.tambah_sbu1_2_53);
app.get('/edit_sbu1_2_53', sistem.edit_sbu1_2_53);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_54', sistem.sbu1_2_54);
app.get('/tambah_sbu1_2_54', sistem.tambah_sbu1_2_54);
app.get('/edit_sbu1_2_54', sistem.edit_sbu1_2_54);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_55', sistem.sbu1_2_55);
app.get('/tambah_sbu1_2_55', sistem.tambah_sbu1_2_55);
app.get('/edit_sbu1_2_55', sistem.edit_sbu1_2_55);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_58', sistem.sbu1_2_58);
app.get('/tambah_sbu1_2_58', sistem.tambah_sbu1_2_58);
app.get('/edit_sbu1_2_58', sistem.edit_sbu1_2_58);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_59', sistem.sbu1_2_59);
app.get('/tambah_sbu1_2_59', sistem.tambah_sbu1_2_59);
app.get('/edit_sbu1_2_59', sistem.edit_sbu1_2_59);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_60', sistem.sbu1_2_60);
app.get('/tambah_sbu1_2_60', sistem.tambah_sbu1_2_60);
app.get('/edit_sbu1_2_60', sistem.edit_sbu1_2_60);
/*==============================================================================*/

/*===================================SBU Estimasi===============================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu2_3_1', sistem.sbu2_3_1);
app.get('/tambah_sbu2_3_1/add', sistem.tambah_sbu2_3_1);
app.post('/tambah_sbu2_3_1/add', sistem.save_sbu2_3_1);
app.get('/edit_sbu2_3_1/edit/:id', sistem.edit_sbu2_3_1);
app.post('/edit_sbu2_3_1/edit/:id', sistem.save_edit_sbu2_3_1);
app.get('/edit_sbu2_3_1/delete/:id', sistem.delete_sbu2_3_1);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu2_3_2', sistem.sbu2_3_2);
app.get('/tambah_sbu2_3_2/add', sistem.tambah_sbu2_3_2);
app.post('/tambah_sbu2_3_2/add', sistem.save_sbu2_3_2);
app.get('/edit_sbu2_3_2/edit/:id', sistem.edit_sbu2_3_2);
app.post('/edit_sbu2_3_2/edit/:id', sistem.save_edit_sbu2_3_2);
app.get('/edit_sbu2_3_2/delete/:id', sistem.delete_sbu2_3_2);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu2_3_3', sistem.sbu2_3_3);
app.get('/tambah_sbu2_3_3/add', sistem.tambah_sbu2_3_3);
app.post('/tambah_sbu2_3_3/add', sistem.save_sbu2_3_3);
app.get('/edit_sbu2_3_3/edit/:id', sistem.edit_sbu2_3_3);
app.post('/edit_sbu2_3_3/edit/:id', sistem.save_edit_sbu2_3_3);
app.get('/edit_sbu2_3_3/delete/:id', sistem.delete_sbu2_3_3);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu2_3_4', sistem.sbu2_3_4);
app.get('/tambah_sbu2_3_4/add', sistem.tambah_sbu2_3_4);
app.post('/tambah_sbu2_3_4/add', sistem.save_sbu2_3_4);
app.get('/edit_sbu2_3_4/edit/:id', sistem.edit_sbu2_3_4);
app.post('/edit_sbu2_3_4/edit/:id', sistem.save_edit_sbu2_3_4);
app.get('/edit_sbu2_3_4/delete/:id', sistem.delete_sbu2_3_4);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu2_3_5', sistem.sbu2_3_5);
app.get('/tambah_sbu2_3_5/add', sistem.tambah_sbu2_3_5);
app.post('/tambah_sbu2_3_5/add', sistem.save_sbu2_3_5);
app.get('/edit_sbu2_3_5/edit/:id', sistem.edit_sbu2_3_5);
app.post('/edit_sbu2_3_5/edit/:id', sistem.save_edit_sbu2_3_5);
app.get('/edit_sbu2_3_5/delete/:id', sistem.delete_sbu2_3_5);
/*==============================================================================*/


app.get('/kategoriA', sistem.kategoriA);
app.get('/kategoriB', sistem.kategoriB);
app.get('/kategoriC', sistem.kategoriC);
app.get('/kategoriD', sistem.kategoriD);
app.get('/kategoriE', sistem.kategoriE);
app.get('/kategoriF', sistem.kategoriF);
app.get('/kategoriG', sistem.kategoriG);
app.get('/kategoriH', sistem.kategoriH);
app.get('/kategoriI', sistem.kategoriI);

app.get('/perjalanan_dinas_dalam_negeri', sistem.perjalananDinas);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
