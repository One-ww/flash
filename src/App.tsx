import './global.custom.scss';

import { useLocalStorageState, useMount } from 'ahooks';
import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';

import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Nav from '@/components/Nav';

import styles from './App.scss';
import BackToTop from './components/BackToTop';
import { setMode } from './redux/actions';
import { storeState } from './redux/interface';

interface Props {
  mode?: number;
  setMode?: Function;
}

const App: React.FC<Props> = ({ mode, setMode }) => {
  const bgClasses = [styles.bg0, styles.bg1, styles.bg2];
  const [localMode] = useLocalStorageState('localMode');

  useMount(() => {
    if (localMode !== undefined) {
      setMode?.(localMode);
    }
  });

  return (
    <div className={classNames(styles.AppBox, bgClasses[mode!])}>
      <Nav />
      <Main />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default connect(
  (state: storeState) => ({
    mode: state.mode
  }),
  { setMode }
)(App);
