-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2018 at 01:56 AM
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
(19, 'PERJALANAN DINAS', 1),
(20, 'BIAYA PENGINAPAN PERJALANAN DINAS ', 1),
(21, 'AKOMODASI', 1),
(22, 'PERJALANAN DINAS NON PNS', 1),
(23, 'PENYETARAAN TNI DAN POLRI', 1),
(24, 'EVENT ORGANIZER (EO). ', 1),
(25, 'SATUAN BIAYA PAKAIAN   ', 1),
(26, 'KESEJAHTERAAN PNS DI LINGKUNGAN  PEMERINTAH PROVINSI JAWA BARAT ', 1),
(27, 'SATUAN BIAYA MAKANAN  PENAMBAH  DAYA TAHAN TUBUH ', 1),
(28, 'SATUAN BIAYA PEMELIHARAAN ISO 9001 – 2000 ', 1),
(29, 'PEKERJAAN KONSULTANSI NON SERTIFIKAT ', 1),
(30, 'SATUAN SEWA GEDUNG/LAPANG OLAHRAGA', 2),
(31, 'SATUAN BIAYA TAKSI PERJALANAN DINAS JABATAN LUAR PROVINSI ', 2),
(32, 'SATUAN BIAYA TIKET PESAWAT PERJALANAN DINAS LUAR SBU PROVINSI (PP)', 2),
(33, 'BIAYA TIKET PERJALANAN DINAS LUAR NEGERI (PP)', 2),
(34, 'BIAYA PERAWATAN KENDARAAN', 2),
(35, 'Bidang Kebinamargaan', 3),
(36, 'Bidang Sumber Daya Air', 3),
(37, 'BIDANG KECIPTAKARYAAN', 3),
(38, 'BIDANG PERHUBUNGAN', 3),
(39, 'BIDANG LINGKUNGAN HIDUP\r\n', 3),
(40, 'Bidang Kearsipan', 3),
(41, 'Bidang Perpustakaan', 3),
(42, 'Bidang Perkebunan', 3),
(43, 'Bidang Kebudayaan dan Pariwisata', 3),
(44, 'Bidang Industri dan Perdagangan', 3),
(45, 'Bidang Promosi dan Penanaman Modal', 3),
(46, 'Bidang Informatika', 3),
(47, 'Bidang Tanaman Pangan dan Holtikultura', 3),
(48, 'Bidang Kehutanan', 3),
(49, 'Bidang Ketahanan Pangan dan Peternakan', 3),
(50, 'Bidang Sosial', 3),
(51, 'Bdaing Kesehatan', 3),
(52, 'Bidang Kediklatan', 3),
(53, 'Bidang Olahraga', 3),
(54, 'Bidang ESDM', 3),
(55, 'Bidang Tenaga Kerja dan Transmigrasi', 3),
(56, 'Bidang Penelitian dan Pengembangan', 3);

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
(3, 'TIM KAJIAN (1). Ketua merangkap anggota  (2). Sekretaris merangkap anggota (3). Anggota ', 'Orang/Paket (Rp)', 9000000, 'Tidak Apa Apa Kalau Tidak Masuk Juga ', 1),
(4, 'Drilling Bor / Bor Mesin ', 'm1', 850000, ' *) Penelitian belum termasuk : Mob & Demob dan Honorarium tenaga ahli', 2),
(5, ' N SPT', 'Bh', 175000, 'BP = Back Preasure ', 2),
(6, 'Fotokopi arsip dan buku antiquariat ', 'Per lembar', 500, 'Pelajar/Mahasiswa (a.  Ukuran A4)', 10),
(7, 'Fotokopi arsip dan buku antiquariat ', 'Per lembar', 1500, 'Pelajar/Mahasiswa (b. Ukuran A3)', 10),
(8, '   Fotokopi arsip dan buku antiquariat ', 'Per lembar ', 2000, 'Pelajar/Mahasiswa (c. Ukuran A2)', 10),
(9, 'Anak Timbangan E1/Set', 'HOK', 50000, 'membersihkan', 30),
(10, 'Anak timbangan E2/Set', 'HOK', 50000, 'mencuci', 30),
(11, 'Biaya tenaga bantuan teknis pada pengujian Bejana ukur kapasitas 5 Liter  s/d 10 Liter. ', '1 unit', 50000, 'Membersihkan bejana yang akan diuji', 31),
(12, 'Biaya tenaga bantuan teknis pada pengujian Bejana ukur kapasitas 20 Liter  s/d 50 Liter. ', '1 unit', 75000, 'Menyiapkan peralatan pengujian ', 31);

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
(1, 'SBU Batas Tertinggi (Table 2.13)', 13),
(2, 'SBK (Tabel 2.8)', 90),
(3, '(Tabel 5.1) Uji Udara Emisi\r\n', 116),
(4, '(Tabel 5.1) Uji Udara Ambien ', 116),
(5, '(Tabel 5.1)  Pengukuran Kebisingan', 116),
(6, '(Tabel 5.1) Uji Air dan Limbah Cair\r\n', 116),
(7, '(Tabel 5.1)  Uji Parameter Biologi ', 116),
(8, '(Tabel 5.1) Uji Air Laut\r\n', 116),
(9, '(Tabel 5.1) Uji Limbah Padat dan Limbah B3', 116),
(10, '(Tabel6.3) Satuan Biaya Reproduksi dan Transkripsi ', 121),
(11, '(Tabel 10.1) Anak Timbangan ', 206),
(12, '(Tabel 10.1) Timbangan', 206),
(13, '(Tabel 10.1) PENGUJIAN BARANG ', 206),
(14, '(Tabel 10.2) Biaya Pekerjaan Massa & Timbangan\r\nVerifikasi Alat Standar Massa ', 207),
(15, '(Tabel 10.2) Pekerjaan Pengujian alat Ukuran\r\nArus, Panjang dan Volume   ', 207),
(16, '(Tabel 10.3)\r\nDaftar Upah Tenaga Kasar dan Tenaga Bantuan Teknis  \r\nStandar Pengujian Mutu Barang', 208),
(17, '(Tabel 10.4) Standar Biaya Uji laboratorium Makanan dan Minuman \r\n', 209),
(18, '(Tabel 10.5) Daftar Harga Standar Alat', 210),
(19, '(Table 10.6) Permohonan Akreditasi ', 211),
(20, '(Table 10.6) Assesmen  ', 211),
(21, '(Table 10.6) Assesmen  Bersama dengan \r\nBadan Akreditasi Asing \r\n( Cross Frontier )', 211),
(22, '(Table 10.6) Survailen ', 211),
(23, '(Table 10.6) Uji Profiensi ', 211),
(24, '(Table 10.6) Iuran Tahunan ', 211),
(25, '(Tabel 10.7) Standar Biaya Honorarium Tenaga Teknis Non PNS pada Sub Unit Pengembangan IKM dan Penge', 212),
(26, '(Tabel 10.1) Timbangan Mekanik', 206),
(27, '(Tabel 10.1) Crane Scale', 206),
(28, '(Tabel 10.1) Dead Weight Testing Machine \r\n', 206),
(29, '(Tabel 10.1) Meter Kadar Air (MKA) ', 206),
(30, '(10.2) Biaya Pekerjaan Massa & Timbangan\r\nVerifikasi Alat Standar Massa ', 207),
(31, '(10.2) Pekerjaan Pengujian alat Ukuran\r\nArus, Panjang dan Volume', 207),
(32, '(Tabel 15.6) Obat Hewan ', 225);

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

--
-- Dumping data for table `detail1c`
--

INSERT INTO `detail1c` (`id`, `nama1`, `nama2`, `nama3`, `nilai`, `keterangan`, `detail1_id`) VALUES
(1, 'Total Partikel Debu', 'Isokinetik ', 'per sampel ', 350000, 'Pengujian Parameter Kualitas Lingkungan ', 3),
(2, 'Kobalt (Co)  ', 'Spektrofotometer Serapan Atom (SSA)', 'per sampel ', 100000, 'Pengujian Parameter Kualitas Lingkungan ', 3),
(3, 'Amonia (NH 3 ) ', 'Biru Indofenol ', 'per sampel ', 220000, 'Uji Udara Ambien ', 4),
(4, 'Hidrogen Sulfida (H 2 S)  ', 'Biru Metilen ', 'per sampel ', 231000, 'Uji Udara Ambien', 4),
(5, 'Kebisingan Lingkungan MetodeL (A) eq 24 jam ', '', 'per sampel', 150000, 'Pengukuran Kebisingan', 5),
(6, 'Vibrasi Lingkungan untuk  Kenyamanan & Kesehatan ', '', 'per sampel ', 1000000, 'Pengukuran Kebisingan', 5),
(7, 'pH  ', 'Elektrometik ', 'per sampel ', 10000, 'Uji Air dan Limbah Cair', 6),
(8, 'Daya Hantar Listrik', 'Konduktrometrik', 'per sampel ', 10000, 'Uji Air dan Limbah Cair', 6),
(9, 'Coliform  ', 'Petrifilm', 'per sampel ', 210000, 'Uji Parameter Biologi', 7),
(10, 'Plankton  ', 'Identifikasi  (Kuantitatif) ', 'per sampel ', 315000, 'Uji Parameter Biologi', 7),
(11, 'Kromium (Cr)  ', 'SSA', 'per sampel ', 168000, 'Uji Air Laut', 8),
(12, 'Merkuri (Hg) ', 'Cold Vapour-SSA', 'per sampel ', 168000, 'Uji Air Laut', 8),
(13, 'Destruksi Pb, Cu, Cd, Zn, Mn, Ag, Co, Cr tot, Fe, Ni ', '', 'per sampel ', 95000, 'Uji Limbah Padat dan Limbah B3', 9),
(14, 'Titik Nyala ', 'PM', 'per sampel ', 300000, 'Uji Limbah Padat dan Limbah B3', 9),
(15, 'Vaksin Rabies', 'RABISIN ', 'Vial 10 dosis', 75000, 'Pembelian > 2000 vial', 32),
(16, 'Vaksin Rabies ', 'DEFENSOR', 'Vial 10 dosis', 66000, 'Sedang ajukan e-katalog', 32),
(17, 'Vaksin Anthrax ', 'ANTHRAVET ', 'Botol 200 ml', 150000, 'Persedian terbatas', 32),
(18, 'Vaksin Brucellosis', 'BRUCELLA', 'Vial 5 Dosis', 536250, 'Pembelian>21 vial ', 32);

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

--
-- Dumping data for table `detail1d`
--

INSERT INTO `detail1d` (`id`, `nama`, `nilai`, `keterangan`, `detail1_id`) VALUES
(5, 'Kelas F2 ', 2, 'Dokumen asli', 11),
(6, 'Kelas F1 ', 2, 'Diuji berdasarkan permintaan ', 11),
(7, '< 1 kg  ', 2, 'Maksimal 5 unit/5 jam', 12),
(8, 'dari 1 kg s/d 25 kg ', 2, 'Maksimal 15 unit/5 jam', 12),
(9, '< 1 kg  ', 2, 'Maksimal 7 unit/5 jam', 26),
(10, 'dari  1 kg s.d. 1000 kg ', 2, 'Maksimal 10 unit/5 jam', 26),
(11, '100 kg s/d 1000 kg ', 2, 'Maksimal 2 unit/ 5 jam', 27),
(12, '1010 kg s/d 10.000 kg ', 2, 'Maksimal 1 unit/5 jam', 27),
(13, '1 kg/cm²  s/d  100 kg/cm²  ', 2, 'Maksimal 5 unit/5 jam', 28),
(14, '101 kg/cm² s/d 1000  kg/cm² ', 3, 'Maksimal 3 unit/5 jam ', 28),
(15, 'Untuk biji – bijian tidak mengandung minyak ', 2, 'Maksimal 2 unit/5 jam ', 29),
(16, 'Untuk biji – bijian yang mengandung minyak. ', 2, 'Maksimal 2 unit/5 jam ', 29),
(18, 'Pengujian Barang dengan  pengisian  mesin otomatis', 3, 'Maksimal 3 Produk/  5 Jam', 13),
(19, 'Pengujian Barang dengan  pengisian manual', 3, 'Maksimal 5 Produk/  5 Jam', 13);

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
(4, 'Di atas 400 juta s/d 1 Milyar ', 'Orang/Paket (Rp)  ', 1400000, 2, ' *) Penelitian belum termasuk : Mob & Demob dan Honorarium tenaga ahli'),
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
(73, 'Gol I', 'OH', 200000, 40, 'Bagi perjalanan dinas dalam Daerah Kabupaten/Kota lebihdari 8 jam dan apabila melebihi 20 km dapat diberikanBahan Bakar Minyak sesuai riil cost. '),
(74, 'Transportasi dari tempat \nkedudukan ke Bandara (PP)', 'Orang/kali', 500, 47, 'Biaya Taksi Perjalanan Dinas Luar Provinsi untuk Gubernur,\nWakil Gubernur, Sekretaris Daerah, Pimpinan DPRD dan\nAnggota DPRD'),
(75, 'Transportasi dari Bandara tujuanke tempat yang dituju(PP) ', 'Orang/kali', 500, 47, 'Biaya Taksi Perjalanan Dinas Luar Provinsi untuk Gubernur,\nWakil Gubernur, Sekretaris Daerah, Pimpinan DPRD dan\nAnggota DPRD'),
(76, 'Gol A', 'Orang', 0, 49, 'Menteri, Ketua dan Wakil ketua Lembaga\nTinggi Negara, Duta Besar Luar Biasa\nBerkuasa penuh'),
(77, 'Gol B', 'Orang', 0, 49, 'Duta besar, pegawai negeri sipil golongan IV/c\nke atas, pejabat eselon I, pejabat eselon II,\nperwira tinggi TNI/POLRI, Anggota Lembaga\nTinggi Negara, utusan khusus presiden\n(special envoy) dan pejabat lainnya yang\nsetara. '),
(78, 'Gol C', 'Orang', 0, 49, 'Pegawai negeri sipil golongan III/c sampai\ndengan golongan IV/b dan perwira menengah\nTNI/POLRI'),
(79, 'Gol D', 'Orang', 0, 49, 'Pegawai Negeri Sipil dan anggota TNI/POLRI\nselain yang dimaksud angka 2) dan angka 3). '),
(81, 'Gol D', 'Orang/Paket (Dollar)', 0, 49, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(82, 'Kepala Negara/Ketua/Wk.Ketua Lembaga \nTinggi Negara/Menteri/Pejabat Setingkat\nMenteri/Tamu Negara', 'Bintang\n Lima', 0, 54, 'Sesuai dengan harga\n satuan (riil cost)'),
(83, 'Pejabat Negara/Kepala Daerah/ Wk.\nKepala Daerah', 'Bintang\n Empat ', 0, 54, 'Sesuai dengan harga\n satuan (riil cost)'),
(84, 'Di atas 4 Miliyar', 'Orang/Paket (Dollar)', 850000000, 58, 'Honorarium Pejabat Pemesan dengan cara E Purchasing'),
(85, 'Nanggroe Aceh Darussalam', 'Orang/kali ', 123000, 62, 'Satuan biaya taksi perjalanan dinas ke luar provinsi merupakan  satuan biaya yang digunakan untuk perencanaan kebutuhan biaya tarif satu kali perjalanan'),
(86, 'Sumatera Utara', 'Orang/Kali', 232000, 62, 'Biaya taksi dari tempat kedudukan di luar Bandung ke Bandara Husein Sastranegara'),
(87, '3.5 ', '', 2147483647, 66, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(88, '4 ', '', 2147483647, 66, 'Jangan Di Habisin Semua'),
(89, '3.5 ', '', 4141, 67, 'Ku tak bisa hidup tanpa mu'),
(90, '4', '', 4506575, 67, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(91, '3.5', '', 1412770, 68, 'Jangan Di Habisin Semua'),
(92, '4', '', 850000000, 68, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(93, '3.5 ', '', 80408000, 69, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(94, '4', '', 83282000, 69, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(95, '3.5', '', 6701000, 70, 'Ku tak bisa hidup tanpa mu'),
(96, '4 ', '', 6940000, 70, 'Ku tak bisa hidup tanpa mu'),
(97, '3.5', '', 2147483647, 71, 'Ku tak bisa hidup tanpa mu'),
(98, '4', '', 10295640, 71, 'Ku tak bisa hidup tanpa mu'),
(99, '3.5 ', '', 9537255, 72, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(100, '4', '', 10426212, 72, 'Ku tak bisa hidup tanpa mu'),
(101, '0.5', '', 917693000, 73, 'Jangan Di Habisin Semua'),
(102, '1', '', 976059000, 73, 'Jangan Di Habisin Semua'),
(103, '0.25', '', 1127960, 74, 'Jangan Di Habisin Semua'),
(104, '0.5', '', 1390436, 74, 'Dihitung berdasarkan waktu pelaksanaan pekerjaan konstruksi '),
(105, '1.6 ', '', 2048617, 75, 'Jangan Di Habisin Semua'),
(106, '2', '', 2344400, 75, 'Jangan Di Habisin Semua'),
(107, '3.5 ', '', 3684276, 76, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(108, '4', '', 4049588, 76, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(109, 'Perencanaan Teknis Jalan', '', 27650, 78, 'Ku tak bisa hidup tanpa mu'),
(110, 'ASPHALT FINISHER ', 'unit/jam ', 21100000, 82, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(111, 'AIR COMPRESSOR ', 'unit/jam ', 206000, 82, 'Jangan Di Habisin Semua'),
(112, 'Piket Banjir/Kekeringan  (Koordinator) ', 'Org/ Hari ', 150000, 84, ' Piket Banjir / Kekeringan dilaksanakan oleh Tenaga  Teknis  Non PNS diluar jam kerja, termasuk hari libur. '),
(113, '< 500 ', 'Ha ', 1100000, 85, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(114, '500 s/d 750', 'Ha ', 1000000, 86, 'Ku tak bisa hidup tanpa mu'),
(115, '< 2 ', 'Ha ', 100000000, 88, 'Jangan Di Habisin Semua yahhh :D'),
(116, 'Perencanaan Pengamanan Pantai', 'km1', 160000000, 89, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(117, 'Operasi dan Pemeliharaan Jaringan Irigasi ', 'Ha ', 350000, 91, 'Jangan Di Habisin Semua'),
(118, 'Rehabilitasi Jaringan Irigasi ', 'Ha ', 12000000, 91, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(119, 'Pengadaan & Pemasangan Rambu Lalu Lintas di Jalan (uk. 75x75 cm) (buah', 'Buah', 1487868, 110, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(121, 'Pengadaan & Pemasangan LPJU Konvensional ', 'Buah', 16550166, 110, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(122, 'Pembangunan Dermaga Penyeberangan : Pekerjaan  Persiapan ', 'Paket', 1540882233, 111, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(123, 'Pembangunan Dermaga Penyeberangan Konstruksi Causeway (108.72 M2)', 'm2', 5990015, 111, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(124, 'Peningkatan Jalan KA Penggantian Bantalan Kayu Rel  R.33/38 Menjadi Bantalan Beton Rel R.42 ', 'm\'sp ', 3390559, 112, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(125, 'Pengadaan / Pembangunan Kereta Ekonomi (K3) Di  lengapi AC Tanpa Dilengkapi Fasilitas Penyandang Cac', 'Kereta', 2147483647, 112, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(126, 'Pembangunan Causeway (100 m x 5 m) t : 3m ', 'm2', 5935476, 113, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(127, 'Pembangunan Dermaga Beton Tiang Pipa Baja 480 m2 ,  (P = 60 M\' , L = 8M)', 'm2', 17766630, 113, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(128, 'Pekerjaan Pembangunan Menara Suar 40 M Di Darat (Konstruksi Baja Galvanis)', 'Paket', 2147483647, 114, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(129, 'Pekerjaan Pembangunan Rambu Suar 10 M Di Laut (Modular Pipe Beacon)', 'Paket', 957588765, 114, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(130, 'Pekerjaan Pelapisan Apron/Runway/Taxiway Dengan  Aspal Penetrasi, Tebal = 7,5 Cm (m2) ', 'm2', 214743, 115, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(131, 'Konstruksi Perkerasan Baru (Perpanjangan/Perluasan)   Dengan Beton Semen (Rigit Pavement) Tebal = 35', 'm2', 2571775, 115, 'Disusun berdasarkan Peraturan Menteri Perhubungan RI Nomor 78   Tahun 2014 tentang Standar Biaya di lingkungan Kementerian Perhubungan RI. '),
(133, 'Arsip katagori sederhana ', 'Meter linier ', 150, 119, 'Standar Biaya Satuan Pembenahan Arsip'),
(134, 'Arsip katagori kompleks ', 'Meter linier ', 350, 119, 'Standar Biaya Satuan Pembenahan Arsip'),
(135, '1. Arsip Film ke Video', 'reel ', 500, 120, 'Mini DV'),
(136, '2. Arsip Video ke VCD', 'Kaset ', 300, 120, 'Standar Biaya Pemeliharaan dan Perawatan Arsip'),
(137, 'Pembersihan penyedotan debu dan pemberian kamper pada boks arsip ', 'M3 ', 1500, 122, 'Satuan Biaya Pembersihan Arsip '),
(138, 'Jasa pembersihan pengendalian hama dan fumigasi ', 'M3 ', 37500, 122, 'Satuan Biaya Pembersihan Arsip '),
(139, 'VERIFIKASI ', 'eksemplar ', 1000, 124, 'Pengecekan bahan perpustakaan '),
(140, 'INVENTARISASI ', 'eksemplar ', 1750, 124, '1. Pemberian stempel 2. Penulisan ke dalam buku induk  '),
(141, 'VERIVIKASI DATA BIBLIOGRAFIS PASCA PENGATALOGAN DAN PENGKLASIFIKASIAN', 'judul ', 1250, 124, 'Standar biaya pengolahan bahan perpustakaan.'),
(142, 'JASA PENGGANDAAN DAN ALIH MEDIA  Pembuatan Mikrofilm/Mikrofis', 'Per rol', 1100000, 125, 'Dokumen asli'),
(143, 'Reproduksi Foto Dokumen Perpustakaan', 'Per lembar', 10000, 125, '1. Ukuran 9 x 12 R'),
(144, 'Reproduksi Foto Dokumen Perpustakaan ', 'Per lembar', 12500, 125, '2. Ukuran 12 x 20 R'),
(145, 'eproduksi Foto Dokumen Perpustakaan', 'Per lembar', 18000, 125, '3. Ukuran 20 x 25 R'),
(146, 'Pengujian Mutu Barang ', 'Sample', 50000, 208, 'Daftar Upah Tenaga Kasar dan Tenaga Bantuan Teknis Standar Pengujian Mutu Barang'),
(147, 'Pemutih (chlorin) ', 'Titrasari Iodometri ', 50000, 209, 'Standar Biaya Uji laboratorium Makanan dan Minuman '),
(148, ' Yodium (KIO3)  ', 'Titrasari Iodometri ', 50000, 209, 'Standar Biaya Uji laboratorium Makanan dan Minuman '),
(149, 'Pengawet (K.Benzoat)', 'HpLc ', 450000, 209, 'Standar Biaya Uji laboratorium Makanan dan Minuman '),
(150, 'Test kit Borax ', 'Paket', 450000, 210, 'Daftar Harga Standar Alat '),
(151, 'Test Kit Formalin ', 'Paket', 950000, 210, 'Daftar Harga Standar Alat '),
(152, 'Test Kit Halal ', 'Paket', 1300000, 210, 'Daftar Harga Standar Alat '),
(153, 'Test Kit Rhodamin', 'Paket', 380000, 210, 'Daftar Harga Standar Alat '),
(154, 'Permohonan Akreditasi', '/permohonan ', 3500000, 211, 'Jasa Akreditasi (Akreditasi KAN)'),
(155, 'Asesmen Bersama dengan  Badan Akreditasi Asing  ( Cross Frontier )', '/Orang/Hari', 2500000, 211, 'Jasa Akreditasi (Akreditasi KAN)'),
(156, 'Survailen (Paket A)', '/Paket ', 2500000, 211, 'Jasa Akreditasi (Akreditasi KAN)'),
(157, 'Sub Unit Pengembangan IKM  Logam Bandung', 'Operator Mesin', 0, 212, 'Honorarium (Sesuai UMK Kota  Bandung)'),
(158, '   Sub Unit Pengembangan  IKM  Logam Bogor', 'Operator Mesin', 0, 212, 'Honorarium (Sesuai UMK Kab. Bogor)'),
(159, 'Sub Unit Pengembangan IKM  Logam Sukabumi', 'Operator Mesin', 0, 212, 'Honorarium (Sesuai UMK Kab. Sukabumi )'),
(160, 'Sub Unit Pengembangan IKM  Persepatuan Cibaduyut ', 'Operator Mesin', 0, 212, 'Honorarium (Sesuai UMK Kota  Bandung)'),
(161, 'Pakan Komplit Layer spesifikasi kadar air  max 13.0 %; Protein 17.0-18.5%; Lemak min 4.0%; Serat Max', 'Kg', 7700, 221, 'Pengadaan Pakan Unggas.'),
(162, 'Pakan komplit Starter dan Grower spesifikasi Kadar Air Max 13.0%; Protein 21.5-23.5%; Lemak Min 5.0%', 'Kg', 10500, 221, 'Pengadaan Pakan Unggas.'),
(163, 'Dedak Halus spesifikasi Kadar Air Max 12%,ax 13%, Protein Min 10%, Serat Kasar Max 14%, Lemak Max 20', 'Kg', 3300, 221, 'Pengadaan Pakan Unggas.'),
(164, 'Feeder Kapasitas 5 kg ', 'buah', 36000, 222, 'Pengadaan Alat Alat Pertanian dan Peternakan'),
(165, 'Drinker Kapasitas 7 liter', 'buah', 36000, 222, 'Pengadaan Alat Alat Pertanian dan Peternakan'),
(166, 'Koran brooding ', 'Kg', 8400, 222, 'Pengadaan Alat Alat Pertanian dan Peternakan'),
(167, 'Keramba ternak ', 'unit', 480000, 222, 'Pengadaan Alat Alat Pertanian dan Peternakan'),
(170, 'Vaksinasi Hepatitis ', 'Orang/Tahun ', 500000, 231, 'Biaya Vaksinasi PNS dan Non PNS yang bertugas pada Pelayanan  Kesehatan yang berisiko tertular '),
(171, 'Vaksinasi Influenza', 'Orang/Tahun ', 200000, 231, 'Biaya Vaksinasi PNS dan Non PNS yang bertugas pada Pelayanan  Kesehatan yang berisiko tertular '),
(172, 'Pengajar Diklat Dari PNS Pemerintah  Daerah Provinsi Jawa Barat, ', 'Org/jam pelajaran ', 200000, 232, 'Yang Peserta Diklatnya dari Kabupaten/ Kota di Jawa Barat dan non Provinsi Jawa Barat (yang dibiayai dari APBD Kab/Kota dan Provinsi yang bersangkutan)'),
(173, 'Pengajar dari PNS Non Pemerintah  Daerah Provinsi Jawa Barat dan Non PNS ', 'Org/jam pelajaran ', 300000, 232, 'Honorarium diberikan kepada PNS Pemerintah Daerah Provinsi Jawa Barat'),
(174, 'Penceramah Kediklatan', 'Orang/Jp', 1000000, 232, 'Honorarium diberikan kepada PNS Pemerintah Daerah Provinsi Jawa Barat,'),
(175, 'Mentor ', 'Orang/Jam', 200000, 232, 'Honorarium diberikan kepada PNS Pemerintah Daerah Provinsi Jawa Barat'),
(176, 'Jasa Profesi Narasumber/ Asesor PNS Pemerintah Provinsi/ NonPNS Provinsi ', 'Orang/Jam', 1000000, 233, 'Honorarium Assesor dan Pengelola Lembaga Sertifikasi Profesi (LSP)'),
(177, 'Honor Pengelola Uji Kompetensi LSP Pemda Provinsi Jawa Barat', 'Orang/Kegiatan', 1000000, 233, 'Penanggungjawaban LSP'),
(178, 'Honor Pengelola Uji Kompetensi LSP Pemda Provinsi Jawa Barat', 'Orang/Kegiatan', 700000, 233, 'Kepala LSP '),
(179, 'Honor Pengelola Uji Kompetensi LSP Pemda Provinsi Jawa Barat', 'Orang/Kegiatan ', 500000, 233, 'Pengelola LSP ');

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
(3, 'Diatas Rp. 15 miliar s.d.  Rp. 30 miliar', '(biaya s.d Rp. 5 miliar sebelumnya) + (2% x Rp. 15 miliar) ', 'Paling tinggi  Rp. 850 juta', 850000000, 12, 'Biaya Operasional dan Pendukung untuk kegiatan pada tahapan pelaksanaan dan penyerahan hasil ditentukan berdasarkan perhitungan dimulai dari 4% (empat persen) untuk nilai ganti rugi tanah sampai dengan atau setara dengan Rp.10.000.000.000,- (sepuluh miliar rupiah) pertama dan selanjutnya dengan prosentasi menurun sebagai berikut :'),
(4, 'Dalam Kota Wilayah DKI Jakarta Lebih dari 8 (delapan) jam', 'Gol II', 'OH ', 6800000, 42, 'Satuan Biaya Uang Harian Perjalanan Dinas Luar Provinsi.'),
(5, 'Dari Wilayah Jawa Barat ke Provinsi DKI Jakarta', 'Gol I', 'OH ', 210890000, 42, 'Satuan Biaya Uang Harian Perjalanan Dinas Luar Provinsi.'),
(6, 'Kereta Api', 'Pengepakan dan Penggudangan', 'm3', 750000, 51, 'Sesuai tarif berlaku'),
(7, '--Pilih Salah Satu--', '--Pilih Salah Satu--', 'm3', 600000, 51, 'Sesuai tarif berlaku'),
(8, 'Angkutan Laut/Sungai', 'Pengangkutan', 'm3', 600000, 51, 'Sesuai tarif berlaku'),
(9, 'Bandung', 'Ambon', 'Bisnis  (Rp)', 13285000, 63, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(10, 'Jakarta', 'Ambon', 'Ekonomi (Rp) ', 7081000, 63, 'Ku tak bisa hidup tanpa mu'),
(11, 'Pick Up', 'Roda Empat', 'Orang/Paket', 850000000, 65, 'Tidak Apa Apa Kalau Tidak Masuk Juga '),
(12, 'Juru/Mantri Pengairan / Juru OP SDA', 'on', 'Org / Bulan ', 3300000, 83, 'Pranata : Aktifitas khusus (Pencatat PDA, PCH dan Stasiun Klimatologi)'),
(13, 'Air dan Limbah Cair', '', 'per paket', 1750000, 117, 'Pengambilan Contoh Parameter Kualitas Lingkungan'),
(14, 'Udara Emisi  ', 'USEPA', 'per paket', 5000000, 117, 'Pengambilan Contoh Parameter Kualitas Lingkungan');

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
(8, 'Di atas 1 Milyar', 'Orang/paket (Rp)', 4800, 4600, 4400, 4200, 'keterangan', 7),
(9, 'Besaran Uang Saku (Rp)\r\n', 'OH\r\n', 100000, 150000, 200000, 250000, 'Uang saku yang melekat pada perjalanan dinas dapat diberikan untuk mengikuti kegiatan Bimtek/ Pelatihan/\r\nSeminar/ Rapat, di luar kota maupun di luar Provinsi apabila\r\nakomodasi dan konsumsi', 41),
(10, 'Di atas 4 Miliyar', 'OH', 500000, 200000, 0, 0, 'Tidak Apa Apa Kalau Tidak Masuk Juga ', 41),
(11, 'Nanggro AcehDarusalam ', 'OH', 360, 420, 480, 540, 'Visum/penandatangan   perjalanan   dinas   dilakukan di \ntempat yang dituju/yang dikunjungi.\n', 43),
(12, 'Sumatera\nUtara ', 'OH', 370, 440, 510, 580, 'Visum/penandatangan   perjalanan   dinas   dilakukan di \ntempat yang dituju/yang dikunjungi.\n', 43),
(13, 'Amerika Serikat ', 'Amerika Serikat ', 578, 513, 440, 382, 'Satuan biaya uang harian perjalanan dinas luar negeri merupakan\npenggantian biaya keperluan sehari-hari Pegawai Aparatur Sipil\nNegara dalam menjalankan perintah perjalanan dinas di luar negeri\nyang da', 48),
(14, 'Amerika Selatan ', 'Argentina ', 534, 402, 351, 349, 'Satuan biaya uang harian perjalanan dinas luar negeri merupakan\npenggantian biaya keperluan sehari-hari Pegawai Aparatur Sipil\nNegara dalam menjalankan perintah perjalanan dinas di luar negeri\nyang da', 48),
(15, 'Amerika Tengah ', 'Mexico ', 493, 366, 324, 323, 'Satuan biaya uang harian perjalanan dinas luar negeri merupakan\npenggantian biaya keperluan sehari-hari Pegawai Aparatur Sipil\nNegara dalam menjalankan perintah perjalanan dinas di luar negeri\nyang da', 48),
(16, 'RUTIN (NON  STRUKTURAL) ', '', 56507000, 52500140, 52500140, 52500140, 'Ku tak bisa hidup tanpa mu\\', 77),
(17, 'Dokter Sub Spesialis', '/Kunjungan', 6000000, 1200000, 2000000, 3000000, 'Biaya Tenaga  Pelayanan Kesehatan di Unit Pelayanan Teknis (UPT)/Balai  Dinas Kesehatan yang melakukan Pelayanan Kesehatan ', 227),
(18, 'Dokter Spesialis  (Status Definitif) Medis Dasar ', '/Kunjungan', 5000000, 1000000, 1500000, 2500000, 'Biaya Tenaga  Pelayanan Kesehatan di Unit Pelayanan Teknis (UPT)/Balai  Dinas Kesehatan yang melakukan Pelayanan Kesehatan', 227),
(19, 'Dokter Spesialis  (Status Definitif) Medis Penunjang ', '/Kunjungan', 4000000, 300000, 1000000, 2000000, 'Biaya Tenaga  Pelayanan Kesehatan di Unit Pelayanan Teknis (UPT)/Balai  Dinas Kesehatan yang melakukan Pelayanan Kesehatan', 227),
(20, 'Dokter Umum/  Dokter Gigi', '/Bulan', 3000000, 2500000, 1000000, 1500000, 'Biaya Tenaga  Pelayanan Kesehatan di Unit Pelayanan Teknis (UPT)/Balai  Dinas Kesehatan yang melakukan Pelayanan Kesehatan', 227),
(21, 'Dokter Spesialis ', 'Rupiah', 5000000, 7850000, 0, 12850000, 'Biaya Tenaga Pelayanan Kesehatan di RSUD Kabupaten/Kota dan  Puskesmas/Desa di Daerah Terpencil, sangat Terpencil atau Tidak diminati', 228),
(22, 'Dokter Umum/Dokter Gigi ', 'Rupiah', 4000000, 3350000, 2500000, 9850000, 'Biaya Tenaga Pelayanan Kesehatan di RSUD Kabupaten/Kota dan  Puskesmas/Desa di Daerah Terpencil, sangat Terpencil atau Tidak diminati', 228),
(23, 'Bidan/Perawat ', 'Rupiah', 2500000, 1700000, 1000000, 5200000, 'Biaya Tenaga Pelayanan Kesehatan di RSUD Kabupaten/Kota dan  Puskesmas/Desa di Daerah Terpencil, sangat Terpencil atau Tidak diminati', 228),
(24, 'Tenaga Kesehatan  lainnya', 'Rupiah', 2500000, 1700000, 1000000, 5200000, 'Biaya Tenaga Pelayanan Kesehatan di RSUD Kabupaten/Kota dan  Puskesmas/Desa di Daerah Terpencil, sangat Terpencil atau Tidak diminati', 228),
(25, 'Kontribusi (diselenggarakan bukan oleh Provinsi Jawa Barat)', 'APBN ', 0, 30261000, 22125000, 20230000, 'Biaya Diklat Pim I (Rp.) Sesuai APBN', 235),
(26, 'Uang saku Diklat selama on campus', 'Sesuai lokasi diklat  ', 0, 0, 0, 0, 'Semua Biaya Diklat Pim Sesuai Lokasi Diklat', 235),
(27, 'Penggantian ATK,penjilidan dan Fotocopy ', '', 2000000, 1500000, 750000, 500000, 'Pendidikan dan Pelatihan Kepemimpinan', 235),
(28, 'Pendukung Benchmarking', '', 12000000, 75000000, 30000000, 20000000, 'Pendidikan dan Pelatihan Kepemimpinan', 235),
(29, 'Kontribusi ', 'Sesuai surat undangan dari penyelengga', 0, 0, 0, 0, 'Sesuai surat undangan dari penyelengga', 237),
(30, 'Uang harian diklat', 'Dialokasikan pada belanja Perjalanan Dinas Dalam Daerah maupun luar daerah (dianggarkan di OPD)', 0, 0, 0, 0, 'Dialokasikan pada belanja Perjalanan Dinas Dalam Daerah maupun luar daerah (dianggarkan di OPD)', 237),
(31, 'Kontribusi', 'Sesuai surat undangan dar penyelenggara', 0, 0, 0, 0, 'Maksimum  Rp.10.000.000 ', 238),
(32, 'Uang harian ', 'Dialokasikan pada belanja Perjalanan Dinas Dalam  Daerah maupun luar daerah (dianggarkan di OPD)', 0, 0, 0, 0, 'Dialokasikan pada belanja Perjalanan Dinas Dalam  Daerah maupun luar daerah (dianggarkan di OPD)', 238),
(33, 'Biaya Pendaftaran dan Seleksi masuk Perguruan Tinggi ', 'Sesuai Pengeluaran ', 0, 0, 0, 0, 'Bukti pengeluaran dari  Perguruan  Tinggi', 240),
(34, 'Dana Pembangunan/  Pengembangan', 'Sesuai Pengeluaran ', 0, 0, 0, 0, 'Bukti pengeluaran dari  Perguruan  Tinggi', 240),
(35, 'Biaya SPP ', 'Sesuai Pengeluaran', 0, 0, 0, 0, 'Bukti pengeluaran dari  Perguruan  Tinggi', 240),
(36, 'Tunjangan Buku dan Referensi', '/ semester ', 750000, 1000000, 1500000, 2000000, 'Untuk Dokter Spesialis/Sub Spesialis (proposal) dan untuk S3 sesuai dgn kebutuhan ', 240);

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

--
-- Dumping data for table `detail5`
--

INSERT INTO `detail5` (`id`, `nama1`, `nama2`, `nilai1`, `nilai2`, `nilai3`, `nilai4`, `nilai5`, `keterangan`, `kategori_id`) VALUES
(1, 'Kota Bogor', 'Satuan Biaya Penginapan(Rp) ', 3664, 1753, 949, 515, 463, 'Biaya penginapan dibayarkan sesuai dengan biaya riil', 52),
(2, 'Kota Cimahi ', 'Satuan Biaya Penginapan\n(Rp) ', 2000, 1200, 750, 450, 350, 'Biaya penginapan dibayarkan sesuai dengan biaya riil', 52),
(3, 'Nangro Aceh Darusalam', 'Satuan Biaya Penginapan(Rp) ', 4420, 1625, 1063, 546, 546, 'Biaya penginapan dibayarkan sesuai dengan biaya riil', 53),
(4, 'Sumatera Utara ', 'Satuan Biaya Penginapan\n(Rp) ', 4960, 1518, 879, 510, 546, 'Biaya penginapan dibayarkan sesuai dengan biaya riil', 53),
(5, '< 20 ', 'Orang/Paket (Rp)', 37000000, 34000000, 26000000, 19000000, 15500000, 'Ku tak bisa hidup tanpa mu', 87);

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
  `nama5` varchar(300) NOT NULL,
  `nilai` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail6`
--

INSERT INTO `detail6` (`id`, `nama1`, `nama2`, `nama3`, `nama4`, `nama5`, `nilai`, `keterangan`, `kategori_id`) VALUES
(1, 'Gubernur, Wakil Gubernur, Ketua/WakilKetua/Anggota Komisi,Pejabat Eselon I, sertapejabat lainnya', 'Bisnis', 'IB', 'Spesial/Eksekutif', 'Riil Cost', 0, 'Fasilitas Transport Bagi Pelaksana Surat Perjalanan Dinas (SPD)dan Keluarga, berdasarkan Peraturan Menteri Keuangan RI Nomor113/PMK.05/2012 tentang Perjalanan Dinas Jabatan DalamNegeri bagi Pejabat', 50),
(2, 'Pejabat Negara lainnya,\nPejabat Eselon II, dan\npejabat lainnya yang\ndisetarakan ', 'Ekonomi', 'Kelas\nI B ', 'Eksekutf ', 'Riil Cost', 0, 'Fasilitas Transport Bagi Pelaksana Surat Perjalanan Dinas (SPD)\ndan Keluarga, berdasarkan Peraturan Menteri Keuangan RI Nomor\n113/PMK.05/2012 tentang Perjalanan Dinas Jabatan Dalam\nNegeri bagi Pejabat', 50),
(3, 'Pejabat Eselon III/PNS\nGolongan IV, Pejabat\nEselonIV/PNS Golongan\nIII, PNS Golongan II dan I', 'Ekonomi', 'Kelas\nIIA ', 'Eksekutf ', 'Riil Cost', 0, 'Fasilitas Transport Bagi Pelaksana Surat Perjalanan Dinas (SPD)\ndan Keluarga, berdasarkan Peraturan Menteri Keuangan RI Nomor\n113/PMK.05/2012 tentang Perjalanan Dinas Jabatan Dalam\nNegeri bagi Pejabat', 50),
(4, 'Tenaga\nTeknis/\nPengemudi ', 'orang/hari\n(Rp) ', 'Dalam Provinsi', 'Golongan II', '', 340, 'Tenaga Teknis yang melakukan perjalanan dinas dalam rangka\nmembantu tugas PNS dapat diberikan Uang Harian sesuai dengan\nTabel 2.53 ', 55),
(5, 'PNS NonProvinsi  danNon PNS ', 'SMP/SD', 'Luar Provinsi (Jakarta, Banten)', 'PNS NonProvinsi  danNon PNS ', '', 340, 'Tenaga Teknis yang melakukan perjalanan dinas dalam rangkamembantu tugas PNS dapat diberikan Uang Harian sesuai denganTabel 2.53 ', 55),
(6, 'Gol IV', 'Perwira Pertama', 'Prajurit Dua / Kelasi Dua', 'Bhayangkara Dua', '', 0, 'Dasar Penyetaraan TNI yaitu Peraturan Pemerintah No 35 Tahun2014 tentang Perubahan Kesepuluh atas Peraturan PemerintahNomor 28 Tahun 2001 Tentang Peraturan Gaji Anggota TentaraNasional Indonesia.', 56),
(7, 'Golongan II ', 'Bintara', 'Sersan Dua', 'Brigadir Polisi Dua', '', 0, 'Dasar Penyetaraan TNI yaitu Peraturan Pemerintah No 35 Tahun\n2014 tentang Perubahan Kesepuluh atas Peraturan Pemerintah\nNomor 28 Tahun 2001 Tentang Peraturan Gaji Anggota Tentara\nNasional Indonesia.', 56),
(8, 'Golongan III', 'Perwira Pertama ', 'Letnan Dua', 'Inspektur Polisi Dua', '', 0, 'Dasar Penyetaraan TNI yaitu Peraturan Pemerintah No 35 Tahun\n2014 tentang Perubahan Kesepuluh atas Peraturan Pemerintah\nNomor 28 Tahun 2001 Tentang Peraturan Gaji Anggota Tentara\nNasional Indonesia.', 56),
(9, 'Ahli Muda', 'S1', '1 Tahun', 'OB', '', 16479100, 'Jangan Di Habisin Semua', 92),
(10, 'Ahli Madya', 'S1', '5 Tahun', 'OB\\', '', 22024200, 'Ku tak bisa hidup tanpa mu', 92),
(11, 'CAD/CAM Operator ', 'D3', ' (5-10 Tahun)', 'OB', '', 7765500, 'Tenaga sub  Profesional jasa  konsultansi  ', 93),
(12, 'Software  Programmer/ Implementer ', 'S1', '0-1 Tahun', 'OB', '', 9185000, 'Tenaga sub  Profesional jasa  konsultansi  ', 93);

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

--
-- Dumping data for table `detail7`
--

INSERT INTO `detail7` (`id`, `nama`, `nilai1`, `nilai2`, `nilai3`, `nilai4`, `nilai5`, `nilai6`, `nilai7`, `keterangan`, `kategori_id`) VALUES
(1, 'Kota Bekasi ', 4233000, 5927000, 3118000, 4364000, 2955000, 3547000, 3547000, 'Pedoman Harga Satuan Per Meter Persegi Tertinggi Bangunan Gedung Pemerintah dan Rumah Dinas', 101),
(2, 'Kota  Bogor ', 4154000, 5816000, 3077000, 4309000, 2961000, 3554000, 3554000, 'Pedoman Harga Satuan Per Meter Persegi Tertinggi Bangunan Gedung Pemerintah dan Rumah Dinas', 101);

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

--
-- Dumping data for table `detail8`
--

INSERT INTO `detail8` (`id`, `nama`, `float1`, `float2`, `float3`, `keterangan`, `kategori_id`) VALUES
(1, 'Pelaksanaan Fisik  Perencanaan ', 7.5, 7.75, 8.5, 'Sub Bidang Proyek Untuk Kegiatan Perumahan Kota (PLPK)/ Bidang Permukiman ', 106),
(2, 'Pelaksanaan Konstruksi ', 86, 86, 86.5, 'Sub Bidang Proyek Untuk Kegiatan Perumahan Kota (PLPK)/ Bidang Permukiman ', 106),
(3, 'Pelaksanaan Fisik Perencanaan', 7.5, 7.75, 8.5, 'Sub Bidang Untuk Kegiatan Perumahan Kota (PLPK)/  Bidang Permukiman ', 107),
(4, 'Biaya Pengelolaan ', 6.5, 6.25, 5, 'Sub Bidang Untuk Kegiatan Perumahan Kota (PLPK)/  Bidang Permukiman ', 107);

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
(21, 'Kab. Indramayu', 'Kota Bandung', 32, 43, 'Daftar Penggunaan BBM untuk Perjalanan Dinas Dalam Daerah dan Perjalanan Dinas dari/ke DKI Jakarta ', 39),
(22, 'Pejabat Eselon II ', 'OH ', 200, 100, 'Pejabat Eselon II ', 46),
(23, 'Tenaga Teknis', 'Orang/Paket (Rp)', 900000, 500000, 'Ku tak bisa hidup tanpa mu', 59),
(24, 'Gedung Pertemuan', 'Hari', 50000000, 15000000, 'Ku tak bisa hidup tanpa mu', 61),
(25, 'Lapang Olah Raga', 'Hari/bulan', 500000, 5000000, 'Tidak Apa Apa Kalau Tidak Masuk Juga ', 61),
(26, 'Pondasi ', '', 6, 10, 'Prosentase Komponen Pekerjaan Bangunan J', 108),
(27, 'Struktur ', '', 25, 35, 'Prosentase Komponen Pekerjaan Bangunan', 108),
(28, 'Dinding ', '', 10, 15, 'Prosentase Komponen Pekerjaan Rumah Negara ', 109),
(29, 'Plafond ', '', 8, 10, 'Prosentase Komponen Pekerjaan Rumah Negara ', 109),
(30, 'Fasilitator/Kader Lingkungan', 'HOK  ', 500000, 1000000, 'Tenaga Fasilitator adalah personil yang memfasilitasi dan membina kader  lingkungan yang berada di Desa/Kelurahan.', 118),
(31, 'Tenaga Pemantau/Patroli  Sungai Berbasis Masyarakat', 'OB', 2600000, 2900000, 'Tenaga Pemantau/Patroli sungai adalah personil yang melaksanakan  pemantauan pencemaran sungai dari usaha atau kegiatan yang menghasilkan limbah (limbah domestik, limbah industri).', 118),
(32, 'Budayawan', 'Orang/Kegiatan', 2500000, 10000000, 'Tenaga Khusus BudPar', 205),
(33, 'Sastrawan', 'Orang/Kegiatan', 2500000, 7500000, 'Tenaga Khusus', 205),
(34, 'Jakarta', 'm2', 2000000, 3500000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 213),
(35, 'Bandung (area Jawa Barat)', 'm2', 2000000, 2500000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 213),
(36, 'Provinsi Lain di Indonesia', 'm2 ', 2000000, 3500000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 213),
(37, 'Wilayah ASEAN', 'm2', 2250000, 4000000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 214),
(38, 'Wilayah Asia Timur', 'm2', 2500000, 4000000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 214),
(39, 'Wilayah Asia Selatan', 'm2', 2500000, 4000000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 214),
(40, 'Wilayah Afrika dan Timur Tengah', 'm2', 3000000, 4000000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 214),
(41, 'Jakarta', 'm2', 3000000, 4000000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 215),
(42, 'Bandung (area Jawa Barat)', 'm2', 1000000, 2000000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 215),
(43, 'Provinsi Lain di Indonesia', 'm2', 3500000, 4000000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 215),
(44, 'Wilayah ASEAN', 'm2', 2250000, 4000000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 216),
(45, 'Wilayah Asia Timur', 'm2', 2500000, 4000000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 216),
(46, 'Wilayah Asia Selatan', 'm2', 2500000, 4000000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 216),
(47, 'Wilayah Afrika dan Timur Tengah', 'm2', 2750000, 4000000, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 216),
(48, 'Wilayah ASEAN', 'm2', 1000000, 1000000, 'Sewa Tempat di Hotel Luar Negeri Guna Kegiatan Temu Bisnis', 217),
(49, 'Wilayah Asia Timur', 'm2', 1000000, 1000000, 'Sewa Tempat di Hotel Luar Negeri Guna Kegiatan Temu Bisnis', 217),
(50, 'Wilayah Asia Selatan', 'm2', 1000000, 1000000, 'Sewa Tempat di Hotel Luar Negeri Guna Kegiatan Temu Bisnis', 217),
(51, 'Wilayah Afrika dan Timur Tengah', 'm2', 1500000, 1500000, 'Sewa Tempat di Hotel Luar Negeri Guna Kegiatan Temu Bisnis', 217),
(52, 'Wilayah ASEAN', 'Orang', 250000, 250000, 'Konsumsi Kegiatan Temu Bisnis di Luar Negeri', 218),
(53, 'Wilayah Asia Timur', 'Orang', 300000, 300000, 'Konsumsi Kegiatan Temu Bisnis di Luar Negeri', 218),
(54, 'Wilayah Asia Selatan', 'Orang', 300000, 300000, 'Konsumsi Kegiatan Temu Bisnis di Luar Negeri', 218),
(55, 'Wilayah Afrika dan Timur Tengah', 'Orang', 300000, 300000, 'Konsumsi Kegiatan Temu Bisnis di Luar Negeri', 218),
(56, 'Sewa Tenda Dome', 'm2/hari', 0, 0, 'Harga Sesuai standar biaya umum', 219),
(57, 'Sewa Meja Kursi', 'set/hari', 0, 0, 'Harga Sesuai standar biaya umum', 219),
(58, 'Flooring dan Karpet', 'm2/hari', 0, 0, 'Harga Sesuai standar biaya umum', 219),
(59, 'Sewa Genset', 'buah/hari', 0, 0, 'Harga Sesuai standar biaya umum', 219),
(60, 'Dokter Residen ', 'Penempatan dan  Pemulangan ', 10000000, 25000000, 'Biaya Tenaga Dokter Residen di Rumah Sakit Rujukan Regional   Provinsi Jawa Barat', 229),
(61, 'Kontribusi ', 'Sesuai surat undangan dari penyelenggara ', 0, 0, 'Biaya Tenaga Ahli dan Tenaga Terampil Sesuai surat Undangan', 236),
(62, 'Uang  saku diklat', 'Sesuai dengan Peraturan Menteri Keuangan yang berlaku', 0, 0, 'Biaya Tenaga Ahli dan Tenaga Terampil Sesuai Peraturan Menteri Keungan', 236),
(63, 'Kontribusi', 'Sesuai surat undangan dari penyelenggar', 0, 0, 'Maksimum Rp.50.000.000 ', 239),
(64, 'Biaya Paspor Dinas ', 'Sesuai pengeluaran ', 0, 0, 'Sesuai dengan Permenkeu tentang Standar Biaya Masukan Tahun Berjalan', 239),
(65, 'Biaya Visa ', 'Sesuai Pengeluaran', 0, 0, 'Sesuai dengan Permenkeu tentang Standar Biaya Masukan Tahun Berjalan ', 239),
(66, 'Uang saku, transport lokal, penginapan dan  Konsums', '', 0, 0, 'Sesuai dengan Permenkeu tentang Standar Biaya Masukan Tahun Berjalan', 239),
(67, 'Biaya Formulir Pendaftaran dan Seleksi', 'Sesuai Pengeluaran', 0, 0, 'Bukti Pengeluaran dari Perguruan Tinggi ', 241),
(68, 'Tunjangan Buku dan Referensi', '/ semester ', 5000000, 10000000, 'Pendidikan Lanjutan Luar Negeri', 241),
(69, 'ATK dan Foto Copy ', '/ semester ', 2000000, 3000000, 'Pendidikan Lanjutan Luar Negeri', 241),
(70, 'Tunjangan Wisuda', '/Orang', 5000000, 5000000, 'Bukti Pengeluaran dari Perguruan Tinggi ', 241);

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
(18, 'Pejabat Eselon III ke\nbawah ', 'OP', 331000, 639002, 1914002, 'Satuan biaya paket halfday disediakan untuk paket kegiatan \nrapat/pertemuan yang dilakukan di luar kantor selama setengah hari\nminimal 5 (lima) jam. ', 29),
(19, 'Amerika Selatan', 'Chicago', 12773, 6891, 3662, 'Jangan Di Habisin Semua', 64),
(20, 'Amerika Selatan', 'Bogota', 18399, 9426, 7713, 'Dihitung berdasarkan waktu pelaksanaan pekerjaan konstruksi ', 64),
(21, 'Upah  Kerja Pembongkaran /  Pembersihan Gulma', 'HOK', 80, 0, 0, 'Harga dan Jumlah adalah (PM)', 223),
(22, 'Bibit  Rumput ', 'Stek/ Pols', 20000, 250, 5000000, 'Bahan-Bahan', 223),
(23, 'Upah  Kerja  Pembuatan  Petakan/ Lobang Tanaman ', 'HOK', 30, 0, 0, 'Harga dan Jumlah adalah (PM)', 223),
(24, 'Kapur  Pertanian ', ' Kg', 1000, 750, 750000, 'bahan-Bahan', 223),
(25, 'Upah  Kerja Pembongkaran/  Pembersihan Gulma (6 Kali/Tahun) ', 'HOK', 60, 0, 0, 'Harga dan Jumlah adalah (PM)', 224),
(26, 'Pupuk  Organik/ Kandang (2  kali/Tahun)', 'Kg', 40000, 500, 20000000, 'Bahan-Bahan', 224),
(27, 'Pupuk  Urea (6 kali/ Tahun) ', 'kg', 1200, 8000, 9600000, 'Bahan-bahan', 224),
(28, 'Upah Kerja  Penyiangan/ Penggemburan Tanah (2 kali/Tahun) ', 'HOK', 400, 0, 0, 'Harga dan Jumlah adalah (PM)', 224),
(29, 'Dokter Sub Spesialis ', '/hari Kunjungan', 800000, 6000000, 5000000, 'Biaya Tenaga  Pelayanan Kesehatan di Rumah Sakit Provinsi  ', 226),
(30, 'Dokter Spesialis Jiwa ', '/Hari Kunjungan', 750000, 5000000, 4650000, 'Biaya Tenaga  Pelayanan Kesehatan di Rumah Sakit Provinsi  ', 226),
(32, 'Dokter Spesialis Medis Dasar ', '/Kunjungan', 500000, 5000000, 2500000, 'Biaya Tenaga  Pelayanan Kesehatan di Rumah Sakit Provinsi  ', 226),
(33, 'Dokter Spesialis  Medis Penunjang', '/Kunjungan', 500000, 4000000, 2500000, 'Biaya Tenaga  Pelayanan Kesehatan di Rumah Sakit Provinsi  ', 226);

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

--
-- Dumping data for table `detail11`
--

INSERT INTO `detail11` (`id`, `nama1`, `nama2`, `nama3`, `nilai1`, `nilai2`, `keterangan`, `kategori_id`) VALUES
(0, 'S2', '2000-2010', 'Orang/Paket', 900000, 800000, 'Tidak Apa Apa Kalau Tidak Masuk Juga ', 60),
(1, 'Gubernur, \nWakil\n Gubernur \ndan\n Sekretaris \nDaerah ', 'Kab/Kota \ndalam Provinsi ', 'OH ', 1250, 1500, 'uang representasi Gubernur,\nWakil Gubernur dan Sekretaris Daerah', 44),
(2, 'Gubernur, Wakil Gubernur dan Sekretaris Daerah ', 'Selain Provinsi DKI Jakarta dan Provinsi Banten', 'Provinsi DKI Jakarta dan Provinsi Banten', 1500, 1500, 'uang representasi Gubernur,Wakil Gubernur dan Sekretaris Daerah', 44),
(3, 'Ketua \nDPRD', 'Kab/Kota  \ndalam Provinsi', 'OH ', 1250, 1500, 'uang representasi Ketua \nDPRD, Wakil Ketua DPRD dan Anggota DPRD \nWakil Gubernur dan Sekretaris Daerah', 45),
(4, 'Wakil \nKetua\nDPRD \n', 'Provinsi DKI Jakarta \ndan Provinsi Banten\n', 'OH ', 1500, 1000, 'uang representasi Ketua \nDPRD, Wakil Ketua DPRD dan Anggota DPRD \nWakil Gubernur dan Sekretaris Daerah', 45),
(5, 'Anggota\nDPRD', 'Provinsi selain Provinsi\n DKI Jakarta dan\nProvinsi Banten ', 'OH ', 2000, 500, 'uang representasi Ketua \nDPRD, Wakil Ketua DPRD dan Anggota DPRD \nWakil Gubernur dan Sekretaris Daerah', 45);

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

--
-- Dumping data for table `detail14`
--

INSERT INTO `detail14` (`id`, `nama1`, `nilai1`, `nilai2`, `nilai3`, `keterangan`, `kategori_id`) VALUES
(1, 'Dokter Hewan Ahli/Pakar', 0, 8000000, 0, 'Biaya Tenaga Pelayanan Kesehatan Hewan di Rumah Sakit Hewan  Jawa Barat. ', 220),
(2, 'Dokter Hewan ', 3000000, 1750000, 0, 'Biaya Tenaga Pelayanan Kesehatan Hewan di Rumah Sakit Hewan   Jawa Barat. ', 220),
(3, 'Paramedik Veteriner (D3)', 2500000, 1250000, 0, 'Biaya Tenaga Pelayanan Kesehatan Hewan di Rumah Sakit Hewan       Jawa Barat.', 220),
(4, 'Riset-edukasi (Re) Seminar Tugas  Akhir/Skripsi/Tesis/  Disertasi dan Ujian Akhir Pendidikan ', 7500000, 17500000, 25000000, 'Dianggarkan oleh BKD Prov.  Jabar', 242),
(5, 'Riset Aplikasi', 0, 0, 0, 'Proposal (Maksimal 100.000.000)', 242);

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
(4, 'Mini Bus/Pick Up ', 350000, 'Khusus Kendaraan Dinas Pelayanan/Operasional Rumah Tangga \nSetda dan Rumah Tangga Pimpinan yang melaksanakan kegiatan luar\ndaerah/dalam daerah diberikan tambahan biaya BBM berpedoman\npada analisa kebu', 32),
(5, 'Biaya Permohonan Akreditasi ', 3500000, 'biaya pendaftaran ke KAN', 230),
(6, 'Assessment Paket A', 12500000, '/Paket', 230),
(7, 'Assessment Paket B', 15500000, '/Paket', 230),
(8, 'Witness/Saksi Penilai ', 2500000, '/Orang', 230),
(9, 'Kontribusi ', 0, 'BIAYA APBN ', 234),
(10, 'Uang saku ', 160000, 'Biaya Pendidikan Pelatihan, Pendidikan Lanjutan Dan Riset-edukasi (Re)', 234),
(11, 'Penggantian ATK, penjilidan dan Fotocopy ', 2000000, 'Biaya Pendidikan Pelatihan, Pendidikan Lanjutan Dan Riset-edukasi (Re)', 234);

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
(41, 'R', 41),
(42, 'R', 42),
(43, 'R', 43),
(44, 'R', 44),
(45, 'R', 45),
(46, 'R', 46),
(47, 'R', 47),
(48, 'R', 48),
(49, 'R', 49),
(50, 'R', 50),
(51, 'R', 51),
(52, 'S', 52),
(53, 'S', 53),
(54, 'T', 54),
(55, 'U', 55),
(56, 'V', 56),
(57, 'X', 57),
(58, 'Z', 58),
(59, 'AA', 59),
(60, 'BB', 60),
(61, 'A (Estimasi)', 61),
(62, 'B (Estimasi)', 62),
(63, 'C (Estimasi)', 63),
(64, 'D (Estimasi)', 64),
(65, 'E (Estimasi)', 65),
(66, '(Tabel 1.1) HARGA SATUAN KEGIATAN PENINGKATAN JALAN (HOTMIX)', 66),
(67, '(Tebel 1.2) HARGA SATUAN KEGIATAN PENINGKATAN JALAN (BETON)', 66),
(68, '(Tabel 1.3) HARGA SATUAN KEGIATAN REHABILITASI/PEMELIHARAAN BERKALA (HOTMIX) ', 66),
(69, '(Tabel 1.4) HARGA SATUAN KEGIATAN PEMELIHARAAN RUTIN', 66),
(70, '(Tabel 1.5) HARGA SATUAN KEGIATAN PEMELIHARAAN RUTIN* ', 66),
(71, '(Tabel 1.6) HARGA SATUAN KEGIATAN PEMBANGUNAN JALAN BARU (HOTMIX) ', 66),
(72, '(Tabel 1.7) HARGA SATUAN KEGIATAN PEMBANGUNAN JALAN BARU (BETON) ', 66),
(73, '(Tabel 1.8) HARGA SATUAN KEGIATAN BAHU DIPERKERAS(BETON) ', 66),
(74, '(Tabel 1.9) HARGA SATUAN KEGIATAN PELEBARAN JALAN (BETON) ', 66),
(75, '(Tabel 1.10) HARGA SATUAN KEGIATAN PELEBARAN JALAN (AGREGAT) ', 66),
(76, '(Tabel 1.11) HARGA SATUAN KEGIATAN REKONSTRUKSI JALAN (HOTMIX)', 66),
(77, '(Tabel 1.12) HARGA SATUAN DASAR MINIMAL PENANGANAN JEMBATAN', 66),
(78, '(Tabel 1.13) HARGA SATUAN KEGIATAN NON-FISIK ', 67),
(79, '(Tabel 1.14) Standar Kegiatan Pekerjaan Fisik Perencanaan  Teknis Peningkatan ', 68),
(80, '(Tabel 1.15) Standar Kegiatan Pekerjaan Fisik ', 69),
(81, '(Tabel 1.16) Pembangunan DAM, Irigasi, Check DAM, Pengamanan \r\nSungai, Jalan, Jembatan, Peningkatan ', 70),
(82, '(Tabel 1.17) HARGA SEWA ALAT / KENDARAAN ', 71),
(83, '(Tabel 2.1) Honorarium Tenaga Teknis  Non PNS Khusus Bidang SDA', 72),
(84, '(Tabel 2.2) Besaran Uang Saku Tenaga Teknis Non PNS  Piket Banjir/Kekeringan ', 73),
(85, '(Tabel 2.3) Pengukuran dan Perencanaan Rehabilitasi Irigasi (Pedataran) ', 74),
(86, '(Tabel 2.4) Pengukuran dan Perencanaan Rehabilitasi Irigasi (Pegunungan) ', 74),
(87, '(Tabel 2.5) Pengukuran dan Perencanaan Sungai/Drainase', 75),
(88, '(Tabel 2.6) Pengukuran dan Perencanaan Situ ', 76),
(89, '(Tabel 2.7) Pengukuran dan Perencanaan Pengamanan Pantai dan Perbaikan Muara Sungai ', 77),
(90, '(Tabel 2.8) Biaya Penyelidikan Lapangan & Pengujian Laboratorium Geoteknik ', 79),
(91, '(Tabel 2.9) Bi aya Pengel ol aan Jari ngan Irigasi', 80),
(92, '(Tabel 3.1) Tenaga Ahli Berdasarkan Pengalaman dan Sertifikasi ', 81),
(93, '(Tabel 3.2) Tenaga sub  Profesional jasa  konsultansi\r\n ', 82),
(94, '(Tabel 3.3) Tenaga pendukung jasa konsultansi ', 83),
(95, '(Tabel 3.4) Biaya Langsung Non Personil \r\nUntuk Jenis Pengeluaran Reimbursable', 84),
(96, '(Tabel 3.5) Biaya Langsung Non Personil Untuk Jenis Pengeluaran Fixed Unit Rate ', 85),
(97, '(Tabel 3.6) Daftar Harga  Standar Upah  Pekerja Jasa Konstruksi ', 86),
(98, '(Tabel 3.7) Prosentase Komponen Biaya Pembangunan Bangunan Gedung Negara Klasifikasi Sederhana ', 87),
(99, '(Tabel 3.7) Prosentase Komponen Biaya Pembangunan Bangunan Gedung Negara Klasifikasi Tidak Sederhana', 88),
(100, '(Tabel 3.9) Prosentase Komponen Biaya Pembangunan Bangunan Gedung Negara Khusus', 89),
(101, '(Tabel 3.10) Pedoman Harga Satuan Per Meter Persegi Tertinggi Bangunan  \r\nGedung Pemerintah dan Ruma', 90),
(102, '(Tabel 3.11) Pedoman Harga Satuan Per Meter Tertinggi Bangunan Pagar\r\n', 91),
(103, '(Tabel 3.12) Standar Kegiatan Pekerjaan Fisik Pembangunan Fisik Air Bersih ', 92),
(104, '(Tabel 3.13) Standar Kegiatan Pekerjaan Fisik Perencanaan Teknis Sistem Air Bersih ', 93),
(105, '(Tabel 3.14) Standar Kegiatan Pekerjaan Fisik Bidang Penyehatan Lingkungan ', 94),
(106, '(Tabel 3.15) Sub Bidang Proyek Untuk Kegiatan Perumahan Kota (PLPK)/Bidang Permukiman ', 95),
(107, 'Sub Bidang Untuk Kegiatan Perumahan Kota (PLPK)/ \r\nBidang Permukiman ', 96),
(108, 'Prosentase Komponen Pekerjaan Bangunan\r\n', 97),
(109, 'Prosentase Komponen Pekerjaan Rumah Negara ', 97),
(110, 'BIDANG FASILITAS KESELAMATAN TRANSPORTASI\r\nJALAN', 98),
(111, 'BIDANG PRASARANA PENYEBERANGAN ', 98),
(112, 'BIDANG PERKERETAAPIAN ', 98),
(113, 'BIDANG PELABUHAN DAN PENGERUKAN ', 98),
(114, 'BIDANG SARANA BANTU NAVIGASI PELAYARAN', 98),
(115, 'BIDANG BANDAR UDARA DAN FASILITAS \r\nPENUNJANGNYA\r\n', 98),
(116, '(Tabel 5.1) Pengujian Parameter Kualitas Lingkungan \r\n', 99),
(117, '(Tabel 5.2) Pengambilan Contoh Parameter Kualitas Lingkungan\r\n', 99),
(118, '(Tabel 5.3) Honorarium Tenaga Non PNS yang bertugas sebagai Fasilitator Lingkungan\r\ndan Tenaga Peman', 99),
(119, 'Standar Biaya Satuan Pembenahan Arsip\r\n', 100),
(120, 'Standar Biaya Pemeliharaan dan Perawatan Arsip\r\n', 101),
(121, 'Satuan Biaya Reproduksi dan Transkripsi', 102),
(122, 'Satuan Biaya Pembersihan Arsip ', 103),
(123, 'Satuan Biaya Jasa Penerjemahan Arsip ', 104),
(124, 'Standar biaya pengolahan bahan perpustakaan.\r\n', 105),
(125, 'Standar biaya jasa perpustakaan ', 106),
(126, 'Rehabilitasi\r\nTahun I ', 107),
(127, 'Rehabilitasi\r\nTahun II', 107),
(128, 'Rehabilitasi\r\nTahun III', 107),
(129, 'Penanaman Baru\r\nTahun 0 ', 108),
(130, 'P I (Penanaman)\r\n', 108),
(131, 'P II\r\n', 108),
(132, 'P III\r\n', 108),
(133, 'Penanaman \r\nTahun 0 ', 109),
(134, 'Pemeliharaan Tahun  I ( 650 pohon per Ha) \r\n ', 109),
(135, 'Pemeliharaan saluran air 40 m per HOK\r\nTahun   II ( 630 pohon per Ha)\r\n', 109),
(136, 'Pemeliharaan saluran air 40 m per HOK\r\nTahun  III  (620 pohon per Ha)\r\n', 109),
(137, 'Tahun  IV  (600 pohon per Ha) dst.', 109),
(138, 'PERSIAPAN LAHAN ', 110),
(139, 'PENANAMAN TAHUN  0 ', 110),
(140, 'PEMELIHARAAN\r\nTAHUN  I', 110),
(141, 'TAHUN  II\r\n', 110),
(142, 'TAHUN  III', 110),
(143, 'TAHUN  IV  Dst.', 110),
(144, 'PERSIAPAN LAHAN ', 111),
(145, 'PENANAMAN\r\nTAHUN  I\r\n', 111),
(146, 'PEMELIHARAAN\r\nTAHUN  II ', 111),
(147, 'TAHUN  III', 111),
(148, 'PERSIAPAN LAHAN\r\n', 112),
(149, 'PENANAMAN\r\nTAHUN  0\r\n', 112),
(150, 'PEMELIHARAAN\r\nTAHUN   I', 112),
(151, 'TAHUN   II\r\n', 112),
(152, 'Tabel 8.27 ', 113),
(153, 'Tabel 8.28 ', 114),
(154, 'Tabel 8.29 ', 115),
(155, 'PENANAMAN \r\nTAHUN 0', 116),
(156, 'PEMELIHARAAN \r\nTAHUN  I\r\n', 116),
(157, 'TAHUN  2\r\n', 116),
(160, 'TAHUN  3', 116),
(161, 'PEMELIHARAAN TANAMAN MENGHASILKAN\r\nTAHUN IV ', 116),
(162, 'TAHUN  V ', 116),
(163, 'PENANAMAN   \r\nTAHUN I ', 117),
(164, 'Tabel 8.37 ', 117),
(165, 'STANDAR  BIAYA USAHA TANI TEMBAKAU RAJANGAN ( INTENSIF ) ', 118),
(166, 'Tabel 8.39 ', 119),
(167, 'Tabel 8.40 ', 120),
(168, 'Tabel 8.41 ', 121),
(169, 'Tabel 8.42 ', 122),
(170, 'Tabel 8.43 ', 123),
(171, 'Tabel 8.44 ', 124),
(172, 'Tabel 8.45 ', 125),
(173, 'Tabel 8.46 ', 126),
(174, 'Tabel 8.47 ', 127),
(175, 'Tabel 8.48 ', 128),
(176, 'Tabel 8.49 ', 129),
(177, 'Tabel 8.50 ', 130),
(178, 'Tabel 8.51 ', 131),
(179, 'Tabel 8.52 ', 132),
(180, 'Tabel 8.53 ', 133),
(181, 'Tabel 8.54 ', 134),
(182, 'Tabel 8.55 ', 135),
(183, 'Tabel 8.56 ', 136),
(189, 'Tabel 8.57 ', 137),
(190, 'Tabel 8.58 ', 138),
(191, 'Tabel 8.59 ', 139),
(192, 'Tabel 8.60 ', 140),
(193, 'Tabel 8.61 ', 141),
(194, 'Tabel 8.62 ', 142),
(195, 'Tabel 8.63 ', 143),
(196, 'Tabel 8.64 ', 144),
(197, 'Tabel 8.65', 145),
(198, 'Tabel 8.66 ', 146),
(199, 'Tabel 8.67 ', 147),
(200, 'Tabel 8.68 ', 148),
(201, 'Tabel 8.69 ', 149),
(202, 'Tabel 8.70 ', 150),
(203, 'Tabel 8.71', 151),
(204, 'Tabel 8.72 ', 152),
(205, 'Standar Biaya Tenaga Khusus  \r\nBidang Kebudayaan dan Pariwisata\r\n', 153),
(206, 'Tabel 10.1\r\n', 154),
(207, 'Tabel 10.2\r\n', 155),
(208, 'Tabel 10.3', 156),
(209, 'Tabel 10.4', 157),
(210, 'Tabel 10.5', 158),
(211, 'Tabel 10.6', 159),
(212, 'Tabel 10.7', 160),
(213, '(Tabel 11.1) Sewa Stand di Dalam Negeri ', 161),
(214, '(Tabel 11.1) Sewa Stand di Luar Negeri ', 161),
(215, '(Tabel 11.1) Dekorasi Pameran di Dalam Neger', 161),
(216, '(Tabel 11.1) Dekorasi Pameran di Luar Negeri ', 161),
(217, '(Tabel 11.1) Sewa Tempat di Hotel Luar Negeri  \r\nGuna Kegiatan Temu Bisnis\r\n', 161),
(218, '(Tabel 11.1) Konsumsi Kegiatan Temu Bisnis di\r\nLuar Negeri\r\n', 161),
(219, '(Table 11.1) Pameran Open Space di Dalam Negeri ', 161),
(220, 'Honorarium Non PNS dan PNS Non Provinsi    Tenaga Pelayanan Kesehatan Hewan ', 162),
(221, '(Tabel 15.2) Pengadaan Pakan Unggas.', 163),
(222, '(Tabel 15.3) Pengadaan Alat Alat Pertanian dan Peternakan ', 164),
(223, '(Tabel 15.4) Estimasi  Biaya Rehab  Kebun Rumput  Per  Hektar', 165),
(224, '(Tabel 15.5) Estimasi  Biaya  Pemeliharaan Kebun Rumput Per  Hektar/Tahun', 166),
(225, '(Tabel 15.6) Obat-obatan Bidang Peternakan. ', 167),
(226, '(Tabel 17.1) Biaya Tenaga  Pelayanan Kesehatan di Rumah Sakit Provinsi', 168),
(227, '(Tabel 17.2) Biaya Tenaga  Pelayanan Kesehatan di Unit Pelayanan Teknis (UPT)\r\n', 168),
(228, '(Tabel 17.3) Biaya Tenaga Pelayanan Kesehatan di RSUD Kabupaten/Kota dan \r\nPuskesmas/Desa di Daerah ', 168),
(229, '(Tabel 17.4) Biaya Tenaga Dokter Residen di Rumah Sakit Rujukan Regional  \r\nProvinsi Jawa Barat', 168),
(230, 'Tabel 17.5 ', 169),
(231, '(Tabel 17.6) Biaya Vaksinasi PNS dan Non PNS yang bertugas pada Pelayanan \r\nKesehatan', 169),
(232, 'Honorarium diberikan kepada PNS Pemerintah Daerah Provinsi Jawa\r\nBarat, ', 170),
(233, '(Tabel 18.2) Honorarium Assesor dan Pengelola Lembaga Sertifikasi Profesi (LSP), ', 171),
(234, 'Pendidikan dan Pelatihan Lemhannas ', 173),
(235, 'Pendidikan dan Pelatihan Kepemimpinan ', 173),
(236, 'Pendidikan dan Pelatihan Fungsional \r\n', 173),
(237, 'Pendidikan dan Pelatihan Teknis Substantif dan Umum', 173),
(238, 'Bimbingan Teknis, Lokakarya, Diseminasi, Seminar, Simposium, Workshop,', 173),
(239, 'Pendidikan dan Pelatihan Luar Negeri\r\n', 173),
(240, 'Pendidikan Lanjutan Dalam Negeri', 173),
(241, 'Pendidikan Lanjutan Luar Negeri', 173),
(242, '(Tabel 18.11) Riset-edukasi (Re)', 174);

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
(1, 'Standard Biaya Umum Batas Tertinggi'),
(2, 'Standard Biaya Umum Sebagai Estimasi'),
(3, 'Standar Biaya Khusus');

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
(41, 'Uang saku yang melekat pada perjalanan dinas dapat diberikan untuk mengikuti kegiatan Bimtek/ Pelatihan/ Seminar/ Rapat, di luar kota maupun di luar Provinsi apabila akomodasi dan konsumsi difasilitasi panitia penyelenggara', 19),
(42, 'Uang  Harian  Perjalanan  Dinas dari Wilayah Jawa Barat ke\r\nProvinsi DKI Jakarta dan Dalam Kota DKI Jakarta.', 19),
(43, 'Uang Harian Perjalanan Dinas Luar Provinsi selain DKI \r\nJakarta. ', 19),
(44, 'Uang harian perjalanan dinas dan uang representasi Gubernur, Wakil Gubernur dan Sekretaris Daerah. ', 19),
(45, 'Uang harian perjalanan dinas dan uang representasi Ketua DPRD, Wakil Ketua DPRD dan Anggota DPRD ', 19),
(46, 'Pejabat Eselon II ', 19),
(47, 'Biaya Taksi Perjalanan Dinas Luar Provinsi untuk Gubernur,\r\nWakil Gubernur, Sekretaris Daerah, Pimpinan DPRD dan Anggota DPRD', 19),
(48, 'Uang Harian Perjalanan Dinas Luar Negeri ', 19),
(49, 'Pengelompokan Fasilitas Berdasarkan Golongan ', 19),
(50, 'Klasifikasi Fasilitas Transport ', 19),
(51, 'Biaya Pindah Pengangkutan Barang', 19),
(52, 'Satuan Biaya Penginapan Perjalanan Dinas Dalam Daerah', 20),
(53, 'Satuan Biaya Penginapan Perjalanan Dinas Luar Provinsi ', 20),
(54, 'Fasilitasi akomodasi Tamu Negara, Pejabat Negara dan Tamu Pemerintah Daerah', 21),
(55, 'Uang Harian dan Akomodasi Perjalanan Dinas Dalam Provinsi dan Luar Provinsi Non PNS', 22),
(56, 'Penyetaraan untuk Anggota TNI dan POLRI \r\n', 23),
(57, 'SATUAN BIAYA PAKAIAN (Tabel 2.55, 2.56, 2.57)', 25),
(58, 'Satuan biaya makanan penambah daya tahan tubuh yang digunakan untuk kebutuhan biaya pengadaan makanan/minuman bergizi', 27),
(59, '(Tabel 2.59) SATUAN BIAYA PEMELIHARAAN ISO 9001 – 2000 ', 28),
(60, 'Tenaga Ahli Non Sertifikat ', 29),
(61, '(Table 3.1) SATUAN SEWA GEDUNG/LAPANG OLAHRAGA', 30),
(62, '(Table 3.2) SATUAN BIAYA TAKSI PERJALANAN DINAS JABATAN LUAR PROVINSI ', 31),
(63, '(Table 3.3) SATUAN BIAYA TIKET PESAWAT PERJALANAN DINAS LUAR PROVINSI (PP)', 32),
(64, '(Tabel 3.4) BIAYA TIKET PERJALANAN DINAS LUAR NEGERI (PP)', 33),
(65, '(Table 3.5) BIAYA PERAWATAN KENDARAAN', 34),
(66, ' BIAYA KEGIATAN FISIK JALAN ', 35),
(67, 'KEGIATAN PERENCANAAN DAN PENGAWASAN TEKNIS JALAN DAN JEMBATAN', 35),
(68, ' KEGIATAN PERENCANAAN DAN PENGAWASAN TEKNIS\r\nPEMBANGUNAN / PENINGKATAN / REHABILITASI JALAN / JEMBATAN ', 35),
(69, 'KEGIATAN PEMBANGUNAN JALAN DAN JEMBATAN\r\n', 35),
(70, 'KEGIATAN PENGAWASAN PEMBANGUNAN JALAN / JEMBATAN,\r\nPENINGKATAN JALAN, PENGGANTIAN JEMBATAN SERTA REHABILITASI JALAN / JEMBATAN ', 35),
(71, 'BIAYA SEWA ALAT/KENDARAA', 35),
(72, '(HARGA SATUAN) Tenaga Teknis Non PNS Khusus Bidang SDA ', 36),
(73, 'Uang Saku Non PNS Piket Banjir / Kekeringan ', 36),
(74, 'Kegiatan Pembangunan Prasarana Pengairan (SDA) (Pengukuran dan Perencanaan Irigasi)', 36),
(75, 'Pengukuran dan Perencanaan Sungai/Drainase\r\n', 36),
(76, 'Pengukuran dan Perencanaan Situ\r\n', 36),
(77, 'Pengukuran dan Perencanaan Pengamanan Pantai dan Perbaikan Muara Sungai. ', 36),
(78, 'Biaya Sewa Alat Pemotretan Topografi Drone Rp. 100.000/Ha\r\n', 36),
(79, 'Biaya Penyelidikan Lapangan & Pengujian Laboratorium Geoteknik ', 36),
(80, 'Biaya Pengel ol aan Jaringan Irigasi\r\n', 36),
(81, '(Tabel 3.1) Tenaga Ahli Berdasarkan Pengalaman dan Sertifikasi ', 37),
(82, '(Tabel 3.2) Tenaga sub  Profesional jasa  konsultansi\r\n', 37),
(83, '(Tabel 3.3) Tenaga pendukung jasa konsultansi', 37),
(84, '(Tabel 3.4) Biaya Langsung Non Personil \r\nUntuk Jenis Pengeluaran Reimbursable', 37),
(85, '(Tabel 3.5) Biaya Langsung Non Personil Untuk Jenis Pengeluaran Fixed Unit Rate ', 37),
(86, '(Tabel 3.6) Daftar Harga  Standar Upah  Pekerja Jasa Konstruksi ', 37),
(87, 'KEGIATAN PEMBANGUNAN BANGUNAN GEDUNG NEGARA KLASIFIKASI SEDERHANA ', 37),
(88, 'KEGIATAN PEMBANGUNAN BANGUNAN GEDUNG NEGARA KLASIFIKASI TIDAK SEDERHANA  ', 37),
(89, 'KEGIATAN PEMBANGUNAN BANGUNAN GEDUNG NEGARA KLASIFIKASI KHUSUS ', 37),
(90, 'Pedoman Harga Satuan Per Meter Persegi Tertinggi Bangunan Gedung Pemerintah dan Rumah Dinas', 37),
(91, '(Tabel 3.11) Pedoman Harga Satuan Per Meter Tertinggi Bangunan Pagar', 37),
(92, 'KEGIATAN PEMBANGUNAN FISIK AIR BERSIH', 37),
(93, 'KEGIATAN PERENCANAAN TEKNIS SISTEM AIR BERSIH', 37),
(94, 'KEGIATAN PENYEHATAN LINGKUNGAN', 37),
(95, 'SUB BIDANG PROYEK UNTUK KEGIATAN PERUMAHAN  \r\nKOTA (PLPK)/BIDANG PERMUKIMAN', 37),
(96, 'SUB BIDANG UNTUK KEGIATAN PERUMAHAN  \r\nKOTA (PLPK)/BIDANG PERMUKIMAN', 37),
(97, 'PROSENTASE KOMPONEN PEKERJAAN BANGUNAN \r\nGEDUNG NEGARA', 37),
(98, 'KEGIATAN PEMBANGUNAN PRASARANA BIDANG PERHUBUNGAN\r\n', 38),
(99, 'JASA PENGUJIAN LABORATORIUM LINGKUNGAN\r\n', 39),
(100, 'Standar Biaya Satuan Pembenahan Arsip\r\n', 40),
(101, 'Standar Biaya Pemeliharaan dan Perawatan Arsip\r\n', 40),
(102, 'Satuan Biaya Reproduksi dan Transkripsi ', 40),
(103, 'Satuan Biaya Pembersihan Arsip ', 40),
(104, 'Satuan Biaya Jasa Penerjemahan Arsip ', 40),
(105, 'Besaran Honorarium pengolahan bahan perpustakaan bagi Tenaga \r\nTeknis Non PNS dan PNS Non Pemerintah Provinsi Jawa Barat  ', 41),
(106, 'Standar biaya jasa perpustakaan ', 41),
(107, 'Biaya Persiapan Lahan Penanaman Tanaman Perkebunan per hektar\r\nJenis Tanaman Teh ', 42),
(108, 'Biaya Persipan Lahan Penanaman Tanaman Perkebunan per\r\nHektar Jenis Tanaman Teh ', 42),
(109, 'Biaya Perluasan dan Peremajaan Tanaman Perkebunan Jenis Tanaman Karet. ', 42),
(110, 'BIAYA PERSIAPAN LAHAN PENANAMAN TANAMAN PERKEBUNAN \r\nPER HEKTAR  JENIS TANAMAN   CENGKEH ', 42),
(111, 'BIAYA PERSIAPAN LAHAN PENANAMAN TANAMAN PERKEBUNAN\r\nPER HEKTAR JENIS TANAMAN KAKAO ', 42),
(112, 'BIAYA PERSIAPAN LAHAN PENANAMAN TANAMAN PERKEBUNAN PER\r\nHEKTAR JENIS TANAMAN   KELAPA SAWIT ', 42),
(113, ' BIAYA PERSIAPAN LAHAN PENANAMAN TANAMAN PERKEBUNAN \r\nPER HEKTAR JENIS TANAMAN  TEBU ( TEGALAN ) ', 42),
(114, ' BIAYA PERSIAPAN LAHAN PENANAMAN TANAMAN PERKEBUNAN PER\r\nHEKTAR JENIS TANAMAN  TEBU ( SAWAH) ', 42),
(115, 'BIAYA PERSIAPAN LAHAN PENANAMAN TANAMAN PERKEBUNAN\r\nPER HEKTAR JENIS TANAMAN  TEBU  ( SAWAH - TRIS  I ) ', 42),
(116, 'ESTIMASI BIAYA PERSIAPAN LAHAN PENANAMAN TANAMAN PERKEBUNAN\r\nPER HEKTAR JENIS TANAMAN  KOPI ', 42),
(117, 'ESTIMASI BIAYA PERSIAPAN LAHAN PENANAMAN TANAMAN PERKEBUNAN\r\nPER HEKTAR JENIS TANAMAN  AKARWANGI ', 42),
(118, 'ESTIMASI BIAYA PERSIAPAN LAHAN PENANAMAN TANAMAN\r\nPERKEBUNAN PER HEKTAR JENIS TANAMAN  TEMBAKAU ', 42),
(119, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nAKARWANGI DALAM POLYBAG ', 42),
(120, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nCENGKEH', 42),
(121, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nKAKAO ', 42),
(122, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nLADA PANJAT ', 42),
(123, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nT E H ', 42),
(124, 'STANDAR BAKU TEKNIS PEMBENIHAN \r\nKARET ', 42),
(125, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nKOPI ', 42),
(126, 'STANDAR BAKU TEKNIS PEMBENIHAN \r\nKELAPA DALAM ', 42),
(127, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nAREN ', 42),
(128, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nPANILI ', 42),
(129, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nNILAM ', 42),
(130, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nKEMIRI ', 42),
(131, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nTEMBAKAU ', 42),
(132, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nCABE JAMU/CABE JAWA ', 42),
(133, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nTEBU ', 42),
(134, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nKELAPA SAWIT ', 42),
(135, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nKEMIRI SUNAN', 42),
(136, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nPALA ', 42),
(137, 'STANDAR BAKU TEKNIS PEMBENIHAN\r\nKAYU MANIS ', 42),
(138, 'BIAYA PENERAPAN METODE PHT TEPAT GUNA PER HEKTAR \r\nKOMODITI KOPI', 42),
(139, 'BIAYA PENGENDALIAN OPT PADA TANAMAN TEMBAKAU \r\nPERKEBUNAN PER HEKTAR ', 42),
(140, 'BIAYA PENGENDALIAN OPT PADA TANAMAN TEMBAKAU \r\nPERKEBUNAN PER HEKTAR ', 42),
(141, 'BIAYA PENGENDALIAN OPT PADA TANAMAN KOPI \r\nPERKEBUNAN PER HEKTAR ', 42),
(142, 'BIAYA PENGENDALIAN OPT PADA TANAMAN TEH\r\nPERKEBUNAN PER HEKTAR\r\n', 42),
(143, 'BIAYA PENGEMBANGAN PESTISIDA NABATI \r\nJENIS TANAMAN NIMBA UNTUK 5.000 POHON ', 42),
(144, 'BIAYA KLINIK HAMA DAN PENYAKIT PERKEBUNAN \r\nPER KABUPATEN ', 42),
(145, 'BIAYA PENGENDALIAN OPT PADA TANAMAN KAKAO \r\nPERKEBUNAN PER HEKTAR ', 42),
(146, 'ESTIMASI BIAYA PENGENDALIAN OPT PADA TANAMAN KELAPA \r\nPERKEBUNAN PER HEKTAR ', 42),
(147, ' BIAYA EKSPLORASI MUSUH ALAMI DAN IDENTIFIKASI OPT \r\nPER KABUPATEN ', 42),
(148, 'BIAYA PEMBUATAN AGENS PENGENDALI HAYATI ', 42),
(149, 'BIAYA PENGENDALIAN OPT PADA TANAMAN KARET \r\nPERKEBUNAN PER HEKTAR ', 42),
(150, 'BIAYA PENANGANAN EKSPLOSIF OPT PERKEBUNAN', 42),
(151, 'BIAYA PENGENDALIAN OPT PADA TANAMAN TEBU \r\nTabel 8.71\r\n', 42),
(152, 'BIAYA PENGENDALIAN OPT PADA TANAMAN CENGKEH \r\nPERKEBUNAN PER HEKTAR ', 42),
(153, 'Tenaga Khusus Bidang Kebudayaan dan Pariwisata Non PNS\r\n', 43),
(154, 'Standar Biaya Standarisasi dan Pengujian Mutu Barang ', 44),
(155, 'Daftar Harga Standar Upah Tenaga Kasar dan Tenaga Bantuan Teknis \r\nPengujian Standardisasi dan Pengujian Mutu Barang ', 44),
(156, 'Daftar Upah Tenaga Kasar dan Tenaga Bantuan Teknis  \r\nStandar Pengujian Mutu Barang\r\n', 44),
(157, 'Standar Biaya Uji laboratorium Makanan dan Minuman ', 44),
(158, 'Daftar Harga Standar Alat ', 44),
(159, 'SATUAN BIAYA PEMELIHARAAN SNI ISO/IEC 17025\r\nJASA AKREDITASI (AKREDITASI KAN) ', 44),
(160, 'Standar Biaya Honorarium Tenaga Teknis Non PNS                                \r\npada Sub Unit Pengembangan IKM dan Pengembangan Industri  ', 44),
(161, 'Standar Biaya Kegiatan Pameran di Dalam Negeri dan Luar Negeri ', 45),
(162, 'Biaya Tenaga Pelayanan Kesehatan Hewan di Rumah Sakit Hewan      \r\nJawa Barat', 49),
(163, 'Pengadaan Pakan Unggas.', 49),
(164, 'Pengadaan Alat Alat Pertanian dan Peternakan ', 49),
(165, 'Estimasi  Biaya Rehab  Kebun Rumput  Per  HektarJenis  Rumput  \r\nGajah, King Grass, Odot.\r\n', 49),
(166, 'Estimasi  Biaya  Pemeliharaan   Kebun Rumput Per Hektar/Tahun', 49),
(167, 'Obat-obatan Bidang Peternakan. ', 49),
(168, 'Tenaga Khusus Bidang Kesehatan Non PNS dan PNS  Non Pemerintah Provinsi Jawa Barat ', 51),
(169, 'Satuan Biaya Pembentukan Lembaga Penilai Kesesuaian\r\n(LPK/Lembaga Sertifikasi) Dinas Kesehatan Provinsi Jawa Barat. ', 51),
(170, 'Honorarium Pengajar Diklat. \r\n', 52),
(171, 'Honorarium Assesor dan Pengelola Lembaga Sertifikasi Profesi (LSP) Narasumber dari Instansi Pembina Diklat dan Komite Penjamin Mutu Lembaga Diklat. ', 52),
(172, 'Biaya makan', 52),
(173, 'Biaya Pendidikan dan Pelatihan\r\n', 52),
(174, 'Riset-edukasi (Re) ', 52);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `detail1c`
--
ALTER TABLE `detail1c`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `detail1d`
--
ALTER TABLE `detail1d`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `detail2`
--
ALTER TABLE `detail2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

--
-- AUTO_INCREMENT for table `detail3`
--
ALTER TABLE `detail3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `detail4`
--
ALTER TABLE `detail4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `detail5`
--
ALTER TABLE `detail5`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `detail6`
--
ALTER TABLE `detail6`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `detail7`
--
ALTER TABLE `detail7`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `detail8`
--
ALTER TABLE `detail8`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `detail9`
--
ALTER TABLE `detail9`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `detail10`
--
ALTER TABLE `detail10`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `detail14`
--
ALTER TABLE `detail14`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `detail15`
--
ALTER TABLE `detail15`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
