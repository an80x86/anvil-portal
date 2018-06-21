import React, { Component } from 'react';
import PreloaderIcon from 'react-preloader-icon';
import Oval from 'react-preloader-icon/loaders/Oval';
import { MyTable } from './mytable';
import { MyPages } from './mypages';

export class MyGrid extends Component {
    render() {
        return (

            <div>
                <MyTable style={{display: !this.props.loading ? 'block' : 'none' }} data={this.props.response} /> 
                <MyPages style={{display: !this.props.loading ? 'block' : 'none' }} seat={this.props.seat} 
                  pages={this.props.pages} 
                  onClickPrev={this.props.onClickPrev} 
                  onClick={this.props.onClick}
                  onClickNext={this.props.onClickNext} />
                <PreloaderIcon style={{display: this.props.loading ? 'block' : 'none' }} loader={Oval} size={30} strokeWidth={8} strokeColor="#006064" duration={0} />
            </div>
        );
    }
}

export * from './mypages';
export * from './mytable';