import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { push, ref } from 'firebase/database';
import { auth, db } from '../firebase-config';
import Loading from '../components/Loading';
import { getRentalCost, getBasePrice } from '../utils';
import LensOptions from '../components/LensOptions';

export default function Booking() {
  const [isLogin, setIslogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { cameraId } = useParams();

  const [cameraData, setCameraData] = useState({});
  const [lensa, setLensa] = useState('');
  const [rentalStartDate, setRentalStartDate] = useState([]);
  const [durasiSewa, setDurasiSewa] = useState(6);
  const [rentalCost, setRentalCost] = useState({});
  useEffect(() => {
    const startUp = async () => {
      const camera = await getBasePrice(cameraId);
      if (!camera) {
        navigate(`/${cameraId}`);
      } else {
        setCameraData(camera);
        setLensa(Object.keys(camera.availableLens)[0]);
        setRentalCost(Object.values(camera.availableLens)[0].tarif1);
        setIsLoading(false);
      }
    };

    startUp();

    auth.onAuthStateChanged((user) => {
      if (user) {
        setIslogin(true);
      } else {
        setIslogin(false);
      }
    });
  }, []);

  useEffect(() => {
    if (!cameraData.availableLens) {
      return;
    }
    setRentalCost(getRentalCost(lensa, durasiSewa, cameraData.availableLens));
  }, [durasiSewa, lensa]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cameraName = cameraData.name;
    const bookingId = `book-${Date.now()}`;
    const userId = auth.currentUser.uid;

    push(ref(db, `booking/${userId}`), {
      bookingId, cameraName, lensa, durasiSewa, rentalCost,
    }).then(() => {
      console.log('success');
    }).catch((er) => {
      console.log(er);
    });
  };

  if (isLoading || !cameraData.name) {
    return (
      <Loading />
    );
  }

  return (
    isLogin
      ? (
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col items-center my-auto">
            <h2 className="p-5 text-2xl">
              Booking kamera
            </h2>
            <div>
              <form
                action=""
                method="post"
                className="flex flex-col text-sm lg:flex-row py-5"
              >
                <div className="flex flex-col px-5">
                  <div className="flex flex-col">
                    <div className="py-2">Kamera</div>
                    <div className="border p-2 rounded-md">
                      {(`${cameraData.brand} ${cameraData.model}`)}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="py-2">Lensa</div>
                    <LensOptions
                      lenses={cameraData.availableLens}
                      lensa={lensa}
                      setLensa={setLensa}
                      id="lensa"
                      name="lensa"
                    />
                  </div>
                  <label htmlFor="tanggal" className="flex flex-col">
                    <div className="py-2">
                      Tanggal Sewa
                      <span className="text-danger-500"> *</span>
                    </div>
                    <input
                      type="date"
                      name="tanggal"
                      id="tanggal"
                      className="p-2 border rounded-md"
                      required
                      onChange={(e) => setRentalStartDate(e.target.value)}
                      value={rentalStartDate}
                    />
                  </label>

                  <label htmlFor="durasi" className="flex flex-col">
                    <div className="py-2">Lama Sewa</div>
                    <div className="p-px flex items-center justify-center border rounded-md">
                      <input
                        type="range"
                        min={1}
                        max={24}
                        name="durasi"
                        id="durasi"
                        onChange={(e) => setDurasiSewa(e.target.value)}
                        value={durasiSewa}
                        className="mr-5"
                      />
                      <span className="w-5">{durasiSewa}</span>
                      <span className="p-2">Jam</span>
                    </div>
                  </label>

                </div>
                <div className="flex flex-col px-5">
                  <label htmlFor="name" className="flex flex-col">
                    <div className="py-2">
                      Nama
                      <span className="text-danger-500"> *</span>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="border p-2 rounded-md"
                      required
                      placeholder="masukkan nama"
                      autoComplete="given-name"
                    />
                  </label>
                  <label
                    htmlFor="nomorhp"
                    className="flex flex-col"
                  >
                    <div className="py-2">
                      Nomor HP
                      <span className="text-danger-500"> *</span>
                    </div>
                    <div className="flex-row flex border rounded-md">
                      <div className="shrink border-r p-2">+62</div>
                      <input
                        type="number"
                        className="p-2 rounded-e-md"
                        required
                        id="nomorhp"
                        placeholder="8125011****"
                      />
                    </div>
                  </label>

                  <div className="flex flex-col">
                    <div className="py-2">Biaya Sewa</div>
                    <div
                      id="biayasewa"
                      className="border p-2 rounded-md"
                    >
                      {rentalCost}
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="border py-2 px-6 rounded-md bg-sky-400 text-slate-100 mt-5"
                  >
                    Check Out
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      )
      : (
        <div>
          <h1>Silahkan Login terkebih dahulu</h1>
        </div>
      )
  );
}
