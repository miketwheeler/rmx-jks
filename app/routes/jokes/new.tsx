

export default function JokesNewRoute() {
    return (
        <div>
            <p>Add your own hilarious joke</p>
            <form method="post">
                <div className="mt-1">
                    <label>Name: <input type="text" name="name" className="h-2" /></label>
                </div>
                <div className="mt-1">
                    <label>Content: <input type="text" name="content" className="h-2" /></label>
                </div>
                <div className="mt-1">
                    <button type="submit" className="button">Submit</button>
                </div>
            </form>
        </div>
    )
}