
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
app.get('/tambah_kebinamargaan_1_1', sistem.tambah_kebinamargaan_1_1);
app.get('/edit_kebinamargaan_1_1', sistem.edit_kebinamargaan_1_1);
/*=============================================================================*/

/*==========================Kebinamargaan Jalan Beton==========================*/
app.get('/kebinamargaan_1_2', sistem.kebinamargaan_1_2);
app.get('/sistem/delete/:id', sistem.delete_kebinamargaan_1_2);
app.get('/sistem/edit/:id', sistem.edit_kebinamargaan_1_2);
app.post('/sistem/edit/:id',sistem.save_edit_kebinamargaan_1_2);
app.get('/tambah_kebinamargaan_1_2', sistem.tambah_kebinamargaan_1_2);
/*==============================================================================*/

/*==========================Kebinamargaan Jalan Aspal==========================*/
app.get('/kebinamargaan_1_3', sistem.kebinamargaan_1_3);
app.get('/tambah_kebinamargaan_1_3', sistem.tambah_kebinamargaan_1_3);
app.get('/edit_kebinamargaan_1_3', sistem.edit_kebinamargaan_1_3);
/*=============================================================================*/

/*=============================Pemeliharaan Rutin==============================*/
app.get('/kebinamargaan_1_4', sistem.kebinamargaan_1_4);
app.get('/tambah_kebinamargaan_1_4', sistem.tambah_kebinamargaan_1_4);
app.get('/edit_kebinamargaan_1_4', sistem.edit_kebinamargaan_1_4);
/*=============================================================================*/

/*============================Pemeliharaan Rutin*==============================*/
app.get('/kebinamargaan_1_5', sistem.kebinamargaan_1_5);
app.get('/tambah_kebinamargaan_1_5', sistem.tambah_kebinamargaan_1_5);
app.get('/edit_kebinamargaan_1_5', sistem.edit_kebinamargaan_1_5);
/*=============================================================================*/

/*======================Pembangunan Jalan Baru Hotmix==========================*/
app.get('/kebinamargaan_1_6', sistem.kebinamargaan_1_6);
app.get('/tambah_kebinamargaan_1_6', sistem.tambah_kebinamargaan_1_6);
app.get('/edit_kebinamargaan_1_6', sistem.edit_kebinamargaan_1_6);
/*=============================================================================*/

/*======================Pembangunan Jalan Baru Beton==========================*/
app.get('/kebinamargaan_1_7', sistem.kebinamargaan_1_7);
app.get('/tambah_kebinamargaan_1_7', sistem.tambah_kebinamargaan_1_7);
app.get('/edit_kebinamargaan_1_7', sistem.edit_kebinamargaan_1_7);
/*=============================================================================*/

/*==========================Bahu di Perkeras Beton=============================*/
app.get('/kebinamargaan_1_8', sistem.kebinamargaan_1_8);
app.get('/tambah_kebinamargaan_1_8', sistem.tambah_kebinamargaan_1_8);
app.get('/edit_kebinamargaan_1_8', sistem.edit_kebinamargaan_1_8);
/*=============================================================================*/

/*==========================Peleberan Jalan Beton=============================*/
app.get('/kebinamargaan_1_9', sistem.kebinamargaan_1_9);
app.get('/tambah_kebinamargaan_1_9', sistem.tambah_kebinamargaan_1_9);
app.get('/edit_kebinamargaan_1_9', sistem.edit_kebinamargaan_1_9);
/*=============================================================================*/

/*==========================Peleberan Jalan Agregat============================*/
app.get('/kebinamargaan_1_10', sistem.kebinamargaan_1_10);
app.get('/tambah_kebinamargaan_1_10', sistem.tambah_kebinamargaan_1_10);
app.get('/edit_kebinamargaan_1_10', sistem.edit_kebinamargaan_1_10);
/*=============================================================================*/

/*=========================Rekonstruksi Jalan HOTMIX===========================*/
app.get('/kebinamargaan_1_11', sistem.kebinamargaan_1_11);
app.get('/tambah_kebinamargaan_1_11', sistem.tambah_kebinamargaan_1_11);
app.get('/edit_kebinamargaan_1_11', sistem.edit_kebinamargaan_1_11);
/*=============================================================================*/

/*=========================Dasar Penanganan Jembatan===========================*/
app.get('/kebinamargaan_1_12', sistem.kebinamargaan_1_12);
app.get('/tambah_kebinamargaan_1_12', sistem.tambah_kebinamargaan_1_12);
app.get('/edit_kebinamargaan_1_12', sistem.edit_kebinamargaan_1_12);
/*=============================================================================*/

/*===============Perencanaan dan Pengawasan Jalan Jembatan=====================*/
app.get('/kebinamargaan_1_13', sistem.kebinamargaan_1_13);
app.get('/tambah_kebinamargaan_1_13', sistem.tambah_kebinamargaan_1_13);
app.get('/edit_kebinamargaan_1_13', sistem.edit_kebinamargaan_1_13);
/*=============================================================================*/

/*==========================Sewa Alat/Kendaraan================================*/
app.get('/kebinamargaan_1_17', sistem.kebinamargaan_1_17);
app.get('/tambah_kebinamargaan_1_17', sistem.tambah_kebinamargaan_1_17);
app.get('/edit_kebinamargaan_1_17', sistem.edit_kebinamargaan_1_17);
/*=============================================================================*/

/*===========================Sumber Daya Air===================================*/
app.get('/sumber_daya_air', sistem.sumber_daya_air);
/*======================SDA Honorarium Tenaga Teknis Non PNS===================*/
app.get('/sda_2_1', sistem.sda_2_1);
app.get('/tambah_sda_2_1', sistem.tambah_sda_2_1);
app.get('/edit_sda_2_1', sistem.edit_sda_2_1);
/*+============================================================================*/

/*======Besaran Uang Saku Tenaga Teknis Non PNS Piket Banjir/Kekeringan========*/
app.get('/sda_2_2', sistem.sda_2_2);
app.get('/tambah_sda_2_2', sistem.tambah_sda_2_2);
app.get('/edit_sda_2_2', sistem.edit_sda_2_2);
/*==============================================================================*/

/*========Pengukuran dan Perencanaan Rehabilitasi Irigasi (Pedataran)===========*/
app.get('/sda_2_3', sistem.sda_2_3);
app.get('/tambah_sda_2_3', sistem.tambah_sda_2_3);
app.get('/edit_sda_2_3', sistem.edit_sda_2_3);
/*==============================================================================*/

/*========Pengukuran dan Perencanaan Rehabilitasi Irigasi (Pegunungan)==========*/
app.get('/sda_2_4', sistem.sda_2_4);
app.get('/tambah_sda_2_4', sistem.tambah_sda_2_4);
app.get('/edit_sda_2_4', sistem.edit_sda_2_4);
/*==============================================================================*/

/*=================Pengukuran dan Perencanaan Sungai/Drainase===================*/
app.get('/sda_2_5', sistem.sda_2_5);
app.get('/tambah_sda_2_5', sistem.tambah_sda_2_5);
app.get('/edit_sda_2_5', sistem.edit_sda_2_5);
/*==============================================================================*/

/*==========================Pengukuran dan Perencanaan Situ=====================*/
app.get('/sda_2_6', sistem.sda_2_6);
app.get('/tambah_sda_2_6', sistem.tambah_sda_2_6);
app.get('/edit_sda_2_6', sistem.edit_sda_2_6);
/*==============================================================================*/

/*====Pengukuran dan Perencanaan Pengamanan Pantai dan Perbaikan Muara Sungai===*/
app.get('/sda_2_7', sistem.sda_2_7);
app.get('/tambah_sda_2_7', sistem.tambah_sda_2_7);
app.get('/edit_sda_2_7', sistem.edit_sda_2_7);
/*==============================================================================*/

/*========Biaya Penyelidikan Lapangan & Pengujian Laboratorium Geoteknik========*/
app.get('/sda_2_8', sistem.sda_2_8);
app.get('/tambah_sda_2_8', sistem.tambah_sda_2_8);
app.get('/edit_sda_2_8', sistem.edit_sda_2_8);
/*==============================================================================*/

/*=======================Biaya Pengelolaan Jaringan Irigasi=====================*/
app.get('/sda_2_9', sistem.sda_2_9);
app.get('/tambah_sda_2_9', sistem.tambah_sda_2_9);
app.get('/edit_sda_2_9', sistem.edit_sda_2_9);
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
app.get('/tambah_cipta_3_1', sistem.tambah_cipta_3_1);
app.get('/edit_cipta_3_1', sistem.edit_cipta_3_1);
/*==============================================================================*/
/*===================Tenaga sub  Profesional jasa  konsultansi==================*/
app.get('/cipta_3_2', sistem.cipta_3_2);
app.get('/tambah_cipta_3_2', sistem.tambah_cipta_3_2);
app.get('/edit_cipta_3_2', sistem.edit_cipta_3_2);
/*==============================================================================*/  
/*=======================Tenaga pendukung jasa konsultansi======================*/
app.get('/cipta_3_3', sistem.cipta_3_3);
app.get('/tambah_cipta_3_3', sistem.tambah_cipta_3_3);
app.get('/edit_cipta_3_3', sistem.edit_cipta_3_3);
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
app.get('/tambah_cipta_3_10', sistem.tambah_cipta_3_10);
app.get('/edit_cipta_3_10', sistem.edit_cipta_3_10);
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
app.get('/tambah_cipta_3_15', sistem.tambah_cipta_3_15);
app.get('/edit_cipta_3_15', sistem.edit_cipta_3_15);
/*==============================================================================*/
/*======Sub Bidang Untuk Kegiatan Perumahan Kota (PLPK)/ Bidang Permukiman======*/
app.get('/cipta_3_16', sistem.cipta_3_16);
app.get('/tambah_cipta_3_16', sistem.tambah_cipta_3_16);
app.get('/edit_cipta_3_16', sistem.edit_cipta_3_16);
/*==============================================================================*/
/*===================Prosentase Komponen Pekerjaan Bangunan=====================*/
app.get('/cipta_3_17', sistem.cipta_3_17);
app.get('/tambah_cipta_3_17', sistem.tambah_cipta_3_17);
app.get('/edit_cipta_3_17', sistem.edit_cipta_3_17);
/*==============================================================================*/
/*================Prosentase Komponen Pekerjaan Rumah Negara====================*/
app.get('/cipta_3_18', sistem.cipta_3_18);
app.get('/tambah_cipta_3_18', sistem.tambah_cipta_3_18);
app.get('/edit_cipta_3_18', sistem.edit_cipta_3_18);
/*==============================================================================*/
/*=================================Perhubungan==================================*/
/*=============Standar Harga Satuan Kegiatan Pembangunan Prasarana==============*/
app.get('/perhubungan', sistem.perhubungan);
/*==============================Perhubungan Darat===============================*/
app.get('/hub_4_1IA', sistem.hub_4_1IA);
app.get('/tambah_hub_4_1IA', sistem.tambah_hub_4_1IA);
app.get('/edit_hub_4_1IA', sistem.edit_hub_4_1IA);

app.get('/hub_4_1IB', sistem.hub_4_1IB);
app.get('/tambah_hub_4_1IB', sistem.tambah_hub_4_1IB);
app.get('/edit_hub_4_1IB', sistem.edit_hub_4_1IB);

app.get('/hub_4_1IC', sistem.hub_4_1IC);
app.get('/tambah_hub_4_1IC', sistem.tambah_hub_4_1IC);
app.get('/edit_hub_4_1IC', sistem.edit_hub_4_1IC);
/*==============================================================================*/
/*==============================Perhubungan Laut================================*/
app.get('/hub_4_1IIA', sistem.hub_4_1IIA);
app.get('/tambah_hub_4_1IIA', sistem.tambah_hub_4_1IIA);
app.get('/edit_hub_4_1IIA', sistem.edit_hub_4_1IIA);

app.get('/hub_4_1IIB', sistem.hub_4_1IIB);
app.get('/tambah_hub_4_1IIB', sistem.tambah_hub_4_1IIB);
app.get('/edit_hub_4_1IIB', sistem.edit_hub_4_1IIB);
/*==============================================================================*/
/*==============================Perhubungan Udara===============================*/
app.get('/hub_4_1IIIA', sistem.hub_4_1IIIA);
app.get('/tambah_hub_4_1IIIA', sistem.tambah_hub_4_1IIIA);
app.get('/edit_hub_4_1IIIA', sistem.edit_hub_4_1IIIA);
/*==============================================================================*/

/*===============================Lingkungan Hidup===============================*/
app.get('/lingkungan_hidup', sistem.lingkungan_hidup);
/*==================Pengujian Parameter Kualitas Lingkungan=====================*/
app.get('/lh_5_1a', sistem.lh_5_1a);
app.get('/tambah_lh_5_1a', sistem.tambah_lh_5_1a);
app.get('/edit_lh_5_1a', sistem.edit_lh_5_1a);

app.get('/lh_5_1b', sistem.lh_5_1b);
app.get('/tambah_lh_5_1b', sistem.tambah_lh_5_1b);
app.get('/edit_lh_5_1b', sistem.edit_lh_5_1b);

app.get('/lh_5_1c', sistem.lh_5_1c);
app.get('/tambah_lh_5_1c', sistem.tambah_lh_5_1c);
app.get('/edit_lh_5_1c', sistem.edit_lh_5_1c);

app.get('/lh_5_1d', sistem.lh_5_1d);
app.get('/tambah_lh_5_1d', sistem.tambah_lh_5_1d);
app.get('/edit_lh_5_1d', sistem.edit_lh_5_1d);

app.get('/lh_5_1e', sistem.lh_5_1e);
app.get('/tambah_lh_5_1e', sistem.tambah_lh_5_1e);
app.get('/edit_lh_5_1e', sistem.edit_lh_5_1e);

app.get('/lh_5_1f', sistem.lh_5_1f);
app.get('/tambah_lh_5_1f', sistem.tambah_lh_5_1f);
app.get('/edit_lh_5_1f', sistem.edit_lh_5_1f);

app.get('/lh_5_1g', sistem.lh_5_1g);
app.get('/tambah_lh_5_1g', sistem.tambah_lh_5_1g);
app.get('/edit_lh_5_1g', sistem.edit_lh_5_1g);
/*==============================================================================*/
/*==============Pengambilan Contoh Parameter Kualitas Lingkungan================*/
app.get('/lh_5_2', sistem.lh_5_2);
app.get('/tambah_lh_5_2', sistem.tambah_lh_5_2);
app.get('/edit_lh_5_2', sistem.edit_lh_5_2);
/*==============================================================================*/
/*===================================Honorarium=================================*/
app.get('/lh_5_3', sistem.lh_5_3);
app.get('/tambah_lh_5_3', sistem.tambah_lh_5_3);
app.get('/edit_lh_5_3', sistem.edit_lh_5_3);
/*==============================================================================*/

/*=================================Kearsipan====================================*/
app.get('/kearsipan', sistem.kearsipan);
/*======================Standar Biaya Satuan Pembenahan Arsip===================*/
app.get('/arsip_6_1', sistem.arsip_6_1);
app.get('/tambah_arsip_6_1', sistem.tambah_arsip_6_1);
app.get('/edit_arsip_6_1', sistem.edit_arsip_6_1);
/*==============================================================================*/
/*================Standar Biaya Pemeliharaan dan Perawatan Arsip================*/
app.get('/arsip_6_2', sistem.arsip_6_2);
app.get('/tambah_arsip_6_2', sistem.tambah_arsip_6_2);
app.get('/edit_arsip_6_2', sistem.edit_arsip_6_2);
/*==============================================================================*/
/*====================Satuan Biaya Reproduksi dan Transkripsi===================*/
app.get('/arsip_6_3', sistem.arsip_6_3);
app.get('/tambah_arsip_6_3', sistem.tambah_arsip_6_3);
app.get('/edit_arsip_6_3', sistem.edit_arsip_6_3);
/*==============================================================================*/
/*=========================Satuan Biaya Pembersihan Arsip=======================*/
app.get('/arsip_6_4', sistem.arsip_6_4);
app.get('/tambah_arsip_6_4', sistem.tambah_arsip_6_4);
app.get('/edit_arsip_6_4', sistem.edit_arsip_6_4);
/*==============================================================================*/
/*======================Satuan Biaya Jasa Penerjemahan Arsip====================*/
app.get('/arsip_6_5', sistem.arsip_6_5);
app.get('/tambah_arsip_6_5', sistem.tambah_arsip_6_5);
app.get('/edit_arsip_6_5', sistem.edit_arsip_6_5);
/*==============================================================================*/

/*================================Perpustakaan==================================*/
app.get('/perpustakaan', sistem.perpustakaan);
/*=================================Honorarium===================================*/
app.get('/perpus_7_1', sistem.perpus_7_1);
app.get('/tambah_perpus_7_1', sistem.tambah_perpus_7_1);
app.get('/edit_perpus_7_1', sistem.edit_perpus_7_1);
/*==============================================================================*/
/*========================Standar biaya jasa perpustakaan=======================*/
app.get('/perpus_7_2', sistem.perpus_7_2);
app.get('/tambah_perpus_7_2', sistem.tambah_perpus_7_2);
app.get('/edit_perpus_7_2', sistem.edit_perpus_7_2);
/*==============================================================================*/

/*=================================Perkebunan===================================*/
app.get('/perkebunan', sistem.perkebunan);
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_1', sistem.kebun_8_1);
app.get('/tambah_kebun_8_1', sistem.tambah_kebun_8_1);
app.get('/edit_kebun_8_1', sistem.edit_kebun_8_1);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_2', sistem.kebun_8_2);
app.get('/tambah_kebun_8_2', sistem.tambah_kebun_8_2);
app.get('/edit_kebun_8_2', sistem.edit_kebun_8_2);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_3', sistem.kebun_8_3);
app.get('/tambah_kebun_8_3', sistem.tambah_kebun_8_3);
app.get('/edit_kebun_8_3', sistem.edit_kebun_8_3);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_4', sistem.kebun_8_4);
app.get('/tambah_kebun_8_4', sistem.tambah_kebun_8_4);
app.get('/edit_kebun_8_4', sistem.edit_kebun_8_4);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_5', sistem.kebun_8_5);
app.get('/tambah_kebun_8_5', sistem.tambah_kebun_8_5);
app.get('/edit_kebun_8_5', sistem.edit_kebun_8_5);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_6', sistem.kebun_8_6);
app.get('/tambah_kebun_8_6', sistem.tambah_kebun_8_6);
app.get('/edit_kebun_8_6', sistem.edit_kebun_8_6);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_7', sistem.kebun_8_7);
app.get('/tambah_kebun_8_7', sistem.tambah_kebun_8_7);
app.get('/edit_kebun_8_7', sistem.edit_kebun_8_7);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_8', sistem.kebun_8_8);
app.get('/tambah_kebun_8_8', sistem.tambah_kebun_8_8);
app.get('/edit_kebun_8_8', sistem.edit_kebun_8_8);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_9', sistem.kebun_8_9);
app.get('/tambah_kebun_8_9', sistem.tambah_kebun_8_9);
app.get('/edit_kebun_8_9', sistem.edit_kebun_8_9);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_10', sistem.kebun_8_10);
app.get('/tambah_kebun_8_10', sistem.tambah_kebun_8_10);
app.get('/edit_kebun_8_10', sistem.edit_kebun_8_10);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_11', sistem.kebun_8_11);
app.get('/tambah_kebun_8_11', sistem.tambah_kebun_8_11);
app.get('/edit_kebun_8_11', sistem.edit_kebun_8_11);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_12', sistem.kebun_8_12);
app.get('/tambah_kebun_8_12', sistem.tambah_kebun_8_12);
app.get('/edit_kebun_8_12', sistem.edit_kebun_8_12);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_13', sistem.kebun_8_13);
app.get('/tambah_kebun_8_13', sistem.tambah_kebun_8_13);
app.get('/edit_kebun_8_13', sistem.edit_kebun_8_13);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_14', sistem.kebun_8_14);
app.get('/tambah_kebun_8_14', sistem.tambah_kebun_8_14);
app.get('/edit_kebun_8_14', sistem.edit_kebun_8_14);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_15', sistem.kebun_8_15);
app.get('/tambah_kebun_8_15', sistem.tambah_kebun_8_15);
app.get('/edit_kebun_8_15', sistem.edit_kebun_8_15);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_16', sistem.kebun_8_16);
app.get('/tambah_kebun_8_16', sistem.tambah_kebun_8_16);
app.get('/edit_kebun_8_16', sistem.edit_kebun_8_16);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_17', sistem.kebun_8_17);
app.get('/tambah_kebun_8_17', sistem.tambah_kebun_8_17);
app.get('/edit_kebun_8_17', sistem.edit_kebun_8_17);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_18', sistem.kebun_8_18);
app.get('/tambah_kebun_8_18', sistem.tambah_kebun_8_18);
app.get('/edit_kebun_8_18', sistem.edit_kebun_8_18);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_19', sistem.kebun_8_19);
app.get('/tambah_kebun_8_19', sistem.tambah_kebun_8_19);
app.get('/edit_kebun_8_19', sistem.edit_kebun_8_19);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_20', sistem.kebun_8_20);
app.get('/tambah_kebun_8_20', sistem.tambah_kebun_8_20);
app.get('/edit_kebun_8_20', sistem.edit_kebun_8_20);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_21', sistem.kebun_8_21);
app.get('/tambah_kebun_8_21', sistem.tambah_kebun_8_21);
app.get('/edit_kebun_8_21', sistem.edit_kebun_8_21);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_22', sistem.kebun_8_22);
app.get('/tambah_kebun_8_22', sistem.tambah_kebun_8_22);
app.get('/edit_kebun_8_22', sistem.edit_kebun_8_22);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_23', sistem.kebun_8_23);
app.get('/tambah_kebun_8_23', sistem.tambah_kebun_8_23);
app.get('/edit_kebun_8_23', sistem.edit_kebun_8_23);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_24', sistem.kebun_8_24);
app.get('/tambah_kebun_8_24', sistem.tambah_kebun_8_24);
app.get('/edit_kebun_8_24', sistem.edit_kebun_8_24);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_25', sistem.kebun_8_25);
app.get('/tambah_kebun_8_25', sistem.tambah_kebun_8_25);
app.get('/edit_kebun_8_25', sistem.edit_kebun_8_25);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_26', sistem.kebun_8_26);
app.get('/tambah_kebun_8_26', sistem.tambah_kebun_8_26);
app.get('/edit_kebun_8_26', sistem.edit_kebun_8_26);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_27', sistem.kebun_8_27);
app.get('/tambah_kebun_8_27', sistem.tambah_kebun_8_27);
app.get('/edit_kebun_8_27', sistem.edit_kebun_8_27);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_28', sistem.kebun_8_28);
app.get('/tambah_kebun_8_28', sistem.tambah_kebun_8_28);
app.get('/edit_kebun_8_28', sistem.edit_kebun_8_28);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_29', sistem.kebun_8_29);
app.get('/tambah_kebun_8_29', sistem.tambah_kebun_8_29);
app.get('/edit_kebun_8_29', sistem.edit_kebun_8_29);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_30', sistem.kebun_8_30);
app.get('/tambah_kebun_8_30', sistem.tambah_kebun_8_30);
app.get('/edit_kebun_8_30', sistem.edit_kebun_8_30);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_31', sistem.kebun_8_31);
app.get('/tambah_kebun_8_31', sistem.tambah_kebun_8_31);
app.get('/edit_kebun_8_31', sistem.edit_kebun_8_31);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_32', sistem.kebun_8_32);
app.get('/tambah_kebun_8_32', sistem.tambah_kebun_8_32);
app.get('/edit_kebun_8_32', sistem.edit_kebun_8_32);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_33', sistem.kebun_8_3);
app.get('/tambah_kebun_8_33', sistem.tambah_kebun_8_33);
app.get('/edit_kebun_8_33', sistem.edit_kebun_8_33);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_34', sistem.kebun_8_34);
app.get('/tambah_kebun_8_34', sistem.tambah_kebun_8_34);
app.get('/edit_kebun_8_34', sistem.edit_kebun_8_34);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_35', sistem.kebun_8_35);
app.get('/tambah_kebun_8_35', sistem.tambah_kebun_8_35);
app.get('/edit_kebun_8_35', sistem.edit_kebun_8_35);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_36', sistem.kebun_8_36);
app.get('/tambah_kebun_8_36', sistem.tambah_kebun_8_36);
app.get('/edit_kebun_8_36', sistem.edit_kebun_8_36);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_37', sistem.kebun_8_37);
app.get('/tambah_kebun_8_37', sistem.tambah_kebun_8_37);
app.get('/edit_kebun_8_37', sistem.edit_kebun_8_37);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_38', sistem.kebun_8_38);
app.get('/tambah_kebun_8_38', sistem.tambah_kebun_8_38);
app.get('/edit_kebun_8_38', sistem.edit_kebun_8_38);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_39', sistem.kebun_8_39);
app.get('/tambah_kebun_8_39', sistem.tambah_kebun_8_39);
app.get('/edit_kebun_8_39', sistem.edit_kebun_8_39);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_40', sistem.kebun_8_40);
app.get('/tambah_kebun_8_40', sistem.tambah_kebun_8_40);
app.get('/edit_kebun_8_40', sistem.edit_kebun_8_40);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_41', sistem.kebun_8_41);
app.get('/tambah_kebun_8_41', sistem.tambah_kebun_8_41);
app.get('/edit_kebun_8_41', sistem.edit_kebun_8_41);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_42', sistem.kebun_8_42);
app.get('/tambah_kebun_8_42', sistem.tambah_kebun_8_42);
app.get('/edit_kebun_8_42', sistem.edit_kebun_8_42);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_43', sistem.kebun_8_43);
app.get('/tambah_kebun_8_43', sistem.tambah_kebun_8_43);
app.get('/edit_kebun_8_43', sistem.edit_kebun_8_43);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_44', sistem.kebun_8_44);
app.get('/tambah_kebun_8_44', sistem.tambah_kebun_8_44);
app.get('/edit_kebun_8_44', sistem.edit_kebun_8_44);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_45', sistem.kebun_8_45);
app.get('/tambah_kebun_8_45', sistem.tambah_kebun_8_45);
app.get('/edit_kebun_8_45', sistem.edit_kebun_8_45);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_46', sistem.kebun_8_46);
app.get('/tambah_kebun_8_46', sistem.tambah_kebun_8_46);
app.get('/edit_kebun_8_46', sistem.edit_kebun_8_46);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_47', sistem.kebun_8_47);
app.get('/tambah_kebun_8_47', sistem.tambah_kebun_8_47);
app.get('/edit_kebun_8_47', sistem.edit_kebun_8_47);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_48', sistem.kebun_8_48);
app.get('/tambah_kebun_8_48', sistem.tambah_kebun_8_48);
app.get('/edit_kebun_8_48', sistem.edit_kebun_8_48);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_49', sistem.kebun_8_49);
app.get('/tambah_kebun_8_49', sistem.tambah_kebun_8_49);
app.get('/edit_kebun_8_49', sistem.edit_kebun_8_49);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_50', sistem.kebun_8_50);
app.get('/tambah_kebun_8_50', sistem.tambah_kebun_8_50);
app.get('/edit_kebun_8_50', sistem.edit_kebun_8_50);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_51', sistem.kebun_8_51);
app.get('/tambah_kebun_8_51', sistem.tambah_kebun_8_51);
app.get('/edit_kebun_8_51', sistem.edit_kebun_8_51);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_52', sistem.kebun_8_52);
app.get('/tambah_kebun_8_52', sistem.tambah_kebun_8_52);
app.get('/edit_kebun_8_52', sistem.edit_kebun_8_52);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_53', sistem.kebun_8_53);
app.get('/tambah_kebun_8_53', sistem.tambah_kebun_8_53);
app.get('/edit_kebun_8_53', sistem.edit_kebun_8_53);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_54', sistem.kebun_8_54);
app.get('/tambah_kebun_8_54', sistem.tambah_kebun_8_54);
app.get('/edit_kebun_8_54', sistem.edit_kebun_8_54);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_55', sistem.kebun_8_55);
app.get('/tambah_kebun_8_55', sistem.tambah_kebun_8_55);
app.get('/edit_kebun_8_55', sistem.edit_kebun_8_55);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_56', sistem.kebun_8_56);
app.get('/tambah_kebun_8_56', sistem.tambah_kebun_8_56);
app.get('/edit_kebun_8_56', sistem.edit_kebun_8_56);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_57', sistem.kebun_8_57);
app.get('/tambah_kebun_8_57', sistem.tambah_kebun_8_57);
app.get('/edit_kebun_8_57', sistem.edit_kebun_8_57);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_58', sistem.kebun_8_58);
app.get('/tambah_kebun_8_58', sistem.tambah_kebun_8_58);
app.get('/edit_kebun_8_58', sistem.edit_kebun_8_58);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_59', sistem.kebun_8_59);
app.get('/tambah_kebun_8_59', sistem.tambah_kebun_8_59);
app.get('/edit_kebun_8_59', sistem.edit_kebun_8_59);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_60', sistem.kebun_8_60);
app.get('/tambah_kebun_8_60', sistem.tambah_kebun_8_60);
app.get('/edit_kebun_8_60', sistem.edit_kebun_8_60);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_61', sistem.kebun_8_61);
app.get('/tambah_kebun_8_61', sistem.tambah_kebun_8_61);
app.get('/edit_kebun_8_61', sistem.edit_kebun_8_61);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_62', sistem.kebun_8_62);
app.get('/tambah_kebun_8_62', sistem.tambah_kebun_8_62);
app.get('/edit_kebun_8_62', sistem.edit_kebun_8_62);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_63', sistem.kebun_8_63);
app.get('/tambah_kebun_8_63', sistem.tambah_kebun_8_63);
app.get('/edit_kebun_8_63', sistem.edit_kebun_8_63);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_64', sistem.kebun_8_64);
app.get('/tambah_kebun_8_64', sistem.tambah_kebun_8_64);
app.get('/edit_kebun_8_64', sistem.edit_kebun_8_64);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_65', sistem.kebun_8_65);
app.get('/tambah_kebun_8_65', sistem.tambah_kebun_8_65);
app.get('/edit_kebun_8_65', sistem.edit_kebun_8_65);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_66', sistem.kebun_8_66);
app.get('/tambah_kebun_8_66', sistem.tambah_kebun_8_66);
app.get('/edit_kebun_8_66', sistem.edit_kebun_8_66);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_67', sistem.kebun_8_67);
app.get('/tambah_kebun_8_67', sistem.tambah_kebun_8_67);
app.get('/edit_kebun_8_67', sistem.edit_kebun_8_67);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_68', sistem.kebun_8_68);
app.get('/tambah_kebun_8_68', sistem.tambah_kebun_8_68);
app.get('/edit_kebun_8_68', sistem.edit_kebun_8_68);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_69', sistem.kebun_8_69);
app.get('/tambah_kebun_8_69', sistem.tambah_kebun_8_69);
app.get('/edit_kebun_8_69', sistem.edit_kebun_8_69);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_70', sistem.kebun_8_70);
app.get('/tambah_kebun_8_70', sistem.tambah_kebun_8_70);
app.get('/edit_kebun_8_70', sistem.edit_kebun_8_70);
/*==============================================================================*/
/*==============================Rehab Teh Tahun 1===============================*/
app.get('/kebun_8_71', sistem.kebun_8_71);
app.get('/tambah_kebun_8_71', sistem.tambah_kebun_8_71);
app.get('/edit_kebun_8_71', sistem.edit_kebun_8_71);
/*==============================================================================*/

/*=========================Kebudayaan dan Pariwisata============================*/
app.get('/pariwisata', sistem.pariwisata);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/budpar_9_1', sistem.budpar_9_1);
app.get('/tambah_budpar_9_1', sistem.tambah_budpar_9_1);
app.get('/edit_budpar_9_1', sistem.edit_budpar_9_1);
/*==============================================================================*/

/*=========================Industri dan Perdagangan=============================*/
app.get('/indag', sistem.indag);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_1a', sistem.indag_10_1a);
app.get('/tambah_indag_10_1a', sistem.tambah_indag_10_1a);
app.get('/edit_indag_10_1a', sistem.edit_indag_10_1a);

app.get('/indag_10_1b', sistem.indag_10_1b);
app.get('/tambah_indag_10_1b', sistem.tambah_indag_10_1b);
app.get('/edit_indag_10_1b', sistem.edit_indag_10_1b);

app.get('/indag_10_1c', sistem.indag_10_1c);
app.get('/tambah_indag_10_1c', sistem.tambah_indag_10_1c);
app.get('/edit_indag_10_1c', sistem.edit_indag_10_1c);

app.get('/indag_10_1d', sistem.indag_10_1d);
app.get('/tambah_indag_10_1d', sistem.tambah_indag_10_1d);
app.get('/edit_indag_10_1d', sistem.edit_indag_10_1d);

app.get('/indag_10_1e', sistem.indag_10_1e);
app.get('/tambah_indag_10_1e', sistem.tambah_indag_10_1e);
app.get('/edit_indag_10_1e', sistem.edit_indag_10_1e);

app.get('/indag_10_1f', sistem.indag_10_1f);
app.get('/tambah_indag_10_1f', sistem.tambah_indag_10_1f);
app.get('/edit_indag_10_1f', sistem.edit_indag_10_1f);

app.get('/indag_10_1g', sistem.indag_10_1g);
app.get('/tambah_indag_10_1g', sistem.tambah_indag_10_1g);
app.get('/edit_indag_10_1g', sistem.edit_indag_10_1g);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_2a', sistem.indag_10_2a);
app.get('/tambah_indag_10_2a', sistem.tambah_indag_10_2a);
app.get('/edit_indag_10_2a', sistem.edit_indag_10_2a);

app.get('/indag_10_2b', sistem.indag_10_2b);
app.get('/tambah_indag_10_2b', sistem.tambah_indag_10_2b);
app.get('/edit_indag_10_2b', sistem.edit_indag_10_2b);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_3', sistem.indag_10_3);
app.get('/tambah_indag_10_3', sistem.tambah_indag_10_3);
app.get('/edit_indag_10_3', sistem.edit_indag_10_3);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_4', sistem.indag_10_4);
app.get('/tambah_indag_10_4', sistem.tambah_indag_10_4);
app.get('/edit_indag_10_4', sistem.edit_indag_10_4);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_5', sistem.indag_10_5);
app.get('/tambah_indag_10_5', sistem.tambah_indag_10_5);
app.get('/edit_indag_10_5', sistem.edit_indag_10_5);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_6', sistem.indag_10_6);
app.get('/tambah_indag_10_6', sistem.tambah_indag_10_6);
app.get('/edit_indag_10_6', sistem.edit_indag_10_6);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/indag_10_7', sistem.indag_10_7);
app.get('/tambah_indag_10_7', sistem.tambah_indag_10_7);
app.get('/edit_indag_10_7', sistem.edit_indag_10_7);
/*==============================================================================*/

/*==========================Promosi dan Penanaman Modal=========================*/
app.get('/promod', sistem.promod);
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/promod_11_1a', sistem.promod_11_1a);
app.get('/tambah_promod_11_1a', sistem.tambah_promod_11_1a);
app.get('/edit_promod_11_1a', sistem.edit_promod_11_1a);
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
app.get('/tambah_sbu1_2_37', sistem.tambah_sbu1_2_37);
app.get('/edit_sbu1_2_37', sistem.edit_sbu1_2_37);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_38', sistem.sbu1_2_38);
app.get('/tambah_sbu1_2_38', sistem.tambah_sbu1_2_38);
app.get('/edit_sbu1_2_38', sistem.edit_sbu1_2_38);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_39', sistem.sbu1_2_39);
app.get('/tambah_sbu1_2_39', sistem.tambah_sbu1_2_39);
app.get('/edit_sbu1_2_39', sistem.edit_sbu1_2_39);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_40', sistem.sbu1_2_40);
app.get('/tambah_sbu1_2_40', sistem.tambah_sbu1_2_40);
app.get('/edit_sbu1_2_40', sistem.edit_sbu1_2_40);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_41', sistem.sbu1_2_41);
app.get('/tambah_sbu1_2_41', sistem.tambah_sbu1_2_41);
app.get('/edit_sbu1_2_41', sistem.edit_sbu1_2_41);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_42', sistem.sbu1_2_42);
app.get('/tambah_sbu1_2_42', sistem.tambah_sbu1_2_42);
app.get('/edit_sbu1_2_42', sistem.edit_sbu1_2_42);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_43', sistem.sbu1_2_43);
app.get('/tambah_sbu1_2_43', sistem.tambah_sbu1_2_43);
app.get('/edit_sbu1_2_43', sistem.edit_sbu1_2_43);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_44', sistem.sbu1_2_44);
app.get('/tambah_sbu1_2_44', sistem.tambah_sbu1_2_44);
app.get('/edit_sbu1_2_44', sistem.edit_sbu1_2_44);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_45', sistem.sbu1_2_45);
app.get('/tambah_sbu1_2_45', sistem.tambah_sbu1_2_45);
app.get('/edit_sbu1_2_45', sistem.edit_sbu1_2_45);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_46', sistem.sbu1_2_46);
app.get('/tambah_sbu1_2_46', sistem.tambah_sbu1_2_46);
app.get('/edit_sbu1_2_46', sistem.edit_sbu1_2_46);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_47', sistem.sbu1_2_47);
app.get('/tambah_sbu1_2_47', sistem.tambah_sbu1_2_47);
app.get('/edit_sbu1_2_47', sistem.edit_sbu1_2_47);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_48', sistem.sbu1_2_48);
app.get('/tambah_sbu1_2_48', sistem.tambah_sbu1_2_48);
app.get('/edit_sbu1_2_48', sistem.edit_sbu1_2_48);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_49', sistem.sbu1_2_49);
app.get('/tambah_sbu1_2_49', sistem.tambah_sbu1_2_49);
app.get('/edit_sbu1_2_49', sistem.edit_sbu1_2_49);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_50', sistem.sbu1_2_50);
app.get('/tambah_sbu1_2_50', sistem.tambah_sbu1_2_50);
app.get('/edit_sbu1_2_50', sistem.edit_sbu1_2_50);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu1_2_51', sistem.sbu1_2_51);
app.get('/tambah_sbu1_2_51', sistem.tambah_sbu1_2_51);
app.get('/edit_sbu1_2_41', sistem.edit_sbu1_2_51);
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
app.get('/tambah_sbu2_3_1', sistem.tambah_sbu2_3_1);
app.get('/edit_sbu2_3_1', sistem.edit_sbu2_3_1);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu2_3_2', sistem.sbu2_3_2);
app.get('/tambah_sbu2_3_2', sistem.tambah_sbu2_3_2);
app.get('/edit_sbu2_3_2', sistem.edit_sbu2_3_2);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu2_3_3', sistem.sbu2_3_3);
app.get('/tambah_sbu2_3_3', sistem.tambah_sbu2_3_3);
app.get('/edit_sbu2_3_3', sistem.edit_sbu2_3_3);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu2_3_4', sistem.sbu2_3_4);
app.get('/tambah_sbu2_3_4', sistem.tambah_sbu2_3_4);
app.get('/edit_sbu2_3_4', sistem.edit_sbu2_3_4);
/*==============================================================================*/
/*========================Standar Biaya Tenaga Khusus===========================*/
app.get('/sbu2_3_5', sistem.sbu2_3_5);
app.get('/tambah_sbu2_3_5', sistem.tambah_sbu2_3_5);
app.get('/edit_sbu2_3_5', sistem.edit_sbu2_3_5);
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
