export default function SectionName({ name, side }: { name: string, side: string }) {
    if (side == "left") {
        return (<div className="flex justify-evenly">
            <h1 className="text-3xl font-bold mb-4 text-center">{name}</h1>
            <hr className="border-2 border-white mx-5 flex-grow m-5" />
        </div>)
    } else {
        return (<div className="flex justify-evenly">
            <hr className="border-2 border-white mx-5 flex-grow m-5" />
            <h1 className="text-3xl font-bold mb-4 text-center">{name}</h1>
        </div>)

    }
}