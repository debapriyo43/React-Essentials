export default function Tabs({buttons,children,buttonsContainer}) {
    const ButtonsContainer=buttonsContainer || 'div';
    return(
        <>
            <ButtonsContainer>
            {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}