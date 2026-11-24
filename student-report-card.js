// ============================================
// Program Laporan Nilai Siswa (Versi Pemula)
// File: student-report-card.js
// ============================================

// 1. Data Siswa (Array yang berisi Object)
const students = [
  {
    name: "Ahmad Fauzi",
    className: "10-A",
    scores: [80, 90, 85],
    attendance: 90,
    hasViolation: false
  },
  {
    name: "Siti Rahma",
    className: "10-A",
    scores: [95, 90, 90],
    attendance: 100,
    hasViolation: false
  },
  {
    name: "Budi Santoso",
    className: "10-B",
    scores: [60, 70, 65],
    attendance: 75,
    hasViolation: true
  }
];

// 2. Mengambil Tanggal Hari Ini
const reportDate = new Date();

// Variabel untuk menghitung total Lulus/Belum Lulus (Bonus)
let totalLulus = 0;
let totalBelumLulus = 0;

// Header Utama Laporan
console.log("====================================");
console.log("      HSI STUDENT REPORT CARD       ");
console.log("====================================");
console.log(`Tanggal : ${reportDate.toLocaleDateString()}`);
console.log("====================================\n");

// 3. Loop Utama: Memproses Setiap Siswa Satu per Satu
for (let i = 0; i < students.length; i++) {
  
  // Hitung Total Nilai Menggunakan For Loop
  let totalScore = 0;
  for (let j = 0; j < students[i].scores.length; j++) {
    totalScore = totalScore + students[i].scores[j];
  }

  // Hitung Rata-Rata
  const averageScore = totalScore / students[i].scores.length;

  // 4. Menentukan Grade (Menggunakan if / else if / else)
  let grade = "";
  if (averageScore >= 90) {
    grade = "A";
  } else if (averageScore >= 80) {
    grade = "B";
  } else if (averageScore >= 70) {
    grade = "C";
  } else {
    grade = "D";
  }

  // 5. Menentukan Status Kelulusan (Pakai operator &&)
  let status = "";
  if (averageScore >= 75 && students[i].attendance >= 80 && !students[i].hasViolation) {
    status = "LULUS 🎉";
    totalLulus = totalLulus + 1;
  } else {
    status = "BELUM LULUS ❌";
    totalBelumLulus = totalBelumLulus + 1;
  }

  // Mengubah Pelanggaran (true/false) Menjadi Teks Biasa
  let teksPelanggaran = "";
  if (students[i].hasViolation) {
    teksPelanggaran = "Ada";
  } else {
    teksPelanggaran = "Tidak Ada";
  }

  // Menggabungkan Angka Nilai Menjadi Teks Biasa
  let teksNilai = "";
  for (let k = 0; k < students[i].scores.length; k++) {
    teksNilai = teksNilai + students[i].scores[k];
    if (k < students[i].scores.length - 1) {
      teksNilai = teksNilai + ", ";
    }
  }

  // 6. Tampilkan Hasil Ke Terminal (Menggunakan Template Literal)
  console.log(`Student #${i + 1}`);
  console.log(`Nama       : ${students[i].name}`);
  console.log(`Kelas      : ${students[i].className}`);
  console.log(`Nilai      : ${teksNilai}`);
  console.log(`Total      : ${totalScore}`);
  console.log(`Rata-rata  : ${averageScore}`);
  console.log(`Grade      : ${grade}`);
  console.log(`Kehadiran  : ${students[i].attendance}%`);
  console.log(`Pelanggaran: ${teksPelanggaran}`);
  console.log(`Status     : ${status}`);
  console.log("------------------------------------\n");
}

// Summary Tambahan (Bonus)
console.log("====================================");
console.log("          RINGKASAN LAPORAN         ");
console.log("====================================");
console.log(`Jumlah Siswa Lulus       : ${totalLulus}`);
console.log(`Jumlah Siswa Belum Lulus : ${totalBelumLulus}`);
console.log("====================================");