"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [kodeKandidat, setKodeKandidat] = useState('');
  const [namaLengkap, setNamaLengkap] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('kode_kandidat', kodeKandidat);
    formData.append('nama_lengkap', namaLengkap);
  };

  const isFormValid = kodeKandidat && namaLengkap;


  return (
    <main className="flex min-h-screen bg-purple-primary text-white-100 flex-col items-center">
      <section className="flex flex-row gap-2 mt-40 mb-40 items-center justify-center w-full">
        <div className="pt-2">
          <Image
            src="/logo.svg"
            alt="Alametric logo"
            width={50}
            height={50}
          />
        </div>
        <h1 className="text-5xl font-title">alametric</h1>
      </section>

      <section className="flex-1 form-enter-animation bg-white-100 w-full mt-20 rounded-t-[3rem]">
        <div className='flex items-center justify-center w-full p-4'>
          <form className="flex flex-col w-full text-xl font-normal text-black-100 max-w-lg px-2 py-8" onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label htmlFor="kode_kandidat" className="block mb-2">
                Kode Kandidat
              </label>
              <input
                type="text"
                className="px-4 py-4 rounded-lg bg-grey-50 border-grey-200 w-full mb-4"
                placeholder="Masukkan kode kandidat"
                value={kodeKandidat}
                onChange={(e) => setKodeKandidat(e.target.value)}

              />

            </div>
            <div className='mb-2'>
              <label htmlFor="nama_lengkap" className="block mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="px-4 py-4 rounded-lg bg-grey-50 border-grey-200 w-full mb-4"
                placeholder="Masukkan nama Anda"
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className={`bg-purple-300 text-white-100 mt-12 py-3 text-center font-normal text-xl rounded-lg w-full  transition-colors duration-300 ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormValid}
            >
              Masuk
            </button>
          </form>
        </div>

      </section>
    </main>
  );
}
