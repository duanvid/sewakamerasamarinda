import React from 'react';
import ArticleParagraph from './ArticleParagraph';

export default function RentalTerm() {
  const rentalTerm = [
    {
      head: 'Identitas Pribadi',
      body: 'Penyewa wajib menjaminkan kartu identitas yang asli dan valid milik sendiri. Dapat berupa KTP, SIM, Kartu Pelajar/Mahasiswa.',
    },
    {
      head: 'Biaya Sewa',
      body: 'Pembayaran sewa wajib dilakukan diawal saat proses pengambilan kamera sesuai dengan tarif yang telah ditentukan.',
    },
    {
      head: 'Pengambilan dan Pengembalian Kamera',
      body: 'Sewa kamera dapat diantar maupun diambil sendiri. Untuk layanan antar dikenakan biaya sesuai dengan jarak pengantaran.',
    },
    {
      head: 'Keterlambatan',
      body: 'Keterlambatan yang disengaja dan tanpa ada konfirmasi terlebih dahulu akan dikenakan denda. Perhitungan denda akan dijelaskan pada saat pengambilan kamera.',
    },
    {
      head: 'Menyalin Foto',
      body: 'File foto dapat disalin sendiri, atau bisa juga disalinkan saat pengembalian kamera. Foto juga dapat disalinkan melalui link Google Drive atau bisa langsung disalinkan ke Handphone Penyewa. Salin foto tidak dikenakan biaya apapun.',
    },
    {
      head: 'Tanggung Jawab Kerusakan',
      body: 'Penyewa bertanggung jawab penuh atas kerusakan atau kehilangan kamera selama masa sewa.',
    },
    {
      head: 'Batasan Penggunaan',
      body: 'Penyewa tidak diperbolehkan menggunakan kamera untuk tujuan yang melanggar hukum, seperti kegiatan pornografi atau kegiatan kriminal lainnya. Penyewa juga harus merawat kamera dengan baik selama masa sewa.',
    },
  ];
  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="text-2xl text-center p-5">Ketentuan Sewa</h2>
      <div className="space-y-2">
        {rentalTerm.map((item, index) => (
          <ArticleParagraph data={item} key={item.head} index={index} />
        ))}
      </div>
    </div>
  );
}
