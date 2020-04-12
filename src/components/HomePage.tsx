import React from 'react'
import FetchUrl from './FetchUrl'

function HomePage() {

    const fetchedData = FetchUrl('https://jsonplaceholder.typicode.com/photos')

    const allPhotos = fetchedData.data.filter((i: { id: number }) => i.id < 9)
    const photos = allPhotos.map((item: { id: any, url: string, title: string }) => {
        return (
            <div className="cards">
                <div className="card">
                    <img src={item.url} alt="img_colors" />
                    <p className="item-title">{item.title}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="homepage">
            <h1 className="title">Home Page ~ Gallery</h1>
            <div>{fetchedData.isLoading ? <h2>Loading...</h2> : photos}</div>
        </div>
    )
}

export default HomePage