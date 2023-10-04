// import { useState } from "react";
// uncomment the below line for HELLO_QUERY
// import { useQuery, gql } from "@apollo/client"; 
// import { useDebounce } from "use-debounce";
import Layout from "src/components/layout";
import Map from "src/components/map";
// import HouseList from "src/components/houseList";
// import { useLastData } from "src/utils/useLastData";
// import { useLocalState } from "src/utils/useLocalState";
// import { HousesQuery, HousesQueryVariables } from "src/generated/HousesQuery";

// const HELLO_QUERY = gql`
//   query HelloQuery {
//     hello
//   }
// `;

export default function Home() {
  // const { data } = useQuery(HELLO_QUERY);

  return (
    <Layout
      main={
        <div className="flex">
          <div className="w-1/2 pb-4" style={{ maxHeight: "calc(100vh - 64px)", overflowX: "scroll" }}>
            HouseList
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          </div>
          <div className="w-1/2">
            < Map />
          </div>
        </div>
      }
    />
  );
}
