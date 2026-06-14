import useWindowStore from "#store/Window.js";

const WindowControls = ({target}) => {
    const {closeWindow} = useWindowStore();
    return (
        <div id={`window-controls`} className={`flex items-center gap-2`}>
            <div className={`close`} onClick={()=>closeWindow(target)}></div>
            <div className={`minimize`}/>
            <div className={`maximize`}/>
        </div>
    );
};

export default WindowControls;