import { TagContainer } from "./style";

export type Props = {
    size?: 'small' | 'big';
    children: string
}
const Tag = ({children, size= 'big'} : Props) => {
    return (
        <TagContainer size={size}>
            {children}
        </TagContainer>
    )
}
export default Tag;