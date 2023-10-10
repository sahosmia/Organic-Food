import React from "react";

function Choose() {
  return (
    <div className="py-20">
      <div className="container flex flex-col lg:flex-row gap-20 justify-center items-center">
        <div className="flex-1 ">
          <img
            src="/img/choose.jpg"
            alt=""
            className="w-full rounded block m-auto "
          />
        </div>
        <div className="flex-1">
          <h6 className="text-main pb-3">Why Choose Us</h6>
          <h3 className="text-secondary text-2xl md:text-5xl pb-8">
            Heart Surgery Specialist Expert Doctors
          </h3>
          <p className="pb-5 text-sm font-medium">
            Chest pain is the most common warning sign of a heart attack. But
            there can be other symptoms, too, like lightheadedness.Chest pain is
            the most common warning sign of a heart attack. But there can be
            other symptoms, too, like lightheadedness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <div className="flex justify-center items-center gap-2 lg:gap-4 group">
              <span className="text-2xl border-l-2 bg-slate-200 bg-opacity-80 border-main h-full w-32 m-auto flex justify-center items-center text-main group-hover:bg-main group-hover:text-light transtition-all duration-700">
                <i className="fa-regular fa-heart"></i>
              </span>

              <div>
                <h4 className="text-secondary pb-2">Personalized Healthcare</h4>
                <p className="text-sm font-medium">
                  Detects the presence or absence of flow into blood.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 lg:gap-4 group">
              <span className="text-2xl border-l-2 bg-slate-200 bg-opacity-80 border-main h-full w-32 m-auto flex justify-center items-center text-main group-hover:bg-main group-hover:text-light transtition-all duration-700">
                <i className="fa-solid fa-stethoscope"></i>
              </span>

              <div>
                <h4 className="text-secondary pb-2">Professional Team</h4>
                <p className="text-sm font-medium">
                  Detects the presence or absence of flow into blood.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 lg:gap-4 group">
              <span className="text-2xl border-l-2 bg-slate-200 bg-opacity-80 border-main h-full w-32 m-auto flex justify-center items-center text-main group-hover:bg-main group-hover:text-light transtition-all duration-700">
                <i className="fa-solid fa-syringe"></i>
              </span>

              <div>
                <h4 className="text-secondary pb-2">Regularly Checkup</h4>
                <p className="text-sm font-medium">
                  Detects the presence or absence of flow into blood.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 lg:gap-4 group">
              <span className="text-2xl border-l-2 bg-slate-200 bg-opacity-80 border-main h-full w-32 m-auto flex justify-center items-center text-main group-hover:bg-main group-hover:text-light transtition-all duration-700">
                <i className="fa-solid fa-capsules"></i>
              </span>

              <div>
                <h4 className="text-secondary pb-2">Nuclear Stress Testing</h4>
                <p className="text-sm font-medium">
                  Detects the presence or absence of flow into blood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
