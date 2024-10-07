import InfoBox from "./InfoBox"

type Props = {}
export default function InfoBoxes({ }: Props) {
  return (
    <section>
      <div className="container-xl lg:conatiner m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            buttonInfo={{
              text: "Browse Properties",
              link: "/property/properties",
              backgroundColor: "bg-black"
            }}
          >Find your dream rental property. Bookmark properties and contact
            owners. </InfoBox>
          <InfoBox heading="Add Property" 
          backgroundColor="bg-blue-100" 
          buttonInfo={{ text: "List Property", link: "/property/properties/add" , backgroundColor:'bg-blue-500' }}
          >List your properties and reach potential tenants. Rent as an
            airbnb or long term.</InfoBox>
            
        </div>

      </div>
    </section>
  )
}