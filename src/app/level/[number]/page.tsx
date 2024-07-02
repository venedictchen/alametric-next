import React from 'react';

const LevelPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-purple-50 p-4 ">
            <div className="bg-white-100 rounded-lg p-3 mb-4" style={{ borderTop: '12px solid #6739ba' }}>
                <h1 className="text-2xl font-bold mb-2">Level 1</h1>
                <p className="text-[#fc3030]">* Menunjukkan Pertanyaan yang wajib diisi</p>
            </div>
            <div className="relative bg-white-100 rounded-lg py-6">
                <div className="absolute top-0 left-0 w-full bg-purple-primary py-2 rounded-t-lg">
                    <p className="text-white-100 text-left pl-4 font-normal">1/20</p>
                </div>

                <div className="p-4 py-8">
                    <div className="flex justify-between">
                        <p className="text-md text-black-100">1. Jujur adalah....<span className="text-[#fc3030]">*</span></p>
                        <p className="text-md text-grey-200">10 Poin</p>
                    </div>

                    {/* Radio Inputs */}
                    <div className="flex flex-col gap-8 mt-4">
                        <label className="flex items-center mb-2">
                            <input type="radio" name="answer" value="option1" className="mr-2 h-6 w-6 rounded-full" />
                            <span>Opsi 1</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input type="radio" name="answer" value="option2" className="mr-2 h-6 w-6 rounded-full" />
                            <span>Opsi 2</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input type="radio" name="answer" value="option3" className="mr-2 h-6 w-6 rounded-full" />
                            <span>Opsi 3</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input type="radio" name="answer" value="option4" className="mr-2 h-6 w-6 rounded-full" />
                            <span>Opsi 4</span>
                        </label>
                    </div>
                </div>
            </div>
                    <div className="flex  flex-row gap-8 justify-center items-center mt-6">
                        <button className="bg-white-100 text-purple-primary font-normal rounded-lg px-10 text-xl py-4 shadow-lg">Kembali</button>
                        <button className="bg-white-100 text-purple-primary font-normal rounded-lg px-10 text-xl py-4 shadow-lg">Berikutnya</button>

                    </div>
        </div>
    );
}

export default LevelPage;
