import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useParams } from "react-router";
import PageBanner from "../component/tools/PageBanner";
import BloodGroupList from "../component/blood/BloodGroupList";
import bloods from "../data/bloods.json";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
function BloodGroup() {
  const { group } = useParams();
  const [bloodsByGroup, setBloodsByGroup] = useState();

  const columns = [
    { name: "Name", selector: (row) => row.name },
    { name: "Group", selector: (row) => row.group },
    { name: "Phone", selector: (row) => row.phone },
    {
      name: "Facebook",
      selector: (row) => (
        <Link className="block text-xl text-blue-400" to={row.facebook}>
          <FaFacebook />
        </Link>
      ),
    },
  ];

  useEffect(() => {
    setBloodsByGroup(bloods.filter((blood) => blood.group === group));
  }, [group]);
  return (
    <>
      <PageBanner bg="bg-common-banner" title={`Blood Group: ${group}`} />
      <div className="container py-10">
        <DataTable
          columns={columns}
          data={bloodsByGroup}
          pagination
          paginationPerPage={50}
          fixedHeader
          fixedHeaderScrollHeight="800px"
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
