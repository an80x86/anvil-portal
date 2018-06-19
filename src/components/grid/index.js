import React, { Component } from 'react';
import PreloaderIcon from 'react-preloader-icon';
import Oval from 'react-preloader-icon/loaders/Oval';
import { MyTable } from './mytable';
import { MyPages } from './mypages';

export class MyGrid extends Component {
    render() {
        return (

            <div>
                <PreloaderIcon style={{display: this.props.loading ? 'block' : 'none' }} loader={Oval} size={30} strokeWidth={8} strokeColor="#006064" duration={800} /> 
                <MyTable data={this.props.response} /> 
                <MyPages seat={this.props.seat} 
                  pages={this.props.pages} 
                  onClickPrev={this.props.onClickPrev} 
                  onClick={this.props.onClick}
                  onClickNext={this.props.onClickNext} />
            </div>
        );
    }
}

export * from './mypages';
export * from './mytable';