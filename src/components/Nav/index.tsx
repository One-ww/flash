import "./index.custom.scss";

import {
  BgColorsOutlined,
  CheckOutlined,
  HomeOutlined,
  MenuOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  useEventListener,
  useLocalStorageState,
  useSafeState,
  useUpdateEffect,
} from "ahooks";
import { Drawer, message } from "antd";
import classNames from "classnames";
import React from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { setMode, setNavShow } from "@/redux/actions";
import { storeState } from "@/redux/interface";
import { modeMap, modeMapArr } from "@/utils/modeMap";

import { useLinkList } from "./config";
import styles from "./index.scss";

interface Props {
  navShow?: boolean;
  setNavShow?: Function;
  mode?: number;
  setMode?: Function;
}

const bodyStyle = window.document.getElementsByTagName("body")[0].style;

const Nav: React.FC<Props> = ({ navShow, setNavShow, mode, setMode }) => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [_, setLocalMode] = useLocalStorageState("localMode");
  const { navArr, secondNavArr, mobileNavArr } = useLinkList();
  const [visible, setVisible] = useSafeState(false);

  const modeOptions = ["#058F85", "#7D88BD", "#93C4C8"];

  useEventListener(
    "mousewheel",
    (event) => {
      event = event || window.event;
      setNavShow!(event.wheelDeltaY > 0);
    },
    { target: document.body }
  );

  useUpdateEffect(() => {
    setLocalMode(mode);
    for (const type of modeMapArr) {
      bodyStyle.setProperty(type, modeMap[type as keyof typeof modeMap][mode!]);
    }
  }, [mode]);

  return (
    <>
      <nav className={classNames(styles.nav, { [styles.hiddenNav]: !navShow })}>
        <div className={styles.navContent}>
          {/* 主页 */}
          <div className={styles.homeBtn} onClick={() => navigate("/")}>
            <HomeOutlined />
          </div>

          {/* 后台管理 */}
          <div
            className={styles.adminBtn}
            onClick={() => {
              message.info("尽情期待");
            }}
          >
            <SettingOutlined />
          </div>

          {/* 黑暗模式切换 */}
          <div className={styles.modeBtn}>
            <BgColorsOutlined />
            <div className={styles.modeOpions}>
              {modeOptions.map((backgroundColor, index) => (
                <div className={styles.modeOpionsItem} key={index}>
                  <div
                    style={{ backgroundColor }}
                    className={classNames(
                      styles.modeItem,
                      styles[`modeItem${index}`]
                    )}
                    onClick={() => setMode?.(index)}
                  >
                    <CheckOutlined
                      style={{ display: mode === index ? "block" : "none" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 文章单独按钮 */}
          <div className={styles.articlesBtn}>
            文章
            <div className={styles.articelsSecond}>
              {secondNavArr.map((item, index) => (
                <div className={styles.linkItem} key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.sedActive : styles.articelsSecondItem
                    }
                    to={item.to}
                    key={index}
                  >
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>

          {/* 其他按钮 */}
          {navArr.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.navActive : styles.navBtn
              }
              to={item.to}
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <div className={styles.mobileNavBtn} onClick={() => setVisible(true)}>
        <MenuOutlined />
      </div>
      <Drawer
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
        className="mobile-nav-box"
      >
        <div className={styles.mobileNavBox}>
          {mobileNavArr.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.mobileNavActive : styles.mobileNavItem
              }
              to={item.to}
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
          {modeOptions.map((backgroundColor, index) => (
            <div
              key={index}
              style={{ backgroundColor }}
              className={classNames(
                styles.modeItem,
                styles[`modeItem${index}`]
              )}
              onClick={() => setMode?.(index)}
            >
              {mode === index && <CheckOutlined />}
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default connect(
  (state: storeState) => ({
    navShow: state.navShow,
    mode: state.mode,
  }),
  { setNavShow, setMode }
)(Nav);
