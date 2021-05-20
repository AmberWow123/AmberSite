import "./aboutList.scss"

export default function AboutList({title}) {
    return (
        // list (li) out each argument that is passed in
        <li className="aboutList">
            {title}
        </li>
    )
}
