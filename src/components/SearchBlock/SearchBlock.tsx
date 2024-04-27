import { FC, useContext, useState } from "react"
import styles from "./SearchBlock.module.scss"
import { Input } from 'antd'
import { Table } from 'antd'
import type { TableColumnsType } from 'antd'

const { Search } = Input;
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data: DataType[] = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}


const SearchBlock: FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className={`${styles.searchBlock}`}>
        <div className={`${styles.searchInput}`}>
          <Search 
            placeholder="Search Facilities by Address" 
            enterButton="Search" 
            size="large" 
            loading 
          />
        </div>
        
        <div className={`${styles.searchTable}`}>
          <Table 
            columns={columns} 
            dataSource={data} 
            pagination={false} 
            style={{
              borderRadius: "8px",
              overflow: "hidden"
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBlock;