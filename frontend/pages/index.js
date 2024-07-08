import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [rollNumber, setRollNumber] = useState('');
  const [eligibility, setEligibility] = useState(null);

  const checkEligibility = async () => {
    const res = await fetch(`/api/checkEligibility?rollNumber=${rollNumber}`);
    const data = await res.json();
    setEligibility(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Saylani Mass IT - Student Certification Portal</title>
        <link rel="icon" href="/saylani-icon.png" />
      </Head>
      <div className="bg-white shadow-md rounded-lg p-8">
        <img src="/saylani-icon.png" alt="Saylani Mass IT" className="w-32 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-6 text-center">Student Certification Portal</h1>
        <input
          type="text"
          placeholder="Enter your Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        />
        <button
          onClick={checkEligibility}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Check Eligibility
        </button>
        {eligibility && (
          <div className="mt-4">
            {eligibility.isEligible ? (
              <div className="text-center">
                <p className="text-green-500">You are eligible for the certification!</p>
                {eligibility.certificateGenerated ? (
                  <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                    Download Certificate
                  </button>
                ) : (
                  <p className="text-yellow-500">Certificate is not generated yet.</p>
                )}
              </div>
            ) : (
              <p className="text-red-500 text-center">You are not eligible for the certification.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
