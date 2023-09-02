import React, { useEffect, useState } from 'react';
import { child, get, ref } from 'firebase/database';
import { auth, db } from '../firebase-config';
import Loading from '../components/Loading';

export default function UserDashboard() {
  const [user, setUser] = useState({});
  const [bookings, setBookings] = useState([]);
  const userId = user.uid;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData) => {
      if (userData) {
        setUser(userData);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (userId) {
      get(child(ref(db), `booking/${userId}`)).then((snapshot) => {
        const data = snapshot.val();
        if (data) {
          const bookingsArray = Object.values(data);
          setBookings(bookingsArray);
        } else {
          setBookings([]);
        }
      }).catch((eror) => {
        console.log(eror);
      });
    }
  }, [userId]);

  return (
    user.uid
      ? (
        <div className="flex p-5 flex-wrap mx-auto max-w-4xl justify-center items-start">

          <div className=" flex-initial m-2 border p-3 rounded-md shadow-md container flex flex-row max-w-sm ">
            <img src={user.photoURL} alt={user.displayName} className="w-16 h-16 border rounded-full" />
            <div className="flex justify-center flex-col px-5">
              <h1>
                Halo,
                {' '}
                {user.displayName}
              </h1>
              <p className="text-xs">{user.email}</p>
            </div>
          </div>
          <div className="container border rounded-md p-3 max-w-sm m-2">
            <div>Status Booking</div>
            <div className="flex">
              {(bookings.length
                ? (bookings.map((booking) => (
                  <div key={booking.bookingId}>
                    <div>{booking.cameraId}</div>
                    <div>{booking.customer.name}</div>
                  </div>
                )))
                : (
                  <div>belum ada booking</div>
                ))}
            </div>
          </div>
          <div className="p-3 container border text-sm flex flex-col justify-center rounded-md shadow-md max-w-sm m-2">
            <p>Histori sewa</p>
            <p>Belum ada kamera yang pernah disewa ...</p>
          </div>
          <div className="grow m-2 container border shadow-md rounded-md p-3 max-w-sm ">
            <p>Pilih Kamera</p>
          </div>
          <div className="container border shadow-md rounded-md p-3 max-w-sm m-2">
            <p>Artikel untuk dibaca</p>
          </div>
        </div>
      ) : <Loading />
  );
}
