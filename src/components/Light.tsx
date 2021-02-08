interface Props {
    color: string
    onClick?: React.MouseEventHandler<HTMLDivElement>
    active?: boolean
}

const Light = (props: Props) => {
    return (
        <div
            className="light"
            style={{ backgroundColor: props.color, opacity: props.active ? 1 : 0.4 }}
            onClick={props.onClick}
        />
    )
}

export default Light