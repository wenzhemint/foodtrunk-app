import { FC, useContext, useEffect, useState } from "react"
import styles from "./SearchBlock.module.scss"
import { Input } from 'antd'
import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import { useSelector } from "react-redux"
import { Pagination } from 'antd'

type SearchBlockProps = {
  title?: string;
  updateFacilitiesNext: (page: number) => void;
} 

const { Search } = Input;
interface DataType {
  locationid: number;
  facilityType: string;
  locationDescription: string;
  address: string;
  zipCodes: number;
}
const columns: TableColumnsType<DataType> = [
  {
    title: 'Type',
    dataIndex: 'facilityType',
  },
  {
    title: 'Location Description',
    dataIndex: 'locationDescription',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'ZipCode',
    dataIndex: 'zipCodes',
  },
];

const SearchBlock: FC<SearchBlockProps> = ({ title, updateFacilitiesNext }) => {
  const [loading, setLoading] = useState(false);
  const facilities = useSelector((state: any) => state.facility.facilities)
  const data: DataType[] = facilities.content || []
  
  useEffect(() => {
    console.log("search block mounted.")
  })

  const updatePagination = (e: any) => {
    console.log("== e: ", e)
    const nextIndex = e
    updateFacilitiesNext(nextIndex)
  }

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
        
        <div className={`${styles.searchContent}`}>
          <div className={`${styles.searchTable}`}>
            <Table 
              columns={columns} 
              dataSource={data} 
              pagination={false} 
              rowKey="locationid" 
              style={{
                borderRadius: "8px",
                overflow: "hidden"
              }}
              className={`${styles.antdTable}`}
            />
          </div>

          <div className={`${styles.searchPagination}`}>
            <Pagination 
              defaultCurrent={1} 
              current={facilities.number?facilities.number+1:1} 
              total={facilities?.totalPages || 1} 
              defaultPageSize={1} 
              showQuickJumper
              onChange={updatePagination}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBlock;