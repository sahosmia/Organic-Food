import groups from "../../data/group.json";
import { Link } from "react-router-dom";

function BloodGroupList() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-20">
      {groups.map((group, index) => (
        <Link to={`/blood/${group.title}`} key={index}>
          <div className="bg-secondary text-center rounded py-16 shadow">
            <h1 className="text-2xl text-light">{group.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BloodGroupList;
