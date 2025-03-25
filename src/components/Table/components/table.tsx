interface ITable<T extends Record<string, string | number | boolean>> {
    data: T[];
}

const table = <T extends Record<string, string | number | boolean>,>({ data }: ITable<T>) => {
    if (data.length === 0) return <p>No data available</p>;

    console.log(data)
    return (
        <div className="table">
            <div className="table__header__row">
                {Object.keys(data[0]).map((key) => (
                    <div key={key} className="table__header">{key}</div>
                ))}
            </div>
            <div className="table__body">
                {data.map((row, rowIndex) => (
                    <div className="table__row__container">
                        <div className="table__row" key={rowIndex}>

                            {Object.entries(row).map(([key, value]) => (
                                <div key={key} className="table__cell">{String(value)}</div>
                            ))}
                        </div>
                        {rowIndex !== data.length - 1 && <div className="table__divider"/>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default table