import React from "react";

function Appointment() {
  return (
    <div>
      <div className="container bg-main rounded p-16">
        <h4 className="text-light text-3xl pb-8">Doctor Appointment</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pb-2">
          <div className="flex flex-col ">
            <label className="text-light text-opacity-75 pb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full rounded border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-secondary "
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-light text-opacity-75 pb-2">Phone</label>
            <input
              type="text"
              placeholder="Your Phone"
              className="block w-full rounded border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-secondary "
            />
          </div>
          <div className="flex flex-col">
            <label className="text-light text-opacity-75 pb-2">
              Depertment
            </label>
            <select
              name=""
              id=""
              className="block w-full rounded border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-secondary "
            >
              <option value="">Select Here</option>
              <option value="1">Noyon</option>
              <option value="1">Poritos</option>
              <option value="1">Abu Bokkor Siddiki</option>
              <option value="1">Milon Hossin</option>
              <option value="1">Juyel</option>
              <option value="1">Aklima</option>
              <option value="1">Shapla</option>
              <option value="1">Tonmoy</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-light text-opacity-75 pb-2">Doctor</label>
            <select
              name=""
              id=""
              className="block w-full rounded border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-secondary "
            >
              <option value="">Select Here</option>
              <option value="1">Noyon</option>
              <option value="1">Poritos</option>
              <option value="1">Abu Bokkor Siddiki</option>
              <option value="1">Milon Hossin</option>
              <option value="1">Juyel</option>
              <option value="1">Aklima</option>
              <option value="1">Shapla</option>
              <option value="1">Tonmoy</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="flex flex-col">
            <label className="text-light text-opacity-75 pb-2">Address</label>
            <input
              type="text"
              placeholder="Your Address"
              className="block w-full rounded border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-secondary "
            />
          </div>

          <div className="flex flex-col">
            <label className="text-light text-opacity-75 pb-2">Age</label>
            <input
              type="text"
              placeholder="Your Age"
              className="block w-full rounded border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-secondary "
            />
          </div>

          <div className="flex flex-col">
            <label className="text-light text-opacity-75 pb-2">Gender</label>
            <select
              name=""
              id=""
              className="block w-full rounded border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EDEDED] placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-secondary "
            >
              <option value="">Select Here</option>
              <option value="1">Male</option>
              <option value="1">Female</option>
              <option value="1">Other</option>
            </select>
          </div>

          <div className="self-end">
            <button
              type="submit"
              className="text-light font-bold bg-secondary py-4 lg:py-5 rounded block w-full"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
