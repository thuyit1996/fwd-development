import React from 'react';
import {columnsSetting} from "./helper";

interface IProps {
  benefitData: any[]
}

const TableInsurance: React.FC<IProps> = ({benefitData}) => {
  return (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
        <tr>
          {columnsSetting.map((item, index) => {
            return (
              <th scope="col" key={index}>{item.header}</th>
            )
          })}
        </tr>
        </thead>
        <tbody>
        {
          benefitData.map((item, index) => {
            return (
              <tr key={index}>
                {
                  columnsSetting.map((column, idx) => {
                    return (
                      <th key={idx} style={{textAlign: 'center'}}> {item[column["key"]]}</th>
                    )
                  })
                }
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default TableInsurance