/* eslint-disable react/prop-types */
import { Button, Input, Select } from "antd";
const { Search } = Input;

const TeachersSearchComp = ({ addOpenModal, setFiltered, data }) => {
    const handleSearch = (e) => {
        const text = e.target.value.toLowerCase().trim();
        if (text) {
          setFiltered(
            data.filter(
              (e) =>
                e.firstname.toLowerCase().includes(text) ||
                e.lastname.toLowerCase().includes(text)
            )
          );
        } else setFiltered(data);
      };
      const handleFilter = (value) => {
        let filteredValue;
        if (value == "All") {
          filteredValue = data;
        } else {
          filteredValue = data.filter((data) => data.group == value);
        }
        setFiltered(filteredValue);
      };
      const handleLevelFilter = (value) => {
        let filteredValue;
        if (value == "All") {
          filteredValue = data;
        } else {
          filteredValue = data.filter((data) => data.level == value);
        }
        setFiltered(filteredValue);
      };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        gap: "20px",
        marginTop: 30
      }}
    >
      <Search
        placeholder="Search..."
        onChange={handleSearch}
        enterButton
        size="large"
      />
      <Select
        defaultValue="All"
        style={{
          width: 200,
        }}
        size="large"
        onChange={handleFilter}
        options={[
          {
            value: "All",
            label: "All",
          },
          {
            value: "React N34",
            label: "React N34",
          },
          {
            value: "React N35",
            label: "React N35",
          },
          {
            value: "React N45",
            label: "React N45",
          },
        ]}
      />
      <Select
        defaultValue="All"
        style={{
          width: 200,
        }}
        size="large"
        onChange={handleLevelFilter}
        options={[
          {
            value: "All",
            label: "All",
          },
          {
            value: "Senior",
            label: "Senior",
          },
          {
            value: "Middle",
            label: "Middle",
          },
          {
            value: "Junior",
            label: "Junior",
          },
        ]}
      />
      <Button size="large" style={{ width: "15%" }} onClick={addOpenModal}>
        ADD
      </Button>
    </div>
  )
}

export default TeachersSearchComp