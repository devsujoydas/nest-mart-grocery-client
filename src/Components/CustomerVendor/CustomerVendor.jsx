import React, { useState } from 'react';

const CustomerVendor = () => {
    const [gender, setGender] = useState('');

    return (
        <div className="space-y-2 "> 

            <div className="flex text-sm font-semibold flex-col gap-3 space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === 'customer'}
                        onChange={() => setGender('customer')}
                        className="form-radio text-emerald-500"
                    />
                    <span>I am a customer</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === 'vendor'}
                        onChange={() => setGender('vendor')}
                        className="form-radio text-pink-500"
                    />
                    <span>I am a vendor</span>
                </label>

            </div>

            <p className="text-sm text-gray-700 mt-2">Selected Role: <span className="font-medium">{gender}</span></p>
        </div>
    );
};

export default CustomerVendor;