export interface Item {
    id: number
    name: string
    likes: number
}

export interface ItemResponse {
    items : Item[]
}

export interface LikedImagesResponse {
    likedIds: number[]
}

export interface PageProps {
    clickImage(imageName : string): void
    handleOpenGraph(img: string): void
    handleId(): string
    imageClicked: string
}

export interface ModalProps {
    handleClose(): void
    clickImage(imageName : string): void
}

export interface Lines {
    data: string[]
}

export interface GraphModalProps {
    handleClose(): void
    clickImage(imageName : string): void
    imgToGraph: string
}

export interface CustomProps {
    likes: number
    handleId(): string
    imgId: number
    didUserLikeImage: boolean
}

export interface Response {
    data: ItemResponse
}