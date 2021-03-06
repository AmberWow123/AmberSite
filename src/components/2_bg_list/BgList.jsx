import "./bgList.scss"

export default function BgList({title, active, setSelected, id}) {
    return (
        // list (li) out each argument that is passed in
        // if active, then it's "aboutList active"
        <li className={active ? "aboutList active" : "aboutList"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
