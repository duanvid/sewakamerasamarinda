export default function RentalTerm() {
  return (
    <div className="">
      <h2 className="text-2xl text-center p-5">Ketentuan Sewa</h2>
      <ol className="space-y-2">
        <li className="bg-slate-200 p-5">
          <p className="font-semibold mb-2">Identitas Pribadi</p>
          <p className="">Penyewa wajib menjaminkan kartu identitas yang asli dan valid milik sendiri.
          Dapat berupa KTP, SIM, Kartu Pelajar/Mahasiswa.</p>
        </li>
        <li className="p-5">
          <p className="font-semibold mb-2">Biaya Sewa</p>
          <p>Pembayaran sewa wajib dilakukan diawal saat proses pengambilan kamera sesuai dengan tarif yang telah ditentukan.</p>
        </li>
        <li className="p-5 bg-slate-200">
          <p className="font-semibold mb-2">Pengambilan dan Pengembalian Kamera</p>
          <p>Sewa kamera dapat diantar maupun diambil sendiri.
          Untuk layanan antar dikenakan biaya sesuai dengan jarak pengantaran.</p>
        </li>
        <li className="p-5">
          <p className="font-semibold mb-2">Keterlambatan</p>
          <p>Keterlambatan yang disengaja dan tanpa ada konfirmasi terlebih dahulu akan dikenakan denda.
          Perhitungan denda akan dijelaskan pada saat pengambilan kamera.</p>
        </li>
        <li className="p-5 bg-slate-200">
          <p className="font-semibold mb-2">Menyalin Foto</p>
          <p>File foto dapat disalin sendiri, atau bisa juga disalinkan saat pengembalian kamera.
          Foto juga dapat disalinkan melalui link Google Drive atau bisa langsung disalinkan ke Handphone Penyewa. Salin foto tidak dikenakan biaya apapun.</p>
        </li>
        <li className="p-5">
          <p className="font-semibold mb-2">Tanggung Jawab Kerusakan</p>
          <p>Penyewa bertanggung jawab penuh atas kerusakan atau kehilangan kamera selama masa sewa.
          </p>
        </li>
        <li className="p-5 bg-slate-200">
          <p className="font-semibold mb-2">Batasan Penggunaan</p>
          <p>Penyewa tidak diperbolehkan menggunakan kamera untuk tujuan yang melanggar hukum, seperti kegiatan pornografi atau kegiatan kriminal lainnya.
          Penyewa juga harus merawat kamera dengan baik selama masa sewa.
          </p>
        </li>
      </ol>
    </div>
  )
}