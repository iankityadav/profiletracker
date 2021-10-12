import icon from "./Icons"
function Add(props) {
    const addProfile = e => {
        props.action(e.target.profileId.value)
        e.preventDefault()
    }
    return (
        <div>
            <div className="header">
                <div className="icon">
                    {icon["person-bounding-box"]}
                </div>
                <div>Profile Tracker</div>
            </div>
            <form className="" onSubmit={addProfile}>
                {icon["person-plus"]}
                <label className="p-2" htmlFor="profileId">Enter Profile Id</label>
                <input type="text" name="profileId" />
                <button type="submit">Track</button>
            </form>
        </div>
    )
}
export default Add;