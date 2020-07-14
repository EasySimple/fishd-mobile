import React, { Component } from 'react';
import { Button, Popover } from 'ppfish';
import { hashHistory } from 'react-router';
import './index.less';

export default class Home extends Component {
  goStart = () => {
    const currentLang = window.$lang;
    hashHistory.push(`/${currentLang}/components/quickStart`);
  };

  render() {
    return (
      <div className="u-home">
        <div className="u-header">
          <div className="u-info">
            <h3 className="u-title">Fishd Mobile</h3>
            <p className="u-desc">基于 React 实现的高质量的企业级 UI 组件库</p>
            <div className='u-action-list'>
              <Button className="u-action" type="primary" size="large" onClick={this.goStart}>
                开始探索
              </Button>
              <Popover
                placement="bottom"
                content={
                  <img className="u-qrcode" src="https://nos.netease.com/ysf/5644281f609b5bb61c566b9cb7d43d31.png" />
                }
                trigger="click"
              >
                <Button className="u-action" size="large">
                  扫码演示
                </Button>
              </Popover>
            </div>
          </div>
          <img className="u-logo" src="//ysf.nosdn.127.net/kornketgjocydxcldzywnyfdtclwugdl" alt="logo" />
        </div>
      </div>
    );
  }
}
