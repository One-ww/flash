import classNames from "classnames";
import React, { useState } from "react";

import styles from "./index.scss";

const CustomizedClassSchedule: React.FC = () => {
  const [tableData, setTableData] = useState(
    Array.from({ length: 8 }, () => Array(7).fill(""))
  );

  const [tableOverData, setTableOverData] = useState(
    Array.from({ length: 8 }, () => Array(7).fill(false))
  );

  const courseInformation = [
    { courseName: "语文", color: "#058f85" },
    { courseName: "数学", color: "#fdb537" },
    { courseName: "英语", color: "#7d88bd" },
    { courseName: "音乐", color: "#93c4c8" },
    { courseName: "政治", color: "#e8b080" },
    { courseName: "历史", color: "#81b1c7" },
    { courseName: "体育", color: "#dc514c" },
  ];

  const handleDragStart = (e: any) => {
    e.dataTransfer.effectAllowed = e.target.dataset.effect;
    e.dataTransfer.setData("text/plain", JSON.stringify(e.target.textContent));
  };

  const handleDragOver = (e: any, dayIndex: any, tagIndex: any) => {
    e.preventDefault();
  };

  const getDropNode = (node: any) => {
    while (node) {
      if (node.dataset.drop) {
        return node;
      }
      node = node.parentNode;
    }
    return null;
  };

  const clearDropStyle = (dayIndex: any, tagIndex: any) => {
    const newTableOverData = [...tableOverData];
    newTableOverData[tagIndex][dayIndex] = false;
    setTableOverData(newTableOverData);
  };

  const handleDragEnter = (e: any, dayIndex: any, tagIndex: any) => {
    const newTableOverData = [...tableOverData];
    newTableOverData[tagIndex][dayIndex] = true;
    setTableOverData(newTableOverData);
    clearDropStyle(dayIndex, tagIndex);
  };

  const handleDrop = (e: any, dayIndex: any, periodIndex: any) => {
    clearDropStyle(periodIndex, dayIndex);
    const dropNode = getDropNode(e.target);
    if (!dropNode) {
      return;
    }
    if (e.dataTransfer.effectAllowed !== dropNode.dataset.drop) {
      return;
    }
    if (dropNode.dataset.drop === "copy") {
      const itemText = JSON.parse(e.dataTransfer.getData("text/plain"));

      const newTableData = [...tableData];
      newTableData[periodIndex][dayIndex] = itemText as any;
      setTableData(newTableData);
    } else {
      // move not implemented in this example
    }
  };

  const renderCrudDiv = (title: string) => {
    const tagIndex = courseInformation.findIndex((item) => {
      return item.courseName === title;
    });

    if (title) {
      return React.createElement(
        "div",
        {
          style: { backgroundColor: courseInformation[tagIndex].color },
          className: styles.item,
          "data-effect": "move",
          draggable: true,
          onDragStart: (e) => handleDragStart(e),
        },
        title
      );
    }
  };

  return (
    <div className={styles.customizedClassScheduleContainer}>
      <div className={styles.container}>
        <div className={styles.left} data-drop="move">
          {courseInformation.map((item, index) => {
            return (
              <div
                key={index}
                data-effect="copy"
                draggable="true"
                style={{ backgroundColor: item.color }}
                className={styles.item}
                onDragStart={(e) => handleDragStart(e)}
              >
                {item.courseName}
              </div>
            );
          })}
        </div>
        <div className={styles.right}>
          <table>
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <td />
                <th>星期一</th>
                <th>星期二</th>
                <th>星期三</th>
                <th>星期四</th>
                <th>星期五</th>
                <th>星期六</th>
                <th>星期日</th>
              </tr>
            </thead>
            <tbody>
              {/* 上午部分 */}
              <tr>
                <th rowSpan={4} className={styles.span}>
                  上午
                </th>
                {[...Array(7)].map((_, dayIndex) => (
                  <td
                    className={classNames(
                      tableOverData[0][dayIndex] ? styles["drop-over"] : ""
                    )}
                    key={`morning-${dayIndex}`}
                    data-drop="copy"
                    onDragOver={(e) => handleDragOver(e, dayIndex, 0)}
                    onDragEnter={(e) => handleDragEnter(e, dayIndex, 0)}
                    onDrop={(e) => handleDrop(e, dayIndex, 0)}
                  >
                    {renderCrudDiv(tableData[0][dayIndex])}
                  </td>
                ))}
              </tr>
              {[1, 2, 3].map((index) => (
                <tr key={`morning-row-${index}`}>
                  {[...Array(7)].map((_, dayIndex) => (
                    <td
                      key={`morning-cell-${index}-${dayIndex}`}
                      data-drop="copy"
                      onDragOver={(e) => handleDragOver(e, dayIndex, index)}
                      onDragEnter={(e) => handleDragEnter(e, dayIndex, index)}
                      onDrop={(e) => handleDrop(e, dayIndex, index)}
                    >
                      {renderCrudDiv(tableData[index][dayIndex])}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className={styles.noborder} />
              </tr>
              {/* 下午部分 */}
              <tr>
                <th rowSpan={4} className={styles.span}>
                  下午
                </th>
                {[...Array(7)].map((_, dayIndex) => (
                  <td
                    key={`afternoon-${dayIndex}`}
                    data-drop="copy"
                    onDragOver={(e) => handleDragOver(e, dayIndex, 4)}
                    onDragEnter={(e) => handleDragEnter(e, dayIndex, 4)}
                    onDrop={(e) => handleDrop(e, dayIndex, 4)}
                  >
                    {renderCrudDiv(tableData[4][dayIndex])}
                  </td>
                ))}
              </tr>
              {[1, 2, 3].map((index) => (
                <tr key={`afternoon-row-${index}`}>
                  {[...Array(7)].map((_, dayIndex) => (
                    <td
                      key={`afternoon-cell-${index}-${dayIndex}`}
                      data-drop="copy"
                      onDragOver={(e) => handleDragOver(e, dayIndex, index + 4)}
                      onDragEnter={(e) =>
                        handleDragEnter(e, dayIndex, index + 4)
                      }
                      onDrop={(e) => handleDrop(e, dayIndex, index + 4)}
                    >
                      {renderCrudDiv(tableData[index + 4][dayIndex])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomizedClassSchedule;
