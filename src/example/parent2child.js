const Parent = () => {
    const hello = "hello from Parents"
    return (
        <div className="Name">
            <Child hay={hello} />
        </div>
    );
}


const Child = ({ hay }) => {
    return (
        <div className="Child">
            Parents say {hay}
        </div>
    );
}

export default Parent;