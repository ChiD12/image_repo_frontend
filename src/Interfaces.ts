export interface Item {
    id: number
    name: string
}

export interface ItemResponse {
    items : Item[]
}

export interface PageProps {
    clickImage(imageName : string): void
    imageClicked: string
}

export interface ModalProps {
    handleClose(): void
    clickImage(imageName : string): void
}