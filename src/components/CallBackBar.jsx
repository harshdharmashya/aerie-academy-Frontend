import React, { useState } from 'react';
import axios from 'axios';
const CallbackBar = () => {
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!/^\d{10}$/.test(mobile)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        try {
            setLoading(true);
            await axios.post('https://aerie-academy-backend.vercel.app/api/contact', { phone: mobile,name: 'Callback Lead',email: 'callback@noemail.com',}, { headers: { 'Content-Type': 'application/json' } });
            setSuccessMsg('Thank you! Our advisor will call you shortly.');
            setMobile('');
        } catch (error) {
            console.error('Error submitting number:', error);
            alert('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] bg-gradient-to-r from-blue-800 to-blue-400 shadow-lg z-50 text-white py-4 px-4 rounded-tl-md rounded-tr-md">
            <div className="max-w-5xl mx-auto text-center">
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                    Get a Callback from our Team
                </h3>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row justify-center items-center gap-2"
                >
                    <input
                        type="tel"
                        maxLength={10}
                        required
                        placeholder="Enter your 10 digit mobile number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full sm:w-[300px] px-4 py-1 rounded-l-md text-black placeholder-gray-500 outline-none"
                    />
                    <button
                        type="submit"
                        className="px-5 py-1 bg-blue-300 text-blue-900 hover:bg-blue-200 font-semibold rounded-r-md transition"
                    >
                        {loading ? 'Sending...' : 'Get a Call Back'}
                    </button>
                </form>
                {successMsg && (
                    <p className="text-sm mt-2 text-white font-medium">{successMsg}</p>
                )}
            </div>
        </div>
    );
};

export default CallbackBar;
