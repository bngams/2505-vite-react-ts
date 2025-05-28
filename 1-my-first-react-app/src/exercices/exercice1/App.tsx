import Greeting from "./Greeting"
import GreetingPerson from "./GreetingPerson"
import type { Person } from "./Person"

const p: Person = {
    firstName: "John",
    lastName: "Doe",
    isStudent: true
}

export default function App() {
    return (
        <>
            <Greeting name="John" />
            <GreetingPerson person={p}  displayMode={'full'} ></GreetingPerson>
        </>
    )
} 