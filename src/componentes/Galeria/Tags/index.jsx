import styled from 'styled-components';
import tags from './tags.json'

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTitulo = styled.p`
    color: #D9D9D9;
    font-size: 20px;
    margin: 0;
`

const Tag = styled.button`
    font-size: 20px;
    color: white;
    background-color: #29282D;
    border-radius: 10px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: border-color .3s ease;
    padding: 12px;
    box-sizing: border-box;
    
    &:hover {
        border-color: #C98CF1;
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    /* justify-content: end; */
`

const Tags = ({ setTag }) => {
    return (
        <TagsContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            <Div>
                {tags.map(tag => <Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Tag>)}
            </Div>
        </TagsContainer>
    )
}

export default Tags;