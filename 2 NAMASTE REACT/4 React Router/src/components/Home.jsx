const Home  = () => {
    return (
        <div>
            <h1 className="font-extrabold text-3xl text-black text-center m-8 underline">HOME</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                {Array(12).fill("").map((index) => {
                    return (
                        <div key={index} className="w-64 h-52 bg-gray-400 ">

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home