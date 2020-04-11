import { useEffect, useState } from 'react'

interface Data {
    data: any
    isLoading: boolean
}

function FetchUrl(url: string) {

    const [data, setData] = useState<Data>({ data: [], isLoading: false })

    useEffect(() => {
        setData({ ...data, isLoading: true })

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData({data: data, isLoading: false})
            })
            .catch(err => console.log(err))
    }, [])

    return data
}

export default FetchUrl