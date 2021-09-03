import React from 'react';

const test = () => {
    return (
        <div>
<form className="hidden xl:h-full xl:flex xl:flex-col xl:justify-between">
<div className="lg:flex xl:block xl:overflow-y-auto">
<div className="px-4 py-4 border-t border-gray-900 sm:flex sm:-mx-2 lg:block lg:w-1/3 xl:border-t-0 xl:w-full">
<div className="flex -mx-2 sm:w-1/2 sm:mx-0 lg:w-full">
<label className="block w-1/2 px-2 sm:w-1/2 lg:w-1/2 xl:w-full">
<span className="text-sm font-medium text-gray-500">Bedrooms</span>
<select className="mt-1 form-select block w-full text-white shadow"><option>4</option>
<option>4</option><option>4</option><option>4</option></select></label>
<label className="block w-1/2 px-2 sm:w-1/2 lg:w-1/2 xl:w-full">
<span className="text-sm font-medium text-gray-500">Bathrooms</span>
<select className="mt-1 form-select block w-full text-white shadow">
<option>2</option><option>2</option><option>2</option><option>2</option>
</select></label>
</div>
<div className="mt-4 block w-full sm:mt-0 sm:px-2 sm:w-1/2 lg:w-full lg:mt-4">
<label className=""><span className="text-sm font-medium text-gray-500">Price Range</span>
<select className="mt-1 form-select block w-full text-white shadow"><option>Up to $2,000 /wk</option>
<option>Up to $2,000 /wk</option><option>Up to $2,000 /wk</option></select></label></div></div>
<div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
<span className="text-sm font-medium text-gray-400">Property Type</span>
<div className="sm:flex lg:block lg:mx-0"><label className="mt-3 sm:w-1/4 flex items-center lg:w-full lg:px-0">
<input className="form-radio" type="radio" name="propertyType" value="house">
<span className="ml-2 text-white">House</span></label>
<label className="mt-3 sm:w-1/4 flex items-center lg:w-full lg:px-0">
<input className="form-radio" type="radio" name="propertyType" value="apartment">
<span className="ml-2 text-white">Apartment</span></label>
<label className="mt-3 sm:w-1/4 flex items-center lg:w-full lg:px-0">
<input className="form-radio" type="radio" name="propertyType" value="loft">
<span className="ml-2 text-white">Loft</span></label>
<label className="mt-3 sm:w-1/4 flex items-center lg:w-full lg:px-0">
<input className="form-radio" type="radio" name="propertyType" value="townhouse">
<span className="ml-2 text-white">Townhouse</span></label>
</div>
</div>
<div className="px-4 py-4 border-t border-gray-900 lg:border-l lg:w-1/3 xl:w-full">
<span className="text-sm font-medium text-gray-400">Amenities</span>
<div className="sm:flex sm:flex-wrap">
<label className="mt-3 sm:w-1/4 flex items-center lg:w-1/2 xl:w-full">
<input className="form-checkbox" type="checkbox" name="balcony"><span className="ml-2 text-white">Balcony</span></label>
<label className="mt-3 sm:w-1/4 flex items-center lg:w-1/2 xl:w-full">
    <input className="form-checkbox" type="checkbox" name="airConditioning"><span className="ml-2 text-white">Air conditioning</span></label>
    <label className="mt-3 sm:w-1/4 flex items-center lg:w-1/2 xl:w-full">
        <input className="form-checkbox" type="checkbox" name="pool"><span className="ml-2 text-white">Pool</span></label>
        <label className="mt-3 sm:w-1/4 flex items-center lg:w-1/2 xl:w-full">
            <input className="form-checkbox" type="checkbox" name="beach"><span className="ml-2 text-white">Beach</span></label>
            <label className="mt-3 sm:w-1/4 flex items-center lg:w-1/2 xl:w-full">
                <input className="form-checkbox" type="checkbox" name="petFriendly">
                    <span className="ml-2 text-white">Pet friendly</span></label>
                    <label className="mt-3 sm:w-1/4 flex items-center lg:w-1/2 xl:w-full">
                        <input className="form-checkbox" type="checkbox" name="kidFriendly">
                            <span className="ml-2 text-white">Kid friendly</span></label>
                            <label className="mt-3 sm:w-1/4 flex items-center lg:w-1/2 xl:w-full">
                                <input className="form-checkbox" type="checkbox" name="parking">
                                    <span className="ml-2 text-white">Parking</span></label>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="bg-gray-900 px-4 py-4 sm:text-right">
                                        <button className="block w-full sm:w-auto sm:inline-block  bg-indigo-500 hover:bg-indigo-400 font-medium text-white px-4 py-2 rounded-lg xl:block xl:w-full">Update results</button>
                                        </div>
                                        </form>
        </div>
                                        );
};

                                        export default test;