-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2018 at 03:32 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectkp`
--

-- --------------------------------------------------------

--
-- Table structure for table `bidang`
--

CREATE TABLE `bidang` (
  `id` int(11) NOT NULL,
  `bidang` varchar(100) NOT NULL,
  `st_biaya_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bidang`
--

INSERT INTO `bidang` (`id`, `bidang`, `st_biaya_id`) VALUES
(1, 'Pengadaan Barang Dan Jasa', 1),
(2, 'PEMILIHAN MITRA PEMANFAATAN BARANG MILIK DAERAH', 1),
(3, 'PENGADAAN TANAH BAGI PEMBANGUNAN UNTUK KEPENTINGAN \r\n \r\nUMUM. ', 1),
(4, 'SATUAN BIAYA MAKANAN DAN MINUMAN LEMBUR', 1),
(5, 'JASA NARASUMBER, MODERATOR, PEMBAWA ACARA, ROHANIWAN, \r\nDAN PEMBACA DO’A. ', 1),
(6, 'HONORARIUM KEGIATAN UNTUK PNS NON PEMERINTAH PROVINSI\r\nJAWA BARAT DAN NON PNS.  ', 1),
(7, 'HONORARIUM KEGIATAN UNTUK PNS NON PEMERINTAH PROVINSI\r\nJAWA BARAT DAN NON PNS', 1),
(8, 'HONORARIUM  TENAGA TEKNIS NON PNS', 1),
(9, 'UPAH HARIAN KEGIATAN NON PNS', 1),
(10, 'HONORARIUM HARIAN/KEGIATAN/PERTEMUAN  NON PNS', 1),
(11, 'HONORARIUM SATPAM, PENGEMUDI, PETUGAS KEBERSIHAN,PRAMUBAKTI,  DAN FRONT OFFICE', 1),
(12, 'HONORARIUM JASA PENGAWALAN GUBERNUR/WAKIL\r\nGUBERNUR/KETUA DPRD', 1),
(13, 'SATUAN BIAYA UANG SAKU RAPAT DAN BANTUAN BIAYA TRANSPORTASI', 1),
(14, 'SATUAN BIAYA KONSUMSI RAPAT', 1),
(15, 'SATUAN BIAYA RAPAT/PERTEMUAN DI LUAR KANTOR', 1),
(16, 'SATUAN BIAYA SEWA KENDARAAN ', 1),
(17, 'SATUAN BIAYA BAHAN BAKAR, BIAYA PELUMASAN DAN BIAYA  \r\nPEMBAYARAN PAJAK KENDARAAN  BERMOTOR DINAS', 1),
(18, 'BIAYA PENGAMANAN DAN RUANG TUNGGU DALAM RANGKA KEGIATAN PIMPINAN', 1),
(19, 'PERJALANAN DINAS', 1);

-- --------------------------------------------------------

--
-- Table structure for table `deatil1a`
--

CREATE TABLE `deatil1a` (
  `id` int(11) NOT NULL,
  `nama1` varchar(2000) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nilai` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `detail1_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deatil1a`
--

INSERT INTO `deatil1a` (`id`, `nama1`, `nama2`, `nilai`, `keterangan`, `detail1_id`) VALUES
(1, 'A. Ganti Kerugian Tanah s.d Rp. 10 miliar \r\n(1). Ketua merangkap anggota\r\n(2). Sekretaris merangkap anggota\r\n(3). Anggota\r\n(4). Sekretariat', 'OB/Paket', 1600000, 'TIM PERSIAPAN PENGADAAN TANAH TANAH/PELAKSANA PENGADAAN TANAH ', 1),
(2, 'A. Ganti Kerugian Tanah di atas Rp. 10miliar s.d Rp. 50 Miliar (1). Ketua merangkap anggota(2). Sekretaris merangkap anggota(3). Anggota(4). Sekretariat', 'OB/Paket', 2400000, 'TIM PERSIAPAN PENGADAAN TANAH  TANAH/PELAKSANA PENGADAAN TANAH', 1),
(3, 'TIM KAJIAN (1). Ketua merangkap anggota  (2). Sekretaris merangkap anggota (3). Anggota ', 'Orang/Paket (Rp)', 9000000, 'Tidak Apa Apa Kalau Tidak Masuk Juga ', 1);

-- --------------------------------------------------------

--
-- Table structure for table `deatil1ba`
--

CREATE TABLE `deatil1ba` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nilai` bigint(20) NOT NULL,
  `detail1b_id` int(11) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail1`
--

CREATE TABLE `detail1` (
  `id` int(11) NOT NULL,
  `kategori` varchar(100) NOT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail1`
--

INSERT INTO `detail1` (`id`, `kategori`, `kategori_id`) VALUES
(1, 'SBU Batas Tertinggi (Table 2.13)', 13);

-- --------------------------------------------------------

--
-- Table structure for table `detail1b`
--

CREATE TABLE `detail1b` (
  `id` int(11) NOT NULL,
  `kategori` varchar(100) NOT NULL,
  `detail1_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail1c`
--

CREATE TABLE `detail1c` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nama3` varchar(100) DEFAULT NULL,
  `nilai` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `detail1_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail1d`
--

CREATE TABLE `detail1d` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `nilai` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `detail1_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail1e`
--

CREATE TABLE `detail1e` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nilai1` int(11) NOT NULL,
  `nilai2` int(11) NOT NULL,
  `nilai3` int(11) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `detail1_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail2`
--

CREATE TABLE `detail2` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nilai` int(11) NOT NULL,
  `kategori_id` int(11) NOT NULL,
  `keterangan` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail2`
--

INSERT INTO `detail2` (`id`, `nama1`, `nama2`, `nilai`, `kategori_id`, `keterangan`) VALUES
(1, '50 s/d 500 juta ', 'Orang/Paket (Rp)  ', 500000, 2, 'Honorarium Pejabat Pemesan dengan cara E Purchasing'),
(2, 'Di atas 100 s/d 200 juta', 'Orang/Paket (Rp)  ', 800000, 2, 'Honorarium Pejabat Pemesan dengan cara E Purchasing'),
(3, 'Di atas 200 s/d 400 juta', 'Orang/Paket (Rp)  ', 1100000, 2, 'Honorarium Pejabat Pemesan dengan cara E Purchasing'),
(4, 'Di atas 400 juta s/d 1 Milyar ', 'Orang/Paket (Rp)  ', 1400000, 2, 'Honorarium Pejabat Pemesan dengan cara E Purchasing'),
(5, 'Di atas 1 Milyar s/d 3 Milyar', 'Orang/Paket (Rp)  ', 1700000, 2, 'Honorarium Pejabat Pemesan dengan cara E Purchasing'),
(7, 'Di atas  200 s/d 400 juta', 'Nilai (Rp)/Bulan', 1000, 3, ' Dihitung berdasarkan waktu pelaksanaan pekerjaan konstruksi'),
(8, 'Di atas 400 juta s/d 1 Milyar ', 'Nilai (Rp)/Bulan', 1500, 3, ' Dihitung berdasarkan waktu pelaksanaan pekerjaan konstruksi'),
(9, 'Di atas 1 Milyar s/d 3 Milyar ', 'Nilai (Rp)/Bulan', 2000, 3, ' Dihitung berdasarkan waktu pelaksanaan pekerjaan konstruksi'),
(10, 'Di atas 3 Milyar s/d 5 Milyar ', 'Nilai (Rp)/Bulan', 2500, 3, ' Dihitung berdasarkan waktu pelaksanaan pekerjaan konstruksi'),
(11, 'Di atas 5 Milyar s/d 10 Milyar ', 'Nilai (Rp)/Bulan', 3000, 3, ' Dihitung berdasarkan waktu pelaksanaan pekerjaan konstruksi'),
(12, 'Di atas 10 Milyar s/d 20 Milyar ', 'Nilai (Rp)/Bulan', 4000, 3, ' Dihitung berdasarkan waktu pelaksanaan pekerjaan konstruksi'),
(13, 'Di atas 20 Milyar s/d 50 Milyar ', 'Nilai (Rp)/Bulan', 5000, 3, ' Dihitung berdasarkan waktu pelaksanaan pekerjaan konstruksi'),
(14, 'Di atas 50 Milyar s/d 100 Milyar ', 'Nilai (Rp)/Bulan', 6000, 3, ' Dihitung berdasarkan waktu pelaksanaan pekerjaan konstruksi'),
(15, 'Di atas 100 Milyar', 'Nilai (Rp)/Bulan', 7500, 3, ' Dihitung berdasarkan waktu pelaksanaan pekerjaan konstruksi'),
(16, '50 s/d 100 juta', 'Orang/Paket (Rp)  ', 300, 4, 'Honorarium  pejabat penerima hasil pekerjaan untuk paket pengadaan barang/pekerjaan konstruksi/jasa '),
(17, 'Di atas 100 juta s/d 200 juta ', 'Orang/Paket (Rp)  ', 500, 4, 'Honorarium  pejabat penerima hasil pekerjaan untuk paket pengadaan barang/pekerjaan konstruksi/jasa '),
(18, 'Di atas 200 juta s/d 400 juta ', 'Orang/Paket (Rp)  ', 800, 4, 'Honorarium  pejabat penerima hasil pekerjaan untuk paket pengadaan barang/pekerjaan konstruksi/jasa '),
(19, 'Di atas 400 juta s/d 1 milyar ', 'Orang/Paket (Rp)  ', 1100, 4, 'Honorarium  pejabat penerima hasil pekerjaan untuk paket pengadaan barang/pekerjaan konstruksi/jasa '),
(20, 'Di atas 1 Milyar s/d 3 milyar ', 'Orang/Paket (Rp)  ', 1400, 4, 'Honorarium  pejabat penerima hasil pekerjaan untuk paket pengadaan barang/pekerjaan konstruksi/jasa '),
(21, 'Di atas 3 Milyar ', 'Orang/Paket (Rp)  ', 1700, 4, 'Honorarium  pejabat penerima hasil pekerjaan untuk paket pengadaan barang/pekerjaan konstruksi/jasa '),
(22, 'Di atas 3 Miliyar', 'Orang/Paket (Rp)', 2000, 2, 'Honorarium Pejabat Pemesan dengan cara E Purchasing'),
(23, 'Satuan Biaya Makanan dan Minuman Lembur diberikan sebesar\r\nmaksimal Rp. 50.000,-', 'orang/hari ', 50000, 14, 'Satuan Biaya Makanan dan Minuman Lembur merupakan satuan biaya\r\nyang digunakan untuk perencanaan kebutuhan biaya pengadaan\r\nmakanan dan minuman bagi Pegawai Negeri Sipil yang melakukan kerja\r\nlembur paling kurang 2 (dua) jam berturut-turut, berdasarkan surat\r\nperintah dari pejabat yang berwenang.'),
(24, 'Menteri/Pejabat setingkat Menteri \n', 'OJ ', 1700, 15, 'Diberikan kepada PNS Non Pemerintah Provinsi Jawa Barat serta Non\nPNS yang melaksanakan kegiatan'),
(25, 'Pejabat Eselon I/yang disetarakan\n\n', 'OJ ', 1400, 15, 'Diberikan kepada PNS Non Pemerintah Provinsi Jawa Barat serta Non\nPNS yang melaksanakan kegiatan'),
(26, 'Pejabat Eselon II/yang disetarakan\n', 'OJ ', 1000, 15, 'Diberikan kepada PNS Non Pemerintah Provinsi Jawa Barat serta Non\nPNS yang melaksanakan kegiatan'),
(27, ' Pejabat Eselon III ke bawah/yang disetarakan\n', 'OJ ', 900, 15, 'Diberikan kepada PNS Non Pemerintah Provinsi Jawa Barat serta Non\nPNS yang melaksanakan kegiatan'),
(29, 'Pejabat Eslon IV', 'OJ', 9000000, 15, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(30, 'Eselon I', 'Orang/Kegiatan', 3500000, 17, 'Honorarium kegiatan hanya diberikan kepada personil yang  dilibatkan secara selektif'),
(31, 'Eselon II A', 'Orang/Kegiatan', 3000000, 17, 'Honorarium kegiatan hanya diberikan kepada personil yang  dilibatkan secara selektif'),
(32, 'Kota Bandung ', 'OB ', 3083100, 21, 'Tenaga Satpam, Pengemudi,  dan Front Office'),
(33, 'Kab. Sumedang ', 'OB ', 2670950, 21, 'Tenaga Satpam, Pengemudi,  dan Front Office'),
(34, ' Kab. Bandung  ', 'OB ', 2403, 22, 'Tenaga Kebersihan dan Pramubakti'),
(35, 'Kota Cimahi  ', 'OB ', 2403, 22, 'Tenaga Kebersihan dan Pramubakti'),
(36, 'Kab. Karawang  ', 'OB ', 3908, 24, 'Tenaga SATPAM dan Pengemudi dan Front Office '),
(37, ' Kab. Purwakarta', 'OB ', 3436, 24, 'Tenaga SATPAM dan Pengemudi dan Front Office '),
(38, 'Kota Depok', 'OB ', 3217, 25, 'Tenaga Kebersihan dan Pramubakti'),
(39, ' Kab. Bogor ', 'OB ', 3126, 25, 'Tenaga Kebersihan dan Pramubakti'),
(40, 'Golongan III', 'Orang/Bulan', 7200, 23, 'Pengawalan '),
(41, 'Golongan II ', 'Orang/Bulan', 5400, 23, 'Pengawalan '),
(42, 'Besaran Uang Saku', 'Orang/hari ', 250, 26, 'Uang saku dan bantuan biaya transportasi diberikan kepada Non PNS\ndan PNS Non Provinsi Jawa Barat yang mengikuti kegiatan penataran/ \npelatihan/ seminar/ kursus/ diseminasi/ sosialisasi/ rapat kerja/ \nkegiatan sejenisnya.'),
(43, 'Besaran Uang Saku', 'Orang/hari ', 3000000, 26, 'Uang saku dan bantuan biaya transportasi diberikan kepada Non PNS\ndan PNS Non Provinsi Jawa Barat yang mengikuti kegiatan penataran/ \npelatihan/ seminar/ kursus/ diseminasi/ sosialisasi/ rapat kerja/ \nkegiatan sejenisnya.'),
(44, 'Penggantian uang transport untuk PNS non Provinsi', 'Orang/kegiatan', 300000, 27, 'Uang saku dan bantuan biaya transportasi diberikan kepada Non PNS\ndan PNS Non Provinsi Jawa Barat yang mengikuti kegiatan penataran/ \npelatihan/ seminar/ kursus/ diseminasi/ sosialisasi/ rapat kerja/ \nkegiatan sejenisnya.'),
(45, 'non PNS\nyang mengikuti kegiatan di Lingkungan Pemerintah Daerah Provinsi\nJawa Barat', 'Orang/kegiatan', 300000, 27, 'Uang saku dan bantuan biaya transportasi diberikan kepada Non PNS\ndan PNS Non Provinsi Jawa Barat yang mengikuti kegiatan penataran/ \npelatihan/ seminar/ kursus/ diseminasi/ sosialisasi/ rapat kerja/ \nkegiatan sejenisnya.'),
(46, 'Daerah Kabupaten/Kota Bogor dan \nKota Depok (Kategori : Makanan)', 'Org/box', 60, 28, 'Rapat/Pertemuan, Rapat Koordinasi dan rapat biasa yang dilakukan\npada bulan Ramadhan selama rapat tersebut dilaksanakan pada pagi,\nsiang dan sore hari sebelum buka puasa, maka biaya konsumsi\ntersebut tidak diperkenankan untuk dibayarkan'),
(47, 'Daerah lainnya (Kategori : Makanan)', 'Org/box', 50000, 28, 'Rapat/Pertemuan, Rapat Koordinasi dan rapat biasa yang dilakukan\npada bulan Ramadhan selama rapat tersebut dilaksanakan pada pagi,\nsiang dan sore hari sebelum buka puasa, maka biaya konsumsi\ntersebut tidak diperkenankan untuk dibayarkan'),
(48, 'Roda Enam/Bus Besar (Kendaraan Pelaksanaan Kegiatan \nInsidentil)', 'Unit/hari', 3500, 30, 'Satuan Biaya sewa kendaraan pelaksanaan kegiatan insidentil \nmerupakan satuan biaya yang digunakan untuk perencanaan\nkebutuhan biaya sewa kendaraan roda 4 (empat), roda 6 (enam)/bus\nsedang, dan roda 6 (enam)/bus besar untuk kegiatan yang sifatnya\ninsidentil'),
(49, 'Roda Enam/Bus Sedang (Kendaraan Pelaksanaan Kegiatan \nInsidentil)', 'Unit/hari', 2500, 30, 'Satuan Biaya sewa kendaraan pelaksanaan kegiatan insidentil \nmerupakan satuan biaya yang digunakan untuk perencanaan\nkebutuhan biaya sewa kendaraan roda 4 (empat), roda 6 (enam)/bus\nsedang, dan roda 6 (enam)/bus besar untuk kegiatan yang sifatnya\ninsidentil'),
(50, 'Gol IV', 'Orang/Hari ', 360000, 34, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(51, 'Gol III', 'Orang/Hari ', 350000, 34, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(52, 'Gol II', 'Orang/Hari ', 340000, 34, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(53, 'Gol I', 'Orang/Hari ', 330000, 34, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(54, 'Gol IV', 'Orang/Hari ', 500000, 35, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(55, 'Gol III', 'Orang/Hari ', 475000, 35, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(56, 'Gol II', 'Orang/Hari ', 450000, 35, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(57, 'Gol I', 'Orang/Hari ', 425000, 35, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(58, 'Gol IV', 'Orang/Hari ', 600000, 36, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(59, 'Gol III', 'Orang/Hari ', 575000, 36, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(60, 'Gol II', 'Orang/Hari ', 550000, 36, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(61, 'Gol I', 'Orang/Hari ', 525000, 36, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(62, 'Gol IV', 'Orang/Hari ', 750000, 37, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(63, 'Gol III', 'Orang/Hari ', 700000, 37, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(64, 'Gol II', 'Orang/Hari ', 650000, 37, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(65, 'Gol I', 'Orang/Hari ', 600000, 37, 'PERJALANAN DINAS DALAM NEGERI (Satuan Biaya Uang Harian Perjalanan Dinas Dalam Daerah)'),
(66, 'Kota Bogor ', 'Kota Depok ', 30, 38, 'Uang Harian Perjalanan Dinas dari Daerah Kabupaten/Kota \nasal ke Daerah Kabupaten/Kota  tujuan dengan jarak 4 km s.d\n30 km'),
(67, 'Kota Depok', 'Kab. Cianjur ', 104, 38, 'Uang Harian Perjalanan Dinas dari Daerah Kabupaten/Kota\nasal ke Daerah Kabupaten/Kota tujuan dengan jarak 31 km s.d\n100 km'),
(68, 'Kota Sukabumi ', 'Kota Bekasi', 148, 38, 'Uang Harian Perjalanan Dinas dari Daerah Kabupaten/Kota \nasal ke Daerah Kabupaten/Kota tujuan dengan jarak 101 km\ns.d 150 km'),
(69, 'Kab. Majalengka', 'Kota Bogor', 237, 38, 'Uang Harian Perjalanan Dinas dari Daerah Kabupaten/Kotaasal ke Daerah Kabupaten/Kota tujuan dengan jarak lebih dari151 km'),
(70, 'Gol IV', 'OH', 300000, 40, 'Bagi perjalanan dinas dalam Daerah Kabupaten/Kota lebihdari 8 jam dan apabila melebihi 20 km dapat diberikanBahan Bakar Minyak sesuai riil cost. '),
(71, 'Gol III', 'OH', 275000, 40, 'Bagi perjalanan dinas dalam Daerah Kabupaten/Kota lebihdari 8 jam dan apabila melebihi 20 km dapat diberikanBahan Bakar Minyak sesuai riil cost. '),
(72, 'Gol II', 'OH', 250000, 40, 'Bagi perjalanan dinas dalam Daerah Kabupaten/Kota lebihdari 8 jam dan apabila melebihi 20 km dapat diberikanBahan Bakar Minyak sesuai riil cost. '),
(73, 'Gol I', 'OH', 200000, 40, 'Bagi perjalanan dinas dalam Daerah Kabupaten/Kota lebihdari 8 jam dan apabila melebihi 20 km dapat diberikanBahan Bakar Minyak sesuai riil cost. ');

-- --------------------------------------------------------

--
-- Table structure for table `detail3`
--

CREATE TABLE `detail3` (
  `id` int(11) NOT NULL,
  `nama1` varchar(2000) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nama3` varchar(100) DEFAULT NULL,
  `nilai` bigint(20) NOT NULL,
  `kategori_id` int(11) NOT NULL,
  `keterangan` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail3`
--

INSERT INTO `detail3` (`id`, `nama1`, `nama2`, `nama3`, `nilai`, `kategori_id`, `keterangan`) VALUES
(1, 's.d. Rp. 10 miliar', '(4% x Rp. 10 miliar)', 'Paling tinggi Rp. 400 juta', 400000, 12, 'Biaya Operasional dan Pendukung untuk kegiatan pada tahapan pelaksanaan dan penyerahan hasil ditentukan berdasarkan perhitungan dimulai dari 4% (empat persen) untuk nilai ganti rugi tanah sampai dengan atau setara dengan Rp.10.000.000.000,- (sepuluh miliar rupiah) pertama dan selanjutnya dengan prosentasi menurun sebagai berikut : '),
(2, 'Diatas Rp. 10 miliar s.d.  Rp. 15 miliar', '(biaya s.d Rp. 10 miliar sebelumnya) + (3% x Rp. 5 miliar)', 'Paling tinggi Rp. 550 juta ', 550000, 12, 'Biaya Operasional dan Pendukung untuk kegiatan pada tahapan pelaksanaan dan penyerahan hasil ditentukan berdasarkan perhitungan dimulai dari 4% (empat persen) untuk nilai ganti rugi tanah sampai dengan atau setara dengan Rp.10.000.000.000,- (sepuluh miliar rupiah) pertama dan selanjutnya dengan prosentasi menurun sebagai berikut : '),
(3, 'Diatas Rp. 15 miliar s.d.  Rp. 30 miliar', '(biaya s.d Rp. 5 miliar sebelumnya) + (2% x Rp. 15 miliar) ', 'Paling tinggi  Rp. 850 juta', 850000000, 12, 'Biaya Operasional dan Pendukung untuk kegiatan pada tahapan pelaksanaan dan penyerahan hasil ditentukan berdasarkan perhitungan dimulai dari 4% (empat persen) untuk nilai ganti rugi tanah sampai dengan atau setara dengan Rp.10.000.000.000,- (sepuluh miliar rupiah) pertama dan selanjutnya dengan prosentasi menurun sebagai berikut :');

-- --------------------------------------------------------

--
-- Table structure for table `detail4`
--

CREATE TABLE `detail4` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nilai1` bigint(20) NOT NULL,
  `nilai2` bigint(20) NOT NULL,
  `nilai3` bigint(20) NOT NULL,
  `nilai4` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail4`
--

INSERT INTO `detail4` (`id`, `nama1`, `nama2`, `nilai1`, `nilai2`, `nilai3`, `nilai4`, `keterangan`, `kategori_id`) VALUES
(1, 'Di atas  200 s/d 400 juta ', 'Orang/paket (Rp)', 2600, 2400, 2200, 2000, 'keterangan', 5),
(2, 'Di atas 400 juta s/d 1 Milyar', 'Orang/paket (Rp)', 3600, 3400, 3200, 3000, 'keterangan', 5),
(3, 'Di atas 1 Milyar s/d 3 Milyar', 'Orang/paket (Rp)', 4000, 3800, 3600, 3400, 'keterangan', 5),
(4, 'Di atas 3 Milyar', 'Orang/paket (Rp)', 4600, 4400, 4200, 4000, 'keterangan', 5),
(5, 's/d 50 juta', 'Orang/paket (Rp)', 800, 200, 0, 0, 'Ku tak bisa hidup tanpa mu', 6),
(6, 'Di atas  50 jutas/d 200 juta ', 'Orang/paket (Rp)', 2900, 2700, 2500, 2250, 'keterangan', 7),
(7, 'Di atas 200 juta s/d 1 Milyar', 'Orang/paket (Rp)', 3800, 3600, 3400, 3200, 'keterangan', 7),
(8, 'Di atas 1 Milyar', 'Orang/paket (Rp)', 4800, 4600, 4400, 4200, 'keterangan', 7);

-- --------------------------------------------------------

--
-- Table structure for table `detail5`
--

CREATE TABLE `detail5` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nilai1` bigint(20) NOT NULL,
  `nilai2` bigint(20) NOT NULL,
  `nilai3` bigint(20) NOT NULL,
  `nilai4` bigint(20) NOT NULL,
  `nilai5` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail6`
--

CREATE TABLE `detail6` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nama3` varchar(100) NOT NULL,
  `nama4` varchar(100) NOT NULL,
  `nilai` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail7`
--

CREATE TABLE `detail7` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `nilai1` bigint(20) NOT NULL,
  `nilai2` bigint(20) NOT NULL,
  `nilai3` bigint(20) NOT NULL,
  `nilai4` bigint(20) NOT NULL,
  `nilai5` bigint(20) NOT NULL,
  `nilai6` bigint(20) NOT NULL,
  `nilai7` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail8`
--

CREATE TABLE `detail8` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `float1` float NOT NULL,
  `float2` float NOT NULL,
  `float3` float NOT NULL,
  `keterangan` varchar(200) NOT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail9`
--

CREATE TABLE `detail9` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nilai1` bigint(20) NOT NULL,
  `nilai2` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail9`
--

INSERT INTO `detail9` (`id`, `nama1`, `nama2`, `nilai1`, `nilai2`, `keterangan`, `kategori_id`) VALUES
(0, 'Di atas 1 Milyar s/d 3 Milyar', 'Orang/Paket (Dollar)', 1000, 200, 'Honorarium Pejabat Pemesan dengan cara E Purchasing', 1),
(1, '50 s/d 100 Juta ', 'Orang/Paket (Rp) ', 700, 500, 'Honorarium Pejabat Pembuat Komitmen (PPK), dan Pejabat Pengadaan untuk paket pengadaan barang/pekerjaan konstruksi/jasa lainnya dengan cara pengadaan langsung \n', 1),
(2, 'Diatas 100 s/d 200 Juta', 'Orang/Paket (Rp) ', 1, 800, 'Honorarium Pejabat Pembuat Komitmen (PPK), dan Pejabat Pengadaan untuk paket pengadaan barang/pekerjaan konstruksi/jasa lainnya dengan cara pengadaan langsung \n', 1),
(3, 'Luar Daerah Provinsi Selain Provinsi DKI Jakarta', '', 250, 1000, ' Besaran uang transport Narasumber disesuaikan dengan kepatutan dan  \nkewajaran\n', 16),
(4, 'Provinsi DKI Jakarta', '', 750, 1000, ' Besaran uang transport Narasumber disesuaikan dengan kepatutan dan  \nkewajaran\n', 16),
(5, 'Dalam Daerah Provinsi', '', 500, 700, ' Besaran uang transport Narasumber disesuaikan dengan kepatutan dan  \nkewajaran\n', 16),
(6, 'Dalam Daerah Provinsi', '', 250000, 400000, ' Besaran uang transport Narasumber disesuaikan dengan kepatutan dan  kewajaran', 16),
(8, 'Luar Daerah Provinsi Selain Provinsi DKI Jakarta', '', 500000, 800000, 'Tidak Apa Apa Kalau Tidak Masuk Juga ', 16),
(9, 'Tenaga Teknis S1/S2 ', 'Org/bln', 3200000, 0, 'Tenaga Teknis Non PNS adalah Tenaga yang membantu PNS dalam hal jenis pekerjaan tertentu', 18),
(10, 'Tenaga Teknis  D3/D4 ', 'Org/bln', 3100000, 0, 'Tenaga Teknis Non PNS adalah Tenaga yang membantu PNS dalam hal jenis pekerjaan tertentu', 18),
(11, 'Tenaga Teknis SLTA ', 'Org/bln', 3000000, 0, 'Tenaga Teknis Non PNS adalah Tenaga yang membantu PNS dalam hal jenis pekerjaan tertentu', 18),
(12, ' Kota Bandung', 'OH', 123, 147, 'Untuk 6 hari kerja dalam 1 minggu (7 jam per hari), Upah dibayar \nsecara harian, dibayarkan sesuai jumlah hari yang terealisasi.', 19),
(13, 'Kab. Bandung', 'OH', 107, 127, 'Untuk 5 hari kerja dalam 1 minggu (8  jam per hari),  Upah dibayar \nsecara harian, dibayarkan sesuai jumlah hari yang terealisasi', 19),
(15, 'Penjaga Stand Pameran \n(bukan tenaga teknis )\n\n', 'Org/hari', 500, 0, 'Pemberian honorarium Penceramah/Da?i dapat dibayarkan sesuai    riil cost\ndengan data pendukung yang dapat dipertanggungjawabkan. ', 20),
(16, 'Instruktur olahraga ', 'Org/hari', 450000, 500000, 'Pemberian honorarium Penceramah/Da?i dapat dibayarkan sesuai    riil costdengan data pendukung yang dapat dipertanggungjawabkan. ', 20),
(17, 'Kota Sukabumi', 'OH', 106840, 127185, 'Ku tak bisa hidup tanpa mu', 19),
(18, 'Biaya Koordinasi Pengamanan \nKegiatan Pimpinan di luar\nProvinsi ', 'OH', 1500, 2500, 'BIAYA PENGAMANAN DAN RUANG TUNGGU DALAM RANGKA \nKEGIATAN PIMPINAN', 33),
(19, 'Biaya Fasilitasi Ruang Tunggu\nVIP Bandara/Stasiun Kereta\nApi/Pelabuhan Laut', '/Kunjungan', 1000, 5000, 'BIAYA PENGAMANAN DAN RUANG TUNGGU DALAM RANGKA \nKEGIATAN PIMPINAN', 33),
(20, 'Kab. Bandung Barat ', 'Kab. Bekasi', 20, 25, 'Daftar Penggunaan BBM untuk Perjalanan Dinas Dalam Daerah dan Perjalanan Dinas dari/ke DKI Jakarta ', 39),
(21, 'Kab. Indramayu', 'Kota Bandung', 32, 43, 'Daftar Penggunaan BBM untuk Perjalanan Dinas Dalam Daerah dan Perjalanan Dinas dari/ke DKI Jakarta ', 39);

-- --------------------------------------------------------

--
-- Table structure for table `detail10`
--

CREATE TABLE `detail10` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nilai1` bigint(20) NOT NULL,
  `nilai2` bigint(20) NOT NULL,
  `nilai3` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail10`
--

INSERT INTO `detail10` (`id`, `nama1`, `nama2`, `nilai1`, `nilai2`, `nilai3`, `keterangan`, `kategori_id`) VALUES
(1, 'Di atas 200 juta s/d 400 juta ', 'Orang/paket (Rp)', 1300, 1000, 850, 'keterangan', 8),
(2, 'Di atas 400 juta s/d 1 Milyar ', 'Orang/paket (Rp)', 1450, 1150, 1000, 'keterangan', 8),
(3, 'Di atas 1 Milyar s/d 3 Milyar ', 'Orang/paket (Rp)', 1600, 1300, 1150, 'keterangan', 8),
(4, 'Di atas 3 Milyar', 'Orang/paket (Rp)', 1750, 1450, 1300, 'keterangan', 8),
(5, 's/d 50 juta', 'Orang/paket (Rp)', 400, 600, 0, 'keterangan', 9),
(6, 'Di  atas 50 juta s/d 200 juta', 'Orang/paket (Rp)', 2100, 1600, 1350, 'keterangan', 10),
(7, 'Di atas 200 juta s/d 1 Milyar', 'Orang/paket (Rp)', 3100, 2600, 2100, 'keterangan', 10),
(8, 'Di atas 1 Milyar', 'Orang/paket (Rp)', 4100, 3600, 3100, 'keterangan', 10),
(9, 'Di  atas 1 Milyar-200 Milyar', 'Orang/paket (Rp)', 2100, 1600, 1350, 'Panitia Pemilihan Mitra ditetapkan oleh Pengelola Barang/Pengguna Barang untuk melaksanakan Tender Pemanfaatan Barang Milik Daerah, adalah Pegawai Negeri Sipil Pemerintah Provinsi Jawa Barat', 11),
(10, 'Di atas 200 Milyar-500 Milyar', 'Orang/paket (Rp)', 2600, 2300, 2000, 'Panitia Pemilihan Mitra ditetapkan oleh Pengelola Barang/Pengguna Barang untuk melaksanakan Tender Pemanfaatan Barang Milik Daerah, adalah Pegawai Negeri Sipil Pemerintah Provinsi Jawa Barat', 11),
(11, 'Di atas 500 Milyar', 'Orang/paket (Rp)', 2900, 2600, 2300, 'Panitia Pemilihan Mitra ditetapkan oleh Pengelola Barang/Pengguna Barang untuk melaksanakan Tender Pemanfaatan Barang Milik Daerah, adalah Pegawai Negeri Sipil Pemerintah Provinsi Jawa Barat', 11),
(15, '70 s/d 100 Juta ', 'Orang/Paket (Rp)', 1000, 800, 0, 'Tidak Apa Apa Kalau Tidak Masuk Juga ', 9),
(16, 'Menteri/Setingkat \nMenteri \n', 'OP', 468000, 639000, 1914000, 'Satuan biaya paket fullboard disediakan untuk paket kegiatan rapat\nyang diselenggarakan di luar kantor sehari penuh dan\nbermalam/menginap.', 29),
(17, 'Pejabat Eselon I dan II', 'OP', 426000, 639001, 1914001, 'Satuan biaya paket fullday disediakan untuk kegiatan\nrapat/pertemuan yang dilakukan di luar kantor minimal 8 (delapan)\njam tanpa menginap.', 29),
(18, 'Pejabat Eselon III ke\nbawah ', 'OP', 331000, 639002, 1914002, 'Satuan biaya paket halfday disediakan untuk paket kegiatan \nrapat/pertemuan yang dilakukan di luar kantor selama setengah hari\nminimal 5 (lima) jam. ', 29);

-- --------------------------------------------------------

--
-- Table structure for table `detail11`
--

CREATE TABLE `detail11` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nama3` varchar(100) NOT NULL,
  `nilai1` bigint(20) NOT NULL,
  `nilai2` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail12`
--

CREATE TABLE `detail12` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `float1` float NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail13`
--

CREATE TABLE `detail13` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `float1` float NOT NULL,
  `float2` float NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail14`
--

CREATE TABLE `detail14` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nilai1` bigint(20) NOT NULL,
  `nilai2` bigint(20) NOT NULL,
  `nilai3` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail15`
--

CREATE TABLE `detail15` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `nilai` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail15`
--

INSERT INTO `detail15` (`id`, `nama`, `nilai`, `keterangan`, `kategori_id`) VALUES
(1, 'Bus Besar', 500000, 'Biaya   kendaraan dinas dikelola oleh unit kerja yang membidangi tugas pengelolaan kendaraan dinas.', 31),
(2, 'Truck/Mikro Bus/Pemadam Kebakaran', 400000, 'Biaya   kendaraan dinas dikelola oleh unit kerja yang membidangi tugas pengelolaan kendaraan dinas.', 31),
(3, 'Truck/Mikro Bus ', 500000, 'Khusus Kendaraan Dinas Pelayanan/Operasional Rumah Tangga \nSetda dan Rumah Tangga Pimpinan yang melaksanakan kegiatan luar\ndaerah/dalam daerah diberikan tambahan biaya BBM berpedoman\npada analisa kebu', 32),
(4, 'Mini Bus/Pick Up ', 350000, 'Khusus Kendaraan Dinas Pelayanan/Operasional Rumah Tangga \nSetda dan Rumah Tangga Pimpinan yang melaksanakan kegiatan luar\ndaerah/dalam daerah diberikan tambahan biaya BBM berpedoman\npada analisa kebu', 32);

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `kategori` varchar(100) NOT NULL,
  `sub_bidang_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `kategori`, `sub_bidang_id`) VALUES
(1, 'A', 1),
(2, 'A', 2),
(3, 'A', 4),
(4, 'A', 5),
(5, 'A', 3),
(6, 'A', 7),
(7, 'A', 8),
(8, 'A', 6),
(9, 'A', 9),
(10, 'A', 10),
(11, 'B', 11),
(12, 'C', 12),
(13, 'C', 13),
(14, 'D', 14),
(15, 'E', 15),
(16, 'E', 16),
(17, 'F', 17),
(18, 'G', 18),
(19, 'H', 19),
(20, 'I', 20),
(21, 'J', 21),
(22, 'J', 22),
(23, 'K', 23),
(24, 'J', 24),
(25, 'J', 25),
(26, 'L', 26),
(27, 'L', 27),
(28, 'M', 28),
(29, 'N', 29),
(30, 'O', 30),
(31, 'P', 31),
(32, 'P', 32),
(33, 'Q', 33),
(34, 'R', 34),
(35, 'R', 35),
(36, 'R', 36),
(37, 'R', 37),
(38, 'R', 38),
(39, 'R', 39),
(40, 'R', 40),
(41, 'R', 41);

-- --------------------------------------------------------

--
-- Table structure for table `st_biaya`
--

CREATE TABLE `st_biaya` (
  `id` int(11) NOT NULL,
  `jenis` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `st_biaya`
--

INSERT INTO `st_biaya` (`id`, `jenis`) VALUES
(1, 'Standard Biaya Umum Batas Tertinggi');

-- --------------------------------------------------------

--
-- Table structure for table `sub_bidang`
--

CREATE TABLE `sub_bidang` (
  `id` int(11) NOT NULL,
  `sub` varchar(500) NOT NULL,
  `bidang_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sub_bidang`
--

INSERT INTO `sub_bidang` (`id`, `sub`, `bidang_id`) VALUES
(1, 'Honorarium Pejabat Pembuat Komitmen (PPK) ', 1),
(2, 'Honorarium Pejabat Pemesan dengan cara E Purchasing', 1),
(3, 'Honorarium Pejabat Pembuat Komitmen (PPK) dan Kelompok Kerja (Pokja)', 1),
(4, 'Honorarium PPK Untuk Pekerjaan Konstruksi', 1),
(5, 'Honorarium pejabat penerima hasil pekerjaan untuk paket pengadaan barang/pekerjaan', 1),
(6, 'Honorarium panitia penerima hasil pekerjaan untuk paket pengadaan barang/pekerjaan konstruksi/jasa', 1),
(7, '(2.7) Nilai paket pekerjaan sampai dengan Rp. 50.000.000,-', 1),
(8, '(2.8) Nilai Paket Pekerjaan di atas Rp. 50.000.000,-', 1),
(9, '(2.9) Nilai paket pekerjaan sampai dengan Rp. 50.000.000,- ', 1),
(10, '(2.10) Nilai paket pekerjaan sampai dengan Rp. 50.000.000,-', 1),
(11, 'Honorarium Panitia Pemilihan Mitra Pemanfaatan Barang Milik daerah ', 2),
(12, 'Biaya Operasional dan Biaya Pendukung Untuk Kegiatan pada\r\nTahapan Pelaksanaan dan Penyerahan Hasil.', 3),
(13, 'Honorarium Tim Persiapan Pengadaan Tanah, Tim Kajian Keberatan,\r\nTim Pelaksana Pengadaan Tanah dan Satuan Tugas. ', 3),
(14, 'Pengadaan Makanan dan Minuman Lembur', 4),
(15, 'Diberikan kepada PNS Non Pemerintah Provinsi Jawa Barat serta Non\r\nPNS yang melaksanakan kegiatan', 5),
(16, 'Besaran Uang Transport Narasumber', 5),
(17, 'HONORARIUM KEGIATAN UNTUK PNS NON PEMERINTAH PROVINSI\r\nJAWA BARAT DAN NON PNS.', 7),
(18, 'HONORARIUM  TENAGA TEKNIS NON PNS', 8),
(19, 'UPAH HARIAN KEGIATAN NON PNS', 9),
(20, 'HONORARIUM HARIAN/KEGIATAN/PERTEMUAN  NON PNS', 10),
(21, '(Table 2.20) Tenaga Satpam, Pengemudi,  dan Front Office (SBU Batas Tertinggi)', 11),
(22, '(Table 2.21) Tenaga Kebersihan dan Pramubakti (SBU Batas Tertinggi)\r\n', 11),
(23, 'HONORARIUM JASA PENGAWALAN GUBERNUR/WAKIL\r\nGUBERNUR/KETUA DPRD.', 12),
(24, '(Table 2.22) Tenaga SATPAM dan Pengemudi dan Front Office (SBU Batas Tertinggi)', 11),
(25, '(Table 2.23) Tenaga Kebersihan dan Pramubakti (SBU Batas Tertinggi)', 11),
(26, 'Besaran Uang Saku', 13),
(27, 'Penggantian uang transport untuk PNS non Provinsi', 13),
(28, 'Satuan biaya konsumsi rapat merupakan satuan biaya yang digunakan\r\nuntuk perencanaan kebutuhan biaya pengadaan makan dan snack', 14),
(29, 'SATUAN BIAYA RAPAT/PERTEMUAN DI LUAR KANTOR ', 15),
(30, 'SATUAN BIAYA SEWA KENDARAAN ', 16),
(31, 'Satuan Volume Bahan Bakar Kendaraan Operasional yang aktif ', 17),
(32, 'Satuan Biaya Pelumasan Kendaraan Dinas ', 17),
(33, '(Table 2.31 SBU) BIAYA PENGAMANAN DAN RUANG TUNGGU DALAM RANGKA KEGIATAN PIMPINAN', 18),
(34, '4 km s.d\r\n30 km', 19),
(35, '31 km s.d\r\n100 km', 19),
(36, '101 km\r\ns.d 150 km', 19),
(37, 'lebih dari\r\n151 km', 19),
(38, 'Jarak Antar Ibukota Kabupaten dan Kota Di Provinsi Jawa Barat', 19),
(39, 'Daftar Penggunaan BBM untuk Perjalanan Dinas Dalam Daerah dan Perjalanan Dinas dari/ke DKI Jakarta', 19),
(40, 'Uang Harian Perjalanan Dinas Dalam Daerah Kabupaten/Kota lebih dari 8 (delapan) jam', 19),
(41, 'Uang saku yang melekat pada perjalanan dinas dapat diberikan untuk mengikuti kegiatan Bimtek/ Pelatihan/ Seminar/ Rapat, di luar kota maupun di luar Provinsi apabila akomodasi dan konsumsi difasilitasi panitia penyelenggara', 19);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bidang`
--
ALTER TABLE `bidang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bidang_st_biaya_fk` (`st_biaya_id`);

--
-- Indexes for table `deatil1a`
--
ALTER TABLE `deatil1a`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deatil1a_detail1_fk` (`detail1_id`);

--
-- Indexes for table `deatil1ba`
--
ALTER TABLE `deatil1ba`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deatil1ba_detail1b_fk` (`detail1b_id`);

--
-- Indexes for table `detail1`
--
ALTER TABLE `detail1`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail1_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail1b`
--
ALTER TABLE `detail1b`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail1b_detail1_fk` (`detail1_id`);

--
-- Indexes for table `detail1c`
--
ALTER TABLE `detail1c`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail1c_detail1_fk` (`detail1_id`);

--
-- Indexes for table `detail1d`
--
ALTER TABLE `detail1d`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail1d_detail1_fk` (`detail1_id`);

--
-- Indexes for table `detail1e`
--
ALTER TABLE `detail1e`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail1e_detail1_fk` (`detail1_id`);

--
-- Indexes for table `detail2`
--
ALTER TABLE `detail2`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail2_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail3`
--
ALTER TABLE `detail3`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail3_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail4`
--
ALTER TABLE `detail4`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail4_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail5`
--
ALTER TABLE `detail5`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail5_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail6`
--
ALTER TABLE `detail6`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail6_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail7`
--
ALTER TABLE `detail7`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail7_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail8`
--
ALTER TABLE `detail8`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail8_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail9`
--
ALTER TABLE `detail9`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail9_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail10`
--
ALTER TABLE `detail10`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail10_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail11`
--
ALTER TABLE `detail11`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail11_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail12`
--
ALTER TABLE `detail12`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail12_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail13`
--
ALTER TABLE `detail13`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail13_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail14`
--
ALTER TABLE `detail14`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail14_kategori_fk` (`kategori_id`);

--
-- Indexes for table `detail15`
--
ALTER TABLE `detail15`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail15_kategori_fk` (`kategori_id`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kategori_sub_bidang_fk` (`sub_bidang_id`);

--
-- Indexes for table `st_biaya`
--
ALTER TABLE `st_biaya`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_bidang`
--
ALTER TABLE `sub_bidang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_bidang_bidang_fk` (`bidang_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `deatil1a`
--
ALTER TABLE `deatil1a`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `detail2`
--
ALTER TABLE `detail2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `detail3`
--
ALTER TABLE `detail3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `detail4`
--
ALTER TABLE `detail4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `detail9`
--
ALTER TABLE `detail9`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `detail10`
--
ALTER TABLE `detail10`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `detail15`
--
ALTER TABLE `detail15`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bidang`
--
ALTER TABLE `bidang`
  ADD CONSTRAINT `bidang_st_biaya_fk` FOREIGN KEY (`st_biaya_id`) REFERENCES `st_biaya` (`id`);

--
-- Constraints for table `deatil1a`
--
ALTER TABLE `deatil1a`
  ADD CONSTRAINT `deatil1a_detail1_fk` FOREIGN KEY (`detail1_id`) REFERENCES `detail1` (`id`);

--
-- Constraints for table `deatil1ba`
--
ALTER TABLE `deatil1ba`
  ADD CONSTRAINT `deatil1ba_detail1b_fk` FOREIGN KEY (`detail1b_id`) REFERENCES `detail1b` (`id`);

--
-- Constraints for table `detail1`
--
ALTER TABLE `detail1`
  ADD CONSTRAINT `detail1_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail1b`
--
ALTER TABLE `detail1b`
  ADD CONSTRAINT `detail1b_detail1_fk` FOREIGN KEY (`detail1_id`) REFERENCES `detail1` (`id`);

--
-- Constraints for table `detail1c`
--
ALTER TABLE `detail1c`
  ADD CONSTRAINT `detail1c_detail1_fk` FOREIGN KEY (`detail1_id`) REFERENCES `detail1` (`id`);

--
-- Constraints for table `detail1d`
--
ALTER TABLE `detail1d`
  ADD CONSTRAINT `detail1d_detail1_fk` FOREIGN KEY (`detail1_id`) REFERENCES `detail1` (`id`);

--
-- Constraints for table `detail1e`
--
ALTER TABLE `detail1e`
  ADD CONSTRAINT `detail1e_detail1_fk` FOREIGN KEY (`detail1_id`) REFERENCES `detail1` (`id`);

--
-- Constraints for table `detail2`
--
ALTER TABLE `detail2`
  ADD CONSTRAINT `detail2_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail3`
--
ALTER TABLE `detail3`
  ADD CONSTRAINT `detail3_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail4`
--
ALTER TABLE `detail4`
  ADD CONSTRAINT `detail4_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail5`
--
ALTER TABLE `detail5`
  ADD CONSTRAINT `detail5_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail6`
--
ALTER TABLE `detail6`
  ADD CONSTRAINT `detail6_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail7`
--
ALTER TABLE `detail7`
  ADD CONSTRAINT `detail7_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail8`
--
ALTER TABLE `detail8`
  ADD CONSTRAINT `detail8_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail9`
--
ALTER TABLE `detail9`
  ADD CONSTRAINT `detail9_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail10`
--
ALTER TABLE `detail10`
  ADD CONSTRAINT `detail10_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail11`
--
ALTER TABLE `detail11`
  ADD CONSTRAINT `detail11_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail12`
--
ALTER TABLE `detail12`
  ADD CONSTRAINT `detail12_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail13`
--
ALTER TABLE `detail13`
  ADD CONSTRAINT `detail13_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail14`
--
ALTER TABLE `detail14`
  ADD CONSTRAINT `detail14_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `detail15`
--
ALTER TABLE `detail15`
  ADD CONSTRAINT `detail15_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `kategori`
--
ALTER TABLE `kategori`
  ADD CONSTRAINT `kategori_sub_bidang_fk` FOREIGN KEY (`sub_bidang_id`) REFERENCES `sub_bidang` (`id`);

--
-- Constraints for table `sub_bidang`
--
ALTER TABLE `sub_bidang`
  ADD CONSTRAINT `sub_bidang_bidang_fk` FOREIGN KEY (`bidang_id`) REFERENCES `bidang` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
