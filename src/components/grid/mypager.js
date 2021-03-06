import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export class MyPager extends Component {
    render() {
        return (
            <Pagination style={{'float':'right'}}>
            {
            this.props.seat === 1 ? 
            <PaginationItem disabled><PaginationLink previous tag="button" onClick={this.props.onClickPrev}>Prev</PaginationLink></PaginationItem>
                :
            <PaginationItem><PaginationLink previous tag="button" onClick={this.props.onClickPrev}>Prev</PaginationLink></PaginationItem>
            }
            {
            this.props.pages && this.props.pages.length > 0 ? 
            this.props.pages.map( item => (
                item === this.props.seat ? 
                <PaginationItem key={item} active><PaginationLink id={`pager-${item}`} tag="button" key={item} onClick={this.props.onClick}>{item}</PaginationLink></PaginationItem> 
                : 
                <PaginationItem key={item}><PaginationLink  id={`pager-${item}`} tag="button" key={item} onClick={this.props.onClick}>{item}</PaginationLink></PaginationItem>
            )) : null
            }
            {
            this.props.seat > this.props.pages.length-1 ? 
            <PaginationItem disabled><PaginationLink next tag="button" onClick={this.props.onClickNext}>Next</PaginationLink></PaginationItem>
                :
            <PaginationItem><PaginationLink next tag="button" onClick={this.props.onClickNext}>Next</PaginationLink></PaginationItem>
            }
            </Pagination>
        );
    }
}
