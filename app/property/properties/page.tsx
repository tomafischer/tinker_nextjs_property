import Property from "@/lib/property/Property";
import connectDB from "@/lib/mongo/mongoose";

import properties_local from "@/fake-data/property/properties.json";
type Props = {}

const PropertiesPage = async ({ }: Props) => {
  //await connectDB();
  //const properties = await Property.find({}).lean();
  const properties = properties_local
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            properties.map((property) => (
              <div>{property.name}</div>
            )

            )
          }
        </div>)
        }
      </div>
    </section>
  );
}

export default PropertiesPage;