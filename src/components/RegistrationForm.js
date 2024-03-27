import React from "react";
import CarouselComponent from "./Carousel";

function RegistrationForm() {
  return (
    <div className="md:mt-[-200px]">
      <div className="flex flex-row ml-0 bg-blue-800 flex-wrap sm:flex-wrap md:flex-wrap justify-center md:justify-end w-[100vw]">
        <div className="flex justify-center sm:ml-10 ml-10 mt-[-40px] md:ml-[10] w-[440px] md:justify-center antialiased pt-4 shrink-0">
          {/* <div class="font-sans min-h-screen bg-blue-800 -mt-[140px] md:-mt-[140px] flex justify-center md:justify-end antialiased pt-24"> */}
          <div class="flex flex-col justify-center  sm:ml-10 md:mr-[40] mx-10 mb-5 ">
            <form action="#">
              <div class="flex flex-col border border-blue-600 bg-white pt-[-10] p-10 rounded-lg shadow space-y-6">
                <h1 class="font-bold text-xl text-center">
                  Book a Free Class!{" "}
                  <div className="text-green-600">Register Here</div>
                </h1>

                <div class="flex flex-col space-y-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                    placeholder="Name"
                  />
                </div>

                <div class="flex flex-col space-y-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                    placeholder="Email"
                  />
                </div>

                <div class="relative">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    checked
                    class="inline-block align-middle"
                  />
                  <label class="inline-block align-middle" for="remember">
                    Remember me
                  </label>
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                  <div>
                    Already registered?
                    <a
                      href="#"
                      class="inline-block text-blue-500 hover:text-blue-800 hover:underline"
                    >
                      {" "}
                      Login
                    </a>
                  </div>
                  <button
                    type="submit"
                    class="bg-red-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-red-600 transition-colors"
                  >
                    Book Free Class
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>
      <CarouselComponent />
    </div>
  );
}

export default RegistrationForm;
