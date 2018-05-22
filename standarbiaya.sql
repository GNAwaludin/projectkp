-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 22 Mei 2018 pada 08.44
-- Versi Server: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `standarbiaya`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bidang`
--

CREATE TABLE `bidang` (
  `id` int(11) NOT NULL,
  `bidang` varchar(100) NOT NULL,
  `st_biaya_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `deatil1a`
--

CREATE TABLE `deatil1a` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nilai` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `detail1_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `deatil1ba`
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
-- Struktur dari tabel `detail1`
--

CREATE TABLE `detail1` (
  `id` int(11) NOT NULL,
  `kategori` varchar(100) NOT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail1b`
--

CREATE TABLE `detail1b` (
  `id` int(11) NOT NULL,
  `kategori` varchar(100) NOT NULL,
  `detail1_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail1c`
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
-- Struktur dari tabel `detail1d`
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
-- Struktur dari tabel `detail1e`
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
-- Struktur dari tabel `detail2`
--

CREATE TABLE `detail2` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nilai` int(11) NOT NULL,
  `kategori_id` int(11) NOT NULL,
  `keterangan` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail3`
--

CREATE TABLE `detail3` (
  `id` int(11) NOT NULL,
  `nama1` varchar(100) NOT NULL,
  `nama2` varchar(100) NOT NULL,
  `nama3` varchar(100) DEFAULT NULL,
  `nilai` bigint(20) NOT NULL,
  `kategori_id` int(11) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail4`
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

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail5`
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
-- Struktur dari tabel `detail6`
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
-- Struktur dari tabel `detail7`
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
-- Struktur dari tabel `detail8`
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
-- Struktur dari tabel `detail9`
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

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail10`
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

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail11`
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
-- Struktur dari tabel `detail12`
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
-- Struktur dari tabel `detail13`
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
-- Struktur dari tabel `detail14`
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
-- Struktur dari tabel `detail15`
--

CREATE TABLE `detail15` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `nilai` bigint(20) NOT NULL,
  `keterangan` varchar(200) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `kategori` varchar(100) NOT NULL,
  `sub_bidang_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `st_biaya`
--

CREATE TABLE `st_biaya` (
  `id` int(11) NOT NULL,
  `jenis` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_bidang`
--

CREATE TABLE `sub_bidang` (
  `id` int(11) NOT NULL,
  `sub` varchar(100) NOT NULL,
  `bidang_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `bidang`
--
ALTER TABLE `bidang`
  ADD CONSTRAINT `bidang_st_biaya_fk` FOREIGN KEY (`st_biaya_id`) REFERENCES `st_biaya` (`id`);

--
-- Ketidakleluasaan untuk tabel `deatil1a`
--
ALTER TABLE `deatil1a`
  ADD CONSTRAINT `deatil1a_detail1_fk` FOREIGN KEY (`detail1_id`) REFERENCES `detail1` (`id`);

--
-- Ketidakleluasaan untuk tabel `deatil1ba`
--
ALTER TABLE `deatil1ba`
  ADD CONSTRAINT `deatil1ba_detail1b_fk` FOREIGN KEY (`detail1b_id`) REFERENCES `detail1b` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail1`
--
ALTER TABLE `detail1`
  ADD CONSTRAINT `detail1_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail1b`
--
ALTER TABLE `detail1b`
  ADD CONSTRAINT `detail1b_detail1_fk` FOREIGN KEY (`detail1_id`) REFERENCES `detail1` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail1c`
--
ALTER TABLE `detail1c`
  ADD CONSTRAINT `detail1c_detail1_fk` FOREIGN KEY (`detail1_id`) REFERENCES `detail1` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail1d`
--
ALTER TABLE `detail1d`
  ADD CONSTRAINT `detail1d_detail1_fk` FOREIGN KEY (`detail1_id`) REFERENCES `detail1` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail1e`
--
ALTER TABLE `detail1e`
  ADD CONSTRAINT `detail1e_detail1_fk` FOREIGN KEY (`detail1_id`) REFERENCES `detail1` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail2`
--
ALTER TABLE `detail2`
  ADD CONSTRAINT `detail2_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail3`
--
ALTER TABLE `detail3`
  ADD CONSTRAINT `detail3_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail4`
--
ALTER TABLE `detail4`
  ADD CONSTRAINT `detail4_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail5`
--
ALTER TABLE `detail5`
  ADD CONSTRAINT `detail5_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail6`
--
ALTER TABLE `detail6`
  ADD CONSTRAINT `detail6_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail7`
--
ALTER TABLE `detail7`
  ADD CONSTRAINT `detail7_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail8`
--
ALTER TABLE `detail8`
  ADD CONSTRAINT `detail8_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail9`
--
ALTER TABLE `detail9`
  ADD CONSTRAINT `detail9_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail10`
--
ALTER TABLE `detail10`
  ADD CONSTRAINT `detail10_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail11`
--
ALTER TABLE `detail11`
  ADD CONSTRAINT `detail11_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail12`
--
ALTER TABLE `detail12`
  ADD CONSTRAINT `detail12_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail13`
--
ALTER TABLE `detail13`
  ADD CONSTRAINT `detail13_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail14`
--
ALTER TABLE `detail14`
  ADD CONSTRAINT `detail14_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail15`
--
ALTER TABLE `detail15`
  ADD CONSTRAINT `detail15_kategori_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Ketidakleluasaan untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD CONSTRAINT `kategori_sub_bidang_fk` FOREIGN KEY (`sub_bidang_id`) REFERENCES `sub_bidang` (`id`);

--
-- Ketidakleluasaan untuk tabel `sub_bidang`
--
ALTER TABLE `sub_bidang`
  ADD CONSTRAINT `sub_bidang_bidang_fk` FOREIGN KEY (`bidang_id`) REFERENCES `bidang` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
