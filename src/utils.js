


export const getClickInt = (e, name) => {
    return parseInt(e.target.id.replace(name, ''),10);
}

export const getClickStr = (e, name) => {
    return e.target.id.replace(name, '');
}


export const getClickTitleRemove = (e) => {
    return getClickInt(e,'remove-');
}

export const getClickPager = (e) => {
    return getClickInt(e,'pager-');
}

export const getClickSort = (e) => {
    return getClickStr(e,'title-');
}


export const getClickEdit = (e) => {
    return getClickInt(e,'edit-');
}

