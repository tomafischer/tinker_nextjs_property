
type Props = {}
export default function Hero({ }: Props) {
  return (
    <section className="bg-blue-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Find the perfect Rental</h1>
          <p className="my-4 text-white text-xl">Discover the perfect property that suits your needs</p>
        </div>
        {/* Form Component */}
        <form className="flex flex-col mt-3 mx-auto max-w-2xl w-full md:flex-row items-center">
          {/* location  */}
          <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="location" className="sr-only">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter Location (City, State, Zip, etc.)"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus: ring-blue-500"
            />
          </div>
          {/* Property Type */}
          <div className="w-full md:w-2/5 md:pl-2">
            <label htmlFor="propertyType" className="sr-only">Property Type</label>
            <select
              id="property-type"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500">    
              <option value="All">All</option>
              <option value="Apartment">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="Condo">Condo</option>
              <option value="House">House</option>
              <option value="Cabin Or Cottage">Cabin or Cottage</option>
              <option value="Loft">Loft</option>
              <option value="Room">Room</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Button */}
          <button className="mt-4 md:mt-0 md:ml-4 px-6 py-3 w-full md:w-auto rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Search</button>

        </form>
      </div>
    </section>
  )
}
