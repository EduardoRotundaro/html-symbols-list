export const If = ({condition, children}) => {
    if(!!condition) return children;
    return null;
}

export const IfElse = ({condition, thenRender, elseRender}) => {
    if(!!condition) return thenRender;
    return elseRender;
}
