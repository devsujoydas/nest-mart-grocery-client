
const Footer = () => {
  return (
    <div className="max-w-screen-2xl lg:mx-auto mx-10">
      <footer className="mt-10 ">

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4  ">

          <div className="grid gap-4 text-sm">
            <img src="../../../assets/svgs/logo.svg" alt="" />
            <p className="text-center lg:text-left -mt-2 ">Awesome grocery store</p>

            <div className="grid lg:gap-2 gap-3">
              <div
                className="flex justify-center lg:text-left text-center lg:flex-row flex-col lg:items-start items-center lg:gap-2">
                <img className="" src="../../../assets/svgs/icon-location.svg" alt="" />
                <div className="flex flex-col lg:flex-row gap-1">
                  <p className="font-semibold">Address:</p><span>Chorpara, Maskanda, Mymensingh</span>
                </div>
              </div>
              <div className="flex items-center lg:flex-row flex-col lg:gap-2">
                <img src="../../../assets/svgs/icon-contact.svg" alt="" />
                <p className="font-semibold">Call Us:</p><span>+880 1303436299</span>
              </div>
              <div className="flex items-center lg:flex-row flex-col lg:gap-2 flex-wrap">
                <img src="../../../assets/svgs/icon-email-2.svg" alt="" />
                <p className="font-semibold">Email:</p><span>nestsujoy@gmail.com</span>
              </div>
              <div className="flex items-center  lg:flex-row flex-col lg:gap-2">
                <img src="../../../assets/svgs/icon-clock.svg" alt="" />
                <p className="font-semibold">Hours:</p><span> 10:00 - 18:00, Mon-Sat</span>
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Company</h1>
            <a href="#none" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">About
              Us</a>
            <a href="#none" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Delivery
              Info</a>
            <a href="#none" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Privacy
              Policy</a>
            <a href="#none" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Terms &
              Conditions</a>
            <a href="#none" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Contact
              Us</a>
            <a href="#none" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Support
              Center</a>
            <a href="#none"
              className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Careers</a>
          </div>


          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Account</h1>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Sign
              In</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">View
              Cart</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">My
              Wishlist</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Track My
              Order</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Help
              Ticket</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Shipping
              Details</a>
          </div>


          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Corporate</h1>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Become a
              Vendor</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Affiliate
              Program</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Farm
              Business</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Farm
              Careers</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Our
              Suppliers</a>
            <a href="#code"
              className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Accessibility</a>
            <a href="#code"
              className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Promotions</a>
          </div>


          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Popular</h1>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Milk &
              Flavoured Milk</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Butter and
              Margarine</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Eggs
              Substitutes</a>
            <a href="#code"
              className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Marmalades</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Sour Cream
              and Dips</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Tea &
              Kombucha</a>
            <a href="#code" className="hover:text-emerald-500 hover:translate-x-2 transition active:scale-95">Cheese</a>
          </div>


          <div className="flex flex-col gap-1 lg:gap-2">
            <h1 className="text-2xl font-semibold">Install App</h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <a href="#code"
                  className="hover:text-emerald-500 hover:translate-x-1 transition active:scale-95">From App Store
                  or Google Play</a>
                <div className="flex gap-2 lg:flex-row flex-col">
                  <a href="#ios-store">
                    <img className="w-3/4 lg:w-full hover:shadow-md hover:-translate-y-1 transition"
                      src="../../../assets/others/app-store.jpg" alt="" />
                  </a>
                  <a href="#play-store">
                    <img className="w-3/4 lg:w-full hover:shadow-md hover:-translate-y-1 transition"
                      src="../../../assets/others/google-play.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#code" className="hover:text-emerald-500 hover:translate-x-1 transition">Secured Payment
                  Gateways</a>
                <div className="flex gap-2">
                  <img className="w-full hover:shadow-md hover:-translate-y-1 transition"
                    src="../../../assets/others/payment-method.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="" id="contact-us">
          <div
            className="flex lg:flex-row flex-col-reverse gap-4 justify-between items-center max-w-screen-2xl mx-auto border-emerald-600 border-t py-8 mt-10  ">
            <div className="flex flex-col text-center">
              <h1 className="text-sm">&copy; 2024, <span>Nest</span> - Ecommerce By <span
                className="text-emerald-500 font-semibold">Sujoy</span></h1>
              <h1 className="text-sm">All rights reserved</h1>
            </div>
            <div className="flex lg:flex-row flex-col gap-4">
              <div className="flex gap-2 ">
                <img className="w-8 " src="../../../assets/svgs/phone-call.svg" alt="" />
                <div className="flex flex-col lg:items-start items-center ">
                  <button className="text-2xl font-semibold text-emerald-500 active:scale-95 transition-all">+880
                    9638 831422</button>
                  <h1 className="text-sm text-gray-500 -mt-2">Working 8:00 - 22:00</h1>
                </div>
              </div>
              <div className="flex gap-2 ">
                <img className="w-8 " src="../../../assets/svgs/phone-call.svg" alt="" />
                <div className="flex flex-col lg:items-start items-center ">
                  <button className="text-2xl font-semibold text-emerald-500 active:scale-95 transition-all">+880
                    1303-436299</button>
                  <h1 className="text-sm text-gray-500 -mt-2">24/7 Support Center</h1>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex gap-2">
                <h1>Follow Us</h1>
                <div className="flex gap-1">
                  <a href="https://web.facebook.com/sujoydas36"><img
                    className="bg-emerald-500 rounded-full p-1 w-6 hover:-translate-y-1 transition"
                    src="../../../assets/svgs/icon-facebook-white.svg" alt="" /></a>
                  <a href="https://github.com/devsujoy36"><img
                    className="bg-emerald-500 rounded-full p-1 w-6 hover:-translate-y-1 transition"
                    src="../../../assets/svgs/icon-twitter-white.svg" alt="" /></a>
                  <a href="https://github.com/devsujoy36"><img
                    className="bg-emerald-500 rounded-full p-1 w-6 hover:-translate-y-1 transition"
                    src="../../../assets/svgs/github.png" alt="" /></a>
                  <a href="https://api.whatsapp.com/send/?phone=%2B8801303436299&text&type=phone_number&app_absent=0"><img
                    className="rounded-full w-6 hover:-translate-y-1 transition"
                    src="../../../assets/svgs/whatsappicon.png" alt="" /></a>
                  <a href="https://www.youtube.com/@xenonlivexone"><img
                    className="bg-emerald-500 rounded-full w-6 hover:-translate-y-1 transition"
                    src="../../../assets/svgs/youtube.png" alt="" /></a>
                </div>
              </div>
              <h1 className="text-xs">Up to 15% discount on your first subscribe</h1>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer