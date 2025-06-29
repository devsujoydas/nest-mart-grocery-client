
const TopSelling = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold border-b-2 border-emerald-600 mb-5 pb-2">Top Selling</h1>

        <div className="grid grid-rows-3 gap-4">
          <div
            className="flex items-center gap-4 rounded-lg hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition p-3">
            <img className="w-24 rounded-lg" src="../../../assets/top selling/thumbnail-1.jpg" alt="" />
            <div>
              <h1>Carrot Nurtition and Health Benifit</h1>
              <div className="flex ">
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/black-rating-stars.png" alt="" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <h1 className="text-emerald-500 font-semibold text-xl">$8.58</h1>
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-4 rounded-lg hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition p-3">
            <img className="w-24 rounded-lg" src="../../../assets/top selling/thumbnail-2.jpg" alt="" />
            <div>
              <h1>Capsicum Red Green Yellow</h1>
              <div className="flex ">
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/black-rating-stars.png" alt="" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <h1 className="text-emerald-500 font-semibold text-xl">$6.85</h1>
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-4 rounded-lg hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition p-3">
            <img className="w-24 rounded-lg" src="../../../assets/top selling/thumbnail-3.jpg" alt="" />
            <div>
              <h1>Mango Juice & Mango Slices</h1>
              <div className="flex ">
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/gold-rating-stars.png" alt="" />
                <img className="" src="../../../assets/popular product/black-rating-stars.png" alt="" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <h1 className="text-emerald-500 font-semibold text-xl">$4.99</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopSelling