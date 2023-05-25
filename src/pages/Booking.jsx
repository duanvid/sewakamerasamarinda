/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { child, get, ref } from 'firebase/database';
import { auth, db } from '../firebase-config';
import Loading from '../components/Loading';
import { getFormattedDate, getRentalCost } from '../utils';
import BookingInput from '../components/BookingInput';

export default function Booking() {
  const [isLogin, setIslogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { cameraId } = useParams();

  const [lensa, setLensa] = useState('kit');
  const [durasiSewa, setDurasiSewa] = useState(6);
  const [basePrice, setBasePrice] = useState({
    kit: 100000,
    fix: 100000,
    tele: 100000,
  });
  const [rentalCost, setRentalCost] = useState(basePrice.kit);
  const [tanggal, setTanggal] = useState(getFormattedDate);

  const dataRef = {
    name: useRef(),
    phoneNumber: useRef(),
    lens: useRef(),
    bookingDate: useRef(),
    bookingTime: useRef(),
  };

  const handleSlide = (e) => {
    setDurasiSewa(e.target.value);
  };

  useEffect(() => {
    const getBasePrice = (id) => {
      get(child(ref(db), (`pricelist/${id}`)))
        .then((snapshot) => {
          const result = snapshot.val();
          setBasePrice(result);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getBasePrice(cameraId);
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIslogin(true);
        setIsLoading(false);
      } else {
        setIslogin(false);
        setIsLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (lensa === 'fix') {
      setRentalCost(getRentalCost(lensa, durasiSewa, basePrice.fix));
    } else if (lensa === 'kit') {
      setRentalCost(getRentalCost(lensa, durasiSewa, basePrice.kit));
    } else if (lensa === 'tele') {
      setRentalCost(getRentalCost(lensa, durasiSewa, basePrice.tele));
    }
  }, [durasiSewa, lensa]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = `book-${getFormattedDate}`;
    const cameraType = cameraId;
    const name = dataRef.name.current.value;
    const phoneNumber = dataRef.phoneNumber.current.value;

    console.log(
      bookingId,
      cameraType,
      lensa,
      durasiSewa,
      name,
      phoneNumber,
      rentalCost,
    );
  };

  return (
    isLoading
      ? <Loading />
      : isLogin
        ? (
          <div className="h-full flex justify-center items-center">
            <div className="flex flex-col items-center my-auto">
              <h1 className="p-5">
                Booking kamera
              </h1>
              <div>
                <form
                  action=""
                  method="post"
                  className="flex flex-col border text-sm lg:flex-row rounded-md py-5"
                >
                  <div className="flex flex-col px-5">
                    <BookingInput
                      id="kamera"
                      label="Kamera"
                      type="text"
                      value={cameraId}
                      disabled
                    />
                    <label htmlFor="lensa" className="flex flex-col">
                      <div className="py-2">Lensa</div>
                      <select
                        id="lensa"
                        className="p-2 border  rounded-md"
                        onChange={(e) => setLensa(e.target.value)}
                        value={lensa}
                      >
                        <option value="kit">Lensa Kit</option>
                        <option value="fix">Lensa Fix</option>
                        <option value="tele">Lensa Tele</option>
                      </select>
                    </label>
                    <label htmlFor="tanggal" className="flex flex-col">
                      <div className="py-2">Tanggal Sewa</div>
                      <input
                        type="datetime-local"
                        name="tanggal"
                        id="tanggal"
                        className="p-2 border rounded-md"
                        required
                        onChange={(e) => setTanggal(e.target.value)}
                        value={tanggal}
                      />
                    </label>

                    <label htmlFor="durasi" className="flex flex-col">
                      <div className="py-2">Lama Sewa</div>
                      <div className="p-2 flex items-center justify-center border rounded-md">
                        <input
                          type="range"
                          min={1}
                          max={24}
                          name="durasi"
                          id="durasi"
                          onChange={handleSlide}
                          value={durasiSewa}
                          className="mr-5"
                        />
                        <span className="">{durasiSewa}</span>
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
                        ref={dataRef.name}
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
                          ref={dataRef.phoneNumber}
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
