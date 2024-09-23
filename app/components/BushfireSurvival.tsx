import React from "react";

const BushfireSurvival: React.FC = () => {
  return (
    <div className="w-full mx-auto p-4">
      {/* Section: Leave Early */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">
          Leave Early
        </h2>
        <hr className="w-autol max-w-xs border-gray-700 mb-6 mx-auto" />

        <div className="flex flex-col md:flex-row gap-4">
          {/* Leave Early Video */}
          <div className="w-full md:w-1/2">
            <video className="w-full h-auto rounded-lg" loop autoPlay>
              <source
                src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726650156/Leave_Early_lb1t86.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Leave Early Steps Video */}
          <div className="w-full h-auto md:w-1/2 flex">
            <video
              className="w-full h-auto rounded-lg md:w-3/4 lg:w-full"
              loop
              autoPlay
            >
              <source
                src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726650163/Leave_Early_Steps_u9dppa.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section: Well Prepared */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">
          Well Prepared
        </h2>
        <hr className="w-autol max-w-xs border-gray-700 mb-6 mx-auto" />

        <div className="flex flex-col md:flex-row gap-4">
          {/* Well Prepared Video */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <video className="w-full h-auto rounded-lg" loop autoPlay>
              <source
                src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726650328/Well_prepared_urvvqa.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Prepared Steps Video */}
          <div className="w-full md:w-1/2 flex">
            <video
              className="w-full h-auto rounded-lg md:w-3/4 lg:w-full"
              loop
              autoPlay
            >
              <source
                src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726650342/Prepared_steps_wbby1x.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section: Last Option */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">
          Last Option
        </h2>
        <hr className="w-autol max-w-xs border-gray-700 mb-6 mx-auto" />
        <div className="flex flex-col md:flex-row gap-4">
          {/* Last Option Video */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <video className="w-full h-auto rounded-lg" loop autoPlay>
              <source
                src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726649866/Last_option_rofcy2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Last Option Steps Video */}
          <div className="w-full md:w-1/2 flex">
            <video
              className="w-full h-auto rounded-lg md:w-3/4 lg:w-full"
              loop
              autoPlay
            >
              <source
                src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726649875/Last_Resort_Flowchart_fvssdg.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BushfireSurvival;
