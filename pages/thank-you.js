// pages/thank-you.js
import Link from 'next/link';

function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl text-gray-700">Thank You for Your Submission</h1>
        <p className="text-sm text-gray-600">Your submission was successful.</p>
        <p className="text-lg text-gray-700 mt-4">We will contact you shortly.</p>
        <Link href="/">
          <p className="text-blue-500 mt-4 block">Back to Home</p>
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
