import PageBanner from "../component/tools/PageBanner";
import BloodGroupList from "../component/blood/BloodGroupList";

function Blood() {
  return (
    <>
      <PageBanner bg="bg-common-banner" title="Blood" />
      <div className="container">
        <BloodGroupList/>
      </div>
    </>
  );
}

export default Blood;
