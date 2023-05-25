import React from 'react';
import ArticleParagraph from './ArticleParagraph';

export default function RentalTips() {
  const rentalTips = [
    {
      head: 'Tentukan Tujuan Pemakaian Kamera',
      body: 'Sebelum memilih kamera untuk disewa, tentukan terlebih dahulu tujuan pemakaian kamera. Apakah untuk kegiatan fotografi, pembuatan video atau keperluan lainnya. Hal ini akan membantu anda memilih kamera yang sesuai dengan kebutuhan Anda.',
    },
    {
      head: 'Pilih kamera yang sesuai dengan kebutuhan fotografi anda',
      body: 'Pilih kamera yang cocok untuk jenis fotografi yang ingin Anda lakukan. Jika Anda lebih suka fotografi landscape atau portrait, maka kamera seperti Canon 60D, Canon 700D, atau Sony A6000 dapat menjadi pilihan yang baik.',
    },
    {
      head: 'Pertimbangkan budget anda',
      body: 'Canon 1300D dan 1100D adalah kamera entry-level yang lebih terjangkau, sementara Canon 60D dan Sony A6000 adalah kamera yang lebih mahal sehingga harga sewanya juga lebih tinggi. Pilih kamera yang sesuai dengan budget Anda.',
    },
    {
      head: 'Perhatikan lensa kamera',
      body: 'Lensa kamera merupakan salah satu faktor penting dalam menghasilkan foto atau video yang berkualitas. Pastikan kamera yang akan Anda sewa dilengkapi dengan lensa yang memadai dan sesuai dengan kebutuhan Anda.',
    },
    {
      head: 'Pilih lensa yang sesuai dengan jenis fotografi yang ingin Anda lakukan',
      body: 'Lensa kit cocok untuk pemula atau fotografi umum, sedangkan lensa Fix cocok untuk fotografi portrait, foto candid dan foto low light. Lensa Fix juga terkenal dengan efek bokeh (blur pada background / deep of field), jadi sangat cocok untuk foto yang ingin terkesan estetik. Sedangkan lensa Tele cocok untuk fotografi yang perlu lensa yang mampu mengambil foto untuk jarak yang jauh, seperti olahraga, foto candid dan foto street.',
    },
    {
      head: 'Tanyakan pada penyewa',
      body: 'Jangan ragu untuk bertanya pada penyewa tentang kamera yang akan Anda sewa. Tanyakan tentang spesifikasi teknis kamera, lensa, dan juga tentang kelebihan dan kekurangan dari kamera tersebut. Hal ini akan membantu Anda memilih kamera yang sesuai dengan kebutuhan Anda.',
    },
    {
      head: 'Pilih tempat sewa yang terpercaya',
      body: 'Pastikan Anda menyewa kamera dari tempat yang terpercaya dan memiliki reputasi yang baik. Pastikan juga untuk membaca syarat dan ketentuan sewa dengan teliti, serta menanyakan segala hal yang tidak jelas sebelum menyewa kamera.',
    },
  ];
  return (
    <div className="rental-tips max-w-4xl mx-auto">
      <h2 className="text-2xl p-5 text-center">Tips Memilih Kamera Untuk Disewa</h2>
      <div className="space-y-2">
        {rentalTips.map((item, index) => (
          <ArticleParagraph data={item} key={item.head} index={index} />
        ))}
      </div>
    </div>
  );
}
