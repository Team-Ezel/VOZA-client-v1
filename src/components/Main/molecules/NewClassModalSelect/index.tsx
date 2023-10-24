import Category from "../../atoms/Modal/Category"
import ClassName from "../../atoms/Modal/ClassName"
import Profile from "../../atoms/Modal/Profile"

function NewClassModalSelect() {

    return {
        'category'() { return <Category /> },
        'name'() { return <ClassName /> },
        'profile'() { return <Profile /> },
    }
}

export default NewClassModalSelect;