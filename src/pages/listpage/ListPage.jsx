import "./listPage.scss";
import {ListData} from "../../lib/dummydata.js"
import Filter from "../../components/Filter/Filter.jsx";
import Card from "../../components/card/Card.jsx";

function listPage() {
const data = ListData

  return (
    <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter />
        {data.map(item=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
    <div className="mapContainer">Map</div>
      
    </div>
  )
}

export default listPage