import Search from "@/components/searchbar";

export default function BrowseHeader() {

    const sections = [
        "New Releases",
        "Toys",
        "Games",
        "Movies",
    ]

    const subsections = [
        "Gift Cards",
        "Track Order",
        "Customer Service",
    ]

    return (
        <div className={"flex h-[200px] w-screen"}>
            <div className={"fixed w-[150px] items-center justify-center pl-4"}>
                <p className={"font-semibold text-2xl"}>Mobile Toys</p>
            {/*    mobile toys text*/}
            </div>
            <div className={"flex flex-col w-screen items-center z-30"}>
                    <div className={""}>
                        <Search />
                    </div >
                    <div className={"flex space-x-5"}>
                        {subsections.map((subsection) => {
                            return (
                                <>
                                    <button className={""}>{subsection}</button>
                                </>
                            )})
                        }
                    </div>
                    <div className={"flex space-x-5"}>
                    {sections.map((section) => {
                        return (
                            <>
                                <button>{section}</button>
                            </>
                        )})
                    }
                    </div>
            </div>
            <div className={"fixed w-screen text-right items-center justify-center pr-4"}>
                <button>Cart svg</button>
            </div>
        </div>
    )
}