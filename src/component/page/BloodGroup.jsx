import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useParams } from "react-router";
import PageBanner from "../component/tools/PageBanner";
import BloodGroupList from "../component/blood/BloodGroupList";
import bloods from "../data/bloods.json";

function BloodGroup() {
  const { group } = useParams();
  const [search, setSearch] = useState();
  const [bloodsByGroup, setBloodsByGroup] = useState();

  const columns = [
    { name: "Name", selector: (row) => row.name },
    { name: "Address", selector: (row) => row.address },
    { name: "Group", selector: (row) => row.group },
    { name: "Phone", selector: (row) => row.phone },
  ];

  const searchBlood = (e) => {
    setBloodsByGroup(
      bloods.filter(
        (blood) =>
          blood.group === group &&
          blood.address.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  useEffect(() => {
    setBloodsByGroup(bloods.filter((blood) => blood.group === group));
  }, [group]);
  return (
    <>
      <PageBanner bg="bg-common-banner" title={`Blood Group: ${group}`} />
      <div className="container py-10">
        <DataTable
          title={group}
          columns={columns}
          data={bloodsByGroup}
          pagination
          paginationPerPage={50}
          actions={
            <input
              type="text"
              placeholder="Search By Address"
              value={search}
              onChange={searchBlood}
              className="shadow border text-lg border-main rounded w-60 py-2 px-3 my-10 text-gray-700 focus:outline-none focus:shadow-outline"
            />
          }
          fixedHeader
          fixedHeaderScrollHeight="650px"
          highlightOnHover
        />
      </div>

      <div className="container">
        <BloodGroupList />
      </div>
    </>
  );
}

export default BloodGroup;
